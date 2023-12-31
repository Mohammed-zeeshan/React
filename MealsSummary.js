import React from 'react'
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Choose your favorate meal from our board selection of available meals 
            and enjoy a delicious lunch or dinner at home.</p>
        <p>4
            All our meals are cooked with high-quality ingredients, just-in-time and 
            of course by experienced chefs!</p>
    </div>
  )
}

export default MealsSummary
