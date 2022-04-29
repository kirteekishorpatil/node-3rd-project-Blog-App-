
const knex=require('../model/conection')

const post_table=(req,res)=>{
    const data={
        user_id:req.usrdata.user_id,
        post_id:req.body.post_id,
        title:req.body.title,
        text:req.body.text
    }
    knex("post_data").insert(data).then(()=>{
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        // console.log("Data does not inserted")
        res.send({message:"Data does not inserted",messge:err})
    })
    
}


module.exports={post_table}