import ProductItems from './ProductItems.jsx'

export default function() {
    return (
        <section className='pt-20'>
            <div className='container mx-auto'>
                <div className='mb-9'>
                    <h2 className='text-2xl font-extrabold'>Todays Best Deals For You!</h2>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                </div>
            </div>    
        </section>
    )
}