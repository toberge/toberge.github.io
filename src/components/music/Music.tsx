import { useTranslation } from "react-i18next";
import { EmbedBox } from "../shared/Embed";
import "./Music.scss";

const Music = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1 id="music" style={{ marginBottom: 0 }}>
                {t("Music")}
            </h1>
            <ul className="music-area">
                {[
                    // Woodland Chase
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1368671695",
                    // Velvet Touch
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455028900",
                    // The Missing Floor
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/420930108",
                    // Small Steps
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1355510512",
                    // Lethargic Raindrops
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1301526613",
                    // Blue Bird
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1006273291",
                    // Clavelian March
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150459813",
                    // Obsidian Alley
                    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173644457",
                ].map(url => (
                    <li className="project">
                        <EmbedBox embed={{ url, type: "soundcloud" }} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Music;
