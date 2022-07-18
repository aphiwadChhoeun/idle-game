import { formatNumber } from '../../libs/helpers'
import styles from './BuyCapacity.module.css'
import { useBuyCapacity } from './useBuyCapacity'

export default function BuyCapacity() {
    const [canBuy, buyCost, buyCapacity] = useBuyCapacity()

    const clickHandler = () => {
        return () => {
            buyCapacity()
        }
    }

    return (
        <div className={styles.wrapper}>
            <button disabled={!canBuy}
                onClick={clickHandler()}>
                <div>Buy Capacity</div>
                <div className="sub-text">{formatNumber(buyCost)}</div>
            </button>
        </div>
    )
}