import mongoose from 'mongoose';


const connectDB = async () => {

  try {
    await mongoose.connect('mongodb+srv://user:123@test.usotc.mongodb.net/zentask?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }

}

export default connectDB;