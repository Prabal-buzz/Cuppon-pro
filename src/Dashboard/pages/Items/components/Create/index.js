import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../store/actions";
import cogoToast from "cogo-toast";
import { AuthContext } from "../../../../../App/auth";
import Form from "../Form";

class Create extends Component {

  handleSubmit = (data) => {
    data.unit_price =
      typeof data.unit_price === "string"
        ? parseInt(data.unit_price)
        : data.unit_price;

    return new Promise((resolve, reject) => {
      this.props.createItem(data, this.context.currentUser.company[0].id, resolve, reject);
    }).then(res => {
      this.uploadImage(res.data.id, data.image);
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
    const { currentUser } = this.context;
    return (
      <>
        <h3>Product Information</h3>
        <Form
          onSubmit={this.handleSubmit}
          initialValues={{ company: currentUser.company[0].id }}
          onCancel={this.handleCancel}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createItem: (data, company_id, resolve, reject) =>
    dispatch(actions.createItem(data, company_id, resolve, reject)),
  uploadImage: (data, resolve, reject) =>
    dispatch(actions.uploadImage(data, resolve, reject)),
});

const mapStateToProps = (state) => ({});

Create.contextType = AuthContext;

export default connect(mapStateToProps, mapDispatchToProps)(Create);
