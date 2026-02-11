import express from 'express';
import userRoutes from './routes/user.route.js';

const app  = express();
app.use(express.json());

// Import routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

