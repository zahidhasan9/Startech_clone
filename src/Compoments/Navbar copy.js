import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {menuitem} from './Menu Item/Menu_iem'

export default function Navbar(item) {
  // Toggler function
  const [opensubMenu, setOpensubMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const[navsticky,setavsticky]=useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const togglesubMenu = () => {
    setOpensubMenu((prev)=>!prev);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setavsticky(true);
    } else {
      setavsticky(false);
    }
  }
  window.addEventListener('scroll', handleScroll);



  return (
  <>
    <body  className={navsticky?"common-home on-scroll":"common-home "}>

        <div className="f-btn mc-toggler" id="cart">
        <i className="material-icons">shopping_basket</i>
        <div className="label">Cart</div>
        <span className="counter">0</span>
      </div>
      
      <div className="f-btn cmpr-toggler" id="cmpr-btn">
        <i className="material-icons">library_add</i>
        <div className="label">Compare</div>
        <span className="counter">0</span>
      </div>
      <div className="drawer cmpr-panel " id="cmpr-panel">
        <div className="title">
          <p>Compare Product</p>
          <span className="cmpr-toggler">
            <i className="material-icons">close</i>
          </span>
        </div>
        <div className="content">
          <div className="loader" />
        </div>
        <div className="footer btn-wrap" />
      </div>
      <div className="drawer m-cart" id="m-cart">
        <div className="title">
          <p>YOUR CART</p>
          <span className="mc-toggler">
            <i className="material-icons">close</i>
          </span>
        </div>
        <div className="content">
          <div className="loader" />
        </div>
        <div className="footer" />
      </div>

    <header id="header">
      <div className="top">
        <div className="container">
          <div className="ht-item logo">
            <div className="mbl-nav-top h-desk">
              <div
                id="nav-toggler"
                onClick={toggleMenu}
                class={openMenu ? "close" : ""}
              >
                 <span></span>
                        <span></span>
                        <span></span>
              </div>
            </div>
            <a className="brand" href="https://www.startech.com.bd/">
              <img
                src="https://www.startech.com.bd/image/catalog/logo.png"
                title="Star Tech & Engineering Ltd "
                width={144}
                height={164}
                alt="Star Tech & Engineering Ltd "
              />
            </a>
            <div className="mbl-right h-desk">
              <div className="ac search-toggler">
                <i className="material-icons">search</i>
              </div>
              <div className="ac mc-toggler">
                <i className="material-icons">shopping_basket</i>
                <span className="counter" data-count={0}>
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="ht-item search" id="search">
            <input
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
            />
            <button className="material-icons">search</button>
          </div>
          <div className="ht-item q-actions">
            <a
              href="https://www.startech.com.bd/information/offer"
              className="ac h-offer-icon"
            >
              <div className="ic">
                <i className="material-icons">card_giftcard</i>
              </div>
              <div className="ac-content">
                <h5>Offers</h5>
                <p>Latest Offers</p>
              </div>
            </a>
            <Link
              to="/deals"
              className="ac h-offer-icon"
            >
              <div className="ic">
                <i className="material-icons blink">flash_on</i>
              </div>
              <div className="ac-content">
                <h5>16 Years Deals</h5>
                <p>Special Deals</p>
              </div>
            </Link>
            <a
              href="https://www.startech.com.bd/tool/pc_builder"
              className="ac h-desk build-pc"
            >
              <div className="ic">
                <i className="material-icons">important_devices</i>
              </div>
              <div className="ac-content">
                <h5 className="text">PC Builder</h5>
              </div>
            </a>
            <div className="ac cmpr-toggler h-desk">
              <div className="ic">
                <i className="material-icons">library_add</i>
              </div>
              <div className="ac-content">
                <h5 className="text">Compare (0)</h5>
              </div>
            </div>
            <div className="ac">
              <Link
                className="ic"
                to="/login"
              >
                <i className="material-icons">person</i>
              </Link>
              <div className="ac-content">
                <Link  to="/login">
                  <h5>Account</h5>
                </Link>
                <p>
                  <Link to="/signup">
                    Register
                  </Link> {" "}
                  or {" "}
                  <Link to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <div className="ac build-pc m-hide">
              <a
                className="btn"
                href="https://www.startech.com.bd/tool/pc_builder"
              >
                PC Builder
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className={openMenu ? "navbar open" : "navbar"}>
        <div className="container">
         
          <ul className="navbar-nav" onClick={togglesubMenu}>
          { menuitem.length > 0 ? menuitem.map((item, i) => (
                    <li key={i} className={`${item.child  ? 'nav-item has-child open' : 'nav-item '} `}  >
                        {item.child ? <a  className="nav-link"  href="/"> {item.linkText} </a> : <a className="nav-link"  href={item.link}> {item.linkText} </a>}
                        {item.child ?
                            <ul className="drop-down drop-menu-1 " role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`${sub_item.child ? 'nav-item has-child open ' : ''} `}>
                                        {sub_item.child ? <a className="nav-link"  href="/"> {sub_item.linkText} </a> : <a className="nav-link" href={sub_item.link}> {sub_item.linkText} </a>}
                                        {sub_item.submenu ?
                                            <ul className="drop-down drop-menu-2 ">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="nav-item" key={i}><a className="nav-link"
                                                        href={third_item.link}>{third_item.linkText}</a>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                          </li>
                                        ))}
                                    </ul>
                            : null
                        }
                    </li>
                )) : null
            }
          </ul>
        </div>
      </nav>
    </header> 
    </body>
    </>
  );
}




// <ul className="navbar-nav">
//             {
//               menuitem.length > 0 &&
//               menuitem.map((menu,i) => (
//                 <li key={i} onClick={togglesubMenu} className=
//                  {opensubMenu ? "nav-item has-child c-1  open" : "nav-item has-child c-1 "}
//                 >
//                   <a className="nav-link" href="https://www.startech.com.bd/">{menu.linkText}</a>

//                   {
//                   menu?.submenu?.length > 0 &&
//                   menu.submenu.map((menu1,i) => (
//                       <ul  className="drop-down drop-menu-1 "
//                       // {opensubMenu ? "drop-down drop-menu-1 open" : "drop-down drop-menu-1 "}
//                       >
//                         <li key={i}className="nav-item">
//                           <a className="nav-link" href="">
//                             {menu1.linkText}
//                             {/* {console.log(menu1.linkText)} */}
//                           </a>
//                         </li>
//                       </ul>
//                     ))}
//                 </li>
//               ))}
//           </ul>

//   if(item.childrens){
//     return (
//         <div className= "sidebar-item open" >
//             <div className="sidebar-title">
//                 <span>
//                     { item.icon && <i className={item.icon}></i> }
//                     {item.title}    
//                 </span> 
//                 <i className="bi-chevron-down toggle-btn" ></i>
//             </div>
//             <div className="sidebar-content">
//                 { item.childrens.map((child, index) => <Navbar key={index} item={child} />) }
//             </div>
//         </div>
//     )
// }else{
//     return (
//         <a href={item.path || "#"} className="sidebar-item plain">
//             { item.icon && <i className={item.icon}></i> }
//             {item.title}
//         </a>
//     )
// }
// }

{
  /* <ul className="main__menu">
        {menus.length > 0 &&
          menus.map((menu) => (
            <li key={menu.id} className="drop">
              <Link to={menu.link}>{menu.text}</Link>

              {menu?.dropdown?.length > 0 && (
                <ul className="dropdown">
                  {menu.dropdown.map((dropdownMenu) => (
                    <li key={dropdownMenu.id}>
                      <Link to={menu.link}>{dropdownMenu.text}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {menu?.megaMenus?.length > 0 && (
                <ul className="dropdown mega_dropdown">
                  {menu.megaMenus.map((megaMenu) => (
                    <li key={megaMenu.id}>
                      <Link to={megaMenu.link}>{megaMenu.megaMenuTitle}</Link>
                      {megaMenu.megamenuItems?.length > 0 && (
                        <ul className="mega__item">
                          {megaMenu.megamenuItems.map((megamenuItem) => (
                            <li key={megamenuItem.id}>
                              <Link to={megamenuItem.link}>{megamenuItem.text}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav> */
}



 {/* <li className="nav-item has-child">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/desktops/star-pc"
                  >
                    Star PC
                  </a>
                 
                  <ul className="drop-down drop-menu-2 open">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/intel-pc"
                      >
                        Intel PC
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.startech.com.bd/ryzen-pc"
                      >
                        Ryzen PC
                      </a>
                    </li>
                  </ul>
                  </li> */}
