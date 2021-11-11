import React, { Component } from 'react';
import { PublicLayout } from '../../../App/layouts';
import { SubmissionError } from 'redux-form';
import { Loading } from '../../../App/components';
import Form from './components/Form';
import { Backdrop } from '@material-ui/core';
import actions from './store/actions';
import { connect } from 'react-redux';
import cogoToast from 'cogo-toast';

class Register extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleRegister = async (data) => {
    data.is_user = false;
    this.setState({ loading: true });
    return new Promise((resolve, reject) => {
      this.props.register(data, resolve, reject);
    })
      .then((res) => {
        this.setState({ loading: false });
        cogoToast.success('Your account has been registered successfully!', {
          position: 'bottom-right',
        });
        this.props.history.push('/login');
      })
      .catch((error) => {
        this.setState({ loading: false });
        cogoToast.error('Error while registering the account!', {
          position: 'bottom-right',
        });
        error = error.error.response.data;
        if (error.hasOwnProperty('error')) {
          throw new SubmissionError(error.error);
        }
      });
  };

  render = () => {
    const { loading } = this.state;

    return (
      <PublicLayout>
        <Backdrop open={true}>
          <Form onSubmit={this.handleRegister} />
        </Backdrop>
        <Loading loading={loading} />
      </PublicLayout>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  register: (data, resolve, reject) =>
    dispatch(actions.register(data, resolve, reject)),
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
