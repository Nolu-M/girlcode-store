import React from 'react'
import BgHero from '../assets/bg-hero.png'

export default function() {
    return (
        <div className='container mx-auto'>
            <div className='relative'>
                <img className='w-full h-auto'src={BgHero}/>
                <div className='absolute top-1/2 left-0 transform -translate-y-1/2'>
                    <h1 className='text-4xl text-[#e94154] font-bold mb-7 mt-0'>Shopping And<br/> Department Store.</h1>
                    <p className='text-[#231f1e] mb-10'>Shopping is a bit of a relaxing hobby for me, which is
                        sometimes<br/> troubling for the bank balance.
                    </p>
                    <a className='bg-[#e94154] text-base text-[#fff] font-semibold py-3.5 px-7 rounded-3xl' href='#'>Learn More</a>
                </div>
            </div>
        </div>
    )
}