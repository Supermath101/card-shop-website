import React, { useState } from 'react'
import './App.css'
import {default as ShopItem, ShopItemProps} from './ShopItem'

type ShopItemList = ShopItemProps[] | null

const LoadingScreen: React.FC = () => <span>Loading...</span>

function App() {
  const [shopItems, setShopItems] = useState<ShopItemList>(null)
  return (
    <div className="container">
      {shopItems ? /* TODO */ null : <LoadingScreen/>}
    </div>
  )
}

export default App
