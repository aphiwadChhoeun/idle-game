import { useContext } from "react"
import { StatsContext } from "../../providers/StatsProvider"
import { formatNumber } from "../../libs/helpers"

import styles from './Currency.module.css'

export default function Currency() {
    const [stats, setStats] = useContext(StatsContext)

    return (
        <div className={styles.currencyWrapper}>
            <div>
                CURRENCY: {formatNumber(stats.currency)}
            </div>
        </div>
    )
}