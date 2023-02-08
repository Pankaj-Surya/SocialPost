const express = require("express")
const router = express.Router();
const { Users } = require("../models")
const bcrypt = require("bcrypt")
const {sign} =  require("jsonwebtoken")
//add user
router.post("/", async (req, res) => {
    const { username, password, name } = req.body;
    const hash = await bcrypt.hash(password, 10)
    await Users.create({
        name: name,
        username: username,
        password: hash,
    });
     return res.json("success")
})


router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } })
    
    if (!user) return res.json({ error: "User Doesn't Exist" });

    console.log(user)

    const match =await bcrypt.compare(password, user.password);
    console.log("match : ",match)
    if (!match) return res.json({ error: "Wrong Username And Password Combination" });
    const accessToken =  sign({username:user.username,id:user.id},"IMPSECRET")
    //sessionStorage.setItem("accessToken", accessToken);
    res.json(accessToken)

}
)

module.exports = router