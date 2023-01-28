import React from 'react'

const SideBarOptions = ({icon,title,number,isActive}) => {
  return (<div className={isActive?'sidebar__optionContainer active' :'sidebar__optionContainer '}>
          <div className='sidebar__optionLeft'>
          {icon}
          <p>{title}</p>
      </div><p className='sidebar__optionNumber'>{number }</p>
          </div>
        
      
  )
}

export default SideBarOptions