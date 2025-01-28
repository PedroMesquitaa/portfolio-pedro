import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { RiGlobalLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const LanguageItem = ({ language, onClick, isSelected }) => {
  return (
    <DropdownMenu.Item
      className={`${styles.languageItem} ${
        isSelected ? styles.languageSelected : ""
      }`}
      onClick={onClick}
    >
      {language}
      {isSelected && <IoMdCheckmark className={styles.checkIcon} />}
    </DropdownMenu.Item>
  );
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">
        <img src="/favicon.ico" alt="Pedro Mesquita logo" />
      </a>
      <div className={styles.menu}>
        {/* Menu Button Section */}
        <div className={styles.menuButtonContainer}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? "/assets/nav/closeIcon.png"
                : "/assets/nav/menuIcon.png"
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#sobre">{t("navbar.button1")}</a>
            </li>
            <li>
              <a href="#experiencia">{t("navbar.button2")}</a>
            </li>
            <li>
              <a href="#projetos">{t("navbar.button3")}</a>
            </li>
            <li>
              <a href="#contato">{t("navbar.button4")}</a>
            </li>
          </ul>
        </div>

        {/* Language Selector Section */}
        <div className={styles.languageButtonContainer}>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={styles.languageButton}>
                <RiGlobalLine />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              className={styles.languageMenu}
              align="end"
            >
              <LanguageItem
                language="English"
                onClick={() => handleChangeLanguage("en")}
                isSelected={selectedLanguage === "en"}
              />
              <LanguageItem
                language="Português"
                onClick={() => handleChangeLanguage("pt")}
                isSelected={selectedLanguage === "pt"}
              />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </nav>
  );
};
