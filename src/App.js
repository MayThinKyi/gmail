import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes,Route,Link, useNavigate } from 'react-router-dom';
import EmailList from './components/EmailList';
import Email from './components/Email';
import ComposeBox from './components/ComposeBox';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { app } from './firebase';
import { useEffect, useState } from 'react';
import { login } from './userSlice';
function App() {
  const composeStatus = useSelector((state)=>state.composeStatus.value)
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const userRedux=useSelector((state)=>state.user.value)
  useEffect(() => {
         
    onAuthStateChanged(auth, (user) => {
  if (user) {
    dispatch(login({
      username: user.displayName,
      email: user.email,
      image:user.photoURL
    }))
  
    
  
  } 
   
  
    });
console.log('indide useeffect',userRedux);
  }, [])
    

 
return (
            <div className="app">
             {userRedux ?   <Router>
            <Header />
             <div className='main'>
         <Sidebar/>
          <Routes>
           
            <Route path='/' element={<EmailList />} />
            <Route path='/mail' element={<Email/>} />

          </Routes>
         
      </div>

        {composeStatus && <ComposeBox />}
         </Router> :<Login/>}
    </div>
    
        )
      
      
   
  
}

export default App;