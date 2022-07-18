import { useMemo } from 'react'
import { formatNumber } from '../../libs/helpers'
import { clickSound } from '../../libs/sounds'
import { useCapacity } from '../Capacity/useCapacity'
import styles from './Hire.module.css'
import { useHire } from './useHire'

export default function Hire() {
    const [canHire, hireCost, hire] = useHire()
    const [capacity, totalCapacity] = useCapacity()
    const showHire = useMemo(() => {
        return capacity < totalCapacity
    }, [capacity, totalCapacity])

    const clickHandler = () => {
        return () => {
            clickSound()
            hire()
        }
    }

    return (
        <>
            {showHire ? (
                <div className={styles.hireWrapper}>
                    <button disabled={!canHire} onClick={clickHandler()}>
                        <div>HIRE</div>
                        <div className="sub-text">{formatNumber(hireCost)}</div>
                    </button>
                </div>) : null}
        </>
    )
}