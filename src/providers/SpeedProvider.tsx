import { createContext, PropsWithChildren } from "react";
import useLocalStorage from 'react-use-localstorage';

export const SpeedContenxt = createContext<any>(null)

const SpeedProvider = ({ children }: PropsWithChildren) => {
    const [speed, setSpeed] = useLocalStorage('actionSpeed', '0.1')

    return (
        <SpeedContenxt.Provider value={[speed, setSpeed]}>
            {children}
        </SpeedContenxt.Provider>
    )
}

export default SpeedProvider