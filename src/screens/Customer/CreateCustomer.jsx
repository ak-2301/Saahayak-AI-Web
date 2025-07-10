import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateCustomer = ({ fetchCustomers }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNo: '',
    email: '',
    gstno: '',
    firmName: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName) newErrors.customerName = 'Customer name required';
    if (!/^\d{10}$/.test(formData.phoneNo)) newErrors.phoneNo = 'Enter valid 10-digit number';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.firmName) newErrors.firmName = 'Firm name is required';
    if (!formData.gstno) newErrors.gstno = 'GST number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      await axios.post('http://localhost:8080/api/customer', formData);
      toast.success('Customer created successfully');
      setFormData({
        customerName: '',
        phoneNo: '',
        email: '',
        gstno: '',
        firmName: '',
        address: '',
      });
      fetchCustomers();
    } catch (err) {
      toast.error('Error creating customer');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-2xl mx-auto"
    >
      {[
        { label: 'Customer Name', key: 'customerName' },
        { label: 'Phone Number', key: 'phoneNo' },
        { label: 'Email', key: 'email' },
        { label: 'GST Number', key: 'gstno' },
        { label: 'Firm Name', key: 'firmName' },
        { label: 'Address', key: 'address' },
      ].map(({ label, key }) => (
        <div key={key}>
          <label className="block font-medium mb-1 capitaize">{label}</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={formData[key]}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          />
          {errors[key] && (
            <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
          )}
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
  );
};

export default CreateCustomer;
