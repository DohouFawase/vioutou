import React from 'react'

export default function Footer() {
    const years =  new Date().getFullYear()
  return (
    <div>
      <div className="text-black text-center mt-6  ">
        <div className="py-2 px-4 ">
        <p className='text-sm font-bold rounded-lg text-wrap py-4  bg-white'> {years} Copyright all reserve   Coding and Design by <a href="">Fawase DOHOU</a></p>
        </div>
      </div>
    </div>
  )
}
