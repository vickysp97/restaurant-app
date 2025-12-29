import './index.css'

const CategoryTabs = ({menuList, activeTab, setActiveTab}) => (
  <div className="tabs-container">
    {menuList.map(each => (
      <button
        type="button"
        key={each.menu_category}
        className={
          activeTab === each.menu_category ? 'active-tab tab-btn' : 'tab-btn'
        }
        onClick={() => setActiveTab(each.menu_category)}
      >
        {each.menu_category}
      </button>
    ))}
  </div>
)

export default CategoryTabs
