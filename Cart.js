import React, { useContext } from 'react'
import Modal from './Modal'
import classes from './Cart.module.css'
import CartContext from './cart-context'

const Cart = (props) => {
    const cartctx = useContext(CartContext)
    let total = 0;
    const cartItems = (
        <ul className={classes['cart-item']}>
            {cartctx.items.map((item) => (
                <div key={item.id}>
                    <li>Name: {item.candyName} Description: {item.description} Price: {item.price} </li>
                </div>
            ))}
        </ul>
    )
    cartctx.items.forEach(item => {
        total = total + item.price;
    })
    console.log(cartctx.items)
  return (
    <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart