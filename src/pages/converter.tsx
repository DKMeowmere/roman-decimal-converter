import React, { useState } from "react"
import DarkerBackground from "../components/DarkerBackground"
import Wrapper from "../components/Wrapper"
import { ConverterContainer } from "./converter.styles"
import bg from "../../public/img/ancient-rome-road.jpg"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { convertIntToRoman, convertRomanToInt } from "../app/romanSlice"

export default function Converter() {
	const url = useAppSelector(state => state.roman.url)
	const decimalNumber = useAppSelector(state => state.roman.decimalNumber)
	const romanNumber = useAppSelector(state => state.roman.romanNumber)
	const isRomanNumberInvalid = useAppSelector(
		state => state.roman.isNumberInvalid
	)
	const [inputValue, setInputValue] = useState("")
	const dispatch = useAppDispatch()
	console.log(isRomanNumberInvalid)
	return (
		<ConverterContainer
			url={url}
			bg={bg.src}
			isRomanNumberInvalid={isRomanNumberInvalid}
		>
			<DarkerBackground>
				<Wrapper>
					<h1>
						Przelicz cyfry rzymskie na liczby dziesiętne i odwrotnie
					</h1>
					<div className="input-container">
						<input
							type="text"
							placeholder="wpisz liczbę rzymską lub dzięsiętną..."
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
						/>
						<button
							onClick={() => {
								if (isNaN(parseInt(inputValue))) {
									dispatch(
										convertRomanToInt({
											value: inputValue.toUpperCase(),
										})
									)
								} else {
									dispatch(
										convertIntToRoman({
											startingNumber:
												parseInt(inputValue),
										})
									)
								}
							}}
						>
							Zatwierdź
						</button>
					</div>
					<div className="converted-number">
						Liczba w systemie rzymskim: <span>{romanNumber}</span>
					</div>
					<div className="converted-number">
						Liczba w systemie dziesiętnym:
						<span>{decimalNumber}</span>
					</div>
					{isRomanNumberInvalid ? "Liczba musi być poprawna i mniejsza od 5000" : ""}
				</Wrapper>
			</DarkerBackground>
		</ConverterContainer>
	)
}
