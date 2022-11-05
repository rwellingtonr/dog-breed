import React, { useCallback, useEffect, useState } from "react"
import Box from "@mui/material/Box"
import style from "./collection.module.scss"
import DefaultBackDrop from "../backDrop"
import { useParams } from "react-router-dom"
import { api } from "../../service/api"
import { BreedsEnum } from "../../config/breeds"
import { useCollection } from "../../pages/breedCollection"
import Scroll from "../scroll"

type Images = {
	breed: string
	list: string[]
}

export default function Collection() {
	const { breed } = useParams<"breed">()
	const [loading, setLoading] = useState(false)
	const { setOverlayDog } = useCollection()
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
			getBreedDogs(breed).catch((e) => {
				console.error(e)
				setDogs([])
				setLoading(false)
			})
		}
	}, [breed])

	return (
		<Scroll>
			<Box component={"div"} className={style.container}>
				{dogs.map((dog, index) => (
					<Box component={"div"} className={style.galery} key={index}>
						<img
							className={style.dog}
							src={dog}
							srcSet={dog}
							alt={breed}
							loading="lazy"
							style={{ cursor: "pointer" }}
							onClick={() => setOverlayDog(dog)}
						/>
					</Box>
				))}
				<DefaultBackDrop open={loading} />
			</Box>
		</Scroll>
	)
}
