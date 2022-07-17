import { createContext, PropsWithChildren } from "react";
import useLocalStorage from "use-local-storage";

export type StatsProps = {
    currency: number,
    earnSpeed: number,
    progress: number
}

const defaultStats = {
    currency: 0,
    earnSpeed: 1,
    progress: 0
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