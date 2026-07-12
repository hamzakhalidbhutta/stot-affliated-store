import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin'; // Ensure this path is correct
import Home from './pages/Home';   // Your homepage or list of tools

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;