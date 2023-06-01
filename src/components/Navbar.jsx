const Navbar = (props) => {
    const { handler } = props;
    const { hamburger } = props;

    return (
        <div className="container fixed top-0 z-10 backdrop-blur-md w-screen ">
            <div className="flex w-screen mx-2 p-3 max-w-full justify-between ">
                <h2 className="text-xl lg:mx-5 font-bold">Gions Ilustrator</h2>
                {/* Hamburger */}
                <div onClick={handler} className="md:hidden">
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                    <span className={hamburger}></span>
                </div>
                <div className="flex">
                    <a href="#" className="block mx-3 border-b-2 border-slate-700">Concept</a>
                    <a href="# "className="block mx-3">Ilustration</a>
                    <a href="#" className="block mx-3">Personal</a>
                    <a href="#" className="block mx-3">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar