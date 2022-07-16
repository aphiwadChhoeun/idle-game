import Currency from '../Currency/Currency'
import styles from './Inventory.module.css'

export default function Inventory() {
    return (
        <div className={styles.inventoryWrapper}>
            <Currency />
        </div>
    )
}