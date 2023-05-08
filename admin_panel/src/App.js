import logo from "./Media/logo.png"
import './App.css';
import {useState,useEffect} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import LinearIndeterminate from "./Component/progress";

function App() {
  const [data,setData]=useState([]);
  const [load,setLoad]=useState(true);
  const [json, setJson]=useState()
  const [file,setFile]=useState("");
  const [Cover, setCover]=useState("");

  useEffect(()=>{
    fetch("https://digilab-backend-rgs6.onrender.com/")
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      // console.log(json);
       setData(json);
       setLoad(false)
    })

    fetch("https://digilab-backend-rgs6.onrender.com/logo")
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      console.log(json);
    })

  },[json])

  

  const deleteData=(id)=>{
    setLoad(true)
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
      
        setLoad(false)
        setJson(json)
       
      })
      
      
  

    
  }

  const updateImage=()=>{
    fetch('https://digilab-backend-rgs6.onrender.com/post',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:file[0]

    })
      
  }

  


  return (
   
    <div className="App">
     { load ? <LinearIndeterminate/>:<div className="logo_update"><h2>Logo Update</h2><input type="file" onChange={(e)=>setFile(e.target.files)}></input> <button style={{width:"10%",marginTop:"20px",background:"blue",color:"white",cursor:'pointer'}} onClick={updateImage}>Update</button></div>}
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
