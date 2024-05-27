import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("🚀 ~ Database connected successfully");
  } catch (error) {
    console.log("🚀 ~ dbConnect ~ error : ", error);
  }
};

export default dbConnect;
