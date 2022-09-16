import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Footer, Navbar, Sidebar } from "./components";
import { Context } from "./contexts/Context";
import { CoinsListPage } from "./pages";

function App() {
  const { setCurrentMode, activeMenu } = useContext(Context);

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
              {<Sidebar />}
            </div>
          ) : (
            <div className="w-0 bg-secondary-dark-bg">{<Sidebar />}</div>
          )}
          <div
            className={
              activeMenu
                ? "bg-main-dark-bg min-h-screen md:ml-72 w-full"
                : "bg-main-dark-bg  w-full min-h-screen flex-2"
            }
          >
            <div className="fixed md:static bg-secondary-dark-bg navbar w-full ">
              {<Navbar />}
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<CoinsListPage />} />
                <Route path="/moedas" element={<CoinsListPage />} />
              </Routes>
            </div>
            {<Footer />}
          </div>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
