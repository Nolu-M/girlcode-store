import MainLayout from '../layouts/MainLayout'
import { useEffect, useState } from "react"


export default function Cart() {
    const [currCart, setCurrCart] = useState([])
    const [currTotal, setCurrTotal] = useState(0)

    useEffect(() => {
        const cartArray = JSON.parse(localStorage.getItem('cart')) ?? []

        const total = cartArray.reduce((acc, currProd) => acc + currProd.prod_price, 0)

        setCurrTotal(total)

        setCurrCart(cartArray)
    }, [])

  return (
    <MainLayout>
            <section className="pt-20">
                <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h2>Review your bag.</h2>
                        <button className='btn bg-girlcode-pink text-white'>Sign out</button>
                    </div>
                    <hr />
                    <p>Free delivery and free returns.</p>

                    {
                        currCart.map(currProd => (
                            <>
                                ProdCount: {currProd.count}
                                ProdName: {currProd.prod_name}
                            </>
                        ))
                    }

                    total: R{currTotal}
                    
                    <div>
                        <button className='btn bg-girlcode-pink text-white w-1/4'>Checkout</button>
                    </div>
                </div>
            </section>
        </MainLayout>
  )
}
