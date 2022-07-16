import { motion, useAnimationControls } from "framer-motion"
import { useContext, useRef, useState } from "react"
import { CurrencyContext } from "../../providers/CurrencyProvider"
import { SpeedContenxt } from "../../providers/SpeedProvider"
import styles from './MainAction.module.css'

type MainActionProps = {
    text: string,
    clickHandler: Function
}

export default function MainAction({ text, clickHandler }: MainActionProps) {
    const [currency, setCurrency] = useContext(CurrencyContext)
    const [speed, setSpeed] = useContext(SpeedContenxt)
    const [isRunning, setIsRunning] = useState(false)
    const meter = useRef(null)

    const maxDuration = 3

    const animation = useAnimationControls()

    const onClick = () => {
        return async () => {
            setIsRunning(true)
            await animation.start({
                strokeDashoffset: [326, 0],
                transition: { duration: maxDuration - (speed * maxDuration) },
            })
            animation.set({
                strokeDashoffset: 326
            })

            setIsRunning(false)
            setCurrency(parseInt(currency) + 1)
            clickHandler()
        }
    }

    return (
        <div className={styles.mainActionWrapper}>
            <div className={styles.meterWrapper}>
                <svg style={{ width: '114px', height: '114px', margin: '1em', display: 'grid', placeItems: 'center' }}>
                    <circle className={styles.meterBg} cx="57" cy="57" r="52" />
                    <motion.circle ref={meter} animate={animation} className={styles.meter} cx="57" cy="57" r="52" strokeDasharray={326} strokeDashoffset={326} />
                </svg>
            </div>
            <motion.button
                whileHover={{
                    scale: 1.1,
                    transition: { duration: .1 },
                }}
                whileTap={{
                    scale: .95,
                    transition: { duration: .1 }
                }}
                disabled={isRunning ? true : false}
                onClick={onClick()}>{text}</motion.button>
        </div >
    )
}

function convertRange(value: number, r1: Array<number>, r2: Array<number>): number {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}