import styled from "styled-components"
import Article from "../components/Article"

type ConverterProps = {
	url: string
	bg: string
	isRomanNumberInvalid: boolean
}

export const ConverterContainer = styled(Article)<ConverterProps>`
	background-image: url(${({ url }) => url}${({ bg }) => bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	color: ${({ theme }) => theme.colors.textWhite};
	text-align: center;
	h1 {
		font-size: 2.2rem;
		margin: 40px 0;
	}
	.input-container {
		display: flex;
		width: 80%;
		max-width: 500px;
		margin: auto;
		input {
			padding: 8px 20px;
			width: 80%;
			outline: 1px solid
				${({ isRomanNumberInvalid }) =>
					isRomanNumberInvalid ? "#e00" : "#000"};
			color: ${({ isRomanNumberInvalid }) =>
				isRomanNumberInvalid ? "#e00" : "#000"};
		}
		button {
			padding: 8px 20px;
			color: ${({ theme }) => theme.colors.textWhite};
			border-radius: 0 10px 10px 0;
			border: 0;
			background-color: ${props =>
				props.isRomanNumberInvalid
					? "#e00"
					: props.theme.colors.mainBlue};
			cursor: pointer;
			font-size: 1.4rem;
			opacity: 0.9;
			&:hover {
				opacity: 1;
			}
		}
	}
	.converted-number {
		margin: 40px 0;
		font-size: 1.8rem;
		span {
			display: block;
			font-weight: 700;
			font-size: 5rem;
			margin: auto;
			max-width: 90%;
			overflow-x: scroll;
		}
	}
`
