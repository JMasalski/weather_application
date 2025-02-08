
import React from 'react'
import SearchInput from "./SearchInput"


const Navbar = () => {

  
  return (
    <header>
      <div className="flex justify-between items-center p-6 md:p-8 lg:p-12 ">
        <h1 className="font-bold text-lg md:text-xl lg:text-3xl">Good Morning</h1>
        <SearchInput/>
      </div>
  
    </header>
  )
}

export default Navbar