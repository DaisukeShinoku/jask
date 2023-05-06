import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App'
import { LoginProvider } from './component/providers/LoginProvider'
const root = createRoot(document.getElementById('root'));
root.render(<LoginProvider><App /></LoginProvider>);