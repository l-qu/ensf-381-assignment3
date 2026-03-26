import './App.css';
import Homepage from "./Homepage"
import FlavorsPage from "./FlavorsPage"
// import LoginPage from "./LoginPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// delete this once LoginPage is done
function LoginPage() {
  return <p>Login Page</p>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/flavors" element={<FlavorsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
