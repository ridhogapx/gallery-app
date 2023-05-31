const ExtraMenu = (props) => {
    const { styleMenu } = props
    const { styleLink} = props;

    return (
        <nav className={styleMenu}>
            <div>
                <a href='#' className={styleLink}>Concept</a>
            </div>
            <div>
                <a href='#' className={styleLink}>Ilustration</a>
            </div>
            <div>
                <a href='#' className={styleLink}>Personal</a>
            </div>
            <div>
                <a href='#' className={styleLink}>Contact</a>
            </div>
           
        </nav>
    )
}

export default ExtraMenu