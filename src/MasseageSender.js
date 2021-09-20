import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MsgSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './Firebase';
import firebase from 'firebase';

const MasseageSender = () => {
    const [ {user}, dispatch ] = useStateValue();
    const [ input, setinput ] = useState('');
    const [ imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            profileSrc: user.photoURL,
            username: user.displayName,
            timestamps: firebase.firestore.FieldValue.serverTimestamp(),
            massege: input,
            image: imageUrl
        });
        setinput('');
        setImageUrl('');
    
    }

    return (
        <div className='massegeSender'>
            <div className='msgSender__top'>
                <Avatar src={ user.photoURL }/>
                <form>
                    <input value={input} onChange={(e) => setinput(e.target.value)} className='msgSenderInput' type='text' placeholder={`whats on your mind? ${user.displayName}`}  />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='image url (optional)' />
                    <button type='submit' onClick={handleSubmit}>Post</button>
                </form>
            </div>
            <div className='msgSender__bottom'>
                <div className='msgSender__options'>
                    <VideocamIcon style={{ color: 'red' }}/>
                    <h4>live video</h4>
                </div>
                <div className='msgSender__options'>
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h4>Photo/Gallery</h4>
                </div>
                <div className='msgSender__options'>
                    <InsertEmoticonIcon style={{color: 'yellowgreen'}} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MasseageSender;
