import mongoose from 'mongoose';
const url="mongodb://localhost:27017/assesment_api";
mongoose.connect(url);
console.log("Successfully connected");
