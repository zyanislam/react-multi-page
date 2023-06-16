import React from 'react'
import Avatar from "@mui/material/Avatar"
import './Post.css'


function Posts({ username, caption, imageURL }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h4 className='post__username'>{username}</h4>
      </div>

      <img className='post__img' src={imageURL} alt='react-img' />
      
      <h4 className='post__text'><strong>{username}:</strong> {caption}</h4>
    </div>
  )
}

export default Posts