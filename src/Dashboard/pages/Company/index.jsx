import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import CompanyInfo from './CompanyInfo';
import MyProfile from './MyProfile';
import Role from './UserRole';
import QR from './Qr/index';
import EditUser from './UserRole/components/EditUser';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../../../App/auth';
import { getInfo } from './CompanyInfo/store/actions';


const useStyles = makeStyles((theme) => ({
  top_bar: {
    margin: '0px 10px 20px 10px',
    minHeight: '45px',
    background: '#ffffff 0% 0% no-repeat padding-box',
    boxShadow: '3px 3px 6px 3px #00000029',
    borderRadius: '10px',
  },
  tab_active: {
    color: '#eb3a34',
    fontSize: '18px',
    padding: '5px 15px',
    textDecoration: 'underline'
  },
  tab: {
    fontSize: '18px',
    padding: '5px 15px',
  }
}));

const Company = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {location} = useHistory();
  const {id} = useParams();
  const [active, setActive] = useState('Company');
  const { currentUser } = useContext(AuthContext);
  const CompanyDetails = useSelector((state) => state.companyGetInfo?.response);
  const UserProfiles = useSelector((state) => state.companyGetUser.response);

  useEffect(() => {
    dispatch(getInfo(currentUser.company[0].id));
  }, [dispatch, currentUser]);

  function handleEdit(e, row) {
    history.push(`/user/${row.id}`);
    setActive('User')
  }

  function handleTab(val) {
    setActive(val)
  }

  return (
    <>
      {/* <Grid container spacing={16} direction="row" className={classes.top_bar} alignItems="center">
        <Link to="/company" className={active ==='Company' ? classes.tab_active : classes.tab} onClick={setActive('Company')}>
          Company
        </Link>
        <Link to="/profile" className={active ==='Profile' ? classes.tab_active : classes.tab} onClick={setActive('Profile')}>
          Profile
        </Link>
        <Link to="/role" className={active ==='Role' ? classes.tab_active : classes.tab} onClick={setActive('Role')}>
          Employees/Role
        </Link>
        <Link to="/qr" className={active ==='QR' ? classes.tab_active : classes.tab} onClick={setActive('QR')}>
          QR
        </Link>
        {
          id &&
        <Link className={active ==='User' ? classes.tab_active : classes.tab}>
          {UserProfiles &&
            UserProfiles?.data.full_name
          }
        </Link>
        }
      </Grid> */}

      <Grid container spacing={16} direction="row" className={classes.top_bar} alignItems="center">
        <Link to="/company" className={active ==='Company' ? classes.tab_active : classes.tab} onClick={() => handleTab('Company')}>
          Company
        </Link>
        <Link to="/profile" className={active ==='Profile' ? classes.tab_active : classes.tab} onClick={() => handleTab('Profile')} >
          Profile
        </Link>
        <Link to="/role" className={active ==='Role' ? classes.tab_active : classes.tab} onClick={() => handleTab('Role')} >
          Employees/Role
        </Link>
        <Link to="/qr" className={active ==='QR' ? classes.tab_active : classes.tab} onClick={() => handleTab('QR')}>
          QR
        </Link>
        {
          id &&
        <Link className={active ==='User' ? classes.tab_active : classes.tab}>
          {UserProfiles &&
            UserProfiles?.data.full_name
          }
        </Link>
        }

      </Grid>
        { location.pathname === '/company' &&
          <CompanyInfo info={CompanyDetails?.data} />
        }
        { location.pathname === '/profile' &&
         <MyProfile />
        }
        { location.pathname === '/role' &&
        <Role handleProfile={handleEdit} />
        }
        { location.pathname === '/qr' &&
        <QR />
        }
        { id &&
        <EditUser />
        }
    </>
  );
};

export default Company;
