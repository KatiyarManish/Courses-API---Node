# npm init

# npm i express dotenv

# npm i -D nodemon (dev dependencies)

# chnage Scripts - "Start":"NODE_ENV=production node server"

# change Scripts = "dev": "nodemon server"

===========================================================

# create config folder - create config.env file

# set NODE_ENV=development

# set PORT=5000

==========================================================

# create server.js file

# import express & dotenv

# load environment varaibles

# dotenv.config({path: './config/config.env})

# const app = express()

# const PORT = process.env.PORT || 5000 --if PORT is not available then use 5000

# app.listen(PORT,console.log("server running)) -- second parameter is a callback

### to Run the server in dev - npm run dev

### to Run prod - npm start --see package.json file

============================================================

##### GIT

# create .gitignore in root

# add node_modules, config/config.env in gitignore file

# git init & push code to git

# ================================================================

# create routes

# app.get("/",(req,res)=>{

    res.send('hello world')

})

# we can use json as well with status codes

app.get("/", (req, res) => {
res.status(201).json({ name: "brad" });
});

# create routes folder - Create new file

# move all routes to routes folder

# import express & Router package

# replace App.get & others to router.get varaibles

============================

# in server.js - import route files & mount them

# mount routers - app.use(path,router) --middleware

# remove routes /api/v1/bootcamps from router file

# export this module - module.exports=router

==============================================

##### Controllers

# create controller folder

# create new file

# we need to add methods & export it..it is like a middleware

exports.getBootcamps = (req,res,next) => {
res.status(200).send()
}

# create all methods then remove res.status.send line from server.js

# go to routes.js and delete all routes and destructure/import methods from controller

# use router.route("/").get(method).post(method)

# use router.route("/:id").get(method).put(method).delete(method)

==================================

# use morgan - middlware - for logger
