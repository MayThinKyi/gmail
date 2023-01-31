import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Email = () => {
  const [mail,setMail] = useState({});
   const composeStatus = useSelector((state) => state.composeStatus.value);
        const email=useSelector((state)=>state.email.value)
 

        useEffect(() => {
          setMail(email);
          
        
},[])
  
  return (<div className='email__container'>
    <div className='email__bar'>
      <div className='email__barLeft'>
        <Link to='/'>
         <IconButton>
          <ArrowBackIcon />
          </IconButton>
        </Link>
        <IconButton>
          <MoveToInboxIcon />
      </IconButton>
        <IconButton>
           <InfoIcon />
     </IconButton>
        <IconButton>
          <DeleteIcon />
      </IconButton>
        <IconButton>
          <EmailIcon />
      </IconButton>
        <IconButton>
          <WatchLaterIcon />
      </IconButton>
        <IconButton>
          <CheckCircleIcon />
      </IconButton>
        <IconButton>
           <LabelImportantIcon />
     </IconButton>
        <IconButton>
          <MoreVertIcon/>
      </IconButton>
      </div>
      <div className='email__barRight'>
        <IconButton>
          <UnfoldLessIcon />
         </IconButton>
        <IconButton>
          <LocalPrintshopIcon />
      </IconButton>
        <IconButton>
          <ExitToAppIcon />
      </IconButton>
     </div>
    </div>
   {mail &&  <div className='email__section'>
      <div className='email__top'>
        <div className='email__topLeft'>
          <p className='email__subject'>{mail?.subject }</p>
        <p style={{display:'flex'}}>
          <LabelImportantIcon className='email__icon' />
            <p className='email__to'>{mail?.to }</p>
        </p>
       </div>
        <p className='email__time'>{mail?.time?.toString()}
</p>
      </div>
      <hr></hr>
      <div className='email__text'>
        <p>
           {mail?.text}
       </p>
      </div>
    </div> }
  </div>
    
  )
}

export default Email