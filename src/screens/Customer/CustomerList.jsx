import React from 'react';

const CustomerList = ({ customers, onCustomerClick, currentPage, setCurrentPage }) => {
    const itemsPerPage = 5;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentCustomers = customers.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(customers.length / itemsPerPage);

    return (
        <div className="bg-white shadow rounded-xl p-4 overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Customer List</h2>
            <table className="min-w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Phone</th>
                        <th className="px-4 py-2 border">Firm</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCustomers.map((cust) => (
                        <tr
                            key={cust.customerId}
                            className="hover:bg-gray-50 cursor-pointer"
                            onClick={() => onCustomerClick(cust)}
                        >
                            <td className="px-4 py-2 border">{cust.customerId}</td>
                            <td className="px-4 py-2 border">{cust.customerName}</td>
                            <td className="px-4 py-2 border">{cust.phoneNo}</td>
                            <td className="px-4 py-2 border">{cust.firmName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-end mt-4 space-x-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-400 text-white hover:bg-gray-700'
                        }`}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`px-3 py-1 rounded ${currentPage === idx + 1
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-400 text-white hover:bg-gray-700'
                        }`}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default CustomerList;
