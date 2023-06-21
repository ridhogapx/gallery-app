const Hero = () => {
    return(
        <div className="container lg:mx-5 pt-20">
					<div className="h-52 lg:h-56 rounded-lg mx-3 p-5 lg:mx-5 bg-white blur-sm"></div>
					<div className="max-w-full h-52 lg:h-96 flex absolute p-5 top-[10vh] z-10">
						<div className="m-5 ">
							<h2 className="text-xl font-semibold lg:text-xl">About Me</h2>
							<p className="text-lg mt-2 text-slate-400">
								Hi! My name is Gions Freekley. Passionate student who love 2D and 3D things, such as Animation, Ilustration, Character Design, and 3D Modelling. I like to keep learning those things as i want to improve my own arts! 
							</p>
							<p className="text-lg mt-2 text-slate-400">Currently, i'm opening commision. You can contact me through platform listed below: </p>
						</div>
					</div>
				</div>
    )
}

export default Hero