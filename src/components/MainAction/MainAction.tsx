import ActionAnimation from "../Animation/ActionAnimation"
import styles from './MainAction.module.css'
import { useAction } from "./useAction"

export type MainActionProps = {
    workerIndex: number
}

export default function MainAction({ workerIndex }: MainActionProps) {
    useAction(workerIndex)

    return (
        <div className={styles.mainActionWrapper}>

            <ActionAnimation isActive={true} />

        </div >
    )
}