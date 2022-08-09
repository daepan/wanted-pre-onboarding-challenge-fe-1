import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter} from 'react-router-dom';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './store';

const logger = createLogger(); // 로거 미들웨어 활성화
const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 활성화

const store = createStore( // store 생성
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware)) // redux 개발자도구 활성화
);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
