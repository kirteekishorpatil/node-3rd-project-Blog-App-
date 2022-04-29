const express=require('express')
const bcrypt=require('bcrypt')
const knex=require('../model/conection')
const jwt=require('jsonwebtoken')

const singup=(req,res)=>{
    const hash=bcrypt.hashSync(req.body.Password,10)
    const data={
        Name:req.body.Name,
        Password:hash,
        Email_id:req.body.Email_id
    }
    knex("data_meraki").insert(data).then(()=>{
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        console.log("Data does not inserted")
    })
    
}
const login=(req,res)=>{
    knex.from('data_meraki').select("*").where('Email_id',"=",req.body.Email_id)

    .then((details)=>{
        if(details.length===0){
            res.send({message:'User not exist'})
        }else{
        
            var compare = bcrypt.compareSync(req.body.Password,details[0].Password)
            if(compare===false){
                res.send({message:'Invalid Email/password'})
            }else{
                const token=jwt.sign({id:details[0].id},"kirteepatil",{expiresIn:"90h"})
                console.log(token)
                res.cookie('user',token)
                res.send({message:'Login Succesfully!',
                data:details,
                token:token})
            }
        }
        // console.log(details)
    })
}
const logout=(req,res)=>{
    res.clearCookie("token")
    res.send({message:"you have logged successfully"})
}

module.exports={singup,login,logout}
