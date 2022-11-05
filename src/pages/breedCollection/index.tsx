import React, { useMemo, useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import Backdrop from "@mui/material/Backdrop"
import { breeds, BreedsEnum } from "../../config/breeds"
import { Outlet, useNavigate, useOutletContext } from "react-router-dom"

type ContextType = { setOverlayDog: (src: string) => void }

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	}
}

export default function BreedCollection() {
	const [value, setValue] = useState(0)
	const [overlayDog, setOverlayDog] = useState("")
	const navigate = useNavigate()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
		navigate(`${BreedsEnum[newValue]}`)
	}

	const maxWidth = useMemo(() => {
		return window.innerWidth > 500 ? "60vh" : "300px"
	}, [window.innerWidth])

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
					style={{ maxWidth, borderRadius: "20px" }}
				/>
			</Backdrop>
		)
	}, [overlayDog])

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				height: "100%",
			}}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				indicatorColor={"primary"}
				onChange={handleChange}
				aria-label="VerticalTabs"
				sx={{ borderRight: 1, borderColor: "divider", minWidth: "100px" }}
			>
				{Object.values(breeds).map((breed, i) => (
					<Tab label={breed} {...a11yProps(i)} key={i} style={{ color: "#444458" }} />
				))}
			</Tabs>
			<div style={{ margin: "20px", width: "100%" }}>
				<Outlet context={{ setOverlayDog }} />
			</div>
			{handleOverlay}
		</Box>
	)
}

export function useCollection() {
	return useOutletContext<ContextType>()
}
