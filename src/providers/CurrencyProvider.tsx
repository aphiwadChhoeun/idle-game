import { createContext, PropsWithChildren } from "react";
import useLocalStorage from 'react-use-localstorage';

export const CurrencyContext = createContext<any>(null)

const CurrencyProvider = ({ children }: PropsWithChildren) => {
    const [currency, setCurrency] = useLocalStorage('currency', '0')

    return (
        <CurrencyContext.Provider value={[currency, setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider