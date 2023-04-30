import { legacy_createStore as createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';
import { jobReducer } from './jobReducer';
import { companyReducer } from './companyReducer';


// let reducers = combineReducers({
//     catalogPage:catalogReducer
// });

// let store = createStore(reducers);

// window.store=store;




let rootReducer=combineReducers({
users:userReducer,
jobs:jobReducer,
companies:companyReducer,
}
)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
