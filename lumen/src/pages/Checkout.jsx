import { useLocation } from "react-router-dom";
import "../style/checkout.css";

function Checkout() {
    const location = useLocation();

    const cart = location.state?.cart || [];
    const itemCount = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    const subtotal = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    const promo = 89.10;
    const tax = 35.34;
    const totalPrice = subtotal - promo + tax;

    return (
        <div className="checkout-page">

            {/* MAIN CONTENT */}
            <main className="checkout-layout">

                {/* LEFT SIDE */}
                <section className="checkout-main">

                    <div className="checkout-back">
                        ← <span>Back to Cart</span>
                    </div>

                    <h1 className="checkout-heading">Checkout</h1>


                    {/* PROGRESS */}
                    <div className="checkout-progress">

                        <div className="progress-step completed">
                            <div className="progress-circle">✓</div>
                            <span>SHIPPING</span>
                        </div>

                        <div className="progress-line"></div>

                        <div className="progress-step active">
                            <div className="progress-circle">2</div>
                            <span>PAYMENT</span>
                        </div>

                        <div className="progress-line"></div>

                        <div className="progress-step">
                            <div className="progress-circle">3</div>
                            <span>REVIEW</span>
                        </div>

                    </div>


                    {/* SECURITY BAR */}
                    <div className="checkout-security">

                        <div className="security-item">
                            <span>🛡</span>
                            <p>256-Bit SSL Encrypted</p>
                        </div>

                        <div className="security-divider"></div>

                        <div className="security-item">
                            <span>🚚</span>
                            <p>Free Shipping on orders over $120</p>
                        </div>

                        <div className="security-divider"></div>

                        <div className="security-item">
                            <span>✹</span>
                            <p>100% Guarantee</p>
                        </div>

                    </div>


                    {/* SHIPPING ADDRESS */}
                    <div className="checkout-card">

                        <div className="card-heading">
                            <div className="card-heading-left">
                                <div className="card-icon">🚚</div>

                                <div>
                                    <h2>Shipping Address</h2>
                                    <p>Enter your delivery details</p>
                                </div>
                            </div>

                            <button className="edit-button">
                                Edit
                            </button>
                        </div>


                        <div className="address-form">

                            <div className="form-field">
                                <label>Recipient Name</label>
                                <input
                                    type="text"
                                    value="Elena Rostova"
                                    readOnly
                                />
                            </div>

                            <div className="form-field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value="elena.rostova@example.com"
                                    readOnly
                                />
                            </div>

                            <div className="form-field">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    value="+1 (555) 234-5678"
                                    readOnly
                                />
                            </div>

                            <div className="form-field full-field">
                                <label>Delivery Address</label>
                                <input
                                    type="text"
                                    value="742 Evergreen Terrace, Apt 4B"
                                    readOnly
                                />
                            </div>

                            <div className="form-field">
                                <label>City</label>
                                <input
                                    type="text"
                                    value="San Francisco"
                                    readOnly
                                />
                            </div>

                            <div className="form-field">
                                <label>State</label>

                                <select defaultValue="CA">
                                    <option value="CA">CA</option>
                                    <option value="NY">NY</option>
                                    <option value="TX">TX</option>
                                </select>
                            </div>

                            <div className="form-field">
                                <label>Postal ZIP</label>
                                <input
                                    type="text"
                                    value="94107"
                                    readOnly
                                />
                            </div>

                        </div>


                        <label className="save-address">
                            <input type="checkbox" defaultChecked />
                            <span>Save this address for future orders</span>
                        </label>

                    </div>


                    {/* PAYMENT */}
                    <div className="checkout-card payment-card">

                        <div className="card-heading">
                            <div className="card-heading-left">

                                <div className="card-icon">▣</div>

                                <div>
                                    <h2>Payment Method</h2>
                                    <p>Choose your preferred payment method</p>
                                </div>

                            </div>

                            <div className="safe-payment">
                                🔒 Safe & Protected
                            </div>
                        </div>


                        <div className="payment-options">

                            {/* CARD */}
                            <div className="payment-box selected-payment">

                                <div className="payment-title">
                                    <span className="radio-selected"></span>

                                    <div>
                                        <h3>Credit / Debit Card</h3>
                                        <p>Instant processing via Stripe</p>
                                    </div>

                                    <div className="card-brands">
                                        <span>VISA</span>
                                        <span>●●</span>
                                        <span>AMEX</span>
                                    </div>
                                </div>


                                <div className="card-number">
                                    <label>Card Number</label>
                                    <input
                                        type="text"
                                        value="4242 •••• •••• 9012"
                                        readOnly
                                    />
                                </div>


                                <div className="card-details">

                                    <div>
                                        <label>Expiry Date</label>
                                        <input
                                            type="text"
                                            value="09/27"
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <label>CVV / CVC</label>
                                        <input
                                            type="text"
                                            value="882"
                                            readOnly
                                        />
                                    </div>

                                </div>

                            </div>


                            {/* UPI */}
                            <div className="payment-box">

                                <div className="alternative-payment">

                                    <span className="radio-empty"></span>

                                    <div>
                                        <h3>UPI / Instant Pay</h3>
                                        <p>Google Pay, PhonePe, ID handle</p>
                                    </div>

                                    <span className="fast-badge">
                                        FAST
                                    </span>

                                </div>

                                <div className="upi-brands">
                                    <span>G Pay</span>
                                    <span>PhonePe</span>
                                    <span>Paytm</span>
                                </div>

                            </div>


                            {/* COD */}
                            <div className="payment-box cod-box">

                                <div className="alternative-payment">

                                    <span className="radio-empty"></span>

                                    <div>
                                        <h3>Cash on Delivery (COD)</h3>
                                        <p>Pay in cash or at checkout</p>
                                    </div>

                                    <span className="cod-icon">
                                        ▣
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* RIGHT SIDE */}
                <aside className="checkout-sidebar">

                    <div className="summary-card">

                        <div className="summary-header">
                            <h2>Order Summary</h2>
                            <button>Edit Cart</button>
                        </div>


                        {/* PRODUCTS */}
                        <div className="summary-products">

                            {cart.map((product) => (

                                <div
                                    className="summary-product"
                                    key={product.id}
                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <div className="product-details">

                                        <span className="product-category">
                                            {product.category}
                                        </span>

                                        <h3>{product.name}</h3>

                                        <p>
                                            {product.description ||
                                                "Premium quality product"}
                                        </p>

                                        <div className="product-bottom">

                                            <div className="quantity-control">
                                                <button>-</button>
                                                <span>{product.quantity}</span>
                                                <button>+</button>
                                            </div>

                                            <strong>
                                                $
                                                {(
                                                    product.price *
                                                    product.quantity
                                                ).toFixed(2)}
                                            </strong>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* SUMMARY */}
                        <div className="price-summary">

                            <div className="price-row">
                                <span>
                                    Subtotal ({itemCount} items)
                                </span>

                                <strong>
                                    ${subtotal.toFixed(2)}
                                </strong>
                            </div>


                            <div className="price-row promo-row">
                                <span>
                                    Promo Discount
                                    <small>LUMEN15</small>
                                </span>

                                <strong>
                                    - ${promo.toFixed(2)}
                                </strong>
                            </div>


                            <div className="price-row">
                                <span>Estimated Delivery</span>

                                <span>
                                    <del>$15.00</del>{" "}
                                    <b className="free-text">FREE</b>
                                </span>
                            </div>


                            <div className="price-row">
                                <span>Estimated Sales Tax</span>

                                <strong>
                                    ${tax.toFixed(2)}
                                </strong>
                            </div>

                        </div>


                        {/* TOTAL */}
                        <div className="total-section">

                            <div>
                                <h2>Total</h2>
                                <p>Includes all taxes and duties</p>
                            </div>

                            <strong>
                                ${totalPrice.toFixed(2)}
                            </strong>

                        </div>


                        {/* BENEFITS */}
                        <div className="checkout-benefits">

                            <div className="benefit-box">
                                <span>🚚</span>
                                <div>
                                    <h4>Free Express Shipping</h4>
                                    <p>On orders over $120</p>
                                </div>
                            </div>

                            <div className="benefit-box">
                                <span>♧</span>
                                <div>
                                    <h4>30-Days Returns</h4>
                                    <p>Hassle-free returns</p>
                                </div>
                            </div>

                            <div className="benefit-box">
                                <span>🛡</span>
                                <div>
                                    <h4>256-bit SSL</h4>
                                    <p>Encrypted checkout</p>
                                </div>
                            </div>

                            <div className="benefit-box">
                                <span>♧</span>
                                <div>
                                    <h4>24/7 Concierge Support</h4>
                                    <p>Here to help you</p>
                                </div>
                            </div>

                        </div>


                        {/* PLACE ORDER */}
                        <button className="place-order-button">

                            <span>
                                🔒 Place Order →
                            </span>

                            <strong>
                                ${totalPrice.toFixed(2)}
                            </strong>

                        </button>

                    </div>

                </aside>

            </main>

        </div>
    );
}

export default Checkout;