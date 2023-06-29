import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx'

export default function Product() {
    let { prodSlug} = useParams()
    return (
        <MainLayout>
            Prod Page: {prodSlug}
        </MainLayout>
    )
}