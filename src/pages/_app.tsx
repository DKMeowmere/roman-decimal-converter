import "../../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { theme } from "../app/theme"
import { Provider as ReduxProvider } from "react-redux"
import store from "../app/store"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ReduxProvider store={store}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</ReduxProvider>
	)
}

export default MyApp
