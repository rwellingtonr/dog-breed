import React from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

type BackdropProps = {
	open: boolean
}

export default function DefaultBackDrop({ open }: BackdropProps) {
	return (
		<Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}
