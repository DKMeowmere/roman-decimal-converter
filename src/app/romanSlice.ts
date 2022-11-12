import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
	url: string
	romanNumber: string
	isNumberInvalid: boolean
	decimalNumber: number
}

const initialState: InitialState = {
	url: "http://localhost:3000",
	romanNumber: "XVI",
	isNumberInvalid: false,
	decimalNumber: 16,
}

const romanSlice = createSlice({
	name: "roman",
	initialState,
	reducers: {
		convertRomanToInt: (
			state: InitialState,
			action: PayloadAction<{
				value: string
			}>
		) => {
			const roman: {
				I: number
				V: number
				X: number
				L: number
				C: number
				D: number
				M: number
			} = {
				I: 1,
				V: 5,
				X: 10,
				L: 50,
				C: 100,
				D: 500,
				M: 1000,
			}

			const romanNumberRegex =
				/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/
			if (!romanNumberRegex.test(action.payload.value)) {
				state.isNumberInvalid = true
				return
			}
			state.romanNumber = action.payload.value
			state.isNumberInvalid = false

			const s = action.payload.value
			let total = 0
			for (let i = 0; i < s.length; i++) {
				if (
					roman[s.charAt(i) as keyof typeof roman] >=
						roman[s.charAt(i + 1) as keyof typeof roman] ||
					!s.charAt(i + 1)
				) {
					total += roman[s.charAt(i) as keyof typeof roman]
				} else {
					total -= roman[s.charAt(i) as keyof typeof roman]
				}
			}
			state.decimalNumber = total
			return
		},
		convertIntToRoman: (
			state: InitialState,
			action: PayloadAction<{
				startingNumber: number
			}>
		) => {
			const romanNum = [
				"I",
				"IV",
				"V",
				"IX",
				"X",
				"XL",
				"L",
				"XC",
				"C",
				"CD",
				"D",
				"CM",
				"M",
			]
			const latinNum = [
				1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000,
			]
			if (action.payload.startingNumber > 5000) {
				state.isNumberInvalid = true
				return
			}

			state.isNumberInvalid = false
			let romanString = ""
			state.decimalNumber = action.payload.startingNumber
			let nextNumber = action.payload.startingNumber

			function toRoman(number: number): void {
				let firstNumLower = 0
				let index = 0
				for (let i = 0; i < latinNum.length; i++) {
					if (number < latinNum[i]) break
					firstNumLower = latinNum[i]
					index = i
				}
				nextNumber = number % firstNumLower
				for (let i = 0; i < Math.floor(number / firstNumLower); i++) {
					romanString += romanNum[index]
				}
				console.log(nextNumber)
				if (nextNumber !== 0) return toRoman(nextNumber)
				else return
			}

			toRoman(nextNumber)
			state.romanNumber = romanString
		},
	},
})

export default romanSlice
export const { convertRomanToInt, convertIntToRoman } = romanSlice.actions
