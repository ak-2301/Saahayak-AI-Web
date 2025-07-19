import React, { useState, useRef } from "react";
import DefaultLayout from "../components/common/DefaultLayout";
import { FaPlus, FaSlidersH, FaMicrophone, FaRegCommentDots } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
// You can move this CSS to your CSS/SCSS file if you want.
const recordingBarStyle = `
.sai-recording-bar {
  width: 100%;
  height: 8px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sai-pulse {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg,#4ade80,#22d3ee);
  width: 40px;
  animation: sai-pulse-anim 1s infinite alternate;
  opacity: 0.85;
}
@keyframes sai-pulse-anim {
  from { width: 20px; opacity: 0.6; }
  to   { width: 120px; opacity: 1; }
}
`;

const SaahayakAI = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setResponse(value.trim().toLowerCase() === "hi" ? "Hii" : "");
  };

  const handleMicClick = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Sorry, your browser does not support Speech Recognition.");
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setResponse(transcript.trim().toLowerCase() === "hi" ? "Hii" : "");
      };

      recognitionRef.current.onend = () => setRecording(false);
      recognitionRef.current.onstart = () => setRecording(true);

      recognitionRef.current.onerror = () => setRecording(false);
    }
    recognitionRef.current.start();
  };

  return (
    <DefaultLayout>
      {/* Inject our CSS for the recording bar */}
      <style>{recordingBarStyle}</style>

      <div className="flex flex-col h-screen text-gray-500 justify-center items-center px-4">
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

            <button
              className={`text-white mr-3 ${recording ? "text-green-400" : ""}`}
              onClick={handleMicClick}
              aria-label={recording ? "Listening..." : "Start recording"}
            >
              <FaMicrophone size={18} />
            </button>

            <button className=" rounded-full p-2">
             <IoMdSend size={20} className="text-white" />
            </button>
          </div>

          {/* Animated Recording Bar - only show while recording */}
          {recording && (
            <div className="sai-recording-bar">
              <div className="sai-pulse"></div>
            </div>
          )}

          {response && (
            <div className="mt-4 text-green-400 font-medium">Response: {response}</div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SaahayakAI;
