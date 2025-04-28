
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

export type Level = "foundation" | "diploma" | "degree" | "qualifier";
export type Branch = "data-science" | "electronic-systems";

// Data Science Courses
export const dataScience: Record<Level, Course> = {
  foundation: {
    title: "Foundation Level",
    subjects: [
      { name: "Mathematics for Data Science I" },
      { name: "Statistics for Data Science I" },
      { name: "Computational Thinking" },
      { name: "English I" },
      { name: "Mathematics for Data Science II" },
      { name: "Statistics for Data Science II" },
      { name: "Programming in Python" },
      { name: "English II" }
    ]
  },
  diploma: {
    title: "Diploma Level",
    subjects: [
      { name: "Machine Learning Foundations" },
      { name: "Business Data Management" },
      { name: "Business Data Management - Project" },
      { name: "Machine Learning Techniques" },
      { name: "Machine Learning Practice" },
      { name: "Machine Learning Practice - Project" },
      { name: "Business Analytics" },
      { name: "Tools in Data Science" }
    ]
  },
  degree: {
    title: "BS Degree Level",
    subjects: [
      { name: "Software Engineering" },
      { name: "Software Testing" },
      { name: "AI: Search Methods for Problem Solving" },
      { name: "Deep Learning" },
      { name: "Strategies for Professional Growth" },
      { name: "Algorithmic Thinking in Bioinformatics" },
      { name: "Big Data and Biological Networks" },
      { name: "Data Visualization Design" },
      { name: "Special Topics in Machine Learning" },
      { name: "Speech Technology" },
      { name: "Design Thinking for Data-Driven App Development" },
      { name: "Industry 4.0" },
      { name: "Sequential Decision Making" },
      { name: "Market Research" },
      { name: "Privacy & Security in Online Social Media" },
      { name: "Introduction to Big Data" },
      { name: "Financial Forensics" },
      { name: "Linear Statistical Models" },
      { name: "Advanced Algorithms" },
      { name: "Statistical Computing" },
      { name: "Computer Systems Design" },
      { name: "Programming in C" },
      { name: "Mathematical Thinking" },
      { name: "Large Language Models" },
      { name: "Introduction to Natural Language Processing" },
      { name: "Deep Learning for Computer Vision" },
      { name: "Managerial Economics" },
      { name: "Game Theory and Strategy" },
      { name: "Corporate Finance" },
      { name: "Deep Learning Practice" },
      { name: "Operating Systems" },
      { name: "Generative AI" },
      { name: "Algorithms for Data Science" },
      { name: "Machine Learning Operations" }
    ]
  },
  qualifier: {
    title: "Qualifier Preparation",
    subjects: [
      { name: "Mathematics for Data Science" },
      { name: "Statistics for Data Science" },
      { name: "Programming Fundamentals" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Machine Learning Basics" }
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
      { name: "Control Engineering" }
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
      { name: "Probability and Statistics" },
      { name: "Communication Systems" },
      { name: "Internet of Things (IoT)" },
      { name: "Semiconductor Devices and VLSI Technology" },
      { name: "Analog Circuits" },
      { name: "Digital IC Design" },
      { name: "Power Management for Electronic Systems" },
      { name: "Biomedical Electronic Systems" },
      { name: "Operating Systems" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Programming Data Structures and Algorithms using Python" },
      { name: "Modern Application Development I" },
      { name: "Machine Learning Foundation" },
      { name: "Programming Concepts using Java" },
      { name: "Modern Application Development II" },
      { name: "Machine Learning Techniques" },
      { name: "Machine Learning Practice" },
      { name: "Deep Learning" },
      { name: "Deep Learning for Computer Vision" },
      { name: "Speech Technology" },
      { name: "Deep Learning Practice" },
      { name: "Industry 4.0" },
      { name: "Design Thinking for Data-Driven App Development" },
      { name: "Financial Forensics" },
      { name: "Market Research" },
      { name: "Game Theory and Strategy" },
      { name: "Managerial Economics" },
      { name: "Corporate Finance" },
      { name: "Apprenticeship in Electronics Systems 1" },
      { name: "Apprenticeship in Electronics Systems 2" }
    ]
  },
  qualifier: {
    title: "Qualifier Preparation",
    subjects: [
      { name: "Electronics Fundamentals" },
      { name: "Circuit Analysis" },
      { name: "Digital Logic" },
      { name: "Mathematics for Electronics" },
      { name: "Programming Concepts" },
      { name: "Basic Signal Processing" }
    ]
  }
};

// Updated Community Data
export const communitiesData = {
  dataScience: {
    subjects: {
      foundation: [
        { name: "Mathematics for Data Science I" },
        { name: "Statistics for Data Science I" },
        { name: "Computational Thinking" },
        { name: "English I" },
        { name: "Mathematics for Data Science II" },
        { name: "Statistics for Data Science II" },
        { name: "Programming in Python" },
        { name: "English II" }
      ],
      diploma: [
        { name: "Machine Learning Foundations" },
        { name: "Business Data Management" },
        { name: "Machine Learning Techniques" },
        { name: "Machine Learning Practice" },
        { name: "Business Analytics" },
        { name: "Tools in Data Science" }
      ],
      degree: [
        { name: "Software Engineering" },
        { name: "Software Testing" },
        { name: "AI: Search Methods for Problem Solving" },
        { name: "Deep Learning" },
        { name: "Statistical Computing" },
        { name: "Computer Systems Design" }
      ],
      qualifier: [
        { name: "Mathematics for Data Science" },
        { name: "Statistics for Data Science" },
        { name: "Programming Fundamentals" },
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "Machine Learning Basics" }
      ]
    },
    qualifiers: "Data Science Qualifiers"
  },
  electronicSystems: {
    subjects: {
      foundation: [
        { name: "English I" },
        { name: "Math for Electronics I" },
        { name: "Electronic Systems Thinking and Circuits" },
        { name: "Introduction to C Programming" },
        { name: "Digital Systems" },
        { name: "Embedded C Programming" }
      ],
      diploma: [
        { name: "Math for Electronics II" },
        { name: "Signals and Systems" },
        { name: "Analog Electronic Systems" },
        { name: "Python Programming" },
        { name: "Digital System Design" },
        { name: "Digital Signal Processing" }
      ],
      degree: [
        { name: "Embedded Linux and FPGAs" },
        { name: "Electromagnetic Fields and Transmission Lines" },
        { name: "Electronic Product Design" },
        { name: "Communication Systems" },
        { name: "Digital IC Design" },
        { name: "Power Management for Electronic Systems" }
      ],
      qualifier: [
        { name: "Electronics Fundamentals" },
        { name: "Circuit Analysis" },
        { name: "Digital Logic" },
        { name: "Mathematics for Electronics" },
        { name: "Programming Concepts" },
        { name: "Basic Signal Processing" }
      ]
    },
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
