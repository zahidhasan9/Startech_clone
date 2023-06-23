import React from 'react'
import { DealsData } from './Dummy data/Dummy_data'

function MegaDeal() {
//     DealsData.map(data=>{
//         const result= data.price_old-data.price_new
// console.log(parseInt(data.price_old)-parseInt(data.price_new))
//     })
   

   
  return (
   <>
         
         {/* Navigation section */}
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
                  <a href="https://www.startech.com.bd/deals">Mobile Deal</a>
                </li>
              </ul>
            </div>
          </section>
         {/* info section */}
          <section className="info-page bg-bt-gray p-tb-15 ">
            <div className="container content ws-box m-auto">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontWeight: 700 }}>চলছে ঈদ মোবাইল ডিল!!</span>
              </p>
              <p style={{ textAlign: "center" }}>
                স্টার টেক অনলাইন শপে Apple, Vivo, Oppo সহ জনপ্রিয় সব ব্র্যান্ডের
                আকর্ষনীয় সব স্মার্টফোনে পাচ্ছেন সর্বোচ্চ ২৯,০০০ টাকা পর্যন্ত মূল্যছাড়
                এবং বিকাশ পেমেন্টে ১০% ইনস্ট্যান্ট ক্যাশব্যাক (সর্বোচ্চ ৫০০
                টাকা)&nbsp;
              </p>
              <p style={{ textAlign: "center" }}>
                বিকাশ অফারের বিস্তারিত জানতে{" "}
                <a
                  href="https://www.startech.com.bd/information/offer/info?offer_id=804"
                  target="_blank"
                >
                  এখানে ক্লিক করুন।
                </a>
              </p>{" "}
              <div className="countdown m-tb-30 m-auto" data-date={1688147940000}>
                <span className="label">ENDING IN</span>
                <div className="count-items">
                  <span className="group days">
                    <span className="digit" >0</span>
                    <span className="digit">6</span>
                    <span className="tag">Days</span>
                  </span>
                  <span className="group hours">
                    <span className="digit" >7</span>
                    <span className="digit" >6</span>
                    <span className="tag">Hours</span>
                  </span>
                  <span className="group minutes">
                    <span className="digit" >5</span>
                    <span className="digit" >2</span>
                    <span className="tag">Minutes</span>
                  </span>
                  <span className="group seconds">
                    <span className="digit" >0</span>
                    <span className="digit" >4</span>
                    <span className="tag">Seconds</span>
                  </span>
                </div>
              </div>
              <div className="child-list txt-center">
                <a
                  href="https://www.startech.com.bd/deals#module-771"
                  data-area="module-771"
                >
                  Mobile
                </a>
                <a
                  href="https://www.startech.com.bd/deals#module-323"
                  data-area="module-323"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </section>
        {/* product section */}
          <section className="content-bottom bg-gray p-tb-15">
            <div className="container">
              <div className="m-product m-home" id="module-771">
                <h2 className="m-header">Mobile</h2>
                <p className="m-blurb">Get Exciting Discount &amp; Cashback</p>{" "}
                <div className="p-items-wrap">
                 
                 {
                  DealsData.map(data=>
                    <div className="p-item">
                    <div className="p-item-inner">
                      <div className="marks">
                        <span className="mark">Save: {parseInt(data.price_old)-parseInt(data.price_new)}৳ </span>{" "}
                      </div>
                      <div className="p-item-img">
                        {" "}
                        <a href="https://www.startech.com.bd/apple-iphone-14">
                          <img
                            src={data.image}
                            alt="Apple iPhone 14 128GB Purple (Singapore)"
                            width={228}
                            height={228}
                          />
                        </a>
                      </div>
                      <div className="p-item-details">
                        <h4 className="p-item-name">
                          {" "}
                          <a href="https://www.startech.com.bd/apple-iphone-14">
                            {data.name}
                          </a>
                        </h4>
                        <div className="p-item-price">
                          <span className="price-new">{data.price_new}৳</span>{" "}
                          <span className="price-old">{data.price_old}৳</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                 }
              </div>
              </div>
         
          {/* Conditions  */}
              <div
                style={{ padding: 30 }}
                className="content ws-box m-auto bg-light"
                id="module-323"
              >
                <h1
                  style={{
                    fontFamily: "Roboto",
                    color: "rgb(239, 74, 35)",
                    textAlign: "center"
                  }}
                >
                  ঈদ মোবাইল ডিলের শর্তাবলী
                  <br />
                  <br />
                </h1>
                <ol
                  style={{
                    listStyleType: "bengali",
                    fontFamily: "Roboto",
                    textAlign: "justify"
                  }}
                >
                  {" "}
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    ক্যাম্পেইনটি&nbsp; ৩০শে জুন পর্যন্ত কার্যকর থাকবে।
                  </li>
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    ক্যাম্পেইনের আওতাভুক্ত কোন পণ্যে অন্য কোন অফার বিদ্যমান থাকলে তা
                    প্রযোজ্য হবে না। অর্থাৎ, ক্রেতা যেকোন একটি অফার উপভোগ করতে পারবেন।
                  </li>
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    ক্যাম্পেইন এর পণ্য অবশ্যই অনলাইনে অর্ডার করতে হবে।
                  </li>
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    ক্যাম্পেইনের পণ্যসমূহে ফ্রি ডেলিভারি অফার প্রযোজ্য নয়। অর্ডারের পর
                    ক্রেতাকে কল করে ডেলিভারি সংক্রান্ত সকল তথ্য জানিয়ে দেয়া হবে।
                  </li>
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    ক্যাম্পেইনের পণ্য অবশ্যই ক্যাম্পেইন চলাকালীন সময়ে অর্ডার করতে হবে।
                  </li>
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    বিকাশ ক্যাশব্যাকের তথ্য জানতে{" "}
                    <a
                      href="https://www.startech.com.bd/information/offer/info?offer_id=804"
                      target="_blank"
                    >
                      ভিজিট করুন এই পেইজে
                    </a>
                    ।
                  </li>
                  <li style={{ listStyle: "unset", marginBottom: 15, fontSize: 16 }}>
                    ক্যাশব্যাক অফারটি ২৮শে জুন পর্যন্ত কার্যকর থাকবে।
                  </li>
                  <li style={{ lineHeight: "1.5" }}>
                    <span style={{ fontSize: 16 }}>
                      কোন সঙ্গত কারনে এই ক্যাম্পেইনের পেমেন্ট রিফান্ড করা হলে তা
                      সাধারণ&nbsp;
                    </span>
                    <a
                      href="https://www.startech.com.bd/refund-policy"
                      style={{ backgroundColor: "rgb(255, 255, 255)", fontSize: 16 }}
                    >
                      রিফান্ড পলিসি
                    </a>
                    <span style={{ fontSize: 16 }}>
                      &nbsp;প্রক্রিয়ায় সম্পন্ন হবে। এক্ষেত্রে ক্রেতা যে এমাউন্ট
                      পেমেন্ট করেছে শুধুমাত্র তারই রিফান্ড প্রসেস করা হবে।
                    </span>
                  </li>
                </ol>{" "}
                <div
                  className="text-center"
                  style={{ fontFamily: "Roboto", margin: "30px 0px" }}
                >
                  {" "}
                  <mark className="text-center">
                    {" "}
                    <strong>
                      অনিবার্য কারনবশতঃ ক্যাম্পেইনে যেকোন পরিবর্তন, পরিবর্ধন বা
                      পরিমার্জনের সম্পূর্ণ অধিকার স্টার টেক কর্তৃপক্ষ সংরক্ষণ করে।
                    </strong>{" "}
                  </mark>{" "}
                </div>
              </div>
            </div>
          </section>

          <div className="overlay" />
        </>
      
      
  )
}

export default MegaDeal