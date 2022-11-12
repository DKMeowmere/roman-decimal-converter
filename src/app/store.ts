import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import romanReducer from "./romanSlice"

const store = configureStore({
	reducer: {
		roman: romanReducer.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
export default store
