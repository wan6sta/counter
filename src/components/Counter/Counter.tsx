import React, { useState } from 'react'
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'

const Counter = () => {
	const START_VALUE = 0
	const MAX_LIMIT = 5
	const MIN_LIMIT = -5

	const [counter, setCounter] = useState(START_VALUE)

	const disableInc = counter >= MAX_LIMIT
	const disableDec = counter <= MIN_LIMIT
	const disableReset = counter === 0

	const increment = () => {
		if (disableInc) {
			return
		}
		setCounter(counter + 1)
	}

	const decrement = () => {
		if (disableDec) {
			return
		}
		setCounter(counter - 1)
	}

	const reset = () => {
		if (disableReset) {
			return
		}
		setCounter(0)
	}

	return (
		<div className='counter'>
			<Display counter={counter} MAX_LIMIT={MAX_LIMIT} MIN_LIMIT={MIN_LIMIT} />

			<Buttons
				increment={increment}
				decrement={decrement}
				reset={reset}
				disableInc={disableInc}
				disableDec={disableDec}
				disableReset={disableReset}
			/>
		</div>
	)
}

export default Counter
