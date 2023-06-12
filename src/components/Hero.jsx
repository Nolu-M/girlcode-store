import React from 'react'

export default function() {
    return (
        <div>
            <img className='w-screen'src='./public/headphones.jpg'/>
            <h1>Grab Upto 50% off On Selected Headphone</h1>
            <button>Buy Now</button>
                <div className='flex justify-between'>
                    <select name="" id=""></select>
                        <option value="">Headphone Type</option>
                    <select name="" id=""></select>
                        <option value="">Price</option>
                    <select name="" id=""></select>
                        <option value="">Review</option>
                    <select name="" id=""></select>
                        <option value="">Colour</option>
                    <select name="" id=""></select>
                        <option value="">Material</option>
                    <select name="" id=""></select>
                        <option value="">Offer</option>
                    <button className='filter-option'>All Filters</button>
                    <select name="" id="">
                        <option value="">Sort By</option>
                    </select>
                </div>
        </div>
    )
}