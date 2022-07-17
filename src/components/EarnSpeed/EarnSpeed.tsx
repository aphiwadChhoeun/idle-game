import { useContext } from "react"
import { StatsContext } from "../../providers/StatsProvider"

export default function EarnSpeed() {
    const [stats, setStats] = useContext(StatsContext)

    return (
        <div>
            SPEED: {stats.earnSpeed}/s
        </div>
    )
}