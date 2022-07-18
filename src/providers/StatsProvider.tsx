import { createContext, PropsWithChildren } from "react";
import useLocalStorage from "use-local-storage";

export type Worker = {
    earnSpeed: number,
    earnSpeedUpgrade: number
}

export type StatsProps = {
    currency: number,
    workers: Array<Worker>
}

export const defaultStats = {
    currency: 0,
    workers: [{
        earnSpeed: 1,
        earnSpeedUpgrade: 0
    }]
}

export const StatsContext = createContext<[StatsProps, React.Dispatch<StatsProps>]>([defaultStats, () => { }])

const StatsProvider = ({ children }: PropsWithChildren) => {
    const [stats, setStats] = useLocalStorage<StatsProps>('stats', defaultStats)

    return (
        <StatsContext.Provider value={[stats, setStats]}>
            {children}
        </StatsContext.Provider>
    )
}

export default StatsProvider