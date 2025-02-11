interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Bachelor of Arts in Computer Science",
        startDate: "2018-09-01",
        endDate: "2021-12-20",
        school: "University of Minnesota: Twin Cities",
        location: "Minneapolis, MN",
        description: "",
        currentUni: false,
    }
];

export default education;