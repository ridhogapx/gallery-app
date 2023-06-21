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
						<>
							<Stats title="3D Modelling" width="w-[65%]" />
							<Stats title="Photoshop" width="w-[54%]"/>
							<Stats title="2D Animation" width="w-[20%]"/>
							<Stats title="3D Animation" width="w-[30%]"/>
							<Stats title="Drawing" width="w-[70%]"/>
						</>
					} />
				</div>
    )
}

export default Hero