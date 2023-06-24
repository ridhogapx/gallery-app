import { NavLink } from "react-router-dom"
import Card from "./Card"
import Stats from "./Stats"
import StatsSkeleton from "./StatsSkeleton"

const Hero = () => {
    return(
        <div className="container lg:mx-5 pt-20 flex flex-wrap">
					<Card title="About Me" children={
						<div className="flex flex-col">
							<p className="text-base mt-2 tracking-wide text-slate-400">
								Hi! My name is Gions Freekley. Passionate student who love 2D and 3D things, such as Animation, Ilustration, Character Design, and 3D Modelling. I like to keep learning those things as i want to improve my own arts! 
							</p>
							<div className="navMenu block">
								<NavLink to="/contact" className="mt-4 block w-[200px]  px-10 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition ease-in-out text-base hover:opacity-70">Contact</NavLink>
							</div>
						</div>
					} />
					<Card title="Skills" children={
						<div className="mt-2">
							<StatsSkeleton title="3D Modelling" progress={<Stats width="w-[65%]" />} />
							<StatsSkeleton title="Photoshop" progress={<Stats width="w-[54%]"/>} />
							<StatsSkeleton title="2D Animation" progress={<Stats width="w-[20%]"/>} />
							<StatsSkeleton title="3D Animation" progress={<Stats width="w-[30%]"/>} />
							<StatsSkeleton title="Drawing" progress={<Stats width="w-[70%]"/>} />
						</div>
					} />
				</div>
    )
}

export default Hero