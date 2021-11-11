import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../../App/auth';
import CustomTable from './components/Table';
import actions from './store/actions';

const Orders = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const [active, setActive] = useState(true);
  const ordersList = useSelector((state) => state.orders.response);

  useEffect(() => {
    dispatch(actions.getOrders(currentUser.company[0].id));
  }, [dispatch, currentUser]);

  const filter = (e) => {
    setActive(!active);
  };

  const columns = [
    { key: 'asset_name', name: 'Number' },
    { key: 'items', name: 'Items' },
    { key: 'grand_total', name: 'Total Amount' },
    { key: 'discount', name: 'Discount' },
    { key: 'status', name: 'Status' },
  ];

  return active ? (
    <CustomTable
      columns={columns}
      rows={ordersList?.data.filter((e) => !e.is_billed)}
      onFilter={filter}
      active={active}
    />
  ) : (
    <CustomTable
      columns={columns}
      rows={ordersList?.data.filter((e) => e.is_billed)}
      onFilter={filter}
      active={active}
    />
  );
};

export default Orders;
