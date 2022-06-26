import { withTranslation } from "react-i18next";
import { EmbedBox } from "../shared/Embed";
import "./Music.scss";

const Music = withTranslation()(({ i18n }) => {
    if (!i18n) return <></>;

    return (
        <>
            <h1 id="music" style={{ marginBottom: 0 }}>
                {i18n.t("Music")}
            </h1>
            <ul className="music-area">
                {[
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/420930108",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455028900",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1006273291",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150459813",
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173644457",
                ].map(url => (
                    <li className="project">
                        <EmbedBox embed={{ url, type: "soundcloud" }} />
                    </li>
                ))}
            </ul>
        </>
    );
});

export default Music;
