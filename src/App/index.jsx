import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store, { history } from './store';
import AuthProvider from './auth';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
