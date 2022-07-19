import { useContext } from "react"
import { clickSound } from "../../libs/sounds"
import { StatsContext, defaultStats } from "../../providers/StatsProvider"


export default function Reset() {
    const [stats, setStats] = useContext(StatsContext)

    const confirmReset = () => {
        const confirm = window.confirm('This will erase your progress, are you sure?')
        if (confirm) {
            setStats(defaultStats)
        }
    }

    const clickHandler = () => {
        return () => {
            clickSound()

            confirmReset()
        }
    }

    return (
        <div className="section">
            <button onClick={clickHandler()} style={{ background: '#D61C4E' }}>Reset</button>
        </div>
    )
}