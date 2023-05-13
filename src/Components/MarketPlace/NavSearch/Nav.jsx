import Settings from "../Main/MainBody5/Settings";
import { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { DarkLightContext } from "../MarketP";

const Nav = () => {
  const darkLight = useContext(DarkLightContext);
  return (
    <div>
      <nav>
        <section>
          <button
            className={`bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md ${
              darkLight.darkMode ? "active" : ""
            }`}
            onClick={() => darkLight.setDarkMode(!darkLight.darkMode)}
          >
            {darkLight.darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <h1 className=" text-96 text-blue-400 dark:text-green-500 ">
            HELLO LET"S SEE HOW STRONG ARE YOU PEOPLE WOHAHAHAHA
          </h1>
        </section>
        <section>
          <Link to="settings">Settings</Link>
        </section>
      </nav>
      <Routes>
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Nav;
