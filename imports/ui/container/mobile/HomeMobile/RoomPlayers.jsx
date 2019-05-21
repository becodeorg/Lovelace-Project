import React, { Component } from 'react'
import Salon from '../Salon/Salon'
import UserCard from './UserCard'

export default class RoomPlayers extends Component {
    render() {
        console.log(Salon.usersjoined)
        return (
            <div>
                {Salon.usersjoined.map(userId => (
                    <UserCard key={`user/${userId}`} userId={userId} />
                ))}
            </div>
        )
    }
}
