import express from "express"
import ConnectionDB from "./database/database.js"
import router from "./routes/route.js"

const app = express()

app.use("/",router)

const PORT = 5000
app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
})

ConnectionDB()