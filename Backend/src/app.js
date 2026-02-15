import express from 'express';
import Notes from '../models/user.model.js';

const app = express();


app.use(express.json());

app.post('/notes', async (req, res) => {
    const data = req.body;
   await Notes.create({
        title: data.title,
        description: data.description
    });
    res.status(201).json({ message: 'Notes created successfully!' });
})

export default app;































// const call = [];
// app.post('/call', (req,res) => {
//     call.push(req.body);
//     res.status(201).json({ message: 'Call data received successfully!' });
// })

// app.get('/call', (req,res) => {
//     res.status(200).json({ message: 'Call data  created', call: call});
// })

// app.delete('/call/:index', (req,res)=> {
//     const index = req.params.index;
//     delete call[ index ];
//     res.status(200).json({ message: 'Call data deleted successfully!' });
// })

// app.patch('/call/:index', (req,res) => {
//     const index = req.params.index;
//     const phone = req.body.phone;
//     call[ index ].phone = phone;
//     res.status(200).json({ message: 'Call data updated successfully!' });
// })

// const rani = [];

// app.post('/rani', (req,res) => {

//     rani.push(req.body);
//     res.status(201).json({ message: 'Rani data received successfully!' });
// })

// app.get ('/rani', (req,res)=> {
//     res.status(200).json({ message: 'Rani data created', rani: rani});
// })

// app.delete('/rani/:index',(req,res)=> {
//     const index = req.params.index;
//     delete rani[index ];
//     res.status(200).json({ message: 'Rani data deleted successfully!' });
// })

// app.patch('/rani/:index', (req,res)=> {
//     const index = req.params.index;
//     const title = req.body.title;
//     rani[index].title = title;
//     res.status(200).json({ message: 'Rani data updated successfully!' });
// })

