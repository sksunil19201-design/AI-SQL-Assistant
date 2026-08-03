/*
=========================================================
 AI SQL - Business Case Library
 File : businessCases.js
 Version : 1.0
=========================================================
*/

const BUSINESS_CASES = {

    /*=====================================================
      EMPLOYEE REPORT
    =====================================================*/

    EMPLOYEE_REPORT:{

        title:"Employee Master Report",

        industry:"Human Resources",

        objective:"Display employee information for HR reporting and workforce analysis.",

        businessProblem:
        "The HR department needs a complete employee report including employee name, department, designation and salary.",

        recommendedTables:[
            "Employees"
        ],

        commonlyUsedQueries:[
            "SELECT",
            "WHERE",
            "ORDER BY",
            "GROUP BY"
        ],

        expectedOutput:
        "A clean employee report showing employee details.",

        realWorldUsage:[
            "Monthly HR MIS",
            "Employee Directory",
            "Payroll Verification",
            "Compliance Reporting"
        ]
    },

    /*=====================================================
      HIGH SALARY REPORT
    =====================================================*/

    HIGH_SALARY_REPORT:{

        title:"High Salary Employees",

        industry:"Human Resources",

        objective:"Identify employees earning above a specified salary.",

        businessProblem:
        "Management wants a report of employees earning more than ₹50,000 for budgeting purposes.",

        recommendedTables:[
            "Employees"
        ],

        commonlyUsedQueries:[
            "WHERE",
            "ORDER BY"
        ],

        expectedOutput:
        "Employees whose salary exceeds the defined limit.",

        realWorldUsage:[
            "Salary Review",
            "Compensation Planning",
            "Budget Analysis"
        ]
    },

    /*=====================================================
      UNIQUE_DEPARTMENT_REPORT
    =====================================================*/

    UNIQUE_DEPARTMENT_REPORT:{

        title:"Unique Department List",

        industry:"Human Resources",

        objective:"Retrieve unique department names.",

        businessProblem:
        "HR wants a list of departments without duplicate values.",

        recommendedTables:[
            "Employees"
        ],

        commonlyUsedQueries:[
            "DISTINCT"
        ],

        expectedOutput:
        "List of unique departments.",

        realWorldUsage:[
            "Dropdown Creation",
            "Master Data",
            "Dashboard Filters"
        ]
    },

    /*=====================================================
      CUSTOMER_ACCOUNT_REPORT
    =====================================================*/

    CUSTOMER_ACCOUNT_REPORT:{

        title:"Customer Account Details",

        industry:"Banking",

        objective:"Display customer account information.",

        businessProblem:
        "The bank wants to display customer details, account type and balance.",

        recommendedTables:[
            "Customers"
        ],

        commonlyUsedQueries:[
            "SELECT",
            "WHERE",
            "ORDER BY"
        ],

        expectedOutput:
        "Customer account summary.",

        realWorldUsage:[
            "Customer Service",
            "Branch Operations",
            "KYC Review"
        ]
    },

    /*=====================================================
      TRANSACTION_REPORT
    =====================================================*/

    TRANSACTION_REPORT:{

        title:"Bank Transaction Report",

        industry:"Banking",

        objective:"Display customer transactions within a selected period.",

        businessProblem:
        "Operations team requires daily transaction reports for monitoring.",

        recommendedTables:[
            "Transactions"
        ],

        commonlyUsedQueries:[
            "WHERE",
            "BETWEEN",
            "ORDER BY"
        ],

        expectedOutput:
        "Filtered transaction report.",

        realWorldUsage:[
            "Fraud Monitoring",
            "Operations MIS",
            "Audit"
        ]
    },

    /*=====================================================
      SALES_REPORT
    =====================================================*/

    SALES_REPORT:{

        title:"Monthly Sales Report",

        industry:"Retail",

        objective:"Generate monthly sales performance reports.",

        businessProblem:
        "Management wants total sales, product-wise performance and monthly trends.",

        recommendedTables:[
            "Orders",
            "Products"
        ],

        commonlyUsedQueries:[
            "SUM",
            "GROUP BY",
            "ORDER BY"
        ],

        expectedOutput:
        "Sales summary dashboard.",

        realWorldUsage:[
            "Management Reporting",
            "Sales Dashboard",
            "Revenue Analysis"
        ]
    },

    /*=====================================================
      INVENTORY_REPORT
    =====================================================*/

    INVENTORY_REPORT:{

        title:"Inventory Stock Report",

        industry:"Retail",

        objective:"Monitor available stock levels.",

        businessProblem:
        "Warehouse team wants products with current stock quantities.",

        recommendedTables:[
            "Products"
        ],

        commonlyUsedQueries:[
            "SELECT",
            "WHERE",
            "ORDER BY"
        ],

        expectedOutput:
        "Current inventory report.",

        realWorldUsage:[
            "Warehouse",
            "Inventory Planning",
            "Purchase Planning"
        ]
    },

    /*=====================================================
      EMPLOYEE_PAGINATION
    =====================================================*/

    EMPLOYEE_PAGINATION:{

        title:"Employee Pagination",

        industry:"Human Resources",

        objective:"Display employee records page by page.",

        businessProblem:
        "Large employee tables must be displayed in smaller pages to improve performance.",

        recommendedTables:[
            "Employees"
        ],

        commonlyUsedQueries:[
            "OFFSET",
            "FETCH",
            "LIMIT",
            "TOP"
        ],

        expectedOutput:
        "Paginated employee records.",

        realWorldUsage:[
            "HR Portal",
            "Employee Search",
            "Large Data Reports"
        ]
    },

    /*=====================================================
      TOP_EMPLOYEE_REPORT
    =====================================================*/

    TOP_EMPLOYEE_REPORT:{

        title:"Top Performing Employees",

        industry:"Human Resources",

        objective:"Retrieve the top-performing or highest-paid employees.",

        businessProblem:
        "Management wants the top 10 employees based on salary or performance.",

        recommendedTables:[
            "Employees"
        ],

        commonlyUsedQueries:[
            "TOP",
            "LIMIT",
            "ORDER BY"
        ],

        expectedOutput:
        "Top employee list.",

        realWorldUsage:[
            "Rewards",
            "Performance Review",
            "Executive Dashboard"
        ]
    }

};

window.BUSINESS_CASES = BUSINESS_CASES;
