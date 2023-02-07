import './Cards.css'
import { motion } from "framer-motion"

function Cards(props) {
    return (
        <motion.div
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
        </motion.div>

    )
}

export default Cards