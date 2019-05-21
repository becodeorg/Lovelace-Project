import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import GithubConnection from '../Connection/GithubConnect'

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
                <GithubConnection />
            </ul>
            <hr />
        </Fragment>
    )
}

export default Header
