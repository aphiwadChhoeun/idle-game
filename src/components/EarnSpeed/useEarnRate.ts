import { useContext, useMemo } from "react";
import { StatsContext } from "../../providers/StatsProvider";

export function useEarnRate(): number {
    const [stats, setStats] = useContext(StatsContext)
    const totalEarnRate = useMemo(() => {
        return stats.workers.reduce((acc, current) => {
            return acc + current.earnSpeed
        }, 0)
    }, [stats.workers])

    return totalEarnRate
}