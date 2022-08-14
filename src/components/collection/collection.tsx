import React, { useCallback, useEffect, useMemo, useState } from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import style from "./collection.module.scss"
import DefaultBackDrop from "../backDrop"
import Backdrop from "@mui/material/Backdrop"
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
	const [overlayDog, setOverlayDog] = useState("")
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

	const handleOverlay = useMemo(() => {
		return (
			<Backdrop
				sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
				open={!!overlayDog}
				onClick={() => setOverlayDog("")}
			>
				<img
					src={overlayDog}
					srcSet={overlayDog}
					alt={overlayDog}
					style={{ maxWidth: "60vh" }}
				/>
			</Backdrop>
		)
	}, [overlayDog])

	return (
		<ImageList
			className={style.imagesWrapper}
			variant="woven"
			cols={window.innerWidth > 500 ? 5 : 2}
			gap={8}
		>
			{dogs.map((dog, index) => (
				<ImageListItem key={index}>
					<img
						src={dog}
						srcSet={dog}
						alt={breed}
						loading="lazy"
						onClick={() => setOverlayDog(dog)}
					/>
				</ImageListItem>
			))}
			<DefaultBackDrop open={loading} />
			{handleOverlay}
		</ImageList>
	)
}
