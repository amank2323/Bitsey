import { Header } from "../../Components/Header";
import './BasketPage.css'
import visa from '../../../src/assets/basket-img/visa.png'
import masterCard from '../../../src/assets/basket-img/logo.png'
import americanExpress from '../../../src/assets/basket-img/american-express.png'
import diners from '../../../src/assets/basket-img/diners-club.png'
import payPal from '../../../src/assets/basket-img/paypal.png'
import gpay from '../../../src/assets/basket-img/google-pay.png'
import phonepe from '../../../src/assets/basket-img/phonepe.svg'
import secure from '../../../src/assets/basket-img/secure.png'
import emptyCart from '../../assets/basket-img/empty-cart.png'
import { NavLink } from "react-router";

export function BasketPage({ cart }) {
    return (
        <>
            <title>Your Basket</title>
            <Header />
            <div className="Text">Your Basket</div>

            <div className="basket-layout">
                <div className="products-column">
                    {cart.length === 0 ?
                        (<img className="empty-cart-img" src={emptyCart} />) :
                        (
                            cart.map((cartItems) => {
                                return (
                                    <div className="product-container" key={cartItems.id}>
                                        <div className="product-rating-section">
                                            <div className="seller-section">
                                                <img src="" />
                                                <span>Seller Name</span>
                                                <div className="rating-section">
                                                    <img />
                                                    <span>4.8</span>
                                                    <span>(No.)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="offer-section">
                                            <input type="checkbox" />
                                            <span>Apply <span>10% off</span> to this product</span>
                                        </div>
                                        <div className="product-details-section">
                                            <div className="product-img-section">
                                                <img src={cartItems.image} />
                                            </div>
                                            <div className="product-details-section2">
                                                <div className="product-title">
                                                    <span>{cartItems.name}</span>
                                                    <p>Sale for a limited time</p>
                                                </div>
                                                <div className="product-operations-buttons">
                                                    <select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                    </select>
                                                    <button className="Save-for-later-button">
                                                        <span>Save for later</span>
                                                    </button>
                                                    <button className="Remove-button">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-price-section">
                                                <div style={{ backgroundColor: "#00ff80", padding: "2px 5px 2px", display: "inline", borderRadius: "20px", fontSize: "13px" }}>20% off</div>
                                                <div style={{ fontSize: "30px", color: "#137b13ff", marginLeft: "30px" }}>${(cartItems.priceCents / 100).toFixed(2)}</div>
                                                <div style={{ fontSize: "15px", marginRight: "10px", color: "grey", marginTop: "-3px" }}><del>$399</del></div>
                                            </div>
                                        </div>
                                        <div className="delivery-details">
                                            <div className="delivery-dates">
                                                <span style={{ fontWeight: "bold" }}>Delivery:</span> <span style={{ color: "green" }}> FREE </span>(<span>Get it by 16 Dec-08 Jan</span>)
                                            </div>
                                            <div>
                                                <NavLink style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
                                                    Checkout for this page only -
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                </div>
                <div className="payment-summary-container">
                    <div className="Title">How you'll pay</div>
                    <div className="payment-option">
                        <div className="payment-method-1">
                            <input type="radio" id="1" name="payment-method"  />
                            <label htmlFor="1" style={{ display: "inline-block" }}>
                                <img title="Visa" src={visa}></img>
                                <img title="Mastercard" src={masterCard}></img>
                                <img title="American Express" src={americanExpress}></img>
                                <img title="Diner Club" src={diners}></img>
                            </label>

                        </div>
                        <div className="payment-method-2">
                            <input type="radio" id="2" name="payment-method"  />
                            <label htmlFor="2" style={{ display: "inline-block" }}>
                                <img title="PayPal" src={payPal}></img>
                            </label>
                        </div>
                        <div className="payment-method-3">
                            <input type="radio" id="3" name="payment-method"  />
                            <label htmlFor="3" style={{ display: "inline-block" }}>
                                <img title="Google Pay" src={gpay}></img>
                                <img title="PhonePe" src={phonepe}></img>
                            </label>
                        </div>
                        <div className="payment-total">
                            <span style={{ fontSize: "20px", fontWeight: '600' }}>Item(s) total</span>
                            <span style={{ fontSize: "30px", color: "#137b13ff", marginLeft: "30px" }}>$598</span>
                        </div>
                        <div className="secure-text">
                            <img style={{ width: '30px', height: '30px' }} src={secure} />
                            <div style={{ fontSize: '14px', marginLeft: '10px' }}>You're covered with Bitsey Purchase Protection</div>
                        </div>
                        <div className="price-calculation">
                            <div className="price-discount">
                                <span style={{ fontSize: "16px", fontWeight: '600' }}>Shop discount</span>
                                <span style={{ fontSize: "20px", color: "#137b13ff" }}>-$199</span>
                            </div>
                            <div className="price-subtotal">
                                <span style={{ fontSize: "16px", fontWeight: '500' }}>Subtotal</span>
                                <span style={{ fontSize: "20px", color: "#137b13ff" }}>$399</span>
                            </div>
                            <div className="price-delivery">
                                <span style={{ fontSize: "16px", fontWeight: '500' }}>Delivery</span>
                                <span style={{ fontSize: "20px", color: "#137b13ff" }}>FREE</span>
                            </div>
                            <div className="price-total">
                                <span style={{ fontSize: "20px", fontWeight: '600' }}>Total (2 items)</span>
                                <span style={{ fontSize: "30px", color: "#137b13ff" }}>$399</span>
                            </div>
                            <div className="orders-gift">
                                <input style={{ width: '30px', height: '30px' }} type="checkbox" />
                                <span style={{ fontSize: "18px", fontWeight: '600' }}>Mark order as a Gift</span>
                            </div>
                        </div>
                        <div className="proceed-button-section">
                            <NavLink to='/Purchases' style={{ textDecoration: 'none' }}>
                                <button className="proceed-button" >
                                    Proceed to Checkout
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}