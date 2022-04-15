const express=require('express')
const router=express.Router();
const questionDB=require('../models/Question')

router.post('/',async(req,res) =>{
    console.log(req.body)
    try{
        await questionDB.create({
            questionName: req.body.questionName,
        }).then(() => {
            res.status(201).send({
                status:true,
                message:"Question added"
            })
        }).catch ((err)=> {
        res.status(400).send({
            status :false,
            message:"Bad request"
        })
    })
}catch(e){
    res.status(500).send({
        status:false,
        message:"Error while adding question"
    });
}
});
router.get('/', async(req,res)=>
{
  try{
      await questionDB.aggregate([
          {
              $lookup: {
              from: "answers",
              localField:"_id",
              foreignField:"questionId",
              as: "allAnswers" //output array field 
              }

          }
      ]).exec().then((doc) => {
          res.status(200).send(doc)
      }).catch((error)=>{
          res.status(500).send({
              status:false,
              message:"Question details error"
          })
      })
  }  catch(e){
      res.status(500).send({
          status:false,
          mesage:"unexpected error"
      })
    }
})
module.exports=router;