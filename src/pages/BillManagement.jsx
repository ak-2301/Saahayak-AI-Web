import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../components/common/DefaultLayout";
import { toast } from "react-toastify";

const BillManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customerId: "",
    image: "",
    date: "",
    totalAmount: "",
    status: "PAID",
  });

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const billsPerPage = 5;

  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredBills =
    statusFilter === "ALL"
      ? bills
      : bills.filter((bill) => bill.status === statusFilter);

  const paginatedBills = filteredBills.slice(
    (currentPage - 1) * billsPerPage,
    currentPage * billsPerPage
  );

  const totalPages = Math.ceil(filteredBills.length / billsPerPage);

  const fetchBills = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/bills");
      setBills(response.data);
      setLoading(false);
    } catch (err) {
      toast.error("Failed to fetch bills");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.customerId) newErrors.customerId = "Customer ID is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.totalAmount || isNaN(formData.totalAmount))
      newErrors.totalAmount = "Valid total amount is required";
    if (!formData.image.trim()) newErrors.image = "Bill image URL is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      await axios.post("http://localhost:8080/api/bills", {
        ...formData,
        totalAmount: parseFloat(formData.totalAmount),
      });

      toast.success("Bill uploaded successfully!");
      setShowForm(false);
      fetchBills();
      setFormData({
        customerId: "",
        image: "",
        date: "",
        totalAmount: "",
        status: "PAID",
      });
    } catch (error) {
      toast.error("Failed to upload bill");
      console.error(error);
    }
  };

  // const paginatedBills = bills.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );
  // const totalPages = Math.ceil(bills.length / itemsPerPage);

  return (
    // <DefaultLayout>
    //   <div className="p-6">
    //     <div className="flex justify-between items-start mb-6">
    //       <h1 className="text-3xl font-bold">Bill Management</h1>
    //       <button
    //         onClick={() => setShowForm((prev) => !prev)}
    //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    //       >
    //         {showForm ? "View Bills" : "Upload Bill"}
    //       </button>
    //     </div>

    //     {/* Upload Form */}
    //     {showForm ? (
    //       <form
    //         onSubmit={handleSubmit}
    //         className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto"
    //       >
    //         {[
    //           { label: "Customer ID", key: "customerId" },
    //           { label: "Image URL", key: "image" },
    //           { label: "Date", key: "date", type: "date" },
    //           { label: "Total Amount", key: "totalAmount", type: "number" },
    //         ].map(({ label, key, type = "text" }) => (
    //           <div key={key}>
    //             <label className="block font-medium mb-1">{label}</label>
    //             <input
    //               type={type}
    //               className="w-full border rounded px-3 py-2"
    //               value={formData[key]}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, [key]: e.target.value })
    //               }
    //             />
    //             {errors[key] && (
    //               <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
    //             )}
    //           </div>
    //         ))}

    //         <div>
    //           <label className="block font-medium mb-1">Status</label>
    //           <select
    //             className="w-full border rounded px-3 py-2"
    //             value={formData.status}
    //             onChange={(e) =>
    //               setFormData({ ...formData, status: e.target.value })
    //             }
    //           >
    //             <option value="PAID">PAID</option>
    //             <option value="DUE">DUE</option>
    //           </select>
    //         </div>

    //         <div className="text-right">
    //           <button
    //             type="submit"
    //             className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
    //           >
    //             Submit Bill
    //           </button>
    //         </div>
    //       </form>
    //     ) : loading ? (
    //       <p>Loading bills...</p>
    //     ) : (
    //       <div className="bg-white shadow rounded-xl p-4 overflow-auto">
    //         <h2 className="text-xl font-semibold mb-4">Recent Bills</h2>
    //         <table className="min-w-full text-sm text-left border border-gray-200">
    //           <thead className="bg-gray-100">
    //             <tr>
    //               <th className="px-4 py-2 border">Bill ID</th>
    //               <th className="px-4 py-2 border">Customer ID</th>
    //               <th className="px-4 py-2 border">Date</th>
    //               <th className="px-4 py-2 border">Amount</th>
    //               <th className="px-4 py-2 border">Status</th>
    //               <th className="px-4 py-2 border">Image</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {paginatedBills.map((bill) => (
    //               <tr key={bill.billId}>
    //                 <td className="px-4 py-2 border">{bill.billId}</td>
    //                 <td className="px-4 py-2 border">{bill.customerId}</td>
    //                 <td className="px-4 py-2 border">{bill.date}</td>
    //                 <td className="px-4 py-2 border">₹{bill.totalAmount}</td>
    //                 <td
    //                   className={`px-4 py-2 border font-medium ${bill.status === "PAID"
    //                       ? "text-green-600"
    //                       : "text-red-600"
    //                     }`}
    //                 >
    //                   {bill.status}
    //                 </td>
    //                 <td className="px-4 py-2 border">
    //                   <a
    //                     href={bill.image}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="text-blue-600 underline"
    //                   >
    //                     View
    //                   </a>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>

    //         {/* Pagination */}
    //         <div className="flex justify-end mt-4 space-x-2">
    //           <button
    //             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
    //             disabled={currentPage === 1}
    //             className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
    //           >
    //             Prev
    //           </button>
    //           {[...Array(totalPages)].map((_, i) => (
    //             <button
    //               key={i}
    //               onClick={() => setCurrentPage(i + 1)}
    //               className={`px-3 py-1 rounded ${currentPage === i + 1
    //                   ? "bg-blue-600 text-white"
    //                   : "bg-gray-200 hover:bg-gray-300"
    //                 }`}
    //             >
    //               {i + 1}
    //             </button>
    //           ))}
    //           <button
    //             onClick={() =>
    //               setCurrentPage((p) => Math.min(p + 1, totalPages))
    //             }
    //             disabled={currentPage === totalPages}
    //             className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
    //           >
    //             Next
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </DefaultLayout>

  <DefaultLayout>
  <div className="p-6">
    {/* Header with Filter and Toggle Button */}
    <div className="flex justify-end items-start mb-6 flex-wrap gap-4">
      {!showForm && (
        <div className="flex items-center space-x-4">
          <label className="font-medium">Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="ALL">All</option>
            <option value="PAID">Paid</option>
            <option value="DUE">Due</option>
          </select>
        </div>
      )}

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showForm ? "View Bills" : "Upload Bill"}
      </button>
    </div>

    {/* Upload Form */}
    {showForm ? (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto"
      >
        {[
          { label: "Customer ID", key: "customerId" },
          { label: "Image URL", key: "image" },
          { label: "Date", key: "date", type: "date" },
          { label: "Total Amount", key: "totalAmount", type: "number" },
        ].map(({ label, key, type = "text" }) => (
          <div key={key}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              className="w-full border rounded px-3 py-2"
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
            />
            {errors[key] && (
              <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="block font-medium mb-1">Status</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="PAID">PAID</option>
            <option value="DUE">DUE</option>
          </select>
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
    ) : loading ? (
      <p>Loading bills...</p>
    ) : (
      <div className="bg-white shadow rounded-xl p-4 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Bills</h2>
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Bill ID</th>
              <th className="px-4 py-2 border">Customer ID</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Image</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBills.map((bill) => (
              <tr key={bill.billId}>
                <td className="px-4 py-2 border">{bill.billId}</td>
                <td className="px-4 py-2 border">{bill.customerId}</td>
                <td className="px-4 py-2 border">{bill.date}</td>
                <td className="px-4 py-2 border">₹{bill.totalAmount}</td>
                <td
                  className={`px-4 py-2 border font-medium ${
                    bill.status === "PAID"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {bill.status}
                </td>
                <td className="px-4 py-2 border">
                  <a
                    href={bill.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
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
              setCurrentPage((p) => Math.min(p + 1, totalPages))
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
