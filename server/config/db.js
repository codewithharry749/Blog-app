// FiNMibqxIqODiHMO

// 'mongodb + srv://mtankmtank265:<password>@cluster0.g9riwio.mongodb.net/?retryWrites=true&w=majority'

const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://mtankmtank265:FiNMibqxIqODiHMO@cluster0.g9riwio.mongodb.net/?retryWrites=true&w=majority";
    try {
        const connect = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log(`MongoDB connected : ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};