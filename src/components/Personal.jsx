import first from "../assets/personal/1.jpg"
import second from "../assets/personal/2.jpg"
import third from "../assets/personal/3.jpg"


const Personal = () => {
	return (
		<div className="container mx-2 mt-3 p-3">
			<div className="w-full">
				<h2 className="text-lg w-fit font-semibold border-b-2 border-yellow-600">Personal</h2>
			</div>
			<div className="w-screen flex flex-wrap md:justify-center">
				<div className="w-3/4 mt-2 md:w-72">
					<img src={first} alt="Content" />
				</div>
				<div className="w-3/4 mt-2 md:w-72">
					<img src={second} alt="Content" />
				</div>
				<div className="w-3/4 mt-2 md:w-72">
					<img src={third} alt="Content" />
				</div>
			</div>
		</div>
	)
}

export default Personal