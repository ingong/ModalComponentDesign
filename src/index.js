import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Modals from './Modals';
import App from './App';
import ModalsProvider from './ModalsProvider';

ReactModal.setAppElement('#root');

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ModalsProvider>
      <Modals />
      <App />
    </ModalsProvider>
  </StrictMode>,
  rootElement
);
