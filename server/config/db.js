
const mongoose = require("mongoose");

const MONGOURI = "mongodb://localhost:27017/app"

// const MONGOURI = "mongodb+srv://qasimfida:passpass@cluster0.798cb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;