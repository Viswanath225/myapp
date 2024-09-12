const express= require('express')
const cors=require('cors')
const app = express()
const port = 3000
const userRouter=require('./routes/users')
app.use(express.json())

app.use(cors({
    origin: 'http://cicd002.s3-website.ap-south-1.amazonaws.com', // Specify the React app's URL
    methods: ['GET', 'POST',], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
  }));

app.use('/api/v1',userRouter)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})