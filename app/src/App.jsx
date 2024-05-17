import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./widgets/Layout/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="" element={} /> */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
