import React from "react";
import { withTranslation } from "react-i18next";
import { Timeline } from "./Timeline";
import { TimelineItem } from "./TimelineItem";
import { workExperience } from "../../data/Work";

const Work = withTranslation()(({ i18n }) => {
    if (!i18n) return <></>;
    return (
        <>
            <h1 id="work" style={{ marginBottom: 0 }}>
                {i18n.t("Work Experience")}
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
});

export default Work;
