
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'



function ProductItem() {

  const { id } = useParams()

  useEffect(() => {
    fetch('../../products.json')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)

        // const filteredCards = result.filter(
        //   (card) => card.category === category
        // )
        // setCards(filteredCards)
      })
  }, [])

  return (
    <div>ProductItem {id}</div>
  )
}

export default ProductItem
