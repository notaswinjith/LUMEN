import { useEffect, useMemo, useState } from "react"
import "../style/cart-page.css"
import CartItem from "../components/CartItem"
// import productsData from "../data/products"
import truck from "../assets/cart-images/truck.png"
import headset from '../assets/cart-images/headset.png'
import shield from "../assets/cart-images/shield.png"
import verify from "../assets/cart-images/verify.png"
import Checkout from "./Checkout"
import { useNavigate } from "react-router-dom"
function Cart() {
    const [itemcount, setItemCount] = useState(productsData.length)
    const [cart, setCart] = useState(productsData)

    const [price, setPrice] = useState(0)
    const [promo, setPromo] = useState(89)
    const [tax, setTax] = useState(35)
    const navigate = useNavigate();

    useEffect(() => {
        const totalPrice = cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );

        setPrice(totalPrice);
    }, [cart]);
    const totalprice = useMemo(() => {
        return price + tax - promo;
    }, [price, tax, promo])


    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <>
            <div className="cartpage">
                <div className="shopping-grid">
                    <div className="shop-title" >
                        <h1>Shopping Cart</h1>
                        <div className="itemcount-box">
                            <p>{itemcount} Items</p>
                        </div>
                    </div>
                    <div className="shipping">
                        🎉 You unlocked Free Express Shipping ($120+)! 100%
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                    </div>

                    <div className="cart-container">

                        {cart.map((product) => (

                            <CartItem
                                key={product.id}
                                product={product}
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                                onRemove={removeItem}
                            />
                        ))}

                    </div>

                    <div className="cart-footer">

                        <button className="continue">
                            ← Continue Shopping
                        </button>

                        <button
                            className="clear"
                            onClick={() => setCart([])}
                        >
                            🗑 Clear Cart
                        </button>
                    </div>
                </div>
                <div className="cart-side-bar">
                    <div className="promo-code-box">
                        <div>
                            <p>Promotion code</p>
                        </div>
                        <input type="text" />
                        <button onClick={() => setPromo(89)}>Apply</button>
                    </div>
                    <div className="ordersummary-box">
                        <div className="ordersummary-container">
                            <div className="ordersummary-title">
                                <h3>Order Summary</h3>
                            </div>
                            <div className="order-sub-title">
                                <p>subtotal({itemcount})</p>
                                <p>${price}</p>
                            </div>
                            <div className="order-sub-title">
                                <p>promo</p>
                                <p>-${promo}</p>
                            </div>
                            <div className="order-sub-title">
                                <p>Estimated Delivery</p>
                                <p><strike>$15</strike> <span style={{ color: "blue" }}>FREE</span></p>
                            </div>
                            <div className="order-sub-title">
                                <p>Estimated sales tax</p>
                                <p>${tax}</p>
                            </div>
                            <hr />
                            <div className="order-sub-title">
                                <h2>Total</h2>
                                <h2>${totalprice}</h2>
                            </div>
                            <p className="margin-remove">included all taxes and duties</p>
                            <hr />
                            <button className="proceed-btn" onClick={() => navigate("/checkout", { state: { cart } })}>
                                <div className="proceed-btn-content">
                                    <p>Proceed to Checkout</p>
                                    <p>${totalprice}</p>
                                </div>
                            </button>
                            <div className="side-bar-footer-container">
                                <div className="side-bar-footer">
                                    <img src={truck} alt="" />
                                    <div>
                                        <h4>Free Express Shipping</h4>
                                        <p>on order upto $120</p>
                                    </div>
                                </div>
                                <div className="side-bar-footer">
                                    <img src={headset} alt="" />
                                    <div>
                                        <h4>30-Days Returns</h4>
                                        <p>Hassle free returns</p>
                                    </div>
                                </div>
                                <div className="side-bar-footer">
                                    <img src={shield} alt="" />
                                    <div>
                                        <h4>256-bit SSL</h4>
                                        <p>Encrypted checkout</p>
                                    </div>
                                </div>
                                <div className="side-bar-footer">
                                    <img src={verify} alt="" />
                                    <div>
                                        <h4>24/7 concierge Support</h4>
                                        <p>Here to help you</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cart