import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.set('bufferCommands', false); // 🔥 ADD THIS

        await mongoose.connect(process.env.MONGO_URI);

        console.log("DataBase Connected");
    } catch (error) {
        console.log(`DataBase Error ${error}`);
        process.exit(1);
    }
};

export default connectDb;