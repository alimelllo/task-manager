import React from 'react';
import classes from  './Intro.module.css';
import lock from '../../icons/lock.png';
import done from '../../icons/done.svg';
import { useState } from 'react';

const Intro = (props) => {

// check if user is authenticated or not
const [userName , setUserName] = useState('');
const [password , setPassword] = useState('');
const [wrongPass , setWrongPass ] = useState(false);
const [userIsAuthenticated , setuserIsAuthenticated] = useState(false);

const info = {
    userName : 'admin',
    passWord : '33333'
}

const submitHandler = () => {
    
    if(userName === '' || password === ''){
        return alert('no emty fields')
    }

    if(userName !== info.userName && userName !=='Admin'){
        return alert('wrong user name')
    }
   
    if(password !== info.passWord){
        setWrongPass(true);
        return
    }
    setuserIsAuthenticated(true);
    setTimeout(() => {
        props.userIsLogged(true);
      }, 3000);
    
    

}

    return (
<>
<div className={classes.container}>

<div className={classes.header}>
    <p>Custom Neon Pannel</p>
</div>

{!userIsAuthenticated && <div className={classes.form}>
    <img className={classes.logo} src={lock}></img>
     <input placeholder='User Name...'  onChange={(e) => setUserName(e.target.value)} value={userName}></input>
     <input placeholder={`${wrongPass ? 'Wrong Passwrod ...' : 'Password...'}`}  onChange={(e) => setPassword(e.target.value)} value={password} type='password'  className={`${wrongPass ? classes.wrongpass : ''}`}></input>
     <button onClick={submitHandler}>Enter</button>

</div>}

{userIsAuthenticated && 
<>
<img className='mx-auto w-[10%] mt-8 boxshadow rounded-[50%] apearanimation' src={done}></img>
<p className='text-[#aed7f1] mx-auto mt-3 tracking-[1px] text-[1.5rem] apearanimation boxshadow p-[0.5rem] rounded-[15px]'>Welcome :)</p>
</>
} 

</div>
</>
    )
}

export default Intro ;