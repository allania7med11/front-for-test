import axios from "axios";



const getUrl = (provider) => `http://localhost:8082/api/v1.0.0/auth/${provider}/`;

const getOurTokens = async (provider, code) => {
  const response = await axios.post(getUrl(provider), {
    code,
  });
  return response.data;
};

export default getOurTokens;
