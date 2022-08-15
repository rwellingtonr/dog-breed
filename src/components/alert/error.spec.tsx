import React from "react"
import ErrorSnackbars from "./error"
import { render } from "@testing-library/react"

test("Error Warning", () => {
	const testMessage = "jest"

	const { getByText } = render(
		<ErrorSnackbars open={true} text={testMessage} handleClose={console.warn} />
	)

	expect(getByText(testMessage)).toBeTruthy()
})
