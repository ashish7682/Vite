import { useEffect, useState } from "react";
// import Data from "../components/Data";
import PropTypes from "prop-types";
import Result from "./Result";
const Quiz = ({ item, name, category }) => {
  const [option, setOption] = useState([]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState();
  const [result, setResult] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const update = () => {
      if (item && item.length > 0 && item[count]) {
        const correctAnswer = item[count].correct_answer;
        const openList = [...item[count].incorrect_answers];
        openList.splice(
          Math.floor(Math.random() * (openList.length + 1)),
          0,
          correctAnswer
        );
        setOption(openList);
      }
    };
    update();
  }, [count, item]);

  const handleData = (data) => {
    setSelected(data);
    const correctAnswer = item[count].correct_answer;
    if (correctAnswer === data) {
      setResult(result + 1);
    }
  };

  const handleSelect = (ele) => {
    const correctAnswer = item[count].correct_answer;
    // console.log(correctAnswer);
    if (selected === ele && selected === correctAnswer) {
      return "text-[#E2E4F3] font-semibold bg-green-600 py-3 rounded-xl ";
    } else if (selected === ele && selected !== correctAnswer) {
      return "text-[#E2E4F3] font-semibold bg-red-600 py-3 rounded-xl";
    } else if (ele === correctAnswer) {
      return "text-[#E2E4F3] font-semibold bg-green-600 py-3 rounded-xl";
    }
  };
  const handleNext = () => {
    if (count > 8) {
      // alert(`You secured ${result} out of 10.`);
      setShowPopup(!showPopup);
    } else {
      setCount(count + 1);
      setSelected();
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen  bg-[#343964] px-4 py-2 relative ">
        <div
          className={
            showPopup
              ? "hidden"
              : "bg-gray-200 text-center px-10  sm:px-20   py-10 space-y-4 rounded-xl shadow-xl "
          }
        >
          <h1 className="font-bold text-2xl">Quiz Test</h1>
          <hr className=" border-solid border-2 border-[#343964]" />
          <h1 className="text-[#000] font-semibold text-xl">Welcome, {name}</h1>
          {/* <div className="grid grid-cols-3 sm:grid-cols-10 gap-2 place-items-center">
            {Data.map((ele, index) => {
              return (
                <div
                  className="bg-gray-500 text-[#E2E4F3] font-semibold w-[50px] h-[50px] rounded-full grid place-items-center key={index}"
                  key={index}
                >
                  {ele}
                </div>
              );
            })}
          </div> */}
          <div className="flex justify-between items-center font-bold">
            <h1>Category: {category}</h1>
            <h1>Score: {result}</h1>
          </div>
          <h1 className="font-bold">Question: {count + 1}</h1>
          <h1
            className="text-[#000] font-bold py-4 text-xl"
            dangerouslySetInnerHTML={{ __html: item[count].question }}
          ></h1>
          <div className="grid sm:grid-cols-2  gap-4">
            {option.map((ele, index) => {
              return (
                <button
                  className={`text-[#E2E4F3] font-bold bg-gray-500 py-3 rounded-xl sm:hover:bg-[#fff] sm:hover:text-gray-700 sm:active:bg-[gray] cursor-pointer sm:active:text-white sm:border-2 sm:hover:border-gray-700 ${
                    selected && handleSelect(ele)
                  }`}
                  key={index}
                  onClick={() => handleData(ele)}
                  disabled={selected}
                >
                  {ele}
                </button>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            className="bg-[#343964] text-white px-5 py-2 rounded-xl active:bg-[#343964] cursor-pointer active:text-white font-bold hover:bg-white hover:text-[#343964] border-2 hover:border-[#343964]"
          >
            {count < 9 ? "Next Question" : "Submit"}
          </button>
        </div>
      </div>
      <div
        className={
          showPopup
            ? "absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
            : "hidden"
        }
      >
        <Result secure={result} />
      </div>
    </>
  );
};

Quiz.propTypes = {
  item: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Quiz;
