import { formatNumber } from '../../libs/helpers'
import styles from './Hire.module.css'
import { useHire } from './useHire'

export default function Hire() {
    const [canHire, hireCost, hire] = useHire()

    const clickHandler = () => {
        return () => {
            hire()
        }
    }

    return (
        <div className={styles.hireWrapper}>
            <button disabled={!canHire} onClick={clickHandler()}>
                <div>HIRE</div>
                <div className="sub-text">{formatNumber(hireCost)}</div>
            </button>
        </div>
    )
}