import logo from "./Media/logo.png"
import './App.css';
import {useState,useEffect} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';

function App() {
  const [data,setData]=useState([]);
  const [disable1,setDisable1]=useState(true)
  const [disable2,setDisable2]=useState(true)

  useEffect(()=>{
    fetch("https://digilab-backend-rgs6.onrender.com/")
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      console.log(json);
       setData(json);
    })

  },[])

  const prevData=()=>{

  }

  const nextData=()=>{

  }

  const deleteData=(index)=>{
      
    const Data=data.filter((elem,i)=>{
      return i!==index;
    })

    setData(Data);
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
      <div className="buttons" >
       <button disabled>Prev</button>
       <button >Next</button>
     
      </div>
       
      </div>
    </div>
  );
}

export default App;
