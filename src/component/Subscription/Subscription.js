import React from 'react'
import { NavLink } from 'react-router-dom'
import Items from '../Items/Items'

const Subscription = () => {
    return (
        <div className='main--class'>
            <div className='class'>
                <NavLink to='/'>
                <button className='button'>LOG OUT</button>
                </NavLink>
                <h3 className='header'>Select Your Subscription</h3>
                <Items />
            </div>
        </div>
    )
}

export default Subscription
