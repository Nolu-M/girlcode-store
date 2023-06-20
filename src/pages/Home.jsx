import Hero from '../components/Hero.jsx'
import CategorySection from '../components/CategorySection.jsx'
import DealsSection from '../components/DealsSection.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

export default function() {
    return (
        <MainLayout>
          <Hero/>
          <CategorySection/>
          <DealsSection/>
      </MainLayout>
    )
}