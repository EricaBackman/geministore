
import styled from 'styled-components'
import IncenseImage from '../images/Incenses/L19.jpg'
import CrystalImage from '../images/Crystals/L6.jpg'
import EthericImage from '../images/Etheric/L11.jpg'
import TarotImage from '../images/Tarot/L8.jpg'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MoonIcon from '../components/MoonIcon'

function ProductPage() {
  const { category } = useParams()
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('../../products.json')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)

        const filteredCards = result.filter(
          (card) => card.category === category
        )
        setCards(filteredCards)
      })
  }, [category])

  return (
    <>
      <TarotOrakel className='cate-wrapper'>
        <h1>{category}</h1>
        {category === 'RÖKELSER' && <img src={IncenseImage} alt="Incense" />}
        {category === 'KRISTALLER' && <img src={CrystalImage} alt="Crystals" />}
        {category === 'ETERISKA OLJOR' && (
          <img src={EthericImage} alt="Etheric oils" />
        )}
        {category === 'TAROT & ORAKEL' && (
          <img src={TarotImage} alt="Tarot cards" />
        )}
        <Products>
          {cards.map((card) => (
            <div className="card-item" key={card.id}>
              <Link
                className="link"
                to={`/products/${card.category}/${card.id}`}
              >
                <img src={card.img} alt={card.title} />
              </Link>
              <div className="item-text">
                <Link
                  className="link"
                  to={`/products/${card.category}/${card.id}`}
                >
                  <p className="title">{card.title}</p>
                  <p className="price">{card.price} {card.currency}</p>
                </Link>
                <Link className="link" to={`/products/${card.category}`}>
                  <p className="category">{card.category}</p>
                </Link>
                <MoonIcon />
              </div>
            </div>
          ))}
        </Products>
      </TarotOrakel>
    </>
  )
}

export default ProductPage

const TarotOrakel = styled.div`

  img {
    height: auto;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 900px) {
img {
  height: 90vh;
  width: 100%;
}
  }
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  row-gap: 1rem;
  justify-items: center;
  margin-top: 3rem;

  img {
    display: flex;
    height: 110px;
    width: 165px;
  }

  .item-text p {
    display: flex;
    align-items: left;
    margin: 0;
    color: black;
    text-decoration: none;
  }

  .title {
    padding-top: 10px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }

  .price {
    font-size: 0.85rem;
    line-height: 7px;
    cursor: pointer;
  }

  .category {
    font-size: 0.7rem;
    margin-top: 2rem;
    padding-top: 1rem;
    text-decoration: none;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
  }

  @media (min-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
