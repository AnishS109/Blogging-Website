import UserSchema from "../Model/UserSchema.js"
import TokenSchema from "../Model/TokenSchema.js"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { json } from "express"

const SignInUser = async(req,res) => {

  const {username,password} = req.body
  const ACCESS_SECRET_KEY = "hsdgcugchdgsbxcjgsxhslmkhxbnsggxnkgfkjwegzlkjwghdjhxgxjkg"
  const REFRESH_SECRET_KEY = "sxsjdiehiossienxutfbeisuzncuitbexnkjshzkdhbxjvhrdxnhsgdg"

  try {

    const user = await UserSchema.findOne({username})

    if(!user){
      return res.status(400).json({message: "Username is not Found"})
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if(matchPassword){

      const accessToken = jwt.sign(user.toJSON() , ACCESS_SECRET_KEY , {expiresIn:"15m"})
      const refreshToken = jwt.sign(user.toJSON() , REFRESH_SECRET_KEY)

      const newToken = await TokenSchema({ token:refreshToken })
      await newToken.save();

      return res.status(200).json({accessToken, refreshToken, name: user.name, username})

    }
    else{
      return res.status(400).json({message:"Password is Incorrect"})
    }
    
  } catch (error) {
    console.error("ERROR OCCURED IN LOGIN")
    res.status().json({message:"SOMETHING WENT WRONG"})
  }
}

export default SignInUser