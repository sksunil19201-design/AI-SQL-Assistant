/*
=========================================================
 AI SQL - Interview Question Library
 File : interviewData.js
 Version : 1.0
=========================================================
*/

const INTERVIEW = {

    /*=====================================================
      SELECT
    =====================================================*/

    SELECT:[

        {

            question:"What is the SELECT statement in SQL?",

            difficulty:"Beginner",

            answer:
            "The SELECT statement is used to retrieve data from one or more tables in a database.",

            explanation:
            "It is the most commonly used SQL statement for reading data.",

            example:

`SELECT EmployeeID,
       EmployeeName
FROM Employees;`,

            followUpQuestions:[

                "Can SELECT retrieve multiple columns?",

                "Can SELECT retrieve all columns?",

                "What is the purpose of SELECT * ?"

            ]

        },

        {

            question:"What is the difference between SELECT * and selecting specific columns?",

            difficulty:"Beginner",

            answer:
            "SELECT * returns every column, whereas selecting specific columns retrieves only the required data.",

            explanation:
            "Selecting only necessary columns improves query performance and reduces network traffic.",

            example:

`SELECT EmployeeID,
       EmployeeName
FROM Employees;`,

            followUpQuestions:[

                "Why should SELECT * be avoided in production?",

                "Does SELECT * impact performance?"

            ]

        }

    ],

    /*=====================================================
      DISTINCT
    =====================================================*/

    DISTINCT:[

        {

            question:"What does DISTINCT do?",

            difficulty:"Beginner",

            answer:
            "DISTINCT removes duplicate values from the result set.",

            explanation:
            "It returns only unique records for the selected column(s).",

            example:

`SELECT DISTINCT Department
FROM Employees;`,

            followUpQuestions:[

                "How is DISTINCT different from GROUP BY?",

                "Can DISTINCT be used with multiple columns?"

            ]

        }

    ],

    /*=====================================================
      WHERE
    =====================================================*/

    WHERE:[

        {

            question:"What is the purpose of the WHERE clause?",

            difficulty:"Beginner",

            answer:
            "WHERE filters rows based on specified conditions.",

            explanation:
            "Only rows matching the condition are returned.",

            example:

`SELECT *
FROM Employees
WHERE Salary > 50000;`,

            followUpQuestions:[

                "Can WHERE use multiple conditions?",

                "What operators are supported in WHERE?"

            ]

        }

    ],

    /*=====================================================
      ORDER BY
    =====================================================*/

    ORDER_BY:[

        {

            question:"What is ORDER BY used for?",

            difficulty:"Beginner",

            answer:
            "ORDER BY sorts the query result in ascending or descending order.",

            explanation:
            "ASC is the default order, while DESC sorts in reverse order.",

            example:

`SELECT *
FROM Employees
ORDER BY Salary DESC;`,

            followUpQuestions:[

                "Can ORDER BY sort multiple columns?",

                "What is the default sort order?"

            ]

        }

    ],

    /*=====================================================
      TOP
    =====================================================*/

    TOP:[

        {

            question:"What is the TOP clause?",

            difficulty:"Intermediate",

            answer:
            "TOP limits the number of rows returned by SQL Server.",

            explanation:
            "It is mainly supported in SQL Server.",

            example:

`SELECT TOP 10 *
FROM Employees;`,

            followUpQuestions:[

                "How is TOP different from LIMIT?",

                "Should TOP be used with ORDER BY?"

            ]

        }

    ],

    /*=====================================================
      LIMIT
    =====================================================*/

    LIMIT:[

        {

            question:"What is LIMIT in SQL?",

            difficulty:"Intermediate",

            answer:
            "LIMIT restricts the number of rows returned in MySQL and PostgreSQL.",

            explanation:
            "It is commonly used for pagination.",

            example:

`SELECT *
FROM Employees
LIMIT 10;`,

            followUpQuestions:[

                "Can LIMIT work without ORDER BY?",

                "How is LIMIT different from TOP?"

            ]

        }

    ],

    /*=====================================================
      OFFSET
    =====================================================*/

    OFFSET:[

        {

            question:"Why is OFFSET used?",

            difficulty:"Intermediate",

            answer:
            "OFFSET skips a specified number of rows before returning results.",

            explanation:
            "OFFSET is mainly used for pagination.",

            example:

`SELECT *
FROM Employees
ORDER BY EmployeeID
OFFSET 20 ROWS;`,

            followUpQuestions:[

                "Should OFFSET always be used with ORDER BY?",

                "Can OFFSET affect performance?"

            ]

        }

    ],

    /*=====================================================
      FETCH
    =====================================================*/

    FETCH:[

        {

            question:"What is FETCH NEXT?",

            difficulty:"Intermediate",

            answer:
            "FETCH NEXT returns a fixed number of rows after OFFSET.",

            explanation:
            "It is commonly used for server-side pagination.",

            example:

`ORDER BY EmployeeID
OFFSET 10 ROWS
FETCH NEXT 5 ROWS ONLY;`,

            followUpQuestions:[

                "Can FETCH be used without OFFSET?",

                "Which databases support FETCH?"

            ]

        }

    ],

    /*=====================================================
      ALIAS
    =====================================================*/

    ALIAS:[

        {

            question:"What is an Alias in SQL?",

            difficulty:"Beginner",

            answer:
            "An Alias provides a temporary name for a column or table.",

            explanation:
            "Aliases improve query readability and report presentation.",

            example:

`SELECT EmployeeName AS Employee,
       Salary AS MonthlySalary
FROM Employees;`,

            followUpQuestions:[

                "Can aliases be used for tables?",

                "Is AS keyword mandatory?"

            ]

        }

    ]

};

window.INTERVIEW = INTERVIEW;