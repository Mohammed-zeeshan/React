import React, { useState } from "react";
import CandyForm from "./Components/CandyForm";
import Lists from "./Components/Lists";
import Cart from "./Components/Cart";
import CartProvider from "./Components/CartProvider";

function App() {
  const [item, setItem] = useState([])
  const [cartIsShown, setCartIsShown] = useState(false);
  const addItemHandler = (names) => {
    setItem(prevItem => {
      const updatedItems = [...prevItem]
      updatedItems.unshift({candyName: names.candyName, description: names.description, price: names.price, id: Math.random().toString()})
      return updatedItems;
    })
  }
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  let context = (
    <p></p>
  )
  if (item.length > 0){
    context = (
      <Lists items={item}/>
    )
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <CandyForm details={addItemHandler} onShowCart={showCartHandler} />
      {context}
    </CartProvider>
  );
}

export default App;
