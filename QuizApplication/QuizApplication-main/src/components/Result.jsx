import img from "../images/gift2.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Result = ({ secure }) => {
  return (
    <>
      <div className="w-[320px] h-[400px] bg-[#fff]  rounded-xl grid place-items-center p-[10px] shadow-xl">
        <img src={img} alt="" className="  rounded-lg  h-[200px] w-[300px]" />
        <h1 className="font-bold text-2xl text-center">
          Congrats! You completed the quiz.
        </h1>
        <h1 className="font-bold ">You answer {secure}/10 correctly</h1>
        <Link
          to="/"
          className="bg-[#343964] text-white px-5 py-2 rounded-xl active:bg-[#343964] cursor-pointer active:text-white font-bold hover:bg-white hover:text-[#343964] border-2 hover:border-[#343964]"
        >
          Thank You!
        </Link>
      </div>
    </>
  );
};

Result.propTypes = {
  secure: PropTypes.number.isRequired,
};

export default Result;
