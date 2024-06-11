import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import VendorPortal from "./pages/VendorPortal.jsx";
import Register from "./pages/Register.jsx";
import WorkplaceDashboard from "./pages/WorkplaceDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Login from "./pages/Login.jsx";
import ServiceOverview from "./pages/ServiceOverview.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import RequestQuote from "./pages/RequestQuote.jsx";
import Navbar from "./components/Navbar.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import SubsidyPrograms from "./pages/SubsidyPrograms.jsx";
import MaintenancePlans from "./pages/MaintenancePlans.jsx";
import WorkflowAutomation from "./pages/WorkflowAutomation.jsx";
import AIAnalysis from "./pages/AIAnalysis.jsx";
import Notifications from "./pages/Notifications.jsx";
import CentralizedWorkspace from "./pages/CentralizedWorkspace.jsx";
import ResidentRequests from "./pages/ResidentRequests.jsx";
import PredefinedWorkflows from "./pages/PredefinedWorkflows.jsx";

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
        <Route exact path="/support" element={<SupportPage />} />
        <Route exact path="/subsidy-programs" element={<SubsidyPrograms />} />
        <Route exact path="/vendor-portal" element={<VendorPortal />} />
      </Routes>
    </Router>
  );
}

export default App;