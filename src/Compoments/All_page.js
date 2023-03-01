import React from 'react'

export default function All_page() {
  return (
    <>
   
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
    <div className="bg-gray content p-tb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-9">
            <div className="home-slider">
              <div className="slide">
                <a href="https://www.startech.com.bd/deals">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/16th-anniversary-mega-deal-live-982x500.webp"
                    alt="Mega Deal"
                    className="img-responsive"
                    width={982}
                    height={500}
                  />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.startech.com.bd/information/offer">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/16-year/16-year-home-banner-982x500.webp"
                    alt="16-year-announce"
                    className="img-responsive"
                    width={982}
                    height={500}
                  />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.startech.com.bd/pantum-m6506-multifunction-laser-printer">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/pantum-offer-backpack-free-home-banner-4-982x500.webp"
                    alt="pantum printer"
                    className="img-responsive"
                    width={982}
                    height={500}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="mdl-compare">
              <h4>Compare Products</h4>
              <p>Choose Two Products to Compare</p>
              <form
                method="post"
                action="common/compare/add"
                className="form-cmpr"
              >
                <input type="hidden" name="product_id" />
                <div className="cmpr-field">
                  <i className="material-icons">search</i>
                  <input
                    className="cmpr-product"
                    type="text"
                    placeholder="Search and Select Product"
                  />
                  <input type="hidden" className="prod-id" />
                </div>
                <div className="cmpr-field">
                  <i className="material-icons">search</i>
                  <input
                    className="cmpr-product"
                    type="text"
                    placeholder="Search and Select Product"
                  />
                  <input type="hidden" className="prod-id" />
                </div>
                <button className="btn st-outline">View Comparison</button>
              </form>
            </div>
            <div className="ads loaded">
              <a href="https://www.startech.com.bd/information/offer/info?offer_id=828">
                <img
                  src="https://www.startech.com.bd/image/catalog/home/banner/small/dhaka-express-delivery.webp"
                  alt="home |Dhaka City Express delivery"
                  width={300}
                  height={193}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sliding_text_wrap">
          <marquee direction="left">
            1 March Wednesday, our all branches are open except Uttara Syed Grand
            Center &amp; Pragati Sharani Branch. Additionally, our online
            activities will remain open and operational.
          </marquee>
        </div>
        <div className="m-home m-cat">
          <h2 className="m-header">Featured Category</h2>
          <p className="m-blurb">
            Get Your Desired Product from Featured Category!
          </p>
          <div className="cat-items-wrap">
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png"
                    alt="All Laptop"
                    width={48}
                    height={48}
                  />
                </span>
                <p>All Laptop</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop-accessories/laptop-battery"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-battery-01-48x48.png"
                    alt="Laptop Battery"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Laptop Battery</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/television-startech"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/tv-48x48.png"
                    alt="All TV"
                    width={48}
                    height={48}
                  />
                </span>
                <p>All TV</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/mobile-phone"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/mobile-phone-48x48.png"
                    alt="Phone"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Phone</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/tablet-pc"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/tablet-48x48.png"
                    alt="Tablet"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Tablet</p>
              </a>
            </div>
            <div className="cat-item">
              <a href="https://www.startech.com.bd/vr" className="cat-item-inner">
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/vr-48x48.png"
                    alt="VR"
                    width={48}
                    height={48}
                  />
                </span>
                <p>VR</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/gadget/smart-watch"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/smart-watch-48x48.png"
                    alt="Smart Watch"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Smart Watch</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/camera/action-camera"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/action-camera-48x48.png"
                    alt="Action Camera"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Action Camera</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/component/graphics-card"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png"
                    alt="Graphics Card"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Graphics Card</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/office-equipment/printer"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/printer-48x48.png"
                    alt="Printer"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Printer</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/networking/router"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/router-48x48.png"
                    alt="Router"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Router</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/accessories/headphone"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/headphone-48x48.png"
                    alt="Headphone"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Headphone</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/earphone"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/earphone-48x48.png"
                    alt="Ear Phone"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Ear Phone</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/accessories/bluetooth-speaker"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/bt-speaker-48x48.png"
                    alt="Bluetooth Speakers"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Bluetooth Speakers</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/office-equipment/conference-systems"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/conference-system-48x48.png"
                    alt="Conference Systems"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Conference Systems</p>
              </a>
            </div>
            <div className="cat-item">
              <a
                href="https://www.startech.com.bd/gaming-console"
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <img
                    src="https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png"
                    alt="Gaming Console"
                    width={48}
                    height={48}
                  />
                </span>
                <p>Gaming Console</p>
              </a>
            </div>
          </div>
        </div>
        <div className="m-product m-home" id="module-481">
          <h2 className="m-header">Featured Products</h2>
          <p className="m-blurb">Check &amp; Get Your Desired Product!</p>
          <div className="p-items-wrap">
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Earn Point: 50</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/surprise-box">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/offer-page/surprise-box-01-200x200.webp"
                      alt="16 Years Anniversary Surprise Box"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/surprise-box">
                      16 Years Anniversary Surprise Box
                    </a>
                  </h4>
                  <div className="p-item-price">16৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 388৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/msi-optix-g241v-e2-24-inch-fhd-gaming-monitor">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/optix-g241v-e2/optix-g241v-e2-200x200.jpg"
                      alt='MSI Optix G241V E2 24" FHD FreeSync IPS Esports Gaming Monitor'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/msi-optix-g241v-e2-24-inch-fhd-gaming-monitor">
                      MSI Optix G241V E2 24" FHD FreeSync IPS Esports Gaming
                      Monitor
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">19,012৳</span>{" "}
                    <span className="price-old">19,400৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 765৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/msi-g2412-fhd-gaming-monitor">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/g2412/optix-g24c4-05-200x200.webp"
                      alt='MSI G2412 23.8" 170Hz FHD IPS 1ms FreeSync Premium Gaming Monitor'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/msi-g2412-fhd-gaming-monitor">
                      MSI G2412 23.8" 170Hz FHD IPS 1ms FreeSync Premium Gaming
                      Monitor
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">24,735৳</span>{" "}
                    <span className="price-old">25,500৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 750৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/msi-optix-g24c4-gaming-monitor">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/optix-g24c4/optix-g24c4-200x200.jpg"
                      alt="MSI Optix G24C4 23.6 Inch FHD Curved LED Gaming Monitor With 144Hz Refresh Rate"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/msi-optix-g24c4-gaming-monitor">
                      MSI Optix G24C4 23.6 Inch FHD Curved LED Gaming Monitor With
                      144Hz Refresh Rate
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">24,240৳</span>{" "}
                    <span className="price-old">24,990৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 975৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/msi-modern-md271p-fhd-monitor">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/md271p/md271p-02-200x200.jpg"
                      alt="MSI Modern MD271P 27 Inch FHD IPS Type-C Monitor with Built-in Speakers"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/msi-modern-md271p-fhd-monitor">
                      MSI Modern MD271P 27 Inch FHD IPS Type-C Monitor with
                      Built-in&nbsp;Speakers
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">31,525৳</span>{" "}
                    <span className="price-old">32,500৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 680৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/msi-pro-mp242c-fhd-curved-monitor">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp242c/pro-mp242c-01-200x200.webp"
                      alt='MSI PRO MP242C 23.6" FHD Curved Monitor with Built-in Speakers'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/msi-pro-mp242c-fhd-curved-monitor">
                      MSI PRO MP242C 23.6" FHD Curved Monitor with
                      Built-in&nbsp;Speakers
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">16,310৳</span>{" "}
                    <span className="price-old">16,990৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Earn Point: 400</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/meta-quest-2-128-gb-all-in-one-vr-system">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/gaming-console/oculus/quest-2/quest-2-01-200x200.jpg"
                      alt="Meta Quest 2 128 GB All-in-One VR System"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/meta-quest-2-128-gb-all-in-one-vr-system">
                      Meta Quest 2 128 GB All-in-One VR System
                    </a>
                  </h4>
                  <div className="p-item-price">54,500৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Earn Point: 220</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/motorola-moto-g31">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/mobile/motorola/moto-g31/moto-g31-mineral-grey-01-200x200.webp"
                      alt="Motorola Moto G31 Smartphone (6/128GB)"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/motorola-moto-g31">
                      Motorola Moto G31 Smartphone (6/128GB)
                    </a>
                  </h4>
                  <div className="p-item-price">19,999৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Earn Point: 450</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/samsung-galaxy-s23-ultra">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s23-ultra/galaxy-s23-ultra-green-01-200x200.webp"
                      alt="Samsung Galaxy S23 Ultra Smartphone (12/256GB) - Prebook"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/samsung-galaxy-s23-ultra">
                      Samsung Galaxy S23 Ultra Smartphone (12/256GB) - Prebook
                    </a>
                  </h4>
                  <div className="p-item-price">197,999৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Earn Point: 180</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/samsung-galaxy-z-flip4">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-z-flip4/galaxy-z-flip4-001-200x200.webp"
                      alt="Samsung Galaxy Z Flip4 Smartphone (8/256GB)"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/samsung-galaxy-z-flip4">
                      Samsung Galaxy Z Flip4 Smartphone (8/256GB)
                    </a>
                  </h4>
                  <div className="p-item-price">154,999৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 360৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/samsung-galaxy-tab-a-8-0-android-tablet">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/tablet/samsung/galaxy-tab-a-8-0/samsung-galaxy-tab-a-8-0-01-200x200.jpg"
                      alt='Samsung Galaxy Tab A 8.0" Snapdragon 429 2GB RAM 32GB ROM Android Tablet'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/samsung-galaxy-tab-a-8-0-android-tablet">
                      Samsung Galaxy Tab A 8.0" Snapdragon 429 2GB RAM 32GB ROM
                      Android Tablet
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">8,639৳</span>{" "}
                    <span className="price-old">8,999৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 500৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/hp-ink-tank-315-printer">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/printer/hp-printer/hp-315-500x500/hp-315-500x500-200x200.webp"
                      alt="HP Ink Tank 315 Photo and Document All-in-One Printers"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/hp-ink-tank-315-printer">
                      HP Ink Tank 315 Photo and Document All-in-One Printers
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">14,300৳</span>{" "}
                    <span className="price-old">14,800৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">200৳ Discount on Online Order</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/pantum-p2506w-mono-laser-printer">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/printer/pantum/p2506w/p2506w-01-200x200.jpg"
                      alt="Pantum P2506W Single Function Mono Laser Printer With Wi-Fi (22 PPM)"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/pantum-p2506w-mono-laser-printer">
                      Pantum P2506W Single Function Mono Laser Printer With Wi-Fi
                      (22 PPM)
                    </a>
                  </h4>
                  <div className="p-item-price">11,800৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 2,550৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/dell-vostro-14-3400-laptop">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/laptop/dell/14-3400/vostro-14-3400-black-front-200x200.jpg"
                      alt='Dell Vostro 14 3400 Core i3 11th Gen 14" HD Laptop Backlit Keyboard with 03 Years Warranty'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/dell-vostro-14-3400-laptop">
                      Dell Vostro 14 3400 Core i3 11th Gen 14" HD Laptop Backlit
                      Keyboard with 03 Years Warranty
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">48,450৳</span>{" "}
                    <span className="price-old">51,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 2,100৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/doel-freedom-a9-amd-a9-9425-laptop">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/laptop/doel/freedom-a9/a9-01-200x200.webp"
                      alt='DOEL Freedom A9 AMD A9-9425 14.1" HD Laptop'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/doel-freedom-a9-amd-a9-9425-laptop">
                      DOEL Freedom A9 AMD A9-9425 14.1" HD Laptop
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">27,899৳</span>{" "}
                    <span className="price-old">29,999৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 8,100৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/asus-expertbook-b3-flip-b3402fea-core-i5-11th-gen-touch-laptop">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/expertbook-b3-flip/expertbook-b3-flip-01-200x200.jpg"
                      alt="Asus ExpertBook B3 Flip B3402FEA Core i5 14-inch 360° FHD Touch Laptop"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/asus-expertbook-b3-flip-b3402fea-core-i5-11th-gen-touch-laptop">
                      Asus ExpertBook B3 Flip B3402FEA Core i5 14-inch 360° FHD
                      Touch Laptop
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">81,900৳</span>{" "}
                    <span className="price-old">90,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 10,350৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/asus-expertbook-b3-flip-b3402fea-i7-11th-gen-laptop">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/expertbook-b3-flip/expertbook-b3-flip-01-200x200.jpg"
                      alt="Asus ExpertBook B3 Flip B3402FEA Core i7 16gb Ram 14-inch 360° FHD Touch Laptop"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/asus-expertbook-b3-flip-b3402fea-i7-11th-gen-laptop">
                      Asus ExpertBook B3 Flip B3402FEA Core i7 16gb Ram 14-inch
                      360° FHD Touch Laptop
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">104,650৳</span>{" "}
                    <span className="price-old">115,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 20,670৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/asus-zenbook-duo-14-ux482ear-i7-11th-gen-fhd-touch-laptop">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/zenbook-duo-14/zenbook-duo-14-04-200x200.webp"
                      alt='ASUS ZenBook Duo 14 UX482EAR i7 11th Gen 14" FHD Touch Laptop with Pen'
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/asus-zenbook-duo-14-ux482ear-i7-11th-gen-fhd-touch-laptop">
                      ASUS ZenBook Duo 14 UX482EAR i7 11th Gen 14" FHD Touch
                      Laptop with Pen
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">138,330৳</span>{" "}
                    <span className="price-old">159,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 1,900৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/samsung-43t5400-fhd-smart-tv">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/television/samsung/43t5400/43t5400-01-200x200.webp"
                      alt="Samsung 43T5400 43-Inch Full HD Smart Led Television"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/samsung-43t5400-fhd-smart-tv">
                      Samsung 43T5400 43-Inch Full HD Smart Led Television
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">36,100৳</span>{" "}
                    <span className="price-old">38,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 2,050৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/xiaomi-mi-a2-l43m7-eaukr-4k-ultrahd-led-tv">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/television/xiaomi/mi-a2-l43m7-eaukr/mi-a2-l43m7-eaukr-01-200x200.webp"
                      alt="Xiaomi Mi A2 L43M7-EAUKR 43-Inch 4K UltraHD Android Smart LED TV with Netflix Global Version"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/xiaomi-mi-a2-l43m7-eaukr-4k-ultrahd-led-tv">
                      Xiaomi Mi A2 L43M7-EAUKR 43-Inch 4K UltraHD Android Smart
                      LED TV with Netflix Global Version
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">38,950৳</span>{" "}
                    <span className="price-old">41,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 1,550৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/brother-lx27nt-electric-sewing-machine">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/sewing-machine/brother/lx27nt/lx27nt-01-200x200.jpg"
                      alt="Brother LX27NT 27 Built-in Stitches Electric Sewing Machine"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/brother-lx27nt-electric-sewing-machine">
                      Brother LX27NT 27 Built-in Stitches Electric Sewing Machine
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">13,950৳</span>{" "}
                    <span className="price-old">15,500৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 770৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/brother-jc14-household-sewing-machine">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/sewing-machine/brother/jc14/jc14-01-200x200.jpg"
                      alt="Brother JC14 Household Electric Sewing Machine"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/brother-jc14-household-sewing-machine">
                      Brother JC14 Household Electric Sewing Machine
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">10,230৳</span>{" "}
                    <span className="price-old">11,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Earn Point: 130</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/asrock-h610m-hdv-m-2-motherboard">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h610m-hdv-m-2/h610m-hdv-m-2-01-200x200.jpg"
                      alt="ASRock H610M-HDV/M.2 13th Gen & 12th Gen Micro ATX Motherboard"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/asrock-h610m-hdv-m-2-motherboard">
                      ASRock H610M-HDV/M.2 13th Gen &amp; 12th Gen Micro ATX
                      Motherboard
                    </a>
                  </h4>
                  <div className="p-item-price">10,500৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">250৳ Discount on Online Order</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/corsair-elgato-cam-link-4k-capture-card">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/capture-card/corsair/elgato-cam-link/elgato-cam-link-200x200.jpg"
                      alt="Corsair Elgato Cam Link 4K USB Compact HDMI Capture Card"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/corsair-elgato-cam-link-4k-capture-card">
                      Corsair Elgato Cam Link 4K USB Compact HDMI Capture Card
                    </a>
                  </h4>
                  <div className="p-item-price">11,000৳ </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 2,201৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/delux-dc-r01-gaming-chair">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/gaming-chair/delux/dc-r01/delux-dc-r01-blue-200x200.jpg"
                      alt="DELUX DC-R01 Gaming Chair"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/delux-dc-r01-gaming-chair">
                      DELUX DC-R01 Gaming Chair
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">15,799৳</span>{" "}
                    <span className="price-old">18,000৳</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 4,000৳</span>{" "}
                </div>
                <div className="p-item-img">
                  {" "}
                  <a href="https://www.startech.com.bd/corsair-t1-race-2018-gaming-chair-blue">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/gaming-chair/corsair/t1-race-2018/t1-race-black-blue-200x200.jpg"
                      alt="Corsair T1 Race 2018 Gaming Chair Black/Blue"
                      width={228}
                      height={228}
                    />
                  </a>
                </div>
                <div className="p-item-details">
                  <h4 className="p-item-name">
                    {" "}
                    <a href="https://www.startech.com.bd/corsair-t1-race-2018-gaming-chair-blue">
                      Corsair T1 Race 2018 Gaming Chair Black/Blue
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">23,000৳</span>{" "}
                    <span className="price-old">27,000৳</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="m-home seo-content m-html">
          <h1>
            Leading Computer, Laptop &amp; Gaming PC Retail &amp; Online Shop in
            Bangladesh
          </h1>
          <div>
            <p>
              Technology has become a part of our daily lives and for a huge
              portion of our life, we depend on tech products daily. There is
              hardly a home in Bangladesh without a tech product. This is where we
              come in.{" "}
              <a href="https://www.startech.com.bd/" target="" style={{}}>
                Star Tech Ltd.
              </a>{" "}
              started as a Tech Product Shop way back in March 2007. We focused on
              giving the customers the best service possible. This is why Star
              Tech is one of The most trusted names in the tech industry of
              Bangladesh today. After a long 15-year journey; Star Tech Ltd. was
              certified with the renowned "ISO 9001:2015 certification" as a
              recognition for the best Quality Control Management System. As an
              "ISO 9001:2015 certified" organization; Star Tech Ltd. is now up to
              the international standards that specify a Quality Management System
              (QMS). This Certification denotes that this organization
              consistently maintains all sorts of regulatory requirements to
              provide products and services for meeting all sorts of customer
              requirements.
            </p>
            <h2>Best Laptop Shop in Bangladesh</h2>
            <p>
              Star Tech is the largest and most reliable Branded{" "}
              <span style={{ fontWeight: "bold" }}>
                <a
                  href="https://www.startech.com.bd/laptop-notebook/laptop"
                  target=""
                >
                  Laptop{" "}
                </a>
                Shop in BD
              </span>
              . Whether you are a freelancer, office goer, or student - Star Tech{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop"
                target=""
              >
                Laptop{" "}
              </a>
              Shop has the perfect device for you. Gamers love our collection of{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop"
                target=""
              >
                Gaming Laptops
              </a>{" "}
              because we always bring the latest configuration devices to
              Bangladesh. Your budget is our top concern. Get an Intel Laptop or
              AMD Laptop within your desired price tag from Star Tech. Also, buy
              genuine official Apple{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop/apple-macbook"
                target=""
              >
                Macbook
              </a>{" "}
              Air or Macbook Pro laptop from our laptop shop. Star Tech sells the
              latest models of the most popular laptop computer brands such as{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop/razer-laptop"
                target=""
              >
                Razer
              </a>
              ,{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop/hp-laptop"
                target=""
              >
                HP
              </a>
              , Dell,{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop/apple-macbook"
                target=""
              >
                Apple Macbook
              </a>
              ,{" "}
              <a
                href="https://www.startech.com.bd/laptop-notebook/laptop/asus-laptop"
                target=""
              >
                Asus
              </a>
              , Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, i-Life,{" "}
              <a href="https://www.startech.com.bd/walton-laptop" target="">
                Walton
              </a>
              , Xiaomi MI, Huawei, Chuwi, etc.
            </p>
            <h2>Best Desktop PC Shop In Bangladesh</h2>
            <p>
              <a href="https://www.startech.com.bd/" target="">
                Star Tech
              </a>{" "}
              has the most comprehensive array of{" "}
              <a href="https://www.startech.com.bd/desktops" target="">
                Desktop PCs
              </a>
              . We offer top-of-the-line Custom PC,{" "}
              <a href="https://www.startech.com.bd/desktops/brand-pc" target="">
                Brand PC
              </a>
              , All-in-One PC, and{" "}
              <a
                href="https://www.startech.com.bd/desktops/portable-mini-pc"
                target=""
              >
                Portable Mini PC
              </a>{" "}
              at our stores spread all over Bangladesh. Get your new iMac Desktop
              or{" "}
              <a
                href="https://www.startech.com.bd/desktops/apple-mini-pc"
                target=""
              >
                Apple Mac Mini
              </a>{" "}
              with an international warranty and servicing plan. To build a
              Desktop PC with the components of your choice, you can always depend
              on the experts of the Star Tech PC shop. Take your gaming or
              professional content creation to the next level with a large
              collection of high-end Gaming and Rendering PC from Star Tech. You
              can choose and build a complete Personal computer with our{" "}
              <a href="https://www.startech.com.bd/tool/pc_builder" target="">
                PC Builder
              </a>{" "}
              feature anytime, anywhere. Or, build a Desktop PC to your taste
              right in front of you at the Star Tech PC Shop.
            </p>
            <h2>Best Gaming PC Shop In Bangladesh</h2>
            <p>
              We at Star Tech love gaming. Therefore, we aim to provide the best
              gaming service in Bangladesh with our{" "}
              <a href="https://www.startech.com.bd/desktops/gaming-pc" target="">
                Gaming PC
              </a>{" "}
              Shop, “Star Tech Rig House”. The Rig House is highly decorated with
              premium, gaming-focused computer components for customers to build
              their{" "}
              <a href="https://www.startech.com.bd/desktops/gaming-pc" target="">
                Gaming{" "}
              </a>
              or Rendering PC. Our Gaming shop offers the broadest range of Gaming
              PC, Gaming Laptops, and{" "}
              <a href="https://www.startech.com.bd/gaming-console" target="">
                Game Consoles
              </a>{" "}
              from XBOX &amp; PlayStation. Star Tech’s Gaming PC shop consists of
              Gaming Motherboards, Liquid Coolers, Custom Cooling for PC, Gaming
              Casings, high-performance RAM Kits, Graphics Cards, etc. Our
              exceptional Gaming focused accessories cover Gaming Chairs, Gaming
              Sofas, RGB Mousepads, Gaming Headphones, Headphone Stands, RGB
              Light-Strips and many more. We have strategic partnerships with many
              world-dominating computer Gaming brands like Razer, PNY, ASRock,
              Asus, Zadak, GALAX, Noctua, Antec, LIAN LI, CRYORIG, EKWB, Gamdias,
              KWG, XFX, etc. Our gaming concern also extends to leading gaming
              brands including A4Tech Bloody, SteelSeries, Logitech, Corsair,
              Redragon, Cooler Master, Fantech, Cougar, Gigabyte &amp; Elgato
              products at our Gaming PC Shop.
            </p>
            <h2>Best Office Equipment Shop In Bangladesh</h2>
            <p>
              Star Tech Ltd. is Bangladesh's most trusted{" "}
              <a href="https://www.startech.com.bd/office-equipment" target="">
                Office Equipments{" "}
              </a>
              Shop. For more than 15 years, we have been providing the best Office
              Solution. Take a quick drive to the nearest Star Tech retail center
              and furnish your home office, Start-up business desk, or corporate
              space with the best{" "}
              <a href="https://www.startech.com.bd/office-equipment" target="">
                Office Equipment
              </a>
              . Find Laptops, Desktops, Antiviruses, CCTV &amp; IP Cameras,
              Printers, Routers, Photocopiers, Attendance Machines, Scanners,
              Conference Systems, Server Equipment, etc for smooth office
              operation.
            </p>
            <h2>Best Gadget Shop In Bangladesh</h2>
            <p>
              We bring in the most sought{" "}
              <a href="https://www.startech.com.bd/gadget" target="">
                gadgets{" "}
              </a>
              at Star Tech. Only genuine and leading brands of{" "}
              <a href="https://www.startech.com.bd/gadget/smart-watch" target="">
                Smart Watch
              </a>
              ,
              <a href="https://www.startech.com.bd/earbuds" target="">
                Earbuds
              </a>
              ,{" "}
              <a href="https://www.startech.com.bd/television-startech" target="">
                TV
              </a>
              ,{" "}
              <a href="https://www.startech.com.bd/power-bank" target="">
                Power Bank
              </a>{" "}
              and Mobile Phone Accessories are available at our Gadget Shop. We
              are also concerned for creative professionals from whom we bring
              exciting gadgets like Drones, Studio Equipment,{" "}
              <a href="https://www.startech.com.bd/gimbal" target="">
                Gimbals{" "}
              </a>
              &amp; Stream Decks from DJI, Blackmagic, Corsair, Zhiyun, Gudsen,
              and Loupedeck. Ease up your chores with Daily Lifestyle gadgets from
              our gadget shop. Xiaomi, Razer, Fire-Boltt, UGREEN, OnePlus, Apple,
              Baseus, Orico, Havit, Samsung, and HOCO are a few of the brands we
              cover.
            </p>
            <h2>Mobile Shop in Bangladesh</h2>
            <p>
              Star Tech{" "}
              <a href="https://www.startech.com.bd/mobile-phone" target="">
                mobile phone
              </a>{" "}
              shop offers the latest smartphones and feature phones from top
              international brands.{" "}
              <a
                href="https://www.startech.com.bd/samsung-mobile-phone"
                target=""
              >
                Samsung
              </a>
              , Motorola, Google Pixel, Huawei, Xiaomi, Mi, Realme, and OnePlus
              are among the Android smartphone brands at our mobile shop. Star
              Tech is a one-stop solution for buying iPhones in Bangladesh. With
              official warranty, EMI &amp; home delivery service spanning the
              country, we are the largest{" "}
              <a href="https://www.startech.com.bd/mobile-phone" target="">
                mobile phone
              </a>{" "}
              shop in Bangladesh. Our mobile phone shop has an extensive
              collection of{" "}
              <a
                href="https://www.startech.com.bd/mobile-phone-accessories"
                target=""
              >
                mobile phone accessories
              </a>{" "}
              including chargers, USB Type C Cables, Power Banks, Wireless
              Chargers, and many more to go with your smartphone.
            </p>
            <h2>Best E-commerce Shop To Order Your Desired Product</h2>
            <p>
              Star Tech believes the most in customer satisfaction. To serve our
              customers most efficiently, we launched our{" "}
              <a href="https://www.startech.com.bd/" target="">
                E-Commerce shop
              </a>
              . Since its inception, it has been regarded as the best E-Commerce
              store in Bangladesh. Our{" "}
              <a href="https://www.startech.com.bd/" target="">
                website{" "}
              </a>
              features a highly intelligent search engine for our valued customers
              to find their desired products easily. We have developed the most
              comprehensive PC Builder App, which is also integrated into our web
              store. With the PC Builder, you can build your Custom PC for gaming
              or productivity, save the build, and get an estimated budget,
              wattage, and performance report. Our E-Commerce Shop runs a variety
              of campaigns and exciting deals on multiple national &amp;
              international occasions. To name a few of our most successful events
              are - Flash sale, Special offer, Thursday Thunder, Anniversary
              Special Offer, New Year Offer, 11.11, 12.12 Campaign, and many more.
              We also arrange special Gaming Events and tournaments for
              Bangladeshi gamers with renowned{" "}
              <a href="https://www.startech.com.bd/gaming" target="">
                gaming{" "}
              </a>
              Brands like Razer and Asus ROG.
            </p>
            <h3>
              Best Price, Product, After-sales Service &amp; Fastest Delivery
            </h3>
            <p>
              Star Tech Ltd. has taken care of its customers since the beginning.
              Whether a customer is purchasing or inquiring, our customers get the
              highest priority in every instance. We deliver the best product for
              the best price with the most extended customer service in the
              nation. We{" "}
              <a href="https://www.startech.com.bd/information/offer" target="">
                offer{" "}
              </a>
              your desired product within the fastest timeframe. Covering all 64
              districts of Bangladesh, our hubs are located at Dhaka, Gazipur,
              Chattogram, Khulna, Rangpur, and Gazipur. The plan to expand our
              operations in other cities is already in motion.
            </p>
          </div>
        </div>
      </div>
    </div>
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
    <div className="overlay" />
  </>
  )
}
