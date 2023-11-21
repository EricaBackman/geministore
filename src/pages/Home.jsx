
import HeroProduct from '../components/HeroProduct'
import News from '../components/News'
import CategoriesCarousel from '../components/CategoriesCarousel'
import carouselData from '../CarouselData'
import styled from 'styled-components'

function Home() {
  return (
    <HomePage className="home">
      <HeroProduct />
      <News />
      <CategoriesCarousel images={carouselData} />
    </HomePage>
  )
}
export default Home

const HomePage = styled.div`
margin-top: 0;
padding-top: 0;
`
