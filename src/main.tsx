import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GlobalContextComponent from './context/GlobalContextComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <GlobalContextComponent>
    <App/>
  </GlobalContextComponent>
)
