import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, Box, IconButton, Typography } from '@material-ui/core';
import { useStateValue } from "./StateProvider";

const Header = () => {
    const [ {user}, dispatch ] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png' 
                alt='logo' 
                />
                <div className='header__input'>
                    <SearchIcon />
                    <input type='text' placeholder='search facebook' className='header__input__text'/>
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__options header__options__active'>
                    <HomeOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <FlagOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SupervisedUserCircleOutlinedIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={ user.photoURL} />
                    <h4>{ user.displayName }</h4>
                </div>
                <IconButton>
                    <AddIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <ForumIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
