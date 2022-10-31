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
            <a
                className="button"
                href="javascript:void()"
                onClick={() =>
                    setLanguage(i18n.language === "no" ? "en" : "no")
                }
            >
                <Icons.Language /> {t("OtherLanguage")}
            </a>
        </nav>
    );
};

export default Navbar;
