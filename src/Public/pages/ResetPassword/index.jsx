import React, { Component } from 'react';
import { PublicLayout } from '../../../App/layouts';
import { AuthContext } from '../../../App/auth';
import { Loading } from '../../../App/components';
import Form from './components/Form';
import { Backdrop } from '@material-ui/core';
import Api from '../../../App/services/api';
import { SubmissionError } from 'redux-form';
import cogoToast from 'cogo-toast';

class ResetPassword extends Component {
  state = {
    loading: false,
  };

  handleSubmit = (data) => {
    this.setState({ loading: true });
    const api = new Api(false);
    api
      .put('user/resetpassword', data)
      .then((res) => {
        this.setState({ loading: false });
        cogoToast.success('Your password has been reset successfully!', {
          position: 'bottom-right',
        });
        this.props.history.push('/login');
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

ResetPassword.contextType = AuthContext;

export default ResetPassword;
