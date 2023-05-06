import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { LoginProvider } from './component/providers/LoginProvider'
import { BrowserRouter } from 'react-router-dom'
const root = createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginProvider>
);