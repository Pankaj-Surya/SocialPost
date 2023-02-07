const express = require('express')
const app = express()
const db = require('./models')
var cors = require('cors')


app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())



//Routers
const postRouter = require("./routes/Posts")
app.use("/posts",postRouter)


db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("server runnin g on port")
    });
});


