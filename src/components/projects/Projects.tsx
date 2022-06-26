import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Project, projects } from "../../data/Projects";
import Icons from "../common/Icons";
import "./Projects.scss";
import { EmbedBox } from "../shared/Embed";

export function ProjectItem({
    project: { name, date, description, embed, githubURL, paperURL, demoURL },
}: {
    project: Project;
}) {
    const { t } = useTranslation();
    return (
        <li className="project">
            <div className="text">
                <h2>
                    <span className={"time"}>{date}</span> —{" "}
                    <span className={"title"}>{name}</span>
                </h2>
                {description && <p>{description}</p>}
            </div>
            {embed && <EmbedBox embed={embed} />}
            <div className="links">
                {githubURL && (
                    <a
                        className="button"
                        href={githubURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.GitHub />
                        {" " + t("Code")}
                    </a>
                )}
                {paperURL && (
                    <a
                        className="button"
                        href={paperURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.Paper />
                        {" " + t("Paper")}
                    </a>
                )}
                {demoURL && (
                    <a
                        className="button"
                        href={demoURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.Demo />
                        {" " + t("Demo")}
                    </a>
                )}
            </div>
        </li>
    );
}

const Projects = () => {
    const { t, i18n } = useTranslation();
    const [showAll, setShowAll] = useState(false);

    return (
        <>
            <h1 id="projects" style={{ marginBottom: 0 }}>
                {t("Projects")}
            </h1>
            <ul className="project-area">
                {(projects[i18n.language] || projects["en"])
                    .slice(0, showAll ? undefined : 3)
                    .map(p => (
                        <ProjectItem project={p} />
                    ))}
                {!showAll &&
                    (projects[i18n.language] || projects["en"]).length > 3 && (
                        <li>
                            <button
                                className="button"
                                onClick={() => setShowAll(true)}
                            >
                                {t("Show All")}
                            </button>
                        </li>
                    )}
            </ul>
        </>
    );
};

export default Projects;
