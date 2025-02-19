import React from 'react'

const List = ({ posts }) => {
    return (
        <ul>
            {posts}
        </ul>
    )
}

const B = ({ message, posts }) => {
    return (
        <div>B</div>
    ) 
}

export default B