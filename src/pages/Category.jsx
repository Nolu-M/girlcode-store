import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx'

export default function Category() {
    let { catName} = useParams()
    return (
        <MainLayout>
            Category Page: {catName}
        </MainLayout>
    )
}