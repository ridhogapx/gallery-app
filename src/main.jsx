import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    	<Routes>
    		<Route path="/*" element={<App />} ></Route>
    	</Routes>
    </Router>
  </React.StrictMode>,
)
