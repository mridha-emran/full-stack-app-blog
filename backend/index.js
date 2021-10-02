const express = require("express");
const app = express();
const dotenv=require("dotenv")
const mongoose = require("mongoose");
const authRouter=require("./routes/auth");
const userRouter=require("./routes/user")
const postRouter=require("./routes/post")

dotenv.config({
    path:"./config.env"
})

app.use(express.json())


mongoose.connect(process.env.DB, {useNewUrlParser: true,})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

	app.use("/auth",authRouter)
	app.use("/user",userRouter)
	app.use("/post",postRouter)

    app.listen( process.env.PORT,()=>( console.log("this server listing port:8000")))
