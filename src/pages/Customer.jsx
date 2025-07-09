import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultLayout from '../components/common/DefaultLayout';
import { toast } from 'react-toastify';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customerBills, setCustomerBills] = useState([]);
  const [billLoading, setBillLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [viewingCustomer, setViewingCustomer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [newCustomer, setNewCustomer] = useState({
    customerName: '',
    phoneNo: '',
    email: '',
    address: '',
    firmName: '',
    gstno: '',
  });

  const [errors, setErrors] = useState({});

  // get all customer List 
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/customer');
      setCustomers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch customers.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // View All bills for a particular customer
  const handleViewCustomer = async (customer) => {
    setSelectedCustomer(customer);
    setViewingCustomer(true);
    setBillLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/bills/customer/${customer.customerId}`
      );
      setCustomerBills(res.data);
    } catch (err) {
      toast.error("Failed to fetch bills for customer");
      setCustomerBills([]);
    }
    setBillLoading(false);
  };

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  // Create a customer API Call 
  const handleCreateCustomer = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!newCustomer.customerName.trim())
      newErrors.customerName = 'Customer name is required';
    if (!/^\d{10}$/.test(newCustomer.phoneNo))
      newErrors.phoneNo = 'Enter a valid 10-digit number';
    if (!newCustomer.address.trim())
      newErrors.address = 'Address is required';
    if (!newCustomer.firmName.trim())
      newErrors.firmName = 'Firm name is required';
    if (!newCustomer.gstno.trim())
      newErrors.gstno = 'GST number is required';
    if (!newCustomer.email.trim())
      newErrors.email = 'Email is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await axios.post('http://localhost:8080/api/customer', {
        customerName: newCustomer.customerName,
        phoneNo: newCustomer.phoneNo,
        email: newCustomer.email,
        gstno: newCustomer.gstno,
        firmName: newCustomer.firmName,
        address: newCustomer.address,
      });

      toast.success('Customer created successfully!');
      setShowForm(false);
      fetchCustomers();
      setNewCustomer({
        customerName: '',
        phoneNo: '',
        email: '',
        gstno: '',
        firmName: '',
        address: '',
      });
    } catch (error) {
      console.error('Error creating customer:', error);
      toast.error('Something went wrong while creating customer');
    }
  };



  return (
    <DefaultLayout>
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold">Customer Management</h1>
          {!viewingCustomer && (
            <button
              onClick={() => {
                setShowForm(!showForm);
                setViewingCustomer(false);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {showForm ? 'View Customers' : 'Create Customer'}
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : showForm ? (
          <form
            onSubmit={handleCreateCustomer}
            className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto"
          >
            {[
              ['customerName', 'Customer Name'],
              ['phoneNo', 'Phone Number'],
              ['email', 'Email'],
              ['address', 'Address'],
              ['firmName', 'Firm Name'],
              ['gstno', 'GST Number'],
            ].map(([key, label]) => (
              <div key={key}>
                <label className="block font-medium mb-1">{label}</label>
                <input
                  type="text"
                  name={key}
                  value={newCustomer[key]}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors[key] && (
                  <p className="text-red-500 text-sm">{errors[key]}</p>
                )}
              </div>
            ))}

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Create
              </button>
            </div>
          </form>
        ) : viewingCustomer && selectedCustomer ? (
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold">Customer Details</h2>
              <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => {
                  setViewingCustomer(false);
                  setSelectedCustomer(null);
                }}
              >
                Back to List
              </button>
            </div>
            <p><strong>Customer Id:</strong> {selectedCustomer.customerId}</p>
            <p><strong>Name:</strong> {selectedCustomer.customerName}</p>
            <p><strong>Firm:</strong> {selectedCustomer.firmName}</p>
            <p><strong>Address:</strong> {selectedCustomer.address}</p>
            <p><strong>GST No:</strong> {selectedCustomer.gstno}</p>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Bills</h3>
              {billLoading ? (
                <p>Loading bills...</p>
              ) : customerBills.length === 0 ? (
                <p>No bills found for this customer.</p>
              ) : (
                <table className="min-w-full text-sm text-left border border-gray-200 mt-2">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Bill ID</th>
                      <th className="px-4 py-2 border">Date</th>
                      <th className="px-4 py-2 border">Amount</th>
                      <th className="px-4 py-2 border">Status</th>
                      <th className="px-4 py-2 border">Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerBills.map((bill) => (
                      <tr key={bill.billId}>
                        <td className="px-4 py-2 border">{bill.billId}</td>
                        <td className="px-4 py-2 border">{bill.date}</td>
                        <td className="px-4 py-2 border">₹{bill.totalAmount}</td>
                        <td
                          className={`px-4 py-2 border font-medium ${bill.status === "PAID"
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
              )}
            </div>

          </div>
        ) : (
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
                {paginatedCustomers.map((cust) => (
                  <tr
                    key={cust.customerId}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleViewCustomer(cust)}
                  >
                    <td className="px-4 py-2 border">{cust.customerId}</td>
                    <td className="px-4 py-2 border">{cust.customerName}</td>
                    <td className="px-4 py-2 border">{cust.phoneNo}</td>
                    <td className="px-4 py-2 border">{cust.firmName}</td>
                  </tr>
                ))}
              </tbody>
            </table>

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
                  className={`px-3 py-1 rounded ${currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
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

export default Customer;
