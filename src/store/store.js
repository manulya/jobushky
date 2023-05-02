import { legacy_createStore as createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';
import { jobReducer } from './jobReducer';
import { companyReducer } from './companyReducer';
import { requestReducer } from './requestReducer';



let rootReducer=combineReducers({
users:userReducer,
jobs:jobReducer,
companies:companyReducer,
requests:requestReducer
}
)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
