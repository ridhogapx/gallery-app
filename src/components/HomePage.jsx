import { useState } from "react"
import Navbar from "./Navbar"
import ExtraMenu from "./ExtraMenu"
import Concept from "./Concept"
import Ilustration from "./Ilustration"
import Personal from "./Personal"
import Footer from "./Footer"

const HomePage = () => {
	const [hamburger, setHumberger] = useState("block mx-4 transition ease-in-out my-2 px-6 h-0.5 bg-slate-600")
  	const [styleMenu, setStyleMenu] = useState("overflow-hidden flex flex-col gap-y-16 h-0 justify-center items-center")
  	const [styleLink, setStyleLink] = useState("transition ease-in duration-300 text-2xl font-bold opacity-0 ");
  	const [visibilityContent, setVisibilityContent] = useState(true);


  	const toggleMenu = () => {
	    if(hamburger.includes("cross")) {
	        setHumberger(previous => {
	          return previous.replace("cross", " ")
	        })
	        setStyleMenu(previous => {
	          return previous.replace("h-screen", "h-0")
	        })
	        setStyleLink(previous => {
	          return previous.concat(" ", "opacity-0")
	        })
	        setVisibilityContent(true);
	    } else {
	        setHumberger(previous => {
	         return previous.concat(" ", "cross")
	        })
	        setStyleMenu(previous => {
	          return previous.replace("h-0", "h-screen")
	        })
	        setStyleLink(previous => {
	          return previous.replace("opacity-0", " ")
	        })
	        setVisibilityContent(false);
	    }
    
  }

  return (
    <div className="font-main overflow-hidden">
      {/* Navbar */}
     <Navbar handler={toggleMenu} hamburger={hamburger}/>
     <ExtraMenu styleMenu={styleMenu} styleLink={styleLink}/>
     {/* Main content */}
     {visibilityContent &&
        <>
          <Concept />
          <Ilustration />
          <Personal />
          <Footer />
        </>
     }
     
    </div>
  )
}

export default HomePage