import logo from './Files/logo.png';
import account from './Files/account.png'
import billing from './Files/billing.png'
import user from './Files/user.png'
import like from './Files/like.png'
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">

      </div>
        <div className="container">
            <div className="logoBox">
            <img className="lookscout" src={logo}></img>

            </div>
            <div className="stepper">
              <div className="cta">
              <div> 
               <div>
                <div style={{borderColor:" #437EF7"}}>
                  <img src={account}></img>
                
                </div >
                <hr className="hr"></hr>
                <p style={{color: " #437EF7"}}>Account</p>
                </div>
                
                <div>
                <div>
                  <img src={user}></img>
                 
                </div>
                <hr className="hr"></hr>
                <p style={{color: "#5F6D7E"}}>Personal</p>
                </div>

               <div>
               <div>
                  <img src={billing}></img>
                 
                </div>
                <hr className="hr"></hr>
                <p style={{color: "#5F6D7E"}}>Billing</p>
               </div>

              <div>
              <div>
                  <img src={like}></img>
                  
                </div>
                <p style={{color: "#5F6D7E"}}>Done</p>

              </div>
              </div> 
              </div>
             
              <div className="inputs">
               <div>
               <div>
                  <p className="Header">Name</p>
                  <input type="text" value="Bryan Koelpin" /><InfoOutlinedIcon sx={{marginLeft:"-35px",marginBottom:"-10px",color:"#5F6D7E"}}/>
                
                </div>
                <div>
                  <p className="Header">Email*</p>
                  <input  type="Email" placeholder='Email Address' /><InfoOutlinedIcon sx={{marginLeft:"-35px",marginBottom:"-10px",color:"#5F6D7E"}}/>
                  <p className='inst'>Please input a real Email Address</p>
                </div>
                <div className='password'>
                <div>
                  <p className="Header">Password*</p>
                  <input type="password" id="fullWidth" placeholder='Password' /> <InfoOutlinedIcon sx={{marginLeft:"-35px",marginBottom:"-10px",color:"#5F6D7E"}}/>
                  <p className='inst'>Please Enter Your Password</p>
                </div>
                <div >
                  <p className="Header">Confirm Password*</p>
                  <input type='password' id="fullWidth" placeholder='Confirm Password' /> <InfoOutlinedIcon sx={{marginLeft:"-35px",marginBottom:"-10px",color:"#5F6D7E"}}/>
                  <p className='inst'>Password need to match</p>
                </div>

                </div>

                <div className='accept' >
                   <Checkbox sx={{theme:"light"}} checked/>
               
                  <p className='Header'>I accept the Terms and Privacy Policy</p>
                </div>
                 
                 
                 </div>
              </div>
              <div className='footer'>
              <Button variant="contained" style={{textTransform:"none", fontSize:"15px", fontWeight:"600",marginBottom:"20px",marginRight:"50px"}} endIcon={<ArrowForwardIosIcon sx={{fontSize:"2px"}} />}> Next  </Button>
              </div>


            </div>
            </div> 
        
      </div>
  );
}

export default App;
