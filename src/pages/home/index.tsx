import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/register"
import { routes } from "../../config/appRoutes"
import { breeds } from "../../config/breeds"
import { Box, Stack } from "@mui/system"
import { styled } from "@mui/material/styles"
import pug from "../../assets/pug.jpeg"
import Register from "../../components/form/register"
import style from "./home.module.scss"

const HomeWrapper = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	height: "100%",
	width: "100%",
}))

export default function Home() {
	const { token } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (token) navigate(`${routes.breeds}/${breeds.chihuahua}`)
	}, [token])

	return (
		<HomeWrapper>
			<Stack
				className={style.stackWrapper}
				direction={{ xs: "column", sm: "row" }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
			>
				<img src={pug} alt="Pug Image" className={style.imgPug} />
				<Register />
			</Stack>
		</HomeWrapper>
	)
}
