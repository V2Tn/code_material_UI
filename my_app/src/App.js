import { Route, Routes } from "react-router-dom";
import SearchAppBar from "./components/SearchBar";
import HomePage from "./page/HomePage";
import JobDetail from "./page/JobDetail";
import ThemeProvider from "./theme/index";

function App() {
  return (
    <ThemeProvider>
      <div id="root">
        <SearchAppBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
