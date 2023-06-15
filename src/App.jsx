import { Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home.jsx'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<>Home</>} />
        <Route path='/' element={<>Test</>} />
      </Routes>
    </div>
    
  )
}


