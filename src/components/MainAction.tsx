import { motion } from "framer-motion"
import { useContext } from "react"
import { CurrencyContext } from "../providers/CurrencyProvider"
import styles from './MainAction.module.css'

type MainActionProps = {
    clickHandler: Function
}

export default function MainAction({ clickHandler }: MainActionProps) {
    const [currency, setCurrency] = useContext(CurrencyContext)

    const onClick = () => {
        return () => {
            setCurrency(parseInt(currency) + 1)
            clickHandler()
        }
    }

    return (
        <div className={styles.mainActionWrapper}>
            <motion.button
                whileHover={{
                    scale: 1.1,
                    transition: { duration: .1 },
                }}
                whileTap={{
                    scale: .95,
                    transition: { duration: .1 }
                }}
                onClick={onClick()}>Action</motion.button>
        </div>
    )
}