import Icons from "../common/Icons";
import "./Navbar.scss";
import { withTranslation } from "react-i18next";
import { i18n } from "i18next";

const Navbar = withTranslation()(
    ({
        i18n,
        setLanguage,
    }: {
        i18n: i18n;
        setLanguage: (lang: string) => void;
    }) => {
        return (
            <nav>
                <a className="button" href="#aboutme">
                    {i18n.t("About")}
                </a>
                {/* <a className="button" href="#technologies">
                    {i18n.t("Technologies")}
                </a> */}
                <a className="button" href="#projects">
                    {i18n.t("Projects")}
                </a>
                <a className="button" href="#work">
                    {i18n.t("Work")}
                </a>
                <a className="button" href="#education">
                    {i18n.t("Education")}
                </a>
                <a className="button" href="#music">
                    {i18n.t("Music")}
                </a>
                <button
                    className="button"
                    onClick={() =>
                        setLanguage(i18n.language === "no" ? "en" : "no")
                    }
                >
                    <Icons.Language /> {i18n.t("OtherLanguage")}
                </button>
            </nav>
        );
    },
);

export default Navbar;
