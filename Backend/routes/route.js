import  express  from "express"
import SignUpUser from "../Controller/user-signup-controller.js"
import cors from "cors"
import SignInUser from "../Controller/user-sign-in-controller.js"

const router = express.Router()

router.use(cors())
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post("/sign-up",SignUpUser)
router.post("/login", SignInUser)

export default router