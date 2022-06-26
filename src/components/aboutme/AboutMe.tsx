// @ts-ignore because this library has no TS defs
import Obfuscate from "react-obfuscate";
import Icons from "../common/Icons";
import { withTranslation } from "react-i18next";
import "./AboutMe.scss";

const AboutMe = withTranslation()(({ i18n }) => {
    if (!i18n) return <></>;

    return (
        <>
            <h1 id="aboutme">{i18n.t("About Me")}</h1>
            <div className="about-me">
                <img
                    src="https://i.imgur.com/X4lQ2Wa.png"
                    alt="Myself in a red shirt"
                />
                <div>
                    <p>{i18n.t("AboutText")}</p>
                    <div className="links">
                        <a
                            className="button"
                            href="https://github.com/toberge"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Icons.GitHub /> GitHub
                        </a>
                        <a
                            className="button"
                            href=" https://www.linkedin.com/in/toberge"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Icons.LinkedIn /> LinkedIn
                        </a>
                        <Obfuscate
                            className="button"
                            email="&#116;&#111;&#114;&#101;&#046;&#098;&#101;&#114;&#103;&#101;&#098;&#097;&#107;&#107;&#101;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                            obfuscateChildren={false}
                        >
                            <Icons.Email /> {i18n.t("Email")}
                        </Obfuscate>
                    </div>
                </div>
            </div>
        </>
    );
});

export default AboutMe;
