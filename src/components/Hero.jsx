import profile from "../assets/homepage/maskot.jpg"
const Hero = () => {
    return(
        <div className="container lg:mx-5 pt-20">
					<div className="h-52 lg:h-96 rounded-lg mx-3 p-5 lg:mx-5 bg-slate-100 blur-sm"></div>
					<div className="max-w-full h-52 lg:h-96 flex absolute p-5 top-[10vh] z-10">
						<div className="m-5 h-full hidden lg:block">
							<img src={profile} alt="Profile" className="w-[320px] h-full lg:w-[320px] rounded-md" />
						</div>
						<div className="m-5 ">
							<h2 className="text-lg font-semibold lg:text-xl">About Me</h2>
							<p className="text-base text-slate-400">I am a ilustrator and 3D Designer. My hobby is drawing and watching anime.</p>
						</div>
					</div>
				</div>
    )
}

export default Hero