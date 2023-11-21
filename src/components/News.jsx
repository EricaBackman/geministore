
import styled from 'styled-components'
import NewsImage from '../images/Etheric/L9.jpg'
import { Link } from 'react-router-dom'

function News() {
  return (
    <>
      <NewsWrapper>
        <Header>
          <h2>NYHETER</h2>
        </Header>
        <Image>
          <img className="news-image" src={NewsImage} alt="" />
        </Image>
        <Button>
          <Link to="/products/NYHETER">
            <button>TILL NYHETER</button>
          </Link>
        </Button>
      </NewsWrapper>
    </>
  )
}

export default News

const NewsWrapper = styled.div`
  width: 100%;

  margin: 0;
  padding: 0;

`
const Header = styled.div`
  margin-top: 1.5rem;

  h2 {
    font-size: 2rem;
  }
`
const Image = styled.div`
  margin: 1.5rem 0rem;

  .news-image {
    height: 90vw;
    width: 120%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 400px) {
    .news-image {
    height: 90vw;
    width: 120%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  }
  @media (min-width: 600px) {
    .news-image {
    height: 50vw;
    width: 70%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  }
  @media (min-width: 900px) {
    .news-image {
    height: 35vw;
    width: 60%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  }
`
const Button = styled.div`
  button {
    width: 170px;
    height: 35px;
    font-family: 'Darker Grotesque', sans-serif;
    border: none;
    border-radius: 3px;
    background-color: #6a6580;
    color: white;
    padding: 0;
    margin-bottom: 3rem;
  }
`
