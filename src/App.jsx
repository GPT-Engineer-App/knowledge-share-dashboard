import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import WorkplaceDashboard from "./pages/WorkplaceDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Login from "./pages/Login.jsx";
import ServiceOverview from "./pages/ServiceOverview.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import RequestQuote from "./pages/RequestQuote.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/arbejdsplads" element={<WorkplaceDashboard />} />
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/services" element={<ServiceOverview />} />
        <Route exact path="/services/:category" element={<ServiceDetails />} />
        <Route exact path="/request-quote" element={<RequestQuote />} />
      </Routes>
    </Router>
  );
}

export default App;