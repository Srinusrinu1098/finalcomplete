import './index.css'

const SimilarProductItem = props => {
  const {values} = props
  const {name, price, imgUrl, brand, rating} = values
  return (
    <li>
      <img
        src={imgUrl}
        alt={`similar product ${name}`}
        className="similar-img"
      />
      <h1 className="heading-similar">{name}</h1>
      <p className="par">by {brand}</p>
      <div className="similar-flex">
        <p>Rs {price}/- </p>
        <div className="star-flex">
          <p className="floor">{Math.floor(rating)}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-img"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
