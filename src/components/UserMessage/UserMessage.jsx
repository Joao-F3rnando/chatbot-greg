import React from 'react'
import './UserMessage.css'

export const UserMessage = ({ date, message }) => {
    return (
        <div className='UserbodyMessage'>
            <div className="userHeaderMessage">
                <p>User</p>
                <p>{date}</p>
            </div>
            <div className="userMessage">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 1"
                    style={{ width: 45, height: "100%" }}
                />
                <div>
                    <p className="rounded-3" style={{ backgroundColor: "#39c0ed" }}>{message}</p>
                </div>
            </div>
        </div>
    )
}
