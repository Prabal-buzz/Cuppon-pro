import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../../../App/auth";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

import FormDocument from "./FormDocument/index";
import { getInput, saveInput, updateInput } from "../../store/actions";

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  head: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '-20px',
  },
  vat: {
    width: "430px",
    height: "40px",
  },
  publish: {
    width: "4rem",
    height: "4rem",
  },
  button: {
    backgroundColor: "#46BE8A",
    height: "36px",
    color: "white",
    display: "flex",
  },
}));
const Document = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext)
  const Document = useSelector((state) => state.companyGetInput?.response);

  useEffect(() => {
    dispatch(getInput(currentUser.company[0].id));
  }, [dispatch, currentUser]);

  const handleDocumentInput = (data) => {
    data.company = currentUser.company[0].id;
    const formData = new FormData();
    formData.append("document_number", data.document_number);
    formData.append("name", data.name);
    formData.append("document", data.document);
    formData.append("company", data.company);

    dispatch(saveInput(formData, currentUser.company[0].id));
    setShow(false);
  };

  const updateDocumentData = (data) => {
    data.company = currentUser.company[0].id;
    const formData = new FormData();
    formData.append("document_number", data.document_number);
    formData.append("name", data.name);
    formData.append("document", data.document);
    formData.append("company", data.company);

    dispatch(updateInput(formData, currentUser.company[0].id, data.id));
  };

  return (
    <div className="inputWrapper">
      <Typography className={classes.head}> Company Document </Typography>
      <div className="wrapperadd">
        <div className="buttn">
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => setShow(!show)}
          >
            Add Company Document
          </Button>
        </div>
        <div>
          {show && (
            <FormDocument
              initialValues={{ name: "Company Number" }}
              onSubmit={handleDocumentInput}
              form={`CompanyDocument`}
              button="Save"
            />
          )}
        </div>
        <div>
          {Document?.data.map(function (doc, i) {
            return (
              <FormDocument
                key={doc.id}
                initialValues={doc}
                form={`DocumentForm_${doc.id}`}
                onSubmit={updateDocumentData}
                button="Update"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Document;
