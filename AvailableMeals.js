import React from 'react'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const elements = DUMMY_MEALS.map((data) => (
      <li>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <label>$ {data.price}</label>
      </li>
    ))
  return (
    <section className={classes.meals}>
        <ul>
            {elements}
        </ul>
    </section>
  )
}

export default AvailableMeals;
