import { useContext, useMemo } from "react";
import { StatsContext } from "../../../providers/StatsProvider";

export type UpgradeHookProps = [
    canBuy: boolean,
    upgradeCost: number,
    buyUpgrade: () => void
]

export function useUpgrade(workerIndex: number): UpgradeHookProps {
    const [stats, setStats] = useContext(StatsContext)
    const worker = useMemo(() => {
        return stats.workers[workerIndex]
    }, [stats.workers[workerIndex]])

    const baseUpgradeCost = 10
    const upgradeCost = useMemo(() => {
        if (worker.earnSpeedUpgrade === 0) {
            return baseUpgradeCost
        }

        return baseUpgradeCost + ((worker.earnSpeedUpgrade + 1) * worker.earnSpeedUpgrade)
    }, [worker.earnSpeedUpgrade])

    const canBuy = useMemo(() => {
        return upgradeCost <= stats.currency
    }, [stats.currency])

    const buyUpgrade = () => {
        if (stats.currency < upgradeCost) return

        const newStats = { ...stats }
        newStats.currency = stats.currency - upgradeCost
        newStats.workers[workerIndex] = {
            earnSpeed: worker.earnSpeed + 1,
            earnSpeedUpgrade: worker.earnSpeedUpgrade + 1
        }
        newStats.workers = [...newStats.workers]

        setStats({
            ...stats,
            ...newStats
        })
    }

    return [canBuy, upgradeCost, buyUpgrade]
}