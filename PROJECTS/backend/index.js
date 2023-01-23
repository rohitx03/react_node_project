const express = require('express');
require('./db/config.js');
const user = require('./db/user');
const app = express();
const cors = require('cors');
const product = require('./db/product');

app.use(express.json());
app.use(cors());

app.post('/signin', async(req,res)=>{
    let userr = new user(req.body)
    let result = await userr.save();
    result = result.toObject();
    delete result.pass;
    res.send(result)
});
app.listen(5000);

app.post('/login', async(req,res)=>{
    console.log(req.body);
    res.send(req.body);
    if(req.body.pass && req.body.email){
    let uuser = await user.findOne(res.body).select('-pass');
        if(uuser){
            res.send(uuser);
        } else{
            res.send({result : "No user Found"});
        }
}else{
    res.send({result : 'No user Found '})
}
})


app.post('/addproduct', async(req,res)=>{
    let products = new product(req.body);
    let result = await products.save();
    res.send(result)
})

app.get('/products',async(req,res)=>{
    let product1 =await product.find();
    if(product1.length>0){
        res.send(product1)
    }else{
        res.send({result:"No product Found"})
    }
})

app.delete('/product/:id', async (req,res)=>{
    const result =await product.deleteOne({_id:req.params.id})
    res.send(result);

})

app.get('/product/:id', async (req,res)=>{
    let result = await product.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }else{
        res.send({result:"No recod found"});
    }
})

app.put('/product/:id', async (req,res)=>{
    let result  = await product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(result)

})
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send("This is your Backend")
// });
// app.listen(6060);