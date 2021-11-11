import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Delete from './Delete';
import EditRow from './EditRow';
import { editSalesItem } from "../../store/actions";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'black',
    color: 'white',
    height: '32px',
  },
  body: {
    fontSize: 14,
    border: 'none'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function ShowRow({ columns, row, index }) {
  const customColumnStyle1 = { width: "2.5%" };
  const customColumnStyle2 = { width: "25%" };
  const customColumnStyle3 = { width: "12.3%" };
  const customColumnStyle4 = { width: "6%" };

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const handleEdit = (id) => {
    setOpen(!open);
  };

  const editItem = (data) => {
    data.quantity = parseInt(data.quantity);
    data.rate = parseInt(data.rate);
    data.total = parseInt(data.total);
    dispatch(editSalesItem(data));
    setOpen(!open);
  };

  return (
    <div>
      {open ?
        <StyledTableRow key={row.id}>
          {columns.map((col) => (
            <StyledTableCell style={col.name === 'No' ? customColumnStyle1 :
              col.name === 'Item Name' ? customColumnStyle2 : customColumnStyle3} key={col.key} align="left">
              {col.name === 'No' ? index : row[col.key]}
            </StyledTableCell>
          ))}
          <StyledTableCell style={customColumnStyle4} align="right">
            <IconButton onClick={handleEdit} size='small'>
              <CreateIcon />
            </IconButton>
          </StyledTableCell>
          <StyledTableCell style={customColumnStyle4} align="left">
            <Delete id={index} />
          </StyledTableCell>
        </StyledTableRow>
        :
        <EditRow columns={columns} row={row}
          form={`Edit_Sales_Item_Form`}
          form_name="Edit_Sales_Item_Form"
          onSubmit={editItem}
          index={index}
          initialValues={row}
          text="Save" />}
    </div>
  )
}