import { motion } from "framer-motion"
import styles from './ActionAnimation.module.css'

export default function ActionAnimation() {

    return (
        <div className={styles.meterWrapper}>
            <motion.div animate={{
                scale: [1, 1.5],
                transition: {
                    repeatType: 'reverse',
                    repeat: Infinity
                }
            }} className={styles.block}></motion.div>
        </div>
    )
}