import React from "react"
import { Box, Grid } from "@mui/material"
import DefaultButton from "../components/button/defaultButton"
import { useAuth } from "../context/register"
import { useNavigate } from "react-router-dom"
import { routes } from "../config/appRoutes"
import style from "./header.module.scss"

export default function Header() {
	const { signOut } = useAuth()
	const navigate = useNavigate()

	const handleSignOut = () => {
		navigate(routes.main)
		signOut()
	}

	return (
		<Box component="header" style={{ height: "100%" }}>
			<Grid className={style.headerWrapper} container spacing={2} alignItems="center">
				<Grid item xs={10}>
					<h1 className={style.headerTitle}>Galeria</h1>
				</Grid>
				<Grid item xs={2}>
					<DefaultButton handleClick={handleSignOut}>Sair</DefaultButton>
				</Grid>
			</Grid>
		</Box>
	)
}
