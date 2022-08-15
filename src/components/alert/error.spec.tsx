import React from "react"
import { render } from "@testing-library/react"
import ErrorSnackbars from "./error"

test("Error Warning", () => {
	const testMessage = "jest"

	const { getByText } = render(
		<ErrorSnackbars open={true} text={testMessage} handleClose={console.warn} />
	)

	expect(getByText(testMessage)).toBeInTheDocument()
})
