import React, { Component } from 'react';
import { PublicLayout } from '../../../App/layouts';
import { AuthContext } from '../../../App/auth';
import { Loading } from '../../../App/components';
import Form from './components/Form';
import { Backdrop } from '@material-ui/core';
import Api from '../../../App/services/api';
import { SubmissionError } from 'redux-form';
import cogoToast from 'cogo-toast';

class ForgotPassword extends Component {
  state = {
    loading: false,
  };

  handleSubmit = (data) => {
    this.setState({ loading: true });
    const api = new Api(false);
    api
      .post('user/forgotpassword', data)
      .then((res) => {
        this.setState({ loading: false });
        cogoToast.success(
          'The password reset token has been sent to your email successfully! Please check your email.',
          {
            position: 'bottom-right',
          }
        );
        this.props.history.push('/reset/password');
      })
      .catch((e) => {
        this.setState({ loading: false });
        return new SubmissionError({
          token: 'Invalid token.',
        });
      });
  };

  render = () => {
    const { loading } = this.state;
    return (
      <PublicLayout>
        <Backdrop open={true}>
          <Form onSubmit={this.handleSubmit} />
        </Backdrop>
        <Loading loading={loading} />
      </PublicLayout>
    );
  };
}

ForgotPassword.contextType = AuthContext;

export default ForgotPassword;
