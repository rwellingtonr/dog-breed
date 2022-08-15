import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Register from "./register"

describe("should test the register component", () => {
	it("Should validate the input text", () => {
		const { getByPlaceholderText } = render(<Register />)

		const inputElement = getByPlaceholderText("Digite seu e-mail")
	})
})
