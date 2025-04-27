
// Subject types
export type Subject = {
  name: string;
  code?: string;
  description?: string;
};

export type Course = {
  title: string;
  subjects: Subject[];
};

// Level filters
export type Level = "foundation" | "diploma" | "degree";
export type Branch = "data-science" | "electronic-systems";

// Data Science Courses
export const dataScience: Record<Level, Course> = {
  foundation: {
    title: "Foundation Level",
    subjects: [
      { name: "English I" },
      { name: "Math for Data Science I" },
      { name: "English II" },
      { name: "Introduction to Programming" },
      { name: "Introduction to Programming Laboratory" },
      { name: "Introduction to Linux and Programming" },
      { name: "Linux Systems Laboratory" },
      { name: "Digital Systems" },
      { name: "Probability and Statistics" },
      { name: "Data Structures and Algorithms" },
      { name: "Data Science Thinking and Algorithms" },
      { name: "Data Science Thinking and Algorithms Lab" },
      { name: "Machine Learning Introduction" }
    ]
  },
  diploma: {
    title: "Diploma Level",
    subjects: [
      { name: "Math for Data Science II" },
      { name: "Advanced Data Structures" },
      { name: "Statistics for Data Science" },
      { name: "Data Science Algorithms" },
      { name: "Data Science Algorithms Lab" },
      { name: "Python Programming for Data Science" },
      { name: "Data Visualization" },
      { name: "Big Data Analytics" },
      { name: "Data Mining" },
      { name: "Data Science Project" }
    ]
  },
  degree: {
    title: "BS Degree Level",
    subjects: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Natural Language Processing" },
      { name: "Data Engineering" },
      { name: "Cloud Computing" },
      { name: "Data Science and Ethics" },
      { name: "Statistical Inference" },
      { name: "Strategies for Professional Growth" },
      { name: "Probability and Statistics (Elective)" },
      { name: "Time Series Analysis (Elective)" },
      { name: "Data Mining for Business Analytics (Elective)" },
      { name: "Advanced Machine Learning (Elective)" },
      { name: "AI and Robotics (Elective)" },
      { name: "Data Security and Privacy (Elective)" },
      { name: "Computer Vision (Elective)" },
      { name: "Internet of Things (IoT) (Elective)" }
    ]
  }
};

// Electronic Systems Courses
export const electronicSystems: Record<Level, Course> = {
  foundation: {
    title: "Foundation Level",
    subjects: [
      { name: "English I" },
      { name: "Math for Electronics I" },
      { name: "English II" },
      { name: "Electronic Systems Thinking and Circuits" },
      { name: "Electronic Systems Thinking and Circuits Lab" },
      { name: "Introduction to C Programming" },
      { name: "C Programming Laboratory" },
      { name: "Introduction to Linux and Programming" },
      { name: "Linux Systems Laboratory" },
      { name: "Digital Systems" },
      { name: "Electrical and Electronic Circuits" },
      { name: "Electronics Laboratory" },
      { name: "Embedded C Programming" },
      { name: "Embedded C Programming Laboratory" }
    ]
  },
  diploma: {
    title: "Diploma Level",
    subjects: [
      { name: "Math for Electronics II" },
      { name: "Signals and Systems" },
      { name: "Analog Electronic Systems" },
      { name: "Analog Electronics Laboratory" },
      { name: "Python Programming" },
      { name: "Digital System Design" },
      { name: "Digital System Design Laboratory" },
      { name: "Digital Signal Processing" },
      { name: "Sensors and Applications" },
      { name: "Sensors Laboratory" },
      { name: "Control Engineering" },
      { name: "Electronics System Project" }
    ]
  },
  degree: {
    title: "BS Degree Level",
    subjects: [
      { name: "Embedded Linux and FPGAs" },
      { name: "Embedded Linux and FPGAs Lab" },
      { name: "Electromagnetic Fields and Transmission Lines" },
      { name: "Electronic Product Design" },
      { name: "Strategies for Professional Growth" },
      { name: "Probability and Statistics (Elective)" },
      { name: "Communication Systems (Elective)" },
      { name: "Internet of Things (IoT) (Elective)" },
      { name: "Semiconductor Devices and VLSI Technology (Elective)" },
      { name: "Analog Circuits (Elective)" },
      { name: "Digital IC Design (Elective)" },
      { name: "Power Management for Electronic Systems (Elective)" },
      { name: "Biomedical Electronic Systems (Elective)" }
    ]
  }
};

// Community Data
export const communitiesData = {
  dataScience: {
    subjects: [
      "English",
      "Math for Data Science",
      "Programming",
      "Linux and Programming",
      "Digital Systems",
      "Probability and Statistics",
      "Data Structures and Algorithms",
      "Data Science Thinking",
      "Machine Learning",
      "Advanced Data Structures",
      "Data Visualization",
      "Big Data Analytics",
      "Data Mining",
      "Deep Learning",
      "Natural Language Processing",
      "Data Engineering",
      "Cloud Computing"
    ],
    qualifiers: "Data Science Qualifiers"
  },
  electronicSystems: {
    subjects: [
      "English",
      "Math for Electronics",
      "Electronic Systems",
      "C Programming",
      "Linux and Programming",
      "Digital Systems",
      "Electronic Circuits",
      "Embedded C Programming",
      "Signals and Systems",
      "Analog Electronics",
      "Python Programming",
      "Digital System Design",
      "Digital Signal Processing",
      "Sensors and Applications",
      "Control Engineering",
      "Embedded Linux and FPGAs",
      "Electromagnetic Fields"
    ],
    qualifiers: "Electronic Systems Qualifiers"
  }
};

// Sample Previous Year Questions
export const pyqsData = [
  { year: "2023", questions: 180, downloads: 245 },
  { year: "2022", questions: 180, downloads: 312 },
  { year: "2021", questions: 180, downloads: 189 },
  { year: "2020", questions: 180, downloads: 156 },
  { year: "2019", questions: 180, downloads: 122 },
  { year: "2018", questions: 180, downloads: 98 }
];

// Tools data
export const toolsData = [
  {
    title: "Grade Calculator",
    description: "Calculate your grades based on assignments and exams",
    icon: "Calculator",
    downloads: 178
  },
  {
    title: "Marks Predictor",
    description: "Predict your final marks based on current performance",
    icon: "Calculator",
    downloads: 145
  },
  {
    title: "CGPA Calculator",
    description: "Calculate your Cumulative Grade Point Average",
    icon: "Calculator",
    downloads: 203
  }
];
