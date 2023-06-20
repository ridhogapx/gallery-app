import { NavLink } from "react-router-dom";

const ExtraMenu = (props) => {
    const { styleMenu } = props
    const { styleLink} = props;

    return (
        <nav className={styleMenu}>
            <div>
                <NavLink to="/concept" className={styleLink}>Concept</NavLink>
            </div>
            <div>
                <a href='#' className={styleLink}>Ilustration</a>
            </div>
            <div>
                <NavLink to="" className={styleLink}>Personal Project</NavLink>
            </div>
            <div>
                <a href='#' className={styleLink}>Contact</a>
            </div>
           
        </nav>
    )
}

export default ExtraMenu