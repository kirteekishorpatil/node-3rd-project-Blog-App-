const express=require('express')
const { singup, login, logout,} = require('../controller/users')
const { post_table}=require('../controller/post_table')
const { verify } = require('crypto')
const { auth } = require('../controller/athentication')
const { like_dislike } = require('../controller/like_dislike')
const router=express.Router()
   
router.post('/singup',singup)
router.get('/login',login)
router.delete('/logout',logout)
router.post('/posdata',auth,post_table)
router.post('/likedislike_data',auth,like_dislike)




module.exports=router