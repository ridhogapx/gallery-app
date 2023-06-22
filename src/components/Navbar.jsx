import { NavLink } from "react-router-dom";
import icon from "../assets/pls.png"

const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;
    const style = ["block", "mx-3", "transition", "ease-in-out"]
    const implementStyle = style.join(" ")

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
                    <NavLink to="/" className={implementStyle}>Home</NavLink>
                    <NavLink to="/concept" className={implementStyle}>Concept</NavLink>
                    <NavLink to="/ilustration" className={implementStyle}>Ilustration</NavLink>
                    <NavLink to="/personal" className={implementStyle}>Personal Project</NavLink>
                    <NavLink to="/contact" className={implementStyle}>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar