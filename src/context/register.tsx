import React, { createContext, ReactNode, useState, useContext } from "react"
import { api } from "../service/api"

type AuthProvider = {
	children: ReactNode
}

type AuthContextValue = {
	token: string
	signIn: (email: string) => Promise<void>
	signOut: () => void
}

type User = {
	email: string
	token: string
	createdAt: Date
	updatedAt: Date
}

type Register = {
	user: User
}

export const AuthContext = createContext({} as AuthContextValue)

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }: AuthProvider) {
	const [token, setToken] = useState<string>(() => {
		try {
			const code = localStorage.getItem("@breed:token")
			if (code) api.defaults.headers.common.authorization = code
			return code ?? ""
		} catch (err) {
			console.error(err)
			return ""
		}
	})

	const setAuthToken = (token: string) => {
		api.defaults.headers.common.authorization = token
		setToken(token)
	}

	const signIn = async (email: string) => {
		email = email.trim().toLowerCase()
		const res = await api.post<Register>("register", { email })
		const { user } = res.data
		localStorage.setItem("@breed:token", user.token)

		setAuthToken(user.token)
	}

	const signOut = () => {
		setToken("")
		localStorage.removeItem("@breed:token")
	}

	return (
		<AuthContext.Provider value={{ token, signIn, signOut }}>{children}</AuthContext.Provider>
	)
}
