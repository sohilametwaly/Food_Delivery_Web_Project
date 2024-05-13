import { assets } from "../../assets/frontAssets/assets";

const Footer = () => {
  return (
    <div
      className=" bg-[#323232] flex flex-col item-center gap-[20px] font-custom text-[#d9d9d9]   p-[5%] pr-0 max-h-[450px] m-0 mt-20  justify-center"
      id="Footer"
    >
      <div className="grid grid-cols-3 gap-[10%]">
        <div className=" flex flex-col gap-3">
          <img src={assets.logo} alt="" className="max-w-[30%]" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            suscipit, dicta dolore ipsam possimus hic perferendis expedita
            eveniet laborum error natus culpa, rem exercitationem corporis quos
            nobis corrupti quis vel.
          </p>
          <div className="flex gap-2 hover:cursor-pointer ">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div>
          <h2 className="capitalize font-bold text-[25px]">Company</h2>
          <ul>
            <li className="list-disc">Home</li>
            <li className="list-disc">About Us</li>
            <li className="list-disc">Delivery</li>
            <li className="list-disc">Privacy Ploicy</li>
          </ul>
        </div>
        <div>
          <h2 className="capitalize font-bold text-[25px]">get in touch</h2>
          <ul>
            <li className="list-disc">+1-234-567-891</li>
            <li className="list-disc">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="self-center w-[80%] bg-gray" />
      <p className="text-center font-bold">
        Copyright 2024 © Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
