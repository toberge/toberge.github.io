const Demo = () => <i className="fas fa-play"></i>;
const Email = () => <i className="fas fa-envelope"></i>;
const GitHub = () => <i className="fab fa-github"></i>;
const Language = () => <i className="fas fa-globe"></i>;
const LinkedIn = () => <i className="fab fa-linkedin"></i>;
const Paper = () => <i className="fas fa-scroll"></i>;
const Devicon = ({ language }: { language: string }) => (
    <i className={`devicon-${language}-plain`}></i>
);

const Icons = {
    Demo,
    Email,
    GitHub,
    Language,
    LinkedIn,
    Paper,
    Devicon,
};

export default Icons;
