import { FC } from 'react'
import styles from './display.module.scss'

type DisplayPropsType = {
	counter: number
}

const Display: FC<DisplayPropsType> = ({ counter }) => {
	const className =
		counter === 5 || counter === -5
			? `${styles.counter} ${styles.counterLast}`
			: styles.counter

	return (
		<div className={className}>
			<span className={styles.animation}>{counter}</span>
		</div>
	)
}

export default Display
