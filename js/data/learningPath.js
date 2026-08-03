/*
=========================================================
 AI SQL - Learning Path
 File : learningPath.js
 Version : 2.0
=========================================================
*/

const LEARNING_PATH = [

/*=========================================================
  MODULE 1
=========================================================*/

{
    id:1,

    module:"Module 1",

    title:"SQL Basics",

    icon:"fa-solid fa-database",

    color:"#0d6efd",

    badge:"Beginner",

    level:"Beginner",

    progress:0,

    completedTopics:0,

    totalTopics:30,

    startTopic:1,

    endTopic:30,

    estimatedTime:"2 Hours",

    certificate:false,

    isLocked:false,

    description:
    "Learn SQL fundamentals including SELECT, WHERE, ORDER BY, LIMIT, TOP, FETCH, OFFSET and ALIAS.",

    skills:[

        "SELECT",
        "FROM",
        "WHERE",
        "ORDER BY",
        "LIMIT",
        "TOP",
        "FETCH",
        "OFFSET"

    ],

    projects:[

        "Employee Report",
        "Customer Report",
        "Department Report"

    ]
},

/*=========================================================
  MODULE 2
=========================================================*/

{
    id:2,

    module:"Module 2",

    title:"Filtering & Operators",

    icon:"fa-solid fa-filter",

    color:"#198754",

    badge:"Beginner",

    level:"Beginner",

    progress:0,

    completedTopics:0,

    totalTopics:30,

    startTopic:31,

    endTopic:60,

    estimatedTime:"2 Hours",

    certificate:false,

    isLocked:true,

    description:
    "Master filtering data using comparison, logical and pattern matching operators.",

    skills:[

        "AND",
        "OR",
        "NOT",
        "IN",
        "BETWEEN",
        "LIKE",
        "EXISTS"

    ],

    projects:[

        "Customer Search",
        "Bank Transaction Filter",
        "Employee Lookup"

    ]
},

/*=========================================================
  MODULE 3
=========================================================*/

{
    id:3,

    module:"Module 3",

    title:"Aggregate Functions",

    icon:"fa-solid fa-calculator",

    color:"#fd7e14",

    badge:"Beginner",

    level:"Beginner",

    progress:0,

    completedTopics:0,

    totalTopics:30,

    startTopic:61,

    endTopic:90,

    estimatedTime:"2 Hours",

    certificate:false,

    isLocked:true,

    description:
    "Perform calculations using SQL aggregate functions.",

    skills:[

        "COUNT",
        "SUM",
        "AVG",
        "MIN",
        "MAX"

    ],

    projects:[

        "Sales Dashboard",
        "Payroll Summary",
        "Revenue Analysis"

    ]
},

/*=========================================================
  MODULE 4
=========================================================*/

{
    id:4,

    module:"Module 4",

    title:"GROUP BY & HAVING",

    icon:"fa-solid fa-layer-group",

    color:"#6f42c1",

    badge:"Intermediate",

    level:"Intermediate",

    progress:0,

    completedTopics:0,

    totalTopics:30,

    startTopic:91,

    endTopic:120,

    estimatedTime:"2.5 Hours",

    certificate:false,

    isLocked:true,

    description:
    "Generate business summaries and grouped reports.",

    skills:[

        "GROUP BY",
        "HAVING",
        "Business Reporting"

    ],

    projects:[

        "Department Summary",
        "Monthly Sales",
        "Expense Analysis"

    ]
},

/*=========================================================
  MODULE 5
=========================================================*/

{
    id:5,

    module:"Module 5",

    title:"SQL Joins",

    icon:"fa-solid fa-link",

    color:"#dc3545",

    badge:"Intermediate",

    level:"Intermediate",

    progress:0,

    completedTopics:0,

    totalTopics:40,

    startTopic:121,

    endTopic:160,

    estimatedTime:"3 Hours",

    certificate:false,

    isLocked:true,

    description:
    "Combine data from multiple tables using different JOIN types.",

    skills:[

        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL JOIN",
        "SELF JOIN",
        "CROSS JOIN"

    ],

    projects:[

        "Employee & Department",
        "Customer Orders",
        "Bank Accounts"

    ]
},

/*=========================================================
  MODULE 6
=========================================================*/

{
    id:6,

    module:"Module 6",

    title:"String Functions",

    icon:"fa-solid fa-font",

    color:"#20c997",

    badge:"Intermediate",

    level:"Intermediate",

    progress:0,

    completedTopics:0,

    totalTopics:40,

    startTopic:161,

    endTopic:200,

    estimatedTime:"3 Hours",

    certificate:false,

    isLocked:true,

    description:
    "Manipulate and format text using SQL string functions.",

    skills:[

        "CONCAT",
        "SUBSTRING",
        "UPPER",
        "LOWER",
        "TRIM",
        "REPLACE"

    ],

    projects:[

        "Customer Name Cleaning",
        "Email Formatting",
        "Address Standardization"

    ]
},

/*=========================================================
Continue the same pattern for Modules 7–17
=========================================================*/

];

window.LEARNING_PATH = LEARNING_PATH;