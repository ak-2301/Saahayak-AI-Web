import React, { useState } from "react";
import DefaultLayout from "../components/common/DefaultLayout";
import { FaPlus, FaSlidersH, FaMicrophone, FaRegCommentDots } from "react-icons/fa";

const SaahayakAI = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setResponse(value.trim().toLowerCase() === "hi" ? "Hii" : "");
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col h-screen  text-gray-500 justify-center items-center px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-8">What's on the agenda today?</h1>

        <div className="w-full max-w-3xl">
          <div className="relative flex items-center bg-gray-600 rounded-full px-4 py-3 shadow-md">
            <button className="text-white mr-4">
              <FaPlus size={16} />
            </button>

            <button className="text-white mr-4">
              <FaSlidersH size={16} />
            </button>

            <span className="mr-4 text-sm text-gray-300">Tools</span>

            <input
              type="text"
              placeholder="Ask anything"
              value={input}
              onChange={handleChange}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />

            <button className="text-white mr-3">
              <FaMicrophone size={18} />
            </button>

            <button className="bg-gray-700 rounded-full p-2">
              <FaRegCommentDots size={18} className="text-white" />
            </button>
          </div>

          {response && (
            <div className="mt-4 text-green-400 font-medium">Response: {response}</div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SaahayakAI;
