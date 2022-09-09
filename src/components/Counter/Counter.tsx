import React, { useState } from 'react'
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'

const Counter = () => {
	const [counter, setCounter] = useState(0)
	const disableInc = counter >= 5
	const disableDec = counter <= -5
	const disableReset = !counter

	const increment = () => {
		setCounter(counter + 1)
	}

	const decrement = () => {
		setCounter(counter - 1)
	}

	const reset = () => {
		setCounter(0)
	}

	return (
		<div className='counter'>
			<Display counter={counter} />

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
