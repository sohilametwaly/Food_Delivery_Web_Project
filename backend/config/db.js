import mongoose from "mongoose"

export const connceDB = async () => {
    await mongoose.connect("mongodb+srv://petopet77:RENgKhVuAs6b08sS@cluster0.fwba76i.mongodb.net/?").then(()=>console.log("DB Connected"))
}