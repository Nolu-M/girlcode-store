import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Category' element={<Category />} />
      </Routes>
    </>
    
  )
}


