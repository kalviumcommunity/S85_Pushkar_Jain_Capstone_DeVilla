const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.DB_CONNECTION_SECRET;
    console.log("Connecting to:", uri);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
};

module.exports = connectDB;
