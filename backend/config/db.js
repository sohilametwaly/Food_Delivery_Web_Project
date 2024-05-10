import mongoose from "mongoose"

export const connceDB = async () => {
    await mongoose.connect("mongodb+srv://basantmo:basantot@cluster0.qdo800u.mongodb.net/?").then(()=>console.log("DB Connected"))
}