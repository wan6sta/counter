import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './button.module.scss'

type DefaultButtonType = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

type ButtonPropsType = DefaultButtonType & {}

const Button: FC<ButtonPropsType> = ({ disabled, children, ...restProps }) => {
	const className = disabled
		? `${styles.button} ${styles.disabled}`
		: styles.button

	return (
		<button disabled={disabled} className={className} {...restProps}>
			{children}
		</button>
	)
}

export default Button
