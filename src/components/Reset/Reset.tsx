import { useContext } from "react"
import { StatsContext, defaultStats } from "../../providers/StatsProvider"


export default function Reset() {
    const [stats, setStats] = useContext(StatsContext)

    const clickHandler = () => {
        return () => {
            setStats(defaultStats)
        }
    }

    return (
        <div className="section">
            <button onClick={clickHandler()}>Reset</button>
        </div>
    )
}