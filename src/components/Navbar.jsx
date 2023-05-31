const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;

    return (
        <div className="container  w-screen bg-white shadow">
            <div className="flex w-screen mx-2 p-3 text-xl max-w-full font-bold justify-between ">
                <h2>Gions Freekley</h2>
                <div onClick={handler}>
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar