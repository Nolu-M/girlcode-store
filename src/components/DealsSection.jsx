import DealsImg from '../assets/deals.png'
import StarSvg from '../assets/star.svg'
import HeartSvg from '../assets/heart.svg'

export default function() {
    return (
        <section className='pt-20'>
            <div className='container mx-auto'>
                <div className='mb-9'>
                    <h2 className='text-2xl font-extrabold'>Todays Best Deals For You!</h2>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='rounded-xl overflow-hidden bg-[#f5f6f6] text-center mb-7'>
                        <div className='relative'>
                            <img className=''src={DealsImg} alt="Deals Category"/>
                            <img className='absolute top-4 right-4 items-center bg-[#fff] w-10 h-10 rounded-full'src={HeartSvg} alt="Heart icon" />
                        </div>
                    </div>
                    <div className='rounded-xl overflow-hidden bg-[#f5f6f6] text-center mb-7'>
                        <div className='relative'>
                            <img className=''src={DealsImg} alt="Deals Category"/>
                            <img className='absolute top-4 right-4 items-center bg-[#fff] w-10 h-10 rounded-full'src={HeartSvg} alt="Heart icon" />
                        </div>
                    </div>
                    <div className='rounded-xl overflow-hidden bg-[#f5f6f6] text-center mb-7'>
                        <div className='relative'>
                            <img className=''src={DealsImg} alt="Deals Category"/>
                            <img className='absolute top-4 right-4 items-center bg-[#fff] w-10 h-10 rounded-full'src={HeartSvg} alt="Heart icon" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center flex-row'>
                <h3 className='text-lg font-semibold text-[#231f1e] mt-4 mb-3.5'>HomePod mini</h3>
                    <p className='mb-2.5'>Table with air purifier, stained veneer/black</p>
                        <div className='mb-8 flex'>
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=' mr-0.5'src={StarSvg} alt="star rating" />
                            <p className='ml-1'> (121)</p>
                        </div>
                            <a className='bg-[#e94154] text-base text-[#fff] font-semibold py-3.5 px-7 rounded-3xl' href='#'>Add to Cart</a>
                    <h3 className='text-lg font-semibold text-[#231f1e] mt-4 mb-3.5'>HomePod mini</h3>
                    <p className='mb-2.5'>Table with air purifier, stained veneer/black</p>
                        <div className='mb-8 flex'>
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=' mr-0.5'src={StarSvg} alt="star rating" />
                            <p className='ml-1'> (121)</p>
                        </div>
                            <a className='bg-[#e94154] text-base text-[#fff] font-semibold py-3.5 px-7 rounded-3xl' href='#'>Add to Cart</a>
                            <h3 className='text-lg font-semibold text-[#231f1e] mt-4 mb-3.5'>HomePod mini</h3>
                    <p className='mb-2.5'>Table with air purifier, stained veneer/black</p>
                        <div className='mb-8 flex'>
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=''src={StarSvg} alt="star rating" />
                            <img className=' mr-0.5'src={StarSvg} alt="star rating" />
                            <p className='ml-1'> (121)</p>
                        </div>
                            <a className='bg-[#e94154] text-base text-[#fff] font-semibold py-3.5 px-7 rounded-3xl' href='#'>Add to Cart</a>
                    </div>
            </div>
        </section>
    )
}