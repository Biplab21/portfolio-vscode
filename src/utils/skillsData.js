import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiNestjs, SiChakraui, SiRedux, SiMongodb, SiRedis, SiTypescript, SiPostman, SiExpress, SiFirebase, SiJquery } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";


export const skillsData = [
    {
        skillName: "Frontend",
        skillInfo: [
           {
            name: "HTML",
            icon: <FaHtml5 />
           },
           {
            name: "CSS",
            icon:<FaCss3Alt />
           },
           {
            name: "Jquery",
            icon:<SiJquery />
           },
           {
            name: "Javascript",
            icon: <IoLogoJavascript />
           },
           {
            name: "React",
            icon: <FaReact />
           },
           {
            name: "Redux",
            icon: <SiRedux />
           },
           {
            name: "Bootstrap",
            icon: <FaBootstrap />
           },
           {
            name: "Tailwind",
            icon: <SiTailwindcss />
           },
           {
            name: "ChakraUI",
            icon: <SiChakraui />
           },
        ]
    },
    {
        skillName: "Backend",
        skillInfo: [
            {
                name: "NodeJS",
                icon: <FaNodeJs />
            },
            {
                name: "NestJS",
                icon: <SiNestjs />
            }
        ]
    },
    {
        skillName: "Database",
        skillInfo: [
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "MySQL",
                icon: <GrMysql />
            },
            {
                name: "PostgreSQL",
                icon: <BiLogoPostgresql />
            },
            {
                name: "Redis",
                icon: <SiRedis />
            },
        ]
    },
    {
        skillName: "Others",
        skillInfo: [
            {
                name: "Typescript",
                icon: <SiTypescript />
            },
            {
                name: "ExpressJS",
                icon: <SiExpress />
            },
            {
                name: "Github",
                icon: <FaGithub />
            },
            {
                name: "Postman",
                icon: <SiPostman />
            },
            {
                name: "Firebase",
                icon: <SiFirebase />
            },
            {
                name: "Linux",
                icon: <FaLinux />
            },
        ]
    }
];

