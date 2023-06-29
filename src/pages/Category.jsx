import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx'


export default function Category() {
    let { catSlug} = useParams()
    let [catInfo, setCatInfo] = useState({})

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/category/${catSlug}`)
            .then(resp => resp.json())
            .then(resp => {
                setCatInfo(resp)
            })
            .catch(error => {
                console.log(error)
            })
    }, [catSlug])

    return (
        <MainLayout>
            <section>
                <div className='container mx-auto bg-page-header bg-no-repeat bg-cover bg-center py-20 px-16'>
                <div className='w-3/5'>
                    <h1 className='text-6xl text-girlcode-pink font-bold leaging-tight mb-9'>{catInfo.desc}</h1>
                    <a className='btn bg-girlcode-pink text-white' href='#'>Buy Now</a>
                </div>
                </div>
            </section>
            <section className='pt-20'>
                <div className='container mx-auto'>
                    <select className="btn bg-gray-300">
                        <option value="furniture type">{catInfo.name} Type</option>
                    </select>
                </div>
            </section>
            <section className='py-20'>
                <div className='container mx-auto'>
                    <div>
                        <h2 className='text-2xl font-extrabold'>{catInfo.name} for you!</h2>
                    </div>
                    <div className='grid grid-cols-4 gap-8'>
                        products
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}