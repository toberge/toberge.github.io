import React from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "./Timeline";
import { TimelineItem } from "./TimelineItem";
import { education } from "../../data/Education";

export default function Education() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h1 id="education" style={{ marginBottom: 0 }}>
                {t("Education")}
            </h1>
            <Timeline>
                {(education[i18n.language] || education["en"]).map(e => (
                    <TimelineItem
                        title={e.school}
                        date={e.date}
                        subtitle={e.program}
                        description={e.description}
                    />
                ))}
            </Timeline>
        </>
    );
}
