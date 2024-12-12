// import {BrowserRouter ,Routes , Route, Outlet, Navigate} from "react-router-dom"

// //COMPONENTS
// import Login from "./components/account/Login"
// import Register from "./components/account/Register"
// import DataProvider, { DataContext } from "./Context/DataProvider"
// import Home from "./components/pages/Home"
// import About from "./components/pages/About"
// import Contact from "./components/pages/Contact"
// import { useContext, useEffect, useState } from "react"

// function App() {

//   const {isAuthenticated} = useContext(DataContext)

//   const PrivateRoute = () => {
//     if(isAuthenticated){
//       return(
//         <>
//         <Outlet/>
//         </>
//       )
//     }
//     else{
//       return(
//         <Navigate replace to={"/"}/>
//       )
//     }
//   }

//   return (
//     <BrowserRouter>

//       <DataProvider>
    
//       <Routes>

//         <Route path="/" element={<Login/>}/>

//         <Route path="/register" element={<Register/>}/>

//         {/* PRIVATE ROUTES AFTER LOGIN */}
//         {/* PRIVATE ROUTES AFTER LOGIN */}

//         <Route path="/" element={<PrivateRoute/>}>

//         <Route path="/home" element={<Home/>}/>

//         <Route path="/about" element={<About/>}/>

//         <Route path="/contact" element={<Contact/>}/>

//         </Route>

//         {/* PRIVATE ROUTES AFTER LOGIN */}
//         {/* PRIVATE ROUTES AFTER LOGIN */}

//       </Routes>
      
//       </DataProvider>

//     </BrowserRouter>
//   )
// }

// export default App



import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import DataProvider, { DataContext } from "./Context/DataProvider";
import { Suspense, lazy } from "react";

// Lazy-loaded components
const Login = lazy(() => import("./components/account/Login"));
const Register = lazy(() => import("./components/account/Register"));
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));

function App() {
  const { isAuthenticated } = useContext(DataContext);

  const PrivateRoute = () => {
    if (isAuthenticated) {
      return (
        <>
          <Outlet />
        </>
      );
    } else {
      return <Navigate replace to="/" />;
    }
  };

  return (
    <BrowserRouter>
      <DataProvider>
        {/* Add Suspense to handle the fallback */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PRIVATE ROUTES AFTER LOGIN */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
