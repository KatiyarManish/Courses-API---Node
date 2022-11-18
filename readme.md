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

===================================

# create new env in Postman

# create a collection in postman and crrate folder and then save all routes below that folder

===================================================

###### DB config - altas or compass

=================================================

###### install Mongoose - used for object modelling

# in config folder - create db.js

# import Moongoose

# create function to create DB with async await

# in config.js - create Mongo_URI

const connectDB = async () => {
const conn = await mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;

=======================================================

# import in server.js and call this method

===========================================

# what if we pass wrong password of db..we can use try catch or create a global promise rejection handler in server.js

# handle unhandled promise rejection

```
process.on("unhandledRejection", (err, promise) => {
  console.log(`the error is: ${err.message}`);
  // close server & exit process
  server.close(() => process.exit(1));
});

```

=====================================

# install colors package for console

# console.log(`server is running on ${PORT}`.red.bold)

===========================================

###### Create first model

# import mongoose

# create fields

# slug fields, validations ,

# GeoJson libabry for longitude/lattitude

# create all the fields module.exports = mongoose.models("Courses",<PassSchema>)

==========================================================================

## Crud functionality on one Schema

# in controller.js file - import models

# in order to use req.body during post request, we need body parser middleware

# app.use(express.json())

# 1- Create data in db

```
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
};

```

# we cant crrate same name or email ids in DB as these may be unique so we need to add entire code in try catch block. later we will create custom error handler. we will also use a middleware later on so we don't need to wrap our code in try catch block

```
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

```

# Get All data

```
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

```

# get single record

```
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcampbyid = await Bootcamp.findById(req.params.id);
    res.status(200).send({ success: true, data: bootcampbyid });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

```

# Update

```
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: bootcamp });
};

```

# delete

```
exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: { msg: "deleted" } });
};

```

============================================================

## Error Handling using express

# craete middleware folder and error.js file

# in this , create a middleware

```
const errorHandler = (err, req, res, next) => {
  // console log for dev help
  console.log(err.stack);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};

module.exports = errorHandler;

```

# note that each middleware can be run by App.use()

# add app.use(errorHandler) in server.js

# controller.js - add in catch block - next(error)

```
exports.getBootcamp = async (req, res, next) => {
 try {
   const bootcampbyid = await Bootcamp.findById(req.params.id);
   if (!bootcampbyid) {
     return res.status(400).json({ success: false });
   }
   res.status(200).json({ success: true, data: bootcampbyid });
 } catch (error) {
   next(error);
 }
};

```

===============================================

# Custom Error response class - create utils folder - create errorResponse file

```
class errorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = errorResponse;
```

# chnage error.js

```
const errorHandler = (err, req, res, next) => {
  // console log for dev help
  console.log(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Sever Error",
  });
};

module.exports = errorHandler;

```

# in Controller.js - add in all methods accoridng to need

next(
new errorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)

============================================================

# we will now remove errorResponse from here and move it to error.js

## IMP handle all in error.js -- then use errorResponse class -- then use next() in controller.js

## IMP we can handle errors using express validators (Brad Mern) or mongoose (Brad Node)

=====================================

## code cleanup with Async await in express middleware

# create another file called asyncHandler and write method - and import it on controller.js

===================================

# Mongoose middleware and slugify

# mongoose middleware ..also called as pre and post hooks in mongoose

# npm i slugify

# import in models - bootcamp.js

```
BootcampSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

```

=====================

# developer.mapquest.com

# create account

# create key

# npm i node-geocoder
