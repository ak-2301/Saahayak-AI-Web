import { Link } from 'react-router-dom'
import DefaultLayout from '../components/common/DefaultLayout'

export default function Dashboard() {
    return (
        <DefaultLayout>
            <div className="p-6 space-y-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link
                        to="/customers"
                        className="bg-white p-4 rounded-xl shadow cursor-pointer hover:bg-gray-50 block"
                    >
                        <div className="text-purple-600 text-lg font-semibold">Customers</div>
                        <div className="text-2xl font-bold">8</div>
                    </Link>

                    <Link
                        to="/sales"
                        className="bg-white p-4 rounded-xl shadow cursor-pointer hover:bg-gray-50 block"
                    >
                        <div className="text-blue-600 text-lg font-semibold">Sales</div>
                        <div className="text-2xl font-bold">8</div>
                    </Link>

                    <div className="bg-white p-4 rounded-xl shadow">
                        <div className="text-orange-500 text-lg font-semibold">Outstanding Balance</div>
                        <div className="text-2xl font-bold">5</div>
                    </div>
                </div>

                {/* Two-Column Section: Recent Bills & Customers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Recent Bills */}
                    <div>
                        <div className="font-semibold text-gray-800 mb-4">Recent Bills</div>
                        <div className="bg-white p-4 rounded-xl shadow space-y-4">
                            <div className="flex justify-between pb-2 border-b border-gray-200 items-center">
                                <div>
                                    <div className="font-medium">Shubham Kirana Store</div>
                                    <div className="text-sm text-gray-500">06-07-2025</div>
                                </div>
                                <div className="text-green-600 font-medium">Paid</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium">Shubham Kirana Store</div>
                                    <div className="text-sm text-gray-500">06-07-2025</div>
                                </div>
                                <div className="text-green-600 font-medium">Paid</div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Customers */}
                    <div>
                        <div className="font-semibold text-gray-800 mb-4">Recent Customers</div>
                        <div className="bg-white p-4 rounded-xl shadow space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium">Ravi Traders</div>
                                    <div className="text-sm text-gray-500">Joined: 05-07-2025</div>
                                </div>
                                <div className="text-purple-600 font-medium">Active</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium">Anjali Stores</div>
                                    <div className="text-sm text-gray-500">Joined: 04-07-2025</div>
                                </div>
                                <div className="text-purple-600 font-medium">Active</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
