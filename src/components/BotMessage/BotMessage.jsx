import React from 'react'
import './BotMessage.css'

export const BotMessage = ({ date, message }) => {
    return (
        <div className='botBodyMessage'>
            <div className="botHeaderMessage">
                <p>{date}</p>
                <p>GregBot</p>
            </div>
            <div className="botMessage">
                <div>
                    <p style={{ backgroundColor: "#DCDCDC" }} className='rounded-3'>{message}</p>
                </div>
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                    alt="avatar 1"
                    style={{ width: 45, height: "100%" }}
                />
            </div>
        </div>
    )
}
