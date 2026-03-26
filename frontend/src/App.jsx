//frontend\src\App.jsx

import { Login, SignUp, Dashboard, InterviewPrep, LandingPage } from "./Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserProvider from "./Context/userContext";
import Navbar from "./components/layout/Navbar";
import TipsAndTricks from "./Pages/Tips/TipsAndTricks";

function App() {
  return (
    <>
      <UserProvider>
        <div>
          <Router>
             <Navbar />
             <div className="min-h-screen-20" >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/interview-prep/:sessionId"
                element={<InterviewPrep />}
              />
              <Route path="/tips" element={<TipsAndTricks />} />
            </Routes>
            </div>
          </Router>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                fontSize: "13px",
              },
            }}
          />
        </div>
      </UserProvider>
    </>
  );
}

export default App;

