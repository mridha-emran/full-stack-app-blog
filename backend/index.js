const express = require("express");
const app = express();
const dotenv=require("dotenv")
const mongoose = require("mongoose");
const authRouter=require("./routes/auth");
const userRouter=require("./routes/user")
const postRouter=require("./routes/post")
const catagoriesRouter=require("./routes/catagories")
const multer=require("multer");
const cors = require("cors")
const path = require("path");

dotenv.config({
    
})




mongoose.connect(process.env.DB, {useNewUrlParser: true,})
.then(() => {
	console.log("Connected to MongoDB !");
});

app.use(cors())
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});


	  const upload = multer({ storage: storage });
	  app.post("/upload", upload.single("file"), (req, res) => {
		res.status(200).json("File has been uploaded");
	  });
	app.use("/auth",authRouter)
	app.use("/user",userRouter)
	app.use("/post",postRouter)
	app.use("/catagories",catagoriesRouter)

    app.listen( process.env.PORT,()=>( console.log("this server listing port:8000")))
