import { useUpgrade } from "./useUpgrade"
import { formatNumber } from "../../../libs/helpers"
import type { WorkerProps } from '../Worker'

export default function Upgrade({ workerIndex }: WorkerProps) {
    const [canBuy, upgradeCost, upgradeStat, buyUpgrade] = useUpgrade(workerIndex)

    const clickHandler = () => {
        return () => {
            buyUpgrade()
        }
    }

    return (
        <div className="section">
            <button disabled={!canBuy} onClick={clickHandler()}>
                <div>UPGRADE</div>
                <div className="sub-text">{formatNumber(upgradeCost)}</div>
            </button>

            <div>+{formatNumber(upgradeStat)}</div>
        </div>
    )
}