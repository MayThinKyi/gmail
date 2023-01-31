import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux';
import { setStatus } from '../composeStatusSlice';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import {addDoc, collection, doc,serverTimestamp,setDoc} from 'firebase/firestore'
import { app, db } from '../firebase';
import { getAuth } from 'firebase/auth';
const ComposeBox = () => {
    const auth = getAuth(app);
    const [gmails, setGmails] = useState([]);
    const schema = yup.object().shape({
        to: yup.string().email().required(),
        subject: yup.string().required(),
        message:yup.string().required()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });
   
    const composeStatus = useSelector((state) => state.composeStatus.value);
    const dispatch = useDispatch();
    const onSubmitHandler = async (data) => {
        data.userId = auth?.currentUser.uid;
        data.timestamp=serverTimestamp()
        const dbRef = collection(db, 'emails');
      await addDoc(dbRef, data).then(docRef => {
          console.log("Document has been added successfully");
         
})
.catch(error => {
    console.log(error);
})
        dispatch(setStatus(!composeStatus))
    }
    useEffect(() => {
      
},[])
    return (<div className='compose__box'>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
             <div className='compose__boxHeader'>
            <p>Send Message</p>
            <p onClick={()=>dispatch(setStatus(!composeStatus))}>
                <CloseIcon className='closeBtn' /> 
           </p>
        </div>
        <div className='compose__inputContainer'>
            <input {...register('to')} type='email'  placeholder='To' />
                <p style={{color:'red'}}>{errors.to?.message }</p>
                <input {...register('subject')} placeholder='Subject' />
                 <p style={{color:'red'}}>{errors.subject?.message }</p>

                <textarea {...register('message')} placeholder='Message...'>
                </textarea>
                  <p style={{color:'red'}}>{errors.message?.message }</p>

        </div>
        <div className='compose__boxFooter'>
    <Button type='submit' variant="contained">Send</Button>
        </div>
       </form>
  </div>
  )
}

export default ComposeBox