import { Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import HomePage from "./pages/HomePage"
import ConceptPage from "./pages/ConceptPage"
import Navbar from "./components/Navbar"
import ExtraMenu from "./components/ExtraMenu"
import IlustrationPage from "./pages/IlustrationPage"
import PersonalPage from "./pages/PersonalPage"
import ContactPage from "./pages/ContactPage"
 
/*
Todo:
1. Refactor Code

*/


function App() {
    const location = useLocation()
   
	const [visibilityContent, setVisibilityContent] = useState(true);
	const [mobileNav, setMobileNav] = useState()
	const [hamContainer, setHamContainer] = useState()
	const [hamburger, setHamburger] = useState()

    useEffect(() => {
		const elNav = document.querySelector("#mobile-nav").children
		const navContainer = document.querySelector("#mobile-nav")
		const ham = document.querySelector("#ham").children

		setMobileNav(elNav)
		setHamburger(ham)
		setHamContainer(navContainer)

		if(mobileNav !== undefined) {
			hamContainer.classList.toggle("h-0")
			hamContainer.classList.toggle("h-screen")

			for(let i = 0; i < mobileNav.length; i++) {
				mobileNav[i].classList.toggle("opacity-0")
			}
			
			for(let i = 0; i < hamburger.length; i++) {
				hamburger[i].classList.toggle("cross")
			}
		} 

		setVisibilityContent(true)
    }, [location])

	useEffect(() => {
		window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
			if(e.matches) {
			  setVisibilityContent((current) => !current);
			}
		  })
		const elNav = document.querySelector("#mobile-nav").children
		const navContainer = document.querySelector("#mobile-nav")
		const ham = document.querySelector("#ham").children

		setMobileNav(elNav)
		setHamburger(ham)
		setHamContainer(navContainer)
	},[])

	const toggleMenu = () => {
			setVisibilityContent((current) => !current)
			hamContainer.classList.toggle("h-0")
			hamContainer.classList.toggle("h-screen")

			for(let i = 0; i < mobileNav.length; i++) {
				if(mobileNav[i].classList.contains("opacity-0")) {
					mobileNav[i].classList.toggle("opacity-0")
				}
			}
			
			for(let i = 0; i < hamburger.length; i++) {
				hamburger[i].classList.toggle("cross")
			}
		
	}

    return (
      <div className="font-main max-w-screen overflow-hidden">
       <Navbar handler={toggleMenu} />
       <ExtraMenu />
       
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route index element={<HomePage visibility={visibilityContent}/>} />
              <Route path="/concept" element={<ConceptPage visibility={visibilityContent} />} />
              <Route path="/ilustration" element={<IlustrationPage visibility={visibilityContent}/>} />
			  <Route path="/personal" element={<PersonalPage visibility={visibilityContent} />}  />
			  <Route path="/contact" element={<ContactPage visibility={visibilityContent} />} />
		  </Routes>
        </AnimatePresence>
       </div>
        )
}

export default App;

