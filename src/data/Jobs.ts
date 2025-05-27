/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Software Developer in Test",
        startDate: "2022-06-29",
        endDate: "2024-06-29",
        company: "Royal Bank of Canada",
        location: "Minneapolis, MN",
        description: "Developed and maintained web applications using React, NextJs, and Tailwind CSS.",
        goals: [
            "Developed and maintained 500+ automation scripts using Java and Selenium to support backend validation and UI functionality as part of the development pipeline. ",
            "Assembled 20-30 automated test scripts per sprint, contributing to a regression suite of 300+ tests that supported CICD and minimized defect leakage throughout the app migration from PCF to OCP.",
            "Incorporated whitebox, blackbox, and boundaryvalue analysis testing methodologies, increasing test coverage by 50\% and identifying 200+ defects, leading to a 20\% improvement in product stability.",
            "Documented testing processes, test cases, and outcomes using tools like JIRA and Confluence, improving team on boarding and future test cycle efficiency by 30\%."
        ],
        currentJob: false,
    },
    {
        title: "Software Developer Trainee",
        startDate: "2022-02-28",
        endDate: "2022-06-28",
        company: "Genesis10",
        location: "Minneapolis, MN",
        description: "Developed skills and tools to create a comprehensive full-stack application.",
        goals: [
            "Constructed 4 full-stack web applications using Spring Boot, React, and MySQL, building features such as user authentication, data visualization, and CRUD functionality while strengthening skills in Java, SQL, JavaScript, CSS, and HTML.",
            "Programmed RESTful APIs to enable seamless communication between front-end and back-end services, improving data flow and system efficiency.",
            "Developed proficiency in DevOps principles, using Jenkins and Docker for containerization and deployment, accelerating application delivery.",
        ],
        currentJob: false,
    },
];
export default workExperience;