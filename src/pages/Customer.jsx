import React, { useState } from 'react';
import DefaultLayout from '../components/common/DefaultLayout';

const Customer = () => {
  const initialCustomers = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    phone: `98765432${(i + 1).toString().padStart(2, '0')}`,
    address: `Address ${i + 1}`,
    gst: `07ABCDE${(i + 1).toString().padStart(4, '0')}F1Z5`,
    firm: `Firm ${i + 1}`,
  }));

  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [viewingCustomer, setViewingCustomer] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    email:'',
    gst: '',
    firm: '',
  });

  const [errors, setErrors] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const customerBills = {
    1: [{ billNo:'B001',date: '2025-07-06', status: 'Paid' }],
    2: [{ billNo:'B002', date: '2025-07-05', status: 'Due' },{billNo:'B003', date: '2025-07-05', status: 'Paid' }],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setViewingCustomer(true);
  };

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleCreateCustomer = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!newCustomer.name.trim()) newErrors.name = 'Customer name is required';
    if (!newCustomer.phone.match(/^\d{10}$/))
      newErrors.phone = 'Enter a valid 10-digit phone';
    if (!newCustomer.address.trim())
      newErrors.address = 'Address is required';
    if (
      newCustomer.gst &&
      !newCustomer.gst.match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)
    ) {
      newErrors.gst = 'Invalid GST Number format';
    }
    if (!newCustomer.firm.trim()) newErrors.firm = 'Firm name is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newEntry = {
      ...newCustomer,
      id: customers.length + 1,
    };

    setCustomers([...customers, newEntry]);
    setNewCustomer({ name: '', phone: '', address: '', gst: '', firm: '' });
    setErrors({});
    setShowForm(false);
  };

  return (
    <DefaultLayout>
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold">Customer Management</h1>
          {!viewingCustomer && (
            <button
              onClick={() => {
                setShowForm((prev) => !prev);
                setSelectedCustomer(null);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {showForm ? 'View Customers' : 'Create Customer'}
            </button>
          )}
        </div>

        {showForm ? (
          <form
            onSubmit={handleCreateCustomer}
            className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto"
          >
            {['name', 'phone', 'address', 'gst', 'firm','email'].map((field) => (
              <div key={field}>
                <label className="block font-medium mb-1 capitalize">
                  {field === 'gst' ? 'GST Number' : field.replace(/^\w/, c => c.toUpperCase())}
                </label>
                {field === 'address' ? (
                  <textarea
                    name={field}
                    value={newCustomer[field]}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={newCustomer[field]}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                )}
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
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
                Back to Customer List
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-100 p-4 rounded">
              <p><strong>Name:</strong> {selectedCustomer.name}</p>
              <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
               <p><strong>Customer Id:</strong> {selectedCustomer.id}</p>
              <p><strong>Address:</strong> {selectedCustomer.address}</p>
              <p><strong>Firm:</strong> {selectedCustomer.firm}</p>
              <p><strong>GST:</strong> {selectedCustomer.gst || 'N/A'}</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Bills</h4>
              <table className="min-w-full text-sm border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                     <th className="px-4 py-2 border">Bill No</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {(customerBills[selectedCustomer.id] || []).map((bill, idx) => (
                    <tr key={idx}>
                       <td className="px-4 py-2 border">{bill.billNo}</td>
                      <td className="px-4 py-2 border">{bill.date}</td>
                      <td className={`px-4 py-2 border ${bill.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                        {bill.status}
                      </td>
                    </tr>
                  ))}
                  {(!customerBills[selectedCustomer.id] || customerBills[selectedCustomer.id].length === 0) && (
                    <tr>
                      <td colSpan="2" className="px-4 py-2 border text-center text-gray-500">
                        No bills found for this customer.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-xl p-4 overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Customer List</h2>
            <table className="min-w-full text-sm text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className='px-4 py-2 border'>Customer Id</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Firm</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCustomers.map((cust) => (
                  <tr
                    key={cust.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSelectCustomer(cust)}
                  >
                    <td className="px-4 py-2 border">{cust.name}</td>
                    <td className="px-4 py-2 border">{cust.name}</td>
                    <td className="px-4 py-2 border">{cust.phone}</td>
                    <td className="px-4 py-2 border">{cust.firm}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                disabled={currentPage === totalPages}
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
