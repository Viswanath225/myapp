const setPassword=async(req,res)=>{
    const {password,conformPassword}=req.body
    console.log("Your password is :", req.body);
    if(password != conformPassword){
        return res.status(400).json({message:"Passwords do not match"})
    }
    res.status(200).send("Password has been set successfully.");
}
module.exports={setPassword}