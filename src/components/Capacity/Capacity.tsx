import { useCapacity } from "./useCapacity"

export default function Capacity() {
    const [capacity, totalCapacity] = useCapacity()

    return (
        <div>
            CAPACITY: {capacity}/{totalCapacity}
        </div>
    )
}