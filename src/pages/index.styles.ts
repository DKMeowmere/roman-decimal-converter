import styled from "styled-components"
import Article from "../components/Article"

type MainProps = {
	url: string
	bg: string
}

export const MainContainer = styled(Article)<MainProps>`
	background-image: url(${({ url }) => url}${({ bg }) => bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	color: ${({ theme }) => theme.colors.textWhite};
	text-align: center;
	div {
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			font-size: 3rem;
			margin-bottom: 120px;
		}
		h2 {
			font-size: 2rem;
			margin-bottom: 20px;
		}
		button {
			padding: 15px 80px;
			background-color: ${({ theme }) => theme.colors.mainBlue};
			border-radius: 10px;
			border: 0;
			color: ${({ theme }) => theme.colors.textWhite};
			cursor: pointer;
			font-size: 1.4rem;
			opacity: 0.9;
			&:hover { 
				opacity: 1;
			}
		}
	}
`
