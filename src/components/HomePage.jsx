import Concept from "./Concept"
import Ilustration from "./Ilustration"
import Personal from "./Personal"
import Footer from "./Footer"
import Hero from "./Hero"

// Todo: Hero Section

const HomePage = (props) => {
	const { visibility } = props
  	return (
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
  )
}

export default HomePage