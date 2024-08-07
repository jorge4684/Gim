import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Items from "./Pages/Items"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/items" element={<Items/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App
