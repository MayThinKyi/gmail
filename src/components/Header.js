import React from 'react'
import logo from '../images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
const header = () => {
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
              <img src='https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png' />
          </div>
    </div>
  )
  
}

export default header