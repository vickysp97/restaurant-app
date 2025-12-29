import {useEffect, useState} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishItem from './components/DishItem'
import Loader from './components/Loader'
import './App.css'

const App = () => {
  const [menuList, setMenuList] = useState([])
  const [activeTab, setActiveTab] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [restaurantName, setRestarantName] = useState('')

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await response.json()
      console.log(data)
      setMenuList(data[0].table_menu_list)
      setActiveTab(data[0].table_menu_list[0].menu_category)
      setIsLoading(false)
      setRestarantName(data[0].restaurant_name)
    }

    fetchMenu()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (menuList.length === 0) {
    return <p>No Data</p>
  }
  const selectedCategory = menuList.find(
    each => each.menu_category === activeTab,
  )

  return (
    <div className="app-container">
      <Header cartCount={cartCount} restaurantName={restaurantName} />

      <CategoryTabs
        menuList={menuList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {selectedCategory && selectedCategory.category_dishes && (
        <ul className="dishes-container">
          {selectedCategory.category_dishes.map(eachDish => (
            <DishItem
              key={eachDish.dish_id}
              dish={eachDish}
              updateCart={setCartCount}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
