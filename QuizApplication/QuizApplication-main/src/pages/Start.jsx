import { useState } from "react";
import img from "../images/exam.jpg";
import { useNavigate } from "react-router-dom";
import Category from "./../components/Category";

const Start = () => {
  const [valid, setValid] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    category: "",
    type: "",
  });

  const handleData = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    if (data.name === "" || data.category === "" || data.type === "") {
      setValid("Please fill all the input field...");
    } else {
      setValid("");
      navigate("/home", { state: { ite: data } });
    }

    setData({
      name: "",
      category: "",
      type: "",
    });
  };

  return (
    <>
      <div className="bg-[#343964]  lg:h-screen px-4 py-4">
        <div className=" py-[8px]">
          <h1 className="font-bold text-center text-[#fff] text-4xl">
            Quiz Application
          </h1>
        </div>
        <hr className="border-2 border-solid my-2" />
        <div className="lg:flex  justify-center items-center gap-[40px] space-y-8 lg:space-y-0  lg:h-[600px]  w-4/5 mx-auto lg:my-[35px]">
          <div className="w-full  lg:h-full mt-[20px] sm:mt-0">
            <img src={img} alt="" className="w-full h-full" />
          </div>
          <div className="w-full lg:h-full border-2 border-[#fff] px-[40px]  py-[40px] rounded-xl">
            <form
              action=""
              className=" h-[500px] lg:h-full relative"
              onSubmit={submitData}
            >
              <h1 className="font-semibold text-center text-3xl text-[#fff]">
                Registration Form
              </h1>
              <hr className="border-2 my-4 border-solid" />
              <h1 className="font-semibold text-lg text-[#fff]">Enter Name:</h1>
              <input
                type="text"
                className="w-full px-2 py-2 rounded-lg my-[20px] "
                placeholder="Enter Name..."
                onChange={handleData}
                name="name"
                value={data.name}
              />
              <h1 className="font-semibold text-lg text-[#fff]">
                Select Category:
              </h1>

              <select
                name="category"
                className="w-full px-2 py-2 rounded-lg my-[20px]"
                onChange={handleData}
                value={data.category}
              >
                <option>select</option>
                {Category.map((cat) => {
                  return (
                    <option value={cat.value} key={cat.category}>
                      {cat.category}
                    </option>
                  );
                })}
              </select>
              <h1 className="font-semibold text-lg text-[#fff]">
                Select Type:
              </h1>
              <select
                name="type"
                className="w-full px-2 py-2 rounded-lg my-[20px]"
                onChange={handleData}
                value={data.type}
              >
                <option>select</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <p className="text-center text-[red] font-semibold">{valid}</p>
              <button
                className="absolute w-full bottom-0 bg-[#fff] text-[#343964] px-3 py-1 rounded-md active:bg-[#fff] cursor-pointer active:text-[#343964] font-bold hover:bg-[#343964] hover:text-[#fff] border-2 hover:border-[#fff]"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
