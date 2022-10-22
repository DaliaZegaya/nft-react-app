// import "./Header.css";
// import React from "react";
// import { Container } from 'reactstrap'
// import { NavLink, Link } from "react-router-dom";


// const NAV_LINKS = [
//   {
//     pageName: "Home",
//     url: '/home'
//   },
//   {
//     pageName: "Market",
//     url: '/market'
//   },
//   {
//     pageName: "Create",
//     url: '/create'
//   },
//   {
//     pageName: "About",
//     url: '/about'
//   },
//   {
//     pageName: "Contact",
//     url: '/contact'
//   }

// ]




// function Header() {
//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation">
//           <div className="logo">
//             <h2 className="d-flex gap-2 align-item-center">
//               <span><i className="ri-fire-fill"></i></span>
//               NFT's
//             </h2> 
//           </div>

//           <div className="nav__manu">
//             <ul className="nav__list">
//               {
//                 NAV_LINKS.map((item,index)=>
//                   <li className="nav_item" key={index}>
//                   <NavLink to={item.url} >
//                     {item.pageName}
//                   </NavLink>
//                 </li>
//                 )
//               }
//             </ul>
//           </div>

//           <div className="nav__right d-flex align-items-center gap-5">
//             <button className="btn d-flex gap-2 align-items-center">
//             <span><i className="ri-user-line"></i></span>
//               <Link to="login">
//                 LOGIN
//               </Link>
//             </button>

//             <span className="mobile_menu"><i className="ri-menu-line"></i></span>

//           </div>

//         </div>
//       </Container>

//     </header>
//   );
// };

// export default Header;
