import React, { useState } from "react";
import "../style/Wishlist.css";

import head from '../assets/headphones1.jpg'
import blaz from '../assets/blazer.jpeg'
import watc from '../assets/watch.jpg'
import flas from '../assets/flask.jpg'
import summ from '../assets/summary.png'

function Wishlist() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: head,
      name: "Aura Studio Wireless Over-Ear",
      rating: "4.9",
      price: 289,
      oldPrice: 349,
      status: "In Stock",
      tag: "Sale"
    },
    {
      id: 2,
      image: blaz,
      name: "Pure Linen Relaxed Blazer",
      rating: "4.8",
      price: 175,
      status: "In Stock",
      tag: ""
    },
    {
      id: 3,
      image: watc,
      name: "Craft Chronograph Mini",
      rating: "4.9",
      price: 210,
      status: "Only 2 left",
      tag: "Scarcity"
    },
    {
      id: 4,
      image: flas,
      name: "Series-7 Matte Hydro Flask",
      rating: "4.9",
      price: 48,
      status: "In Stock",
      tag: ""
    }
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const moveToCart = (id) => {
    alert("Item moved to cart!");
    removeItem(id);
  };

  const moveAllToCart = () => {
    alert("All available items moved to cart!");
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="wishlist-page">

      <main className="wishlist-main">

        <div className="breadcrumb">
          Home <span>›</span> My Account <span>›</span> Wishlist
        </div>

        <div className="wishlist-header">

          <div>
            <h1>
              My Wishlist <span>({items.length} items)</span>
            </h1>

            <p>
              Save items you love and move them to cart anytime.
            </p>
          </div>

          <div className="header-buttons">
            <button>💜 PERSONAL VAULT</button>
            <button>◉ Preview Empty State</button>
          </div>

        </div>

        <div className="wishlist-grid">

          {items.map((item) => (

            <div className="wishlist-card" key={item.id}>

              <div className="product-image">

                {item.tag && (
                  <span className="product-tag">
                    {item.tag}
                  </span>
                )}

                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  🗑
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              <div className="product-content">

                <h2>{item.name}</h2>

                <div className="product-rating">
                  ⭐ {item.rating}
                  <span>•</span>
                  <span className="stock">
                    {item.status}
                  </span>
                </div>

                <div className="product-price">

                  <strong>
                    ${item.price.toFixed(2)}
                  </strong>

                  {item.oldPrice && (
                    <del>
                      ${item.oldPrice.toFixed(2)}
                    </del>
                  )}

                </div>

                <button
                  className="move-cart"
                  onClick={() => moveToCart(item.id)}
                >
                  🛒 Move to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

        {items.length > 0 && (

          <div className="wishlist-summary">

            <div className="summary-icon">
              <img src={summ} alt="img" />
            </div>

            <div className="summary-price">
              <span>Total Wishlist Value</span>

              <strong>
                ${total.toFixed(2)}
              </strong>
            </div>

            <div className="summary-message">
              <h3>Ready to make them yours?</h3>

              <p>
                Move all available items to your cart
                in one click.
              </p>
            </div>

            <button
              className="move-all"
              onClick={moveAllToCart}
            >
              🛒 Move All Available to Cart
            </button>

          </div>

        )}

      </main>

      <section className="benefit-section">

        <div className="benefit">
          <span>🚚</span>

          <div>
            <b>Free Express Shipping</b>
            <small>On orders over $120</small>
          </div>
        </div>

        <div className="benefit">
          <span>🛡</span>

          <div>
            <b>256-bit SSL</b>
            <small>Encrypted checkout</small>
          </div>
        </div>

        <div className="benefit">
          <span>📦</span>

          <div>
            <b>30-Day Returns</b>
            <small>Hassle-free returns</small>
          </div>
        </div>

        <div className="benefit">
          <span>🎧</span>

          <div>
            <b>24/7 Concierge Support</b>
            <small>Here to help you</small>
          </div>
        </div>

      </section>

    </div>
  );
}
export default Wishlist;





