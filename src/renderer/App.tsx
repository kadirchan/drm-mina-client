import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Home from './pages/home';
import { Sidebar } from './components/sidebar';
import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme-mode">
      <div className="border-t absolute inset-0">
        <div className="bg-background absolute inset-0">
          <div className="grid lg:grid-cols-5">
            <Router>
              <Sidebar className="lg:block h-screen" />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Home />} />
                <Route path="/browse" element={<div>browse</div>} />
                <Route path="/categories" element={<div>categories</div>} />
                <Route path="/library" element={<div>library</div>} />
                <Route path="/wishlist" element={<div>wishlist</div>} />
                <Route path="/wallet" element={<div>wallet</div>} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

declare global {
  interface Window {
    api?: any;
  }
}
