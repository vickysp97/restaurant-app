import {useState} from 'react'
import './index.css'

const DishItem = ({dish, updateCart}) => {
  const [count, setCount] = useState(0)
  if (!dish) {
    return null
  }
  const increase = () => {
    setCount(prev => prev + 1)
    updateCart(prev => prev + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
      updateCart(prev => prev - 1)
    }
  }

  const isVeg = dish.dish_type === 1

  return (
    <li className="dish-item">
      <div className="dish-left">
        <div className={isVeg ? 'veg' : 'non-veg'} />

        <div>
          <h1 className="dish-name">{dish.dish_name}</h1>
          <p className="price">
            {dish.dish_currency} {dish.dish_price}
          </p>
          <p className="description">{dish.dish_description}</p>

          {dish.dish_Availability ? (
            <div className="counter">
              <button type="button" onClick={decrease}>
                -
              </button>
              <p>{count}</p>
              <button type="button" onClick={increase}>
                +
              </button>
            </div>
          ) : (
            <p className="not-available">Not available</p>
          )}

          {dish.addonCat && dish.addonCat.length > 0 && (
            <p className="custom-text">Customizations available</p>
          )}
        </div>
      </div>

      <div className="dish-right">
        <p className="calories">{dish.dish_calories} calories</p>
        <img src={dish.dish_image} alt={dish.dish_name} className="dish-img" />
      </div>
    </li>
  )
}

export default DishItem
