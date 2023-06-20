import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;

    return (
        <div className="container fixed top-0 z-10 backdrop-blur-md w-screen">
            <div className="flex w-screen mx-2 p-3 max-w-full justify-between ">
                <h2 className="text-xl lg:mx-5 font-bold">Gions Ilustrator</h2>
                {/* Hamburger */}
                <div onClick={handler} className="md:hidden">
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                </div>
                <div className="hidden lg:flex">
                    <NavLink to="/" className="block mx-3">Home</NavLink>
                    <NavLink to="/concept" className="block mx-3">Concept</NavLink>
                    <NavLink to="" className="block mx-3">Ilustration</NavLink>
                    <NavLink to="" className="block mx-3">Personal Project</NavLink>
                    <NavLink to="" className="block mx-3">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar