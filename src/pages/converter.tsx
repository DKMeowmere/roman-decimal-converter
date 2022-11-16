import React, { useState } from "react"
import DarkerBackground from "../components/DarkerBackground"
import Wrapper from "../components/Wrapper"
import { ConverterContainer } from "./converter.styles"
import bg from "../../public/img/ancient-rome-road.jpg"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { convertIntToRoman, convertRomanToInt } from "../app/romanSlice"
import { motion, Variants } from "framer-motion"

const variants = {
	title: {
		initial: {
			x: "-110vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.5,
			},
		},
	} as Variants,
	button: {
		hover: {
			opacity: 1,
			boxShadow: "0 0 8px 2px #0008",
		},
	} as Variants,
	input: {
		focus: {
			boxShadow: "0 0 80px 2px #0008",
		},
	} as Variants,
	inputContainer: {
		initial: {
			x: "-110vw",
		},
		animate: {
			x: 0,
			transition: {
				delay: 0.75,
			},
		},
	} as Variants,
	convertedNumber: {
		initial: {
			x: "-110vw",
		},
		animate: {
			x: 0,
			transition: {
				delay: 1,
			},
		},
	} as Variants,
	number: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 1,
				duration: 0.5,
			},
		},
	} as Variants,
}

export default function Converter() {
	const url = useAppSelector(state => state.roman.url)
	const decimalNumber = useAppSelector(state => state.roman.decimalNumber)
	const romanNumber = useAppSelector(state => state.roman.romanNumber)
	const isRomanNumberInvalid = useAppSelector(
		state => state.roman.isNumberInvalid
	)
	const [inputValue, setInputValue] = useState("")
	const dispatch = useAppDispatch()

	return (
		<ConverterContainer
			url={url}
			bg={bg.src}
			isRomanNumberInvalid={isRomanNumberInvalid}
		>
			<DarkerBackground>
				<Wrapper>
					<motion.h1
						variants={variants.title}
						initial="initial"
						animate="animate"
					>
						Przelicz cyfry rzymskie na liczby dziesiętne i odwrotnie
					</motion.h1>
					<motion.div
						className="input-container"
						variants={variants.inputContainer}
						initial="initial"
						animate="animate"
					>
						<motion.input
							type="text"
							placeholder="wpisz liczbę rzymską lub dzięsiętną..."
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							variants={variants.input}
							whileFocus="focus"
						/>
						<motion.button
							whileHover="hover"
							variants={variants.button}
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
						</motion.button>
					</motion.div>
					<motion.div
						className="converted-number"
						variants={variants.convertedNumber}
						initial="initial"
						animate="animate"
					>
						Liczba w systemie rzymskim:
						<motion.span variants={variants.number}>
							{romanNumber}
						</motion.span>
					</motion.div>
					<motion.div
						className="converted-number"
						variants={variants.convertedNumber}
						initial="initial"
						animate="animate"
					>
						Liczba w systemie dziesiętnym:
						<motion.span variants={variants.number}>
							{decimalNumber}
						</motion.span>
					</motion.div>
					{isRomanNumberInvalid
						? "Liczba musi być poprawna i mniejsza od 5000"
						: ""}
				</Wrapper>
			</DarkerBackground>
		</ConverterContainer>
	)
}
