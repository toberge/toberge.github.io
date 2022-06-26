import en from "./en/projects.json";
import no from "./no/projects.json";
import { Embed } from "./Embed";

export interface Project {
    name: string;
    date: string;
    description?: string;
    embed?: Embed;
    githubURL?: string;
    demoURL?: string;
    paperURL?: string;
}

export const projects: Record<string, Project[]> = {
    en,
    no,
};
