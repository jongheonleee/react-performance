import React from 'react'

const A = ({ message, posts }) => {
    return (
        <div>
            <h1>A Component</h1>
            <p>{message}</p>

            <ul>
                {posts}
            </ul>
        </div>
    )
}

export default A