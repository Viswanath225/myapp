const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

const conformMail=async (req,res)=>{
    const {email}=req.body
    const verificationToken = uuidv4();
        VERIFICATION_URL='http://3.110.221.63:3000/api/v1/verify'
        const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "engineerviswanathkumar@gmail.com", 
            pass: "megg jwmp weka ayiw",  
        },
        });
        const verificationLink = `${VERIFICATION_URL}?token=${verificationToken}`;

        const mailOptions = {
        from: ' engineerviswanathkumar@gmail.com', 
        to: `${email}`, 
        subject: "Email Verification",
        html: `<h3>Hello praveen,</h3>
                <p>Thank you for signing up. Please click the link below to verify your email address:</p>
                <a href="${verificationLink}">Verify your email</a>
                <p>If you didn't sign up, please ignore this email.</p>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            message:"Verification email sent. Please check your inbox.",
            VerificationLink:verificationLink
        });
}
module.exports={conformMail}