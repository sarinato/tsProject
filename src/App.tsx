import './App.scss'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import Login from './components/Login/Login'

const App : React.FC = () => {

  const [token, setToken] = useState<undefined>()

  if(!token){
    return(
      <Login setToken={setToken} />
    )
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/pricing' element= {<Pricing />} />
      </Routes>
    </>

    
  )
}

export default App
