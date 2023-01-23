import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React,{useState} from "react";
import { json } from "react-router-dom";
import './css/AddProduct.css'
const Uupro = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const [error,setError] = useState(false)

    const prodata=async ()=>{
        console.log(name,price,category,company)
        
    }
    return (
        <>
            <section className="product py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
                            <div className="pro-content user-input">
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


                                    <button className='btn mt-3' type='submit' onClick={prodata}>Add Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Uupro;