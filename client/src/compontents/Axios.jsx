import axios from 'axios';
import React, {useEffect,useState} from 'react';





 const Axios1 = () => {

let [FetchData, SetData] = useState([])
console.log(FetchData);


useEffect(()=>{

    axios.get("http://localhost:7000/")
    .then((response)=>{
        SetData(response.data);
    })

    .catch((e)=>{
        console.log("Fetched Failed",e);
    })
}, [])

  return (
   <>
   
<div>

    {FetchData.map((Data)=>{

return(

    <div className="card" key={{}} style={{width:"18rem",display:"inline-block",margin:"5px"}}>
    <div className="card-header">
    <h4>{Data.Name}</h4>
      
      <div className="card-body">
      <img src={Data.Img} alt="" srcSet="" className='img-fluid'  />  
        <h5>Price:{Data.Price}</h5>
        <p className='lead'>{Data.Desc}</p>
        <small className={Data.Stock == true ?"bg-success text-white p-2 rounded":"bg-danger text-white p-2 rounded"}>{Data.Stock == true ?"Available":"OutOfStock"}</small>
        
        

      </div>


    </div>
  </div>


)


    })}
</div>



  
   
   </>
  )
}

export default Axios1;