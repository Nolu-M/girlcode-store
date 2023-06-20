import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'

export default function({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    )
}