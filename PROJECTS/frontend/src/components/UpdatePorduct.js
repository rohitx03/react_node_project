import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import './css/AddProduct.css'
const UpdatePorduct = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      getProdouct();
    },[])

    const getProdouct = async ()=>{
      console.log(params)
      let result = await fetch(`http://localhost:5000/product/${params.id}`,{})
      result = await result.json();
      setName(result.name)
      setPrice(result.price)
      setCategory(result.category)
      setCompany(result.company)
    }

    const updatapro=async ()=>{
        console.log(name,price,category,company)
        let result = fetch(`http://localhost:5000/product/${params.id}`,{
          method:"put",
          body:JSON.stringify({name,price,category,company}),
          headers:{"Content-Type":"application/json"}
        });
        result = await (await result).json();

        console.log(result);
        if(result){

            navigate('/list')
        }
        
    }
    return (
        <>
            <section className="product py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <div className="pro-content user-input input-color-box ">
                                <h1 className="text-center">Update product</h1>
                                <div className="user-input">
                                    <input type='text'placeholder="Enter Product Name" value={name} 
                                    onChange={(e)=>{setName(e.target.value)}}></input>


                                    <input type='text'placeholder="Product Prize"  value={price} 
                                    onChange={(e)=>{setPrice(e.target.value)}} ></input>


                                    <input type='text'placeholder="Product Category"  value={category} 
                                    onChange={(e)=>{setCategory(e.target.value)}} ></input>


                                    <input type='text'placeholder="Product Company"  value={company} 
                                    onChange={(e)=>{setCompany(e.target.value)}}></input>


                                    <button className='btn mt-3' type='submit' onClick={updatapro}>Add Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UpdatePorduct;