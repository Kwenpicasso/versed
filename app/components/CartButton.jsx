'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const CartButton = ({name, nametwo, image, price, currency, price_id}) => {
  const {addItem, handleCartClick} = useShoppingCart();
  const product = {
    name: name,
    nametwo: nametwo,
    image: image,
    price: price,
    currency: currency,
    price_id: price_id
  }
  return (
    <button className="button uppercase text-xs w-[75%]" onClick={() => {
      addItem(product), handleCartClick();
    }}>
        add to bag
    </button>
  )
}

export default CartButton
