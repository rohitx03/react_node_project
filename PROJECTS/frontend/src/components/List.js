import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const List = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async ()=>{
        let result =await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    console.log(products)
    const deletepro= async (id)=>{
        let result =await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        })
        result = await result.json();
        if(result){
        getProducts();

        }
    }
    return (
        <>
            <section className="list py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <h1 className="text-center">Products List</h1>
                        <div className='list-content text-center'>
                            <ul>
                                <li><b>S.No</b> </li>
                                <li><b>Name</b></li>
                                <li><b>Price</b></li>
                                <li><b>Category</b></li>
                                <li><b>Operation</b></li>
                            </ul>
                            {
                                products.map((item,index)=>
                                    <ul>
                                    <li>{index+1}</li>
                                    <li>{item.name}</li>
                                    <li>$ {item.price}</li>
                                    <li>{item.category}</li>
                                    <li><span onClick={()=>deletepro(item._id)}
                                    style={{cursor:"pointer",color:"red",padding:"5px",fontSize:"18px"}}
                                    ><i class="bi bi-trash3-fill"></i></span>
                                    
                                    <NavLink to={'/up-product/'+item._id} style={{cursor:"pointer",color:"green",padding:"5px",fontSize:"18px"}}><i class="bi bi-shift-fill"></i></NavLink>
                                    </li>
                                </ul>
                                )
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default List
