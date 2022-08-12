import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer, Navbar, Sidebar } from "./components";
import { useStateContext } from "./contexts/Context";
import { CoinsListPage, Login, PrivateRoute } from "./pages";

function App() {
  const { setCurrentMode, activeMenu, auth } = useStateContext();
  //   const token = localStorage.getItem("auth");
  const token = auth;

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <div className={"dark"}>
      <BrowserRouter>
        <div className="flex relative bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-secondary-dark-bg ">
              {token ? <Sidebar /> : <div />}
            </div>
          ) : (
            <div className="w-0 bg-secondary-dark-bg">
              {token ? <Sidebar /> : <div />}
            </div>
          )}
          <div
            className={
              activeMenu && token
                ? "bg-main-dark-bg min-h-screen md:ml-72 w-full"
                : "bg-main-dark-bg  w-full min-h-screen flex-2"
            }
          >
            <div className="fixed md:static bg-secondary-dark-bg navbar w-full ">
              {token ? <Navbar /> : <div />}
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/" element={<CoinsListPage />} />
                  <Route path="/moedas" element={<CoinsListPage />} />
                </Route>

                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            {token ? <Footer /> : <div />}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
