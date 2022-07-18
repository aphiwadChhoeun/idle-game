import { useContext, useMemo } from "react";
import { StatsContext } from "../../../providers/StatsProvider";

export type UpgradeHookProps = [
    canBuy: boolean,
    upgradeCost: number,
    upgradeStat: number,
    buyUpgrade: () => void
]

export function useUpgrade(workerIndex: number): UpgradeHookProps {
    const [stats, setStats] = useContext(StatsContext)
    const worker = useMemo(() => {
        return stats.workers[workerIndex]
    }, [stats.workers[workerIndex]])

    const baseUpgradeCost = 10
    const upgradeCost = useMemo(() => {
        return baseUpgradeCost + Math.floor(Math.exp(worker.earnSpeedUpgrade)) + (Math.floor(Math.exp(stats.workers.length)))
    }, [stats.workers])

    const canBuy = useMemo(() => {
        return upgradeCost <= stats.currency
    }, [stats.currency])

    const upgradeStat = useMemo(() => {
        return Math.floor(Math.pow(2, worker.earnSpeedUpgrade) / 4)
    }, [worker.earnSpeedUpgrade])

    const buyUpgrade = () => {
        if (stats.currency < upgradeCost) return

        const newStats = { ...stats }
        newStats.currency = stats.currency - upgradeCost

        newStats.workers[workerIndex] = {
            earnSpeed: worker.earnSpeed + upgradeStat,
            earnSpeedUpgrade: worker.earnSpeedUpgrade + 1
        }
        newStats.workers = [...newStats.workers]

        setStats({
            ...stats,
            ...newStats
        })
    }

    return [canBuy, upgradeCost, upgradeStat, buyUpgrade]
}