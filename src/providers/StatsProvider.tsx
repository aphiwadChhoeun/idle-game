import { createContext, PropsWithChildren } from "react";
import useLocalStorage from "use-local-storage";

export type StatsProps = {
    currency: number,
    speed: number
}

const defaultStats = {
    currency: 0,
    speed: 0.1
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