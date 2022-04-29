const knex=require('../model/conection')
const like_dislike=(req,res)=>{
    knex.select("*").from('post_data').where("post_id","=",req.body.post_id)
       .then((data)=>{
           if(data.length===0){
               res.send({message:"post not exist"})
           }
           else{
            knex.select("*").from('likedislike').where({user_id:req.usrdata.user_id,post_id:req.body.post_id,}) 
               .then((data)=>{
                   console.log(data)
                    if (data.length>0){
                       res.send('you have olredy like/dislike post')
                   }
                   else{
                       knex('likedislike').insert({
                          user_id:req.usrdata.id,
                          post_id:req.body.post_id,
                          like:req.body.like,
                          dislike:req.body.dislike
                       })
                       .then(()=>{
                        knex.select("*").from('likedislike').where("post_id","=",req.body.post_id)
                           .then((likedata)=>{
                               res.send({
                                   message:"tou like/dislike post",
                                   post:likedata
                               })
                           }).catch((err)=>{
                               console.log(err);
                               res.status(404).json({message:"can not inserted"})
                           })
                       }).catch((err)=>{
                           res.send({massege:"post not found"})
                       })
                   }
               })
           }
       })
}
module.exports={like_dislike}