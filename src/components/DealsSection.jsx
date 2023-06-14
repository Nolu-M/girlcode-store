import DealsImg from '../assets/deals.png'
import StarSvg from '../assets/star.svg'

export default function() {
    return (
        <section className='pt-20'>
            <div className='container mx-auto'>
                <div className='mb-9'>
                    <h2 className='text-2xl font-extrabold'>Todays Best Deals For You!</h2>
                </div>
                <div className='grid grid-cols-6 gap-8 rounded-xl overflow-hidden bg-[#f5f6f6] text-center mb-7'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={DealsImg} alt="Deals Category"/>
                        <i></i>
                    </div>
                </div>
                <div className='leading-5'>
                    <h3 className='text-lg font-semibold text-[#231f1e] mt-4 mb-3.5'>HomePod mini</h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className='mb-4'>
                    <img className='inline-block'src={StarSvg} alt="star rating" />
                    <p className='block'>(121)</p>
                    </div>
                    <a className='bg-[#e94154] text-base text-[#fff] font-semibold py-3.5 px-7 rounded-3xl' href='#'>Add to Cart</a>
                </div>
            </div>
        </section>
    )
}