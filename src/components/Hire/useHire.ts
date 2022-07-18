import { useContext, useMemo } from "react";
import { StatsContext } from "../../providers/StatsProvider";
import { defaultWorker } from "../../providers/StatsProvider";

export type HireType = [
    canHire: boolean,
    hireCose: number,
    hire: () => void
]

const BASE_COST = 1_000

export function useHire(): HireType {
    const [stats, setStats] = useContext(StatsContext)
    const hireCost = useMemo(() => {
        return BASE_COST * Math.floor(Math.exp(stats.workers.length))
    }, [stats.workers])
    const canHire = useMemo(() => {
        if (stats.workers.length >= stats.capacity) return false
        return stats.currency >= hireCost
    }, [stats.currency, stats.workers, stats.capacity])

    const hire = () => {
        if (stats.currency < hireCost) return

        const newStats = { ...stats }
        newStats.currency = stats.currency - hireCost
        newStats.workers = [
            ...stats.workers,
            defaultWorker
        ]
        newStats.workers = [...newStats.workers]

        setStats({
            ...stats,
            ...newStats
        })
    }

    return [canHire, hireCost, hire]
}