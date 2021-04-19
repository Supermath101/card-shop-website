import React from 'react'
import './App.css'

export type ShopItemProps = {
  cost: number,
  name: string,
  description: string,
  imageUrl: string,
};

function ShopItem({cost, name, description, imageUrl}: ShopItemProps) {
  return (
    <div className="shop-item">
      <img src={imageUrl}></img>
    </div>
  )
}

export default ShopItem;
