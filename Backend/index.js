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

app.delete('/call/:index', (req,res)=> {
    const index = req.params.index;
    delete call[ index ];
    res.status(200).json({ message: 'Call data deleted successfully!' });
})

app.patch('/call/:index', (req,res) => {
    const index = req.params.index;
    const phone = req.body.phone;
    call[ index ].phone = phone;
    res.status(200).json({ message: 'Call data updated successfully!' });
})

const rani = [];

app.post('/rani', (req,res) => {

    rani.push(req.body);
    res.status(201).json({ message: 'Rani data received successfully!' });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

