import React from "react"
import style from "./index.module.scss"
import Footer from "./footer"
import Header from "./header"
import Box from "@mui/material/Box"
import { useAuth } from "../context/register"
import { Outlet } from "react-router-dom"
import { styled } from "@mui/material/styles"

const HTMLWrapper = styled(Box)(() => ({
	height: "100vh",
	width: "100vw",
	margin: 0,
	flexGrow: 1,
	padding: 0,
}))

export default function BaseLayout() {
	const { token } = useAuth()

	return (
		<HTMLWrapper>
			<div className={style.containerWrapper}>
				<div className={style.header}>{token && <Header />}</div>
				<main className={style.outlet}>
					<Outlet />
				</main>
				<div className={style.footer}>
					<Footer />
				</div>
			</div>
		</HTMLWrapper>
	)
}
