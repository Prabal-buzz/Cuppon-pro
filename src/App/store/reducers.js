import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { dashboardReducer } from '../../Dashboard';
import { publicReducer } from '../../Public';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    ...publicReducer,
    ...dashboardReducer,
    ...publicReducer,
});

export default createRootReducer;