import React from "react"
import { CssBaseline } from "@mui/material"
import { Box, Container } from "@mui/system"

type ContainerProps = {
	children: React.ReactNode
}

export default function ContainerWrapper({ children }: ContainerProps) {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>{children}</Box>
			</Container>
		</>
	)
}
