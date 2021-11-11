import React, { Component } from 'react';
import { PublicLayout } from '../../../App/layouts';
import { SubmissionError } from 'redux-form';
import { AuthContext } from '../../../App/auth';
import { Loading } from '../../../App/components';
import Form from './components/Form';
import { Backdrop } from '@material-ui/core';

class OTPVerification extends Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleVerification = async (data) => {
    this.setState({ loading: true });
    try {
      const res = await this.context.fetchLoggedInUser(data.token);
      this.context.setToken(res.token);
      this.context.setUserData(res.user);
    } catch (err) {
      this.setState({ loading: false });
      return new SubmissionError({
        token: 'Invalid token.',
      });
    }
  };

  render = () => {
    const { loading } = this.state;

    return (
      <PublicLayout>
        <Backdrop open={true}>
          <Form onSubmit={this.handleVerification} />
        </Backdrop>
        <Loading loading={loading} />
      </PublicLayout>
    );
  };
}

OTPVerification.contextType = AuthContext;

export default OTPVerification;
