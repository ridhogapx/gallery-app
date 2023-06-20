import { Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./components/HomePage"
import Concept from "./components/Concept"
/*
Todo:
1. Fix responsive (Done)
2. Navbar Desktop (Done)
2. Router

 */

function App() {
    const location = useLocation()
    // Style state
    const [transition, setTransition] = useState("fadeIn")
    // Location state
    const [currentLocation, setCurrentLocation] = useState(location)

    useEffect(() => {
        if(currentLocation != location) setTransition("fadeOut")
    }, [location, currentLocation])

    return (
       <>
       <div className={transition} onAnimationEnd={() => {
        if(transition == "fadeOut") {
            setTransition("fadeIn")
            setCurrentLocation(location)
        }
       }}>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/concept" element={<Concept />} />
        </Routes>
       </div>
        
       </>
        )
 
}

export default App;

