import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <div className="">
        <div className="flex  justify-between py-4 items-center">
        <NavLink className={"font-bold text-3xl"}> 
            Vioutou 
        </NavLink>

        <div className="bg-white text-black text-center p-2 px-4 rounded-full">
            <a href="https://wa.me/+22967280018">Discutons</a>
        </div>  
        </div>
      </div>
    </div>
  )
}
