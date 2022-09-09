import Button from '../UI/Button/Button'
import { FC } from 'react'

type ButtonsPropsType = {
	increment: () => void
	decrement: () => void
	reset: () => void
	disableInc: boolean
	disableReset: boolean
	disableDec: boolean
}

const Buttons: FC<ButtonsPropsType> = ({
																				 increment,
																				 reset,
																				 disableInc,
																				 disableReset,
																				 disableDec,
																				 decrement
																			 }) => {
	return (
		<div className='buttons'>
			<Button disabled={disableDec} onClick={decrement}>
				Dec
			</Button>

			<Button disabled={disableInc} onClick={increment}>
				Inc
			</Button>
			
			<Button disabled={disableReset} onClick={reset}>
				Reset
			</Button>
		</div>
	)
}

export default Buttons
