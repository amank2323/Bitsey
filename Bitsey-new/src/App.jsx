import './App.css';
import { BasketPage } from './Pages/Basket/BasketPage';
import { HomePage } from './Pages/Home/HomePage';
import {PurchasesPage} from './Pages/Purchases/PurchasesPage'
import {ProductsPage} from './Pages/Products/ProductsPage'
import {TrackingPage} from './Pages/Tracking/TrackingPage'
import { FavouritesPage } from './Pages/Favourites/FavouritesPage';
import { Routes, Route } from 'react-router';
import {useState} from 'react';
function App() {
    const [cart, setCart] = useState([]);
    const [isfavourite, setFavourite] = useState([])

 return(
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Basket' element={<BasketPage cart={cart}/>} />
        <Route path='Purchases'element={<PurchasesPage />} />
        <Route path='Products' element={<ProductsPage cart={cart} setCart={setCart} isfavourite={isfavourite} setFavourite={setFavourite}/>} />
        <Route path='Tracking' element={<TrackingPage />} />
        <Route path='Favourites' element={<FavouritesPage isfavourite={isfavourite}/>}/>
    </Routes>
 )
}

export default App
