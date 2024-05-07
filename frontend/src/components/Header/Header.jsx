const Header = () => {

    return (
        <div className="bg-cover bg-center h-[450px] bg-my-image rounded-[10px] font-custom " >     
            <div className="animate-[fadeIn_1s_ease-in] flex flex-col gap-[10%] text-white justify-end h-full pl-[5%] pb-[2%] " >
                <h2 className=" text-[45px]  w-[39%]">Order your favourite food here.</h2>
                <p className="text-[13px] w-[37%]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experince, one delicious meal at a time.</p>
                <button className="bg-white text-black w-[20%] h-[10%]  rounded-[20px] hover:text-[#ff6347] transition-[0.3s]">View Menu</button>
            </div>
        </div>
    )
}

export default Header
