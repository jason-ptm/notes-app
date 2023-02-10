import './Cards.css'
import { motion } from "framer-motion"

function Cards(props) {
    const cardsVariants = {
        hidden: {
            opacity: 0,
            x: -20,
            y: -20
        },
        visible: {
            opacity: 1,
            x: 1,
            y: 1,
            transition: {
                duration: .8,
            }
        },
        exit: {
            opacity: 0,
            scale: 0
        }
    }
    return (
        <motion.div
            whileHover={{
                scale: 1.03
            }}
            variants={cardsVariants}
            exit='exit'
            className={`Card ${props.card.themeColor}`}
            onClick={() => {
                props.setCurrentCard(() => {
                    return props.card
                })
                props.addCardWindow()
            }}>
            {props.card.title && <h2 className="title">
                {
                    props.card.title.length > 15 ?
                        `${props.card.title.slice(0, 15)}...` :
                        props.card.title
                }

            </h2>}
            {props.card.note && <p className="card-text">
                {
                    props.card.note.length > 231 ?
                        `${props.card.note.slice(0, 231)}...` :
                        props.card.note
                }
            </p>}
        </motion.div>

    )
}

export default Cards