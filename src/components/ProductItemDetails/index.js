import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class ProductItemDetails extends Component {
  state = {items: {}, count: 0}

  componentDidMount = () => {
    this.getTheItems()
  }

  getTheItems = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedItems = {
      availability: data.availability,
      brand: data.brand,
      description: data.description,
      title: data.title,
      imageUrl: data.image_url,
      price: data.price,
      rating: data.rating,
      totalReviews: data.total_reviews,
    }
    this.setState({items: updatedItems})
  }

  decrement = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {items, count} = this.state
    const {
      availability,
      brand,
      description,
      imageUrl,
      price,
      rating,
      title,
      totalReviews,
    } = items
    return (
      <div className="main">
        <Header />
        <div className="flexing">
          <img src={imageUrl} alt="product" className="main-img" />
          <div>
            <h1 className="main-heading1">{title}</h1>
            <p className="rs">RS {price}</p>
            <div className="rating-flexing">
              <div className="star-flex">
                <p className="floor">{Math.floor(rating)}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-img"
                />
              </div>
              <p className="reviews">{totalReviews} Reviews</p>
            </div>
            <p className="dis">{description}</p>
            <p className="dis">
              <span className="span">Available:</span> {availability}
            </p>
            <p className="dis">
              <span className="span">Brand:</span> {brand}
            </p>
            <hr />
            <div className="rating-flexing1">
              <button type="button" onClick={this.decrement}>
                -
              </button>
              <p className="count">{count}</p>
              <button type="button" onClick={this.increment}>
                +
              </button>
            </div>
            <button type="button" className="button1">
              Add to card
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItemDetails
