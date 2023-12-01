import mongoose from "mongoose";

export default () => {
  const connect = async () => {
    mongoose.Promise = global.Promise;

    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/hospital-assistant", {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("****************************");
      console.log("*    Starting Server");
      console.log(`*    Port: 3001`);
      console.log(`*    Database: MongoDB`);
      console.log(`*    DB Connection: OK\n****************************\n`);
    } catch (err) {
      console.log("Failed connecting to mongodb: %o", err);
    }
  };
  connect();

  mongoose.connection.on("error", (err) => {
    console.log("Connection error: %o", err);
  });
  mongoose.connection.on("disconnected", connect);
};
