import React from "react"
import Button from "@mui/material/Button"
import style from "./defaultButton.module.scss"

type ButtonProps = {
	handleClick?: () => void
	children: React.ReactNode
}

export default function DefaultButton({ handleClick, children }: ButtonProps) {
	return (
		<Button className={style.button} variant="outlined" onClick={handleClick}>
			{children}
		</Button>
	)
}
