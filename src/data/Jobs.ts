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
        title: "Quality Assurance Analyst Contractor",
        startDate: "2022-06-29",
        endDate: "2024-06-29",
        company: "Royal Bank of Canada",
        location: "Minneapolis, MN",
        description: "Developed and maintained web applications using React, NextJs, and Tailwind CSS.",
        goals: [
            "Designed, implemented, and maintained 500+ automated functional and integration test scripts for multiple web applications through RBC’s Selenium based keyword-driven automation framework.",
            "Identified and cited 200+ defects spanning multiple web development projects through Jira and Tricentis qTest.",
            "Organized knowledge transfer documents on Confluence to facilitate smooth task transitions between colleagues, reducing application learning time by up to 2 weeks",
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
            "Acquired skills in Java, SQL, JavaScript, CSS, and HTML for a comprehensive full-stack development.",
            "Utilized version control systems, including GitHub, to effectively share and collaborate on code with colleagues, enhancing communication and project efficiency.",
            "Swiftly learned new DevOps concepts to ensure timely completion of our weekly assessment.",
        ],
        currentJob: false,
    },
];
export default workExperience;