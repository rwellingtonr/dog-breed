import React from "react"
import { BrowserRouter } from "react-router-dom"
import ContainerWrapper from "./layout/container"
import MainRoutes from "./routes"

function App() {
	return (
		<ContainerWrapper>
			<BrowserRouter>
				<MainRoutes />
			</BrowserRouter>
		</ContainerWrapper>
	)
}
export default App
