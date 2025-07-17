import DefaultLayout from '../components/common/DefaultLayout';
import heroImage1 from '../assets/hero1.jpeg';
import heroImage2 from '../assets/hero2.jpeg';
import heroImage3 from '../assets/hero3.jpeg';
export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className=" min-h-screen p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome to your personalized teacher dashboard. Get a quick overview of your schedule, upcoming tasks, and AI insights.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Weekly Overview */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Weekly Overview</h2>
            <p className="text-gray-600 mb-4">
              See your classes and appointments for the current week at a glance.
            </p>
            <img
              src={heroImage2}
              alt="Weekly Overview"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          {/* Monthly Progress */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Monthly Progress</h2>
            <p className="text-gray-600 mb-4">
              Track your teaching progress and student engagement over the month.
            </p>
            <img
              src={heroImage1}
              alt="Monthly Progress"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">AI Insights</h2>
            <p className="text-gray-600 mb-4">
              Discover AI-generated recommendations for lesson planning and student feedback.
            </p>
            <img
              src={heroImage3}
              alt="AI Insights"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Schedule</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Math Class - Grade 8</span>
              <span className="text-gray-500">Today, 10:00 AM - 11:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Science Lab - Grade 7</span>
              <span className="text-gray-500">Tomorrow, 01:00 PM - 02:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Parent-Teacher Meeting</span>
              <span className="text-gray-500">Wednesday, 03:00 PM - 04:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
