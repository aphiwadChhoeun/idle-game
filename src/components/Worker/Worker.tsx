import Level from "./Level/Level";
import MainAction from "./MainAction/MainAction";
import Upgrade from "./Upgrade/Upgrade";

import styles from './Worker.module.css'

export type WorkerProps = {
    workerIndex: number
}

export default function Worker({ workerIndex }: WorkerProps) {
    return (
        <div className={styles.workerWrapper}>
            <MainAction workerIndex={workerIndex} />
            <Level workerIndex={workerIndex} />
            <Upgrade workerIndex={workerIndex} />
        </div>
    )
}