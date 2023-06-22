import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Deals from './pages/Deals.jsx'



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Category/:catName' element={<Category />} />
        <Route path='/Deals/: dealsName' element={<Deals />} />
      </Routes>
    </>
    
  )
}


