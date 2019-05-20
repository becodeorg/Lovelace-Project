import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Fragment>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/room">Room</Link>
                </li>
            </ul>
            <hr />
        </Fragment>
    )
}

export default Header
