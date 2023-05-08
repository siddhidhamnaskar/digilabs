import logo from "./Media/logo.png"
import './App.css';
import {useState,useEffect} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';

function App() {
  const [data,setData]=useState([]);
 
  const [json, setJson]=useState()

  useEffect(()=>{
    fetch("https://digilab-backend-rgs6.onrender.com/")
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      console.log(json);
       setData(json);
    })

  },[json])

  

  const deleteData=(id)=>{
      fetch(`https://digilab-backend-rgs6.onrender.com/${id}`,{
        method:"DELETE",
        headers:{
          "Content-type":"application/json"
        }
      })
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
        setJson(json)
       
      })
      
      
  

    
  }

  const buttonStyle={
    width: "15%",
    height: "40px",
    fontSize: "25px",
    border: "none",
    backgroundColor:"#437EF7",
    color: "white"

  }


  return (
    <div className="App">
      <div>
         <img className="lookscout" src={logo}></img>
      <table>
        <thead>
           <th>Name</th>
           <th>Email</th>
           <th>Delete</th>
        </thead>
        {
          data.map((elem,i)=>{
           return <tbody>
            <tr>
              <td>{elem.Name}</td>
              <td>{elem.Email}</td>
              <td><button onClick={()=>deleteData(elem._id)}> Delete</button></td>
            </tr>
          </tbody>

          })
        }
      
      </table>
      </div>
    </div>
  );
}

export default App;
