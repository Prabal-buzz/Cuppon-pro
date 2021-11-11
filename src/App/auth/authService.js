import Api from "../services/api";

const auth = {
  signIn: async (credentials) => {
    const api = new Api(false);
    return await api.post('auth/login/vendor', credentials);
  },
  fetchLoggedInUser: async (token) => {
    const api = new Api(false);
    return await api.post("auth/token/obtain", { token });
  },
  signOut: () => {
    return true;
  }
};

export default auth;
