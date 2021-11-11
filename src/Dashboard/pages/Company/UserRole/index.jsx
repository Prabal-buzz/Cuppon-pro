import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../../../App/auth';
import AddUser from "./components//AddUser/index";
import CustomTable from './components/Table/index';

import { useDispatch, useSelector } from 'react-redux';
import { getRole, saveNewStaff, getAllUser } from "./store/actions";

const Role = ({handleProfile}) => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const UserList = useSelector((state) => state.getAllUser.response);
  const addUser = useSelector((state) => state.AddUser.response);
  const RoleList = useSelector((state) => state.roleGetList.response);

  console.log(UserList, 'listing');
  console.log(RoleList, 'listing');

  useEffect(() => {
    dispatch(getRole());
    dispatch(getAllUser(currentUser.company[0].id));
  }, [dispatch, currentUser, addUser]);

  const handleNewUserForm = (data) => {
    data.is_manager === 'true' ? data.is_manager = true : data.is_manager = false;
    dispatch(saveNewStaff(data, currentUser.company[0].id));
  };

  const columns = [
    { key: 'image', name: '', type: 'image', alt: 'first_name' },
    { key: 'full_name', name: 'Name' },
    { key: 'group', name: 'Role' },
    { key: 'phone_number', name: 'Contact No' },
    { key: 'address', name: 'Address' },
  ];

  return (
    <>
        <AddUser onSubmit={handleNewUserForm} initialValues={{email: '', password: ''}}/>
        <CustomTable
            open={handleProfile}
            columns={columns}
            rows={UserList?.data}
        />
    </>
  );
};

export default Role;
