import Card from "./Card"
import Stats from "./Stats"
const Hero = () => {
    return(
        <div className="container lg:mx-5 pt-20 flex">
					<Card title="About Me" children={
						<>
							<p className="text-base mt-2 tracking-wide text-slate-400">
								Hi! My name is Gions Freekley. Passionate student who love 2D and 3D things, such as Animation, Ilustration, Character Design, and 3D Modelling. I like to keep learning those things as i want to improve my own arts! 
							</p>
							<button className="mt-2 px-10 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-70 transition ease-in-out text-base">Contact</button>
						</>
					} />
					<Card title="Skills" children={
						<div className="mt-2">
							<h2 className="text-slate-400 text-base">3D Modelling</h2>
							<Stats width="w-[65%]" />
							<h2 className="mt-1 text-slate-400 text-base">Animation</h2>
							<Stats width="w-[54%]"/>
						</div>
					} />
				</div>
    )
}

export default Hero