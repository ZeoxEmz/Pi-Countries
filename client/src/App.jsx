import LandingPage from './components/LANDING PAGE/LandingPage'
import Home from './components/Home Page/home'
import {Route,Routes, useLocation} from "react-router-dom"
import Detail from './components/Detail Page/Detail'
import Form from './components/Form Page/Form'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"

function App() {
  const {pathname} = useLocation()
  return (
    <>
      {(pathname !== "/") && <Navbar/>}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
