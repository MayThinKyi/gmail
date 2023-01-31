import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
const EmailListSettings = () => {
  return ( <div className='emailList__settings'>
      <div className='emailList__settingsLeft'>
          <IconButton>
          <CheckBoxOutlineBlankIcon />
      </IconButton>
      <IconButton>
           <ArrowDropDownIcon/>
     </IconButton>
      <IconButton>
           <RedoIcon />
     </IconButton>
      <IconButton>
           <MoreVertIcon/>
     </IconButton>
      </div>
      <div className='emailList__settingsRight'>
          <IconButton>
          <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton>
           <KeyboardArrowRightIcon/>
     </IconButton>
      <IconButton>
           <KeyboardHideIcon />
     </IconButton>
      <IconButton>
           <SettingsIcon/>
     </IconButton>
      </div>
    </div>
  )
}

export default EmailListSettings