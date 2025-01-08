import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shubhampatel:shubhampatel@cluster0.peri3.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
