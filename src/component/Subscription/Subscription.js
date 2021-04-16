import React from 'react'
import { NavLink } from 'react-router-dom'
import Items from '../Items/Items'
import Auth from '../Auth'

const Subscription = (props) => {
    return (
        <div className='main--class'>
            <div className='class'>
                <NavLink to='/'>
                <button onClick={() => {
                    Auth.logout(() => {
                        props.history.push("/")
                    })
                }}className='button'>LOG OUT</button>
                </NavLink>
                <h3 className='header'>Select Your Subscription</h3>
                <Items />
            </div>
        </div>
    )
}

export default Subscription
