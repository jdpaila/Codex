const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Placeholder for Google OAuth/Mobile OTP
router.post('/register', async (req,res)=>{
  try {
    const {name, email, password, role} = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password:hash, role});
    res.json(user);
  } catch(err){res.status(400).json({error:err.message});}
});

router.post('/login', async (req,res)=>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) throw new Error('User not found');
    const match = await bcrypt.compare(password, user.password);
    if(!match) throw new Error('Invalid credentials');
    const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET || 'secret');
    res.json({token});
  } catch(err){res.status(400).json({error:err.message});}
});

module.exports = router;
