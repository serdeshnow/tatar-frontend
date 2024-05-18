import "./styles/App.css";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./widgets/Layout/Layout.jsx";

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
import { RegistrationIntroduction3Page } from "./pages/RegistrationIntroductionPage/RegistrationIntroduction3Page.jsx";
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
          <Route path="friends" element={<FriendsPage />} />
          {/* <Route path="account" element={<PersonalAccountPage />} /> */}
          <Route path="raiting" element={<RaitingPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route
            path="registration/introduction_1"
            element={<RegistrationIntroduction1Page />}
          />
          <Route
            path="registration/introduction_2"
            element={<RegistrationIntroduction2Page />}
          />
          <Route
            path="registration/introduction_3"
            element={<RegistrationIntroduction3Page />}
          />
          {/* </Route> */}
          {/* <Route path="" element={} /> */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
