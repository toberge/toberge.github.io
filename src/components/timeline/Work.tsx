import React from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "./Timeline";
import { TimelineItem } from "./TimelineItem";
import { workExperience } from "../../data/Work";

export default function Work() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h1 id="work" style={{ marginBottom: 0 }}>
                {t("Work Experience")}
            </h1>
            <Timeline>
                {(workExperience[i18n.language] || workExperience["en"]).map(
                    w => (
                        <TimelineItem
                            title={w.title}
                            date={w.date}
                            subtitle={w.position}
                            description={w.description}
                        />
                    ),
                )}
            </Timeline>
        </>
    );
}
