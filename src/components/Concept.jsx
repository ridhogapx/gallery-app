import first from "../assets/concept/1.jpg";
import second from "../assets/concept/2.jpg";
import third from "../assets/concept/3.jpg";
import fourth from "../assets/concept/4.jpg";
import five from "../assets/concept/5.jpg";


const Concept = () => {
    return (
        <div className="container mx-2 p-3">
            <div className="max-w-full">
                <h2 className="text-lg w-fit font-semibold border-b-2 border-red-600 md:text-center">Concept</h2>
            </div>

            <div className="w-screen flex flex-wrap md:justify-center">
                <div className="w-3/4 mt-2 md:w-72 ">
                    <img src={first} alt="Content" />
                </div>

                <div className="w-3/4 mt-2 md:w-72 md:mx-3 md:h-72">
                    <img src={second} alt="Content" />
                </div>

                <div className="w-3/4 mt-2 md:w-72 md:mx-3 md:h-72">
                    <img src={third} alt="Content"  />
                </div>

                <div className="w-3/4 mt-2 md:w-72 md:mx-3 md:max-h-72 md:overflow-hidden">
                    <img src={fourth} alt="Content" />
                </div>

                <div className="w-3/4 mt-2 md:w-72 md:mx-3 md:max-h-72">
                    <img src={five} alt="Content"/>
                </div>

            </div>
        </div>
    )
}

export default Concept