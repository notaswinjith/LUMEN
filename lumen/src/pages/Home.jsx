import { Link } from "react-router-dom";
import '../style/Home.css'
import { useEffect, useState } from "react";

import banner1 from "../assets/banner1.png";
import men from "../assets/men.png";
import home from "../assets/home.png";
import decor1 from "../assets/decor1.png"
import women from"../assets/women.png"
import menshirt from"../assets/menshirt.png"
import Accesories from"../assets/Accesories.png"
import  bottle from"../assets/bottle.png"
import  life from"../assets/life.png"
import ceramic from "../assets/ceramic.png";
import shirt from "../assets/shirt.png";
import lamp from "../assets/lamp.png";
import bag from "../assets/bag.png";
import craft from'../assets/craft.png'
import shipping from "../assets/shipping.png"
import leaf from "../assets/leaf.png"
import phone from "../assets/phone.png"



function App() {
  const images = [banner1, men, home];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };
  const categories = [
    {
      name: "Home Decor",
      image: decor1
    },
    {
      name: "Women Fashion",
      image: women
    },
    {
      name: 'Men Fashion',
      image: menshirt
    },
    {
      name: 'Accesories',
      image: Accesories
    },
    {
      name: 'Fragrances',
      image: bottle
    },
    {
      name: 'LifeStyle',
      image: life
    },

  ]
  const products = [
    {
      id: 1,
      name: "Ceramic Vase Set",
      image: ceramic,
      badge: "Best Seller",
      rating: "4.8",
      reviews: "120",
      price: "₹ 2,999",
      oldPrice: "₹ 3,999"
    },

    {
      id: 2,
      name: "Linen Shirt",
      image: shirt,
      badge: "New",
      rating: "4.6",
      reviews: "85",
      price: "₹ 2,499",
      oldPrice: "₹ 3,499"
    },

    {
      id: 3,
      name: "Minimal Table Lamp",
      image: lamp,
      badge: "Trending",
      rating: "4.7",
      reviews: "98",
      price: "₹ 3,999",
      oldPrice: "₹ 5,499"
    },

    {
      id: 4,
      name: "Leather Sling Bag",
      image: bag,
      badge: "",
      rating: "4.5",
      reviews: "76",
      price: "₹ 4,499",
      oldPrice: "₹ 5,999"
    }
  ];

  {/*Home page*/}

  return (
    <>
      <section className="hero">

        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Banner"
          className="hero-image"
        />

        <div className="hero-content">
          <p>NEW SEASON</p>

          <h1>
            Summer Minimalist
            <br />
            Collection 2025
          </h1>

          <h3>
            Timeless pieces for a lighter, brighter you.
          </h3>

          <button>
            Shop Collection →
          </button>
        </div>

        <button
          className="arrow previous"
          onClick={previousImage}
        >
          ←
        </button>

        <button
          className="arrow next"
          onClick={nextImage}
        >
          →
        </button>

        <div className="dots">
          {images.map((image, index) => (
            <span
              key={index}
              className={currentIndex === index ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

      </section>


    {/*category section*/}

      <section className="category-section">
        <div className="category-header">
          <h2>Curated Categories</h2>

          <button className="view-all">
            View All →
          </button>
        </div>
        <div className="category-container">

          {categories.map((category, index) => (

            <div className="category-card" key={index}>

              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <button>
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Luminary section*/}

      <section className="main">
        <div className="menu">
          <div className="head">
            <h3>Luminary Circle</h3>
            <h2>Join the Luminary Circle</h2>
            <p>Get exclusive access to new collections,member-only offers and more.</p>
          </div>
          <div className="emails">
            <input type="email"
              placeholder="Enter your email address" />
          </div>
          <div className="btn">
            <button> Join Now →</button>
          </div>
        </div>
      </section>

      { /*features section*/}

      <section className="popular-section">
        <div className="popular-header">

          <h2>Featured Obejects</h2>

          <Link to="/product" className="view-all">
            View All →
          </Link>

        </div>
        <div className="popular-grid">

          {products.map((product) => (

            <div className="popular-card" key={product.id}>

              {/* Image */}
              <div className="popular-image-container">

                <img
                  src={product.image}
                  alt={product.name}
                  className="popular-image"
                />

                {product.badge && (
                  <span className="popular-badge">
                    {product.badge}
                  </span>
                )}

                <button className="heart-button">
                  ♡
                </button>

              </div>
              <div className="popular-details">

                <div className="rating">

                  <span className="star">
                    ★
                  </span>

                  <span>
                    {product.rating}
                  </span>

                  <span className="reviews">
                    ({product.reviews})
                  </span>

                </div>


                <h3>
                  {product.name}
                </h3>


                <div className="price">

                  <span className="current-price">
                    {product.price}
                  </span>

                  <span className="old-price">
                    {product.oldPrice}
                  </span>
                </div>
                <button className="cart-button">
                  <span>🛒</span>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/*craft section*/}

      <section className='fest'>
        <div className='fest-menu'>
          <div className='fest-main'>
            <div className='fest-head'>
              <p>CRAFT & ORIGIN</p>
              <h1>Thoughtfully Designed.</h1>
              <h1>Responsibly Made.</h1>
              <p>Our pieces are crafted by skilled artisans using sustainable materials, celebrating simplicity, quality and a more conscious way of living.</p>
            </div>
            <div className='btn2'>
              <button> Our Story →</button>
            </div>
          </div>
          <div className='image'>
            <img src={craft} alt="" />
          </div>
        </div>
      </section>

      {/*shipping section*/}

      <div className="footer-page">
        <section className="service-section">

          <div className="service-item">
            <div className="service-icon"><img className="ship-image" src={shipping} alt="" /></div>
            <div>
              <h3>Free Shipping</h3>
              <p>On orders above ₹1,999</p>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">⟳</div>
            <div>
              <h3>Easy Returns</h3>
              <p>7-day return policy</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">♢</div>

            <div>
              <h3>Secure Payments</h3>
              <p>100% secure checkout</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon"><img className="leaf-image" src={leaf} alt="" /></div>

            <div>
              <h3>Sustainable Choices</h3>
              <p>Eco-friendly products</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon"><img className="phone-image" src={phone} alt="" /></div>

            <div>
              <h3>Dedicated Support</h3>
              <p>Here to help you</p>
            </div>
          </div>
        </section>

        {/*subcribe section*/}

        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Be the first to know about new arrivals,
              special offers and lifestyle stories.
            </p>
          </div>
          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />
            <button>
              Subscribe
              <span>→</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

