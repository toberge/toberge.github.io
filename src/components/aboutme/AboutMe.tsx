import React from "react";
// @ts-ignore because this library has no TS defs
import Obfuscate from "react-obfuscate";
import Icons from "../common/Icons";
import { useTranslation } from "react-i18next";
import "./AboutMe.scss";

export function AboutMe() {
    const { t } = useTranslation();

    return (
        <>
            <h1 id="aboutme">{t("About Me")}</h1>
            <div className="about-me">
                <img
                    src="https://i.imgur.com/99Bdssv.jpg"
                    alt="Myself in a wool sweater"
                />
                <div>
                    <p>Lorem ipsum dolor sit amet</p>
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
                            <Icons.Email /> {t("Email")}
                        </Obfuscate>
                    </div>
                </div>
            </div>
        </>
    );
}
