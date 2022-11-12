import type { NextPage } from "next"
import { MainContainer } from "./index.styles"
import bg from "../../public/img/ancient-rome-road.jpg"
import DarkerBackground from "../components/DarkerBackground"
import Link from "next/link"

const Home: NextPage = () => {
	console.log(bg)
	return (
		<>
			<MainContainer url={"http://localhost:3000/"} bg={bg.src}>
				<DarkerBackground>
					<h1>Roman Numbers Converter</h1>
					<h2>
						Przelicz cyfry rzymskie na liczby dziesiętne i odwrotnie
					</h2>
					<Link href="/converter">
						<button>Zacznij przeliczanie</button>
					</Link>
				</DarkerBackground>
			</MainContainer>
		</>
	)
}

export default Home
