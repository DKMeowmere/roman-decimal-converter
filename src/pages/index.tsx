import type { NextPage } from "next"
import { MainContainer } from "./index.styles"
import bg from "../../public/img/ancient-rome-road.jpg"
import DarkerBackground from "../components/DarkerBackground"
import Link from "next/link"
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
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	} as Variants,
	subtitle: {
		initial: {
			x: "-110vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.75,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	} as Variants,
	button: {
		initial: {
			x: "-110vw",
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
		hover: {
			opacity: 1,
			boxShadow: "0 0 8px 2px #0008",
		},
	} as Variants,
}

const Home: NextPage = () => {
	return (
		<>
			<MainContainer url={"http://localhost:3000/"} bg={bg.src}>
				<DarkerBackground>
					<motion.h1
						variants={variants.title}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						Roman Numbers Converter
					</motion.h1>
					<motion.h2
						variants={variants.subtitle}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						Przelicz cyfry rzymskie na liczby dziesiętne i odwrotnie
					</motion.h2>
					<Link href="/converter">
						<motion.button
							variants={variants.button}
							initial="initial"
							animate="animate"
							whileHover="hover"
							exit="exit"
						>
							Zacznij przeliczanie
						</motion.button>
					</Link>
				</DarkerBackground>
			</MainContainer>
		</>
	)
}

export default Home
