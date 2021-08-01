import axios from "axios";

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "https://my-json-server.typicode.com/LennonPerez/invoicesfakedb",
});

export default AxiosClient;
