import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = ({ profileSrc, image, username, timestamps, massege}) => {
    return (
        <div className='post'>
           <div className='post__top'>
               <Avatar src={profileSrc} className='post__avater'/>
               <div className='post__topInfo'>
                   <h3>{ username }</h3>
                   <p>{ new Date(timestamps?.toDate()).toUTCString() }</p>
               </div>
           </div>
           <div className='post__bottom'>
               {massege}
           </div>
           <div className='post__image'>
               <img src={image} alt='' />
           </div>
           <div className='post__options'>
               <div className='post__option'>
                   <ThumbUpIcon/>
                   <p>like</p>
               </div>
               <div className='post__option'>
                   <ChatBubbleOutlineIcon/>
                   <p>comment</p>
               </div>
               <div className='post__option'>
                   <NearMeIcon/>
                   <p>share</p>
               </div>
               <div className='post__option'>
                   <AccountCircleIcon/>
                   <ExpandMoreOutlinedIcon/>
               </div>
           </div>
        </div>
    )
}

export default Post;
