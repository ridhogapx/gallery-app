import { NavLink } from "react-router-dom";
import icon from "../assets/pls.png"

const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;

    return (
        <div className="container fixed top-0 z-10 backdrop-blur-md w-screen">
            <div className="flex w-screen mx-2 p-3 max-w-full justify-between items-center ">
                <div className="flex items-center">
                    <NavLink to="/"><img src={icon} alt="Icon" className="mx-3" /></NavLink>
                    <h2 className="font-semibold text-lg">Gions Ilustrator</h2>
                </div>
                {/* Hamburger */}
                <div onClick={handler} className="md:hidden">
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                </div>
                <div className="hidden lg:flex navMenu transition ease-in-out">
                    <NavLink to="/" className="block mx-3 transition ease-in-out">Home</NavLink>
                    <NavLink to="/concept" className="block mx-3 transition ease-in-out">Concept</NavLink>
                    <NavLink to="/ilustration" className="block mx-3 transition ease-in-out">Ilustration</NavLink>
                    <NavLink to="/personal" className="block mx-3 transition ease-in-out">Personal Project</NavLink>
                    <NavLink to="/contact" className="block mx-3 transition ease-in-out">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar