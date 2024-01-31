import { PiSpinnerBold } from "react-icons/pi";

const Loading = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <PiSpinnerBold className="animate-spin text-[50px] text-[#343964] font-bold" />
      </div>
    </>
  );
};

export default Loading;
