import { products } from '../../utils/products'
// import { useState } from 'react'
import { Header } from '../../Components/Header'
import './ProductsPage.css'
import favourite from '../../../src/assets/products-img/heart.png'
import favourite2 from '../../../src/assets/products-img/heart-2.png'

export function ProductsPage({cart, setCart, isfavourite , setFavourite}) {

    const addToCart = (product) => {
        const alreadyInCart = cart.some(item => item.id === product.id);
        if(!alreadyInCart) {
            setCart([...cart, product]);
        }
    }

    const AddToFavourite = (product) => {
        const alreadyFav = isfavourite.some(item => item.id === product.id)
        if(alreadyFav){
            setFavourite(isfavourite.filter(item => item.id === product.id))
        } else {
            setFavourite([...isfavourite, product])
        }
        
    }

    return (
        <>
            <title>Products</title>
            <Header />
            <div className="products-grid">

                {products.map((product) => (
                    <>
                        <div className='products-container' key={product.id}>
                            <div className='products-img-section'>
                                <button onClick={() => AddToFavourite(product)}  className='favourite-button'>
                                    <img className='heart-img' src={isfavourite.some(f => f.id === product.id) ? favourite2 : favourite}  ></img>
                                </button>
                                <img className='product-img' src={product.image} />
                            </div>
                            <div className='product-description'>
                                <span>{product.name}</span>
                                <div className='products-rating-section'>
                                    <img className='rating-img' src={product.rating.stars} /> <span style={{ marginLeft: "6px" }}>({product.rating.counts})</span>
                                </div>
                                <div className='price-section'>
                                    <span className='price'>${(product.priceCents / 100).toFixed(2)}</span>
                                    <div className='products-delivery-details'>
                                        <span>FREE delivery</span>
                                        <span>20% off</span>
                                    </div>
                                </div>
                                <button onClick={() => addToCart(product)} >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}