// import { Result } from "postcss"
import Home from "./pages/Home"
import Result from "./pages/Result"
import BuyCredits from "./pages/BuyCredits"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { AppContext } from "./context/AppContext"
import { useContext } from "react"
import { ToastContainer } from 'react-toastify';

function App() {
  const {showLogin} = useContext(AppContext);
  return (
    <div className="px-4 text-white sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <ToastContainer position="bottom-right"/>
      <Navbar/>
      {showLogin && <Login/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/buycredits" element={<BuyCredits/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
