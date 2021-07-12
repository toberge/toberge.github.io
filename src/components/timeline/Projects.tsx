import React from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "./Timeline";
import { projects } from "../../data/Projects";
import { TimelineItem } from "./TimelineItem";

export default function Projects() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h1 id="projects" style={{ marginBottom: 0 }}>
                {t("Projects")}
            </h1>
            <Timeline withEmbeds>
                {(projects[i18n.language] || projects["en"]).map(p => (
                    <TimelineItem
                        title={p.name}
                        date={p.date}
                        description={p.description}
                        embed={p.embed}
                        githubURL={p.githubURL}
                        demoURL={p.demoURL}
                    />
                ))}
            </Timeline>
        </>
    );
}
