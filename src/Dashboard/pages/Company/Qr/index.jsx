import React, { Component } from 'react';
import actions from './store/actions';
import { connect } from 'react-redux';
import { ConfirmDialog, Table } from '../../../../App/components';
import cogoToast from 'cogo-toast';
import CreateOrEdit from './components/CreateOrEdit';
import QRView from './components/View';
import { AuthContext } from '../../../../App/auth';

class QR extends Component {
  state = {
    qr: null,
    action: '',
    confirmOpen: false,
    params: {
      page: 1,
      rowsPerPage: 10,
    },
    viewQR: true,
    qrData: null,
  };

  componentDidMount() {
    const { params } = this.state;
    const { currentUser } = this.context;
    this.props.getQRs(currentUser.company[0].id, params);
  }

  columns = [{ key: 'name', name: 'Number' }];

  handleSubmit = (data) => {
    delete data.apply_on;
    data.asset_type === 'Room'
      ? (data.name = `Room ${data.name}`)
      : (data.name = `Table ${data.name}`);

    const { currentUser } = this.context;
    const { params } = this.state;
    data.company = currentUser.company[0].id;
    this.setState({ loading: true });
    if (data.id) {
      return new Promise((resolve, reject) => {
        this.props.updateQR(data.id, data, resolve, reject);
      })
        .then((res) => {
          this.setState({ loading: false, qr: null, action: '' });
          cogoToast.success('Your qr has been updated successfully', {
            position: 'bottom-left',
          });
          this.props.getQRs(currentUser.company[0].id, params);
        })
        .catch((error) => {
          this.setState({ loading: false });
          cogoToast.error('Error while updating qr', {
            position: 'bottom-right',
          });
        });
    } else {
      return new Promise((resolve, reject) => {
        this.props.createQR(data, resolve, reject);
      })
        .then((res) => {
          this.setState({ loading: false });
          cogoToast.success('Your qr has been created successfully', {
            position: 'bottom-left',
          });
          this.props.getQRs(currentUser.company[0].id, params);
        })
        .catch((error) => {
          this.setState({ loading: false });
          cogoToast.error('Error while creating qr', {
            position: 'bottom-right',
          });
        });
    }
  };

  handleEdit = (data) => {
    const qr = {
      id: data.id,
      asset_type: data.asset_type,
      name: parseInt(data.name.split(' ')[1]),
    };
    this.setState({ qr, action: 'edit' });
  };

  onEditCancel = () => {
    this.setState({ qr: null, action: '' });
  };

  handleDisable = (data) => {
    const { currentUser } = this.context;
    const { params } = this.state;
    this.setState({ loading: true });
    return new Promise((resolve, reject) => {
      this.props.updateQR(
        data.id,
        { company: currentUser[0].id, status: false },
        resolve,
        reject
      );
    })
      .then((res) => {
        this.setState({ loading: false, qr: null, action: '' });
        cogoToast.success('Your qr has been updated successfully', {
          position: 'bottom-left',
        });
        this.props.getQRs(currentUser.company[0].id, params);
      })
      .catch((error) => {
        this.setState({ loading: false });
        cogoToast.error('Error while updating qr', {
          position: 'bottom-right',
        });
      });
  };

  setConfirmOpen = (confirmOpen) => {
    this.setState({ confirmOpen, action: '' });
  };

  handleDelete = (qr) => {
    this.setState({ confirmOpen: true, qr, action: 'delete' });
  };

  delete = () => {
    const { qr, action, params } = this.state;
    const { currentUser } = this.context;
    if (qr && action === 'delete') {
      new Promise((resolve, reject) => {
        this.props.deleteQR(qr.id, currentUser.company[0].id, resolve, reject);
      })
        .then((res) => {
          this.props.getQRs(currentUser.company[0].id, params);
          this.setState({ qr: null, action: '' });
          cogoToast.success('QR deleted successfully', {
            position: 'bottom-right',
          });
        })
        .catch((error) => {
          cogoToast.error('Error deleting QR', {
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
      const { currentUser } = this.context;
      this.props.getQRs(currentUser.company[0].id, params);
    }
  };

  openQRView = (qr) => {
    const qrData = JSON.stringify({ table_no: qr.id, company_id: qr.company });
    this.setState({ viewQR: true, qrData });
  };

  closeQRView = () => this.setState({ viewQR: false, qrData: null });

  render() {
    const { response } = this.props;
    const {
      action,
      qr,
      viewQR,
      qrData,
      confirmOpen,
      params: { page, rowsPerPage },
    } = this.state;

    return (
      <>
        <CreateOrEdit
          handleSubmit={this.handleSubmit}
          onEditCancel={this.onEditCancel}
          qr={action === 'edit' ? qr : null}
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
          handleView={this.openQRView}
        />
        <ConfirmDialog
          title="Delete this item?"
          open={confirmOpen}
          setOpen={this.setConfirmOpen}
          onConfirm={this.delete}
        >
          Are you sure you want to delete this item?
        </ConfirmDialog>
        {viewQR && qrData && (
          <QRView open={viewQR} onClose={this.closeQRView} data={qrData} />
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQRs: (company, params) => dispatch(actions.getQRs(company, params)),
  createQR: (data, resolve, reject) =>
    dispatch(actions.createQR(data, resolve, reject)),
  updateQR: (id, data, resolve, reject) =>
    dispatch(actions.updateQR(id, data, resolve, reject)),
  deleteQR: (id, company, resolve, reject) =>
    dispatch(actions.deleteQR(id, company, resolve, reject)),
});

const mapStateToProps = (state) => {
  return {
    success: state.qrs.success,
    loading: state.qrs.loading,
    response: state.qrs.response,
  };
};

QR.contextType = AuthContext;

export default connect(mapStateToProps, mapDispatchToProps)(QR);
