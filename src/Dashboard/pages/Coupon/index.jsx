import React, { Component } from 'react';
import actions from './store/actions';
import { connect } from 'react-redux';
import { ConfirmDialog, Table } from '../../../App/components';
import cogoToast from 'cogo-toast';
import CreateOrEdit from './components/CreateOrEdit';

class Coupon extends Component {
  state = {
    coupon: null,
    action: '',
    confirmOpen: false,
    params: {
      page: 1,
      rowsPerPage: 10,
    },
  };

  componentDidMount() {
    const { params } = this.state;
    this.props.getCoupons(params);
  }

  columns = [
    { key: 'name', name: 'Coupon' },
    { key: 'expiry_date', name: 'Expiry Date' },
    { key: 'discount', name: 'Discount' },
  ];

  handleSubmit = (data) => {
    delete data.apply_on;
    this.setState({ loading: true });
    if (data.id) {
      return new Promise((resolve, reject) => {
        this.props.updateCoupon(data.id, data, resolve, reject);
      })
        .then((res) => {
          this.setState({ loading: false, coupon: null, action: '' });
          cogoToast.success('Your coupon has been updating successfully', {
            position: 'bottom-left',
          });
          const { params } = this.state;
          this.props.getCoupons(params);
        })
        .catch((error) => {
          this.setState({ loading: false });
          cogoToast.error('Error while updating coupon', {
            position: 'bottom-right',
          });
        });
    } else {
      return new Promise((resolve, reject) => {
        this.props.createCoupon(data, resolve, reject);
      })
        .then((res) => {
          this.setState({ loading: false });
          cogoToast.success('Your coupon has been created successfully', {
            position: 'bottom-left',
          });
          const { params } = this.state;
          this.props.getCoupons(params);
        })
        .catch((error) => {
          this.setState({ loading: false });
          cogoToast.error('Error while creating coupon', {
            position: 'bottom-right',
          });
        });
    }
  };

  handleEdit = (data) => {
    const coupon = {
      id: data.id,
      name: data.name,
      content_type: data.content_type,
      discount_type: data.discount_type,
      discount: data.discount,
      expiry_date: data.expiry_date,
      description: data.description,
    };
    if (data.content_object) {
      data.apply_on = data.content_object;
      data.object_id = data.content_object.id;
    }
    this.setState({ coupon, action: 'edit' });
  };

  onEditCancel = () => {
    this.setState({ coupon: null, action: '' });
  };

  handleDisable = (data) => {
    this.setState({ loading: true });
    return new Promise((resolve, reject) => {
      this.props.updateCoupon(data.id, { status: false }, resolve, reject);
    })
      .then((res) => {
        this.setState({ loading: false, coupon: null, action: '' });
        cogoToast.success('Your coupon has been updated successfully', {
          position: 'bottom-left',
        });
        const { params } = this.state;
        this.props.getCoupons(params);
      })
      .catch((error) => {
        this.setState({ loading: false });
        cogoToast.error('Error while updating coupon', {
          position: 'bottom-right',
        });
      });
  };

  setConfirmOpen = (confirmOpen) => {
    this.setState({ confirmOpen, action: '' });
  };

  handleDelete = (coupon) => {
    this.setState({ confirmOpen: true, coupon, action: 'delete' });
  };

  delete = () => {
    const { coupon, action, params } = this.state;
    if (coupon && action === 'delete') {
      new Promise((resolve, reject) => {
        this.props.deleteCoupon(coupon.id, resolve, reject);
      })
        .then((res) => {
          this.props.getCoupons(params);
          this.setState({ coupon: null, action: '' });
          cogoToast.success('Coupon deleted successfully', {
            position: 'bottom-right',
          });
        })
        .catch((error) => {
          cogoToast.error('Error deleting Coupon', {
            position: 'bottom-right',
          });
        });
    }
  };

  handlePageChange = (page, rowsPerPage) => {
    const {
      response: { page_count },
    } = this.props;
    if (page + 1 <= page_count) {
      const params = { page: page + 1, rowsPerPage };
      this.setState({ params });
      this.props.getCoupons(params);
    }
  };

  render() {
    const { response } = this.props;
    const {
      action,
      coupon,
      confirmOpen,
      params: { page, rowsPerPage },
    } = this.state;

    return (
      <>
        <CreateOrEdit
          handleSubmit={this.handleSubmit}
          onEditCancel={this.onEditCancel}
          coupon={action === 'edit' ? coupon : null}
        />
        <Table
          page={page - 1}
          total={response.page_count * rowsPerPage}
          rowsPerPage={rowsPerPage}
          onChangePage={this.handlePageChange}
          columns={this.columns}
          rows={response.data}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <ConfirmDialog
          title="Delete this item?"
          open={confirmOpen}
          setOpen={this.setConfirmOpen}
          onConfirm={this.delete}
        >
          Are you sure you want to delete this item?
        </ConfirmDialog>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoupons: (params) => dispatch(actions.getCoupons(params)),
  createCoupon: (data, resolve, reject) =>
    dispatch(actions.createCoupon(data, resolve, reject)),
  updateCoupon: (id, data, resolve, reject) =>
    dispatch(actions.updateCoupon(id, data, resolve, reject)),
  deleteCoupon: (id, resolve, reject) =>
    dispatch(actions.deleteCoupon(id, resolve, reject)),
});

const mapStateToProps = (state) => {
  return {
    success: state.coupons.success,
    loading: state.coupons.loading,
    response: state.coupons.response,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
