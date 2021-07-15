import React from "react";
import { withTranslation } from "react-i18next";
import { Timeline } from "./Timeline";
import { TimelineItem } from "./TimelineItem";
import { education } from "../../data/Education";

const Education = withTranslation()(({ i18n }) => {
    if (!i18n) return <></>;

    return (
        <>
            <h1 id="education" style={{ marginBottom: 0 }}>
                {i18n.t("Education")}
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
});

export default Education;
