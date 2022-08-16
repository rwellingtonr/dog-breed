import React from "react"
import { render, screen } from "@testing-library/react"
import ErrorSnackbars from "./error"

describe("Teste the error alert", () => {
	it("should be in the document", () => {
		const testMessage = "jest"

		const { getByText } = render(
			<ErrorSnackbars open={true} text={testMessage} handleClose={console.warn} />
		)

		expect(getByText(testMessage)).toBeInTheDocument()
	})

	it("Should have an alert with message", () => {
		const testMessage = "jest"
		render(<ErrorSnackbars open={true} text={testMessage} handleClose={console.warn} />)
		expect(screen.getByRole("alert")).toHaveTextContent(testMessage)
	})
})
