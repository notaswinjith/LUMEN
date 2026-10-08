import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/product.css"
import head from "../assets/head.png"
import main from "../assets/main.png"
import bottle1 from "../assets/bottle1.png"
import shoe from "../assets/shoe.png"
import electronic from "../assets/electronic.png"
import beauty from "../assets/beauty.png"

const products = [
  {
    id: 1,
    name: "Aura Studio Wireless Over-Ear",
    category: "Electronics",
    price: 289,
    oldPrice: 349,
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    image: head,

  },
  {
    id: 2,
    name: "Pure Linen Relaxed Blazer",
    category: "Fashion",
    price: 175,
    rating: 4.8,
    reviews: 85,
    badge: "New",
    image: main,
  },
  {
    id: 3,
    name: "Series-7 Matte Hydro Flask 750ml",
    category: "Accessories",
    price: 48,
    rating: 4.9,
    reviews: 210,
    image: bottle1,
  },
  {
    id: 4,
    name: "Vapour Running Cloud Sneakers",
    category: "Shoes",
    price: 160,
    oldPrice: 195,
    rating: 4.7,
    reviews: 142,
    image: shoe,
  },
  {
    id: 5,
    name: "Cast Concrete Wireless Charging",
    category: "Electronics",
    price: 65,
    rating: 4.6,
    reviews: 59,
    badge: "Staff Pick",
    image: electronic,
  },
  {
    id: 6,
    name: "Botanical Hydrating Facial Oil 50ml",
    category: "Beauty",
    price: 54,
    rating: 4.9,
    reviews: 312,
    image: beauty,
  },
];

function Product() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("Popularity");

  const filteredProducts = products
    .filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "All" || product.category === category;

      const ratingMatch = product.rating >= rating;

      const priceMatch = product.price <= maxPrice;

      return (
        searchMatch &&
        categoryMatch &&
        ratingMatch &&
        priceMatch
      );
    })
    .sort((a, b) => {
      if (sort === "Price Low") {
        return a.price - b.price;
      }

      if (sort === "Price High") {
        return b.price - a.price;
      }

      if (sort === "Rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  const clearFilters = () => {
    setCategory("All");
    setRating(0);
    setMaxPrice(500);
    setSearch("");
  };

  return (
    <div className="product-page">

      <main className="container">
        <div className="breadcrumb">
          Home <span>›</span> All Products
        </div>

        <div className="heading">

          <div>
            <h1>
              All Products{" "}
              <span>(48)</span>
            </h1>

            <p>
              Curated essentials crafted with
              architectural precision and premium
              materials.
            </p>
          </div>

          <div className="curated">
            ● Curated Live
          </div>

        </div>

        <div className="content">

          <aside className="sidebar">

            <div className="filter-heading">

              <strong>
                ☷ Filters
              </strong>

              <span className="filter-number">
                2
              </span>

              <button
                onClick={clearFilters}
              >
                Clear all
              </button>

            </div>
            <div className="filter-section">

              <h4>Categories</h4>

              <label>
                <input
                  type="checkbox"
                  checked={category === "Electronics"}
                  onChange={() =>
                    setCategory(
                      category === "Electronics"
                        ? "All"
                        : "Electronics"
                    )
                  }
                />

                Electronics

                <span>12</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={category === "Fashion"}
                  onChange={() =>
                    setCategory(
                      category === "Fashion"
                        ? "All"
                        : "Fashion"
                    )
                  }
                />

                Fashion

                <span>12</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={category === "Accessories"}
                  onChange={() =>
                    setCategory(
                      category === "Accessories"
                        ? "All"
                        : "Accessories"
                    )
                  }
                />

                Accessories

                <span>8</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={category === "Home"}
                  onChange={() =>
                    setCategory(
                      category === "Home"
                        ? "All"
                        : "Home"
                    )
                  }
                />

                Home

                <span>10</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={category === "Beauty"}
                  onChange={() =>
                    setCategory(
                      category === "Beauty"
                        ? "All"
                        : "Beauty"
                    )
                  }
                />

                Beauty

                <span>6</span>
              </label>

            </div>

            <div className="filter-section">

              <h4>Rating</h4>

              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 4}
                  onChange={() =>
                    setRating(4)
                  }
                />
                4.0+
              </label>

              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 4.5}
                  onChange={() =>
                    setRating(4.5)
                  }
                />
                4.5+
              </label>

              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={rating === 4.8}
                  onChange={() =>
                    setRating(4.8)
                  }
                />
                4.8+
              </label>

            </div>

            <div className="filter-section">

              <h4>
                Price Range
              </h4>

              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    Number(e.target.value)
                  )
                }
                className="range"
              />

              <div className="price-values">
                <span>$0</span>
                <span>${maxPrice}</span>
              </div>

            </div>

            <div className="filter-section">

              <h4>
                Availability
              </h4>

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                In Stock
              </label>

              <label>
                <input type="checkbox" />
                On Sale
              </label>

              <label>
                <input type="checkbox" />
                New Arrivals
              </label>

              <label>
                <input type="checkbox" />
                Best Seller
              </label>

            </div>

          </aside>

          <section className="products-area">

            <div className="product-search">

              🔍

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}

            </div>

            <div className="toolbar">

              <div className="sort">

                Sort:

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                >
                  <option>
                    Popularity
                  </option>

                  <option>
                    Price Low
                  </option>

                  <option>
                    Price High
                  </option>

                  <option>
                    Rating
                  </option>
                </select>

              </div>

              <div className="chips">

                {category !== "All" && (
                  <span>
                    {category} ×
                  </span>
                )}

                {rating > 0 && (
                  <span>
                    Rating {rating}+ ×
                  </span>
                )}

                <button
                  onClick={clearFilters}
                >
                  Clear all
                </button>

              </div>

              <div className="view-buttons">

                <button className="selected">
                  ▦
                </button>

                <button>
                  ☷
                </button>

                <button className="all">
                  All⌄
                </button>

              </div>

            </div>

            <div className="product-grid">

              {filteredProducts.map(
                (product) => (

                  <div
                    className="product-card"
                    key={product.id}
                  >

                    <div className="product-image">

                      {product.badge && (
                        <span
                          className={
                            product.badge === "New"
                              ? "badge new"
                              : "badge"
                          }
                        >
                          {product.badge}
                        </span>
                      )}

                      <button className="heart">
                        ♡
                      </button>

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>

                    <div className="product-info">

                      <div className="category">
                        {product.category}
                      </div>

                      <h3>
                        {product.name}
                      </h3>

                      <div className="rating">

                        ⭐ {product.rating}

                        <span>
                          ({product.reviews})
                        </span>

                      </div>

                      <div className="card-bottom">

                        <div className="price">

                          ${product.price}

                          {product.oldPrice && (
                            <del>
                              ${product.oldPrice}
                            </del>
                          )}

                        </div>

                        <div className="card-buttons">

                          <button className="cart">
                            🛒 Add to Cart
                          </button>

                          <Link
                            to={`/products/${product.id}`}
                            className="details"
                          >
                            View Details
                          </Link>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <h2>
                  No products found
                </h2>

                <button
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>
              </div>
            )}
            <div className="bottom-bar">

              <span>
                Showing{" "}
                {filteredProducts.length}{" "}
                of 48 products
              </span>

              <button>
                ⟳ Load More Products
              </button>

              <span>
                12%
              </span>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Product;