import cogoToast from "cogo-toast";
import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthContext } from "../../../../../App/auth";
import actions from "../../store/actions";
import Form from "../Form";

class Edit extends Component {
  state = { item: null }

  componentDidMount() {
    this.getItemDetail();
  }

  getItemDetail = () => {
    new Promise((resolve, reject) => {
      this.props.getItemDetail(this.context.currentUser.company[0].id, this.props.match.params.id, resolve, reject);
    }).then(res => {
      const item = res.data;
      item.image = item.images.length > 0 ? item.images[0].image : '';
      this.setState({ item });
    }).catch(error => {
      this.props.history.push("/items");
      cogoToast.error("Item not found", {
        position: "bottom-right",
      });
    });
  }

  handleSubmit = (data) => {
    data.unit_price = typeof data.unit_price === "string"
      ? (parseInt(data.unit_price))
      : (data.unit_price);

    return new Promise((resolve, reject) => {
      this.props.updateItem(data, this.context.currentUser.company[0].id, this.props.match.params.id, resolve, reject);
    }).then(res => {
      this.uploadImage(this.props.match.params.id, data.image);
      this.props.history.push("/items");
      cogoToast.success("Item saved successfully", {
        position: "bottom-right",
      });
    }).catch(error => {
      cogoToast.error("Error saving Item", {
        position: "bottom-right",
      });
    });
  };

  uploadImage = (id, image) => {
    const data = new FormData();
    data.append('object_id', id);
    data.append('image', image);
    new Promise((resolve, reject) => {
      this.props.uploadImage(data, resolve, reject);
    }).then(res => {
      cogoToast.success("Item image saved successfully", {
        position: "bottom-right",
      });
    }).catch(error => {
      cogoToast.error("Error saving item image", {
        position: "bottom-right",
      });
    });
  }

  handleCancel = () => {
    this.props.history.push("/items");
  }

  render() {
    const { item } = this.state;

    return (
      <>
        <h3>Product Information</h3>
        <Form
          onSubmit={this.handleSubmit}
          initialValues={item}
          onCancel={this.handleCancel}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getItemDetail: (data, company_id, product_id, resolve, reject) =>
    dispatch(actions.getItemDetail(data, company_id, product_id, resolve, reject)),
  updateItem: (data, company_id, product_id, resolve, reject) =>
    dispatch(actions.updateItem(data, company_id, product_id, resolve, reject)),
  uploadImage: (data, resolve, reject) =>
    dispatch(actions.uploadImage(data, resolve, reject)),
});

const mapStateToProps = (state) => {
  return {
    success: state.items.success,
    loading: state.items.loading,
    response: state.items.response,
  };
};

Edit.contextType = AuthContext;

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
