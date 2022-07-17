import { useContext } from "react"
import { StatsContext } from "../../providers/StatsProvider"
import numeral from 'numeral'

import styles from './Currency.module.css'

export default function Currency() {
    const [stats, setStats] = useContext(StatsContext)

    return (
        <div className={styles.currencyWrapper}>
            <div>
                CURRENCY: {numeral(stats.currency).format('0.0a')}
            </div>
        </div>
    )
}