//import React from 'react'

import {  Link } from "react-router-dom"
import SearchComponent from "./Search"
import Login from "../Pages/Login"

function NavBar() {
 
  return (
    <>
        
        <div className="flex w-full h-20 bg-red-800 absolute top-0 items-center place-content-around">
            <img src="" alt="logo" />
            <SearchComponent className="place-content-center w-40"/>
            <buttom className="w-32 h-12 bg-yellow-500 text-center place-content-center rounded-xl items-center " onClick={()=>{<Link to="/loginssss"></Link>}}>Login</buttom>
            <buttom className="w-32 h-12 bg-blue-500 text-center place-content-center rounded-xl items-center " onClick={()=>{}}>Register</buttom>

        </div>
    </>
  )
}

export default NavBar