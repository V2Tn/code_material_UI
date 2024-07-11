import { Route, Routes, useLocation } from "react-router-dom";
import SearchAppBar from "./components/SearchBar";
import HomePage from "./page/HomePage";
import JobDetail from "./page/JobDetail";
import ThemeProvider from "./theme/index";
import Login from "./page/Login";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";
import FormLoginModal from "./components/FormLoginModal";

function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);
  const state = location.state;
  return (
    <ThemeProvider>
      <div id="root">
        <SearchAppBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="login" element={<Login />} />
        </Routes>
        {state && auth.user ? (
          <Routes>
            <Route path="/job/:id" element={<JobDetail />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/job/:id" element={<FormLoginModal />}></Route>
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
