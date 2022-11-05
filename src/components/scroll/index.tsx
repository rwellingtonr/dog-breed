import React from "react"
import Box from "@mui/system/Box"
import { styled } from "@mui/material/styles"

type ScrollProps = {
	children: React.ReactNode
}
const ScrollContainer = styled(Box)(() => ({
	overflow: "scroll",
	width: "100%",
	height: "80vh",
	scrollbarWidth: "thin",
}))

export default function Scroll({ children }: ScrollProps) {
	return <ScrollContainer>{children}</ScrollContainer>
}
