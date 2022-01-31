import axios from "axios";

const getInfos = async (access_token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const url = "https://www.googleapis.com/oauth2/v1/tokeninfo";
  const response = await axios.get(url, config);
  return response.data;
};

export default getInfos;
