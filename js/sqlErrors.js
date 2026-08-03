/*
=========================================================
 AI SQL - Common SQL Errors Library
 File : sqlErrors.js
 Version : 1.0
=========================================================
*/

const SQL_ERRORS = {

    /*=====================================================
      SELECT
    =====================================================*/

    SELECT:[

        {
            title:"Using SELECT * in Production",

            error:
            "Using SELECT * retrieves unnecessary columns.",

            solution:
            "Select only the required columns.",

            example:

`-- Bad
SELECT *
FROM Employees;

-- Good
SELECT EmployeeID,
       EmployeeName
FROM Employees;`

        },

        {
            title:"Invalid Column Name",

            error:
            "Column name does not exist.",

            solution:
            "Verify the column name and spelling.",

            example:

`SELECT EmployeeName
FROM Employees;`

        }

    ],

    /*=====================================================
      DISTINCT
    =====================================================*/

    DISTINCT:[

        {
            title:"DISTINCT on Large Tables",

            error:
            "DISTINCT can slow down query execution.",

            solution:
            "Use indexes or GROUP BY where appropriate.",

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
            title:"Missing Quotes Around Text",

            error:
            "Character values must be enclosed in quotes.",

            solution:
            "Use single quotes for string values.",

            example:

`-- Bad
WHERE Department = HR

-- Good
WHERE Department = 'HR';`

        },

        {
            title:"Using = With NULL",

            error:
            "NULL cannot be compared using = operator.",

            solution:
            "Use IS NULL or IS NOT NULL.",

            example:

`-- Bad
WHERE Manager = NULL

-- Good
WHERE Manager IS NULL;`

        }

    ],

    /*=====================================================
      ORDER BY
    =====================================================*/

    ORDER_BY:[

        {
            title:"Sorting Non-existing Column",

            error:
            "ORDER BY references a column that does not exist.",

            solution:
            "Verify the column name.",

            example:

`SELECT EmployeeName
FROM Employees
ORDER BY Salary;`

        }

    ],

    /*=====================================================
      TOP
    =====================================================*/

    TOP:[

        {
            title:"TOP Without ORDER BY",

            error:
            "TOP returns unpredictable rows without sorting.",

            solution:
            "Always use ORDER BY with TOP.",

            example:

`SELECT TOP 10 *
FROM Employees
ORDER BY Salary DESC;`

        }

    ],

    /*=====================================================
      LIMIT
    =====================================================*/

    LIMIT:[

        {
            title:"LIMIT Without ORDER BY",

            error:
            "Returned rows may vary each execution.",

            solution:
            "Always combine LIMIT with ORDER BY.",

            example:

`SELECT *
FROM Employees
ORDER BY Salary DESC
LIMIT 10;`

        }

    ],

    /*=====================================================
      OFFSET
    =====================================================*/

    OFFSET:[

        {
            title:"OFFSET Without ORDER BY",

            error:
            "Pagination becomes inconsistent.",

            solution:
            "Always sort records before OFFSET.",

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
            title:"FETCH Without OFFSET",

            error:
            "FETCH requires OFFSET in SQL Server.",

            solution:
            "Use OFFSET before FETCH NEXT.",

            example:

`ORDER BY EmployeeID
OFFSET 0 ROWS
FETCH NEXT 10 ROWS ONLY;`

        }

    ],

    /*=====================================================
      ALIAS
    =====================================================*/

    ALIAS:[

        {
            title:"Duplicate Alias",

            error:
            "Using the same alias for multiple columns.",

            solution:
            "Assign unique aliases to each column.",

            example:

`SELECT EmployeeName AS Name,
       Department AS Dept
FROM Employees;`

        }

    ]

};

window.SQL_ERRORS = SQL_ERRORS;