import React from "react";
import { useTranslation } from "react-i18next";
import Icons from "../common/Icons";
import "./Navbar.scss";

export default function Navbar({
    setLanguage,
}: {
    setLanguage: (lang: string) => void;
}) {
    const { t, i18n } = useTranslation();
    return (
        <nav>
            <a className="button" href="#aboutme">
                {t("About")}
            </a>
            <a className="button" href="#projects">
                {t("Projects")}
            </a>
            <a className="button" href="#work">
                {t("Work")}
            </a>
            <a className="button" href="#education">
                {t("Education")}
            </a>
            <button
                className="button"
                onClick={() =>
                    setLanguage(i18n.language === "no" ? "en" : "no")
                }
            >
                <Icons.Language /> {t("Language")}
            </button>
        </nav>
    );
}
