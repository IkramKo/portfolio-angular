import { SkillsIcons } from "./skills-icons";
export interface SkillsInfo {
    icon: string,
    name: string
}

export const SKILLS_LIST: SkillsInfo[] = [
    { icon: SkillsIcons.Ts, name: 'TypeScript'},
    { icon: SkillsIcons.Angular, name: 'Angular'},
    { icon: SkillsIcons.NodeJs, name: 'NodeJs'}
];