const express=require('express')
const router=express.Router()
const {signup,verifyMail}=require('../conterollrs/users')
const {setPassword}=require('../conterollrs/setPassword')
const {conformMail}=require('../conterollrs/conformMail')
const {userDataValidateChainableAPI}=require('../validationMiddleware/user')



router.post('/signup',userDataValidateChainableAPI,signup)
router.post('/set-password',setPassword)
router.post('/conformMail',conformMail)
router.get('/verify',verifyMail)
module.exports=router