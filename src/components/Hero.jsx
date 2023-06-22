import React from 'react'

export default function Hero() {
    return (
        <section className={`py-32 bg-hero-section bg-center bg-cover`}>
            <div className='container mx-auto'>
                <div className='w-2/5'>
                    <h1 className='text-6xl text-girlcode-pink font-bold leaging-tight'>Shopping And<br/> Department Store.</h1>
                    <p className='mb-10 mt-9'>Shopping is a bit of a relaxing hobby for me, which is
                        sometimes<br/> troubling for the bank balance.
                    </p>
                    <a className='btn bg-girlcode-pink text-white' href='#'>Learn More</a>
                </div>
            </div>
        </section>
    )
}