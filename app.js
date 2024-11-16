const express=require('express')
const userRouter=require('./Routes/user.routes');
const dotenv=require('dotenv');
const connectToDB=require('./config/db')

connectToDB();
dotenv.config();


const app=express();

app.set('view engine','ejs');
app.use(express.json())//inbuilt middlewares
app.use(express.urlencoded({extended:true}))//inbuilt middlewares 

app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})