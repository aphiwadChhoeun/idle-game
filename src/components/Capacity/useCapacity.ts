import { useContext, useMemo } from "react";
import { StatsContext } from "../../providers/StatsProvider";

export type CapacityType = [
    currentCapcity: number,
    totalCapacity: number
]

export function useCapacity(): CapacityType {
    const [stats, setStats] = useContext(StatsContext)
    const currentCapacity = useMemo(() => {
        return stats.workers.length
    }, [stats.workers])
    const totalCapacity = stats.capacity


    return [currentCapacity, totalCapacity]
}