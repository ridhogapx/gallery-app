import { NavLink } from "react-router-dom";

const ExtraMenu = (props) => {
    const { styleMenu } = props
    const { styleLink} = props;

    return (
        <nav className={styleMenu} id="mobileNav">
             <div className="mNav">
                <NavLink to="/" className={styleLink}>Home</NavLink>
            </div>
            <div className="mNav">
                <NavLink to="/concept" className={styleLink}>Concept</NavLink>
            </div>
            <div className="mNav">
                <NavLink to="" className={styleLink}>Ilustration</NavLink>
            </div>
            <div className="mNav">
                <NavLink to="" className={styleLink}>Personal Project</NavLink>
            </div>
            <div className="mNav">
                <NavLink to="" className={styleLink}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default ExtraMenu