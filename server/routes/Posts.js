const express = require("express")
const router = express.Router();
const {Posts} = require("../models")

//console.log(Posts)

router.get('/allPost',async (req,res)=>{
  const allPost =await Posts.findAll();
  res.json(allPost)
})

router.post('/',async (req,res)=>{
    const post = req.body;
    console.log("post : ",post)
    await Posts.create(post)
    res.json(post)
})

module.exports = router;

