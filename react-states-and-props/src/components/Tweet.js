import React from 'react'

const Tweet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.tweet}</h3>
        </div>
    )
}

export default Tweet
