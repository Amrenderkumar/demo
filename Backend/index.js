import express from 'express';


const app  = express();

const call = [];

app.use(express.json());


app.post('/call', (req,res) => {
    call.push(req.body);
    res.status(201).json({ message: 'Call data received successfully!' });
})

app.get('/call', (req,res) => {
    res.status(200).json({ message: 'Call data  created', call: call});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

