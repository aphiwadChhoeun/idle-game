import { useContext } from "react"
import { StatsContext } from "../../providers/StatsProvider"

export default function Upgrade() {
    const [stats, setStats] = useContext(StatsContext)

    const clickHandler = (step: number) => {
        return () => {
            setStats({
                ...stats,
                earnSpeed: stats.earnSpeed + step
            })
        }
    }

    return (
        <div>
            <button onClick={clickHandler(1)}>Upgrade</button>
            <button onClick={clickHandler(-1)}>Downgrade</button>
        </div>
    )
}