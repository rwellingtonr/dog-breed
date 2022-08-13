import React from "react"
import Footer from "./footer"
import Header from "./header"
import { Box, Grid } from "@mui/material"
import { useAuth } from "../context/register"
import { Outlet } from "react-router-dom"

export default function BaseLayout() {
	const { token } = useAuth()

	return (
		<Box sx={{ width: "100%", flexGrow: 1 }}>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs>
					{token && <Header />}
				</Grid>
				<Grid container item xs>
					<Outlet />
				</Grid>
				<Grid container item xs>
					<Footer />
				</Grid>
			</Grid>
		</Box>
	)
}
