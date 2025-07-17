import React from 'react';
import { FiPlus } from 'react-icons/fi';
import DefaultLayout from '../components/common/DefaultLayout';

const days = ['Sunday', 'Mon', 'Tuo', 'Wed', 'Thu', 'Pri', 'Sat'];
const times = ['5 AM', '6 AM', '10 AM', '11 AM'];

const ScheduleManager = () => {
  return (
    <DefaultLayout>
    <div className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Schedule Management</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <FiPlus />
            Add Schedule
          </button>
        </div>

        <div className="overflow-auto">
          <div className="grid grid-cols-8 border-t border-l text-center">
            <div className="border-b border-r p-2 font-semibold bg-blue-100"> </div>
            {days.map((day, index) => (
              <div key={index} className="border border-blue-100 p-2 font-semibold">
                {day}
              </div>
            ))}
          </div>

          {times.map((time, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-8 h-20 border-l border-t">
              <div className="border-b border-r text-sm p-2 font-medium text-gray-600 bg-blue-50">{time}</div>

              {days.map((day, colIndex) => {
                const isScheduleHere = time === '10 AM' && day === 'Thu';

                return (
                  <div
                    key={colIndex}
                    className={`border border-blue-100 relative ${
                      isScheduleHere ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    {isScheduleHere && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-semibold">
                        <span>3:00 AM</span>
                        <span>Target AI</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default ScheduleManager;
