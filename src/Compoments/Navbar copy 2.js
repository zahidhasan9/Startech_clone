import React, { useState } from "react";
import Menu_item from './Menu Item/Menu_iem'


export default function Navbar() {
  // Toggler function
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  // menuItems.map((item,index)=>

  // console.log(item,'lol'))

  



  return (
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
                <span />
                <span />
                <span />
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
            <a
              href="https://www.startech.com.bd/deals"
              className="ac h-offer-icon"
            >
              <div className="ic">
                <i className="material-icons blink">flash_on</i>
              </div>
              <div className="ac-content">
                <h5>16 Years Deals</h5>
                <p>Special Deals</p>
              </div>
            </a>
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
              <a
                className="ic"
                href="https://www.startech.com.bd/account/login"
              >
                <i className="material-icons">person</i>
              </a>
              <div className="ac-content">
                <a href="https://www.startech.com.bd/account/login">
                  <h5>Account</h5>
                </a>
                <p>
                  <a href="https://www.startech.com.bd/account/register">
                    Register
                  </a>{" "}
                  or{" "}
                  <a href="https://www.startech.com.bd/account/login">Login</a>
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
          <ul className="navbar-nav">
            
            <li  className="nav-item has-child c-1 ">
              <a
                className="nav-link"
                href="https://www.startech.com.bd/desktops">  desktops
                </a>
             
              <ul className="drop-down drop-menu-1  ">
                <li  className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.startech.com.bd/special-pc"
                  >
                    acer
                  </a>
                </li>

                <li className="nav-item has-child">
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
                </li>
              </ul>
            </li>
           
          </ul>
        </div>
      </nav>
    </header>
  );
}

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
