import {BrowserRouter ,Routes , Route} from "react-router-dom"

//COMPONENTS
import Login from "./components/account/Login"
import Register from "./components/account/Register"

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
