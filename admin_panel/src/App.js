// import logo from "./Media/logo.png"
import './App.css';
import {useState,useEffect} from 'react'

import LinearIndeterminate from "./Component/progress";
import { base_url } from "./Services/API";


function App() {
  const [inputs,setInputs]=useState([]);
  const [load,setLoad]=useState(true);
  const [json, setJson]=useState()
  const [file,setFile]=useState("");
  const [data,setData]=useState([]);
  const [text,setText]=useState("");
  
  useEffect(()=>{
    fetch(`${base_url}/`)
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      // console.log(json);
       setInputs(json);
       setLoad(false)
    })
    fetch(`${base_url}/logo`)
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      console.log(json);
      setData(json)
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


  
  

  const updateImage=(e)=>{
  // console.log(file[0]);
  e.preventDefault();
   const logo=new FormData();
   logo.set('file',file[0])
    fetch(`${base_url}/post`,{
      method:"POST",
      body:logo,
     

    })
    .then((res)=>{
      setJson("")
        alert("Updated Successfully")
    })
    
  
   
      
  }

  const updateText=()=>{
    const textData={
      text:text
    }

    fetch(`${base_url}/text`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(textData)
    })
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      console.log(json);
      alert("Updated Successfully")
    })

  }

  const buttonStyle={
    width:"30%",
    marginTop:"20px",
    background:"blue",
    color:"white",
    cursor:'pointer'

  }


  return (
   
    <div className="App">
     { load ? <LinearIndeterminate/>:
            <div className="logo_update"> 
            <div>
            <h2>Logo Update</h2>
            <input type="file" onChange={(e)=>setFile(e.target.files)}></input> 
            <button style={buttonStyle} onClick={updateImage}>Update</button>
            </div>
               <div>
               <h2>Button Text Update</h2>
               <input type="text" onChange={(e)=>setText(e.target.value)}></input>
               <button style={buttonStyle} onClick={updateText}>Update</button>
                </div>
              </div>

     }
      <div>
      {data.map((singleData) => {
        const base64String = btoa(new Uint8Array(singleData.img.data.data).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
      }, ''));
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
    
      <table>
        <thead>
           <th>Name</th>
           <th>Email</th>
           <th>Delete</th>
        </thead>
        {
          inputs.map((elem,i)=>{
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
