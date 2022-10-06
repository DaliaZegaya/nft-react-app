import React from "react";
import Router from "../../../routes/Router";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout(){
    return(
        <>
        <Header/>
        <div>
            <Router/>
        </div>
        <Footer/>
        </>
    )
}
