import Icons from "../common/Icons";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";

const Navbar = ({
    setLanguage,
}: {
    setLanguage: (language: string) => void;
}) => {
    const { t, i18n } = useTranslation();
    return (
        <nav>
            <a className="button" href="#aboutme">
                {t("About")}
            </a>
            {/* <a className="button" href="#technologies">
                    {i18n.t("Technologies")}
                </a> */}
            <a className="button" href="#projects">
                {t("Projects")}
            </a>
            <a className="button" href="#work">
                {t("Work")}
            </a>
            <a className="button" href="#education">
                {t("Education")}
            </a>
            <a className="button" href="#music">
                {t("Music")}
            </a>
            <button
                className="button"
                onClick={() =>
                    setLanguage(i18n.language === "no" ? "en" : "no")
                }
            >
                <>
                    <Icons.Language /> {i18n.t("OtherLanguage")}
                </>
            </button>
        </nav>
    );
};

export default Navbar;
