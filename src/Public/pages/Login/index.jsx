import React, { Component } from 'react';
import { PublicLayout } from '../../../App/layouts';
import { SubmissionError } from 'redux-form';
import { AuthContext } from '../../../App/auth';
import { Loading } from '../../../App/components';
import Form from './components/Form';
import { Backdrop } from '@material-ui/core';

class Login extends Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleLogin = async (data) => {
    this.setState({ loading: true });
    try {
      await this.context.loginUser(data);
      this.setState({ loading: false });
      this.props.history.push('/verify');
    } catch (err) {
      this.setState({ loading: false });
      return new SubmissionError({
        password: 'Invalid email or password.',
      });
    }
  };

  render = () => {
    const { loading } = this.state;

    return (
      <PublicLayout>
        <Backdrop open={true}>
          <Form onSubmit={this.handleLogin} />
        </Backdrop>
        <Loading loading={loading} />
      </PublicLayout>
    );
  };
}

Login.contextType = AuthContext;

export default Login;
