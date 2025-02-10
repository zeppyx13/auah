import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Login from "./views/credentials/Login";
import Users from "./views/users/Users";
import Admin from "./views/admin/Admin";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
