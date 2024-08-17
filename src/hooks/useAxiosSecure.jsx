import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://scic-task-server-three.vercel.app/",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
