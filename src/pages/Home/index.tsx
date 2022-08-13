import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/register"
import { routes } from "../../config/appRoutes"
import { breeds } from "../../config/breeds"
import { Box, Stack } from "@mui/system"
import pug from "../../assets/pug.jpeg"

export default function Home() {
	const { token } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (token) navigate(`${routes.breeds}/${breeds.chihuahua}`)
	}, [token])

	return (
		<Box>
			<Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
				<img src={pug} alt="Pug Image" />
				<form></form>
			</Stack>
		</Box>
	)
}
