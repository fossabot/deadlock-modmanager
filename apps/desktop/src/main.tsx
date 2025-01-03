import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './app'

import './index.css'
import GetMods from './pages/mods'
import MyMods from './pages/my-mods'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<MyMods />} />
          <Route path="/mods" element={<GetMods />} />
          <Route path="/downloads" element={<div>Downloads</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
