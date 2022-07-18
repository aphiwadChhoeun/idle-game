import Currency from '../Currency/Currency'
import EarnRate from '../EarnSpeed/EarnRate'
import styles from './Inventory.module.css'

export default function Inventory() {
    return (
        <div className={styles.inventoryWrapper}>
            <div className={styles.statsWrapper}>
                <Currency />
                <EarnRate />
            </div>
        </div>
    )
}