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
