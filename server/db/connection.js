const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});

const connectDB = async () => {
    try {
        //cnn string
        const cnn = await mongoose.connect(process.env.MONGO_URI);
        // mongoose.set('strictQuery', true);
        //mongoose.set('useNewUriParser', true);
        // mongoose.set('useUnifiedTopology', true);
        // mongoose.set('useFindAndModify', false);
        // mongoose.set('useCreateIndex', true);

        console.log(`mongoDB cnn: ${cnn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;