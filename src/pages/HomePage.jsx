import Transition from "../components/Transition"
import Concept from "../components/Concept"
import Ilustration from "../components/Ilustration"
import Personal from "../components/Personal"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

// Todo: Hero Section

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