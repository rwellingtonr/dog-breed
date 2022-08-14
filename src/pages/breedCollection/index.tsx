import React, { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { breeds, BreedsEnum } from "../../config/breeds"
import { Outlet, useNavigate } from "react-router-dom"

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	}
}

export default function BreedCollection() {
	const [value, setValue] = useState(0)
	const navigate = useNavigate()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
		navigate(`${BreedsEnum[newValue]}`)
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				height: "100%",
				"& .css-10d9dml-MuiTabs-indicator": { backgroundColor: "#444458" },
			}}
		>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="VerticalTabs"
				sx={{ borderRight: 1, borderColor: "divider" }}
			>
				{Object.values(breeds).map((breed, i) => (
					<Tab label={breed} {...a11yProps(i)} key={i} style={{ color: "#444458" }} />
				))}
			</Tabs>
			<div style={{ margin: "20px", width: "100%" }}>
				<Outlet />
			</div>
		</Box>
	)
}
