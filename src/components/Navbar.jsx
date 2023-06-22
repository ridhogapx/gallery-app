import { NavLink } from "react-router-dom";
import icon from "../assets/pls.png"

const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;
    const style = ["block", "mx-3", "transition", "ease-in-out"]

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
                    <NavLink to="/" className={style.join(" ")}>Home</NavLink>
                    <NavLink to="/concept" className={style.join(" ")}>Concept</NavLink>
                    <NavLink to="/ilustration" className={style.join(" ")}>Ilustration</NavLink>
                    <NavLink to="/personal" className={style.join(" ")}>Personal Project</NavLink>
                    <NavLink to="/contact" className={style.join(" ")}>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar