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
const [wrongUserName , setWrongUserName] = useState(false)
const [userIsAuthenticated , setuserIsAuthenticated] = useState(false);

const info = {
    userName : 'admin',
    passWord : '33333'
}

const submitHandler = (e) => {
    
    if(userName === '' || password === ''){
        return alert('no emty fields')
    }

    if(userName !== info.userName && userName !=='Admin'){
        setWrongUserName(true);
        if(password == info.passWord){
            setWrongPass(false);
        }
        return 
    }
   
    if(password !== info.passWord){
      setWrongPass(true);
        if(userName == info.userName || userName =='Admin'){
            setWrongUserName(false);
        }
        return
    }

    setWrongPass(false);
    setWrongUserName(false);
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
     <input placeholder='User Name'  onChange={(e) => e.target.value === '' ? setWrongUserName(false) : setUserName(e.target.value)} className={`${wrongUserName == true ? 'border-[1px] border-solid border-[#ff4a4a] placeholder:text-[#ee4444]' : ''}`}></input>
     <input placeholder='Password ... '  onChange={(e) => e.target.value === '' ? setWrongPass(false) : setPassword(e.target.value)}  type='password'  className={`${wrongPass == true ? 'border-[1px] border-solid border-[#ff4a4a] placeholder:text-[red]' : ''}`}></input>
    {wrongUserName && <p className='mx-auto my-1 text-[#ff4f4f] tracking-wider apearanimation'>Wrong user name !</p>}
    {wrongPass && <p className='mx-auto my-1  text-[#ff4f4f] tracking-wider apearanimation'>Wrong password!</p>}
     <button onClick={submitHandler}>Enter</button>

</div>}

{userIsAuthenticated && 
<>
<img className='mx-auto w-[10%] mt-8 boxshadow rounded-[50%] apearanimation' src={done}></img>
<p className='text-[#aed7f1] mx-auto mt-3 tracking-[1px] text-[1.5rem] apearanimation boxshadow p-[0.5rem] rounded-[15px]'>Custom neon Pannel</p>
</>
} 

</div>
</>
    )
}

export default Intro ;