
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';



const CategoriesCarousel = ({ images }) => {

  CategoriesCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <CarouselWrapper className="wrapper">
      <div className="carousel-containter">
        <h2 className="header">KATEGORIER</h2>
        <div className="carousel">
          {images.map((img) => {
            return (
              <div className="carousel-item" key={`${img.title}`}>
                <img className="image" src={img.src} alt={img.title} />
               <Link to={`/products/${img.title}`}><button className="category-btn">{img.title}</button></Link>
              </div>
            )
          })}
        </div>
      </div>
    </CarouselWrapper>
  )
}

export default CategoriesCarousel

const CarouselWrapper = styled.div`
  padding-bottom: 30px;
  margin-bottom: 40px;
  background-color: rgba(159, 151, 191, 0.18);

  .header {
    font-size: 2rem;
    background-color: white;
    padding-bottom: 2rem;
  }
  .carousel-container {
    display: flex;
    width: 100%;
    max-width: 500px;
    height: 50%;
    margin: 0;
    padding: 0;
  }

  .carousel {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .carousel::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    margin: 20px 10px 10px 10px;
    flex: 1 0 100%;
    scroll-snap-align: start;
  }

  .carousel-item img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }

  .carousel-item button {
    width: 170px;
    height: 35px;
    font-family: 'Darker Grotesque', sans-serif;
    border: none;
    border-radius: 3px;
    background-color: #6a6580;
    color: white;
    padding: 3px 0;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  @media (min-width: 600px) {

    .carousel-container {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .carousel {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      overflow-x: hidden;
      width: 100%;
      height: 100%;
      margin-top: 60px;
      margin-bottom: 30px;
      margin-right: 10px;
      padding-right: 0px;
      padding-left: 0px;
    }

    .carousel-item {
      width: 130px;
      height: 180px;
      margin: 0;
      padding: 0;
      flex: 1 0 0%;

    }

    .carousel-item img {
      width: 100px;
      height: 150px;
      object-fit: cover;
    }
  }
`
