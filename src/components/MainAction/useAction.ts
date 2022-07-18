import { useAnimationFrame } from "framer-motion";
import { useContext, useMemo } from "react";
import { StatsContext } from "../../providers/StatsProvider";
import type { Worker } from "../../providers/StatsProvider";

const TIME_PER_FRAME = 1 / 60
const UPDATE_STEP = 10

export function useAction(workerIndex: number): Worker {
    const [stats, setStats] = useContext(StatsContext)
    const worker = useMemo(() => {
        return stats.workers[workerIndex]
    }, [stats.workers[workerIndex]])

    let updateTick = 0
    useAnimationFrame(() => {
        if (updateTick > TIME_PER_FRAME * UPDATE_STEP) {
            updateTick = 0

            setStats({
                ...stats,
                currency: stats.currency + (worker.earnSpeed * TIME_PER_FRAME * UPDATE_STEP)
            })
        }

        updateTick += TIME_PER_FRAME
    })

    return worker
}