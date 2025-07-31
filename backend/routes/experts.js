const router = require('express').Router();
const Expert = require('../models/Expert');

router.get('/', async (req,res)=>{
  const experts = await Expert.find();
  res.json(experts);
});

router.post('/', async (req,res)=>{
  try{
    const expert = await Expert.create(req.body);
    res.json(expert);
  }catch(err){res.status(400).json({error:err.message});}
});

module.exports = router;
