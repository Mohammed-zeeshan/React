import React, { useContext, useState } from 'react'
import CartContext from './cart-context'

const CandyForm = (props) => {
    const [candyName, setCandyName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const nameInputChangeHandler = (event) => {
        setCandyName(event.target.value);
    }
    const descriptionInputChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const priceInputChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    const submitForm = (event) => {
        event.preventDefault();
        const data = {
            candyName: candyName,
            description: description,
            price: price,
        }
        props.details(data)
    }
    const cartCtx = useContext(CartContext);
    let quantity = 0;
    cartCtx.items.forEach(item => {
        quantity = quantity + Number(item.quantity);
    })
  return (
    <div>
        <form>
            <label>Candy Name: </label>
            <input type='text' value={candyName} onChange={nameInputChangeHandler}/>
            <label>Description: </label>
            <input type='text' value={description} onChange={descriptionInputChangeHandler} />
            <label>Price: </label>
            <input type='number' value={price} onChange={priceInputChangeHandler} />
            <button type='submit' onClick={submitForm} >Add</button>
            <button type='button' onClick={props.onShowCart} items={props.items} >cart <span>{quantity}</span></button>
        </form>
    </div>
  )
}

export default CandyForm