import { useContext, useMemo } from "react";
import { StatsContext } from "../../providers/StatsProvider";

const BASE_COST = 10_000

export type BuyCapacityType = [
    canBuy: boolean,
    buyCost: number,
    buyCapacity: () => void
]

export function useBuyCapacity(): BuyCapacityType {
    const [stats, setStats] = useContext(StatsContext)
    const buyCost = useMemo(() => {
        return BASE_COST * Math.floor(Math.exp(stats.capacity))
    }, [stats.capacity])
    const canBuy = useMemo(() => {
        return stats.currency >= buyCost
    }, [stats.currency])

    const buyCapacity = () => {
        if (stats.currency < buyCost) return

        const newStats = { ...stats }
        newStats.currency = stats.currency - buyCost
        newStats.capacity += 1

        setStats({
            ...stats,
            ...newStats
        })
    }

    return [canBuy, buyCost, buyCapacity]
}