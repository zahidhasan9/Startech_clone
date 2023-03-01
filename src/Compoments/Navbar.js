import React,{useState} from 'react'
export default function Navbar() {
// Toggler function
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
console.log(openMenu)

  return (
<div>
  <div className="f-btn mc-toggler" id="cart">
      <i className="material-icons">shopping_basket</i>
      <div className="label">Cart</div>
      <span className="counter">0</span>
    </div>

    <header id="header">
<div className="top">
  <div className="container">
    <div className="ht-item logo">
      <div className="mbl-nav-top h-desk">
        <div id="nav-toggler"onClick={toggleMenu} class={openMenu?"close":""}>
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
        <a className="ic" href="https://www.startech.com.bd/account/login">
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
            or <a href="https://www.startech.com.bd/account/login">Login</a>
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


<nav className={openMenu? "navbar open":"navbar"}>
  <div className="container">
    
    
    <ul className="navbar-nav">
      <li className="nav-item has-child c-1">
        <a className="nav-link" href="https://www.startech.com.bd/desktops">
          Desktop
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/special-pc"
            >
              Desktop Offer
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/star-pc"
            >
              Star PC
            </a>
            <ul className="drop-down drop-menu-2">
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
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/gaming-pc"
            >
              Gaming PC
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/gaming-pc/intel-gaming-pc"
                >
                  Intel PC
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/gaming-pc/amd-gaming-pc"
                >
                  RYZEN PC
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/brand-pc"
            >
              Brand PC
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/brand-pc/acer-desktop"
                >
                  Acer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/brand-pc/asus-desktop"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/brand-pc/dell-desktop"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/brand-pc/hp-desktop"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/brand-pc/lenovo-desktop"
                >
                  Lenovo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/walton-brand-pc"
                >
                  Walton
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-brand-pc"
                >
                  MSI
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/all-in-one-pc"
            >
              All-in-One PC
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/all-in-one-pc/dell-all-in-one"
                >
                  DELL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/microsoft-all-in-one-pc"
                >
                  Microsoft
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-all-in-one-pc"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/all-in-one-pc/hp-all-in-one"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/all-in-one-pc/asus-all-in-one"
                >
                  ASUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/all-in-one-pc/lenovo-all-in-one"
                >
                  LENOVO
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/portable-mini-pc"
            >
              Portable Mini PC
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/portable-mini-pc/mini-pc-asus"
                >
                  {" "}
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/portable-mini-pc/intel-mini-pc"
                >
                  Intel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/desktops/portable-mini-pc/gigabyte-mini-pc"
                >
                  GIGABYTE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zotac-portable-mini-pc"
                >
                  Zotac
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-portable-mini-pc"
                >
                  MSI
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/apple-mini-pc"
            >
              Apple Mac Mini
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/apple-imac-desktop-pc"
            >
              Apple iMac
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/apple-mac-studio"
            >
              Apple Mac Studio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/desktops/economy-pc"
            >
              Budget PC
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/desktops"
              className="see-all"
            >
              Show All Desktop
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/laptop-notebook"
        >
          Laptop
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laptop-notebook/laptop"
            >
              All Laptop
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/razer-laptop"
                >
                  Razer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/apple-macbook"
                >
                  MacBook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/microsoft-surface-pro"
                >
                  Microsoft
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/hp-laptop"
                >
                  {" "}
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/dell-laptop"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/lenovo-laptop"
                >
                  Lenovo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/asus-laptop"
                >
                  {" "}
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/acer-laptop"
                >
                  Acer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gigabyte-laptop"
                >
                  Gigabyte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/toshiba-laptop"
                >
                  Toshiba
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/huawei-laptop"
                >
                  HUAWEI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/avita-laptop"
                >
                  AVITA_Laptop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/doel-laptop"
                >
                  DOEL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/realme-laptop"
                >
                  Realme
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xiaomi-mi-laptop"
                >
                  Xiaomi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/walton-laptop"
                >
                  Walton
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/samsung-laptop"
                >
                  Samsung
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop"
            >
              Gaming Laptop
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/razer"
                >
                  RAZER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/hp"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/asus"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/msi"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/gigabyte"
                >
                  GIGABYTE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/acer"
                >
                  Acer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop/lenovo"
                >
                  Lenovo
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laptop-notebook/ultrabook"
            >
              Premium Ultrabook
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/razer-premium-ultrabook"
                >
                  Razer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/ultrabook/asus"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/ultrabook/acer"
                >
                  Acer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/ultrabook/hp"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/ultrabook/microsoft"
                >
                  Microsoft
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/ultrabook/dell"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/ultrabook/lenovo"
                >
                  Lenovo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-premium-ultrabook"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/samsung-premium-ultrabook"
                >
                  Samsung
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laptop-bag-backpack"
            >
              Laptop Bag
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/maxgreen-laptop-bag"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/razer-laptop-bag-backpack"
                >
                  Razer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hp-laptop-bag-backpack"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/targus-laptop-bag-backpack"
                >
                  Targus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-laptop-bag-backpack"
                >
                  Fantech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tucano-bag-backpack"
                >
                  Tucano
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wiwu-laptop-bag-backpack"
                >
                  WiWU
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xiaomi-laptop-bag-backpack"
                >
                  Xiaomi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-laptop-bag-backpack"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-bag-backpack"
                >
                  Redragon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cougar-laptop-bag"
                >
                  Cougar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-laptop-bag-backpack"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gigabyte-laptop-bag-backpack"
                >
                  GIGABYTE
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/external-graphics-enclosure"
            >
              External Graphics Enclosure
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/laptop-notebook/laptop-accessories"
            >
              Laptop Accessories
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-cooler"
                >
                  Laptop Cooler
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-desk"
                >
                  Laptop Desk
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-stand"
                >
                  Laptop Stand
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-battery"
                >
                  Laptop Battery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-adapter"
                >
                  Laptop Charger / Adapter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-display"
                >
                  Display
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-keyboard"
                >
                  Keyboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-hdd-caddy"
                >
                  CADDY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-locker"
                >
                  Laptop Locker
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/laptop-notebook"
              className="see-all"
            >
              Show All Laptop
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/component"
        >
          Component
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/processor"
            >
              Processor
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/processor/amd-processor"
                >
                  AMD
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/processor/intel-processor"
                >
                  Intel
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/CPU-Cooler"
            >
              CPU Cooler
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lian-li-cpu-cooler"
                >
                  Lian Li
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ekwb-cpu-cooler"
                >
                  EKWB
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/CPU-Cooler/Antec-Cooler"
                >
                  Antec
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zadak-cpu-cooler"
                >
                  ZADAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/noctua-cpu-cooler"
                >
                  Noctua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/team-cpu-cooler"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/CPU-Cooler/gamdias-cpu-cooler"
                >
                  Gamdias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/CPU-Cooler/corsair-cpu-cooler"
                >
                  Corsair
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-cpu-cooler"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gigabyte-cpu-cooler"
                >
                  Gigabyte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-cpu-cooler"
                >
                  NZXT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/phanteks-cpu-cooler"
                >
                  Phanteks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/thermaltake-cpu-cooler"
                >
                  Thermaltake
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cooler-master-cpu-cooler"
                >
                  Cooler Master
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cougar-cpu-cooler"
                >
                  Cougar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/CPU-Cooler/cryorig-cpu-cooler"
                >
                  CRYORIG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-cpu-cooler"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-cpu-cooler"
                >
                  Redragon{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deepcool-cpu-cooler "
                >
                  Deepcool
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sapphire-cpu-cooler"
                >
                  Sapphire
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/1stplayer-cpu-cooler"
                >
                  1STPLAYER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xigmatek-cpu-cooler"
                >
                  Xigmatek
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/amd-cpu-cooler"
                >
                  AMD{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/montech-cpu-cooler"
                >
                  Montech
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/water-or-liquid-cooling"
            >
              Water / Liquid Cooling
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ekwb-water-or-liquid-cooling"
                >
                  EKWB
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lian-li-water-or-liquid-cooling"
                >
                  Lian Li
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/corsair-water-liquid-cooling"
                >
                  Corsair
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/motherboard"
            >
              Motherboard
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/asrock-intel-motherboard"
                >
                  ASRock (Intel)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/asrock-motherboard"
                >
                  ASRock (AMD)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/asus-motherboard"
                >
                  ASUS (Intel)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/asus-amd-motherboard"
                >
                  ASUS (AMD)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/gigabyte-motherboard"
                >
                  GIGABYTE (Intel)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/gigabyte-amd-motherboard"
                >
                  GIGABYTE (AMD)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/msi-motherboard"
                >
                  MSI (Intel)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/motherboard/msi-ryzen-motherboard"
                >
                  MSI (AMD)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-intel-motherboard"
                >
                  NZXT (Intel)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-amd-motherboard"
                >
                  NZXT (AMD)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/biostar-intel-motherboard"
                >
                  BIOSTAR (Intel)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/biostar-amd-motherboard"
                >
                  BIOSTAR (AMD)
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/graphics-card"
            >
              Graphics Card
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/pny-graphics-card"
                >
                  PNY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/xfx-graphics-card"
                >
                  XFX
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/palit-graphics-card"
                >
                  Palit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asrock-graphics-card"
                >
                  ASRock
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/galax-graphics-card"
                >
                  Galax
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/asus-graphics-card"
                >
                  ASUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/ZOTAC-Graphics"
                >
                  ZOTAC
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/colorful-graphics-card"
                >
                  Colorful
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/msi-graphics-card"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/gigabyte-graphics-card"
                >
                  GIGABYTE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/graphics-card/sapphire-graphics-card"
                >
                  Sapphire
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/acer-graphics-card"
                >
                  Acer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nvidia-graphics-card"
                >
                  NVIDIA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/afox-graphics-card"
                >
                  AFOX
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/vga-holder"
                >
                  VGA Holder
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/ram"
            >
              RAM (Desktop)
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/team-ram"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zadak-desktop-ram"
                >
                  ZADAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/geil-ram"
                >
                  GEIL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/corsair-ram"
                >
                  Corsair
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/gigabyte-ram"
                >
                  Gigabyte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/g-skill-ram"
                >
                  G.Skill
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/pny-desktop-ram"
                >
                  PNY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/twinmos-ram"
                >
                  TwinMOS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/kingston-ram"
                >
                  Kingston
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/adata-ram"
                >
                  Adata
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/patriot-ram"
                >
                  Patriot
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/transcend-ram"
                >
                  Transcend
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/thermaltake-desktop-ram"
                >
                  Thermaltake
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/ram/hp-ram"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/crucial-ram"
                >
                  Crucial
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/aitc-desktop-ram"
                >
                  AITC
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lexar-ram"
                >
                  Lexar
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/laptop-ram"
            >
              RAM (Laptop)
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/laptop-ram/team-laptop-ram"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/laptop-ram/adata-laptop-ram"
                >
                  Adata
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/laptop-ram/geil-laptop-ram"
                >
                  GEIL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/transcend-laptop-ram"
                >
                  Transcend
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/g-skill-laptop-ram"
                >
                  G.Skill
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/laptop-ram/hp-laptop-ram"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/laptop-ram/patriot-laptop-ram"
                >
                  Patriot
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/crucial-laptop-ram"
                >
                  Crucial
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/laptop-ram/kingston-laptop-ram"
                >
                  Kingston
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/silicon-power-laptop-ram"
                >
                  Silicon Power
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lexar-laptop-ram"
                >
                  Lexar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/apacer-laptop-ram"
                >
                  Apacer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/trm-laptop-ram"
                >
                  TRM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/pny-laptop-ram"
                >
                  PNY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/twinmos-laptop-ram"
                >
                  TwinMOS
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/power-supply"
            >
              Power Supply
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/power-supply/Antec-Power"
                >
                  Antec
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/power-supply/gamdias-power-supply"
                >
                  Gamdias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lian-li-strimer"
                >
                  Lian Li
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/power-supply/Cooler-Master-power"
                >
                  Cooler Master
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/thermaltake-power-supply"
                >
                  Thermaltake
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/power-supply/corsair-psu"
                >
                  Corsair
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gigabyte-power-supply"
                >
                  Gigabyte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/1stplayer-power-supply"
                >
                  1STPLAYER{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-power-supply"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-power-supply"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-power-supply"
                >
                  Redragon{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deepcool-power-supply"
                >
                  Deepcool
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-power-supply"
                >
                  NZXT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/evolur-power-supply"
                >
                  EVOLUR
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/hard-disk-drive"
            >
              Hard Disk Drive
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/hard-disk-drive/seagate-hard-disk"
                >
                  Seagate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/hard-disk-drive/toshiba-hdd"
                >
                  Toshiba
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/hard-disk-drive/western-digital-hdd"
                >
                  Western Digital
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/portable-hard-disk-drive"
            >
              Portable Hard Disk Drive
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/g-technology-portable-hdd"
                >
                  G-Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/adata-portable-hdd"
                >
                  ADATA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tanscend-portable-hdd"
                >
                  Transcend
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-hard-disk-drive/western-digital-portable-hard-disk"
                >
                  Western Digital
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-hard-disk-drive/seagate-portable-hdd"
                >
                  Seagate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/silicon-power-portable-hdd"
                >
                  Silicon Power
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lacie-portable-hdd"
                >
                  LaCie
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sandisk-portable-hard-disk"
                >
                  SanDisk
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/apacer-portable-hdd"
                >
                  Apacer
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/SSD-Hard-Disk"
            >
              SSD
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/zadak-ssd">ZADAK</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/team-ssd">
                    TEAM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/hp-ssd">
                    HP
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/samsung-hdd">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/Transcend-ssd">
                    Transcend
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/geil-ssd">
                    GeIL
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/pny-ssd">
                    PNY
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/adata-hdd">
                    Adata
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/corsair-ssd">
                    Corsair
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/kingston-ssd">
                    Kingston
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/patriot-ssd">
                    Patriot
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/western-digital-ssd">
                    Western Digital
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/gigabyte-ssd">
                    Gigabyte
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/seagate-ssd">
                    Seagate
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/silicon-power-ssd">
                    Silicon Power
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/intel-ssd">
                    Intel
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/walton-ssd">
                    Walton
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/msi-ssd">MSI</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/teutons-ssd">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lexar-ssd">Lexar</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/twinmos-ssd">
                    Twinmos
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/aitc-ssd">AITC</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/crucial-ssd">
                    Crucial
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/netac-ssd">Netac</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/addlink-ssd">
                    Addlink
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dahua-ssd">Dahua</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/robot-ssd">ROBOT</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/acer-ssd">Acer</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anacomda-ssd">
                    ANACOMDA
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kingspec-ssd">
                    KingSpec
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/component/SSD-Hard-Disk/apacer-ssd">
                    Apacer
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/portable-ssd-hard-disk"
            >
              Portable SSD
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-ssd-hard-disk/samsung-portable-ssd-hard-disk"
                >
                  Samsung
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/team-portable-ssd"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-ssd-hard-disk/hp-portable-ssd"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/teutons-portable-ssd"
                >
                  Teutons
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-ssd-hard-disk/transcend-portable-ssd"
                >
                  Transcend{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-ssd-hard-disk/western-ssd"
                >
                  Western Digital
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/portable-ssd-hard-disk/adata-portable-ssd"
                >
                  Adata
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sandisk-portable-ssd"
                >
                  Sandisk
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lacie-portable-ssd"
                >
                  LaCie
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/pny-portable-ssd"
                >
                  PNY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/crucial-portable-ssd"
                >
                  Crucial
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/netac-portable-ssd"
                >
                  Netac
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/seagate-portable-ssd"
                >
                  Seagate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/silicon-power-portable-ssd"
                >
                  Silicon Power
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/kingston-portable-ssd"
                >
                  Kingston
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/casing"
            >
              Casing
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing/Antec-Casing"
                >
                  Antec
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing/gamdias-casing"
                >
                  Gamdias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lian-li-casing"
                >
                  Lian Li
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zadak-casing"
                >
                  ZADAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing/maxgreen-casing"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-casing"
                >
                  Redragon{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/corsair-case"
                >
                  Corsair
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-casing"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-casing"
                >
                  MSI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/phanteks-casing"
                >
                  Phanteks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cooler-master-casing"
                >
                  Cooler Master
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/1stplayer-casing"
                >
                  1STPLAYER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-casing"
                >
                  NZXT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing/gigabyte-casing"
                >
                  Gigabyte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/aigo-casing"
                >
                  Aigo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xtreme-casing"
                >
                  Xtreme
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/value-top-casing"
                >
                  Value-Top
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/thermaltake-casing"
                >
                  Thermaltake
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deepcool-casing"
                >
                  Deepcool
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xigmatek-casing"
                >
                  Xigmatek{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/montech-casing"
                >
                  Montech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing/golden-field-casing"
                >
                  Golden Field
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cougar-casing"
                >
                  Cougar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-casing"
                >
                  Fantech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/pccooler-casing"
                >
                  PCcooler
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/delux-casing"
                >
                  Delux
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/revenger-casing"
                >
                  Revenger
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/evolur-casing"
                >
                  EVOLUR{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ovo-casing"
                >
                  OVO
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/casing-cooler"
            >
              Casing Cooler
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lian-li-casing-fan"
                >
                  Lian Li
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing-cooler/antec-casing-cooler"
                >
                  Antec
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/maxgreen-casing-cooler"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/noctua-casing-cooler"
                >
                  Noctua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing-cooler/gamdias-casing-fan"
                >
                  Gamdias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/casing-cooler/corsair-casing-cooler"
                >
                  Corsair
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/kwg-casing-cooler"
                >
                  KWG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-casing-cooler"
                >
                  Fantech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-casing-cooler"
                >
                  NZXT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-casing-cooler"
                >
                  ASUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ekwb-casing-cooler"
                >
                  EKWB
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/montech-casing-cooler"
                >
                  Montech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cooler-master-casing-cooler"
                >
                  Cooler Master
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/thermaltake-casing-cooler"
                >
                  Thermaltake
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deepcool-casing-cooler"
                >
                  Deepcool
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-casing-cooler"
                >
                  Redragon{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/orico-casing-cooler"
                >
                  ORICO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/aigo-casing-cooler"
                >
                  Aigo
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/component/optical-hdd"
            >
              Optical Disk Drive
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/optical-hdd/external-optical-hdd"
                >
                  External Optical Disk Drive
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/component/optical-hdd/internal-optical-hdd"
                >
                  Internal Optical Disk Drive
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/vertical-graphics-card-holder"
            >
              Vertical Graphics Card Holder
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/component"
              className="see-all"
            >
              Show All Component
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a className="nav-link" href="https://www.startech.com.bd/monitor">
          Monitor
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/acer"
            >
              Acer
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/msi"
            >
              MSI
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/apple-monitor"
            >
              Apple
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/lg"
            >
              LG{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/asus"
            >
              Asus
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/benq"
            >
              BenQ
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/hp"
            >
              HP
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/dell"
            >
              Dell
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/samsung"
            >
              Samsung
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/viewsonic"
            >
              Viewsonic
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/huawei-monitor"
            >
              HUAWEI
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/gigabyte"
            >
              GIGABYTE
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/xiaomi"
            >
              XIAOMI
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/aoc"
            >
              AOC
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/asrock-monitor"
            >
              ASRock
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/lenovo-monitor"
            >
              Lenovo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor/philips"
            >
              PHILIPS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gamemax-monitor"
            >
              GameMax
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/fantech-monitor"
            >
              Fantech
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/corsair-monitor"
            >
              Corsair
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/huntkey-monitor"
            >
              Huntkey
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/sony-monitor"
            >
              Sony
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/univision-monitor"
            >
              Univision
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/enter-monitor"
            >
              Enter
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-monitor"
            >
              Gaming Monitor
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/curved-monitor"
            >
              Curved Monitor
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/touch-screen-monitor"
            >
              Touch Monitor
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/4k-monitor"
            >
              4K Monitor
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/monitor-arm"
            >
              Monitor Arm
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/monitor"
              className="see-all"
            >
              Show All Monitor
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a className="nav-link" href="https://www.startech.com.bd/ups-ips">
          UPS
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ups-ips/online-ups"
            >
              Online UPS
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/online-ups/maxgreen"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/santak-online-ups"
                >
                  SANTAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/online-ups/tecnoware"
                >
                  Tecnoware
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/online-ups/zigor"
                >
                  ZIGOR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/online-ups/apollo"
                >
                  APOLLO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ensmart-online-ups"
                >
                  EnSmart
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ups-ips/offline-ups"
            >
              Offline UPS
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/offline-ups/maxGreen-offline-ups"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/santak-offline-ups"
                >
                  SANTAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tecnoware-offline-ups"
                >
                  Tecnoware
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/apollo-offline-ups"
                >
                  APOLLO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/offline-ups/digital-x-offline-ups"
                >
                  Digital X
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/prolink-offline-ups"
                >
                  Prolink
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/power-guard-offline-ups"
                >
                  Power Guard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/offline-ups/kstar-offline-ups"
                >
                  KSTAR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/walton-offline-ups"
                >
                  Walton
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ups-ips/offline-ups/power-pac-offline-ups"
                >
                  Power Pac
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/mini-ups"
            >
              Mini UPS
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/marsriva-ups"
                >
                  MARSRIVA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ske-mini-ups"
                >
                  SKE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wgp-mini-ups"
                >
                  WGP
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ups-battery"
            >
              UPS Battery
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/maxgreen-ups-battery"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/santak-ups-battery"
                >
                  SANTAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/leoch-ups-battery"
                >
                  Leoch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/long-ups-battery"
                >
                  LONG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/apollo-ups-battery"
                >
                  Apollo
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/stabilizer"
            >
              Voltage Stabilizer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.startech.com.bd/ips">
              IPS
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/ups-ips"
              className="see-all"
            >
              Show All UPS
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/mobile-phone"
        >
          Phone
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/apple-iphone"
            >
              Apple
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/samsung-mobile-phone"
            >
              Samsung
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/google-pixel-phone"
            >
              Google
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/motorola-mobile-phone"
            >
              Motorola
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/oppo-mobile-phone"
            >
              OPPO
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/vivo-mobile-phone"
            >
              Vivo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/realme-mobile-phone"
            >
              Realme
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/dizo-mobile-phone"
            >
              DIZO
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/mobile-phone-accessories"
            >
              Mobile Phone Accessories
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/mobile-phone"
              className="see-all"
            >
              Show All Phone
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/tablet-pc"
        >
          Tablet
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/graphics-tablet"
            >
              Graphics Tablet
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wacom-graphics-tablet"
                >
                  Wacom
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/huion-graphics-tablet"
                >
                  Huion
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xp-pen-graphics-tablet"
                >
                  XP-PEN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/veikk-graphics-tablet"
                >
                  VEIKK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wiwu-graphics-tablet"
                >
                  WiWU
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/apple-ipad"
            >
              Apple
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/tablet-pc/amazon"
            >
              Amazon
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/tablet-pc/lenovo-tablet-pc"
            >
              Lenovo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/samsung-tablet"
            >
              Samsung
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/realme-tablet-pc"
            >
              Realme
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/xiaomi-tablet-pc"
            >
              Xiaomi
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/walton-tablet-pc"
            >
              Walton
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/tablet-pc/huawei-tablet-pc"
            >
              HUAWEI
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/signature-pad"
            >
              Digital Signature Pad
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/tablet-pc/stylus"
            >
              Stylus
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/tablet-pc"
              className="see-all"
            >
              Show All Tablet
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/office-equipment"
        >
          Office Equipment
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/projector"
            >
              Projector
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/infocus"
                >
                  InFocus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rigal-projector"
                >
                  Rigal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/aun-projector"
                >
                  AUN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/acer-projector"
                >
                  Acer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/benq"
                >
                  BenQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/cheerlux"
                >
                  Cheerlux
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/maxell"
                >
                  Maxell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nec-projector"
                >
                  NEC
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/philips-projector"
                >
                  Philips
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/viewsonic"
                >
                  Viewsonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/vivitek"
                >
                  VIVItek
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xiaomi-projector"
                >
                  Xiaomi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/epson"
                >
                  EPSON
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/boxlight-projector"
                >
                  Boxlight
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/havit-projector"
                >
                  Havit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/optoma"
                >
                  Optoma
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector/asus"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/micropack-projector"
                >
                  Micropack
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/anker-projector"
                >
                  Anker
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projection-screen"
                >
                  Projection Screen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/projector-mount"
                >
                  Projector Mount
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/conference-systems"
            >
              Conference Systems
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/poly-conference-system"
                >
                  Poly
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/logitech-conference-system"
                >
                  Logitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cisco-conference-system"
                >
                  Cisco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/avaya-conference-system"
                >
                  Avaya
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/benq-conference-system"
                >
                  BenQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/jabra-conference-system"
                >
                  Jabra
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/htdz-conference-system"
                >
                  HTDZ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tev-conference-system"
                >
                  TEV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cmx-conference-system"
                >
                  CMX
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/bxb-conference-system"
                >
                  BXB
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/viewsonic-conference-system"
                >
                  ViewSonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/aver-conference-system"
                >
                  AVer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/grandstream-conference-system"
                >
                  Grandstream
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/pa-system"
            >
              PA SYSTEM
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tev-pa-system"
                >
                  TEV
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/interactive-flat-panel"
            >
              Interactive Flat Panel
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/infocus-interactive-flat-panel"
                >
                  InFocus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/benq-interactive-flat-panel"
                >
                  BenQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hitachi-interactive-flat-panel"
                >
                  Hitachi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lg-interactive-flat-panel"
                >
                  LG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/boxlight-interactive-flat-panel"
                >
                  BoxLight
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dell-interactive-flat-panel"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/viewsonic-interactive-flat-panel"
                >
                  ViewSonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/armor-interactive-flat-panel"
                >
                  ARMOR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/panasonic-interactive-flat-panel"
                >
                  Panasonic
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/video-wall"
            >
              Video Wall
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/signage"
            >
              Signage
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/benq-signage"
                >
                  BenQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/viewsonic-signage"
                >
                  ViewSonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/panasonic-signage"
                >
                  Panasonic
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/kiosk"
            >
              Kiosk
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/printer"
            >
              Printer
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/printer/pantum-printer"
                >
                  Pantum
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/printer/brother-printer"
                >
                  Brother
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/printer/Canon-printer"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/printer/EPSON-Printer"
                >
                  EPSON
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/printer/HP-printer"
                >
                  {" "}
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fujifilm-printer"
                >
                  Fujifilm
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/large-format-printer"
            >
              Large Format Printer
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/id-card-printer"
            >
              ID Card Printer
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zebra-id-card-printer"
                >
                  Zebra
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/evolis-id-card-printer"
                >
                  Evolis
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/pos-printer"
            >
              POS Printer
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deli-pos-printer"
                >
                  Deli
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/pos-printer/pos-printer-rongta"
                >
                  RONGTA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/pos-printer/pos-printer-sewoo"
                >
                  Sewoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/pos-printer/pos-printer-epson"
                >
                  Epson
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xprinter-pos-printer"
                >
                  Xprinter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/pos-printer/sprt"
                >
                  SPRT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sunmi-pos-printer"
                >
                  Sunmi
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/label-printer"
            >
              Label Printer
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deli-label-printer"
                >
                  Deli
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/brother-label-printer"
                >
                  Brother
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xprinter-label-printer"
                >
                  Xprinter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/casio-label-printer"
                >
                  Casio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zebra-label-printer"
                >
                  Zebra
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sewoo-label-printer"
                >
                  Sewoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rongta-label-printer"
                >
                  Rongta
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/toshiba-label-printer"
                >
                  Toshiba
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/dot-matrix-printer"
            >
              Dot Matrix Printer
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/photocopier"
            >
              Photocopier
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hp-photocopier"
                >
                  {" "}
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/canon-photocopier"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/toshiba-photocopier"
                >
                  Toshiba
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sharp-photocopier"
                >
                  SHARP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ricoh-photocopier"
                >
                  RICOH
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/toner"
            >
              Toner
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/toner/pantum-toner"
                >
                  Pantum
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/maxgreen-toner"
                >
                  MaxGreen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/toner/Brother-toner"
                >
                  Brother
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/toner/canon-toner"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/toner/HP-toner"
                >
                  HP{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/toshiba-toner"
                >
                  Toshiba
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/safeway-toner"
                >
                  SafeWay
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/power-print-toner"
                >
                  Power Print
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ricoh-toner"
                >
                  Ricoh
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/starink-toner"
                >
                  StarInk
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/print-rite-toner"
                >
                  Print-Rite
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fujifilm-toner-cartridge"
                >
                  Fujifilm
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sharp-toner"
                >
                  Sharp
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/cartridge"
            >
              Cartridge
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/canon-cartridge"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/cartridge/epson-cartridge"
                >
                  Epson
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/cartridge/hp-cartridge"
                >
                  {" "}
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/brother-cartridge"
                >
                  Brother
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ink-bottle"
            >
              Ink Bottle
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ribbon"
            >
              Ribbon
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/printer-drum"
            >
              Printer Drum
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/Scanner"
            >
              Scanner
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/plustek"
                >
                  Plustek
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/canon"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/hp"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/epson"
                >
                  EPSON
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/brother"
                >
                  Brother
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/office-equipment/Scanner/avision"
                >
                  Avision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/czur-smart-book-and-document-scanner"
                >
                  CZUR
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/Barcode-Scanner"
            >
              Barcode Scanner
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deli-barcode-scanner"
                >
                  Deli
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/winson-barcode-scanner"
                >
                  Winson
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/yumite-barcode-scanner"
                >
                  Yumite
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zebex-barcode-scanner"
                >
                  ZEBEX
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zebra-barcode-scanner"
                >
                  Zebra
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sewoo-barcode-scanner"
                >
                  SEWOO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/honeywell-barcode-scanner"
                >
                  Honeywell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/posiflex-barcode-scanner"
                >
                  Posiflex
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rongta-barcode-scanner"
                >
                  Rongta
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sunlux-barcode-scanner"
                >
                  Sunlux
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/CASH-DRAWER"
            >
              Cash Drawer
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/telephone-set"
            >
              Telephone Set
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/ip-phone"
            >
              IP Phone
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/mitel-ip-phone"
                >
                  Mitel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/grandstream-ip-phone"
                >
                  Grandstream
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/yealink-ip-phone"
                >
                  Yealink
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fanvil-ip-phone"
                >
                  Fanvil
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cisco-ip-phone"
                >
                  Cisco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/avaya-ip-phone"
                >
                  Avaya
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ip-pabx-system"
            >
              PABX System
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/mitel-pabx-system"
                >
                  Mitel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/grandstream-pabx-system"
                >
                  Grandstream
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/money-counting-machine"
            >
              Money Counting Machine
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-equipment/paper-shredder"
            >
              Paper Shredder
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deli-paper-shredder"
                >
                  Deli
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ofitech-paper-shredder"
                >
                  Ofitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/aurora-paper-shredder"
                >
                  Aurora
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/office-equipment"
              className="see-all"
            >
              Show All Office Equipment
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a className="nav-link" href="https://www.startech.com.bd/camera">
          Camera
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/action-camera"
            >
              Action Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dji-action-camera"
                >
                  DJI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/eken-action-camera"
                >
                  EKEN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gopro-action-camera"
                >
                  GoPro
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/insta360-action-camera"
                >
                  Insta360
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sjcam-action-camera"
                >
                  SJCAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/akaso-action-camera"
                >
                  AKASO
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/camera-lenses"
            >
              Camera Lenses
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/camera-lenses/canon-camera-lenses"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/camera-lenses/nikon-camera-lenses"
                >
                  Nikon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/camera-lenses/sony-lenses"
                >
                  Sony
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fujifilm-lens"
                >
                  FUJIFILM
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/digital-camera"
            >
              Digital Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/digital-camera/canon-digital-camera"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/digital-camera/sony-digital-camera"
                >
                  Sony
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/camera-dslr"
            >
              DSLR
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/camera-dslr/canon-dslr"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/camera-dslr/nikon-dslr"
                >
                  Nikon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/camera-dslr/sony-dslr"
                >
                  Sony
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/Handycam"
            >
              Handycam
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/mirrorless-camera"
            >
              Mirrorless Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/canon-mirrorless-camera"
                >
                  Canon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sony-mirrorless-camera"
                >
                  Sony
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nikon-mirrorless-camera"
                >
                  Nikon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fujifilm-mirrorless-camera"
                >
                  FUJIFILM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/panasonic-mirrorless-camera"
                >
                  Panasonic
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/dash-cam"
            >
              Dash Cam
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/transcend-dashcam"
                >
                  Transcend
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/70mai-dashcam"
                >
                  70mai
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/video-camera"
            >
              Video Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/video-camera/sony"
                >
                  Sony
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera/video-camera/panasonic"
                >
                  Panasonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/canon-video-camera"
                >
                  Canon
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/flash-light"
            >
              Camera Flash
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera-accessories"
            >
              Camera Accessories
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lens-filter"
                >
                  Lens Filter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/camera-bag-backpack"
                >
                  Camera Bag
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lens-adapter"
                >
                  Lens Adapter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/other-camera-accessories"
                >
                  Other
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/camera/camera-tripod"
            >
              Camera Tripod
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/k-and-f-concept-camera-tripod"
                >
                  K&amp;F Concept
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/digipod-camera-tripod"
                >
                  Digipod
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/yunteng-camera-tripod"
                >
                  Yunteng
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/kingjoy-camera-tripod"
                >
                  Kingjoy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/manfrotto-camera-tripod"
                >
                  Manfrotto
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/libec-camera-tripod"
                >
                  Libec
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/camera"
              className="see-all"
            >
              Show All Camera
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/Security-Camera"
        >
          Security
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/portable-ip-camera"
            >
              Portable WiFi Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dahua-portable-ip-camera"
                >
                  Dahua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hikvision-portable-ip-camera"
                >
                  Hikvision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/jovision-portable-ip-camera"
                >
                  Jovision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tp-link-portable-ip-camera"
                >
                  TP-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/realme-portable-ip-camera"
                >
                  Realme
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/srihome-portable-ip-camera"
                >
                  SriHome
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/armor-portable-ip-camera"
                >
                  ARMOR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/netgear-portable-ip-camera"
                >
                  Netgear
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tenda-portable-ip-camera"
                >
                  Tenda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xiaomi-portable-ip-camera"
                >
                  Xiaomi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/uniview-portable-ip-camera"
                >
                  Uniview{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/orvibo-portable-ip-camera"
                >
                  ORVIBO
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/IP-Camera"
            >
              IP Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/IP-Camera/Dahua-IPCamera"
                >
                  Dahua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/IP-Camera/Jovision-IPCamera"
                >
                  Jovision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/IP-Camera/Hikvision-IPCamera"
                >
                  Hikvision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/armor-ip-camera"
                >
                  ARMOR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/uniview-ip-camera"
                >
                  Uniview{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/cc-camera"
            >
              CCTV Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/cc-camera/dahua-cc-camera"
                >
                  Dahua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/cc-camera/jovision-cc-camera"
                >
                  Jovision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/cc-camera/hikvision-cc-camera"
                >
                  Hikvision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/armor-cc-camera"
                >
                  ARMOR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tvt-cctv-camera"
                >
                  TVT
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/ptz-camera"
            >
              PTZ Camera
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/ptz-camera/dahua-ptz-camera"
                >
                  {" "}
                  Dahua
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/dahua-cc-camera-package"
            >
              Dahua CC Camera Package
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/ip-camera-package"
            >
              Dahua IP Camera Package
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/hikvision-package"
            >
              Hikvision CC Camera Package
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/dvr"
            >
              DVR
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/dvr/jovision"
                >
                  Jovision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/dvr/hikvision"
                >
                  Hikvision
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/xvr"
            >
              XVR
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dahua-xvr"
                >
                  Dahua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/jovision-xvr"
                >
                  Jovision
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/nvr"
            >
              NVR
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dahua-nvr"
                >
                  Dahua
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/armor-nvr"
                >
                  ARMOR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hikvision-nvr"
                >
                  Hikvision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/jovision-nvr"
                >
                  Jovision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/uniview-nvr"
                >
                  Uniview
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/cc-camera-accessories"
            >
              CC Camera Accessories
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/door-lock"
            >
              Door Lock
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/door-lock/zkteco-door-lock"
                >
                  ZKTeco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/door-lock/non-brand-door-lock"
                >
                  Others
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/home-security-door-bell"
            >
              Smart Door Bell
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/Security-Camera/access-control"
            >
              Access Control
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/access-control/zkteco-access"
                >
                  ZKTeco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/Security-Camera/access-control/onspot-access-control"
                >
                  Onspot
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/access-control-accessories"
                >
                  Access Control Accessories
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/digital-locker"
            >
              Digital Locker &amp; Vault
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/kvm-switch"
            >
              KVM Switch
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/Security-Camera"
              className="see-all"
            >
              Show All Security
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-2">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/networking"
        >
          Networking
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/networking/router"
            >
              Router
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zyxel-router"
                >
                  Zyxel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cudy-router"
                >
                  Cudy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/asus-router-bd"
                >
                  {" "}
                  ASUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/tp-link-router"
                >
                  TP-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/totolink-router"
                >
                  TOTOLINK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/tenda-router"
                >
                  Tenda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/netgear-router"
                >
                  NETGEAR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/mikrotik-router"
                >
                  Mikrotik
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wavlink-router"
                >
                  Wavlink
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/d-link-router"
                >
                  D-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/linksys-router"
                >
                  LINKSYS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/mi-router"
                >
                  Mi{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/mercusys-router"
                >
                  Mercusys
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/cisco-router"
                >
                  Cisco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/router/netis-router"
                >
                  Netis
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/huawei-router"
                >
                  HUAWEI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/planet-router"
                >
                  Planet
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/networking/access-point"
            >
              Access Point &amp; Range Extender
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zyxel-network-extender"
                >
                  Zyxel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-access-point-extender"
                >
                  ASUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/tp-link-access-point"
                >
                  TP-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/totolink-access-point"
                >
                  TOTOLINK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/tenda-access-point"
                >
                  Tenda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/netgear-access-point"
                >
                  NETGEAR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/mikrotik-access-point"
                >
                  MikroTik
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wavlink-network-externder"
                >
                  Wavlink
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/d-link-access-point"
                >
                  D-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/mi-extender"
                >
                  Mi{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/mercusys-range-extender"
                >
                  Mercusys
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/netis-extender"
                >
                  Netis
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/grandstream-wifi-range-extender"
                >
                  Grandstream
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ubiquiti-access-point "
                >
                  Ubiquiti
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cambium-access-point"
                >
                  Cambium
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/access-point/linksys-access-point"
                >
                  LINKSYS
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/networking/network-switch"
            >
              Network Switch
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zyxel-network-switch"
                >
                  Zyxel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/tp-link-switch"
                >
                  TP-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/totolink-switches"
                >
                  TOTOLINK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/tenda-switch"
                >
                  Tenda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/netgear-switch"
                >
                  NETGEAR
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/mikrotik-switch"
                >
                  MikroTik
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/d-link-switch"
                >
                  D-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/mercusys-network-switch"
                >
                  Mercusys
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/netis-switch"
                >
                  Netis
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/dell-switcch"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/network-switch/cisco-switch"
                >
                  Cisco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cudy-switch"
                >
                  Cudy
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/networking/lan-card"
            >
              LAN Card
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cudy-lan-card"
                >
                  Cudy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/lan-card/tp-link-lan-card"
                >
                  TP-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/lan-card/totolink-lan-card"
                >
                  TOTOLINK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/lan-card/tenda-lan-card"
                >
                  Tenda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wavlink-lan-card"
                >
                  Wavlink
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/networking/lan-card/d-link-lan-card"
                >
                  D-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/mercusys-lan-card"
                >
                  Mercusys
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/prolink-lan-card"
                >
                  PROLiNK
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/networking-cable"
            >
              Networking Cable
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/utp-cable-and-accessories"
                >
                  UTP Cable
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fiber-optic-cable-and-accessories"
                >
                  Fiber Optic Cable
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/patch-cord"
            >
              Patch Cord
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/cable-connector"
            >
              Connector
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.startech.com.bd/onu">
              ONU
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/splicer-machine"
            >
              Splicer Machine
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/crimping-tool"
            >
              Crimping Tool
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/network-transceivers"
            >
              Network Transceivers
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/faceplate"
            >
              Faceplate
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/patch-panel"
            >
              Patch Panel
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/media-converter"
            >
              Media Converter
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/networking"
              className="see-all"
            >
              Show All Networking
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-2">
        <a className="nav-link" href="https://www.startech.com.bd/software">
          Software
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/operating-system"
            >
              Operating System
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/microsoft-windows"
                >
                  Microsoft Windows
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redhat"
                >
                  Red Hat
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/office-application"
            >
              Office Application
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/microsoft-office"
                >
                  Microsoft Office
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/database-server-solution"
            >
              Database Server Solution
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/mail-server-solution"
            >
              Mail Server Solution
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/cloud-solution"
            >
              Cloud Solutions
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/software/adobe"
            >
              Adobe
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/software/antivirus"
            >
              Antivirus
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/software/antivirus/for-home-user"
                >
                  For Home User
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/software/antivirus/for-business-users"
                >
                  For Business Users
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/software/vmware"
            >
              VMware
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/software/autodesk"
            >
              AutoDesk
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/software"
              className="see-all"
            >
              Show All Software
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-2">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/server-networking"
        >
          Server &amp; Storage
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/server-networking/server"
            >
              Server
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/server/dell-server"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/qnap-server"
                >
                  QNAP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hpe-server"
                >
                  HPE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/server/cisco-server"
                >
                  Cisco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-server"
                >
                  ASUS
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/server-networking/workstation"
            >
              Workstation
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/workstation/dell-workstation"
                >
                  {" "}
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/workstation/workstation-hp"
                >
                  {" "}
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lenovo-workstation"
                >
                  Lenovo
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/server-rack"
            >
              Server Rack
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/toten-server-rack"
                >
                  Toten
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/safenet-server-rack"
                >
                  Safenet
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/nas-storage"
            >
              NAS Storage
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asustor-nas-storage"
                >
                  Asustor
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/netgear-nas-storage"
                >
                  Netgear
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dell-nas-storage"
                >
                  Dell
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/san-storage"
            >
              SAN Storage
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dell-san-storage"
                >
                  DELL
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/server-networking/server-accessories"
            >
              Accessories
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/server-accessories/server-hdd"
                >
                  HDD
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/server-accessories/server-power-supply"
                >
                  Power Supply
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/server-networking/server-accessories/hdd-bay"
                >
                  HDD Bay
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/server-networking"
              className="see-all"
            >
              Show All Server &amp; Storage
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-2">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/accessories"
        >
          Accessories
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/keyboards"
            >
              Keyboard
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/razer-keyboard">
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/gamdias-keyboard">
                    GAMDIAS
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kwg-keyboard">KWG</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/thermaltake-keyboard">
                    Thermaltake
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xtrike-me-keyboard">
                    Xtrike Me
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/apple-keyboard">
                    Apple
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-keyboard">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-keyboard">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/steelseries-keyboard">
                    SteelSeries
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/logitech-keyboard">
                    Logitech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/a4-tech-keyboard">
                    A4Tech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/corsair-keyboard">
                    Corsair
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/durgod-keyboard">
                    Durgod
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/gigabyte-keyboard">
                    GIGABYTE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/dell-keyboard">
                    Dell
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/rapoo-keyboard">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/imice-keyboard">
                    iMICE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/matis-keyboard">
                    Matias
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/microsoft-surface-pro-keyboard">
                    Microsoft
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/asus-keyboard">
                    Asus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hyperx-keyboard">
                    Hyperx
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/havit-keyboard">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/keychron-keyboard">
                    Keychron
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/motospeed-keyboard">
                    MotoSpeed
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/cougar-keyboard">
                    Cougar
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dareu-keyboard">
                    Dareu
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/prolin-keyboard">
                    PROLiNK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/keyboards/micropack-keyboard">
                    Micropack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/capturer-keyboard">
                    Capturer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redragon-keyboard">
                    Redragon
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/suntech-keyboard">
                    SUNTECH
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/meetion-keyboard">
                    MeeTion
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/teutons-keyboard">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/defender-keyboard">
                    Defender
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lenovo-keyboard">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/vertux-keyboard">
                    Vertux
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/nzxt-keyboard">
                    NZXT
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/orico-keyboard">
                    Orico{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/aula-keyboard">
                    AULA
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/tecware-keyboard">
                    Tecware
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/bajeal-keyboard">
                    BAJEAL
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/glorious-keyboard">
                    Glorious
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/mouse"
            >
              Mouse
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/razer-mouse">
                    {" "}
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/gamdias-gaming-mouse">
                    GAMDIAS
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xtrfy-mouse">
                    Xtrfy
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xtrike-me-mouse">
                    Xtrike Me
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kwg-mouse">KWG</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/prolink-mouse">
                    PROLiNK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/asus-mouse">
                    Asus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/apple-mouse">
                    Apple
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-mouse">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gigabyte-mouse">
                    Gigabyte
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/xiaomi-mouse">
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/thermaltake-mouse">
                    Thermaltake
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/microsoft-surface-mouse">
                    Microsoft
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/logitech-mouse">
                    Logitech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/benq-mouse">Benq</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/hp-mouse">
                    HP
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/delux-mouse">
                    Delux
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-mouse">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/dell-mouse">
                    Dell
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/imice-mouse">
                    iMICE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/rapoo-mouse">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/a4-tech-mouse">
                    A4Tech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/havit-mouse">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/corsair-mouse">
                    Corsair
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dareu-mouse">
                    Dareu
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/steelseries-mouse">
                    SteelSeries
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/lenovo-mouse">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/mouse/motospeed-mouse">
                    MotoSpeed
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hyperx-mouse">
                    HyperX
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/golden-field-mouse">
                    Golden Field
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/micropack-mouse">
                    Micropack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-mouse">WiWU</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redragon-mouse">
                    Redragon
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/orico-mouse">
                    Orico
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/msi-mouse">MSI</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gamemax-mouse">
                    GameMax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/meetion-mouse">
                    MeeTion
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/blackcat-mouse">
                    BlackCat
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/keychron-mouse">
                    Keychron
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/newmen-mouse">
                    Newmen
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/defender-mouse">
                    Defender
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/nzxt-mouse">NZXT</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zoook-mouse">
                    ZOOOK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/vertux-mouse">
                    Vertux
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/aula-mouse">AULA</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/huawei-mouse">
                    HUAWEI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/bajeal-mouse">
                    BAJEAL
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/eksa-mouse">EKSA</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/glorious-mouse">
                    Glorious
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/headphone"
            >
              Headphone
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/poly-headphone">
                    Poly
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/gamdias-headphone">
                    GAMDIAS
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/razer-headphone">
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kwg-headphone">
                    KWG
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xtrike-me-headphone">
                    Xtrike Me
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/logitech-headphone">
                    Logitech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-headphone">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redragon-headphone">
                    Redragon
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-headphone">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/havit-headphone">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/a4-tech-headphone">
                    A4Tech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/edifier-headphone">
                    Edifier
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hyperx-headphone">
                    HyperX
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/rapoo-headset">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/jabra-headphone">
                    Jabra
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/meetion-headphone">
                    MeeTion
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/asus-headphone">
                    Asus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/turtle-beach-headphone">
                    Turtle Beach
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/corsair-headphone">
                    Corsair
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/baseus-headphone">
                    Baseus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/ovleng-headphone">
                    Ovleng
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/thermaltake-headphone">
                    Thermaltake
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sony-headphone">
                    Sony
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/motorola-headphone">
                    Motorola
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/microlab-headphone">
                    Microlab
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/skullcandy-headphone">
                    Skullcandy
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anker-headphone">
                    Anker
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/cougar-headphone">
                    Cougar
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/beyerdynamic-headphone">
                    Beyerdynamic
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/audio-technica-headphone">
                    Audio Technica
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/yison-headphone">
                    Yison
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/sennheiser-headphone">
                    Sennheiser
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/hp-headphone">
                    HP
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/headphone/jbl-headphones">
                    JBL
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dareu-headphone">
                    Dareu
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/cisco-headphone">
                    Cisco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/akg-headphone">
                    AKG
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/takstar-headphone">
                    Takstar
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/msi-headphone">
                    MSI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/joyroom-headphone">
                    JOYROOM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/eksa-headphone">
                    EKSA
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/beats-headphone">
                    Beats
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/teutons-headphone">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/awei-headphone">
                    Awei
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-headphone">
                    Hoco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/vertux-headphone">
                    Vertux{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-headphone">
                    WiWU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zoook-headphone">
                    ZOOOK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fastrack-headphone">
                    Fastrack
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/headphone-stand"
            >
              Headphone Stand
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/mouse-pad"
            >
              Mouse Pad
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/mouse-pad/razer-mouse-pad"
                >
                  RAZER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/mouse-pad/gamdias-mouse-pad"
                >
                  Gamdias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xtrfy-mouse-pad"
                >
                  Xtrfy{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xtrike-me-mouse-pad"
                >
                  Xtrike Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-mouse-pad"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-mouse-pad"
                >
                  Fantech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/mouse-pad/havit-mouse-pad"
                >
                  Havit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/mouse-pad/logitech-mouse-pad"
                >
                  Logitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/mouse-pad/rapoo-mouse-pad"
                >
                  Rapoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-mouse-pad"
                >
                  Redragon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dareu-mouse-pad"
                >
                  DAREU
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gigabyte-mouse-pad"
                >
                  Gigabyte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/meetion-mouse-pad"
                >
                  MeeTion
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/orico-mouse-pad"
                >
                  ORICO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/imice-mouse-pad"
                >
                  iMICE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/deepcool-mouse-pad"
                >
                  DeepCool
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/vertux-mouse-pad"
                >
                  Vertux{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nzxt-mouse-pad"
                >
                  NZXT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/non-brand-mouse-pad"
                >
                  Others
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/speaker-and-home-theater"
            >
              Speaker &amp; Home Theater
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/razer-speaker">
                    Razer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xtrike-me-speaker">
                    Xtrike Me
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jbl-speakers">JBL</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/sony-speaker-and-home-theater">
                    Sony
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/Logitech-speaker">
                    Logitech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/f-and-d-multimedia-speaker">
                    F&amp;D
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redragon-speaker">
                    Redragon
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-speaker">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/edifier-speaker">
                    Edifier
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/xiaomi-speaker">
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zoook-speaker">
                    ZOOOK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/philips-speaker">
                    Philips
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/microlab-speaker">
                    Microlab
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/havit-speaker">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-speakers">
                    Fantech
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/samsung-speaker">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/xtreme-speaker">
                    Xtreme
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/yamaha-speaker">
                    Yamaha
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/bose-speaker">
                    Bose
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/presonus-speaker">
                    PreSonus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/micropack-speaker">
                    Micropack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/digital-x-speaker">
                    Digital X
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/avermedia-speaker">
                    AVerMedia
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/thermaltake-speaker">
                    Thermaltake
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redner-speaker">
                    Redner
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lg-speaker">LG</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sharp-speaker">
                    Sharp
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/speaker-and-home-theater/golden-field-speaker">
                    Golden Field
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/vertux-speaker">
                    Vertux{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/bluetooth-speaker"
            >
              Bluetooth Speakers
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/xtrike-me-bluetooth-speaker">
                    Xtrike Me
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/f-and-d">
                    F&amp;D
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/poly-bluetooth-speakers">
                    Poly
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/jbl">
                    JBL
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anker-bluetooth-speakers">
                    Anker
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-bluetooth-speaker">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sony-bluetooth-speaker">
                    Sony
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/samsung-bluetooth-speaker">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/bose-bluetooth-speaker">
                    Bose
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/panasonic-bluetooth-speaker">
                    Panasonic
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-bluetooth-speaker">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lenovo-bluetooth-speaker">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/havit">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/edifier">
                    Edifier
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/xiaomi">
                    XIAOMI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/awei">
                    Awei
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/microlab">
                    Microlab
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redner-bluetooth-speaker">
                    Redner{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/philips">
                    PHILIPS
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/remax">
                    Remax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/rapoo">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/x-mini-bluetooth-speaker">
                    X-mini
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/harman-kardon">
                    Harman Kardon
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/xtreme">
                    Xtreme
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-bluetooth-speaker">
                    WiWU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/golden-field">
                    Golden Field
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/yison-bluetooth-speaker">
                    Yison
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/micropack">
                    Micropack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/bluetooth-speaker/teutons">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sharp-bluetooth-speaker">
                    Sharp
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lg-bluetooth-speaker">
                    LG
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-bluetooth-speaker">
                    Hoco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/orvibo-bluetooth-speaker">
                    Orvibo{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/beats-bluetooth-speaker">
                    Beats
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/aigo-bluetooth-speaker">
                    Aigo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/marshall-bluetooth-speaker">
                    Marshall
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/joyroom-bluetooth-speaker">
                    JOYROOM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/realme-bluetooth-speaker">
                    Realme
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/webcam"
            >
              Webcam
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/webcam/a4-tech-webcam"
                >
                  A4Tech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/webcam/logitech-webcam"
                >
                  Logitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/poly-webcam"
                >
                  Poly
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xtrike-me-webcam"
                >
                  Xtrike Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/astrum-webcam"
                >
                  Astrum
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/benq-webcam"
                >
                  BenQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/micropack-webcam"
                >
                  Micropack
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-webcam"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/havit-webcam"
                >
                  Havit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xiaomi-webcam"
                >
                  Xiaomi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/viewsonic-webcam"
                >
                  ViewSonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-webcam"
                >
                  Fantech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/avermedia-webcam"
                >
                  AVerMedia
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/avaya-webcam"
                >
                  Avaya
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-webcam"
                >
                  Redragon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/jabra-webcam"
                >
                  Jabra
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rapoo-webcam"
                >
                  Rapoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/anker-webcam"
                >
                  Anker
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cisco-webcam"
                >
                  Cisco
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/corsair-webcam"
                >
                  Corsair
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/converter-and-cable"
            >
              Converter &amp; Cable
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cable"
                >
                  Cable
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/converter"
                >
                  Converter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/adapter"
                >
                  Adapter
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/hub-and-dock"
            >
              Hubs &amp; Docks
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/orico-hubs-and-docks"
                >
                  ORICO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wiwu-hubs-and-docks"
                >
                  WiWU
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/vention-hubs-and-docks"
                >
                  Vention
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/joyroom-hubs-and-docks"
                >
                  JOYROOM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/baseus-hubs-and-docks"
                >
                  Baseus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ugreen-hubs-and-docks"
                >
                  UGREEN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/belkin-hubs-and-docks"
                >
                  Belkin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zoook-hubs-and-docks"
                >
                  ZOOOK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/havit-hubs-and-docks"
                >
                  HAVIT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dell-hubs-and-docks"
                >
                  Dell
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/energizer-hubs-and-docks"
                >
                  Energizer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/anker-hubs-and-docks"
                >
                  Anker
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hoco-hubs-and-docks"
                >
                  HOCO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hp-hubs-and-docks"
                >
                  HP
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/hyper-hubs-and-docks"
                >
                  HYPER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/lenovo-hubs-and-docks"
                >
                  Lenovo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/micropack-hubs-and-docks"
                >
                  Micropack
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rapoo-hubs-and-docks"
                >
                  Rapoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/razer-hubs-and-docks"
                >
                  Razer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/remax-hubs-and-docks"
                >
                  Remax
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/targus-hubs-and-docks"
                >
                  Targus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/tp-link-hubs-and-docks"
                >
                  TP-Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/transcend-hubs-and-docks"
                >
                  Transcend
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wavlink-hubs-and-docks"
                >
                  Wavlink
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/x-leo-hubs-and-docks"
                >
                  X-LEO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/astrum-hubs-and-docks"
                >
                  Astrum
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/microphone"
            >
              Microphone
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/microphone/razer-microphone-accessories"
                >
                  RAZER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/maono-microphone"
                >
                  Maono
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/boya-microphone"
                >
                  BOYA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-microphone"
                >
                  Fantech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/microphone/audio-technica-microphone"
                >
                  Audio Technica
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/microphone/rode-microphone"
                >
                  RODE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/corsair-microphone"
                >
                  Corsair
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/microphone/sennheiser-microphone"
                >
                  Sennheiser
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/microphone/avermedia-microphone"
                >
                  AVerMedia
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/havit-microphone"
                >
                  Havit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/microphone/tev-microphone"
                >
                  TEV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/logitech-microphone"
                >
                  Logitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/edifier-microphone"
                >
                  Edifier
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/k-and-f-concept-microphone"
                >
                  K&amp;F Concept
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/akg-microphone"
                >
                  AKG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/takstar-microphone"
                >
                  Takstar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-microphone"
                >
                  Redragon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/synco-microphone"
                >
                  SYNCO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/saramonic-microphone"
                >
                  Saramonic
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/mirfak-microphone"
                >
                  MIRFAK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rapoo-microphone"
                >
                  Rapoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/neumann-microphone"
                >
                  Neumann
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/digital-voice-recorder"
            >
              Digital Voice Recorder
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sony-digital-voice-recorder"
                >
                  Sony
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zoom-digital-voice-recorder"
                >
                  ZOOM
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/presenter"
            >
              Presenter
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/prolink-presenter"
                >
                  PROLiNK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/presenter/logitech-presenter"
                >
                  Logitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/presenter/targus-presenter"
                >
                  Targus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rapoo-presenter "
                >
                  Rapoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/presenter/micropack-presenter"
                >
                  Micropack
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/baseus-presenter"
                >
                  Baseus
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/micro-sd-card"
            >
              Memory Card
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/team-memory-card"
                >
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/micro-sd-card/pny-micro-sd-card"
                >
                  PNY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/micro-sd-card/sandisk-memory-card"
                >
                  SanDisk
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/micro-sd-card/transcend-memory-card"
                >
                  Transcend
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/micro-sd-card/apacer-memory"
                >
                  Apacer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/micro-sd-card/adata-micro-sd"
                >
                  Adata
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sony-memory-card"
                >
                  Sony
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/sound-card"
            >
              Sound Card
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/capture-card"
            >
              Capture Card
            </a>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/pen-drive"
            >
              Pen Drive
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/team-pendrive">
                    TEAM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/Transcend-Pendrive">
                    Transcend
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/TWINMOS-Pendrive">
                    TWINMOS
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/pny-pendrive">
                    PNY
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/adata-pen-drive">
                    ADATA
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/ugreen-pendrive">
                    UGREEN
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/sandisk-pendrive">
                    SanDisk
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/kingston-pendrive">
                    Kingston
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/accessories/pen-drive/apacer-pendrive">
                    Apacer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lexar-pen-drive">
                    Lexar
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/tv-card"
            >
              TV Card
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/thermal-paste"
            >
              Thermal Paste
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/enclosure"
            >
              HDD-SSD Enclosure
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/orico-enclosure"
                >
                  Orico
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ugreen-enclosure"
                >
                  UGREEN
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/asus-enclosure"
                >
                  Asus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wavlink-enclosure"
                >
                  Wavlink
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/power-strip"
            >
              Power Strip
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/power-strip/deli"
                >
                  Deli
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/power-strip/belkin"
                >
                  Belkin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/orico-power-strip"
                >
                  ORICO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/accessories/power-strip/huntkey "
                >
                  Huntkey
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/ldnio-power-strip"
                >
                  LDNIO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/light-breeze-power-strip"
                >
                  Light Breeze
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/bluetooth-receiver"
            >
              Bluetooth Receiver
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/accessories/pc-lighting-led-strips"
            >
              PC Lighting &amp; LED Strips
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/accessories"
              className="see-all"
            >
              Show All Accessories
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a className="nav-link" href="https://www.startech.com.bd/gadget">
          Gadget
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gadget/smart-watch"
            >
              Smart Watch
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/fireboltt-smart-watch">
                    Fire-Boltt
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/razer-smart-watch">
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kospet-smart-watch">
                    KOSPET
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gadget/smart-watch/xiaomi">
                    XIAOMI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/amazfit-smart-watch">
                    Amazfit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/mibro-smart-watch">
                    Mibro
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zepp-smartwatch">
                    Zepp
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gadget/smart-watch/realme">
                    Realme
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/colmi-smart-watch">
                    COLMI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xinji-smart-watch">
                    XINJI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kieslect-smart-watch">
                    Kieslect
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gadget/smart-watch/huawei">
                    HUAWEI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-smart-watch">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/havit-smart-watch">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/samsung-smart-watch">
                    Samsung
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/walton-smart-watch">
                    Walton
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zeblaze-smart-watch">
                    Zeblaze
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lenovo-smart-watch">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/oneplus-smart-watch">
                    OnePlus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-smart-watch">
                    WiWU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/mobvoi-smart-watch">
                    Mobvoi
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gadget/smart-watch/apple">
                    Apple
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/1more-smart-watch">
                    1MORE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-smart-watch">
                    Hoco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zte-smartwatch">
                    ZTE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/g-tide-smartwatch">
                    G-TiDE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hifuture-smart-watch">
                    HiFuture
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/w-and-o-smart-watch">
                    W&amp;O
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/garmin-smartwatch">
                    Garmin
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/non-brand-smartwatch">
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/smart-band"
            >
              Smart Band
            </a>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/earphone"
            >
              Ear Phone
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/razer-earphone">
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xiaomi-earphone">
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/a4tech-earphone">
                    A4Tech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-earphone">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/apple-earphone">
                    Apple
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/edifier-earphone ">
                    Edifier
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/rapoo-earphone">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/realme-earphone">
                    Realme
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/uiisii-ear-phone">
                    UiiSii
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/teutons-earphone">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/logitech-earphone">
                    Logitech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/awei-earphone">
                    Awei
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-earphone">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/havit-earphone">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/motorola-earphone">
                    Motorola
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/oneplus-earphone">
                    OnePlus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/plextone-earphone">
                    Plextone{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/remax-earphone">
                    Remax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anker-earphone">
                    Anker
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sony-earphone">
                    Sony
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/micropack-earphone">
                    Micropack
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/baseus-earphone">
                    Baseus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/samsung-earphone">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lenovo-earphone">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/asus-earphone">
                    Asus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/joyroom-earphone">
                    JOYROOM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jbl-earphone">JBL</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/ugreen-earphone">
                    Ugreen
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wavefun-earphone">
                    Wavefun
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/1more-earphone">
                    1MORE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jabra-earphone">
                    Jabra
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/huawei-earphone">
                    HUAWEI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/skullcandy-earphone">
                    Skullcandy
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-earphone">
                    WiWU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/yison-earphone">
                    Yison
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dareu-earphone">
                    DAREU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/energizer-earphone">
                    Energizer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zoook-earphone">
                    ZOOOK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-earphone">
                    Hoco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/kz-earphone">KZ</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/trn-earphone">TRN</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/beats-earphone">
                    Beats
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/earbuds"
            >
              Earbuds
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/razer-earbuds">
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xiaomi-earbuds">
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/mibro-earbuds">
                    Mibro
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/edifier-earbuds">
                    Edifier
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/realme-earbuds">
                    Realme
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/uiisii-earbuds">
                    UiiSii
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/havit-earbuds">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-earbuds">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/nothing-earbuds">
                    Nothing
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/motorola-earbuds">
                    Motorola
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anker-earbuds">
                    Anker
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/baseus-earbuds">
                    Baseus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/boya-earbuds">
                    Boya
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/lenovo-earbuds">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/asus-earbuds">
                    ASUS
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/qcy-earbuds">QCY</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/joyroom-earbuds">
                    JOYROOM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jabra-earbuds">
                    Jabra
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/huawei-earbuds">
                    HUAWEI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dareu-earbuds">
                    DAREU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/energizer-earbuds">
                    Energizer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/apple-earbuds">
                    Apple
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/1more-earbuds">
                    1MORE
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/plextone-earbuds">
                    Plextone
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-earbuds">
                    WiWU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-earbuds">
                    Hoco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/samsung-earbuds">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hifuture-earbuds">
                    HiFuture
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/realfit-earbuds">
                    Realfit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/acefast-earbuds">
                    ACEFAST
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jbl-earbuds">JBL</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wavefun-earbuds">
                    Wavefun
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/ugreen-earbuds">
                    UGREEN
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/beats-earbuds">
                    Beats
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/skullcandy-earbuds">
                    Skullcandy
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/nokia-earbuds">
                    Nokia
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/rapoo-earbuds">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/a4tech-earbuds">
                    A4Tech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/teutons-earbuds">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/awei-earbuds">
                    Awei
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/remax-earbuds">
                    Remax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/oneplus-earbuds">
                    OnePlus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sony-earbuds">
                    Sony
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/belkin-earbuds">
                    Belkin
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fastrack-earbuds">
                    Fastrack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/marshall-earbuds">
                    Marshall
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/neckband"
            >
              Neckband
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/lenovo-neckband">
                    Lenovo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/zoook-neckband">
                    ZOOOK
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-neckband">
                    Hoco
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wavefun-neckband">
                    Wavefun
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wiwu-neckband">
                    WiWU
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/uiisii-neckband">
                    UiiSii
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/1more-neckband">
                    1MORE
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/edifier-neckband">
                    Edifier
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/rapoo-neckband">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-neckband">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xiaomi-neckband">
                    XIAOMI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/energizer-neckband">
                    Energizer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-neckband">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/realme-neckband">
                    Realme
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/takstar-neckband">
                    Takstar
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/yison-neckband">
                    Yison
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hifuture-neckband">
                    HiFuture
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/oneplus-neckband">
                    OnePlus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/beats-neckband">
                    Beats
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/skullcandy-neckband">
                    Skullcandy
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jabra-neckband">
                    Jabra
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/remax-neckband">
                    Remax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/havit-neckband">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/awei-neckband">
                    Awei
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/huawei-neckband">
                    HUAWEI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/baseus-neckband">
                    Baseus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/motorola-neckband">
                    Motorola
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dizo-neckband">
                    DIZO
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anker-neckband">
                    Anker
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/jbl-neckband">JBL</a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/samsung-neckband">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/razer-neckband">
                    RAZER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fastrack-neckband">
                    Fastrack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/sony-neckband">
                    Sony
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/drone"
            >
              Drones
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dji-drone"
                >
                  DJI
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gimbal"
            >
              Gimbal
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/dji-gimbal"
                >
                  DJI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gudsen-gimbal"
                >
                  Gudsen
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zhiyun-gimbal"
                >
                  Zhiyun
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/wiwu-gimbal"
                >
                  WiWU
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/feiyutech-gimbal"
                >
                  FeiyuTech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/leofoto-gimbal"
                >
                  Leofoto
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/power-bank"
            >
              Power Bank
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/basues-power-bank">
                    Baseus
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xiaomi-power-bank">
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/anker-power-bank">
                    Anker
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/joyroom-power-bank">
                    JOYROOM
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/energizer-power-bank">
                    Energizer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/tp-link-power-bank">
                    TP-Link
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/awei-power-bank">
                    Awei
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/remax-power-bank">
                    Remax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/wekome-power-bank">
                    WEKOME
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/hoco-power-bank">
                    Hoco
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/micropack-power-bank">
                    Micropack
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/astrum-power-bank">
                    Astrum
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/dell-power-bank">
                    Dell
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/ugreen-power-adapter">
                    UGREEN
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/orico-power-bank">
                    Orico
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/havit-power-bank">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/teutons-power-bank">
                    Teutons
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/rapoo-power-bank">
                    Rapoo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/adata-power-bank">
                    Adata
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gadget/tv-box"
            >
              TV Box
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/portable-power-station"
            >
              Portable Power Station
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/studio-equipment"
            >
              Studio Equipment
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/studio-microphones"
                >
                  Studio Microphones
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/studio-monitors"
                >
                  Studio Monitors
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/studio-headphones"
                >
                  Studio Headphones
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/audio-interfaces"
                >
                  Audio Interfaces
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/midi-controller-keyboard"
                >
                  MIDI Controller &amp; Keyboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/switcher"
                >
                  Switcher
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/geometric-lights"
                >
                  Geometric Lights
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gadget/daily-lifestyle"
            >
              Daily Lifestyle
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/sewing-machine"
            >
              Sewing Machine
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/brother-sewing-machine"
                >
                  Brother
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/jack-sewing-machine"
                >
                  JACK
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/singer-sewing-machine"
                >
                  SINGER
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/zoje-sewing-machine"
                >
                  ZOJE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/walton-sewing-machine"
                >
                  Walton
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/calculator"
            >
              Calculator
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/blower-machine"
            >
              Blower
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/stream-deck"
            >
              Stream Deck
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/gadget"
              className="see-all"
            >
              Show All Gadget
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a className="nav-link" href="https://www.startech.com.bd/gaming">
          Gaming
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child multi-col">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-chair"
            >
              Gaming Chair
            </a>
            <div className="drop-down drop-menu-2">
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/gamdias-gaming-chair">
                    Gamdias
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/razer-gaming-chair">
                    Razer
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/corsair-gaming-chair">
                    Corsair
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/fantech-gaming-chair">
                    Fantech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gigabyte-gaming-chair">
                    Gigabyte
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/havit-gaming-chair">
                    Havit
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/msi-gaming-chair">
                    MSI
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/cooler-master-gaming-chair">
                    Cooler Master
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/marvo-gaming-chair">
                    Marvo
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/gamemax-gaming-chair">
                    GameMax
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/thermaltake-gaming-chair">
                    Thermaltake
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.startech.com.bd/a4tech-gaming-chair">
                    A4Tech
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/delux-gaming-chair">
                    Delux
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/cougar-gaming-chair">
                    Cougar
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/xigmatek-gaming-chair">
                    Xigmatek
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/1stplayer-gaming-chair">
                    1STPLAYER
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/evolur-gaming-chair">
                    EVOLUR
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/imperatorworks-gaming-chair">
                    Imperatorworks
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/redragon-gaming-chair">
                    Redragon
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/meetion-gaming-chair">
                    MeeTion
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/aula-gaming-chair">
                    AULA
                  </a>
                </li>
                <li>
                  <a href="https://www.startech.com.bd/horizon-gaming-chair">
                    Horizon
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-sofa"
            >
              Gaming Sofa
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/cougar-gaming-sofa"
                >
                  Cougar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-gaming-sofa"
                >
                  Fantech
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-keyboard"
            >
              Keyboard
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-mouse"
            >
              Mouse
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-headphone"
            >
              Headphone
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-mouse-pad"
            >
              Mouse Pad
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/game-pad"
            >
              Gamepad
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/razer-gamepad-controller"
                >
                  Razer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xbox-gamepad-controller"
                >
                  Xbox
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/playstation-gamepad-controller"
                >
                  PlayStation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nintendo-gamepad"
                >
                  Nintendo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xtrike-me-gamepad"
                >
                  Xtrike Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/gaming/game-pad/logitech-gamepad"
                >
                  Logitech
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/fantech-gamepad"
                >
                  Fantech{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/havit-gamepad"
                >
                  Havit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/astrum-gamepad"
                >
                  Astrum
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/rapoo-gamepad"
                >
                  Rapoo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/redragon-gamepad"
                >
                  Redragon
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/msi-gamepad"
                >
                  MSI
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.startech.com.bd/vr">
              VR
            </a>
          </li>
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-console"
            >
              Gaming Console
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/play-station"
                >
                  PlayStation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xbox"
                >
                  Xbox
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/nintendo-gaming-console"
                >
                  Nintendo
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gaming-desk"
            >
              Gaming Desk
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/ps4-n-x-box-one-games"
            >
              Games
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/gaming"
              className="see-all"
            >
              Show All Gaming
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-2">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/television-shop"
        >
          TV
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item has-child">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/television-startech"
            >
              All TV
            </a>
            <ul className="drop-down drop-menu-2">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/starex-television"
                >
                  Starex
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/xiaomi-television"
                >
                  Xiaomi MI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/sony-television"
                >
                  Sony
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/samsung-television"
                >
                  Samsung
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/LG-TV"
                >
                  LG
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/oneplus-television"
                >
                  OnePlus
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/haier-television"
                >
                  Haier
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.startech.com.bd/smart-television"
                >
                  Smart
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/led-tv"
            >
              LED TV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/smart-tv"
            >
              Smart TV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/android-tv"
            >
              Android TV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/4k-tv"
            >
              4K TV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/akash-dth"
            >
              AKASH Digital TV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/wall-mount"
            >
              TV Stand &amp; Wall Mount
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/television-shop"
              className="see-all"
            >
              Show All TV
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item has-child c-1">
        <a
          className="nav-link"
          href="https://www.startech.com.bd/air-conditioner"
        >
          AC
        </a>
        <ul className="drop-down drop-menu-1">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/air-conditioner/general-air-conditioner"
            >
              GENERAL
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/midea-ac"
            >
              Midea
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/gree-ac"
            >
              Gree
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/elite-air-conditioner "
            >
              Elite
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/xiaomi-ac"
            >
              Xiaomi
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.startech.com.bd/super-general-ac"
            >
              Super General
            </a>
          </li>
          <li>
            <a
              href="https://www.startech.com.bd/air-conditioner"
              className="see-all"
            >
              Show All AC
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
</header>
</div>
  )
}
