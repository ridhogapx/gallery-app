import { NavLink } from "react-router-dom";

const ExtraMenu = (props) => {
    const { styleMenu } = props
    const { styleLink} = props;

    return (
        <nav className={styleMenu}>
             <div className="navMenu">
                <NavLink to="/" className={styleLink}>Home</NavLink>
            </div>
            <div className="navMenu">
                <NavLink to="/concept" className={styleLink}>Concept</NavLink>
            </div>
            <div className="navMenu">
                <NavLink to="/ilustration" className={styleLink}>Ilustration</NavLink>
            </div>
            <div className="navMenu">
                <NavLink to="/personal" className={styleLink}>Personal Project</NavLink>
            </div>
            <div className="navMenu">
                <NavLink to="/contact" className={styleLink}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default ExtraMenu