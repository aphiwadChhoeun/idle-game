import { motion, useAnimationFrame } from "framer-motion"
import { useContext, useState } from "react"
import { StatsContext } from "../../providers/StatsProvider"
import ActionAnimation from "../Animation/ActionAnimation"
import styles from './MainAction.module.css'

const TIME_PER_FRAME = 1 / 60

export default function MainAction() {
    const [stats, setStats] = useContext(StatsContext)
    const [toggle, setToggle] = useState(false)

    const onClick = () => {
        return () => {
            setToggle(!toggle)
        }
    }

    let frame = 0
    useAnimationFrame(() => {
        if (toggle) {
            if (frame >= 1) {
                setStats({
                    ...stats,
                    currency: stats.currency + stats.earnSpeed
                })
                frame = 0
            }

            frame += TIME_PER_FRAME
        }
    })

    return (
        <div className={styles.mainActionWrapper}>

            <ActionAnimation isActive={toggle} />

            <motion.button
                whileHover={{
                    scale: 1.1,
                    transition: { duration: .1 },
                }}
                whileTap={{
                    scale: .95,
                    transition: { duration: .1 }
                }}
                onClick={onClick()}>
                {toggle ? 'PAUSE' : 'START'}
            </motion.button>
        </div >
    )
}