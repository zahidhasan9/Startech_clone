import React from 'react'

function Account_Dash() {
  return (
    <>
  
  

    
   
   
    
    <section className="after-header p-tb-10">
      <div className="container">
        <ul className="breadcrumb">
          <li>
            <a href="https://www.startech.com.bd/">
              <i className="material-icons" title="Home">
                home
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.startech.com.bd/account/account">Account</a>
          </li>
        </ul>
      </div>
    </section>
    <div className="container ac-layout">
      <div className="ac-header">
        <div className="left">
          <span className="avatar">
            <img
              src="https://www.gravatar.com/avatar/71f03e0e728fa719c8dd98ec48175bdf?s=70&d=mp&r=g"
              width={80}
              height={80}
              alt="zr"
            />
          </span>
          <div className="name">
            <p>Hello,</p>
            <p className="user">zahid rimel</p>
          </div>
        </div>
        <div className="right">
          <div className="balance">
            <span className="blurb">Star Points</span>
            <span className="amount">0</span>
          </div>
          <div className="balance">
            <span className="blurb">Store Credit</span>
            <span className="amount">0</span>
          </div>
        </div>
      </div>
     
      <div className="ac-menus">
        <div className="ac-menu-item">
          <a href="https://www.startech.com.bd/account/order" className="ico-btn">
            <span className="material-icons">chrome_reader_mode</span>
            <span>Orders</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a href="https://www.startech.com.bd/account/edit" className="ico-btn">
            <span className="material-icons">person</span>
            <span>Edit Profile</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a
            href="https://www.startech.com.bd/account/password"
            className="ico-btn"
          >
            <span className="material-icons">lock</span>
            <span>Change Password</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a
            href="https://www.startech.com.bd/account/address"
            className="ico-btn"
          >
            <span className="material-icons">book</span>
            <span>Addresses</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a
            href="https://www.startech.com.bd/account/wishlist"
            className="ico-btn"
          >
            <span className="material-icons">favorite_border</span>
            <span>Wish List</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a href="https://www.startech.com.bd/account/pc" className="ico-btn">
            <span className="material-icons">important_devices</span>
            <span>Saved PC</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a
            href="https://www.startech.com.bd/account/reward"
            className="ico-btn"
          >
            <span className="material-icons">stars</span>
            <span>Star Points</span>
          </a>
        </div>
        <div className="ac-menu-item">
          <a
            href="https://www.startech.com.bd/account/transaction"
            className="ico-btn"
          >
            <span className="material-icons">account_balance_wallet</span>
            <span>Your Transactions</span>
          </a>
        </div>
        <div className="ac-menu-item h-desk">
          <a
            href="https://www.startech.com.bd/account/logout"
            className="ico-btn"
          >
            <span className="material-icons">input</span>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
   
  </>
  


  )
}

export default Account_Dash