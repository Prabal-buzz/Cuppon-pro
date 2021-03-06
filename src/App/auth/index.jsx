import React, { createContext, useContext, Component } from 'react';
import Cookies from 'js-cookie';
import authService from './authService';
import Api from '../services/api';

const initialState = {
  authStatusReported: false,
  isUserLoggedIn: false,
  isUserVerified: false,
  currentUser: {},
  loginUser: async (credentials) => {
    try {
      const res = await authService.signIn(credentials);
      return res;
    } catch (err) {
      throw err.message;
    }
  },
  fetchLoggedInUser: async (token) => {
    try {
      const res = await authService.fetchLoggedInUser(token);
      return res;
    } catch (err) {
      throw err.message;
    }
  },
  logoutUser: async () => {
    Object.keys(Cookies.get()).forEach(function (cookie) {
      Cookies.remove(cookie);
    });
    initialState.isUserLoggedIn = false;
    window.location.reload();
  },
  setToken: (token) => {
    Cookies.set('token', token);
  },
  getToken: () => {
    return Cookies.get('token');
  },
  setUserData: () => {},
};

export const AuthContext = createContext(initialState);

export default class AuthProvider extends Component {
  state = initialState;

  componentDidMount = async () => {
    this.setState({
      setUserData: (data) => {
        this.setState({
          authStatusReported: true,
          isUserLoggedIn: true,
          currentUser: data,
        });
      },
    });
    const token = Cookies.get('token');
    if (token === 'undefined' || token === undefined) {
      this.setState({
        authStatusReported: true,
        isUserLoggedIn: false,
        currentUser: {},
      });
    } else {
      await this.verifyToken(token);
    }
  };

  verifyToken = async (token) => {
    const api = new Api(false);
    try {
      const res = await api.post('auth/token/verify', { token });
      const { setToken } = this.state;
      setToken(res.token);
      this.setState({
        authStatusReported: true,
        isUserLoggedIn: true,
        currentUser: res.user,
      });
    } catch (err) {
      this.setState({
        authStatusReported: true,
        isUserLoggedIn: false,
        currentUser: {},
      });
      Cookies.remove('token');
    }
  };

  render() {
    const { children } = this.props;
    const { authStatusReported } = this.state;
    return authStatusReported ? (
      <>
        <AuthContext.Provider value={this.state}>
          {children}
        </AuthContext.Provider>
      </>
    ) : (
      <></>
    );
  }
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthConsumer = AuthContext.Consumer;

export { default as authService } from './authService';
