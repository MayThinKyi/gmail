import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ComposeBox from './ComposeBox'
import EmailListSections from './EmailListSections'
import EmailListSettings from './EmailListSettings'
import EmailRow from './EmailRow'
import Sidebar from './Sidebar'
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { app, db } from '../firebase'
import { getAuth } from 'firebase/auth'
const EmailList = () => {
        const auth = getAuth(app);
        const dispatch = useDispatch();
        const composeStatus = useSelector((state) => state.composeStatus.value);
        const [gmails, setGmails] = useState([]);
        const [userId, setUserId] = useState('');
               let newGmails = [];

        useEffect(() => {
               const getDocsFun = async () => {
         const q = query(collection(db, "emails"),orderBy('timestamp','desc'));

                const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
      
        newGmails.push(doc.data())
});
                       setGmails(newGmails)
                      
                } 
                getDocsFun()
                
        },[newGmails])

        return (<div className='emailList__container'>
               
      <EmailListSettings/>
        <EmailListSections />
                {gmails && gmails.map((m, key) => {
                     
                    return <EmailRow  key={key} id={m.mailId} to={m.to} subject={m.subject} text={m.message} time={new Date(m?.timestamp?.seconds * 1000).toString()}  />
            })}  
           
       
    </div>
  )
}

export default EmailList