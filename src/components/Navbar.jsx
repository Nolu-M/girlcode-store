import React from 'react'

export default function() {
    return (
        <nav className='flex justify-between'>
            <div className=''>
                <img className='w-24' src="/cart.png" alt="shopping cart image"/>
            </div>
            <div className=''>
                <a className='' href="#">ShopCart</a>
            </div>
            <div>
                <select className="navbar-options">
                    <option value="categories">Categories</option>
                    <option value="laptops">Laptops</option>
                    <option value="desktop-pcs">Desktop PCs</option>
                    <option value="mechanical-keyboards">Mechanical keyboards</option>
                    <option value="Laptops">Laptops</option>
                </select>
            </div>
            <div>
                <a href="#">Deals</a>
            </div>
            <div>
                <a href="#">What's New</a>
            </div>
            <div>
                <a href="#">Delivery</a>
            </div>
            <form className='relative flex items-center'>
            <i className='absolute ml-16'>
                <span className="material-symbols-outlined">search</span>
            </i>
                <input className='bg-slate-200 rounded-2xl border-none pl-3 w-60' type="text" placeholder='Search Product'/>
            </form>
            <div className="navbar-account">
                <span className="material-symbols-outlined align-bottom mr-2.5">person</span>
                <a ClassName=''href="#">Account</a>
            </div>
            <div className='mr-10'>
                <span className="material-symbols-outlined align-bottom">shopping_cart</span>
                <a className='ml-2.5'href="#">Cart</a>
            </div>
        </nav>
    )
}