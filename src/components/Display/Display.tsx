import { FC } from 'react'
import styles from './display.module.scss'

type DisplayPropsType = {
	counter: number
	MIN_LIMIT: number
	MAX_LIMIT: number
}

const Display: FC<DisplayPropsType> = ({ counter, MIN_LIMIT, MAX_LIMIT }) => {
	const className =
		counter === MIN_LIMIT || counter === MAX_LIMIT
			? `${styles.counter} ${styles.counterLast}`
			: styles.counter

	return (
		<div className={className}>
			<span>{counter}</span>
		</div>
	)
}

export default Display
