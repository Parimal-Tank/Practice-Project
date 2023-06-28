import axios from "axios";
console.log(process.env);

export const Signup = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/user/signup`,
    data
  );
};
