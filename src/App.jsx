import { Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import HomePage from "./pages/HomePage"
import ConceptPage from "./pages/ConceptPage"
import Navbar from "./components/Navbar/Navbar"
import ExtraMenu from "./components/Navbar/ExtraMenu"
import IlustrationPage from "./pages/IlustrationPage"
import PersonalPage from "./pages/PersonalPage"
import ContactPage from "./pages/ContactPage"
 

function App() {
    const location = useLocation()
   
	const [visibilityContent, setVisibilityContent] = useState(true);
	const [hamContainer, setHamContainer] = useState()
	const [hamburger, setHamburger] = useState()

    useEffect(() => {
		const navContainer = document.querySelector("#mobile-nav")
		const ham = document.querySelector("#ham").children

		setHamburger(ham)
		setHamContainer(navContainer)

    }, [])

	useEffect(() => {
		if(hamContainer !== undefined) {
			if(hamContainer.classList.contains("h-screen")) {
				hamContainer.classList.remove("h-screen")
				hamContainer.classList.add("h-0")
				setVisibilityContent(true)

				for(let i = 0; i < hamburger.length; i++) {
					hamburger[i].classList.toggle("cross")
				}
			}
		}
	}, [location])

	const toggleMenu = () => {
		for(let i = 0; i < hamburger.length; i++) {
			hamburger[i].classList.toggle("cross")
		}
		setVisibilityContent((current) => !current)

		hamContainer.classList.toggle("h-0")
		hamContainer.classList.toggle("h-screen")
			
		
	}

    return (
      <div className="font-main max-w-screen overflow-hidden">
       <Navbar handler={toggleMenu} />
       <ExtraMenu />
       
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage visibility={visibilityContent}/>} />
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

