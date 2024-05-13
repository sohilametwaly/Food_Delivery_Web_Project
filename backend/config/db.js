import mongoose from "mongoose";

export const connceDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://foodDelivery:33858627@cluster0.dpdqpka.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
