const router = require('express').Router();
const Expert = require('../models/Expert');

router.get('/experts', async (req,res)=>{
  const experts = await Expert.find();
  res.json(experts);
});

router.put('/experts/:id/approve', async (req,res)=>{
  try{
    const expert = await Expert.findByIdAndUpdate(req.params.id,{approved:true},{new:true});
    res.json(expert);
  }catch(err){res.status(400).json({error:err.message});}
});

module.exports = router;
