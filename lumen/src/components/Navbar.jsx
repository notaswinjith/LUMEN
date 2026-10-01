import { NavLink } from "react-router-dom";
import '../style/Navbar.css'
import wishlist from '../assets/heart-3510.svg'
import cart from '../assets/icons8-cart-50.png'
import profile from '../assets/avatar-man.png'
import search from '../assets/icons8-search (2).svg'
function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
       LUMEN
      </div>

      <div className="navbar-links">

        <NavLink to="/" className={'links'}>
          Home
        </NavLink>

        <NavLink to="/menu" className={'links'}>
         Product
        </NavLink>

        <NavLink to="/about" className={'links'}>
          Collection
        </NavLink>

        <NavLink to="/contact" className={'links'}>
          About
        </NavLink>

      </div>
      <div className="search">
        <div className="search_bar">
        <img src={search} alt="" />
         <input type="text"
        placeholder="Search for products" />
        </div>
        
        <NavLink><img className="img1"src={wishlist} alt="image" /></NavLink>
        <NavLink><img className="img2" src={cart} alt="image" /></NavLink>
        <NavLink><img className="img3" src={profile} alt="image" /></NavLink>
      </div>
      
    </nav>
  );
}

export default Navbar;