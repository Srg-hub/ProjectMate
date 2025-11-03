const mongoose = require('mongoose');

const connectionHandler = async () => {
  try {
    const mongoURI = process.env.MONGO_URL || 'mongodb://localhost:27017/project_handler';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectionHandler;
