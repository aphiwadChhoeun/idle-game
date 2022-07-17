import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import styles from './ActionAnimation.module.css'

export type ActionAnimationType = {
    isActive: boolean
}

export default function ActionAnimation({ isActive }: ActionAnimationType) {
    const control = useAnimationControls()

    const parentVariants = {
        active: {
            transition: {
                staggerChildren: 0.25,
            }
        }
    }

    const childVariants = {
        active: {
            y: [null, -50],
            scale: [null, 1.5],
            transition: {
                repeatType: 'reverse',
                repeat: Infinity
            }
        },
        inActive: {
            y: [null, 0],
            scale: [null, 1],
            transition: {
                duration: .3
            }
        }
    }

    useEffect(() => {
        if (isActive) {
            control.start('active')
        } else {
            control.start('inActive')
        }
    }, [isActive])

    return (
        <motion.div variants={parentVariants} animate={control} className={styles.meterWrapper}>
            <motion.div variants={childVariants} className={styles.block}></motion.div>
            <motion.div variants={childVariants} className={styles.block}></motion.div>
            <motion.div variants={childVariants} className={styles.block}></motion.div>
        </motion.div>
    )
}