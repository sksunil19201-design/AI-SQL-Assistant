/*
=========================================================
 AI SQL - Quiz Library
 File : quizData.js
 Version : 1.0
=========================================================
*/

const QUIZ = {

    /*=====================================================
      SELECT
    =====================================================*/

    SELECT:[

        {

            id:1,

            difficulty:"Beginner",

            question:"Which SQL statement is used to retrieve data from a table?",

            options:[

                "SELECT",

                "GET",

                "SHOW",

                "FETCH"

            ],

            correctAnswer:0,

            explanation:
            "The SELECT statement is used to retrieve data from one or more tables.",

            example:

`SELECT EmployeeName
FROM Employees;`

        },

        {

            id:2,

            difficulty:"Beginner",

            question:"Which query returns all columns from the Employees table?",

            options:[

                "SELECT * FROM Employees;",

                "GET Employees;",

                "SHOW Employees;",

                "DISPLAY Employees;"

            ],

            correctAnswer:0,

            explanation:
            "SELECT * returns every column from the specified table.",

            example:

`SELECT *
FROM Employees;`

        }

    ],

    /*=====================================================
      DISTINCT
    =====================================================*/

    DISTINCT:[

        {

            id:3,

            difficulty:"Beginner",

            question:"What is the purpose of DISTINCT?",

            options:[

                "Remove duplicate rows",

                "Sort records",

                "Delete records",

                "Update records"

            ],

            correctAnswer:0,

            explanation:
            "DISTINCT returns only unique values.",

            example:

`SELECT DISTINCT Department
FROM Employees;`

        }

    ],

    /*=====================================================
      WHERE
    =====================================================*/

    WHERE:[

        {

            id:4,

            difficulty:"Beginner",

            question:"Which clause is used to filter rows?",

            options:[

                "WHERE",

                "GROUP BY",

                "ORDER BY",

                "HAVING"

            ],

            correctAnswer:0,

            explanation:
            "WHERE filters rows based on a specified condition.",

            example:

`SELECT *
FROM Employees
WHERE Salary > 50000;`

        }

    ],

    /*=====================================================
      ORDER BY
    =====================================================*/

    ORDER_BY:[

        {

            id:5,

            difficulty:"Beginner",

            question:"Which clause sorts query results?",

            options:[

                "ORDER BY",

                "GROUP BY",

                "WHERE",

                "DISTINCT"

            ],

            correctAnswer:0,

            explanation:
            "ORDER BY sorts data in ascending or descending order.",

            example:

`SELECT *
FROM Employees
ORDER BY Salary DESC;`

        }

    ],

    /*=====================================================
      TOP
    =====================================================*/

    TOP:[

        {

            id:6,

            difficulty:"Intermediate",

            question:"TOP clause is mainly supported by which database?",

            options:[

                "SQL Server",

                "MySQL",

                "SQLite",

                "MariaDB"

            ],

            correctAnswer:0,

            explanation:
            "TOP is primarily used in SQL Server.",

            example:

`SELECT TOP 10 *
FROM Employees;`

        }

    ],

    /*=====================================================
      LIMIT
    =====================================================*/

    LIMIT:[

        {

            id:7,

            difficulty:"Intermediate",

            question:"Which clause limits the number of rows returned in MySQL?",

            options:[

                "LIMIT",

                "TOP",

                "FETCH",

                "ROWNUM"

            ],

            correctAnswer:0,

            explanation:
            "LIMIT is supported by MySQL, PostgreSQL and SQLite.",

            example:

`SELECT *
FROM Employees
LIMIT 10;`

        }

    ],

    /*=====================================================
      OFFSET
    =====================================================*/

    OFFSET:[

        {

            id:8,

            difficulty:"Intermediate",

            question:"What is the purpose of OFFSET?",

            options:[

                "Skip rows",

                "Delete rows",

                "Sort rows",

                "Rename columns"

            ],

            correctAnswer:0,

            explanation:
            "OFFSET skips a specified number of rows before returning data.",

            example:

`SELECT *
FROM Employees
ORDER BY EmployeeID
OFFSET 20 ROWS;`

        }

    ],

    /*=====================================================
      FETCH
    =====================================================*/

    FETCH:[

        {

            id:9,

            difficulty:"Intermediate",

            question:"FETCH NEXT is generally used with which clause?",

            options:[

                "OFFSET",

                "GROUP BY",

                "WHERE",

                "HAVING"

            ],

            correctAnswer:0,

            explanation:
            "FETCH NEXT is used together with OFFSET for pagination.",

            example:

`ORDER BY EmployeeID
OFFSET 10 ROWS
FETCH NEXT 5 ROWS ONLY;`

        }

    ],

    /*=====================================================
      ALIAS
    =====================================================*/

    ALIAS:[

        {

            id:10,

            difficulty:"Beginner",

            question:"What is the purpose of an Alias in SQL?",

            options:[

                "Rename a column or table",

                "Delete a column",

                "Sort data",

                "Filter rows"

            ],

            correctAnswer:0,

            explanation:
            "Aliases improve query readability by assigning temporary names.",

            example:

`SELECT EmployeeName AS Employee
FROM Employees;`

        }

    ]

};

window.QUIZ = QUIZ;