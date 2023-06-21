const Hero = () => {
    return(
        <div className="container lg:mx-5 pt-20">
						<div className="m-5 border-2 p-5 border-zinc-100 rounded-lg">
							<h2 className="text-xl font-semibold lg:text-xl">About Me</h2>
							<p className="text-lg mt-2 text-slate-400">
								Hi! My name is Gions Freekley. Passionate student who love 2D and 3D things, such as Animation, Ilustration, Character Design, and 3D Modelling. I like to keep learning those things as i want to improve my own arts! 
							</p>
							<p className="text-lg mt-2 text-slate-400">You can contact me throught below button:  </p>
							<button className="mt-2 px-10 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-70 transition ease-in-out">Contact</button>
					</div>
				</div>
    )
}

export default Hero