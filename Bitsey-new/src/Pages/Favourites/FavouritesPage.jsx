import './FavouritesPage.css'
import { Header } from '../../Components/Header';
import { NavLink } from 'react-router';
export function FavouritesPage({ isfavourite }) {
    return (
        <>
            <title>Favourites</title>
            <Header />
            <div className="Text">Your Favourites</div>
            <div className="products-column">
                {isfavourite.map((cartItems) => {
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
                })}
            </div>
        </>
    )
}