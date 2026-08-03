/*==================================
 AI Engine
==================================*/


function askAI(question){


question = question.toLowerCase();



if(
(question.includes("employee") ||
question.includes("staff"))
&&
(question.includes("salary") ||
question.includes("pay"))
)
{


return {


title:"Employee Salary Query",


sql:
`
SELECT EmployeeName, Salary
FROM Employees
WHERE Salary > 50000;
`,


explanation:
"This query retrieves employees earning more than 50000 salary.",


breakdown:
`
SELECT → chooses columns
FROM → selects table
WHERE → filters salary condition
`,


businessCase:
"HR can identify high salary employees for analysis.",


sampleData:
"Employees table containing EmployeeName and Salary.",


alternativeSQL:
`
SELECT *
FROM Employees
WHERE Salary > 50000;
`,


tips:
[
"Create index on Salary column",
"Avoid SELECT * in production"
],


errors:
[
"Check salary column datatype",
"Verify table name"
]


};


}



if(
question.includes("top")
&&
question.includes("customer")
)
{


return {


title:"Top Customers Query",


sql:
`
SELECT CustomerName,
SUM(SalesAmount) AS TotalSales
FROM Sales
GROUP BY CustomerName
ORDER BY TotalSales DESC
LIMIT 10;
`,


explanation:
"Calculates customer sales and shows top customers.",


breakdown:
"GROUP BY creates totals. ORDER BY ranks sales. LIMIT gives top records.",


businessCase:
"Used for customer profitability analysis.",


sampleData:
"Sales table with CustomerName and SalesAmount.",


alternativeSQL:
`
SELECT CustomerName, TotalSales
FROM CustomerSales
ORDER BY TotalSales DESC;
`,


tips:
[
"Use indexes on CustomerName",
"Aggregate only required columns"
],


errors:
[
"Missing GROUP BY column",
"Incorrect sales field name"
]


};


}



return {


title:"SQL Suggestion",


sql:"No SQL query found",


explanation:
"Try: Show employees earning more than 50000",


breakdown:
"Waiting for SQL keyword match.",


businessCase:
"SQL helps analyze business data.",


sampleData:
"Employees, Customers and Sales tables.",


alternativeSQL:
"Try a different question.",


tips:
[
"Use clear table names",
"Include filter conditions"
],


errors:
[
"No matching SQL template found"
]


};


}