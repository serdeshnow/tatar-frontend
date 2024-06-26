import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./widgets/Layout/Layout.jsx";
// import { RegLayout } from "./widgets/Layout/RegLayout.jsx";

// import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";
import { CoursesPage } from "./pages/CoursesPage.jsx";
import { ForumPage } from "./pages/ForumPage.jsx";
import { GameTestPage } from "./pages/GameTestPage.jsx";
import { PersonalAccountPage } from "./pages/PersonalAccountPage.jsx";
import { RaitingPage } from "./pages/RaitingPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";
import { RegistrationIntroduction1Page } from "./pages/RegistrationIntroductionPage/RegistrationIntroduction1Page.jsx";
import { RegistrationIntroduction2Page } from "./pages/RegistrationIntroductionPage/RegistrationIntroduction2Page.jsx";
// import { RegistrationIntroduction3Page } from "./pages/RegistrationIntroductionPage/RegistrationIntroduction3Page.jsx";
import { RegistrationIntroduction4Page } from "./pages/RegistrationIntroductionPage/RegistrationIntroduction4Page.jsx";
import { SignUpPage } from "./pages/SignUpPage.jsx";
import { BattlePage } from "./pages/BattlePage.jsx";

import { ShopPage } from "./pages/ShopPage.jsx";
import { FriendsPage } from "./pages/FriendsPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PersonalAccountPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="test" element={<GameTestPage />} />
          <Route path="battle" element={<BattlePage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="raiting" element={<RaitingPage />} />
          <Route path="shop" element={<ShopPage />} />
          {/* <Route path="" element={} /> */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="registration/auth" element={<SignUpPage />} />
        <Route
          path="registration/introduction_1"
          element={<RegistrationIntroduction1Page />}
        />
        <Route
          path="registration/introduction_2"
          element={<RegistrationIntroduction2Page />}
        />
        {/* <Route
          path="registration/introduction_3"
          element={<RegistrationIntroduction3Page />}
        /> */}
        <Route
          path="registration/introduction_4"
          element={<RegistrationIntroduction4Page />}
        />
        <Route path="test" element={<GameTestPage />} />
      </Routes>
    </div>
  );
}

export default App;
