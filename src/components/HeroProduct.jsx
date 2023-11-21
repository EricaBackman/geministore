
import styled from 'styled-components'
import backgroundImage from '../images/Crystals/L1.jpg'
import { Link } from 'react-router-dom'

function HeroProduct() {
  return (
   <>
   <HeroBackground style={{backgroundImage: `url(${backgroundImage})`}}>
   <Hero className='hero'>
      <h1>Erbjudande</h1>
      <h2>3 för 2 på alla kristaller</h2>
      <Link to={`/products/KRISTALLER`}><button>TILL KRISTALLER</button></Link>
    </Hero>
   </HeroBackground>

   </>
  )
}

export default HeroProduct

const HeroBackground = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 25rem;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
padding: 0;
margin-top: 0;

@media (min-width: 900px) {
height: 30rem;
}
`

const Hero = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.43);
height: 13rem;
width: 20rem;
border-radius: 0px;
margin-top: 7rem;

h1 {
  margin: 0;
  font-family: 'El Messiri', sans-serif;
}

h2 {
  font-size: 20px;
  margin-top: 0;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 500;
}
button {
  width: 170px;
  height: 35px;
  font-family: 'Darker Grotesque', sans-serif;
  border: none;
  border-radius: 3px;
  background-color: #6A6580;
  color: white;
  padding: 0;
  margin-top: 20px;

}
`
