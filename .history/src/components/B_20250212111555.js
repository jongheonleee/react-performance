import React from 'react'

const ListItem = ({ post }) => {
    return (
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
    )
}

const List = ({ posts }) => {
    return (
        <ul>
            {posts.map(post => {
                <ListItem 
                    key={post.id}
                    post={post}
                />
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