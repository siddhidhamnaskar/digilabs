import logo from "./Media/logo.png"
import './App.css';
import {useState,useEffect} from 'react'

import LinearIndeterminate from "./Component/progress";
import { base_url } from "./Services/API";

function App() {
  const [data,setData]=useState([]);
  const [load,setLoad]=useState(true);
  const [json, setJson]=useState()
  const [file,setFile]=useState("");
  
  useEffect(()=>{
    fetch(`${base_url}/`)
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      // console.log(json);
       setData(json);
       setLoad(false)
    })

   

  },[json])

  

  const deleteData=(id)=>{
    setLoad(true)
      fetch(`${base_url}/${id}`,{
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
  console.log(file[0]);
   const logo=new FormData();
   logo.set('file',file[0])
    fetch(`${base_url}/post`,{
      method:"POST",
      body:logo,
      credentials:'include'

    })
    .then((res)=>{
       res.json().then((json)=>console.log(json))
    })
   
      
  }

  


  return (
   
    <div className="App">
     { load ? <LinearIndeterminate/>:<div className="logo_update"><h2>Logo Update</h2><input type="file" onChange={(e)=>setFile(e.target.files)}></input> <button style={{width:"10%",marginTop:"20px",background:"blue",color:"white",cursor:'pointer'}} onClick={updateImage}>Update</button></div>}
      <div>
       
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
