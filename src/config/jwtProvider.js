const jwt=require("jsonwebtoken")

const SECRET_KEY="ngfdbgjjasKLMKFDJjlsndjdsbfbbgjbjgfj"

const generateToken=(userId)=>{
  const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})

  return token;

}
const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY); // Corrected the syntax here
  return decodedToken.userId;
};


module.exports={generateToken,getUserIdFromToken}