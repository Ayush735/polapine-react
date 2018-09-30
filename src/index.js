import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import createHistory from 'history/createBrowserHistory';
import AppRouter from './routes/routes';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(historyMiddleware, thunk)
  )
)

ReactDOM.render(
	<Provider store={store}>
  		<AppRouter />
    </Provider>, 
    document.getElementById('root')
);
