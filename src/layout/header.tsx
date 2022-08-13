import React from "react"
import { Box, Grid } from "@mui/material"

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<h1>Galeria</h1>
				</Grid>
				<Grid item xs={4}>
					<button>Sair</button>
				</Grid>
			</Grid>
		</Box>
	)
}
