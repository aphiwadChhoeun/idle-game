import { formatNumber } from '../../libs/helpers'
import { clickSound } from '../../libs/sounds'
import styles from './BuyCapacity.module.css'
import { useBuyCapacity } from './useBuyCapacity'

export default function BuyCapacity() {
    const [canBuy, buyCost, buyCapacity] = useBuyCapacity()

    const clickHandler = () => {
        return () => {
            clickSound()
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