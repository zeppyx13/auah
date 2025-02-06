import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Login from "./views/Login";
import Dashboard from "./views/users/dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
