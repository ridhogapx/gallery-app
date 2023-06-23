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
	const [hamburger, setHamburger] = useState()

    useEffect(() => {
		  
		  setVisibilityContent(true)
    }, [location])

	useEffect(() => {
		window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
			if(e.matches) {
			  setVisibilityContent(true);
			}
		  })
		const elNav = document.querySelector("#mobile-nav").children
		const ham = document.querySelector("#ham").children

		setMobileNav(elNav)
		setHamburger(ham)
	},[])

	const toggleMenu = () => {
		if(!hamburger[0].classList.contains("cross"))

			for(let i = 0; i < mobileNav.length; i++) {
				console.log(mobileNav[i])
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

