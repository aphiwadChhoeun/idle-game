import { useContext } from 'react'
import { StatsContext } from '../../../providers/StatsProvider'
import type { WorkerProps } from '../Worker'

export default function Level({ workerIndex }: WorkerProps) {
    const [stats, setStats] = useContext(StatsContext)

    return (
        <div>
            Rank: {stats.workers[workerIndex].earnSpeedUpgrade}
        </div>
    )
}