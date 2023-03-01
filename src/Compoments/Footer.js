import React from 'react'

function Footer() {
  return (
    <div>
         <footer>
      <div className="container">
        <div className="main-footer">
          <div className="footer-block contact-us">
            <h4>Support</h4>
            <a href="tel:09678002003" className="helpline-btn footer-big-btn">
              <div className="ic">
                <i className="material-icons">phone</i>
              </div>
              <p>9AM - 8PM</p>
              <h5>09678002003</h5>
            </a>
            <a
              href="https://www.startech.com.bd/information/contact"
              className="store-locator-btn footer-big-btn"
            >
              <div className="ic">
                <i className="material-icons">place</i>
              </div>
              <p>Store Locator</p>
              <h5>Find Our Stores</h5>
            </a>
          </div>
          <div className="footer-block about-us">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="https://www.startech.com.bd/emi-terms">EMI Terms</a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/about_us">About Us</a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/online-delivery">
                  Online Delivery
                </a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/warranty-policy">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/refund-policy">
                  Refund and Return Policy
                </a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/star-point-policy">
                  Star Point Policy
                </a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/blog">Blog</a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/information/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.startech.com.bd/product/manufacturer">
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="https://support.stel.com.bd/"
                  style={{ color: "#EF4A23" }}
                  target="_blank"
                  rel="noopener"
                >
                  Online Service Support
                </a>
              </li>
              <li>
                <a
                  href="https://complain.stel.com.bd/"
                  style={{ color: "#EF4A23" }}
                  target="_blank"
                  rel="noopener"
                >
                  Complain / Advice
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-block org-info">
            <h4>Stay Connected</h4>
            <p>
              <b className="store-name">Star Tech &amp; Engineering Ltd</b>
              <br />
              Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
              1000
            </p>
            <p>
              <b>Email:</b>
              <br />
              <a href="mailto:info.webteam@startechbd.com">
                info.webteam@startechbd.com
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="social-footer">
          <div className="app-links">
            <span className="app-link-text">
              Experience Star Tech App on your mobile:
            </span>
            <span className="app-link-items">
              <a
                className="app-link"
                href="https://play.google.com/store/apps/details?id=com.startech.shop"
                target="_blank"
                rel="noopener"
                title="Star Tech Android APP"
              >
                <span className="icon-sprite playstore" />
                <span className="app-link-text">
                  <span className="download">Download on</span>
                  <span className="app-store">Google Play</span>
                </span>
              </a>
              <a
                className="app-link"
                href="https://apps.apple.com/app/id6443544088"
                target="_blank"
                rel="noopener"
                title="Star Tech ISO APP"
              >
                <span className="icon-sprite applestore" />
                <span className="app-link-text">
                  <span className="download">Download on</span>
                  <span className="app-store">App Store</span>
                </span>
              </a>
            </span>
          </div>
          <div className="social-links">
            <a
              href="https://www.facebook.com/star.tech.ltd/"
              target="_blank"
              rel="noopener"
              title="Facebook"
            >
              <span className="icon-sprite fb" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC-SDF_4DM3unoP7JeAodz2g"
              target="_blank"
              rel="noopener"
              title="Youtube"
            >
              <span className="icon-sprite youtube" />
            </a>
            <a
              href="https://www.instagram.com/startech.com.bd/"
              target="_blank"
              rel="noopener"
              title="Instagram"
            >
              <span className="icon-sprite insta" />
            </a>
          </div>
        </div>
        <div className="row sub-footer">
          <div className="col-md-6 copyright-info">
            <p>© 2023 Star Tech &amp; Engineering Ltd | All rights reserved</p>
          </div>
          <div className="col-md-6 powered-by">
            <p>Powered By: Star Soft</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer