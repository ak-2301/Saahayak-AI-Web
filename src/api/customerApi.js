import axios from "axios";

const BASE_URL = "http://localhost:8080/api/customer";

export const getCustomers = () => axios.get(BASE_URL);
export const createCustomer = (customerData) => axios.post(BASE_URL, customerData);
