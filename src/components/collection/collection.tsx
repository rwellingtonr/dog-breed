import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

type Images = {
	breed: string
	list: string[]
}

export default function Collection({ breed, list }: Images) {
	return (
		<ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
			{list.map((item, index) => (
				<ImageListItem key={index}>
					<img src={item} srcSet={item} alt={breed} loading="lazy" />
				</ImageListItem>
			))}
		</ImageList>
	)
}
