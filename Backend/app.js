import express from "express"
import ConnectionDB from "./database/database.js"
import router from "./routes/route.js"
import SignInUser from "./Controller/user-sign-in-controller.js"
import SignUpUser from "./Controller/user-signup-controller.js"
// import getImage from "./Controller/getImage-controller.js"

const app = express()

app.use("/",router)
app.use("/login",SignInUser)
app.use("/register",SignUpUser)
// app.use("/file",getImage)

const PORT = 5000
app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
})

ConnectionDB()