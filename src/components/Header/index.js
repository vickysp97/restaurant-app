import './index.css'

const Header = ({cartCount, restaurantName}) => (
  <div className="header">
    <h1 className="logo">{restaurantName}</h1>
    <div className="cart">
      <p className="cart-count">{cartCount}</p>
    </div>
  </div>
)

export default Header
