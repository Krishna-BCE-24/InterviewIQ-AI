import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log("MONGO 👉", process.env.MONGODB_URI);
        mongoose.set('bufferCommands', false); // 🔥 ADD THIS

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("DataBase Connected");
    } catch (error) {
        console.log(`DataBase Error ${error}`);
        process.exit(1);
    }
};

export default connectDb;