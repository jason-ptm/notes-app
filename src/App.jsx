import './App.css';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

// components
import SideVar from './components/side-var/SideVar';
import Cards from './components/cards/Cards';
import AddCard from './components/addCard/AddCard';

function App() {

  const [currentCard, setCurrentCard] = React.useState({})

  const [cards, setCards] = React.useState(JSON.parse(localStorage.getItem('cards')) || [])

  const [options, setOptions] = React.useState({
    darkMode: true,
    addCardFlag: false,
    addCardWindow: () => setOptions((prevVal) => ({
      ...prevVal,
      addCardFlag: !prevVal.addCardFlag
    }))
  })

  React.useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  const editCard = (editedCard) => {
    setCards(prevCards => prevCards.map(card => {
      if (currentCard.id && card.id === currentCard.id) return editedCard
      return card
    }))
  }

  const addCard = (card) => {
    setCards(prevCards => [...prevCards, card])
  }

  const deleteCard = (id) => {
    setCards(prevCards => prevCards.filter(card => (card.id !== id)))
  }

  return (
    <div className="App">
      <SideVar
        clickDarkMode={() => setOptions(prevOptions => ({
          ...prevOptions,
          darkMode: !prevOptions.darkMode
        }))}
        options={options}
        setCurrentCard={setCurrentCard} />
      <div id="comps-cont" className={`${options.darkMode ? " dark" : ""}`}>
        <div className="cards">
          {
            cards.length > 0 ?
              cards.map(card => {
                return <Cards
                  key={card.id}
                  card={card}
                  addCardWindow={options.addCardWindow}
                  setCurrentCard={setCurrentCard} />
              })
              :
              <div className="warning">
                No hay notas registradas!
              </div>
          }
        </div>
        <AnimatePresence>
          {
            options.addCardFlag &&
            <AddCard
              addCardWindow={() => {
                setCards(prevCards => {
                  return prevCards.push(currentCard)
                })
              }}
              editCard={editCard}
              addCard={addCard}
              deleteCard={deleteCard}
              card={currentCard}
              options={options} />
          }
        </AnimatePresence>

      </div>
    </div>
  );
}

export default App;
