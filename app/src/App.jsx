import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./widgets/Layout/Layout.jsx";

import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";
import { CoursesPage } from "./pages/CoursesPage.jsx";
import { ForumPage } from "./pages/ForumPage.jsx";
import { GameTestPage } from "./pages/GameTestPage.jsx";
import { PersonalAccountPage } from "./pages/PersonalAccountPage.jsx";
import { RaitingPage } from "./pages/RaitingPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";
import { ShopPage } from "./pages/ShopPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/test" element={<GameTestPage />} />
          <Route path="/account" element={<PersonalAccountPage />} />
          <Route path="/raiting" element={<RaitingPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="" element={} /> */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
