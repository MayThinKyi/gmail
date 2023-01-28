import { IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SideBarOptions from './SideBarOptions';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Sidebar = () => {
    return (<div className='sidebar__container'>
        <button className='compose__btn'>
    <AddIcon/> <p>COMPOSE</p>
        </button>
      <SideBarOptions isActive={true} icon={<InboxIcon/>} title={'Inbox'} number={54} />
          <SideBarOptions isActive={false} icon={<StarIcon/>} title={'Starred'} number={24} />
      <SideBarOptions isActive={false} icon={<WatchLaterIcon/>} title={'Snoozed'} number={48} />
      <SideBarOptions isActive={false} icon={<LabelImportantIcon/>} title={'Important'} number={14} />
      <SideBarOptions isActive={false} icon={<SendIcon/>} title={'Sent'} number={32} />
      <SideBarOptions isActive={false} icon={<InsertDriveFileIcon/>} title={'Drafts'} number={8} />
      <SideBarOptions  isActive={false} icon={<KeyboardArrowDownIcon/>} title={'More'} number={9} />
        <div className='sidebar__bottom'>
            <PersonIcon />
            <VideoChatIcon />
            <LocalPhoneIcon/>
    </div>

     </div>
      
  )
}

export default Sidebar