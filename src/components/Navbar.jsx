import React from 'react'
import logo from '../assets/logo-black.png'

export default function() {
    return (
        <div className='nav-bar py-3'>
            <div className='container mx-auto flex justify-between items-center'>
                <a className='w-44 block' href="#">
                    <img src={logo} alt="Girlcode store logo" />
                </a>
            <ul className='flex gap-6 font-bold'>
                <li>
                <select className="navbar-options">
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
            <div className='flex items-center'>
                <form className='bg-slate-200 relative w-fit py-1.5 px-5 rounded-3xl'>
                    <input className='outline-0 bg-transparent' type="text" placeholder='Search Products'/>
                    <button>
                        <span className="material-symbols-outlined align-middle">search</span>
                    </button>
                </form>
                <a ClassName='font-bold'href="#">
                <span className="material-symbols-outlined align-middle">person</span>
                Account</a>
                <a className='ml-2.5'href="#">
                <span className="material-symbols-outlined align-middle">shopping_cart</span>
                Cart</a>
                </div>
            </div>
        </div>
    )
}