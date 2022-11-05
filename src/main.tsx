import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import AuthProvider from "./context/register"
import "./style/global.css"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./style/theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
)
