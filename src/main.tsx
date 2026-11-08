import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import './index.css'
import EmptyPage from "./pages/EmptyPage.tsx"
import Header from './components/header/header/header.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find root element')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<App />} />
          <Route path="/hello" element={<App />} />
          <Route path="*" element={<EmptyPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
)