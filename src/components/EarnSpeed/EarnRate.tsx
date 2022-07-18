import { formatNumber } from "../../libs/helpers"
import { useEarnRate } from "./useEarnRate"

export default function EarnRate() {
    const totalEarnRate = useEarnRate()

    return (
        <div>
            RATE: {formatNumber(totalEarnRate)}/s
        </div>
    )
}