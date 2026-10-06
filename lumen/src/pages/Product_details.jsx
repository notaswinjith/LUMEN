import React, { useState } from "react";
import "../style/Product_details.css";
import head from '../assets/headphones1.jpg'
import cab from '../assets/cable.jpg'
import cas from '../assets/case.jpg'
import cus from '../assets/cushion.jpg'
import kit from '../assets/cleaning.jpg'
import stn from '../assets/stand.jpg'
import trav from '../assets/travel.jpg'
import h3 from '../assets/headphones3.png'
import h4 from '../assets/headphones4.png'
import h5 from '../assets/headphones5.png'

function Product_details() {

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [color, setColor] = useState("Space Black");

  return (
    <div className="product-page">

      <div className="breadcrumb">
        Home &nbsp;›&nbsp; Products &nbsp;›&nbsp; Audio &nbsp;›&nbsp;
        Aura Studio Wireless Over-Ear Headphones
      </div>

      <div className="product-container">

        <div className="product-images">

          <div className="main-image">

            <span className="studio">🎧 Studio View</span>

            <button
              className="image-heart"
              onClick={() => setWishlist(!wishlist)}
            >
              {wishlist ? "♥" : "♡"}
            </button>

            <img
              src={head}
              alt="Headphones"
            />

            <button className="left-arrow">‹</button>
            <button className="right-arrow">›</button>

            <span className="image-count">1 / 4</span>

          </div>

          <div className="thumbnails">

            <img src= {head} alt="" />
            <img src={h3}  alt="" />
            <img src={h4}  alt="" />
            <img src={h5}  alt="" />

          </div>

        </div>

       
        <div className="product-info">

          <div className="tags">
            <span>● Best Seller</span>
            <span>🚚 Free Express Delivery</span>
          </div>

          <p className="demand">● IN HIGH DEMAND</p>

          <h1>
            Aura Studio Wireless Over-Ear Headphones
          </h1>

          <div className="rating">
            ⭐ <b>4.9</b> ·
            <span>128 reviews</span> ·
            👍 98% recommended
          </div>

       
          <div className="price-box">

            <div>
              <strong>$289.00</strong>
              <del>$349.00</del>

              <p>Save $60.00 (17% off retail)</p>
            </div>

            <div className="shipping">
              🟢 <b>Ready to Ship</b>
              <small>Ships in 24h</small>
            </div>

          </div>

         
          <div className="color-section">

            <div className="color-title">
              Finish: <b>{color}</b>
              <span>Limited Edition</span>
            </div>

            <div className="colors">

              <button
                className={color === "Space Black" ? "selected" : ""}
                onClick={() => setColor("Space Black")}
              >
                ⚫ Space Black
              </button>

              <button
                className={color === "Silver" ? "selected" : ""}
                onClick={() => setColor("Silver")}
              >
                ⚪ Silver
              </button>

              <button
                className={color === "Indigo" ? "selected" : ""}
                onClick={() => setColor("Indigo")}
              >
                🔵 Indigo
              </button>

            </div>

          </div>

          
          <div className="quantity">

            <div>
              <b>Quantity</b>
              <p>Free signature edition packaging</p>
            </div>

            <div className="quantity-buttons">

              <button
                onClick={() =>
                  quantity > 1 && setQuantity(quantity - 1)
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>

            </div>

          </div>

          <button className="cart">
            🛍 Add to Cart · ${(289 * quantity).toFixed(2)}
          </button>

          <button
            className="wishlist"
            onClick={() => setWishlist(!wishlist)}
          >
            {wishlist ? "♥ Added to Wishlist" : "♡ Add to Wishlist"}
          </button>

       
          <div className="benefits">

            <div>
              🛡️
              <b>2 – Yr Warranty</b>
              <small>Full hardware</small>
            </div>

            <div>
              🔄
              <b>30 – Day Trial</b>
              <small>Free returns</small>
            </div>

            <div>
              🎧
              <b>Lossless Audio</b>
              <small>Spatial 3D</small>
            </div>

          </div>

        </div>

      
        <div className="details">

          <h2>Product Details</h2>

          <div className="detail-box">

            <h3>
              🎵 Description & Audio Architecture
            </h3>

            <p>
              Engineered for acoustic precision, the Aura
              Studio combines dual proprietary 40mm
              electro-dynamic titanium drivers with an
              ultra-responsive acoustic chamber.
            </p>

            <p>
              Experience pure high-fidelity sound reproduction
              with deep bass and crystal clear treble.
            </p>

            <div className="feature">
              <b>⚙️ Hybrid Adaptive ANC:</b>
              <p>
                Real-time calibration analyzes ambient sound
                to reduce unwanted noise.
              </p>

              <b>👤 Immersive Spatial Sphere:</b>
              <p>
                Dynamic head-tracking creates an immersive
                listening experience.
              </p>
            </div>

          </div>

          <div className="detail-row">
            ⚙️ Technical Specifications
            <span>⌄</span>
          </div>

          <div className="detail-row">
            🚚 Delivery & Easy Returns
            <span>⌄</span>
          </div>

          <div className="experience">

            <img
              src={head}
              alt="Headphones"
            />

            <div>
              <h3>Experience Sound<br />Beyond Ordinary</h3>
              <p>
                Premium design. Exceptional clarity.
              </p>
            </div>

          </div>

        </div>

      </div>

      <div className="accessories">

        <div className="accessories-title">

          <h2>
            Pairs Well With
            <span> Recommended curated accessories</span>
          </h2>

          <a href="/">Bundle & Save 10% →</a>

        </div>

        <div className="accessory-list">

          <div className="accessory">
            <img src={cas} alt="" />
            <small>Protection</small>
            <p>Protective Hard Shell Case</p>
            <b>$35.00</b>
          </div>

          <div className="accessory">
            <img src={stn}alt="" />
            <small>Charging</small>
            <p>Wireless Magnetic Stand</p>
            <b>$65.00</b>
          </div>

          <div className="accessory">
            <img src={cus} alt="" />
            <small>Accessories</small>
            <p>Replacement Ear Cushions</p>
            <b>$29.00</b>
          </div>

          <div className="accessory">
            <img src={cab} alt="" />
            <small>Cables</small>
            <p>Audio Cable (3.5mm)</p>
            <b>$19.00</b>
          </div>

          <div className="accessory">
            <img src={trav} alt="" />
            <small>Accessories</small>
            <p>Travel Pouch</p>
            <b>$25.00</b>
          </div>

          <div className="accessory">
            <img src={kit} alt="" />
            <small>Care</small>
            <p>Cleaning Kit</p>
            <b>$15.00</b>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Product_details;