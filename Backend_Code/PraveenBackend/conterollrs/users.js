const signup=async(req,res,next)=>{
    try{
        const {firstName,LastName,email,contact}=req.body;
        console.log("recived data",req.body)
        if(email){
          // res.redirect('http://localhost:3000/api/v1/conformMail')
          res.status(200).send("success")
    
        }else{
          res.status(400).json({message:'Please fill all the fields'})
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("An error occurred while sending the verification email.");
    }
}


const verifyMail=async (req,res)=>{
    const { token } = req.query;
  if (token) {
    console.log("verified")
    link="http://cicd002.s3-website.ap-south-1.amazonaws.com/api/v1/set-password"
    res.redirect(link);
    // res.status(200).json({ message: 'Verified', link:link });
  } else {
    res.status(400).send("Invalid or missing verification token.");
  }
}
module.exports={signup,verifyMail}