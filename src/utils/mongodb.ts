import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const configMongoose = () => {
  const { DATABASE_URL } = process.env;
  mongoose.Promise = Promise;
  mongoose.connect(DATABASE_URL);
  mongoose.connection.once("open", () =>
    console.log(
      `Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.db.databaseName}`
    )
  );
  mongoose.connection.on("close", () => console.log("connection closed"));
  mongoose.connection.on("error", (err) =>
    console.error(`connection error ${err}`)
  );
};

export default configMongoose;
