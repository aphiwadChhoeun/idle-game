import { useAnimationFrame } from "framer-motion"
import { useContext, useState } from "react"
import { StatsContext } from "../../providers/StatsProvider"
import ActionAnimation from "../Animation/ActionAnimation"
import styles from './MainAction.module.css'

const TIME_PER_FRAME = 1 / 60
const UPDATE_STEP = 10

export default function MainAction() {
    const [stats, setStats] = useContext(StatsContext)

    let updateTick = 0
    useAnimationFrame(() => {
        if (updateTick > TIME_PER_FRAME * UPDATE_STEP) {
            updateTick = 0

            setStats({
                ...stats,
                currency: stats.currency + (stats.earnSpeed * TIME_PER_FRAME * UPDATE_STEP)
            })
        }

        updateTick += TIME_PER_FRAME
    })

    return (
        <div className={styles.mainActionWrapper}>

            <ActionAnimation isActive={true} />

        </div >
    )
}