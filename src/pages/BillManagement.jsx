import React, { useState } from "react";
import DefaultLayout from "../components/common/DefaultLayout";

const BillManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customerId: "",
    customer: "",
    date: "",
    status: "Paid",
    bills: [],
  });
  const [errors, setErrors] = useState({});

  const customers = [
    { id: "CUST001", name: "Shubham Kirana Store" },
    { id: "CUST002", name: "Ankit Traders" },
    { id: "CUST003", name: "Suman Store" },
  ];

  const [transactions, setTransactions] = useState([
    {
      customerId: "CUST001",
      customer: "Shubham Kirana Store",
      date: "06-07-2025",
      status: "Paid",
    },
    {
      customerId: "CUST002",
      customer: "Ankit Traders",
      date: "05-07-2025",
      status: "Due",
    },
    {
      customerId: "CUST002",
      customer: "Ankit Traders",
      date: "04-07-2025",
      status: "Due",
    },
    {
      customerId: "CUST003",
      customer: "Suman Store",
      date: "03-07-2025",
      status: "Paid",
    },
    {
      customerId: "CUST001",
      customer: "Shubham Kirana Store",
      date: "02-07-2025",
      status: "Paid",
    },
    {
      customerId: "CUST003",
      customer: "Suman Store",
      date: "01-07-2025",
      status: "Due",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFileChange = (e) => {
    setFormData({ ...formData, bills: Array.from(e.target.files) });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerId) newErrors.customerId = "Customer ID is required";
    if (!formData.customer) newErrors.customer = "Customer name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.bills.length) newErrors.bills = "Please upload at least one bill";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const newTransaction = {
      customerId: formData.customerId,
      customer: formData.customer,
      date: formData.date,
      status: formData.status,
    };

    setTransactions([newTransaction, ...transactions]);
    setShowForm(false);
    setFormData({
      customerId: "",
      customer: "",
      date: "",
      status: "Paid",
      bills: [],
    });
  };

  return (
    <DefaultLayout>
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold">Bill Management</h1>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {showForm ? "View Transactions" : "Upload Bill"}
          </button>
        </div>

        {showForm ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto"
          >
            <div>
              <label className="block font-medium mb-1">Customer ID</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={formData.customerId}
                onChange={(e) =>
                  setFormData({ ...formData, customerId: e.target.value })
                }
              />
              {errors.customerId && (
                <p className="text-red-500 text-sm mt-1">{errors.customerId}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Customer Name</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={formData.customer}
                onChange={(e) =>
                  setFormData({ ...formData, customer: e.target.value })
                }
              >
                <option value="">Select customer</option>
                {customers.map((cust) => (
                  <option key={cust.id} value={cust.name}>
                    {cust.name}
                  </option>
                ))}
              </select>
              {errors.customer && (
                <p className="text-red-500 text-sm mt-1">{errors.customer}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Date</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Status</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Paid">Paid</option>
                <option value="Due">Due</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">
                Upload Bill(s) (PDF/Image)
              </label>
              <div className="flex justify-center items-center bg-gray-500 p-4 rounded">
                <input
                  type="file"
                  multiple
                  accept="application/pdf,image/*"
                  onChange={handleFileChange}
                  className="w-full max-w-md text-white"
                />
              </div>
              {errors.bills && (
                <p className="text-red-500 text-sm mt-1">{errors.bills}</p>
              )}
              {formData.bills.length > 0 && (
                <div className="mt-2 bg-gray-100 rounded p-3">
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    {formData.bills.map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit Bill
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white shadow rounded-xl p-4 overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <table className="min-w-full text-sm text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Customer ID</th>
                  <th className="px-4 py-2 border">Customer</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((tx, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{tx.customerId}</td>
                    <td className="px-4 py-2 border">{tx.customer}</td>
                    <td className="px-4 py-2 border">{tx.date}</td>
                    <td
                      className={`px-4 py-2 border ${
                        tx.status === "Paid"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {tx.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default BillManagement;
