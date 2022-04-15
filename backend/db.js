const mongoose=require('mongoose')

const url="mongodb://Pranjali:quorafores3@cluster0-shard-00-00.luarh.mongodb.net:27017,cluster0-shard-00-01.luarh.mongodb.net:27017,cluster0-shard-00-02.luarh.mongodb.net:27017/Quora?ssl=true&replicaSet=atlas-bp300j-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect= () => {
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log('MongoDB connected successfully')

    }).catch((error) => console.log("Error: ",error))
};