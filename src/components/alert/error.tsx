import * as React from "react"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

type ErrorAlert = {
	open: boolean
	text: string
	handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function ErrorSnackbars({ open, text, handleClose }: ErrorAlert) {
	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
					{text}
				</Alert>
			</Snackbar>
		</Stack>
	)
}
