import axios from "axios";

const base_url = "https://accounts.google.com/o/oauth2/token";
const client_id =
  "59748940133-itn9ra4colscmhf4h8hp8bf2vk4gfnlv.apps.googleusercontent.com";
const client_secret = "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";
const redirect_uri = "http://localhost:3000/accounts/google/login/callback/";
const grant_type = "authorization_code";

const getAcessToken = async (code) => {
  const response = await axios.post(base_url, {
    base_url,
    client_id,
    client_secret,
    redirect_uri,
    grant_type,
    code,
  });
  return response.data
};

export default getAcessToken;
