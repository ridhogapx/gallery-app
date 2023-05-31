const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;

    return (
        <div className="container  w-screen bg-white shadow">
            <div className="flex w-screen mx-2 p-3 max-w-full justify-between ">
                <h2 className="text-xl font-bold">Gions Ilustrator</h2>
                <div onClick={handler}>
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar