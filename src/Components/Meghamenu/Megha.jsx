import React from "react";
import "./megamenu.css";
const Megha = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <input type="radio" name="slide" id="menu-btn" />
            <input type="radio" name="slide" id="cancel-btn" />
          </div>
          <ul className="nav-links">
            <label className="btn cancel-btn" htmlFor="cancel-btn">
              <i className="fa fa-times"></i>
            </label>
            <li>
              <a href="/#" className="desktop-item" id="clear">
                Clearance
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Clearance: Get Inspired</header>
                    <hr />
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Women</a>
                      </li>
                      <li>
                        <a href="/#">Clothing</a>
                      </li>
                      <li>
                        <a href="/#">Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Handbags</a>
                      </li>
                      <li>
                        <a href="/#">Sunglasses & Eyewear</a>
                      </li>
                      <li>
                        <a href="/#">Jewelry</a>
                      </li>
                      <li>
                        <a href="/#">Watches</a>
                      </li>
                      <li>
                        <a href="/#">Accessories</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Men</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Clothing</a>
                      </li>
                      <li>
                        <a href="/#">Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Watches</a>
                      </li>
                      <li>
                        <a href="/#">Accessories</a>
                      </li>
                      <br />
                      <li>
                        <a href="/#" id="bold">Designer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Girls'Clothing</a>
                      </li>
                      <li>
                        <a href="/#">Girls'Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Boys' Clothing</a>
                      </li>
                      <li>
                        <a href="/#">Boys' Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Kids' Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Baby Clothing & Shoes</a>
                      </li>
                      <br />
                      <li>
                        <a href="/#" id="bold">Activewear</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Home</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Art & Wall Decor</a>
                      </li>
                      <li>
                        <a href="/#">Bath</a>
                      </li>
                      <li>
                        <a href="/#">Bedding</a>
                      </li>
                      <li>
                        <a href="/#">Decor</a>
                      </li>
                      <li>
                        <a href="/#">Electronic & Tech Acessories</a>
                      </li>
                      <li>
                        <a href="/#">Kitchen & Tabletop</a>
                      </li>
                      <li>
                        <a href="/#">Storage & Cleaning</a>
                      </li>
                      <br />
                      <li>
                        <a href="/#" id="bold">Beauty</a>
                      </li>
                      <li>
                        <a href="/#">Makeup</a>
                      </li>
                      <li>
                        <a href="/#">Skin Care</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/#" className="desktop-item">
                Women
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Women: Get Inspired</header>
                    <hr />
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Designer Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Contemporary Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Trend Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Dresses Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Denim Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Swim & Sun Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sandals Under $50p</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Wedding Shop</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop by Occasion</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop by Trend</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nike for the Family</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Rack Essentials</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop By Brand</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Activewear</a>
                      </li>
                      <li>
                        <a href="/#">Blazers</a>
                      </li>
                      <li>
                        <a href="/#">Coats & Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Dresses</a>
                      </li>
                      <li>
                        <a href="/#">Jeans & Denim</a>
                      </li>
                      <li>
                        <a href="/#">Jumpsuits & Rompers</a>
                      </li>
                      <li>
                        <a href="/#">Lingerie, Hosiery & Shapewear</a>
                      </li>
                      <li>
                        <a href="/#">Loungewear</a>
                      </li>
                      <li>
                        <a href="/#">Jeans & Denim</a>
                      </li>
                      <li>
                        <a href="/#">Pants & Leggings</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Skirts</a>
                      </li>
                      <li>
                        <a href="/#">Sleepwear & Robes</a>
                      </li>
                      <li>
                        <a href="/#">Sweaters</a>
                      </li>
                      <li>
                        <a href="/#">Sweatshirts & Hoodies</a>
                      </li>
                      <li>
                        <a href="/#">Swimsuits & Cover-Ups</a>
                      </li>
                      <li>
                        <a href="/#">Tops</a>
                      </li>
                      <br />

                      <li>
                        <a href="/#">Plus-Size</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Athletic & Running</a>
                      </li>
                      <li>
                        <a href="/#">Boots & Booties</a>
                      </li>
                      <li>
                        <a href="/#">Clogs</a>
                      </li>
                      <li>
                        <a href="/#">Comfort</a>
                      </li>
                      <li>
                        <a href="/#">Espadrilles</a>
                      </li>
                      <li>
                        <a href="/#">Flats</a>
                      </li>
                      <li>
                        <a href="/#">Flip-Flops & Slides</a>
                      </li>
                      <li>
                        <a href="/#">Heels</a>
                      </li>
                      <li>
                        <a href="/#">Loafers & Oxfords</a>
                      </li>
                      <li>
                        <a href="/#">Mules</a>
                      </li>
                      <li>
                        <a href="/#">Rain Boots</a>
                      </li>
                      <li>
                        <a href="/#">Sandals</a>
                      </li>
                      <li>
                        <a href="/#">Slippers</a>
                      </li>
                      <li>
                        <a href="/#">Sneakers</a>
                      </li>
                      <li>
                        <a href="/#">Wedges</a>
                      </li>
                      <br />
                      <li>
                        <a href="/#">Extended Shoe Sizes & Widths</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Young Adult</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Accessories</a>
                      </li>
                      <li>
                        <a href="/#">Clothing</a>
                      </li>
                      <li>
                        <a href="/#">Shoes</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Handbags</a>
                      </li>
                      <li>
                        <a href="/#">Designer Bags</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sunglasses & Eyewear</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Jewelry</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Watches</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Accessories</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Luggage & Travel</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Beauty</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Crops & Capris</a>
                      </li>
                      <li>
                        <a href="/#">Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Leggings</a>
                      </li>
                      <li>
                        <a href="/#">Shirts&Tees</a>
                      </li>
                      <li>
                        <a href="/#">Shorts&Skirts</a>
                      </li>
                      <li>
                        <a href="/#">Sports Bras</a>
                      </li>
                      <li>
                        <a href="/#">Sweatpants & Joggers</a>
                      </li>
                      <li>
                        <a href="/#">Sweatshirts&Hoodies</a>
                      </li>
                      <li>
                        <a href="/#">Tanks</a>
                      </li>

                      <li>
                        <a href="/#" id="bold">Active Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Hiking & Trail</a>
                      </li>
                      <li>
                        <a href="/#">Running</a>
                      </li>
                      <li>
                        <a href="/#">Training</a>
                      </li>
                      <li>
                        <a href="/#">Walking</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Athletic Gear & Equipment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/#" className="desktop-item">
                Men
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Men: Get Inspired</header>
                    <hr />
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Designer Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Contemporary Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Graphic Tees Under $25</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Denim Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Swim & Sun Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sneakers Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Wedding Shop</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop by Occasion</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nike for the Family</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Rack Essentials</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop By Brand</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nordstrom Made</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Clearance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Activewear</a>
                      </li>
                      <li>
                        <a href="/#">Blazers&Sports Coats</a>
                      </li>
                      <li>
                        <a href="/#">Coats & Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Dress Shirts</a>
                      </li>
                      <li>
                        <a href="/#">Jeans</a>
                      </li>
                      <li>
                        <a href="/#">Joggers & Sweatpants</a>
                      </li>
                      <li>
                        <a href="/#">Lounge, Pajamas & Robes</a>
                      </li>
                      <li>
                        <a href="/#">Pants</a>
                      </li>
                      <li>
                        <a href="/#">Polo Shirts</a>
                      </li>
                      <li>
                        <a href="/#">Shirts</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Socks</a>
                      </li>
                      <li>
                        <a href="/#">Suits & Separates</a>
                      </li>
                      <li>
                        <a href="/#">Sweaters</a>
                      </li>
                      <li>
                        <a href="/#">Sweatshirts & Hoodies</a>
                      </li>
                      <li>
                        <a href="/#">Swimwear&Board Shorts</a>
                      </li>
                      <li>
                        <a href="/#">T-Shirts</a>
                      </li>

                      <li>
                        <a href="/#">Underwear</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Athletic & Running</a>
                      </li>
                      <li>
                        <a href="/#">Boot Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Boots</a>
                      </li>
                      <li>
                        <a href="/#">Comfort</a>
                      </li>
                      <li>
                        <a href="/#">Dress Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Loafers & Slip-Ons</a>
                      </li>
                      <li>
                        <a href="/#">Oxfords & Derbys</a>
                      </li>
                      <li>
                        <a href="/#">Sandals & Flip-Flops</a>
                      </li>
                      <li>
                        <a href="/#">Slippers</a>
                      </li>
                      <li>
                        <a href="/#">Sneakers</a>
                      </li>

                      <br />
                      <li>
                        <a href="/#">Extended Shoe Sizes & Widths</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Young Adult</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Accessories</a>
                      </li>
                      <li>
                        <a href="/#">Clothing</a>
                      </li>
                      <li>
                        <a href="/#">Shoes</a>
                      </li>

                      <li>
                        <a href="/#" id="bold">Accessorise</a>
                      </li>
                      <li>
                        <a href="/#"> Bags & Backpacks</a>
                      </li>
                      <li>
                        <a href="/#">Sunglasses & Eyewear</a>
                      </li>
                      <li>
                        <a href="/#">belt & Suspenders</a>
                      </li>
                      <li>
                        <a href="/#">Hats</a>
                      </li>
                      <li>
                        <a href="/#">Jewelry</a>
                      </li>
                      <li>
                        <a href="/#">Ties & Pocket Squares</a>
                      </li>
                      <li>
                        <a href="/#">Wallets & Card Cases</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sunglasses & Eyewear</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Watches</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Luggage & Travel</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Grooming & Cologne</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Shirts</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Sweatpants&Joggers</a>
                      </li>
                      <li>
                        <a href="/#">Sweatshirts&Hoodies</a>
                      </li>

                      <li>
                        <a href="/#">Tanks</a>
                      </li>

                      <li>
                        <a href="/#" id="bold">Active Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Hiking & Trail</a>
                      </li>
                      <li>
                        <a href="/#">Running</a>
                      </li>
                      <li>
                        <a href="/#">Training</a>
                      </li>
                      <li>
                        <a href="/#">Walking</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Athletic Gear & Equipment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/#" className="desktop-item">
                Kids
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Kids: Get Inspired</header>
                    <hr />
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sandals Under $20</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sneakers Under $30</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nike for the Family</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Swim Shop</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Disney Shop</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Z by Zella for the Family</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Rack Essentials</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Baby Shower Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop by Occasion</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop By Brand</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nordstrom Made</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Clearance</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Girls' Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Baby Girl (Sizes 0-24M)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler Girls (Sizes 2T-4T)</a>
                      </li>
                      <li>
                        <a href="/#">Girls (Sizes 4-6x)</a>
                      </li>
                      <li>
                        <a href="/#">Girls (Sizes 7-16)</a>
                      </li>
                      <li>
                        <a href="/#">Tween Girls</a>
                      </li>
                      <li>
                        <a href="/#">Accessories</a>
                      </li>
                      <li>
                        <a href="/#">Activewear s</a>
                      </li>
                      <li>
                        <a href="/#">Coats & Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Dresses & Rompers</a>
                      </li>
                      <li>
                        <a href="/#">Jeans</a>
                      </li>
                      <li>
                        <a href="/#">Pajamas & Robes</a>
                      </li>
                      <li>
                        <a href="/#">Pants & Leggings</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Skirts</a>
                      </li>
                      <li>
                        <a href="/#">Swimsuits & Cover-Ups</a>
                      </li>
                      <li>
                        <a href="/#">Tops</a>
                      </li>
                      <li>
                        <a href="/#">Underwear, Socks & Bra</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Boys' Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Baby Boy (Sizes 0-24M)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler Boys (Sizes 2T-4T)</a>
                      </li>
                      <li>
                        <a href="/#">Boys (Sizes 4-7)</a>
                      </li>
                      <li>
                        <a href="/#">Boys (Sizes 8-20)</a>
                      </li>
                      <li>
                        <a href="/#">Accessories</a>
                      </li>
                      <li>
                        <a href="/#">Activewear</a>
                      </li>
                      <li>
                        <a href="/#">Coats & Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Jeans</a>
                      </li>
                      <li>
                        <a href="/#">Pajamas & Robes</a>
                      </li>
                      <li>
                        <a href="/#">Pants</a>
                      </li>
                      <li>
                        <a href="/#">Sets</a>
                      </li>
                      <li>
                        <a href="/#">Shirts & Tops</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Suits & Separates</a>
                      </li>
                      <li>
                        <a href="/#">Swim Trunks & Rashguards</a>
                      </li>
                      <li>
                        <a href="/#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="/#">Underwear & Socks</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Baby (Sizes 0-4)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler (Sizes 4.5-12)</a>
                      </li>
                      <li>
                        <a href="/#">Little Kid (Sizes 12.5-3)</a>
                      </li>
                      <li>
                        <a href="/#">Big Kid (Sizes 3.5-7)</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Girls' Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Baby (Sizes 0-4)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler (Sizes 4.5-12)</a>
                      </li>
                      <li>
                        <a href="/#">Little Kid (Sizes 12.5-3)</a>
                      </li>
                      <li>
                        <a href="/#">Big Kid (Sizes 3.5-7)</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Boys' Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Baby (Sizes 0-4)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler (Sizes 4.5-12)</a>
                      </li>
                      <li>
                        <a href="/#">Little Kid (Sizes 12.5-3)</a>
                      </li>
                      <li>
                        <a href="/#">Big Kid (Sizes 3.5-7)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Baby Clothing & Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Baby Girl</a>
                      </li>
                      <li>
                        <a href="/#">Baby Boy</a>
                      </li>
                      <li>
                        <a href="/#">Baby Shoes</a>
                      </li>

                      <li>
                        <a href="/#">Baby Gear & Essentials</a>
                      </li>
                      <li>
                        <a href="/#">Baby Shower Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Toys</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/#" className="desktop-item">
                Shoes
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Shoes: Get Inspired</header>
                    <hr/>
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Designer Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Contemporary Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Young Adult Brands</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sandals Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sneakers Under $50</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Flip-Flops & Slides for the Family</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nike for the Family</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Special Occasion</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop by Trend</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nordstrom Made</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Women's Shoes Clearance</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Men's Shoes Clearance</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Kids' Shoes Clearance</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Athletic & Running</a>
                      </li>
                      <li>
                        <a href="/#">Boots & Booties</a>
                      </li>
                      <li>
                        <a href="/#">Clogs</a>
                      </li>
                      <li>
                        <a href="/#">Comfort</a>
                      </li>
                      <li>
                        <a href="/#">Espadrilles</a>
                      </li>
                      <li>
                        <a href="/#">Flats</a>
                      </li>
                      <li>
                        <a href="/#">Flip-Flops & Slides</a>
                      </li>
                      <li>
                        <a href="/#">Heels</a>
                      </li>
                      <li>
                        <a href="/#">Loafers & Oxfords</a>
                      </li>
                      <li>
                        <a href="/#">Mules</a>
                      </li>
                      <li>
                        <a href="/#">Rain Boots</a>
                      </li>
                      <li>
                        <a href="/#">Sandals</a>
                      </li>
                      <li>
                        <a href="/#">Slippers</a>
                      </li>
                      <li>
                        <a href="/#">Sneakers</a>
                      </li>
                      <li>
                        <a href="/#">Wedges</a>
                      </li>
                      <li>
                        <a href="/#">Extended Sizes & Widths</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Athletic & Running</a>
                      </li>
                      <li>
                        <a href="/#">Boots</a>
                      </li>
                      <li>
                        <a href="/#">Comfort</a>
                      </li>
                      <li>
                        <a href="/#">Dress Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Loafers & Slip-Ons</a>
                      </li>
                      <li>
                        <a href="/#">Oxfords & Derbys</a>
                      </li>
                      <li>
                        <a href="/#">Sandals & Flip-Flops</a>
                      </li>
                      <li>
                        <a href="/#">Slippers</a>
                      </li>
                      <li>
                        <a href="/#">Sneakers</a>
                      </li>
                      <li>
                        <a href="/#">Extended Sizes & Widths</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Baby (Sizes 0-4)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler (Sizes 4.5-12)</a>
                      </li>
                      <li>
                        <a href="/#">Little Kid (Sizes 12.5-3)</a>
                      </li>
                      <li>
                        <a href="/#">Big Kid (Sizes 3.5-7)</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Girls' Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Baby (Sizes 0-4)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler (Sizes 4.5-12)</a>
                      </li>
                      <li>
                        <a href="/#">Little Kid (Sizes 12.5-3)</a>
                      </li>
                      <li>
                        <a href="/#">Big Kid (Sizes 3.5-7)</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Boys' Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Baby (Sizes 0-4)</a>
                      </li>
                      <li>
                        <a href="/#">Toddler (Sizes 4.5-12)</a>
                      </li>

                      <li>
                        <a href="/#">Little Kid (Sizes 12.5-3)</a>
                      </li>
                      <li>
                        <a href="/#">Big Kid (Sizes 3.5-7)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">adidas</a>
                      </li>
                      <li>
                        <a href="/#">adidas</a>
                      </li>
                      <li>
                        <a href="/#">ASICS</a>
                      </li>
                      <li>
                        <a href="/#">Brooks</a>
                      </li>
                      <li>
                        <a href="/#">Cole Haan</a>
                      </li>
                      <li>
                        <a href="/#">Converse</a>
                      </li>
                      <li>
                        <a href="/#">New Balance</a>
                      </li>
                      <li>
                        <a href="/#">Nike</a>
                      </li>
                      <li>
                        <a href="/#">Sam Edelman</a>
                      </li>
                      <li>
                        <a href="/#">Steve Madden</a>
                      </li>
                      <li>
                        <a href="/#">UGG</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="/#" className="desktop-item">
                Activewear
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Activewear: Get Inspired</header>
                    <hr/>
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Adidas</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nike</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Z by Zella</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Clearance</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop by Activity</a>
                      </li>
                      <li>
                        <a href="/#">Athleisure</a>
                      </li>
                      <li>
                        <a href="/#">Commuter e</a>
                      </li>
                      <li>
                        <a href="/#">Golf</a>
                      </li>
                      <li>
                        <a href="/#">Hiking</a>
                      </li>
                      <li>
                        <a href="/#">Running</a>
                      </li>
                      <li>
                        <a href="/#">Swim & Surf</a>
                      </li>
                      <li>
                        <a href="/#">Training</a>
                      </li>
                      <li>
                        <a href="/#">Yoga & Barr</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Crops & Capris</a>
                      </li>
                      <li>
                        <a href="/#">Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Leggings</a>
                      </li>
                      <li>
                        <a href="/#">Shirts & Tees</a>
                      </li>
                      <li>
                        <a href="/#">Shorts & Skirts</a>
                      </li>
                      <li>
                        <a href="/#">Socks</a>
                      </li>
                      <li>
                        <a href="/#">Sports Bras</a>
                      </li>
                      <li>
                        <a href="/#">Sweatpants & Joggers</a>
                      </li>
                      <li>
                        <a href="/#">Sweatshirts & Hoodies</a>
                      </li>
                      <li>
                        <a href="/#">Swim</a>
                      </li>
                      <li>
                        <a href="/#">Tanks</a>
                      </li>
                      <li>
                        <a href="/#">Plus Activewear</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Jackets</a>
                      </li>
                      <li>
                        <a href="/#">Shirts</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Socks</a>
                      </li>
                      <li>
                        <a href="/#">Sweatpants & Joggers</a>
                      </li>
                      <li>
                        <a href="/#">Sweatshirts & Hoodies</a>
                      </li>
                      <li>
                        <a href="/#">Swim</a>
                      </li>
                      <li>
                        <a href="/#">Tanks</a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Active Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Hiking & Trail</a>
                      </li>
                      <li>
                        <a href="/#">Lifestyle</a>
                      </li>
                      <li>
                        <a href="/#">Running</a>
                      </li>
                      <li>
                        <a href="/#">Sport Sandals</a>
                      </li>
                      <li>
                        <a href="/#">Training</a>
                      </li>
                      <li>
                        <a href="/#">Walking</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Men's Active Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Hiking & Trail</a>
                      </li>
                      <li>
                        <a href="/#">Lifestyle</a>
                      </li>
                      <li>
                        <a href="/#">Running</a>
                      </li>
                      <li>
                        <a href="/#">Sport Sandals</a>
                      </li>
                      <li>
                        <a href="/#">Training</a>
                      </li>
                      <li>
                        <a href="/#">Walking</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Activewear
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Girls' Activewear
</a>
                      </li>
                      <li>
                        <a href="/#">Boys' Activewear
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Kids' Active Shoes
</a>
                      </li>
                      <li>
                        <a href="/#">Girls' Active Shoes
</a>
                      </li>
                      <li>
                        <a href="/#">Boys' Active Shoes
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Athletic Gear & Equipment</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="/#" className="desktop-item">
                Bags&Accessories
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Bags & Accessories: Get Inspired
</header>
<hr/>
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Handbags Under $100
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Designer Sunglasses Under $100
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nordstrom Made
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Women's Accessories Clearance
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Men's Accessories Clearance</a>
                      </li>
                    
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Bony Levy
</a>
                      </li>
                      <li>
                        <a href="/#">Gucci Sunglasses
</a>
                      </li>
                      <li>
                        <a href="/#">Kate Spade New York
</a>
                      </li>
                      <li>
                        <a href="/#">Marc Jacobs
</a>
                      </li>
                      <li><a href="/#">Ray-Ban</a></li>


<li>
                        <a href="/#" id="bold">Designer

</a>
                      </li>
                      <li>
                        <a href="/#">Designer Accessories

</a>
                      </li>
                      <li>
                        <a href="/#">Designer Handbags

</a>
                      </li>
                      <li>
                        <a href="/#">Designer Sunglasses & Eyewear
</a>
                      </li>
                    
                      
                    </ul>
                  </div>
                  <div className="row">
                    <header>Handbags
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Backpacks
</a>
                      </li>
                      <li>
                        <a href="/#">Beach & Straw Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Bucket Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Clutches & Pouches
</a>
                      </li>
                      <li>
                        <a href="/#">Crossbody Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Designer Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Fanny Packs & Belt Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Mini Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Satchels
</a>
                      </li>
                      <li>
                        <a href="/#">Shoulder Bags
</a>
                      </li>
                      <li>
                        <a href="/#">Totes
</a>
                      </li>
                      <li>
                        <a href="/#">Wallets
r</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Luggage & Travel
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Tech Accessories
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Sunglasses & Eyewea</a>
                      </li>
                     
                    </ul>
                  </div>

                  <div className="row">
                    <header>Jewelry
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Bracelets
</a>
                      </li>
                      <li>
                        <a href="/#">Earrings
</a>
                      </li>
                      <li>
                        <a href="/#">Necklaces
</a>
                      </li>
                      <li>
                        <a href="/#">Rings
</a>
                      </li>
                      <li>
                        <a href="/#">14K Gold Jewelry
</a>
                      </li>
                      <li>
                        <a href="/#">Diamond Jewelry
</a>
                      </li>
                      <li>
                        <a href="/#">Gold Jewelry
</a>
                      </li>
                      <li>
                        <a href="/#">Rose Gold Jewelry
</a>
                      </li>
                      <li>
                        <a href="/#">Sterling Silver Jewelry
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Fine Jewelry
</a>
                      </li>
                      <li>
                        <a href="/#">Bracelets
</a>
                      </li>
                      <li>
                        <a href="/#">Earrings
</a>
                      </li>
                      <li>
                        <a href="/#">Necklaces
</a>
                      </li>
                      <li>
                        <a href="/#">Rings
</a>
                      </li>
                     
                      
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Accessories
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Belts
</a>
                      </li>
                      <li>
                        <a href="/#">Hair Accessories
</a>
                      </li>
                      <li>
                        <a href="/#">Hats
</a>
                      </li>
                      <li>
                        <a href="/#">Ponchos, Kimonos & Capes
</a>
                      </li>
                      <li>
                        <a href="/#">Sarongs, Caftans & Cover-Ups
</a>
                      </li>
                      <li>
                        <a href="/#">Scarves
</a>
                      </li>
                      <li>
                        <a href="/#">Winter Accessories
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Men's Accessories
</a>
                      </li>
                      <li>
                        <a href="/#">Bags & Backpacks
</a>
                      </li>
                      <li>
                        <a href="/#">Belts & Suspenders
</a>
                      </li> <li>
                        <a href="/#">Hats
</a>
                      </li>
                      <li>
                        <a href="/#">Wallets & Card Cases
</a>
                      </li>
                      <li>
                        <a href="/#">Winter Accessories</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="/#" className="desktop-item">
                Home
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Home: Get Inspired
</header><hr/>
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Bedding Under $50
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Home Decor Under $50
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Kitchen Appliances Under $100
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Rack Essentials
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Nordstrom Made
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Clearance
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Shop By Brand</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="row">
                    <header>Bath
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Bath Rugs & Mats
</a>
                      </li>
                      <li>
                        <a href="/#">Bath Towels
</a>
                      </li>
                      <li>
                        <a href="/#">Bathroom Decor
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Bedding
</a>
                      </li>
                      <li>
                        <a href="/#">Comforters & Duvet Inserts
</a>
                      </li>
                      <li>
                        <a href="/#">Duvet Covers
</a>
                      </li>
                      <li>
                        <a href="/#">Mattress Pads & Toppers
</a>
                      </li>
                      <li>
                        <a href="/#">Pillow Cases
</a>
                      </li>
                      <li>
                        <a href="/#">Pillows
</a>
                      </li>
                      <li>
                        <a href="/#">Quilts & Blankets
</a>
                      </li>
                      <li>
                        <a href="/#">Sheet Sets
</a>
                      </li>
                      <li>
                        <a href="/#">Throws</a>
                      </li>

                    </ul>
                  </div>
                  <div className="row">
                    <header>Decor
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Decorative Accessories
</a>
                      </li>
                      <li>
                        <a href="/#">Decorative Pillows
</a>
                      </li>
                      <li>
                        <a href="/#">Faux Plants & Stands
</a>
                      </li>
                      <li>
                        <a href="/#">Home Fragrances, Diffusers & Candles
</a>
                      </li>
                      <li>
                        <a href="/#">Lighting & Lamps
</a>
                      </li>
                      <li>
                        <a href="/#">Rugs & Doormats
</a>
                      </li>
                      <li>
                        <a href="/#">Stationery & Desk Accessories
</a>
                      </li>
                      <li>
                        <a href="/#">Window Treatments
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Holiday Decorations
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Art & Wall Decor
</a>
                      </li>
                      <li>
                        <a href="/#">Art by Color
</a>
                      </li>
                      <li>
                        <a href="/#">Art by Subject
</a>
                      </li>
                      <li>
                        <a href="/#">Art by Type
</a>
                      </li>
                      <li>
                        <a href="/#">Clocks
</a>
                      </li>
                      <li>
                        <a href="/#">Mirrors</a>
                      </li>
                      
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kitchen & Tabletop
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Bar Accessories
</a>
                      </li>
                      <li>
                        <a href="/#">Cookware & Bakeware
</a>
                      </li>
                      <li>
                        <a href="/#">Cutlery & Kitchen Knives
</a>
                      </li>
                      <li>
                        <a href="/#">Dinnerware & Flatware
</a>
                      </li>
                      <li>
                        <a href="/#">Drinkware & Glassware
</a>
                      </li>
                      <li>
                        <a href="/#">Serveware
</a>
                      </li>
                      <li>
                        <a href="/#">Small Appliances
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Outdoor Living
</a>
                      </li>
                      <li>
                        <a href="/#">Beach & Pool Accessories
</a>
                      </li>
                      <li>
                        <a href="/#">Outdoor Dining
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Electronic & Tech Accessories
</a>
                      </li><li>
                        <a href="/#">Headphones & Speakers
</a>
                      </li>
                      <li>
                        <a href="/#">Phone Cases
</a>
                      </li>
                      <li>
                        <a href="/#">Smart Home
</a>
                      </li>
                      <li>
                        <a href="/#">Smart Watches & Bands</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="row">
                    <header>Storage & Cleaning
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Bathroom Storage
</a>
                      </li>
                      <li>
                        <a href="/#">Bedroom & Closet Storage
</a>
                      </li>
                      <li>
                        <a href="/#">Kitchen Storage
</a>
                      </li>
                      <li>
                        <a href="/#">Laundry & Cleaning
</a>
                      </li>
                      <li>
                        <a href="/#">Storage Baskets & Bins
</a>
                      </li>
                      <li>
                        <a href="/#">Vacuum & Floor Care
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Pet Accessories
</a>
                      </li><li>
                        <a href="/#" id="bold">Games
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Luggage & Travel</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="/#" className="desktop-item">
                Beauty
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired
</header><hr/>
                    <ul className="mega-links">
                      <li>
                        <a href="/#" id="bold">Mother's Day Gifts
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">New Arrivals
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Best Sellers
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Prestige Beauty
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Natural Beauty
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Beauty Under $25
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Hair Care Under $25
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Skin Care Under $20
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Makeup Under $20
</a>
                      </li> <li>
                        <a href="/#" id="bold">Beauty Gifts & Sets
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Travel & Mini Sizes
</a>
                      </li>
                      <li>
                        <a href="/#" id="bold">Clearance</a>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand
</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/#">Charlotte Tilbury
</a>
                      </li>
                      <li>
                        <a href="/#">Clinique
</a>
                      </li>
                      <li>
                        <a href="/#">Drybar
</a>
                      </li>
                      <li>
                        <a href="/#">L'Occitane
</a>
                      </li>
                      <li>
                        <a href="/#">M.A.C. Cosmetics
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Mario Badescu
</a>
                      </li> 

                      <li>
                        <a href="/#">Nudestix
</a>
                      </li>
                       <li>
                        <a href="/#">Shiseido
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Too Faced
</a>
                      </li> <li>
                        <a href="/#">Urban Decay</a>
                      </li>
                      
                   
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Blush, Bronzer & Highlighter
</a>
                      </li> <li>
                        <a href="/#">Brushes & Tools
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Concealer & Foundation
</a>
                      </li> <li>
                        <a href="/#">Eye Makeup
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Eyebrows
</a>
                      </li> <li>
                        <a href="/#">Eyeshadow & Eyeliner
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Gifts & Sets
</a>
                      </li> <li>
                        <a href="/#">Lipstick, Lip Gloss & Liner
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Mascara & Lashes
</a>
                      </li>
                       <li>
                        <a href="/#">Nail Polish & Care
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Palettes
</a>
                      </li> <li>
                        <a href="/#">Powder & Setting Sprays
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Primer</a>
                      </li> 
                    </ul>
                  </div>

                  <div className="row">
                    <header>Skin Care
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Cleansers
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Exfoliators
</a>
                      </li> <li>
                        <a href="/#">Eye Creams & Treatments
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Face Mists & Toners
</a>
                      </li> <li>
                        <a href="/#">Face Moisturizers
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Facial Masks
</a>
                      </li> <li>
                        <a href="/#">Gifts & Sets
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Lip Balms & Treatments
</a>
                      </li> <li>
                        <a href="/#">Makeup Remover
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Serums
</a>
                      </li>
                      <li>
                        <a href="/#">Sunscreen
</a>
                      </li> <li>
                        <a href="/#">Tools & Devices
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Bath & Body</a>
                      </li> 
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Hair & Scalp Treatments
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Hair Dryers & Styling Tools
</a>
                      </li> <li>
                        <a href="/#">Hair Styling Products
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Shampoo & Conditioner
</a>
                      </li> <li>
                        <a href="/#" id="bold">Fragrance
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Candles & Diffusers
</a>
                      </li> <li>
                        <a href="/#">Designer Fragrance
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Gifts & Sets
</a>
                      </li> <li>
                        <a href="/#">Perfume
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Tools, Brushes & Makeup Bags
</a>
                      </li> <li>
                        <a href="/#">Bath & Body Tools
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Hair Styling Tools
</a>
                      </li> <li>
                        <a href="/#">Makeup Brushes, Tools, & Bags
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Skin Care Tools
</a>
                      </li> <li>
                        <a href="/#" id="bold">Men's Grooming & Cologne</a>
                      </li>
                      
                     
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="/#" className="desktop-item">
                Gifts
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Gifts: Get Inspired
</header><hr/>
                    <ul className="mega-links">
                    <li>
                        <a href="/#" id="bold">Gift Cards
</a>
                      </li> 
                      <li>
                        <a href="/#" id="bold">Wish List</a>
                      </li>
                      
                     
                    </ul>
                  </div>
                  <div className="row">
                    <header>Mother's Day Gifting
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Gifts for Mom Under $25
</a>
                      </li> <li>
                        <a href="/#">Gifts for Mom Under $50
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Unique Gifts for Mom
</a>
                      </li>
                      <li>
                        <a href="/#">Luxe & Designer for Mom
</a>
                      </li> <li>
                        <a href="/#">Jewelry & Watches for Mom
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Wellness Gifts for Mom
</a>
                      </li> <li>
                        <a href="/#">Home Gifts for Mom
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Dressed Up Styles for Mom
</a>
                      </li> <li>
                        <a href="/#" id="bold">Activities for Mom: At-Home Spa
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Activities for Mom: Cooking & Cocktails</a>
                      </li> 
                    </ul>
                  </div>
                  <div className="row">
                    <header>Everyday Gifting
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Gifts for Her
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Gifts for Him
</a>
                      </li> <li>
                        <a href="/#">Gifts for Kids
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Gifts for Home
</a>
                      </li> <li>
                        <a href="/#">Gifts Under $25
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Gifts Under $50
</a>
                      </li> <li>
                        <a href="/#">Gifts Under $100</a>
                      </li>
                      
                      
                    </ul>
                  </div>

                  <div className="row">
                    <header>Gifts by Occasion
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Baby Shower Gifts
</a>
                      </li> <li>
                        <a href="/#">Wedding Gifts</a>
                      </li>
                      
                     
                    </ul>
                  </div>
                
                </div>
              </div>
            </li>

            <li>
              <a href="/#" className="desktop-item" id="col">
                FlashEvents
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box" id="megas">
                <div className="content">
                <div className="row">
                    <header>Flash Events: Get Inspired
</header><hr/>
                    <ul className="mega-links">
                    <li>
                        <a href="/#" id="bold">Women's Flash Events
</a>
                      </li> <li>
                        <a href="/#" id="bold">Men's Flash Events
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Kids' Flash Events
</a>
                      </li> <li>
                        <a href="/#" id="bold">Home Flash Events
</a>
                      </li>
                      
                      <li>
                        <a href="/#" id="bold">Beauty Flash Events</a>
                      </li> 
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Must-Have Bright & Bold Sandals
</header>
                    <ul className="mega-links">
                    <li>
                        <a href="/#">Men's Must-Have Sandals Up to 60% Off
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Kids' Must-Have Sandals Up to 50% Off
</a>
                      </li>
                         <li>
                        <a href="/#">Free People Starting at $30
</a>
                      </li> <li>
                        <a href="/#">Alexia Admor Up to 65% Off Including Plus
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Beach Party: Women's Swimwear, Cover-Ups & More Up to 60% Off
</a>
                      </li> <li>
                        <a href="/#">Beach Party: Women's Summer & Resort Styles Up to 65% Off
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Beach Party: Men's Summer & Resort Styles Up to 65% Off
</a>
                      </li> <li>
                        <a href="/#">Beach Party: Kids' Swim & Summer Styles Up to 60% Off
</a>
                      </li>
                      
                      <li>
                        <a href="/#">Cozy Throws Feat. Barefoot Dreams</a>
                      </li> 
                    </ul>
                  </div>
                  
                  
                </div>
              </div>
            </li>

           
          </ul>
         
        </div>
      </nav>
    </>
  );
};

export default Megha;
