const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);   
        console.log('Connected to Database');
    } catch (error) {
        console.log('MongoDB Connection Fail!');
        process.exit(1);
    }
}

module.exports = connectToDatabase;