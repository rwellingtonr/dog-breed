import React from "react"
import RequireAuth from "../components/validation"
import BaseLayout from "../layout"
import BreedCollection from "../pages/breedCollection"
import Home from "../pages/home"
import { Routes, Route } from "react-router-dom"
import { routes } from "../config/appRoutes"
import Collection from "../components/collection/collection"

export default function MainRoutes() {
	return (
		<Routes>
			<Route path={routes.main} element={<BaseLayout />}>
				<Route index element={<Home />} />
				<Route
					path={routes.breeds}
					element={
						<RequireAuth>
							<BreedCollection />
						</RequireAuth>
					}
				>
					<Route path=":breed" element={<Collection />} />
					<Route path={routes.error} element={<h1>Error 404</h1>} />
				</Route>
			</Route>
		</Routes>
	)
}
