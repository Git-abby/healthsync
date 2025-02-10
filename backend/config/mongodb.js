import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });
  // await mongoose.connect(`${process.env.MONGODB_URL}/healthsync`);
  await mongoose.connect(process.env.MONGODB_URL, {
    dbName: "healthsync",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
