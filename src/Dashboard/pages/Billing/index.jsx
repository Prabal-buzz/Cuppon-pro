import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from './List/store/actions';
import CustomTable from './List/components/Table';
import { resetSalesItem } from './Create/store/actions';
import { AuthContext } from '../../../App/auth';

function Billing() {
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const BillList = useSelector((state) => state.getBillList.response);

  useEffect(() => {
    dispatch(actions.getList(context.currentUser.company[0].id));
    dispatch(resetSalesItem());
  }, [dispatch, context.currentUser.company]);

  const columns = [
    { key: 'created_at', name: 'Issue Date' },
    { key: 'invoice_number', name: 'Doc No.' },
    { key: 'name', name: 'Costumer No | Name' },
    { key: 'payment_mode', name: 'Payment' },
    { key: 'taxed_amount', name: 'Tax' },
    { key: 'grand_total', name: 'Amount' },
    { key: 'paid_amount', name: 'Paid Amount' },
    { key: 'paid', name: 'Status' },
  ];

  return <CustomTable columns={columns} rows={BillList?.data} />;
}

export default Billing;
