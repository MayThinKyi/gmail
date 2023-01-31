import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const EmailListSections = () => {
  return (<div className='emailList__sections'>
      <div className='emailList__sectionsItem' style={{borderBottom: '3px solid red'}}>
          <InboxIcon  />
        <p>Primary</p>
      </div>
      <div className='emailList__sectionsItem' >
          <GroupIcon  />
        <p style={{color:'grey'}}>Social</p>
      </div>
      <div className='emailList__sectionsItem' >
          <LocalOfferIcon  />
        <p style={{color:'grey'}}>Promotions</p>
        </div>
    </div>
  )
}

export default EmailListSections