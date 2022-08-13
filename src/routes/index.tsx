import React from "react"
import RequireAuth from "../components/validation"
import BaseLayout from "../layout"
import BreedCollection from "../pages/breedCollection"
import BreedsNav from "../pages/breedsNav"
import Home from "../pages/home"
import { Routes, Route } from "react-router-dom"
import { routes } from "../config/appRoutes"

export default function MainRoutes() {
	return (
		<Routes>
			<Route path={routes.main} element={<BaseLayout />}>
				<Route index element={<Home />} />
				<Route
					path={routes.breeds}
					element={
						<RequireAuth>
							<BreedsNav />
						</RequireAuth>
					}
				>
					<Route path=":breed" element={<BreedCollection />} />
					<Route path={routes.error} element={<h1>Error 404</h1>} />
				</Route>
			</Route>
		</Routes>
	)
}
