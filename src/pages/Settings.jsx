import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../components/common/DefaultLayout";
import { toast } from "react-toastify";

const Settings = () => {
  const [email, setEmail] = useState("teacher@example.com");
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleSave = () => {
    toast.success("Settings saved!");
    // Example POST request
    // axios.post('/api/settings', { email, emailNotifications })
    //   .then(() => toast.success("Settings saved!"))
    //   .catch(() => toast.error("Failed to save settings"));
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600 mb-8">
          Manage your account preferences, notifications, and integrations here.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Preferences</h2>

          <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <div className="flex items-center mb-6">
            <input
              id="emailNotifications"
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="emailNotifications" className="ml-2 text-gray-700 text-sm">
              Enable Email Notifications
            </label>
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
