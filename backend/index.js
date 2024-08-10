// const express =require('express');
// const cors = require('cors');
// const connectDB =require('./config/db');
// const userRoutes =require('./routes/userRoute')

// const app = express();
// app.use(cors());
// const PORT = process.env.PORT || 3002;

// connectDB();

// app.use('/api/users', userRoutes);

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// })
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

connectDB();

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
