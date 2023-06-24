import Hero from "../components/Hero"
import Transition from "../components/Effect/Transition"
import Concept from "../components/Concept"
import Ilustration from "../components/Ilustration"
import Personal from "../components/Personal"
import Footer from "../components/Footer"


const HomePage = (props) => {
	const { visibility } = props
  	return (
		<Transition children={
			<div className="overflow-hidden">
				{visibility &&
					<>
					<Hero />
					<Concept />
					<Ilustration />
					<Personal />
					<Footer />
					</>
				}
			</div>
		}/>
  )
}

export default HomePage