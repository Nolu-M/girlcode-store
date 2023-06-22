import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Deals from './pages/Deals.jsx'
import './App.css'



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:catName' element={<Category />} />
        <Route path='/deals/: dealsName' element={<Deals />} />
      </Routes>
    </>
    
  )
}


