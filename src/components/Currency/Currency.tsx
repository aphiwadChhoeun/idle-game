import { motion, useAnimationControls } from "framer-motion"
import { useContext, useEffect } from "react"
import { StatsContext } from "../../providers/StatsProvider"

import styles from './Currency.module.css'

export default function Currency() {
    const [stats, setStats] = useContext(StatsContext)
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
    }, [stats.currency])

    return (
        <div className={styles.currencyWrapper}>
            <div>
                CURRENCY: {stats.currency}
            </div>
            <motion.div
                className={styles.bumpNumber}
                animate={animation}
                variants={variants}>
                +{stats.earnSpeed}
            </motion.div>
        </div>
    )
}