import './Cards.css'

function Cards(props) {
    return (
        <div
            className={`Card ${props.card.themeColor}`}
            onClick={() => {
                props.setCurrentCard(() => {
                    return props.card
                })
                props.addCardWindow()
            }}>
            {props.card.title && <h2 className="title">
                {props.card.title.length > 15 ? `${props.card.title.slice(0, 15)}...` : props.card.title}

            </h2>}
            {props.card.note && <p className="card-text">
                {props.card.note.length > 231 ? `${props.card.note.slice(0, 231)}...` : props.card.note}
            </p>}
        </div>

    )
}

export default Cards