import { useUpgrade } from "./useUpgrade"
import { formatNumber } from "../../../libs/helpers"
import { clickSound } from "../../../libs/sounds"
import type { WorkerProps } from '../Worker'

export default function Upgrade({ workerIndex }: WorkerProps) {
    const [canBuy, upgradeCost, upgradeStat, buyUpgrade] = useUpgrade(workerIndex)

    const clickHandler = () => {
        return () => {
            clickSound()
            buyUpgrade()
        }
    }

    return (
        <div style={{ display: 'grid', placeItems: 'center' }}>
            <button disabled={!canBuy} onClick={clickHandler()}>
                <div>UPGRADE</div>
                <div className="sub-text">{formatNumber(upgradeCost)}</div>
            </button>
        </div>
    )
}