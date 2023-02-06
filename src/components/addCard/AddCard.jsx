import './AddCard.css'
import React from 'react'
import uuid from 'react-uuid';

function AddCard(props) {

    const [currentCard, setCurrentCard] = React.useState(props.card)

    React.useEffect(() => {
        document.querySelectorAll('.inp').forEach(e => {
            e.style.height = "auto"
            e.style.height = `${e.scrollHeight}px`
        })
    }, [currentCard])

    const [colors, setColors] = React.useState(false)

    const handlerThemeColor = (newTheme) => setCurrentCard(prevCard => ({
        ...prevCard,
        themeColor: newTheme
    }))

    const handlerChange = (event) => {
        const { value, name } = event.target
        setCurrentCard(prevCard => ({
            ...prevCard,
            [name]: value
        }))
    }

    const handlerExitCard = () => {
        props.options.addCardWindow()
        currentCard.lastEdited = new Date().toLocaleDateString()
        if (!currentCard.id && (currentCard.title || currentCard.note)) {
            if (!currentCard.themeColor) currentCard.themeColor = "gray"
            props.addCard({
                ...currentCard,
                id: uuid()
            })
        }
        else if (props.card !== currentCard) {
            props.editCard(currentCard)
        }
    }

    const deleteCard = () => {
        if(window.confirm('Quieres borrar la nota?')){
            props.deleteCard(currentCard.id)
            props.options.addCardWindow()
        }
    }

    return (
        <div
            className={`AddCard open`}>
            <form
                className="form"
                onSubmit={e => e.preventDefault()}>
                <div className="inps">
                    <textarea
                        id='title'
                        placeholder='Título:'
                        className='inp'
                        spellCheck="false"
                        name="title"
                        onChange={handlerChange}
                        defaultValue={currentCard.title}></textarea>
                    <textarea
                        id="text"
                        placeholder='Nota:'
                        className='inp'
                        spellCheck="false"
                        name='note'
                        onChange={handlerChange}
                        defaultValue={currentCard.note}></textarea>
                </div>
                <div className="btns">
                    {
                        props.card.lastEdited &&
                        <span className="date">
                            Editado última vez: {props.card.lastEdited}
                        </span>
                    }
                    <div className={`palette${colors ? " open" : ""}`}>
                        {<i className="fa-solid fa-palette" id='icon' onClick={() => setColors(prevFlag => !prevFlag)}></i>}
                        <div className="colors">
                            <span className="color" id='cancel' onClick={() => setColors(false)}>
                                <i className="fa-solid fa-x"></i>
                            </span>
                            <input
                                type="radio"
                                name="themeColor"
                                className={`color ${currentCard.themeColor === 'blue' ? ' select' : ''}`}
                                value='blue'
                                id='blue'
                                onChange={e => handlerThemeColor(e.target.value)}
                            />
                            <input
                                type="radio"
                                name="themeColor"
                                className={`color ${currentCard.themeColor === 'green' ? ' select' : ''}`}
                                value='green'
                                id='green'
                                onChange={e => handlerThemeColor(e.target.value)}
                            />
                            <input
                                type="radio"
                                name="themeColor"
                                className={`color ${currentCard.themeColor === 'red' ? ' select' : ''}`}
                                value='red'
                                id='red'
                                onChange={e => handlerThemeColor(e.target.value)}
                            />
                            <input
                                type="radio"
                                name="themeColor"
                                className={`color ${currentCard.themeColor === 'gray' ? ' select' : ''}`}
                                value='gray'
                                id='gray'
                                onChange={e => handlerThemeColor(e.target.value)}
                            />
                            <input
                                type="radio"
                                name="themeColor"
                                className={`color ${currentCard.themeColor === 'yellow' ? ' select' : ''}`}
                                value='yellow'
                                id='yellow'
                                onChange={e => handlerThemeColor(e.target.value)}
                            />
                            <input
                                type="radio"
                                name="themeColor"
                                className={`color ${currentCard.themeColor === 'orange' ? ' select' : ''}`}
                                value='orange'
                                id='orange'
                                onChange={e => handlerThemeColor(e.target.value)}
                            />

                        </div>
                    </div>
                    {
                        props.card.lastEdited ? <i className="fa-solid fa-trash" onClick={deleteCard}></i> : ''
                    }
                    <button
                        className="btn"
                        onClick={props.options.addCardWindow}>
                        Descartar {props.card.lastEdited ? 'cambios' : 'nota'}
                    </button>
                </div>
                <div
                    className="close-btn"
                    onClick={handlerExitCard}
                >
                    <i className="fa-solid fa-x"></i>
                </div>
            </form>
        </div>
    )
}

export default AddCard