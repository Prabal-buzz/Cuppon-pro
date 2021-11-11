import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../../../App/auth";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { getSocial, saveSocial, updateSocial } from "../../store/actions";

import FormInput from "./FormInput/index";

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  head: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '-20px',
  },
  display: {
    lineHeight: "4rem",
    width: "5rem",
  },
  vat: {
    width: "auto",
    height: "auto",
  },
  button: {
    backgroundColor: "#46BE8A",
    height: "36px",
    color: "white",
    display: "flex",
  },
}));

const SocialData = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext)
  const SocialList = useSelector((state) => state.companyGetSocial?.response);

  useEffect(() => {
    dispatch(getSocial(currentUser.company[0].id));
  }, [dispatch, currentUser]);


  const handleSocialData = (data) => {
    data.company = currentUser.company[0].id;
    dispatch(saveSocial(data, currentUser.company[0].id));
    setShow(false);
  };

  const updateSocialData = (data) => {
    dispatch(updateSocial(data, currentUser.company[0].id));
  };

  return (
    <div className="websiteWrapper">
      <Typography className={classes.head}> Social Link </Typography>
      <div className="wrapperadd">
        <div className="buttn">
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => setShow(!show)}
          >
            Add Social Media
          </Button>
        </div>
        <div>
          {show && (
            <FormInput
              initialValues={{ name: "website" }}
              onSubmit={handleSocialData}
              form={`SocialForm`}
              button="Save"
            />
          )}
        </div>
      </div>
      <div>
        {SocialList?.data.map(function (social, i) {
          return (
            <FormInput
              key={social.id}
              initialValues={social}
              form={`SocialForm_${social.id}`}
              onSubmit={updateSocialData}
              button="Update"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SocialData;
