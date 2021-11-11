import React, { Component } from 'react';
import actions from './store/actions';
import { connect } from 'react-redux';
import { ConfirmDialog, Table } from '../../../App/components';
import { AuthContext } from '../../../App/auth';
import cogoToast from 'cogo-toast';
import Header from './components/Header';

class Items extends Component {
  state = {
    params: {
      page: 1,
      rowsPerPage: 10,
    },
    confirmOpen: false,
    item: null,
  };

  componentDidMount() {
    const { params } = this.state;
    const { currentUser } = this.context;
    this.props.getItems(params, currentUser.company[0].id);
  }

  columns = [
    { key: 'name', name: 'Name' },
    { key: 'product_code', name: 'Code' },
    { key: 'selling_price', name: 'Price' },
    { key: 'status', name: 'Status' },
  ];

  handleEdit = (item) => {
    this.props.history.push(`/items/update/${item.id}`);
  };

  setConfirmOpen = (confirmOpen) => {
    this.setState({ confirmOpen });
  };

  handleDelete = (item) => {
    this.setState({ confirmOpen: true, item });
  };

  delete = () => {
    const { item } = this.state;
    if (item) {
      const { currentUser } = this.context;
      new Promise((resolve, reject) => {
        this.props.deleteItem(
          {},
          currentUser.company[0].id,
          item.id,
          resolve,
          reject
        );
      })
        .then((res) => {
          const { params } = this.state;
          const { currentUser } = this.context;
          this.props.getItems(params, currentUser.company[0].id);
          cogoToast.success('Item deleted successfully', {
            position: 'bottom-right',
          });
        })
        .catch((error) => {
          cogoToast.error('Error deleting Item', {
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
      this.props.getItems(params);
    }
  };

  render() {
    const { response } = this.props;
    const {
      confirmOpen,
      params: { page, rowsPerPage },
    } = this.state;

    return (
      <>
        <Header />
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
  getItems: (params, company_id) =>
    dispatch(actions.getItems(params, company_id)),
  deleteItem: (data, company_id, product_id, resolve, reject) =>
    dispatch(actions.deleteItem(data, company_id, product_id, resolve, reject)),
});

const mapStateToProps = (state) => {
  return {
    success: state.items.success,
    loading: state.items.loading,
    response: state.items.response,
  };
};

Items.contextType = AuthContext;

export default connect(mapStateToProps, mapDispatchToProps)(Items);
