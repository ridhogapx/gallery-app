import first from "../assets/concept/1.jpg"
import second from "../assets/concept/2.jpg"
import third from "../assets/concept/3.jpg"
import fourth from "../assets/concept/4.jpg"
import five from "../assets/concept/5.jpg"


const Concept = () => {
    return (
        <div className="container mx-2 p-3 pt-16">
            <div className="max-w-full">
                <h2 className="text-lg w-fit lg:mx-10 font-semibold border-b-2 border-red-600 ">Concept</h2>
            </div>

            <div className="max-w-full flex flex-wrap lg:justify-center">
                <div className="max-w-sm max-h-72 mt-2 md:mx-2  overflow-hidden">
                    <img src={first} alt="Content" className="w-72 lg:w-96" />
                </div>

                <div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden">
                    <img src={second} alt="Content" className="w-72 lg:w-96" />
                </div>

                <div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden">
                    <img src={third} alt="Content" className="w-72 lg:w-96"  />
                </div>

                <div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden">
                    <img src={fourth} alt="Content" className="w-72 lg:w-96" />
                </div>

                <div className="max-w-sm max-h-72 mt-2 md:mx-2 overflow-hidden">
                    <img src={five} alt="Content" className="w-72 lg:w-96"/>
                </div>

            </div>
        </div>
    )
}

export default Concept