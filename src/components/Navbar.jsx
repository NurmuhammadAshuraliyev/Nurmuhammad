import { NavLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("skills"), path: "/skills" },
    { name: t("projects"), path: "/projects" },
    { name: t("contact"), path: "/contact" },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b dark:border-gray-700 shadow-sm">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="flex items-center font-semibold text-[20px]">
          N
          <span className="font-semibold text-[20px] hidden md:inline">
            urmuhammad's portfolio
          </span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4">
          {links.map(({ name, path }, index) => (
            <li className="text-[16px]" key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                      : "text-gray-500 hover:text-black dark:hover:text-white"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Always-visible Controls */}
        <div className="flex items-center gap-3.5">
          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[100px] cursor-pointer text-sm">
              <SelectValue placeholder="Uzb" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz">Uzb</SelectItem>
              <SelectItem value="ru">Rus</SelectItem>
              <SelectItem value="en">Eng</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="cursor-pointer"
            size="icon"
            variant="outline"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          {/* Burger button: only visible on mobile */}
          <Button
            className="md:hidden"
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-4">
          <ul className="flex flex-col space-y-3 pt-3">
            {links.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block transition-colors ${
                      isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-gray-500 hover:text-black dark:hover:text-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
