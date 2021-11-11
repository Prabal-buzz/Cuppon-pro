import actions from "../actions";

const initialState = {
  tax: 0,
  voucher: null,
  sales_item : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_SALES_ITEMS:
      return {
        ...state, 
        sales_item: [...state.sales_item, ...action.data]
      };
    
    case actions.ADD_SALES_ITEM:
      return {
        ...state, 
        sales_item: [...state.sales_item, action.data]
      };

    case actions.EDIT_SALES_ITEM:
      let oldSales = [...state.sales_item];
      const point = state.sales_item.findIndex(item => item.idx === action.data.idx);

      if(point >= 0){
          oldSales.splice(point, 1, action.data);
      }else{
          console.warn(`cannot remove id: ${action.data.idx}`)
      }
      return {
          ...state,
          sales_item: oldSales
        }

    case actions.DELETE_SALES_ITEM:
      let newSales = [...state.sales_item];
      const index = state.sales_item.findIndex(item => item.idx === action.id);

      if(index >= 0){
          newSales.splice(index, 1);
      }else{
          console.warn(`cannot remove id: ${action.id}`)
      }
      return {
          ...state,
          sales_item: newSales
        }
    
    case actions.RESET_SALES_ITEM:
      return {
        ...state, 
        sales_item: []
      };

    default:
      return state;
  }
};

export default reducer;
