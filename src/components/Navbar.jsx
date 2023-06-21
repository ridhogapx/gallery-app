import { NavLink } from "react-router-dom";
import icon from "../assets/50.png"

const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;

    return (
        <div className="container fixed top-0 z-10 backdrop-blur-md w-screen">
            <div className="flex w-screen mx-2 p-3 max-w-full justify-between ">
                {/* <h2 className="text-xl lg:mx-5 font-bold">Gions Ilustrator</h2> */}
                <img src={icon} alt="Icon" className="mx-5" />
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