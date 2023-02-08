
#Configuratiom
1.npm init -y -> create package.json
2.create index.js and mention in package.json 
  "main": "index.js",
npm i express nodemon cors mysql2 
3.npm i sequelize sequelize-cli
4.To create an empty project you will need to execute init comman
npx sequelize-cli init


# Q1. How to create table in db using sequel
1.create model for Post 
2.call the db.sequelize.sync() in index.js it will create all table if not exist in mysql


# Q2. AxiosError {message: 'Network Error', name: 'AxiosError'?
1.Add cors library using npm 
2.app.use(cors())

dd

# Q3.How to validata json webToken?
## On Backend validate token
created token on -> /login request
1.const accessToken =  sign({username:user.username,id:user.id},"IMPSECRET")
2.passed to res.json(accessToken)
3.created AuthMiddleware in middleware ->validate    request 
 3.1 get -> const accessToken = req.header("accessToken");
 3.2 verify 
 3.3 return to og fn



## On Login  - Frontend
1.get the accessToken from res.data
2.set -> sessionStorage.setItem("accessToken", accessToken);
and passed that middleware to 

## To use 
router.post('/',validateToken,async (req,res)=>{})



