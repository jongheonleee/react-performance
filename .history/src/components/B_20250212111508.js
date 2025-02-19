import React from 'react'

const ListItem = ({ post }) => {
    return (
        <li>
            <p></p>
        </li>
    )
}

const List = ({ posts }) => {
    return (
        <ul>
            {posts.map(post => {
            
            })}
        </ul>
    )
}

const B = ({ message, posts }) => {
    return (
        <div>B</div>
    ) 
}

export default B