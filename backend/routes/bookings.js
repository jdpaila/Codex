const router = require('express').Router();
const Booking = require('../models/Booking');

router.post('/', async (req,res)=>{
  try{
    const booking = await Booking.create(req.body);
    res.json(booking);
  }catch(err){res.status(400).json({error:err.message});}
});

router.get('/user/:id', async (req,res)=>{
  const bookings = await Booking.find({user:req.params.id}).populate('expert');
  res.json(bookings);
});

module.exports = router;
