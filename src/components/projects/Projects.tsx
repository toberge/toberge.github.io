import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { projects } from "../../data/Projects";
import Icons from "../common/Icons";
import { Embed } from "../../data/Embed";
import "./Projects.scss";

interface Props {
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    embed?: Embed;
    githubURL?: string;
    demoURL?: string;
}

export function ProjectItem({
    title,
    subtitle,
    date,
    description,
    embed,
    githubURL,
    demoURL,
}: Props) {
    return (
        <li className="project">
            <div className="text">
                <h2>
                    <span className={"time"}>{date}</span> —{" "}
                    <span className={"title"}>{title}</span>
                </h2>
                {subtitle && <h3>{subtitle}</h3>}
                {description && <p>{description}</p>}
            </div>
            {embed &&
                (embed.type === "image" ? (
                    <img
                        className="embed"
                        src={embed.url}
                        alt={embed.altText}
                    />
                ) : (
                    embed.type === "youtube" && (
                        <p className="embed">video here</p>
                    )
                ))}
            <div className="links">
                {githubURL && (
                    <a
                        className="button"
                        href={githubURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.GitHub /> Code
                    </a>
                )}
                {demoURL && (
                    <a
                        className="button"
                        href={demoURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.Demo /> Demo
                    </a>
                )}
            </div>
        </li>
    );
}

const Projects = withTranslation()(({ i18n }) => {
    const [showAll, setShowAll] = useState(false);

    if (!i18n) return <></>;

    return (
        <>
            <h1 id="projects" style={{ marginBottom: 0 }}>
                {i18n.t("Projects")}
            </h1>
            <ul className="project-area">
                {(projects[i18n.language] || projects["en"])
                    .slice(0, showAll ? undefined : 3)
                    .map(p => (
                        <ProjectItem
                            title={p.name}
                            date={p.date}
                            description={p.description}
                            embed={p.embed}
                            githubURL={p.githubURL}
                            demoURL={p.demoURL}
                        />
                    ))}
                {!showAll &&
                    (projects[i18n.language] || projects["en"]).length > 3 && (
                        <li>
                            <button
                                className="button"
                                onClick={() => setShowAll(true)}
                            >
                                {i18n.t("Show All")}
                            </button>
                        </li>
                    )}
            </ul>
        </>
    );
});

export default Projects;
