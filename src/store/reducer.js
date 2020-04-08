import { combineReducers } from 'redux-immutable';
import { detailReducer } from '../components/detail/store';

const reducer = combineReducers({
    detail : detailReducer
});

export default reducer;


