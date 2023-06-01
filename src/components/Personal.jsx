import first from "../assets/personal/1.jpg"
import second from "../assets/personal/2.jpg"
import third from "../assets/personal/3.jpg"


const Personal = () => {
	return (
		<div className="container mx-2 mt-3 p-3">
			<div className="max-w-full">
				<h2 className="text-lg w-fit lg:mx-10 font-semibold border-b-2 border-yellow-600">Personal</h2>
			</div>
			<div className="max-w-full flex flex-wrap lg:justify-center">
				<div className="max-w-sm max-h-72 md:mx-2 overflow-hidden mt-2 md:w-72">
					<img src={first} alt="Content" className="w-72 lg:w-96" />
				</div>
				<div className="max-w-sm max-h-72 md:mx-2 overflow-hidden mt-2 md:w-72">
					<img src={second} alt="Content" className="w-72 lg:w-96" />
				</div>
				<div className="max-w-sm max-h-72 md:mx-2 overflow-hidden mt-2 md:w-72">
					<img src={third} alt="Content" className="w-72 lg:w-96" />
				</div>
			</div>
		</div>
	)
}

export default Personal