import styled from "styled-components"

type ThemeProps = {
	app: {
		url: string
	}
	colors: {
		textWhite: string
		textBlack: string
		mainBlue: string
	}
	breakpoints: {
		extraSmall: string
		small: string
		medium: string
		large: string
	}
}

export const theme: ThemeProps = {
	app: {
		url: "http://localhost:3000",
	},
	colors: {
		textWhite: "#eee",
		textBlack: "#111",
		mainBlue: "#395fee",
	},
	breakpoints: {
		extraSmall: "0px",
		small: "600px",
		medium: "900px", 
		large: "1200px",
	},
}
