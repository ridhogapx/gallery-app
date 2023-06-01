import first from "../assets/concept/1.jpg"
import second from "../assets/concept/2.jpg"
import third from "../assets/concept/3.jpg"
import fourth from "../assets/concept/4.jpg"
import five from "../assets/concept/5.jpg"


const Concept = () => {
    return (
        <div className="container mx-2 p-3 pt-16">
            <div className="max-w-full">
                <h2 className="text-lg w-fit font-semibold border-b-2 border-red-600 ">Concept</h2>
            </div>

            <div className="w-screen flex flex-wrap md:justify-center">
                <div className="max-w-3/4 mt-2 md:max-w-72 md:mx-2 md:max-h-72 md:overflow-hidden">
                    <img src={first} alt="Content" width="300" />
                </div>

                <div className="max-w-3/4 mt-2 md:max-w-72 md:mx-2 md:max-h-72 md:overflow-hidden">
                    <img src={second} alt="Content" width="300" />
                </div>

                <div className="max-w-3/4 mt-2 md:max-w-72 md:mx-2 md:max-h-72 md:overflow-hidden">
                    <img src={third} alt="Content" width="300"  />
                </div>

                <div className="max-w-3/4 mt-2 md:max-w-72 md:mx-2 md:max-h-72 md:overflow-hidden">
                    <img src={fourth} alt="Content" width="300" />
                </div>

                <div className="max-w-3/4 mt-2 md:max-w-72 md:mx-2 md:max-h-72 md:overflow-hidden">
                    <img src={five} alt="Content" width="300"/>
                </div>

            </div>
        </div>
    )
}

export default Concept