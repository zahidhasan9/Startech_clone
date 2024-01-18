import React from 'react'
import Filters_laptop from './Filters_laptop'
import { useState } from 'react'
import { LaptopData } from '../../Dummy data/Dummy_data'

function LaptopPage() {
    const [click, setClick]=useState(true)
    const toggle=()=>{
        setClick(!click)
    }
    
    const [arrowclick, setArrowClick]=useState(true)
    const toggleArrow =()=>{
        setArrowClick(!arrowclick)
    }
  return (
    <>
  
  

  <section className="after-header p-tb-10">
    <div className="container c-intro">
      <ul
        className="breadcrumb"
        itemScope=""
        itemType="http://schema.org/BreadcrumbList"
      >
        <li>
          <a href="https://www.startech.com.bd/">
            <i className="material-icons" title="Home">
              home
            </i>
          </a>
        </li>
        <li
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <a
            itemType="http://schema.org/Thing"
            itemProp="item"
            href="https://www.startech.com.bd/laptop-notebook"
          >
            <span itemProp="name">Laptop</span>
          </a>
          <meta itemProp="position" content={1} />
        </li>
        <li
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <a
            itemType="http://schema.org/Thing"
            itemProp="item"
            href="https://www.startech.com.bd/laptop-notebook/laptop"
          >
            <span itemProp="name">All Laptop</span>
          </a>
          <meta itemProp="position" content={2} />
        </li>
      </ul>
      <h1>Laptop Price in Bangladesh</h1>
      <p>
        Laptop Price in Bangladesh starts from BDT 26,999 to BDT 774,900
        depending on Brand, Specifications, and Features. Buy original branded
        laptop from Star Tech Laptop shop in BD. Browse below and Order yours
        now!
      </p>{" "}
      <div className="child-list">
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/lenovo-laptop">
          Lenovo
        </a>
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/asus-laptop">
          {" "}
          Asus
        </a>
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/hp-laptop">
          {" "}
          HP
        </a>
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/acer-laptop">
          Acer
        </a>
        <a href="https://www.startech.com.bd/gigabyte-laptop">Gigabyte</a>
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/dell-laptop">
          Dell
        </a>
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/msi-laptop">
          MSI
        </a>
        <a href="https://www.startech.com.bd/apple-macbook">MacBook</a>
        <a href="https://www.startech.com.bd/microsoft-surface-laptop">
          Microsoft
        </a>
        <a href="https://www.startech.com.bd/samsung-laptop">Samsung</a>
        <a href="https://www.startech.com.bd/thunderobot-laptop">Thunderobot</a>
        <a href="https://www.startech.com.bd/machenike-laptop">Machenike</a>
        <a href="https://www.startech.com.bd/xiaomi-mi-laptop">Xiaomi</a>
        <a href="https://www.startech.com.bd/toshiba-laptop">Toshiba</a>
        <a href="https://www.startech.com.bd/realme-laptop">Realme</a>
        <a href="https://www.startech.com.bd/huawei-laptop">HUAWEI</a>
        <a href="https://www.startech.com.bd/avita-laptop">AVITA_Laptop</a>
        <a href="https://www.startech.com.bd/doel-laptop">DOEL</a>
        <a href="https://www.startech.com.bd/walton-laptop">Walton</a>
        <a href="https://www.startech.com.bd/laptop-notebook/laptop/razer-laptop">
          Razer
        </a>{" "}
      </div>
    </div>
  </section>

  
  <section className="p-item-page bg-bt-gray p-tb-15">
    <div className="container">
      <div className="row">
        <column id="column-left" onClick={toggle} className={click ? "col-sm-3":"col-sm-3 open"}>
          <span className={click? "lc-close ":"lc-close close"}>
            <i className="material-icons" aria-hidden="true">
              close
            </i>
          </span>
          {/* filters components */}
          <Filters_laptop/>
        </column>
        <div id="content" className="col-xs-12 col-md-9 product-listing">
          <div className="top-bar ws-box">
            <div className="row">
              <div className="col-sm-4 col-xs-2 actions">
                <button onClick={toggle}  className={click? "tool-btn ":"tool-btn close"} id="lc-toggle">
                  <i className="material-icons" >filter_list</i> Filter
                </button>
                <label className="page-heading m-hide">All Laptop</label>
              </div>
              <div className="col-sm-8 col-xs-10 show-sort">
                <div className="form-group rs-none">
                  <label>Show:</label>
                  <div className="custom-select">
                    <select id="input-limit">
                      <option value={20} selected="selected">
                        20
                      </option>
                      <option value={24}>24</option>
                      <option value={48}>48</option>
                      <option value={75}>75</option>
                      <option value={90}>90</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Sort By:</label>
                  <div className="custom-select">
                    <select id="input-sort">
                      <option value="">Default</option>
                      <option value="p.price-ASC">Price (Low &gt; High)</option>
                      <option value="p.price-DESC">
                        Price (High &gt; Low)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content p-items-wrap">
            
            <div className="p-item">
              <div className="p-item-inner">
                <div className="marks">
                  <span className="mark">Save: 3,000৳</span>{" "}
                </div>
                <div className="p-item-img">
                  <a href="https://www.startech.com.bd/doel-freedom-a9-amd-a9-9425-laptop">
                    <img
                      src="https://www.startech.com.bd/image/cache/catalog/laptop/doel/freedom-a9/a9-01-228x228.webp"
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
                  <div className="short-description">
                    <ul>
                      <li>
                        Processor: AMD A9-9425 (1MB Cache, 3.10GHz up to
                        3.70GHz)
                      </li>
                      <li>RAM: 4GB, Storage: 240GB SSD</li>
                      <li>Display: 14.1" HD (1366x768)</li>
                      <li>Features: HD Webcam, Type-C</li>
                    </ul>
                  </div>
                  <div className="p-item-price">
                    <span className="price-new">26,999৳</span>{" "}
                    <span className="price-old">29,999৳</span>
                  </div>
                  <div className="actions">
                    <span
                      className="st-btn btn-add-cart"
                      type="button"
                      onclick="cart.add('23343', '1');"
                    >
                      <i className="material-icons">shopping_cart</i> Buy Now
                    </span>
                    <span
                      className="st-btn btn-compare"
                      onclick="compare.add('23343');"
                    >
                      <i className="material-icons">library_add</i>Add to
                      Compare
                    </span>
                  </div>
                </div>
              </div>
            </div>

         
          {LaptopData.map(index=>(
               <div className="p-item">
               <div className="p-item-inner">
                 <div className="p-item-img">
                   <a href="https://www.startech.com.bd/asus-vivobook-15-d515da-ryzen-3-3250u-laptop">
                     <img src={index.image}
                      
                     />
                   </a>
                 </div>
                 <div className="p-item-details">
                   <h4 className="p-item-name">
                     {" "}
                     <a href="https://www.startech.com.bd/asus-vivobook-15-d515da-ryzen-3-3250u-laptop">
                      {index.name}
                     </a>
                   </h4>
                   <div className="short-description">
                     <ul>
                       <li>
                        {index.Processor}
                       </li>
                       <li>{index.RAM}</li>
                       <li>{index.Display}</li>
                       <li>{index.Features}</li>
                     </ul>
                   </div>
                   <div className="p-item-price">
                     <span>{index.price_new}৳</span>{" "}
                   </div>
                   <div className="actions">
                     <span
                       className="st-btn btn-add-cart"
                       type="button"
                       onclick="cart.add('21816', '1');"
                     >
                       <i className="material-icons">shopping_cart</i> Buy Now
                     </span>
                     <span
                       className="st-btn btn-compare"
                       onclick="compare.add('21816');"
                     >
                       <i className="material-icons">library_add</i>Add to
                       Compare
                     </span>
                   </div>
                 </div>
               </div>
             </div>

          ))
            
         
          }

  
         
          </div>
          <div className="bottom-bar">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <ul className="pagination">
                  <li>
                    <span className="disabled">PREV</span>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=2">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=3">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=4">
                      4
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=5">
                      5
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=6">
                      6
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=7">
                      7
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=8">
                      8
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=9">
                      9
                    </a>
                  </li>
                  <li>
                    <a href="https://www.startech.com.bd/laptop-notebook/laptop?page=2">
                      NEXT
                    </a>
                  </li>
                </ul>{" "}
              </div>
              <div className="col-md-6 rs-none text-right">
                <p>Showing 1 to 20 of 645 (33 Pages)</p>
              </div>
            </div>
          </div>
          <div className="category-description p-15 ws-box">
            <h2>Buy original branded Laptop in BD</h2>
            <p>
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                Laptops{" "}
              </a>
              are compact, portable versions of full-fledged{" "}
              <a href="https://www.startech.com.bd/desktops">Desktop </a>
              Computers. A{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop
              </a>
              , also called a notebook, has all the functionalities of a regular
              PC and runs on a battery. For inputs and navigation, there is at
              least a keyboard and a trackpad or touchpad. Student, serviceman,
              or businessman - every user finds a laptop useful for a simple and
              organized workflow. In 2023 - there are{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop">
                Gaming Laptops
              </a>{" "}
              and{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/ultrabook">
                Premium Ultrabooks
              </a>{" "}
              capable to outperform any regular Intel or Ryzen PC. So, a quality
              laptop can be a great companion for work, creativity, and
              entertainment at the same time.
            </p>
            <p>
              <a href="https://www.startech.com.bd/">Star Tech</a> brings you
              the latest laptops at the most competitive price in Bangladesh.
              Choose from our leading{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop{" "}
              </a>
              brands of HP, Asus, Lenovo, Apple, MSI, Razer, Microsoft,
              Gigabyte, and many more. Our selection of best budget laptops
              incorporates crystal clear display and high performance. These are
              also great for designing and content editing. Be it your office
              chores, graphics designing, AAA gaming, or organizing studies - we
              have the perfect laptop for you.
            </p>
            <h2>Laptop Price list in BD 2023</h2>
            <table className="latest-product-list table-bordered">
              <tbody>
                <tr>
                  <th className="txt-left">Laptop List</th>
                  <th className="text-right">Price in BD</th>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/acer-aspire-lite-al15-51-amd-ryzen-5-5500u-fhd-laptop">
                      Acer Aspire Lite AL15-51 AMD Ryzen 5 5500U 15.6" FHD
                      Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">0৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/acer-acer-aspire-lite-al15-51-core-i5-11th-gen-fhd-laptop">
                      Acer Aspire Lite AL15-51 Core i5 11th Gen 15.6" FHD Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">0৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/acer-aspire-lite-al15-51-core-i3-11th-gen-fhd-laptop">
                      Acer Aspire Lite AL15-51 Core i3 11th Gen 15.6" FHD Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">0৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/msi-modern-14-c12mo-core-i5-12th-gen-fhd-laptop">
                      MSI Modern 14 C12MO Core i5 12th Gen 14'' FHD Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">81,900৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/msi-modern-15-b12mo-core-i5-12th-gen-fhd-laptop">
                      MSI Modern 15 B12MO Core i5 12th Gen 15.6'' FHD Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">83,900৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/dell-latitude-3520-i5-11th-gen-fhd-laptop">
                      Dell Latitude 3520 Core i5 11th Gen 1TB SSD 15.6" FHD
                      Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">78,000৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/asus-vivobook-15-x515ea-i5-11th-gen-1tb-hdd-256gb-ssd-laptop">
                      ASUS VivoBook 15 X515EA Core i5 11th Gen 1TB HDD+256GB SSD
                      15.6" FHD Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">69,800৳</td>
                </tr>
                <tr className="latest-product">
                  <td className="product-name">
                    <a href="https://www.startech.com.bd/asus-x515ea-core-i3-11th-gen-laptop">
                      ASUS VivoBook 15 X515EA Core i3 11th Gen 1TB HDD+256GB SSD
                      15.6" FHD Laptop
                    </a>
                  </td>
                  <td className="product-price text-right">53,500৳</td>
                </tr>{" "}
              </tbody>
            </table>
            <h2>How to Find The Best Laptop Easily</h2>
            <p>
              Our user-friendly official site and App lets you search for a{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop{" "}
              </a>
              in your price range. You can also check brand-wise laptops such as{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop/razer-laptop">
                Razer
              </a>
              ,{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop/apple-macbook">
                Apple
              </a>
              , Asus, Acer,{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop/hp-laptop">
                HP
              </a>
              , Dell, Huawei, Lenovo,{" "}
              <a href="https://www.startech.com.bd/microsoft-surface-laptop">
                Microsoft
              </a>
              , MSI, Gigabyte, Doel &amp; Avita. Choose from Intel Celeron Dual
              Core, Pentium Quad Core, Core i3, i5, i7, and i9 CPUs or AMD Ryzen
              3, 5, 7 &amp; 9 CPU Laptops.
            </p>
            <h3>Intel Laptop</h3>
            <p>
              These Laptops are manufactured exclusively with intel’s Intel Core
              Series Processors namely Intel Core i3, Core i5, and Core i7, and
              modern Core i9 with the latest generations like 14th gen, 13th
              gen, 12th gen, 11th gen, 10th gen. These laptops are a good
              balance between budget and performance. On the Intel side, we have
              10th, 11th, 12th, 13th and latest 14th Generation CPUs for{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptops
              </a>
              .
            </p>
            <h3>AMD RYZEN Laptop</h3>
            <p>
              These Laptops are made with AMD’s RYZEN series processors; namely
              AMD RYZEN 3, RYZEN 5, RYZEN 7, and RYZEN 9 processors. These
              processors have a stable performance that almost rivals Intel. But
              the upgrade cost is higher. AMD Laptops at Star Tech come with
              Ryzen 1000 to 6000 series processors. The highly mapped filter on
              our website allows sorting laptops by screen size, memory,
              storage, and other special features. Visit our dedicated gaming
              Laptop section to meet your gaming demands. Click the compare
              button to check the models of choice side by side.
            </p>
            <h2>Latest Laptop Series You Can Choose</h2>
            <p>
              The{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop{" "}
              </a>
              market has been quite saturated since its introduction and is
              expanding depending on usage. Considering the current demand of
              the users we have all the latest laptop series such as{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop/dell-laptop">
                Dell's{" "}
              </a>
              Inspiron, Latitude, and XPS, Acer's Aspire and TravelMate, Asus
              VivoBook, ZenBook, A Lenovo's IdeaPad and ThinkPad, and HP's
              Spectre, EliteBook, Envy, Pavilion, and ProBook to assist your
              choice. Among these types, business laptops are designed with
              rugged features to generate higher productivity, and Ultrabooks
              with their limited size that omit optical disc drives and Ethernet
              ports are gaining popularity.
            </p>
            <h2>Laptop for Students, Freelancers &amp; Content Creators</h2>
            <p>
              There are different types of{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                Laptops{" "}
              </a>
              available to buy in the market. Whether you are a student,
              freelancer, content creator, or video editor, you can get a laptop
              from Star Tech for your demand. The most common types of laptops
              are listed below.
            </p>
            <h3>Notebook</h3>
            <p>
              Notebook is another name for a full-sized laptop. They are
              well-balanced in portability &amp; functionality. They range from
              low-budget laptops to high-budget{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop">
                gaming laptops
              </a>{" "}
              &amp; Business series laptops.
            </p>
            <h3>Ultrabook Laptop</h3>
            <p>
              The main difference between a Notebook and an{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/ultrabook">
                Ultrabook{" "}
              </a>
              is in its size. Ultrabooks are smaller versions of Ultraportable
              laptops. The name Ultrabook is given by Intel. These laptops have
              a high level of security like hardware-level Anti-theft
              protection. Ultrabooks offer the best portability and robust
              performance in an extremely thin, ultra-light form. These are
              perfect for users constantly on the move.
            </p>
            <h3>MacBook</h3>
            <p>
              Apple’s{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop/apple-macbook">
                Macbook{" "}
              </a>
              laptops have two main variants. The ultra-thin Macbook Air &amp;
              the high-performance Macbook Pro. They both use MacOS. Recently
              all Macbook Air &amp; Mac mini PCs use Apple’s M2, M1 Max, or Pro
              silicons. MacBooks are exceptionally convenient for
              graphics-demanding tasks like designing and rendering. Apple’s
              Operating System offers the easiest user interface that never
              lags, and is super secure.
            </p>
            <h3>Chromebook</h3>
            <p>
              Chromebooks are cloud-Storage based Laptops that run on Linux
              based Chrome OS operating system. They are popular for being cheap
              laptops for students. Some corporate groups also use these budget
              laptops.
            </p>
            <h3>Gaming Laptop</h3>
            <p>
              <a href="https://www.startech.com.bd/laptop-notebook/Gaming-Laptop">
                Gaming laptops
              </a>{" "}
              usually pack a high-clock speed CPU, gaming motherboard, dedicated
              Graphics Card &amp; hi-powered air or liquid Coolers. They support
              a variety of gaming accessories like RGB lighting, Gaming keyboard
              &amp; mouse.
            </p>
            <h2>Buying a Laptop in 2023</h2>
            <p>
              When purchasing a{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop
              </a>
              , consider some factors for the best performance. While most of
              these factors are technical and related to performance, personal
              preferences also come forward. Technical specs like the CPU, GPU,
              RAM, &amp; Display are most important. Personal preferences can be
              the portability, casing material, ports, and cooling solution.
              These factors can bring the best value for your money, so check
              before making a purchase.
            </p>
            <h3>Processor</h3>
            <p>
              The processor or CPU is the first thing to pay attention to when
              purchasing a laptop. The number of cores and clock speed indicates
              how fast and efficient a processor is. Besides Intel and AMD
              laptops, MacBooks use Apple’s M1, M2, and A16 Bionic silicon
              chips. Core i7, i9, and Ryzen 7 &amp; 9 processors are ideal for
              tasks like video editing, &amp; intense programming. Core i5 or
              Ryzen 5 are highly popular for the best value for money. Laptops
              with Core i3 and Ryzen 3 serve as the best laptop CPU for everyday
              workloads in the office or classroom.
            </p>
            <h3>Display</h3>
            <p>
              Students will benefit most from a small, 13 or 14-inch laptop.
              Business professionals and executives need a laptop that can
              display documents and presentations perfectly while being
              lightweight. For them, a 15-inch size is best. Gamers and users
              with creative demands should get large-screen laptops for a
              perfect experience. Most laptops offer a minimum HD (720p)
              resolution, but we recommend a minimum Full HD (1080p) screen for
              all types of work.
            </p>
            <h3>Material</h3>
            <p>
              All the components of a laptop stack together in a thigh shell
              called a laptop casing. Commonly a laptop casing is made of metal
              or plastic. Plastic casings are very light and easily carryable.
              An aluminum finish laptop, on the other hand, offers both
              portability and sturdiness. Metal finish is also considered to
              offer relatively better cooling for the heating parts.
            </p>
            <h3>RAM</h3>
            <p>
              Random Access Memory (RAM) processes the data for the CPU to use.
              With more RAM you can keep more programs running. Memory-hungry,
              large programs, and games need more RAM for easy data transfer.
              Consider at least 4 GB RAM even on a budget laptop. For intensive
              tasks like video editing, graphics designing, or 3D modeling, you
              need at least 16GB RAM. But a minimum of 8 GB of RAM is a
              must-have for a good laptop. Most RAMs use DDR4 and DDR5
              technology.
            </p>
            <h3>Storage</h3>
            <p>
              You can either get a cheaper Hard Disc Drive or HDD which supports
              from 120GB up to 18TB. You can also use a faster solid-state drive
              or SSD that supports 120GB up to 100TB. An SSD can be plugged in
              by either a SATA interface or the typical 2.5” HDD. Also, there
              are M.2 SSDs with NVMe technology. An NVMe SSD is unimaginably
              faster than a typical SSD. Regardless of the type, any SSD will
              give a significantly faster boot time and operations. A great way
              to cut the cost is to have an HDD for larger storage, and a small
              SSD dedicatedly to the Operating System.
            </p>
            <h3>Battery</h3>
            <p>
              Any laptop should carry your productivity for a full day of use.
              For this, you need a laptop with enough battery backup. Expect at
              least 3-4 hours of browsing and heavy working time on a single
              charge. For light work, this will extend to up to 6 hours. More
              cells in the battery will give more backup but will add to the
              weight. Ultrabooks are a great solution for impressive
              configuration, and very lengthy battery backup despite being thin
              and lightweight.
            </p>
            <h3>Connectivity</h3>
            <p>
              WiFi 6E is the latest WiFi standard that gives faster internet
              over WiFi. For secondary display, HDMI is a must. USB Type C and
              Thunderbolt are also important for connecting mobile devices and
              Smartphones. For speedy transfers, look for more USB 3.1 ports.
              Besides, an SD card slot is a treat to move files fast from your{" "}
              <a href="https://www.startech.com.bd/dslr-camera">DSLR</a>,{" "}
              <a href="https://www.startech.com.bd/drone">Drone</a>, Action Cam
              or other devices without a card reader.
            </p>
            <h2>Upgrading Laptop RAM, Storage, and Graphics Card</h2>
            <p>
              To upgrade your{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop{" "}
              </a>
              RAM, HDD/SSD, or Graphics Unit in the future, you have to know if
              those parts are upgradable. Most laptops can be upgraded with
              faster RAM and SSD. A 2.5-inch SSD or HDD plugs into the regular
              SATA III port. If you want an even faster NVMe SSD, your laptop
              should have an M.2 port. When upgrading laptop RAM, check for free
              RAM slots and the specified BUS speed. A Laptop’s GPU is usually
              soldered on the motherboard and can not be upgraded.
            </p>
            <h2>Buy from The Best Laptop Shop in BD</h2>
            <p>
              Buy your{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop{" "}
              </a>
              from <a href="https://www.startech.com.bd/">Star Tech</a>, the
              biggest shop for{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                Laptops
              </a>
              , <a href="https://www.startech.com.bd/desktops">Desktop PC</a>,
              Gaming PC, PC Components,{" "}
              <a href="https://www.startech.com.bd/mobile-phone">
                Mobile Phones
              </a>
              , and{" "}
              <a href="https://www.startech.com.bd/tablet-pc">Tablet PC</a>.
              Visit Star Tech retail shops in Dhaka, Chattogram, Rajshahi,
              Gazipur, Rangpur, and Khulna. Or, order online and get delivered
              to your doorstep. Star Tech ensures you the best{" "}
              <a href="https://www.startech.com.bd/laptop-notebook/laptop">
                laptop{" "}
              </a>
              with a warranty, expert opinion, and extensive post-purchase
              service.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="content-bottom">
    <div className="container" />
  </section>
  <div onClick={toggle} className={click ? "overlay ":"overlay open"}></div>
 
</>

  )
}

export default LaptopPage