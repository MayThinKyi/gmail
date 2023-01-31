import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../emailSlice';
const EmailRow = ({  to, subject, text, time }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClickFun = () => {
        dispatch(setEmail({
        to: to,
        subject: subject,
        text: text,
        time:time
        }))
        navigate('/mail')
    }
    return (<div onClick={onClickFun} className='email__row'>

       
        <div className='email__rowLeft'>
             <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
            <div style={{ display: 'flex',flexWrap:'wrap'}}>
                <LabelImportantIcon /> <p className='sender'>{ to}</p>
       </div>
        </div>
        <div className='email__rowMiddle'>
           
            <p className='subject'>{subject}</p> 
            <p className='text'>{text}</p>
        </div>
        <div className='email__rowRight'>
            <p >  {time }</p>
        </div>
        
  </div>
   
  )
}

export default EmailRow