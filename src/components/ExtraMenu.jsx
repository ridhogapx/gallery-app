import { NavLink } from "react-router-dom";

const ExtraMenu = () => {
    return (
        <nav className="overflow-hidden navMenu flex flex-col gap-y-16 h-0 justify-center items-center lg:hidden" id="mobile-nav">
                <NavLink to="/" className="transition ease-in-out duration-300 text-2xl font-bold opacity-0 lg:hidden">Home</NavLink>
                <NavLink to="/concept" className="transition ease-in-out duration-300 text-2xl font-bold opacity-0 lg:hidden">Concept</NavLink>
    
           
                <NavLink to="/ilustration" className="transition ease-in-out duration-300 text-2xl font-bold opacity-0 lg:hidden">Ilustration</NavLink>
    
           
                <NavLink to="/personal" className="transition ease-in-out duration-300 text-2xl font-bold opacity-0 lg:hidden">Personal Project</NavLink>
    
           
                <NavLink to="/contact" className="transition ease-in-out duration-300 text-2xl font-bold opacity-0 lg:hidden">Contact</NavLink>
    
        </nav>
    )
}

export default ExtraMenu