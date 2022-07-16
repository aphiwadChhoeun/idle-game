import { motion, useAnimationControls } from "framer-motion"
import { useContext, useEffect } from "react"
import { CurrencyContext } from "../../providers/CurrencyProvider"

import styles from './Currency.module.css'

export default function Currency() {
    const [currency, setCurrency] = useContext(CurrencyContext)
    const animation = useAnimationControls()

    const variants = {
        jump: {
            opacity: [0, 1, 0],
            y: [0, -25, 0],
            transition: { duration: .3 },
        }
    }

    useEffect(() => {
        animation.start('jump')
    }, [currency])

    return (
        <div className={styles.currencyWrapper}>
            <div>
                CURRENCY: {currency}
            </div>
            <motion.div
                className={styles.bumpNumber}
                animate={animation}
                variants={variants}>
                +1
            </motion.div>
        </div>
    )
}