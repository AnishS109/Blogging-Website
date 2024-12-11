import {BrowserRouter ,Routes , Route, Outlet, Navigate} from "react-router-dom"

//COMPONENTS
import Login from "./components/account/Login"
import Register from "./components/account/Register"
import DataProvider, { DataContext } from "./Context/DataProvider"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import { useContext, useEffect, useState } from "react"

function App() {

  const {isAuthenticated} = useContext(DataContext)

  const PrivateRoute = () => {
    if(isAuthenticated){
      return(
        <>
        <Outlet/>
        </>
      )
    }
    else{
      return(
        <Navigate replace to={"/"}/>
      )
    }
  }

  return (
    <BrowserRouter>

      <DataProvider>
    
      <Routes>

        <Route path="/" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>

        <Route path="/" element={<PrivateRoute/>}>

        <Route path="/home" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>

        </Route>

      </Routes>
      
      </DataProvider>

    </BrowserRouter>
  )
}

export default App
