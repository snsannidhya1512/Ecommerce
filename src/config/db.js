const mongoose=require("mongoose")
const mongodbUrl="mongodb+srv://snsannidhya1512:Vrlbmm7sjxeggQVv@cluster0.rpykk9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
  return mongoose.connect(mongodbUrl)
}

module.exports={connectDb}