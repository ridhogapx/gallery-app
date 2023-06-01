import Section from "./Section"
import first from "../assets/personal/1.jpg"
import second from "../assets/personal/2.jpg"
import third from "../assets/personal/3.jpg"

const Personal = () => {
	const content = [
		{
			id: 1,
			src: first
		},
		{
			id: 2,
			src: second
		},
		{
			id: 3,
			src: third
		},
	]

	return (
		<Section title="Personal" content={content} />
	)
}

export default Personal