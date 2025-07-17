import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultLayout from '../components/common/DefaultLayout';
import { toast } from 'react-toastify';

const ContentAnalyze = () => {
    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (file) {
      alert(`Analyzing: ${file.name}`);
    } else {
      alert("Please select a file.");
    }
  };



  return (
    <DefaultLayout>
      <div className="min-h-screen  flex flex-col items-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Content Analyzer</h1>
        <p className="text-gray-600 mb-8">
          Upload PDFs, images, or voice recordings. Our AI will analyze the materials and provide valuable feedback or outputs to assist your teaching.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upload Content</h2>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              mb-6"
          />
          <button
            onClick={handleAnalyze}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Analyze
          </button>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default ContentAnalyze;
