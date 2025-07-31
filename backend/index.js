const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/astro', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log('MongoDB connected')).catch(err=>console.log(err));

app.get('/', (req,res)=>{
  res.send('Astrology API running');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/experts', require('./routes/experts'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
