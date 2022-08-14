import React from "react"
import { Box, Grid } from "@mui/material"

export default function Header() {
	return (
		<Box component={"header"} style={{ height: "100%" }}>
			<Grid
				container
				spacing={2}
				sx={{ height: "100%", width: "100%", padding: 0, margin: 0 }}
			>
				<Grid item xs={10}>
					<h1>Galeria</h1>
				</Grid>
				<Grid item xs={2}>
					<button>Sair</button>
				</Grid>
			</Grid>
		</Box>
	)
}
