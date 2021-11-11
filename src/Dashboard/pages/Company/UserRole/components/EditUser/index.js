import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../../../../App/auth";
import { saveUserRole } from "../../store/actions";
import { Image } from "../../../../../../App/components/Image";
import { Details } from "../Details";
import ChangeRole from "../ChangeRole/index";
import { getProfile } from '../../../MyProfile/store/actions';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: "75%",
    margin: "0px",
    border: "2px solid gray",
  },
  gridField: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margin: {
    width: "448px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
  },
  text: {
    width: "28rem",
  },
  display: {
    width: "130px",
  },
  pantxt: {
    width: "210px",
  },
  vat: {
    width: "405px",
  },
  publish: {
    width: "10%",
    height: "50px",
  },
  select: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
  button: {
    backgroundColor: "#46BE8A",
    width: "85px",
    height: "36px",
    color: "white",
    display: "flex",
    marginBottom: "20px",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {id} = useParams()
  const RoleList = useSelector((state) => state.roleGetList.response);
  const { currentUser } = useContext(AuthContext)
  const UserProfiles = useSelector((state) => state.companyGetUser.response);

  useEffect(() => {
    if(id !== ''){
      dispatch(getProfile(id));
    }
  }, [dispatch, id]);

  const changeRole = (data) => {
    dispatch(saveUserRole(data, currentUser.company[0].id));
  };

  function getId(list, role) {
    if (role?.group[0] !== "user") {
      const id = list.find(item => item.name === role?.group[0]).id;
      return id;
    } else {
      const id = list.find(item => item.name === role?.group[1]).id;
      return id;
    }
  };

  return (
    <div className={classes.root}>
      <Image image={UserProfiles?.data.image} />
      <ChangeRole initialValues={{ new_group: getId(RoleList?.data, UserProfiles?.data), user_id: id }} onSubmit={changeRole} />
      <Details data={UserProfiles?.data} />
    </div>
  );
};

export default Profile;
