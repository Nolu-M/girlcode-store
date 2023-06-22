import ProductItems from './ProductItems.jsx'
import { Link } from 'react-router-dom'


export default function DealsSection() {
    const DealsList = [
        {
            name: "HomePod mini",
            path: "/deals/homepod-mini"
        },
        {
            name: "Instax Mini 9",
            path: "/deals/instax-mini 9"
        },
        {
            name: "Base Camp Duffel M",
            path: "/deals/base camp duffel m"
        }
    ]
    return (
        <section className='pt-20'>
            <div className='container mx-auto'>
                <div className='mb-9'>
                    <h2 className='text-2xl font-extrabold'>Todays Best Deals For You!</h2>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    { DealsList.map( deals => (
                        <Link to={deals.path} key={deals.name}>
                            <ProductItems />
                        </Link>
                        
                    )) }
                </div>
            </div>    
        </section>
    )
}