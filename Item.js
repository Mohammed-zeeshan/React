import React, { useContext } from 'react'
import CartContext from './cart-context';

const Item = (props) => {
    const cartCtx = useContext(CartContext)
    const onefun = (event) => {
        event.preventDefault();
        cartCtx.addItem({...data,quantity: '1'})
    }
    const twofun = (event) => {
        event.preventDefault();
        cartCtx.addItem({...data,quantity: '2'})
    }
    const threefun = (event) => {
        event.preventDefault();
        cartCtx.addItem({...data,quantity: '3'})
    }
    const data = {
        candyName: props.candyName,
        description: props.description,
        price: props.price, 
        id: Math.random().toString()
    }
    console.log(cartCtx.items)
  return (
    <div>
        <div>{props.children} <button onClick={onefun}>One</button><button onClick={twofun}>Two</button><button onClick={threefun}>Three</button></div>
    </div>
  )
}

export default Item