import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="swap swap-rotate cursor-pointer ">

      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleTheme}
      />

      {/* Sun Icon */}
      <svg
        className="swap-on h-7 w-7 fill-current font-light"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.66L4.22 19.07L2.81 17.66L4.22 16.24L5.64 17.66ZM12 18A6 6 0 1112 6A6 6 0 0112 18ZM20 13H23V11H20V13ZM17.66 5.64L19.07 4.22L17.66 2.81L16.24 4.22L17.66 5.64ZM11 1H13V4H11V1ZM18.36 17.66L19.78 19.07L21.19 17.66L19.78 16.24L18.36 17.66ZM1 13H4V11H1V13ZM6.34 5.64L4.93 4.22L3.51 5.64L4.93 7.05L6.34 5.64Z" />
      </svg>

      {/* Moon Icon */}
      <svg
        className="swap-off h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13A9 9 0 1111 2.36A7 7 0 0021.64 13Z" />
      </svg>

    </label>
  );
};

export default ThemeToggle;