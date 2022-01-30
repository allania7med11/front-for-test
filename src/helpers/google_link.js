const google_base_url = "https://accounts.google.com/o/oauth2/auth";
const google_params = {
  client_id:
    "59748940133-itn9ra4colscmhf4h8hp8bf2vk4gfnlv.apps.googleusercontent.com",
  redirect_uri: "http://localhost:3000/accounts/google/login/callback/",
  response_type: "code",
  scope: "profile email",
};
const get_link = (base_url, params) => {
  let arr = [];
  for (let key in params) {
    arr.push(`${key}=${params[key]}`);
  }
  return `${base_url}?${arr.join("&")}`;
};

const google_link = get_link(google_base_url, google_params);

export default google_link