import { useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import furnImg from '../assets/furniture.jpg';

export default function CategorySection()  {
    const [catList, setCatList] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/categories`)
            .then(resp => resp.json())
            .then(resp => {
                setCatList(resp.categories)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    //const CatList = [
        //{
          //  name:"Furniture", 
           // path: "/Category/furniture",
           // catImg: FurnImg
       // },
        //{
          //  name:"Hand Bag", 
           // path: "/Category/hand-bag",
          //  catImg: FurnImg
       // },
       // {
           // name:"Books", 
           // path: "/Category/books",
           // catImg: FurnImg
       // },
       // {
           // name:"Tech", 
           // path: "/Category/tech",
           // catImg: FurnImg
       // },
       // {
           // name:"Sneakers", 
           // path: "/Category/sneakers",
           // catImg: FurnImg
       // },
       // {
          //  name:"Travel", 
          //  path: "/Category/travel",
         //   catImg: FurnImg
       // }
   // ] 

    return (
        <section className='pt-20'>
            <div className='container mx-auto'>
                <div className='mb-9'>
                    <h2 className='text-2xl font-extrabold'>Shop Our Top Categories</h2>
                </div>
                <div className='grid grid-cols-6 gap-8'>
                    { catList.map(cat => (
                        <Link to={cat.path} className='rounded-xl overflow-hidden relative' key={cat.name}>
                            <img src={furnImg} alt={`${cat.name} Category`}/>
                            <h3 className='absolute top-3 left-1/2 text-2xl font-extrabold text-girlcode-pink -translate-x-1/2'>{cat.name}</h3>
                        </Link>
                    )) }
                </div>
        
            </div>
        </section>
    )
}

