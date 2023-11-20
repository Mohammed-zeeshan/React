import { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div></div>
    </Fragment>
  )
}

export default Header
