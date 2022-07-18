import ActionAnimation from "../../Animation/ActionAnimation"
import styles from './MainAction.module.css'
import { useAction } from "./useAction"
import type { WorkerProps } from '../Worker'

export default function MainAction({ workerIndex }: WorkerProps) {
    useAction(workerIndex)

    return (
        <div className={styles.mainActionWrapper}>

            <ActionAnimation />

        </div >
    )
}