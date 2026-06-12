import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import RouteBuilder from "./pages/RouteBuilder";
import StopList from "./pages/StopList";
import StudentAssign from "./pages/StudentAssign";
import DriverProfile from "./pages/DriverProfile";
import MapView from "./pages/MapView";
import ParentNotify from "./pages/ParentNotify";
import DelayAlert from "./pages/DelayAlert";
import History from "./pages/History";
import ExportPage from "./pages/ExportPage";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/routebuilder" element={<RouteBuilder />} />

        <Route path="/stoplist" element={<StopList />} />

        <Route path="/studentassign" element={<StudentAssign />} />

        <Route path="/driverprofile" element={<DriverProfile />} />

        <Route path="/mapview" element={<MapView />} />

        <Route path="/parentnotify" element={<ParentNotify />} />

        <Route path="/delayalert" element={<DelayAlert />} />

        <Route path="/history" element={<History />} />

        <Route path="/export" element={<ExportPage />} />

        <Route path="/adminpanel" element={<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;