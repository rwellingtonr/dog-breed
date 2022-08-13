import React, { useCallback, useEffect, useState } from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { useParams } from "react-router-dom"
import { api } from "../../service/api"
import { breeds, BreedsTypes } from "../../config/breeds"

type Images = {
	breed: string
	list: string[]
}

export default function Collection() {
	const { breed } = useParams<"breed">()
	const [dogs, setDogs] = useState({} as Images)

	const getBreedDogs = useCallback(async (breed: BreedsTypes) => {
		console.log("GET")

		if (breeds[breed]) {
			const res = await api.get<Images>("list", {
				params: { breed },
			})
			res.data
			setDogs(res.data)
		}
		throw new Error("")
	}, [])

	useEffect(() => {
		if (breed) {
			getBreedDogs(breed as BreedsTypes).catch(e => console.error(e))
		}
	}, [breed, getBreedDogs])

	return (
		<ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
			{dogs?.list.map((dog, index) => (
				<ImageListItem key={index}>
					<img src={dog} srcSet={dog} alt={dogs?.breed} loading="lazy" />
				</ImageListItem>
			))}
		</ImageList>
	)
}
