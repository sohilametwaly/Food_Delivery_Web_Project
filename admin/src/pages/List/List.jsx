import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"

const List = () => {

    const url = "http://localhost:3000"
    const [list, setList] = useState([])
    
    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)
        if (response.data.success) {
            setList(response.data.data)
        } else {
            toast.error("Error")   
        }
    }

    const removeItem = async (foodId) => { 
        const response = await axios.post(`${url}/api/food/remove`, { id:foodId })
        if (response.data.success) {
            toast.success(response.data.message)
            await fetchList()
        } else {
            toast.error("Error")
        }
    }
    
    useEffect(() => {
        fetchList()
    }, [])
       

    return (

        <div className="w-3/4 flex flex-col p-3 gap-2">
            <p className="text-gray-500 font-bold">All Foods List</p>
            <table className=" border-solid border-2 rounded-l p-1 text-gray-500">
                <thead >
                <tr className="bg-gray-50 border-b-2 " >
                    <th className="text-center">Image</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Category</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody className="">
                    {list.map((item, index)=>{
                        return (
                            <tr key={index} className="border-b-2">
                                <td className="flex items-center justify-center"><img src={`${url}/images/` + item.image} alt=""className="max-w-30 max-h-20 p-2 " /></td>
                                <td className="text-center">{item.name}</td>
                                <td className="text-center">{item.category}</td>
                                <td className="text-center">${item.price}</td>
                                <td className="text-center hover:cursor-pointer hover:bg-gray-100 font-bold" onClick={()=>removeItem(item._id)}>X</td>
                            </tr>
                        )
                    })}
               </tbody>
            </table>
        </div>

       
    )
}

export default List
