import UserSchema from "../Model/UserSchema.js"


export const SignUpUser = async(req,res) => {

  const {name,username,password} = req.body

  try {

    const ExistUsername = await UserSchema.findOne({username})
    if (ExistUsername){
      return res.status(400).json({message:"Username already exists"})
    }

    const newUser = new UserSchema({
      name,
      username,
      password
    })
    await newUser.save()

    return res.status(200).json({message:"Succesfully Registered"})
    
  } catch (error) {
    
    console.error("Error while Registering",error)
    return res.status(500).json({message:"Error while Registering"})
    
  }
}

export default SignUpUser;