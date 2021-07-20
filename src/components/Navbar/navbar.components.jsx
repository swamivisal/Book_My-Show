import React from "react"
import {BiChevronRight,BiSearch,BiMenu,BiChevronsDown} from "react-icons/bi";

const NavSm = () => {
    return (
      <div >
        <div className="text-white flex items-center justify-between ">
          <div>
            <h3 className="text-xl font-bold">It All starts Here!</h3>
            <span className="text-gray-400 text-xs flex items-center">
              Bengaluru <BiChevronRight />
            </span>
          </div> 
          <div className="w-8 h-8">
            <BiSearch className="w-full h-full" />
          </div>
        </div>
      </div>
    );
  };
const NavMd=()=>{
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/>
            <input 
            type="search" 
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies,events,activities"/>

        </div>
    )
}
const NavLg=()=>{
  return(
    <>
      <div className="container mx-auto px-4 flex items-center justify-between ">
        <div className="flex w-1/2 items-center gap-2">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              classNmae="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/>
            <input 
            type="search" 
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies,events,activities"/>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-gray-200 text-xs flex items-center hover:text-white ">
              Bengaluru <BiChevronsDown />
          </span>
          <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">Sign in</button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full"/>
          </div>
        </div>
      </div>
    </>
  )
}
const Navbar=()=>{
    return(
        <>
            <nav className="bg-bms-500 p-2 m-0 border-0">
                {/*mobile screen */}
                <div className="md:hidden bg-bms-500"> 
                    <NavSm/>
                </div>
                {/*medium tab screen*/}
                <div className="hidden md:flex lg:hidden">
                    <NavMd/>
                </div>
                {/*mobile screen */}
                <div className="hidden lg:flex ">
                    <NavLg/>
                </div>
            </nav>
        </>
    )
    
}

export default Navbar