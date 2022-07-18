import { useAnimationFrame } from "framer-motion";
import { useContext, useMemo } from "react";
import { StatsContext } from "../../providers/StatsProvider";

const TIME_PER_FRAME = 1 / 60

export function useEarnRate(): number {
    const [stats, setStats] = useContext(StatsContext)
    const totalEarnRate = useMemo(() => {
        return stats.workers.reduce((acc, current) => {
            return acc + current.earnSpeed
        }, 0)
    }, [stats.workers])

    useAnimationFrame(() => {
        setStats({
            ...stats,
            currency: stats.currency + (totalEarnRate * TIME_PER_FRAME)
        })
    })

    return totalEarnRate
}