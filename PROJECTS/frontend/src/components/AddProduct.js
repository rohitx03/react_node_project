import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './css/AddProduct.css'

const AddProduct = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const [error,setError] = useState(false)
    const navigate = useNavigate();

    const prodata=async ()=>{
        console.log(!name)
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch('http://localhost:5000/addproduct',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{'Content-Type':'application/json'}
        });
        result = await (await result).json();
        if(result){
            navigate('/list')
        }
        console.log(result)
        
    }
    return (
        <>
            <section className="product py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12">
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            <div className="pro-content user-input">
                                <h1 className="text-center">Add product</h1>
                                <div className="user-input .input-color-box ">
                                    <input type='text'placeholder="Enter Product Name" value={name} 
                                    onChange={(e)=>{setName(e.target.value)}}></input>
                                    {error && !name &&
                                    <span className="text-danger fw-bold mx-3">Enter valid Name</span>}

                                    <input type='text'placeholder="Product Prize"  value={price} 
                                    onChange={(e)=>{setPrice(e.target.value)}} ></input>
                                    {error && !price &&
                                    <span className="text-danger fw-bold mx-3">Enter valid Price</span>}

                                    <input type='text'placeholder="Product Category"  value={category} 
                                    onChange={(e)=>{setCategory(e.target.value)}} ></input>
                                    {error && !category &&
                                    <span className="text-danger fw-bold mx-3">Enter valid Category</span>}

                                    <input type='text'placeholder="Product Company"  value={company} 
                                    onChange={(e)=>{setCompany(e.target.value)}}></input>
                                    {error && !company &&
                                    <span className="text-danger fw-bold mx-3">Enter valid Company</span>}

                                    <button className='btn mt-3' type='submit' onClick={prodata}>Add Product</button>
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
export default AddProduct;