import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import JournalPost from './pages/JournalPost';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <div className="min-h-screen bg-true-black">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:id" element={<JournalPost />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;