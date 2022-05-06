import React from "react";
import "./megamenu.css";
import { Link } from "react-router-dom";

const Megha = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <div className="logo">
            <input type="radio" name="slide" id="menu-btn" />
            <input type="radio" name="slide" id="cancel-btn" />
          </div>
          <ul className="nav-links" id={hover ? "navs__links" : ""}>
            <label className="btn cancel-btn" htmlFor="cancel-btn">
              <i className="fa fa-times"></i>
            </label>
            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
                id="clear"
              >
                Clearance
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Clearance: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/#" id="bold">
                          Women
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/#">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Handbags</Link>
                      </li>
                      <li>
                        <Link to="/#">Sunglasses & Eyewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Watches</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Men</header>
                    <ul className="mega-links" id="line-height-men">
                      <li>
                        <Link to="/#">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/#">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Watches</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Designer
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kids</header>
                    <ul className="mega-links" id="line-height-new__2">
                      <li>
                        <Link to="/#">Girls'Clothing</Link>
                      </li>
                      <li>
                        <Link to="/#">Girls'Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Boys' Clothing</Link>
                      </li>
                      <li>
                        <Link to="/#">Boys' Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Kids' Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Baby Clothing & Shoes</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Activewear
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Home</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Art & Wall Decor</Link>
                      </li>
                      <li>
                        <Link to="/#">Bath</Link>
                      </li>
                      <li>
                        <Link to="/#">Bedding</Link>
                      </li>
                      <li>
                        <Link to="/#">Decor</Link>
                      </li>
                      <li>
                        <Link to="/#">Electronic & Tech Acessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Kitchen & Tabletop</Link>
                      </li>
                      <li>
                        <Link to="/#">Storage & Cleaning</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#" id="bold">
                          Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Makeup</Link>
                      </li>
                      <li>
                        <Link to="/#">Skin Care</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Women
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Women: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Trend Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Dresses Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Denim Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Swim & Sun Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sandals Under $50p
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Wedding Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Trend
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Blazers</Link>
                      </li>
                      <li>
                        <Link to="/#">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Dresses</Link>
                      </li>
                      <li>
                        <Link to="/#">Jeans & Denim</Link>
                      </li>
                      <li>
                        <Link to="/#">Jumpsuits & Rompers</Link>
                      </li>
                      <li>
                        <Link to="/#">Lingerie, Hosiery & Shapewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Loungewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Jeans & Denim</Link>
                      </li>
                      <li>
                        <Link to="/#">Pants & Leggings</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Sleepwear & Robes</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/#">Swimsuits & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/#">Tops</Link>
                      </li>
                      <br />

                      <li>
                        <Link to="/#">Plus-Size</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Boots & Booties</Link>
                      </li>
                      <li>
                        <Link to="/#">Clogs</Link>
                      </li>
                      <li>
                        <Link to="/#">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/#">Espadrilles</Link>
                      </li>
                      <li>
                        <Link to="/#">Flats</Link>
                      </li>
                      <li>
                        <Link to="/#">Flip-Flops & Slides</Link>
                      </li>
                      <li>
                        <Link to="/#">Heels</Link>
                      </li>
                      <li>
                        <Link to="/#">Loafers & Oxfords</Link>
                      </li>
                      <li>
                        <Link to="/#">Mules</Link>
                      </li>
                      <li>
                        <Link to="/#">Rain Boots</Link>
                      </li>
                      <li>
                        <Link to="/#">Sandals</Link>
                      </li>
                      <li>
                        <Link to="/#">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/#">Wedges</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/#">Extended Shoe Sizes & Widths</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Young Adult</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/#">Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Handbags
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Designer Bags</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sunglasses & Eyewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Watches
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Beauty
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Crops & Capris</Link>
                      </li>
                      <li>
                        <Link to="/#">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Leggings</Link>
                      </li>
                      <li>
                        <Link to="/#">Shirts&Tees</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts&Skirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Sports Bras</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatshirts&Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/#">Tanks</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/#">Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Training</Link>
                      </li>
                      <li>
                        <Link to="/#">Walking</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Men
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Men: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Graphic Tees Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Denim Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Swim & Sun Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sneakers Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Wedding Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Blazers&Sports Coats</Link>
                      </li>
                      <li>
                        <Link to="/#">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Dress Shirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/#">Joggers & Sweatpants</Link>
                      </li>
                      <li>
                        <Link to="/#">Lounge, Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/#">Pants</Link>
                      </li>
                      <li>
                        <Link to="/#">Polo Shirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">Socks</Link>
                      </li>
                      <li>
                        <Link to="/#">Suits & Separates</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/#">Swimwear&Board Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">T-Shirts</Link>
                      </li>

                      <li>
                        <Link to="/#">Underwear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Boot Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Boots</Link>
                      </li>
                      <li>
                        <Link to="/#">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/#">Dress Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Loafers & Slip-Ons</Link>
                      </li>
                      <li>
                        <Link to="/#">Oxfords & Derbys</Link>
                      </li>
                      <li>
                        <Link to="/#">Sandals & Flip-Flops</Link>
                      </li>
                      <li>
                        <Link to="/#">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sneakers</Link>
                      </li>

                      <br />
                      <li>
                        <Link to="/#">Extended Shoe Sizes & Widths</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Young Adult</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Clothing</Link>
                      </li>
                      <li>
                        <Link to="/#">Shoes</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Accessorise
                        </Link>
                      </li>
                      <li>
                        <Link to="/#"> Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/#">Sunglasses & Eyewear</Link>
                      </li>
                      <li>
                        <Link to="/#">belt & Suspenders</Link>
                      </li>
                      <li>
                        <Link to="/#">Hats</Link>
                      </li>
                      <li>
                        <Link to="/#">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Ties & Pocket Squares</Link>
                      </li>
                      <li>
                        <Link to="/#">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sunglasses & Eyewear
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Watches
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatpants&Joggers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatshirts&Hoodies</Link>
                      </li>

                      <li>
                        <Link to="/#">Tanks</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/#">Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Training</Link>
                      </li>
                      <li>
                        <Link to="/#">Walking</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Kids
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Kids: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sandals Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sneakers Under $30
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Swim Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Disney Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Z by Zella for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Baby Shower Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Girls' Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby Girl (Sizes 0-24M)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler Girls (Sizes 2T-4T)</Link>
                      </li>
                      <li>
                        <Link to="/#">Girls (Sizes 4-6x)</Link>
                      </li>
                      <li>
                        <Link to="/#">Girls (Sizes 7-16)</Link>
                      </li>
                      <li>
                        <Link to="/#">Tween Girls</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Activewear s</Link>
                      </li>
                      <li>
                        <Link to="/#">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Dresses & Rompers</Link>
                      </li>
                      <li>
                        <Link to="/#">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/#">Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/#">Pants & Leggings</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Swimsuits & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/#">Tops</Link>
                      </li>
                      <li>
                        <Link to="/#">Underwear, Socks & Bra</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Boys' Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby Boy (Sizes 0-24M)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler Boys (Sizes 2T-4T)</Link>
                      </li>
                      <li>
                        <Link to="/#">Boys (Sizes 4-7)</Link>
                      </li>
                      <li>
                        <Link to="/#">Boys (Sizes 8-20)</Link>
                      </li>
                      <li>
                        <Link to="/#">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Activewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/#">Pajamas & Robes</Link>
                      </li>
                      <li>
                        <Link to="/#">Pants</Link>
                      </li>
                      <li>
                        <Link to="/#">Sets</Link>
                      </li>
                      <li>
                        <Link to="/#">Shirts & Tops</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">Suits & Separates</Link>
                      </li>
                      <li>
                        <Link to="/#">Swim Trunks & Rashguards</Link>
                      </li>
                      <li>
                        <Link to="/#">T-Shirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Underwear & Socks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security Services</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby Clothing & Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Baby Girl</Link>
                      </li>
                      <li>
                        <Link to="/#">Baby Boy</Link>
                      </li>
                      <li>
                        <Link to="/#">Baby Shoes</Link>
                      </li>

                      <li>
                        <Link to="/#">Baby Gear & Essentials</Link>
                      </li>
                      <li>
                        <Link to="/#">Baby Shower Gifts</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Toys
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Shoes
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Shoes: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Designer Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Contemporary Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Young Adult Brands
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sandals Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sneakers Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Flip-Flops & Slides for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nike for the Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Special Occasion
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Trend
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Women's Shoes Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Men's Shoes Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Kids' Shoes Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Shoes</header>
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/#">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Boots & Booties</Link>
                      </li>
                      <li>
                        <Link to="/#">Clogs</Link>
                      </li>
                      <li>
                        <Link to="/#">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/#">Espadrilles</Link>
                      </li>
                      <li>
                        <Link to="/#">Flats</Link>
                      </li>
                      <li>
                        <Link to="/#">Flip-Flops & Slides</Link>
                      </li>
                      <li>
                        <Link to="/#">Heels</Link>
                      </li>
                      <li>
                        <Link to="/#">Loafers & Oxfords</Link>
                      </li>
                      <li>
                        <Link to="/#">Mules</Link>
                      </li>
                      <li>
                        <Link to="/#">Rain Boots</Link>
                      </li>
                      <li>
                        <Link to="/#">Sandals</Link>
                      </li>
                      <li>
                        <Link to="/#">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/#">Wedges</Link>
                      </li>
                      <li>
                        <Link to="/#">Extended Sizes & Widths</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Athletic & Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Boots</Link>
                      </li>
                      <li>
                        <Link to="/#">Comfort</Link>
                      </li>
                      <li>
                        <Link to="/#">Dress Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Loafers & Slip-Ons</Link>
                      </li>
                      <li>
                        <Link to="/#">Oxfords & Derbys</Link>
                      </li>
                      <li>
                        <Link to="/#">Sandals & Flip-Flops</Link>
                      </li>
                      <li>
                        <Link to="/#">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/#">Extended Sizes & Widths</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Girls' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>
                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Boys' Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Baby (Sizes 0-4)</Link>
                      </li>
                      <li>
                        <Link to="/#">Toddler (Sizes 4.5-12)</Link>
                      </li>

                      <li>
                        <Link to="/#">Little Kid (Sizes 12.5-3)</Link>
                      </li>
                      <li>
                        <Link to="/#">Big Kid (Sizes 3.5-7)</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">adidas</Link>
                      </li>
                      <li>
                        <Link to="/#">adidas</Link>
                      </li>
                      <li>
                        <Link to="/#">ASICS</Link>
                      </li>
                      <li>
                        <Link to="/#">Brooks</Link>
                      </li>
                      <li>
                        <Link to="/#">Cole Haan</Link>
                      </li>
                      <li>
                        <Link to="/#">Converse</Link>
                      </li>
                      <li>
                        <Link to="/#">New Balance</Link>
                      </li>
                      <li>
                        <Link to="/#">Nike</Link>
                      </li>
                      <li>
                        <Link to="/#">Sam Edelman</Link>
                      </li>
                      <li>
                        <Link to="/#">Steve Madden</Link>
                      </li>
                      <li>
                        <Link to="/#">UGG</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Activewear
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Activewear: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Adidas
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nike
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Z by Zella
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop by Activity
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Athleisure</Link>
                      </li>
                      <li>
                        <Link to="/#">Commuter e</Link>
                      </li>
                      <li>
                        <Link to="/#">Golf</Link>
                      </li>
                      <li>
                        <Link to="/#">Hiking</Link>
                      </li>
                      <li>
                        <Link to="/#">Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Swim & Surf</Link>
                      </li>
                      <li>
                        <Link to="/#">Training</Link>
                      </li>
                      <li>
                        <Link to="/#">Yoga & Barr</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Crops & Capris</Link>
                      </li>
                      <li>
                        <Link to="/#">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Leggings</Link>
                      </li>
                      <li>
                        <Link to="/#">Shirts & Tees</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts & Skirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Socks</Link>
                      </li>
                      <li>
                        <Link to="/#">Sports Bras</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/#">Swim</Link>
                      </li>
                      <li>
                        <Link to="/#">Tanks</Link>
                      </li>
                      <li>
                        <Link to="/#">Plus Activewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men's Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Jackets</Link>
                      </li>
                      <li>
                        <Link to="/#">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/#">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/#">Socks</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatpants & Joggers</Link>
                      </li>
                      <li>
                        <Link to="/#">Sweatshirts & Hoodies</Link>
                      </li>
                      <li>
                        <Link to="/#">Swim</Link>
                      </li>
                      <li>
                        <Link to="/#">Tanks</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women's Active Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/#">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/#">Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/#">Training</Link>
                      </li>
                      <li>
                        <Link to="/#">Walking</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Men's Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Hiking & Trail</Link>
                      </li>
                      <li>
                        <Link to="/#">Lifestyle</Link>
                      </li>
                      <li>
                        <Link to="/#">Running</Link>
                      </li>
                      <li>
                        <Link to="/#">Sport Sandals</Link>
                      </li>
                      <li>
                        <Link to="/#">Training</Link>
                      </li>
                      <li>
                        <Link to="/#">Walking</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Kids' Activewear</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Girls' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/#">Boys' Activewear</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Kids' Active Shoes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Girls' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#">Boys' Active Shoes</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Athletic Gear & Equipment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Bags&Accessories
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Bags & Accessories: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Handbags Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Designer Sunglasses Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Women's Accessories Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Men's Accessories Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Bony Levy</Link>
                      </li>
                      <li>
                        <Link to="/#">Gucci Sunglasses</Link>
                      </li>
                      <li>
                        <Link to="/#">Kate Spade New York</Link>
                      </li>
                      <li>
                        <Link to="/#">Marc Jacobs</Link>
                      </li>
                      <li>
                        <Link to="/#">Ray-Ban</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Designer
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Designer Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Designer Handbags</Link>
                      </li>
                      <li>
                        <Link to="/#">Designer Sunglasses & Eyewear</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Handbags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/#">Beach & Straw Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Bucket Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Clutches & Pouches</Link>
                      </li>
                      <li>
                        <Link to="/#">Crossbody Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Designer Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Fanny Packs & Belt Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Mini Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Satchels</Link>
                      </li>
                      <li>
                        <Link to="/#">Shoulder Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Totes</Link>
                      </li>
                      <li>
                        <Link to="/#">Wallets r</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Sunglasses & Eyewea
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Jewelry</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/#">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/#">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/#">Rings</Link>
                      </li>
                      <li>
                        <Link to="/#">14K Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Diamond Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Rose Gold Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#">Sterling Silver Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Fine Jewelry
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Bracelets</Link>
                      </li>
                      <li>
                        <Link to="/#">Earrings</Link>
                      </li>
                      <li>
                        <Link to="/#">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="/#">Rings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Accessories</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Belts</Link>
                      </li>
                      <li>
                        <Link to="/#">Hair Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Hats</Link>
                      </li>
                      <li>
                        <Link to="/#">Ponchos, Kimonos & Capes</Link>
                      </li>
                      <li>
                        <Link to="/#">Sarongs, Caftans & Cover-Ups</Link>
                      </li>
                      <li>
                        <Link to="/#">Scarves</Link>
                      </li>
                      <li>
                        <Link to="/#">Winter Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Men's Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Bags & Backpacks</Link>
                      </li>
                      <li>
                        <Link to="/#">Belts & Suspenders</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Hats</Link>
                      </li>
                      <li>
                        <Link to="/#">Wallets & Card Cases</Link>
                      </li>
                      <li>
                        <Link to="/#">Winter Accessories</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Home
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Home: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Bedding Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Home Decor Under $50
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Kitchen Appliances Under $100
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Rack Essentials
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Nordstrom Made
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Clearance
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop By Brand
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Bath</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Bath Rugs & Mats</Link>
                      </li>
                      <li>
                        <Link to="/#">Bath Towels</Link>
                      </li>
                      <li>
                        <Link to="/#">Bathroom Decor</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Bedding
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Comforters & Duvet Inserts</Link>
                      </li>
                      <li>
                        <Link to="/#">Duvet Covers</Link>
                      </li>
                      <li>
                        <Link to="/#">Mattress Pads & Toppers</Link>
                      </li>
                      <li>
                        <Link to="/#">Pillow Cases</Link>
                      </li>
                      <li>
                        <Link to="/#">Pillows</Link>
                      </li>
                      <li>
                        <Link to="/#">Quilts & Blankets</Link>
                      </li>
                      <li>
                        <Link to="/#">Sheet Sets</Link>
                      </li>
                      <li>
                        <Link to="/#">Throws</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Decor</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Decorative Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Decorative Pillows</Link>
                      </li>
                      <li>
                        <Link to="/#">Faux Plants & Stands</Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Home Fragrances, Diffusers & Candles
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Lighting & Lamps</Link>
                      </li>
                      <li>
                        <Link to="/#">Rugs & Doormats</Link>
                      </li>
                      <li>
                        <Link to="/#">Stationery & Desk Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Window Treatments</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Holiday Decorations
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Art & Wall Decor
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Art by Color</Link>
                      </li>
                      <li>
                        <Link to="/#">Art by Subject</Link>
                      </li>
                      <li>
                        <Link to="/#">Art by Type</Link>
                      </li>
                      <li>
                        <Link to="/#">Clocks</Link>
                      </li>
                      <li>
                        <Link to="/#">Mirrors</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Kitchen & Tabletop</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Bar Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Cookware & Bakeware</Link>
                      </li>
                      <li>
                        <Link to="/#">Cutlery & Kitchen Knives</Link>
                      </li>
                      <li>
                        <Link to="/#">Dinnerware & Flatware</Link>
                      </li>
                      <li>
                        <Link to="/#">Drinkware & Glassware</Link>
                      </li>
                      <li>
                        <Link to="/#">Serveware</Link>
                      </li>
                      <li>
                        <Link to="/#">Small Appliances</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Outdoor Living
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Beach & Pool Accessories</Link>
                      </li>
                      <li>
                        <Link to="/#">Outdoor Dining</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Electronic & Tech Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Headphones & Speakers</Link>
                      </li>
                      <li>
                        <Link to="/#">Phone Cases</Link>
                      </li>
                      <li>
                        <Link to="/#">Smart Home</Link>
                      </li>
                      <li>
                        <Link to="/#">Smart Watches & Bands</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Storage & Cleaning</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Bathroom Storage</Link>
                      </li>
                      <li>
                        <Link to="/#">Bedroom & Closet Storage</Link>
                      </li>
                      <li>
                        <Link to="/#">Kitchen Storage</Link>
                      </li>
                      <li>
                        <Link to="/#">Laundry & Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/#">Storage Baskets & Bins</Link>
                      </li>
                      <li>
                        <Link to="/#">Vacuum & Floor Care</Link>
                      </li>

                      <li>
                        <Link to="/#" id="bold">
                          Pet Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Games
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Luggage & Travel
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Beauty
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Beauty: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/#" id="bold">
                          Mother's Day Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Prestige Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Natural Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Beauty Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Hair Care Under $25
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Skin Care Under $20
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Makeup Under $20
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/#" id="bold">
                          Beauty Gifts & Sets
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Travel & Mini Sizes
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Clearance
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shop By Brand</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Charlotte Tilbury</Link>
                      </li>
                      <li>
                        <Link to="/#">Clinique</Link>
                      </li>
                      <li>
                        <Link to="/#">Drybar</Link>
                      </li>
                      <li>
                        <Link to="/#">L'Occitane</Link>
                      </li>
                      <li>
                        <Link to="/#">M.A.C. Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="/#">Mario Badescu</Link>
                      </li>
                      <li>
                        <Link to="/#">Nudestix</Link>
                      </li>
                      <li>
                        <Link to="/#">Shiseido</Link>
                      </li>
                      <li>
                        <Link to="/#">Too Faced</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Urban Decay</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Makeup</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Blush, Bronzer & Highlighter</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Brushes & Tools</Link>
                      </li>
                      <li>
                        <Link to="/#">Concealer & Foundation</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Eye Makeup</Link>
                      </li>
                      <li>
                        <Link to="/#">Eyebrows</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Eyeshadow & Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="/#">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Lipstick, Lip Gloss & Liner</Link>
                      </li>
                      <li>
                        <Link to="/#">Mascara & Lashes</Link>
                      </li>
                      <li>
                        <Link to="/#">Nail Polish & Care</Link>
                      </li>
                      <li>
                        <Link to="/#">Palettes</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Powder & Setting Sprays</Link>
                      </li>
                      <li>
                        <Link to="/#">Primer</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Skin Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Cleansers</Link>
                      </li>
                      <li>
                        <Link to="/#">Exfoliators</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Eye Creams & Treatments</Link>
                      </li>
                      <li>
                        <Link to="/#">Face Mists & Toners</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Face Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="/#">Facial Masks</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Gifts & Sets</Link>
                      </li>
                      <li>
                        <Link to="/#">Lip Balms & Treatments</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Makeup Remover</Link>
                      </li>
                      <li>
                        <Link to="/#">Serums</Link>
                      </li>
                      <li>
                        <Link to="/#">Sunscreen</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Tools & Devices</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Bath & Body
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Hair Care</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">Hair & Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/#">Hair Dryers & Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Hair Styling Products</Link>
                      </li>
                      <li>
                        <Link to="/#">Shampoo & Conditioner</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#" id="bold">
                          Fragrance
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Candles & Diffusers</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Designer Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/#">Gifts & Sets</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Perfume</Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Tools, Brushes & Makeup Bags
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Bath & Body Tools</Link>
                      </li>
                      <li>
                        <Link to="/#">Hair Styling Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">Makeup Brushes, Tools, & Bags</Link>
                      </li>
                      <li>
                        <Link to="/#">Skin Care Tools</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#" id="bold">
                          Men's Grooming & Cologne
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Gifts
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Gifts: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Gift Cards
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Wish List
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Mother's Day Gifting</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Gifts for Mom Under $25</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts for Mom Under $50</Link>
                      </li>
                      <li>
                        <Link to="/gift">Unique Gifts for Mom</Link>
                      </li>
                      <li>
                        <Link to="/gift">Luxe & Designer for Mom</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Jewelry & Watches for Mom</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wellness Gifts for Mom</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Home Gifts for Mom</Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Dressed Up Styles for Mom
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift" id="bold">
                          Activities for Mom: At-Home Spa
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Activities for Mom: Cooking & Cocktails
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Everyday Gifting</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Gifts for Her</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gifts for Him</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts for Kids</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gifts for Home</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts Under $25</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gifts Under $50</Link>
                      </li>{" "}
                      <li>
                        <Link to="/gift">Gifts Under $100</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Gifts by Occasion</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Baby Shower Gifts</Link>
                      </li>
                      <li>
                        <Link to="/gift">Wedding Gifts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="#"
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
                id="col"
              >
                FlashEvents
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>

              <div className="mega-box" id="megas">
                <div className="content">
                  <div className="row">
                    <header>Flash Events: Get Inspired</header>
                    <hr id="horizontal-line" />
                    <ul className="mega-links">
                      <li>
                        <Link to="/flash/women" id="bold">
                          Women's Flash Events
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/flash/mens" id="bold">
                          Men's Flash Events
                        </Link>
                      </li>
                      <li>
                        <Link to="/flash/kids" id="bold">
                          Kids' Flash Events
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/flash/home" id="bold">
                          Home Flash Events
                        </Link>
                      </li>
                      <li>
                        <Link to="/flash/beauty" id="bold">
                          Beauty Flash Events
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Women's Must-Have Bright & Bold Sandals</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/#">
                          Men's Must-Have Sandals Up to 60% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Kids' Must-Have Sandals Up to 50% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Free People Starting at $30</Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Alexia Admor Up to 65% Off Including Plus
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Beach Party: Women's Swimwear, Cover-Ups & More Up to
                          60% Off
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Beach Party: Women's Summer & Resort Styles Up to 65%
                          Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Beach Party: Men's Summer & Resort Styles Up to 65%
                          Off
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/#">
                          Beach Party: Kids' Swim & Summer Styles Up to 60% Off
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Cozy Throws Feat. Barefoot Dreams</Link>
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
