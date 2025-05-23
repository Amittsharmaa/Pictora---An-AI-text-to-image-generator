import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Load .env first!




import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter  from './routes/imageRoutes.js';

console.log("CLIPDROP_API Key Loaded:", process.env.CLIPDROP_API ? "Yes" : "No");


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json())
app.use(cors());

await connectDB();


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send('API working'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  

console.log("CLIPDROP_API Key:", process.env.CLIPDROP_API);
