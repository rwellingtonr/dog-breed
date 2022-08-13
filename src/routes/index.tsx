import React from "react"
import { Routes, Route } from "react-router-dom"
import RequireAuth from "../components/validation"
import BreedCollection from "../pages/BreedCollection"
import BreedsNav from "../pages/BreedsNav"
import Home from "../pages/Home"

export default function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route
					path="breeds"
					element={
						<RequireAuth>
							<BreedsNav />
						</RequireAuth>
					}
				>
					<Route path=":breed" element={<BreedCollection />} />
					<Route path="*" element={<h1>Error 404</h1>} />
				</Route>
			</Route>
		</Routes>
	)
}
