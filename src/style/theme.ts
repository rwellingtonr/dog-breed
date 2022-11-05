import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"

export const theme = createTheme({
	palette: {
		primary: {
			main: "#444458",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
})
