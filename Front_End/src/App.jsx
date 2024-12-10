import {BrowserRouter ,Routes , Route} from "react-router-dom"

//COMPONENTS
import Login from "./components/account/Login"
import Register from "./components/account/Register"
import DataProvider from "./Context/DataProvider"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"

function App() {

  return (
    <BrowserRouter>

      <DataProvider>
    
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      
      </DataProvider>

    </BrowserRouter>
  )
}

export default App
