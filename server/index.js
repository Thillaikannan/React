import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/auth.js';


const app = express();

dotenv.config();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
mongoose.set("strictQuery", false);


app.get('/', (req,res) => {
    res.send("Hello its working");
})

app.use('/auth', userRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> 
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    })
)
.catch((error) => {
    console.log(error.message);
})