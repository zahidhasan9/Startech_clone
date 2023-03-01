import React from 'react'

export default function Banner() {
  return (
    <div className="bg-gray content ">
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
    </div>
  )
}
