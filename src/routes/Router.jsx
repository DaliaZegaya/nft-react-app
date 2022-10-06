import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom'

import About from '../components/pages/About/About.component'
import Contact from '../components/pages/Contact/Contact.component'
import Create from '../components/pages/Create/Create.component'
import EditProfile from '../components/pages/Edit-profile/Edit-profile.component'
import Home from '../components/pages/Home/Home.component'
import Market from '../components/pages/Market/Market.component'
import NftDetails from '../components/pages/Nft-details/Nft-details.component'
import SellerProfile from '../components/pages/Seller-profile/Seller-profile.component'
import Wallet from '../components/pages/Wallet/Wallet.component'

function Router(){
    return (
        <Routes>
        <Route path="/" element={<Navigate to={<Home/>}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element= {<Market/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/seller-profile" element={<SellerProfile/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/market:id" element={<NftDetails/>} />
      </Routes>

    )
}
export default Router