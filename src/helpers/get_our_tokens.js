import axios from "axios";

const url = "http://localhost:8000/api/v1.0.0/auth/google/";

const getOurTokens = async (code) => {
  const response = await axios.post(url, {
    code,
  });
  return response.data;
};

export default getOurTokens;
