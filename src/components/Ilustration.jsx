import first from "../assets/ilustration/1.jpg"
import second from "../assets/ilustration/2.jpg"
import third from "../assets/ilustration/3.jpg"

const Ilustration = () => {
    return(
    	<div className="container mx-2 mt-3 p-3">
    		<div className="max-w-full">
    			<h2 className="text-lg w-fit font-semibold border-b-2 border-green-600 md:text-center">Ilustration</h2>
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

export default Ilustration