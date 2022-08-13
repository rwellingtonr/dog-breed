import React from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { Paper } from "@mui/material"

const FooterWrapper = styled(Box)(() => ({
	boxSizing: "border-box",
	position: "absolute",
	width: "100%",
	height: "66px",
	left: 0,
	bottom: 0,
	background: "rgba(20, 17, 17, 0.38)",
	border: "1px solid #000000",
}))

const Message = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}))

export default function Footer() {
	return (
		<FooterWrapper>
			<Stack direction="row">
				<Message>Created by Wellington</Message>
			</Stack>
		</FooterWrapper>
	)
}
