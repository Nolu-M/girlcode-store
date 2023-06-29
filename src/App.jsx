import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import './App.css'
import Product from './pages/Product.jsx'



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:catSlug' element={<Category />} />
        <Route path='/product/: prodSlug' element={<Product />} />
      </Routes>
    </>
    
  )
}


