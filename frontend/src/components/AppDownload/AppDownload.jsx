import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="flex flex-col gap-4 justify-center item-center p-5 w-[50%] m-auto"
      id="AppDownload"
    >
      <h1 className="font-custom text-[40px] font-bold text-center">
        For Better Experience Download Tomato App
      </h1>
      <div className="flex gap-2 justify-center items-center hover:cursor-pointer">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
