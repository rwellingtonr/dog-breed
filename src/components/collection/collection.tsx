import React, { useCallback, useEffect, useState } from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import style from "./collection.module.scss"
import DefaultBackDrop from "../backDrop"
import { useParams } from "react-router-dom"
import { api } from "../../service/api"
import { BreedsEnum } from "../../config/breeds"

type Images = {
	breed: string
	list: string[]
}

export default function Collection() {
	const { breed } = useParams<"breed">()
	const [loading, setLoading] = useState(false)
	const [dogs, setDogs] = useState<string[]>([])

	const getBreedDogs = useCallback(async (breed: string) => {
		if (!(breed in BreedsEnum)) return
		const res = await api.get<Images>("list", {
			params: { breed },
		})
		setDogs(res.data.list)
		setLoading(false)
	}, [])

	useEffect(() => {
		if (breed) {
			window.document.title = breed
			setLoading(true)
			getBreedDogs(breed).catch(e => {
				console.error(e)
				setDogs([])
				setLoading(false)
			})
		}
	}, [breed])

	return (
		<ImageList className={style.imagesWrapper} variant="woven" cols={5} gap={8}>
			{dogs.map((dog, index) => (
				<ImageListItem key={index}>
					<img src={dog} srcSet={dog} alt={breed} loading="lazy" />
				</ImageListItem>
			))}
			<DefaultBackDrop open={loading} />
		</ImageList>
	)
}
