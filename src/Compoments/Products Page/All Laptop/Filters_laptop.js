import React from 'react'

function Filters_laptop() {
  return (
    <div className="filters">
    <div className="price-filter ws-box">
      <div className="label">
        <span>Price Range</span>
      </div>
      <div className="pf-wrap">
        <div
          id="rang-slider"
          className="noUi-horizontal"
          data-from={0}
          data-to={774900}
          data-min={0}
          data-max={774900}
        />
      </div>
      <label className="range-label from">
        <input type="text" id="range-to" name="from" />
      </label>
      <label className="range-label to">
        <input type="text" id="range-from" name="to" />
      </label>
    </div>
    <div className="filter-group ws-box show" data-group-type="status">
      <div className="label">
        <span>Availability</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="status" defaultValue={7} />
          <span>In Stock</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="status" defaultValue={8} />
          <span>Pre Order</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="status" defaultValue={9} />
          <span>Up Coming</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={333}>
      <div className="label">
        <span>Series</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2368} />
          <span>Consumer Laptops</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2369} />
          <span>Business Laptops</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2370} />
          <span>Gaming Laptops</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2371} />
          <span>Premium Ultrabook Laptops</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={211}>
      <div className="label">
        <span>Brand</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1058} />
          <span>Razer</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1061} />
          <span>Apple</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1062} />
          <span>Microsoft</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1059} />
          <span>HP</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1063} />
          <span>Dell</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1065} />
          <span>Lenovo</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1060} />
          <span>ASUS</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1066} />
          <span>Acer</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1064} />
          <span>MSI</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1067} />
          <span>Gigabyte</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1092} />
          <span>Huawei </span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1073} />
          <span>AVITA</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1079} />
          <span>Xiaomi</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1608} />
          <span>Realme</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1605} />
          <span>Samsung</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1157} />
          <span>Walton</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2043} />
          <span>Doel</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2434} />
          <span>Thunderobot</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2581} />
          <span>Machenike</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2671} />
          <span>Toshiba</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={287}>
      <div className="label">
        <span>Processor Type</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1882} />
          <span>Intel</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1883} />
          <span>AMD</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1884} />
          <span>Apple</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1885} />
          <span>Microsoft</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={4}>
      <div className="label">
        <span>Processor Model</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={11} />
          <span>Intel CDC</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={12} />
          <span>Intel PQC</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={13} />
          <span>Intel Core i3</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={14} />
          <span>Intel Core i5</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={15} />
          <span>Intel Core i7</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1045} />
          <span>Intel Core i9</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={10} />
          <span>AMD Athlon</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1037} />
          <span>AMD Ryzen 3</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1038} />
          <span>AMD Ryzen 5</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1039} />
          <span>AMD Ryzen 7</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1085} />
          <span>AMD Ryzen 9</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1167} />
          <span>Apple M1</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1638} />
          <span> Apple M1 Pro</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1639} />
          <span>Apple M1 Max</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2061} />
          <span>Apple M2</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2365} />
          <span>Apple M2 Pro</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2416} />
          <span>Apple M2 Max</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2725} />
          <span>Apple M3</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1364} />
          <span>Microsoft SQ 2</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2726} />
          <span>Apple M3 Pro</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2727} />
          <span>Apple M3 Max</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={5}>
      <div className="label">
        <span>Generation/Series</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1052} />
          <span>Intel 10th Gen</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1164} />
          <span>Intel 11th Gen</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1903} />
          <span>Intel 12th Gen</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2225} />
          <span>Intel 13th Gen</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1900} />
          <span>Ryzen 3000 Series</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1901} />
          <span>Ryzen 4000 Series</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1902} />
          <span>Ryzen 5000 Series</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1997} />
          <span>Ryzen 6000 Series</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2578} />
          <span>Ryzen 7000 Series</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={3}>
      <div className="label">
        <span>Display Size</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2069} />
          <span>Below 13-inch</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={6} />
          <span>13-Inch to 13.9-Inch</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={7} />
          <span>14-Inch to 14.9-Inch</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={8} />
          <span>15-Inch to 15.9-Inch</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1071} />
          <span>16-Inch to 16.9-Inch</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={9} />
          <span>17-Inch to 17.9-Inch</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={288}>
      <div className="label">
        <span>Display Type</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1886} />
          <span>LED</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1887} />
          <span>OLED</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1888} />
          <span>AMOLED</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={6}>
      <div className="label">
        <span>RAM Size</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={22} />
          <span>4 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={24} />
          <span>8 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={25} />
          <span>16 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1053} />
          <span>32 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2171} />
          <span>64 GB</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={364}>
      <div className="label">
        <span>RAM Type</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2668} />
          <span>DDR3</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2644} />
          <span>DDR4</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2645} />
          <span>DDR5</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={7}>
      <div className="label">
        <span>HDD</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={27} />
          <span>1 TB</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={15}>
      <div className="label">
        <span>SSD</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2585} />
          <span>64 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={66} />
          <span>128 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={67} />
          <span>256 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={68} />
          <span>512 GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={69} />
          <span>1 TB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1074} />
          <span>2 TB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2417} />
          <span>4 TB</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={20}>
      <div className="label">
        <span>Graphics</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1904} />
          <span>Shared / Integrated</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={93} />
          <span>Dedicated 2GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={94} />
          <span>Dedicated 4GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={95} />
          <span>Dedicated 6GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={96} />
          <span>Dedicated 8GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1982} />
          <span>Dedicated 10GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2579} />
          <span>Dedicated 12GB</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1905} />
          <span>Dedicated 16GB</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={289}>
      <div className="label">
        <span>Operating System</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1889} />
          <span>Free Dos</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1890} />
          <span>Windows</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1891} />
          <span>macOS</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2680} />
          <span>ChromeOS</span>
        </label>
      </div>
    </div>
    <div className="filter-group ws-box show" data-group-id={51}>
      <div className="label">
        <span>Special Features</span>
      </div>
      <div className="items">
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={270} />
          <span>Backlit Keyboard</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={271} />
          <span>Finger Print</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={272} />
          <span>360°</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1880} />
          <span>Touch Screen</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={1881} />
          <span>Dual Display</span>
        </label>
        <label className="filter">
          <input type="checkbox" name="filter" defaultValue={2107} />
          <span>Type-C Port</span>
        </label>
      </div>
    </div>
  </div>
  )
}

export default Filters_laptop