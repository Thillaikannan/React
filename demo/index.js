import express from "express";
import cors from "cors";


const app = express();

// app.use(express());
app.use(cors());
app.use(express.json());
const PORT = 4000;

app.post('/rides', (req,res) => {
    console.log("Data Recieved:" , req.body);
    res.status(201).json({message: "Ride request received successfully!", ride: req.body});
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
