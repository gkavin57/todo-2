const mongoose = require("mongoose");
module.exports = mongoose.connect(
  "mongodb+srv://kavin:kavin123@cluster0.ewcnsyq.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(`Error in DB Connection ${err}`);
    console.log(`MongoDB connection suceeded`);
  }
);

// 2CQniovQzNFssKa9
