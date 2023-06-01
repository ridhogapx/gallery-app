import first from "../assets/ilustration/1.jpg"
import second from "../assets/ilustration/2.jpg"
import third from "../assets/ilustration/3.jpg"

const Ilustration = () => {
    return(
    	<div className="container mx-2 mt-3 p-3">
    		<div className="max-w-full">
    			<h2 className="text-lg w-fit font-semibold border-b-2 border-lime-600">Ilustration</h2>
    		</div>
    		<div className="max-w-full flex flex-wrap ">
    			<div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden">
    				<img src={first} alt="Content" className="w-72 lg:w-96" />
    			</div>
    			<div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden ">
    				<img src={second} alt="Content" className="w-72 lg:w-96" />
    			</div>
    			<div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden ">
    				<img src={third} alt="Content" className="w-72 lg:w-96" />
    			</div>
    		</div>
    	</div>
    )
}

export default Ilustration