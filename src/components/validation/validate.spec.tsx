import { render, screen } from "@testing-library/react"
import React from "react"
import "@testing-library/jest-dom"
import RequireAuth from "."

test("full app rendering/navigating", async () => {
	render(
		<RequireAuth>
			<></>
		</RequireAuth>
	)

	// verify page content for default route
	expect(screen.getByAltText("Pug Image")).toBeInTheDocument()
})
