// import React, { useState } from 'react';
// import './1Form.css'
// import axios from 'axios';

// let Form = () => {
// let [name,setName] = useState('');
// let [img,setImg] = useState('');
// let [price,setPrice] = useState('');
// let [desc,setDesc] = useState('');
// let [stock,setStock] = useState('');

// let handleSubmit = (e)=>{
//   e.preventDefault();

//   let prodata={
//     Name  : name,
//     Img   : img,
//     Price : price,
//     Desc  : desc,
//     Stock : stock
//   };
//   axios.post('http//localhost:7000/cp', prodata)
//   .then(()=>{
//     alert('Data created');
//   })
//   .catch(error=>{
//    console.error('Error creating:', error)
//    alert ('error will found')
//   })
// }




//   return (
//     <>
//     <div id="ffoo">
//  <form id="productForm" className="mt-3" onSubmit={handleSubmit}>
//         <div className="form-group pt-2">
//           <label htmlFor="Name"> Product Name </label>
//           <input
//             type="text" 
//             className="form-control" 
//             id="Name" 
//             name="Name"
//             required onChange={(e)=>setName(e.target.value)}
            
//             placeholder='Name of the product'/>
//         </div>


//         <div className="form-group pt-4">
//           <label htmlFor="Img">Image URL</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="Img" 
//             name="Img"
//             required onChange={(e)=>setImg(e.target.value)}
            
//             placeholder='place the image link'/>
//         </div>


//         <div className="form-group pt-4">
//           <label htmlFor="Price">Price</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="Price" 
//             name="Price"
//             required onChange={(e)=>setPrice(e.target.value)}
//             placeholder='in ruppe,dollor,dihrametc.,'/>
//         </div>


//         <div className="form-group pt-4">
//           <label htmlFor="Des">Description</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="Des" 
//             name="Des"
//             required onChange={(e)=>setDesc(e.target.value)}
//             placeholder='explain the porduct' />
//         </div>

//         <div className="form-group form-check pt-3">
//           <input 
//             type="checkbox" 
//             className="form-check-input"  
//             id="Stock" 
//             name="Stock"
//             required onChange={(e)=>setStock(e.target.value)} />
//           <label className="form-check-label" htmlFor="Stock">In Stock</label>
//         </div>

//         <button type="submit " className="btn btn-primary"  id='bbttn'>Submit</button>
//       </form>
//       </div>

    
    
    
//     </>
//   )
// }
// export default Form;



import React, { useState } from 'react';
import './1Form.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

let Form = () => {


let Navi = useNavigate()


    let [name, setName] = useState('');
    let [img, setImg] = useState('');
    let [price, setPrice] = useState('');
    let [desc, setDesc] = useState('');
    let [stock, setStock] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();

        let prodata = {
            Name: name,
            Img: img,
            Price: price,
            Desc: desc,
            Stock: stock
        };

        axios.post('http://localhost:7000/cp', prodata)
            .then(() => {
                alert('Data created');
            })
            .catch(error => {
                console.error('Error creating:', error);
                alert('An error occurred while creating the data');
            });


Navi("/")

    };

    return (
        <div id="ffoo">
            <form id="productForm" className="mt-3" onSubmit={handleSubmit}>
                <div className="form-group pt-2">
                    <label htmlFor="Name">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Name"
                        name="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name of the product'
                    />
                </div>

                <div className="form-group pt-4">
                    <label htmlFor="Img">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Img"
                        name="Img"
                        required
                        onChange={(e) => setImg(e.target.value)}
                        placeholder='Place the image link'
                    />
                </div>

                <div className="form-group pt-4">
                    <label htmlFor="Price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Price"
                        name="Price"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='In rupees, dollars, dirhams, etc.'
                    />
                </div>

                <div className="form-group pt-4">
                    <label htmlFor="Desc">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Desc"
                        name="Desc"
                        required
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder='Explain the product'
                    />
                </div>

                <div className="form-group form-check pt-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="Stock"
                        name="Stock"
                        onChange={(e) => setStock(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="Stock">In Stock</label>
                </div>

                <button type="submit" className="btn btn-primary" id='bbttn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
