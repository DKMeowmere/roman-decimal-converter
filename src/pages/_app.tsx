import "../../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { theme } from "../app/theme"
import { Provider as ReduxProvider } from "react-redux"
import store from "../app/store"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
	return (
		<ReduxProvider store={store}>
			<ThemeProvider theme={theme}>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.pathname} />
				</AnimatePresence>
			</ThemeProvider>
		</ReduxProvider>
	)
}

export default MyApp
