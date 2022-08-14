import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../context/register"

type Children = {
	children: JSX.Element
}

export default function RequireAuth({ children }: Children) {
	const { token } = useAuth()

	if (!token) {
		const location = useLocation()
		console.warn("Return")
		return <Navigate to="/" state={{ from: location }} replace />
	}

	return children
}
