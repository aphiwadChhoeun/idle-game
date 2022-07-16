import { useContext } from "react"
import { CurrencyContext } from "../providers/CurrencyProvider"

export default function MainAction() {
    const [currency, setCurrency] = useContext(CurrencyContext)

    const clickHandler = () => {
        return () => {
            setCurrency(parseInt(currency) + 1)
        }
    }

    return (
        <div>
            <div>{currency}</div>
            <button onClick={clickHandler()}>Action</button>
        </div>
    )
}