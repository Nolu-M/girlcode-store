import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'

export default function() {
    let { dealsName} = useParams()
    return (
        <MainLayout>
            Deals Page: {dealsName}
        </MainLayout>
    )
}