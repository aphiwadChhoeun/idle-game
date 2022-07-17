import Currency from '../Currency/Currency'
import EarnSpeed from '../EarnSpeed/EarnSpeed'
import styles from './Inventory.module.css'

export default function Inventory() {
    return (
        <div className={styles.inventoryWrapper}>
            <div className={styles.statsWrapper}>
                <Currency />
                <EarnSpeed />
            </div>
        </div>
    )
}