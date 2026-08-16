import './Header.css'
import { NavLink } from 'react-router';
export function Header() {
   return(
    <div className='header'>
      <div className='left-section'>
        <NavLink to='/'>
          <img className='banner-logo' src='/brand-logo.png' />
        </NavLink>
        <button className='categories'>
          <img className='hambarger-icon' src='/menu-burger.png' />
          <p>Categories</p>
        </button>
      </div>

      <div className='middle-section'>
        <button className='bars-staggered-icon-button'>
          <img className='bars-staggered-icon' src='/bars-staggered.svg' />
        </button>
        <div className='search-bar-section'>
          <input className='search-bar' type='textbox' placeholder='Search for anything' />
          <button className='search-icon-button'>
            <img className='search-icon' src='/loupe.png' />
          </button>
        </div>

      </div>
      <div className='right-section'>
        <button className='signin-button'>
          Sign in
        </button>
        <a >
          <button className='left-section-button'>
            <img className='flags' src='/flag.png' />
            <div className='tooltip'>India</div>
          </button>
        </a>
        <NavLink className='left-section-logo' to='/Favourites'>
          <button className='left-section-button'>
            <img className='favourate' src='/heart.png' />
            <div className='tooltip'>Favourates</div>
          </button>
        </NavLink>
        <NavLink className='left-section-logo'>
          <button className='left-section-button'>
            <img className='gift' src='gift.png' />
            <div className='tooltip'>Gifts</div>
          </button>
        </NavLink>
        <NavLink className='left-section-logo' to='/Basket'>
          <button className='left-section-button'>
            <img className='basket' src='/basket-shopping-simple.png' />
            <div className='tooltip'>Basket</div>
          </button>
        </NavLink>
      </div>
    </div>
   ); 
}