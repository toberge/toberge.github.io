import React from "react";

const GitHub = () => <i className="fab fa-github"></i>;
const LinkedIn = () => <i className="fab fa-linkedin"></i>;
const Email = () => <i className="fas fa-envelope"></i>;
const Language = () => <i className="fas fa-globe"></i>;
const Demo = () => <i className="fas fa-play"></i>;
const Devicon = ({ language }: { language: string }) => (
    <i className={`devicon-${language}-plain`}></i>
);

const Icons = {
    GitHub,
    LinkedIn,
    Email,
    Language,
    Demo,
    Devicon,
};

export default Icons;
