import React,{useState} from 'react'
import {products} from "../Dummy data/Dummy_data"


export default function Featured_products() {
  const [sub,setSub]=useState()
  // setSub(products)
  products.forEach(prod => {
    // setSub(prod.price_new)

const a= prod.price_old;
const b=prod.price_new;
    console.log(a-b)
    
  });
console.log(sub)
  return (
    <div>
           <div className="m-product m-home" id="module-481">
          <h2 className="m-header">Featured Products</h2>
          <p className="m-blurb">Check &amp; Get Your Desired Product!</p>
          <div className="p-items-wrap">
            
           

          { products.map((item,index) =>(
              
              <div className="p-item">
                <div className="p-item-inner">
                  <div className="marks">
                    <span key={index.id} className="mark">{(item.price_new)+(item.price_old)}</span>
                  </div>
                  <div className="p-item-img">
                    {" "}
                    <a href="https://www.startech.com.bd/msi-modern-md271p-fhd-monitor">
                      <img
                        src={item.image}
                        alt="MSI Modern MD271P 27 Inch FHD IPS Type-C Monitor with Built-in Speakers"
                       
                      />
                    </a>
                  </div>
                  <div className="p-item-details">
                    <h4 className="p-item-name">
                      {" "}
                      <a href="https://www.startech.com.bd/msi-modern-md271p-fhd-monitor">
                      {item.name}
                      </a>
                    </h4>
                    <div className="p-item-price">
                      <span className="price-new">{item.price_new}</span>{" "}
                      <span className="price-old">{item.price_old}</span>
                    </div>
                  </div>
                </div>
              </div>
        ))}



           {/* <div className="p-item">
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
            </div> */}


             

            {/* <div className="p-item">
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
                  <span className="mark">Save: 4,000৳</span>
                </div>
                <div className="p-item-img">
                  
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
                    
                    <a href="https://www.startech.com.bd/corsair-t1-race-2018-gaming-chair-blue">
                      Corsair T1 Race 2018 Gaming Chair Black/Blue
                    </a>
                  </h4>
                  <div className="p-item-price">
                    <span className="price-new">23,000৳</span>
                    <span className="price-old">27,000৳</span>
                  </div>
                </div>
              </div>
            </div> */}

            

          </div>
        </div>
    </div>
  )
}
