const { verify } = require("jsonwebtoken");

const validateToken = (req,res,next)=>{
    const accessToken = req.header("accessToken");
    console.log("valid",accessToken);
    if(accessToken==undefined)   return res.json({ error: "User not logged in!" });

    try {
        const validToken = verify(accessToken,"IMPSECRET")
        if(validToken) return next();   
    } catch (error) {
       return res.json({ error: err });
    }
}

module.exports = { validateToken}