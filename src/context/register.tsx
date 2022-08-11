import React, { createContext, ReactNode, useEffect, useState, useContext } from "react"
import { api } from "../service/api"

type AuthProvider = {
	children: ReactNode
}

type AuthContextValue = {
	token: string
	signIn: (signIn: LogInDTO) => Promise<void>
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
type LogInDTO = {
	email: string
}

export const AuthContext = createContext({} as AuthContextValue)

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }: AuthProvider) {
	const [token, setToken] = useState<string>(() => {
		try {
			const code = localStorage.getItem("@breed:token")
			return code ?? ""
		} catch (error) {
			return ""
		}
	})

	useEffect(() => {
		const code = localStorage.getItem("@breed:token")
		if (code) setBearer(code)
	}, [])

	const setBearer = (token: string) => {
		api.defaults.headers.common.authorization = `Bearer ${token}`
	}

	const signIn = async (login: LogInDTO) => {
		const res = await api.post("signin", login)
		//localStorage.setItem("@breed:token", token)
		setToken(token)
		setBearer(token)
	}

	const signOut = () => {
		setToken("")
		localStorage.removeItem("@breed:token")
	}

	return (
		<AuthContext.Provider value={{ token, signIn, signOut }}>{children}</AuthContext.Provider>
	)
}