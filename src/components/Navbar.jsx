import { Link } from 'react-router-dom';
import logo from '../assets/logo-black.png'

export default function NavBar() {
    return (
        <div className='nav-bar py-3'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/' className='w-44 block'>
                    <img src={logo} alt="Girlcode store logo" />
                </Link>
            <ul className='flex gap-6 font-bold'>
                <li>
                <select className="navbar-options" id='options'>
                    <option value="categories">Categories</option>
                    <option value="laptops">Laptops</option>
                    <option value="desktop-pcs">Desktop PCs</option>
                    <option value="mechanical-keyboards">Mechanical keyboards</option>
                    <option value="Laptops">Laptops</option>
                </select>
                </li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Delivery</a></li>
            </ul>
            <div className='flex justify-between items-center'>
                <form className='bg-slate-200 relative w-fit py-1.5 px-5 rounded-3xl' id='information'>
                    <input className='outline-0 bg-transparent' type="text" placeholder='Search Products' id='input'/>
                    <button>
                        <span className="material-symbols-outlined align-middle">search</span>
                    </button>
                </form>
                <a className='font-bold'href="#">
                <span className="material-symbols-outlined align-middle">person</span>
                Account</a>
                <Link to='/cart' className='ml-2.5' href='/cart'>
                <span className="material-symbols-outlined align-middle">shopping_cart</span>
                Cart</Link>
                </div>
            </div>
        </div>
    )
}