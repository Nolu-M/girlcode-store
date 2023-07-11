import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarSvg from '../assets/star.svg'
import HeartSvg from '../assets/heart.svg'

export default function ProductItems({prod_info}) {

    const ProdPrice = ({price}) => {
        const[intNum, setIntNum] = useState('')
        const[centNum, setCentNum] = useState('')
    

     useEffect(() => {
        if (price) {
            const priceArr = price.toString().split('.')
            setIntNum(priceArr[0] ?? '00' )
            setCentNum(priceArr[1] ?? '00' )


        }
    }, [price]) 

        return (
            <><span className='align-top text-base'>R</span>{intNum}<span className='align-top text-base'>.{centNum}</span></>
        )
    }

    const addToCart = (evt) => {
        let cartArray = JSON.parse(localStorage.getItem('cart')) ?? []
        const prodId = evt.target.dataset.prodId
        let foundItem = cartArray.find(prod => Number(prodId) === prod.id)
        let foundIndex = cartArray.findIndex(prod => Number(prodId) === prod.id)
        
        if(!foundItem) {
            let currProd = prod_info
            currProd.count = 1
            cartArray.push(currProd)
            
            localStorage.setItem('cart', JSON.stringify(cartArray))
        } else {
            foundItem.count = ++foundItem.count
            cartArray[foundIndex] = foundItem

            localStorage.setItem('cart', JSON.stringify(cartArray))
        }
    }

    return (
                    <Link to={`/product/${prod_info.prod_slug}`}  className=''>
                        <div className='relative rounded-xl overflow-hidden bg-[#f5f6f6] text-center mb-7'>
                            <img src={`${import.meta.env.VITE_API_URL}/image/${prod_info.prod_img}`} alt="Homepod Mini"/>
                            <img className='absolute top-4 right-4 items-center bg-[#fff] w-10 h-10 rounded-full'src={HeartSvg} alt="Heart icon" />
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-lg font-semibold mt-4 mb-3.5'>{prod_info.prod_name}</h3>
                                <div className='text-xl font-bold'>{<ProdPrice price={prod_info.prod_price}/>}</div>
                            </div>   
                                <p className=' text-sm mb-2.5 text-gray-900'>{prod_info.prod_desc}</p>
                            <div className='mb-8 flex'>
                                <img className=''src={StarSvg} alt="star rating" />
                                <img className=''src={StarSvg} alt="star rating" />
                                <img className=''src={StarSvg} alt="star rating" />
                                <img className=''src={StarSvg} alt="star rating" />
                                <img className=' mr-0.5'src={StarSvg} alt="star rating" />
                                <p className='ml-1'> (121)</p>
                            </div>
                            <a className='btn btn-atc' href='#'>Add to Cart</a>
                        </div>
                    </Link>
    )
}