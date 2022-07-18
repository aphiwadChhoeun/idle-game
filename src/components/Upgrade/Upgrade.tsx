import { useUpgrade } from "./useUpgrade"
import { formatNumber } from "../../libs/helpers"

export type UpgradeProps = {
    workerIndex: number
}

export default function Upgrade({ workerIndex }: UpgradeProps) {
    const [canBuy, upgradeCost, buyUpgrade] = useUpgrade(workerIndex)

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
        </div>
    )
}