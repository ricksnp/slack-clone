import React from 'react'
import './Message.css'

export interface IProps {
    message: any,
    timestamp : any,
    user: any,
    userimage: any
}

function Message({ message, timestamp, user, userimage }: IProps) {
    return (
        <div className = "message">
            <img src={userimage} alt=""/>
            <div className="message__info">
                <h4>{user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span> </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;
