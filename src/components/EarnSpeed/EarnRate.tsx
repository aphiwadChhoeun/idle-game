import { useEarnRate } from "./useEarnRate"


export default function EarnRate() {
    const totalEarnRate = useEarnRate()

    return (
        <div>
            RATE: {totalEarnRate}/s
        </div>
    )
}