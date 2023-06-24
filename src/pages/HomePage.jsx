import { useState } from "react"
import Hero from "../components/Common/Hero"
import Transition from "../components/Effect/Transition"
import Concept from "../components/Common/Concept"
import Ilustration from "../components/Common/Ilustration"
import Personal from "../components/Common/Personal"
import Modal from "../components/Modal/Modal"
import Footer from "../components/Common/Footer"


const HomePage = (props) => {
	const { visibility } = props
	const [showModal, setShowModal] = useState(false)

  	return (
		<Transition children={
			<div className="overflow-hidden">
				{visibility &&
					<>
					{showModal &&
						<Modal />
					}
					
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