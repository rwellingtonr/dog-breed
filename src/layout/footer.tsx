import React from "react"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { Paper } from "@mui/material"

const FooterWrapper = styled(Box)(() => ({
	boxSizing: "border-box",
	position: "absolute",
	width: "100%",
	left: 0,
	bottom: 0,
	background: "rgba(20, 17, 17, 0.38)",
	border: "1px solid #000000",
}))

const Message = styled(Paper)(({ theme }) => ({
	background: "inherit",
	height: "100%",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	textDecoration: "none",
}))

export default function Footer() {
	return (
		<FooterWrapper>
			<Stack direction="column" sx={{ height: "100%" }}>
				<Message>
					Created by{" "}
					<Link
						href="https://github.com/rwellingtonr"
						target={"_blank"}
						underline="hover"
						color="inherit"
					>
						{"Wellington Leardini"}
					</Link>
				</Message>
			</Stack>
		</FooterWrapper>
	)
}
