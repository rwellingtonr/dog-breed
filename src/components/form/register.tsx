import React, { useState } from "react"
import { Stack, Box, TextField } from "@mui/material"
import style from "./register.module.scss"
import { useAuth } from "../../context/register"
import ErrorSnackbars from "../alert/error"
import { useNavigate } from "react-router-dom"
import { routes } from "../../config/appRoutes"
import { breeds } from "../../config/breeds"
import DefaultButton from "../button/defaultButton"
import DefaultBackDrop from "../backDrop"

function validateEmail(email: string) {
	if (!email.trim()) return false
	const re = /\S+@\S+\.\S+/
	return re.test(email)
}
export default function Register() {
	const { signIn } = useAuth()
	const [email, setEmail] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const navigate = useNavigate()

	const handleRegister = async () => {
		try {
			setLoading(true)
			if (!validateEmail(email)) throw new Error("Erro ao preencher email")
			await signIn(email)
			navigate(`${routes.breeds}/${breeds.chihuahua}`)
		} catch (err: any) {
			setError(err.message || "Error ao executar o login")
			setEmail("")
			setLoading(false)
		}
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await handleRegister()
	}

	const handleKeyPress = async (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.key === "Enter") {
			e.preventDefault()
			await handleRegister()
		}
	}

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") return

		setError("")
	}

	return (
		<Box
			component="form"
			className={style.formWrapper}
			sx={{
				"& .MuiTextField-root": { width: "250px" },
			}}
			noValidate
			onKeyDown={handleKeyPress}
			onSubmit={handleSubmit}
			autoComplete="off"
		>
			<Stack direction="column" spacing={5}>
				<h1 className={style.title}>Registar</h1>
				<div>
					<TextField
						className={style.txtForm}
						size="small"
						id="outlined-basic"
						label="e-mail"
						value={email}
						placeholder="Digite seu e-mail"
						variant="outlined"
						onChange={e => setEmail(e.target.value)}
					/>
					<DefaultButton>Enviar</DefaultButton>
					<DefaultBackDrop open={loading} />
				</div>
			</Stack>
			<ErrorSnackbars open={!!error} text={error} handleClose={handleClose} />
		</Box>
	)
}
