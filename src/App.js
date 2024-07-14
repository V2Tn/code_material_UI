import { Route, Routes } from "react-router-dom";
import SearchAppBar from "./components/SearchBar";
import HomePage from "./page/HomePage";
import JobDetail from "./page/JobDetail";
import ThemeProvider from "./theme/index";
import Login from "./page/Login";

function App() {
  return (
    <ThemeProvider>
      <div id="root">
        <SearchAppBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/job/:id" element={<JobDetail />}></Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
