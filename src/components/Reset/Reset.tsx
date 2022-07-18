import { useContext } from "react"
import { clickSound } from "../../libs/sounds"
import { StatsContext, defaultStats } from "../../providers/StatsProvider"


export default function Reset() {
    const [stats, setStats] = useContext(StatsContext)

    const clickHandler = () => {
        return () => {
            clickSound()
            setStats(defaultStats)
        }
    }

    return (
        <div className="section">
            <button onClick={clickHandler()}>Reset</button>
        </div>
    )
}