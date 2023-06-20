import { NavLink } from "react-router-dom";

const ExtraMenu = (props) => {
    const { styleMenu } = props
    const { styleLink} = props;

    return (
        <nav className={styleMenu}>
             <div>
                <NavLink to="/" className={styleLink}>Home</NavLink>
            </div>
            <div>
                <NavLink to="/concept" className={styleLink}>Concept</NavLink>
            </div>
            <div>
                <NavLink to="" className={styleLink}>Ilustration</NavLink>
            </div>
            <div>
                <NavLink to="" className={styleLink}>Personal Project</NavLink>
            </div>
            <div>
                <NavLink to="" className={styleLink}>Contact</NavLink>
            </div>
           
        </nav>
    )
}

export default ExtraMenu