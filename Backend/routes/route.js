import  express  from "express"
import SignUpUser from "../Controller/user-controller.js"
import cors from "cors"

const router = express.Router()

router.use(cors())
router.use(express.json())

router.post("/sign-up",SignUpUser)

export default router