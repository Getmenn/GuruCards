import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Global } from './components/styled/styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  
    <>
      <Global />
      <App />
    </>
   
);