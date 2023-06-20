import Concept from "./Concept"
import Ilustration from "./Ilustration"
import Personal from "./Personal"
import Footer from "./Footer"

const HomePage = (props) => {
	const { visibility } = props
  	return (
		<div className="overflow-hidden">
			{visibility &&
				<>
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