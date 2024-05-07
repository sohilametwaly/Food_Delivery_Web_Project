import { assets } from "../../assets/assets"
import { useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"

const Add = () => {

    const url ="http://localhost:3000"
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category:"Salad"
    })

    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }

    const onSubmitHandler = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success){ 
            setData({
                name: "",
                description: "",
                price: "",
                category:"Salad"
            })
            setImage(false)
           toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }

    }

    return (
        <div className="pl-10 pt-5 text-gray-500 max-w-5/6">
            <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
                <div className="flex flex-col gap-2">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={ image ?URL.createObjectURL(image): assets.upload_area} alt=""className="hover:cursor-pointer max-w-60 max-h-20" />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required  className="w-1/2"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type Here" className="border border-gray-500 border-5 rounded-l rounded-r p-1 text-black" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" required className="border border-gray-500 border-5 rounded-l rounded-r p-1 text-black"></textarea>
                </div>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-2">
                        <p>Product category</p>
                        <select name="category"className="border border-gray-500 border-5 rounded-l rounded-r p-1 text-black" onChange={onChangeHandler} value={data.category}>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desert">Desert</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Product price</p>
                        <input type="number" required name="price" placeholder="$20" className="border border-gray-500 border-5 rounded-l rounded-r p-1 text-black" onChange={onChangeHandler} value={data.price}/>
                    </div>
                </div>
                <button type="submit" className="border border-gray-500 border-5 rounded-l rounded-r p-1 w-1/2 bg-black text-white">Add</button>
            </form>
        </div>
    )
}

export default Add
