import React, { useEffect } from 'react'
import logo from '../images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../userSlice';
import { getAuth, signOut } from 'firebase/auth';
const Header = () => {
    const auth = getAuth();
  const userStore = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
    const signUserOut = () => {
        signOut(auth).then(() =>{
            dispatch(logout());
        });
    }
  return (
    <div className='header'>
    
          <div className='header__left'>
              <IconButton>
                    <MenuIcon fontSize='medium' />
              </IconButton>
              <img src={logo} />
          </div>
           <div className='header__middle'>
              <div className='input__container'>
                  <div className='input__left'>
                       <SearchIcon fontSize='medium' className='search__icon'/>
                  <input placeholder='Search...'/>
                  </div>
                  <div className='input__right'>
                      <ArrowDropDownIcon  fontSize='medium' className='arrow_dropDown'/>
                 </div>
              </div>
          </div>
           <div className='header__right'>
              <AppsIcon fontSize='medium' />
              <NotificationsIcon fontSize='medium' />
              <div onClick={signUserOut}>
                    <img   alt='user_image' src={userStore?.image} />
              </div>
          </div>
    </div>
  )
  
}

export default Header