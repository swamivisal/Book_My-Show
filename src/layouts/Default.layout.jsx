import React from "react"
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";
import Navbar from "../components/Navbar/navbar.components"


const DefaultLayout=(props)=>{
    return (
        <>
           <Navbar/>
           <HeroCarousal/>
           {props.children}
        </>
    )
};

export default DefaultLayout;