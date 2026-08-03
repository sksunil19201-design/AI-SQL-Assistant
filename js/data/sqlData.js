/*==================================
 SQL Topic Library
==================================*/


const SQL_TOPICS = [

{
id:1,
category:"SQL Basics",
subCategory:"Data Retrieval",
difficulty:"Beginner",
title:"SELECT Statement",
shortDescription:"Retrieve specific columns from a database table.",
syntax:`SELECT column_name
FROM table_name;`,
sql:`SELECT
EmployeeID,
EmployeeName,
Department,
Salary
FROM Employees;`,
keywordId:"SELECT",
sampleDataId:"Employees",
businessCaseId:"Employee Master Report",
optimizationId:"SELECT",
errorId:"SELECT",
interviewId:"SELECT",
interviewQuestions:["<b>Q:</b> What is the purpose of the SELECT statement?<br><b>A:</b> The SELECT statement is used to retrieve one or more columns of data from a database table.","<b>Q:</b> Why should SELECT * be avoided in production?<br><b>A:</b> SELECT * retrieves all columns, increases unnecessary data transfer, and reduces query performance."],
relatedTopics:["select","select statement","sql select","retrieve data","fetch data","show data","display data","view data","read data","get data","retrieve records","fetch records","display records","show records","employee data","employee records","employee list","employee report","employee details","employee master report","show employees","display employees","list employees","retrieve employees","all employees","database query","sql query","table data","database table","from clause","sql basics","data retrieval","sql beginner","read table","query employees","employee information","employee salary","employee department","fetch employee details"]
},

/*==================================
 SELECT * (ALL COLUMNS)
==================================*/

{
id:2,
category:"SQL Basics",
subCategory:"Data Retrieval",
difficulty:"Beginner",
title:"SELECT *",
shortDescription:"Retrieve all columns from a database table.",
syntax:`SELECT *
FROM table_name;`,
sql:`SELECT *
FROM Employees;`,
keywordId:"SELECT_ALL",
sampleDataId:"Employees",
businessCaseId:"Employee Complete Report",
optimizationId:"SELECT_ALL",
errorId:"SELECT_ALL",
interviewId:"SELECT_ALL",
interviewQuestions:["<b>Q:</b> What does SELECT * do?<br><b>A:</b> SELECT * retrieves all columns from the specified table.","<b>Q:</b> Why should SELECT * be avoided in production?<br><b>A:</b> Because it retrieves unnecessary columns, increases data transfer, and reduces query performance."],
relatedTopics:["select *","all columns","select all","fetch all records","display all columns","retrieve complete table","employee table","full employee data","sql select star","show all employee details","select every column","read complete table","database table","employee master","table records","sql basics","retrieve all data","select statement","employees","table information"]
},

/*==================================
 DISTINCT
==================================*/

{
id:3,
category:"SQL Basics",
subCategory:"Data Retrieval",
difficulty:"Beginner",
title:"DISTINCT",
shortDescription:"Return only unique values from a column.",
syntax:`SELECT DISTINCT column_name
FROM table_name;`,
sql:`SELECT DISTINCT
Department
FROM Employees;`,
keywordId:"DISTINCT",
sampleDataId:"Employees",
businessCaseId:"Unique Department List",
optimizationId:"DISTINCT",
errorId:"DISTINCT",
interviewId:"DISTINCT",
interviewQuestions:["<b>Q:</b> What is the purpose of DISTINCT?<br><b>A:</b> DISTINCT removes duplicate values and returns only unique records.","<b>Q:</b> Does DISTINCT remove duplicate rows or duplicate columns?<br><b>A:</b> DISTINCT removes duplicate rows based on the selected column(s)."],
relatedTopics:["distinct","unique values","remove duplicates","duplicate records","unique departments","department list","unique employees","distinct clause","sql distinct","fetch unique values","show unique records","employee department","remove duplicate rows","sql basics","unique column","database records","distinct keyword","department report","select distinct","unique data"]
},

/*==================================
 FROM CLAUSE
==================================*/

{
id:4,
category:"SQL Basics",
subCategory:"Data Retrieval",
difficulty:"Beginner",
title:"FROM Clause",
shortDescription:"Specify the table from which data is retrieved.",
syntax:`SELECT column_name
FROM table_name;`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees;`,
keywordId:"FROM",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Report",
optimizationId:"FROM",
errorId:"FROM",
interviewId:"FROM",
interviewQuestions:["<b>Q:</b> What is the purpose of the FROM clause?<br><b>A:</b> The FROM clause specifies the table that SQL reads data from.","<b>Q:</b> Can a SELECT query work without a FROM clause?<br><b>A:</b> In most cases no, because SQL needs a source table to retrieve data."],
relatedTopics:["from","from clause","table name","source table","sql from","employee table","database table","select from","retrieve table","read table","table source","employees","data source","sql basics","table records","query table","from keyword","database query","fetch table data","employee information"]
},

/*==================================
 WHERE CLAUSE
==================================*/

{
id:5,
category:"SQL Basics",
subCategory:"Filtering Data",
difficulty:"Beginner",
title:"WHERE Clause",
shortDescription:"Filter records based on one or more conditions.",
syntax:`SELECT column_name
FROM table_name
WHERE condition;`,
sql:`SELECT
EmployeeName,
Department,
Salary
FROM Employees
WHERE Department='IT';`,
keywordId:"WHERE",
sampleDataId:"Employees",
businessCaseId:"Department Wise Employee Report",
optimizationId:"WHERE",
errorId:"WHERE",
interviewId:"WHERE",
interviewQuestions:["<b>Q:</b> What is the purpose of the WHERE clause?<br><b>A:</b> WHERE filters records based on specified conditions.","<b>Q:</b> What happens if the WHERE clause is omitted?<br><b>A:</b> SQL returns all records from the table."],
relatedTopics:["where","where clause","filter data","filter records","employee filter","department filter","salary filter","sql where","retrieve specific records","conditional query","employees","database filter","search employee","record filtering","conditions","sql basics","employee department","where keyword","data filtering","select where"]
},

/*==================================
 ORDER BY
==================================*/

{
id:6,
category:"SQL Basics",
subCategory:"Sorting Data",
difficulty:"Beginner",
title:"ORDER BY",
shortDescription:"Sort query results in ascending or descending order.",
syntax:`SELECT column_name
FROM table_name
ORDER BY column_name ASC;`,
sql:`SELECT
EmployeeName,
Department,
Salary
FROM Employees
ORDER BY Salary DESC;`,
keywordId:"ORDER_BY",
sampleDataId:"Employees",
businessCaseId:"Highest Salary Employee Report",
optimizationId:"ORDER_BY",
errorId:"ORDER_BY",
interviewId:"ORDER_BY",
interviewQuestions:["<b>Q:</b> What is the purpose of ORDER BY?<br><b>A:</b> ORDER BY sorts query results in ascending or descending order.","<b>Q:</b> What is the default sorting order in ORDER BY?<br><b>A:</b> The default sorting order is ASC (Ascending)."],
relatedTopics:["order by","sorting","sort data","ascending","descending","asc","desc","salary report","highest salary","employee sorting","sort employees","order records","sql sorting","order by clause","employee report","database sorting","arrange records","sort query","sql basics","employee salary order"]
},

/*==================================
 ASC (ASCENDING)
==================================*/

{
id:7,
category:"SQL Basics",
subCategory:"Sorting Data",
difficulty:"Beginner",
title:"ASC (Ascending Order)",
shortDescription:"Sort records in ascending order.",
syntax:`SELECT column_name
FROM table_name
ORDER BY column_name ASC;`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
ORDER BY Salary ASC;`,
keywordId:"ASC",
sampleDataId:"Employees",
businessCaseId:"Lowest Salary Employee Report",
optimizationId:"ASC",
errorId:"ASC",
interviewId:"ASC",
interviewQuestions:["<b>Q:</b> What is ASC in SQL?<br><b>A:</b> ASC sorts data in ascending order such as A-Z or Lowest-Highest.","<b>Q:</b> Is ASC mandatory in ORDER BY?<br><b>A:</b> No. ASC is the default sorting order if not specified."],
relatedTopics:["asc","ascending","ascending order","sort ascending","lowest salary","alphabetical order","a to z","smallest value","sql asc","order by asc","employee sorting","salary ascending","employee report","sort records","database sorting","order results","arrange data","sort query","sql basics","ascending data"]
},

/*==================================
 DESC (DESCENDING)
==================================*/

{
id:8,
category:"SQL Basics",
subCategory:"Sorting Data",
difficulty:"Beginner",
title:"DESC (Descending Order)",
shortDescription:"Sort records in descending order.",
syntax:`SELECT column_name
FROM table_name
ORDER BY column_name DESC;`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
ORDER BY Salary DESC;`,
keywordId:"DESC",
sampleDataId:"Employees",
businessCaseId:"Top Paid Employees Report",
optimizationId:"DESC",
errorId:"DESC",
interviewId:"DESC",
interviewQuestions:["<b>Q:</b> What is DESC in SQL?<br><b>A:</b> DESC sorts records in descending order such as Z-A or Highest-Lowest.","<b>Q:</b> When is DESC commonly used?<br><b>A:</b> It is commonly used to display top sales, highest salaries, latest dates and maximum values."],
relatedTopics:["desc","descending","descending order","sort descending","highest salary","latest records","z to a","largest value","sql desc","order by desc","employee sorting","salary descending","employee report","database sorting","sort records","order results","sql basics","top records","highest values","latest data"]
},

/*==================================
 TOP
==================================*/

{
id:9,
category:"SQL Basics",
subCategory:"Limiting Records",
difficulty:"Beginner",
title:"TOP",
shortDescription:"Return a limited number of rows from a table (SQL Server).",
syntax:`SELECT TOP number column_name
FROM table_name;`,
sql:`SELECT TOP 5
EmployeeName,
Salary
FROM Employees
ORDER BY Salary DESC;`,
keywordId:"TOP",
sampleDataId:"Employees",
businessCaseId:"Top 5 Highest Paid Employees",
optimizationId:"TOP",
errorId:"TOP",
interviewId:"TOP",
interviewQuestions:["<b>Q:</b> What is the TOP clause?<br><b>A:</b> TOP limits the number of rows returned in SQL Server.","<b>Q:</b> Which clause is usually used with TOP?<br><b>A:</b> ORDER BY is commonly used to return the top records in the desired order."],
relatedTopics:["top","top clause","top records","top 5","top 10","limit rows","highest salary","top employees","first records","sql server top","limit results","employee report","retrieve top rows","sql basics","database records","top values","highest values","employee salary","order by top","top data"]
},

/*==================================
 LIMIT
==================================*/

{
id:10,
category:"SQL Basics",
subCategory:"Limiting Records",
difficulty:"Beginner",
title:"LIMIT",
shortDescription:"Return a limited number of rows from a table (MySQL/PostgreSQL).",
syntax:`SELECT column_name
FROM table_name
LIMIT number;`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
ORDER BY Salary DESC
LIMIT 5;`,
keywordId:"LIMIT",
sampleDataId:"Employees",
businessCaseId:"Top 5 Highest Paid Employees",
optimizationId:"LIMIT",
errorId:"LIMIT",
interviewId:"LIMIT",
interviewQuestions:["<b>Q:</b> What is LIMIT in SQL?<br><b>A:</b> LIMIT restricts the number of rows returned in MySQL and PostgreSQL.","<b>Q:</b> What is the difference between TOP and LIMIT?<br><b>A:</b> TOP is used in SQL Server, whereas LIMIT is used in MySQL and PostgreSQL."],
relatedTopics:["limit","limit clause","mysql limit","postgresql limit","top rows","top employees","retrieve limited records","first 5 rows","employee report","database records","limit results","sql basics","highest salary","top salary","limit data","fetch records","employee data","sql query","limit keyword","order by limit"]
},

/*==================================
 ALIAS (AS)
==================================*/

{
id:11,
category:"SQL Basics",
subCategory:"Column Aliases",
difficulty:"Beginner",
title:"Alias (AS)",
shortDescription:"Rename a column or table temporarily in the query result.",
syntax:`SELECT column_name AS alias_name
FROM table_name;`,
sql:`SELECT
EmployeeName AS Employee,
Salary AS MonthlySalary
FROM Employees;`,
keywordId:"AS",
sampleDataId:"Employees",
businessCaseId:"Business Friendly Employee Report",
optimizationId:"AS",
errorId:"AS",
interviewId:"AS",
interviewQuestions:["<b>Q:</b> What is an Alias in SQL?<br><b>A:</b> An Alias provides a temporary name to a column or table for better readability.","<b>Q:</b> Does an Alias change the actual column name?<br><b>A:</b> No. It only changes the column name in the query result."],
relatedTopics:["alias","as","column alias","table alias","rename column","temporary column name","friendly column name","employee report","business report","sql alias","sql as","column heading","display name","employee salary","employee information","database query","sql basics","column rename","table rename","as keyword"]
},

/*==================================
 SQL COMMENTS
==================================*/

{
id:12,
category:"SQL Basics",
subCategory:"Comments",
difficulty:"Beginner",
title:"SQL Comments",
shortDescription:"Add comments to improve SQL code readability and documentation.",
syntax:`-- Single Line Comment

/* Multi Line
   Comment */`,
sql:`-- Display Employee Details
SELECT
EmployeeID,
EmployeeName,
Department
FROM Employees;`,
keywordId:"COMMENTS",
sampleDataId:"Employees",
businessCaseId:"Document SQL Query",
optimizationId:"COMMENTS",
errorId:"COMMENTS",
interviewId:"COMMENTS",
interviewQuestions:["<b>Q:</b> Why are SQL comments used?<br><b>A:</b> SQL comments are used to explain queries, improve readability, and document business logic.","<b>Q:</b> Do SQL comments affect query execution?<br><b>A:</b> No. Comments are ignored by the SQL engine during execution."],
relatedTopics:["sql comments","comments","single line comment","multi line comment","documentation","query documentation","sql code","code explanation","comment query","sql basics","developer notes","database comments","comment syntax","readable sql","sql script","comment block","inline comment","query notes","maintain sql","sql documentation"]
},

/*==================================
 NULL VALUES
==================================*/

{
id:13,
category:"SQL Basics",
subCategory:"NULL Handling",
difficulty:"Beginner",
title:"NULL Values",
shortDescription:"Understand missing or unknown values stored in a database.",
syntax:`SELECT column_name
FROM table_name;`,
sql:`SELECT
EmployeeName,
Bonus
FROM Employees;`,
keywordId:"NULL",
sampleDataId:"Employees",
businessCaseId:"Employees Without Bonus Information",
optimizationId:"NULL",
errorId:"NULL",
interviewId:"NULL",
interviewQuestions:["<b>Q:</b> What is NULL in SQL?<br><b>A:</b> NULL represents missing, unknown, or unavailable data.","<b>Q:</b> Is NULL equal to Zero or Blank?<br><b>A:</b> No. NULL is different from both Zero and an empty string."],
relatedTopics:["null","null values","missing data","unknown value","blank value","database null","employee bonus","null records","sql null","database values","sql basics","missing information","empty value","database field","null handling","unknown data","employee data","null example","database records","null concept"]
},

/*==================================
 IS NULL
==================================*/

{
id:14,
category:"SQL Basics",
subCategory:"NULL Handling",
difficulty:"Beginner",
title:"IS NULL",
shortDescription:"Retrieve records where a column contains NULL values.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name IS NULL;`,
sql:`SELECT
EmployeeName,
Bonus
FROM Employees
WHERE Bonus IS NULL;`,
keywordId:"IS_NULL",
sampleDataId:"Employees",
businessCaseId:"Employees Without Bonus",
optimizationId:"IS_NULL",
errorId:"IS_NULL",
interviewId:"IS_NULL",
interviewQuestions:["<b>Q:</b> Why is IS NULL used?<br><b>A:</b> IS NULL finds records where the column contains NULL values.","<b>Q:</b> Can we use = NULL instead of IS NULL?<br><b>A:</b> No. SQL requires IS NULL to check NULL values."],
relatedTopics:["is null","null condition","check null","find null","null records","employee bonus","missing values","sql is null","where is null","database null","employee report","null filter","sql basics","retrieve null records","database query","null data","bonus report","filter null","employees without bonus","null check"]
},

/*==================================
 IS NOT NULL
==================================*/

{
id:15,
category:"SQL Basics",
subCategory:"NULL Handling",
difficulty:"Beginner",
title:"IS NOT NULL",
shortDescription:"Retrieve records where a column contains valid values.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name IS NOT NULL;`,
sql:`SELECT
EmployeeName,
Bonus
FROM Employees
WHERE Bonus IS NOT NULL;`,
keywordId:"IS_NOT_NULL",
sampleDataId:"Employees",
businessCaseId:"Employees Eligible For Bonus",
optimizationId:"IS_NOT_NULL",
errorId:"IS_NOT_NULL",
interviewId:"IS_NOT_NULL",
interviewQuestions:["<b>Q:</b> What is IS NOT NULL?<br><b>A:</b> IS NOT NULL returns records where the column has a valid value.","<b>Q:</b> When is IS NOT NULL commonly used?<br><b>A:</b> It is used to exclude missing data from reports and analysis."],
relatedTopics:["is not null","not null","valid values","non null","bonus report","employee bonus","where is not null","database query","sql not null","retrieve valid records","employee records","database values","filter null","sql basics","employees with bonus","check not null","database report","data availability","bonus analysis","employee data"]
},

/*==================================
 IN OPERATOR
==================================*/

{
id:16,
category:"SQL Basics",
subCategory:"Filtering Data",
difficulty:"Beginner",
title:"IN Operator",
shortDescription:"Filter records matching multiple values.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name IN(value1,value2);`,
sql:`SELECT
EmployeeName,
Department
FROM Employees
WHERE Department IN('IT','Finance');`,
keywordId:"IN",
sampleDataId:"Employees",
businessCaseId:"IT And Finance Employees Report",
optimizationId:"IN",
errorId:"IN",
interviewId:"IN",
interviewQuestions:["<b>Q:</b> What is the purpose of the IN operator?<br><b>A:</b> IN checks whether a value matches any value in a specified list.","<b>Q:</b> Why use IN instead of multiple OR conditions?<br><b>A:</b> IN makes queries shorter, cleaner, and easier to maintain."],
relatedTopics:["in operator","in clause","multiple values","department filter","employee department","where in","sql in","filter multiple records","it employees","finance employees","employee report","database filter","sql basics","or condition","multiple conditions","record filtering","employee list","database query","query records","department report"]
},

/*==================================
 NOT IN OPERATOR
==================================*/

{
id:17,
category:"SQL Basics",
subCategory:"Filtering Data",
difficulty:"Beginner",
title:"NOT IN Operator",
shortDescription:"Exclude records matching multiple values.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name NOT IN(value1,value2);`,
sql:`SELECT
EmployeeName,
Department
FROM Employees
WHERE Department NOT IN('IT','Finance');`,
keywordId:"NOT_IN",
sampleDataId:"Employees",
businessCaseId:"Employees Except IT And Finance",
optimizationId:"NOT_IN",
errorId:"NOT_IN",
interviewId:"NOT_IN",
interviewQuestions:["<b>Q:</b> What is the purpose of the NOT IN operator?<br><b>A:</b> NOT IN excludes records whose values match any value in the specified list.","<b>Q:</b> When should NOT IN be used?<br><b>A:</b> Use NOT IN when you want to exclude multiple values using a single condition."],
relatedTopics:["not in","not in operator","exclude values","exclude departments","department filter","employee filter","sql not in","where not in","filter records","multiple conditions","employee report","database filter","record exclusion","department report","employee list","sql basics","query records","retrieve employees","database query","filter departments"]
},

/*==================================
 BETWEEN OPERATOR
==================================*/

{
id:18,
category:"SQL Basics",
subCategory:"Filtering Data",
difficulty:"Beginner",
title:"BETWEEN Operator",
shortDescription:"Filter records within a specified range.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name BETWEEN value1 AND value2;`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary BETWEEN 40000 AND 70000;`,
keywordId:"BETWEEN",
sampleDataId:"Employees",
businessCaseId:"Employees Within Salary Range",
optimizationId:"BETWEEN",
errorId:"BETWEEN",
interviewId:"BETWEEN",
interviewQuestions:["<b>Q:</b> What is the BETWEEN operator?<br><b>A:</b> BETWEEN filters records that fall within a specified range of values.","<b>Q:</b> Is BETWEEN inclusive?<br><b>A:</b> Yes. BETWEEN includes both the starting and ending values."],
relatedTopics:["between","between operator","salary range","date range","range filter","sql between","employee salary","filter range","database query","employee report","between values","numeric range","date filter","sql basics","retrieve records","salary report","where between","query data","employee information","range search"]
},

/*==================================
 LIKE OPERATOR
==================================*/

{
id:19,
category:"SQL Basics",
subCategory:"Pattern Matching",
difficulty:"Beginner",
title:"LIKE Operator",
shortDescription:"Search records using text patterns.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name LIKE 'pattern';`,
sql:`SELECT
EmployeeName,
Department
FROM Employees
WHERE EmployeeName LIKE 'R%';`,
keywordId:"LIKE",
sampleDataId:"Employees",
businessCaseId:"Employees Starting With Letter R",
optimizationId:"LIKE",
errorId:"LIKE",
interviewId:"LIKE",
interviewQuestions:["<b>Q:</b> What is the LIKE operator?<br><b>A:</b> LIKE searches for records that match a specified text pattern.","<b>Q:</b> Which symbols are commonly used with LIKE?<br><b>A:</b> The '%' and '_' wildcards are commonly used with the LIKE operator."],
relatedTopics:["like","like operator","pattern matching","search text","employee name","wildcard","sql like","search employee","text search","database search","employee report","string search","sql basics","name filter","employee information","search records","retrieve employee","like query","filter names","pattern search"]
},

/*==================================
 WILDCARDS
==================================*/

{
id:20,
category:"SQL Basics",
subCategory:"Pattern Matching",
difficulty:"Beginner",
title:"SQL Wildcards",
shortDescription:"Use special characters with LIKE to search patterns.",
syntax:`%
_`,
sql:`SELECT
EmployeeName
FROM Employees
WHERE EmployeeName LIKE '%an%';`,
keywordId:"WILDCARDS",
sampleDataId:"Employees",
businessCaseId:"Find Employees By Partial Name",
optimizationId:"WILDCARDS",
errorId:"WILDCARDS",
interviewId:"WILDCARDS",
interviewQuestions:["<b>Q:</b> What are SQL wildcards?<br><b>A:</b> Wildcards are special characters used with LIKE to search text patterns.","<b>Q:</b> What is the difference between '%' and '_'?<br><b>A:</b> '%' matches any number of characters, whereas '_' matches exactly one character."],
relatedTopics:["wildcards","sql wildcards","percent wildcard","underscore wildcard","like wildcard","pattern search","text search","employee name","database search","search records","partial match","string matching","sql basics","employee report","search employee","filter names","query text","like operator","wildcard characters","database query"]
},

/*==================================
 AND OPERATOR
==================================*/

{
id:21,
category:"SQL Basics",
subCategory:"Logical Operators",
difficulty:"Beginner",
title:"AND Operator",
shortDescription:"Filter records when all specified conditions are true.",
syntax:`SELECT column_name
FROM table_name
WHERE condition1
AND condition2;`,
sql:`SELECT
EmployeeName,
Department,
Salary
FROM Employees
WHERE Department='IT'
AND Salary>60000;`,
keywordId:"AND",
sampleDataId:"Employees",
businessCaseId:"High Paid IT Employees",
optimizationId:"AND",
errorId:"AND",
interviewId:"AND",
interviewQuestions:["<b>Q:</b> What is the AND operator?<br><b>A:</b> AND returns records only when all specified conditions are true.","<b>Q:</b> When is the AND operator used?<br><b>A:</b> It is used to apply multiple filtering conditions in a single query."],
relatedTopics:["and","and operator","multiple conditions","logical operator","employee filter","salary filter","department filter","sql and","where and","database query","employee report","filter records","sql basics","conditional query","retrieve records","employee salary","employee department","query conditions","database filter","record filtering"]
},

/*==================================
 OR OPERATOR
==================================*/

{
id:22,
category:"SQL Basics",
subCategory:"Logical Operators",
difficulty:"Beginner",
title:"OR Operator",
shortDescription:"Filter records when at least one condition is true.",
syntax:`SELECT column_name
FROM table_name
WHERE condition1
OR condition2;`,
sql:`SELECT
EmployeeName,
Department,
Salary
FROM Employees
WHERE Department='IT'
OR Department='Finance';`,
keywordId:"OR",
sampleDataId:"Employees",
businessCaseId:"IT And Finance Employees Report",
optimizationId:"OR",
errorId:"OR",
interviewId:"OR",
interviewQuestions:["<b>Q:</b> What is the purpose of the OR operator?<br><b>A:</b> OR returns records when at least one specified condition is true.","<b>Q:</b> What is the difference between AND and OR?<br><b>A:</b> AND requires all conditions to be true, whereas OR requires only one condition to be true."],
relatedTopics:["or","or operator","logical operator","multiple conditions","department filter","employee filter","sql or","where or","database query","employee report","filter records","conditional query","retrieve employees","sql basics","employee department","query conditions","database filter","record filtering","multiple filters","employee data"]
},

/*==================================
 NOT OPERATOR
==================================*/

{
id:23,
category:"SQL Basics",
subCategory:"Logical Operators",
difficulty:"Beginner",
title:"NOT Operator",
shortDescription:"Reverse the result of a specified condition.",
syntax:`SELECT column_name
FROM table_name
WHERE NOT condition;`,
sql:`SELECT
EmployeeName,
Department
FROM Employees
WHERE NOT Department='HR';`,
keywordId:"NOT",
sampleDataId:"Employees",
businessCaseId:"Employees Excluding HR Department",
optimizationId:"NOT",
errorId:"NOT",
interviewId:"NOT",
interviewQuestions:["<b>Q:</b> What is the purpose of the NOT operator?<br><b>A:</b> NOT reverses the result of a condition and returns records that do not satisfy it.","<b>Q:</b> When is the NOT operator commonly used?<br><b>A:</b> It is used to exclude specific records from query results."],
relatedTopics:["not","not operator","exclude records","reverse condition","employee filter","department filter","sql not","where not","database query","employee report","filter records","logical operator","conditional query","sql basics","employee department","record exclusion","retrieve employees","database filter","query records","employee data"]
},

/*==================================
 EXISTS
==================================*/

{
id:24,
category:"SQL Basics",
subCategory:"Subquery Operators",
difficulty:"Intermediate",
title:"EXISTS",
shortDescription:"Check whether a subquery returns any records.",
syntax:`SELECT column_name
FROM table_name
WHERE EXISTS(subquery);`,
sql:`SELECT
DepartmentName
FROM Departments D
WHERE EXISTS(
SELECT 1
FROM Employees E
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"EXISTS",
sampleDataId:"Employees",
businessCaseId:"Departments Having Employees",
optimizationId:"EXISTS",
errorId:"EXISTS",
interviewId:"EXISTS",
interviewQuestions:["<b>Q:</b> What is the EXISTS operator?<br><b>A:</b> EXISTS returns TRUE if the subquery returns one or more records.","<b>Q:</b> Why is EXISTS faster than IN in some cases?<br><b>A:</b> EXISTS stops searching as soon as it finds the first matching record."],
relatedTopics:["exists","exists operator","subquery","sql exists","correlated subquery","department employees","database query","employee report","check records","subquery operator","sql basics","employee department","exists clause","retrieve records","query optimization","database filter","employee data","matching records","exists keyword","sql interview"]
},

/*==================================
 NOT EXISTS
==================================*/

{
id:25,
category:"SQL Basics",
subCategory:"Subquery Operators",
difficulty:"Intermediate",
title:"NOT EXISTS",
shortDescription:"Return records when a subquery returns no records.",
syntax:`SELECT column_name
FROM table_name
WHERE NOT EXISTS(subquery);`,
sql:`SELECT
DepartmentName
FROM Departments D
WHERE NOT EXISTS(
SELECT 1
FROM Employees E
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"NOT_EXISTS",
sampleDataId:"Employees",
businessCaseId:"Departments Without Employees",
optimizationId:"NOT_EXISTS",
errorId:"NOT_EXISTS",
interviewId:"NOT_EXISTS",
interviewQuestions:["<b>Q:</b> What is NOT EXISTS?<br><b>A:</b> NOT EXISTS returns TRUE when the subquery returns no matching records.","<b>Q:</b> When should NOT EXISTS be used?<br><b>A:</b> It is commonly used to find unmatched or missing records."],
relatedTopics:["not exists","sql not exists","subquery","correlated subquery","unmatched records","departments without employees","database query","employee report","subquery operator","sql basics","record comparison","missing records","database filter","query optimization","employee department","not exists clause","retrieve records","database search","employee data","sql interview"]
},

/*==================================
 ANY OPERATOR
==================================*/

{
id:26,
category:"SQL Basics",
subCategory:"Comparison Operators",
difficulty:"Intermediate",
title:"ANY Operator",
shortDescription:"Compare a value with any value returned by a subquery.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name > ANY(subquery);`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary > ANY(
SELECT Salary
FROM Employees
WHERE Department='HR'
);`,
keywordId:"ANY",
sampleDataId:"Employees",
businessCaseId:"Employees Earning More Than Any HR Employee",
optimizationId:"ANY",
errorId:"ANY",
interviewId:"ANY",
interviewQuestions:["<b>Q:</b> What is the ANY operator?<br><b>A:</b> ANY compares a value with any value returned by a subquery.","<b>Q:</b> When is ANY used?<br><b>A:</b> ANY is used when a condition should match at least one value from a subquery."],
relatedTopics:["any","any operator","comparison operator","subquery","sql any","salary comparison","employee salary","database query","employee report","comparison query","subquery operator","sql basics","salary report","query records","database comparison","employee information","matching values","sql interview","employee data","comparison condition"]
},

/*==================================
 ALL OPERATOR
==================================*/

{
id:27,
category:"SQL Basics",
subCategory:"Comparison Operators",
difficulty:"Intermediate",
title:"ALL Operator",
shortDescription:"Compare a value with all values returned by a subquery.",
syntax:`SELECT column_name
FROM table_name
WHERE column_name > ALL(subquery);`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary > ALL(
SELECT Salary
FROM Employees
WHERE Department='HR'
);`,
keywordId:"ALL",
sampleDataId:"Employees",
businessCaseId:"Employees Earning More Than Every HR Employee",
optimizationId:"ALL",
errorId:"ALL",
interviewId:"ALL",
interviewQuestions:["<b>Q:</b> What is the ALL operator?<br><b>A:</b> ALL compares a value with every value returned by a subquery.","<b>Q:</b> What is the difference between ANY and ALL?<br><b>A:</b> ANY requires one matching value, whereas ALL requires every value to satisfy the condition."],
relatedTopics:["all","all operator","comparison operator","subquery","sql all","salary comparison","employee salary","database query","comparison query","employee report","sql basics","subquery operator","salary report","employee information","database comparison","greater than all","less than all","matching values","sql interview","all keyword"]
},

/*==================================
 CASE STATEMENT
==================================*/

{
id:28,
category:"SQL Basics",
subCategory:"Conditional Expressions",
difficulty:"Intermediate",
title:"CASE Statement",
shortDescription:"Return different values based on specified conditions.",
syntax:`SELECT
CASE
WHEN condition THEN result
ELSE result
END
FROM table_name;`,
sql:`SELECT
EmployeeName,
Salary,
CASE
WHEN Salary>=70000 THEN 'High'
WHEN Salary>=50000 THEN 'Medium'
ELSE 'Low'
END AS SalaryGrade
FROM Employees;`,
keywordId:"CASE",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Classification",
optimizationId:"CASE",
errorId:"CASE",
interviewId:"CASE",
interviewQuestions:["<b>Q:</b> What is the CASE statement?<br><b>A:</b> CASE applies conditional logic and returns different values based on specified conditions.","<b>Q:</b> When is CASE commonly used?<br><b>A:</b> CASE is commonly used for categorization, reporting and conditional calculations."],
relatedTopics:["case","case statement","conditional statement","case when","salary grade","employee category","conditional logic","sql case","employee report","database query","sql basics","case expression","classification","business rules","employee salary","query logic","conditional query","reporting","data categorization","case keyword"]
},

/*==================================
 IIF FUNCTION
==================================*/

{
id:29,
category:"SQL Basics",
subCategory:"Conditional Functions",
difficulty:"Intermediate",
title:"IIF Function",
shortDescription:"Return one value if a condition is true and another if false.",
syntax:`SELECT
IIF(condition,true_value,false_value)
FROM table_name;`,
sql:`SELECT
EmployeeName,
IIF(Salary>=60000,'Eligible','Not Eligible') AS BonusStatus
FROM Employees;`,
keywordId:"IIF",
sampleDataId:"Employees",
businessCaseId:"Employee Bonus Eligibility",
optimizationId:"IIF",
errorId:"IIF",
interviewId:"IIF",
interviewQuestions:["<b>Q:</b> What is the IIF function?<br><b>A:</b> IIF evaluates a condition and returns one value if TRUE and another if FALSE.","<b>Q:</b> What is the difference between CASE and IIF?<br><b>A:</b> IIF is suitable for simple conditions, whereas CASE handles multiple conditions."],
relatedTopics:["iif","iif function","conditional function","if condition","bonus eligibility","employee status","sql iif","logical function","conditional query","employee report","database query","sql basics","true false","decision making","employee salary","report logic","query functions","business rules","sql interview","iif keyword"]
},

/*==================================
 COALESCE FUNCTION
==================================*/

{
id:30,
category:"SQL Basics",
subCategory:"NULL Handling",
difficulty:"Intermediate",
title:"COALESCE Function",
shortDescription:"Return the first non-NULL value from a list.",
syntax:`SELECT
COALESCE(value1,value2,...);`,
sql:`SELECT
EmployeeName,
COALESCE(Bonus,0) AS Bonus
FROM Employees;`,
keywordId:"COALESCE",
sampleDataId:"Employees",
businessCaseId:"Replace Missing Bonus Values",
optimizationId:"COALESCE",
errorId:"COALESCE",
interviewId:"COALESCE",
interviewQuestions:["<b>Q:</b> What is the COALESCE function?<br><b>A:</b> COALESCE returns the first non-NULL value from the specified list.","<b>Q:</b> Why is COALESCE commonly used?<br><b>A:</b> It is used to replace NULL values with default values in reports and calculations."],
relatedTopics:["coalesce","coalesce function","replace null","null handling","default value","employee bonus","sql coalesce","database query","employee report","missing values","sql basics","null replacement","bonus report","employee salary","data cleaning","query functions","database values","reporting","sql interview","coalesce keyword"]
},

/*==================================
 ISNULL FUNCTION
==================================*/

{
id:31,
category:"SQL Basics",
subCategory:"NULL Handling",
difficulty:"Intermediate",
title:"ISNULL Function",
shortDescription:"Replace NULL values with a specified value.",
syntax:`SELECT
ISNULL(column_name,replacement_value)
FROM table_name;`,
sql:`SELECT
EmployeeName,
ISNULL(Bonus,0) AS Bonus
FROM Employees;`,
keywordId:"ISNULL",
sampleDataId:"Employees",
businessCaseId:"Employee Bonus Report Without NULL Values",
optimizationId:"ISNULL",
errorId:"ISNULL",
interviewId:"ISNULL",
interviewQuestions:["<b>Q:</b> What is the ISNULL function?<br><b>A:</b> ISNULL replaces NULL values with a specified replacement value.","<b>Q:</b> What is the difference between ISNULL and COALESCE?<br><b>A:</b> ISNULL accepts two arguments, whereas COALESCE can evaluate multiple values."],
relatedTopics:["isnull","isnull function","replace null","null handling","default value","employee bonus","sql isnull","database query","employee report","missing values","sql basics","null replacement","bonus report","employee salary","data cleaning","query functions","database values","reporting","sql interview","isnull keyword"]
},

/*==================================
 CAST FUNCTION
==================================*/

{
id:32,
category:"SQL Basics",
subCategory:"Data Type Conversion",
difficulty:"Intermediate",
title:"CAST Function",
shortDescription:"Convert a value from one data type to another.",
syntax:`SELECT
CAST(expression AS data_type);`,
sql:`SELECT
EmployeeName,
CAST(Salary AS INT) AS Salary
FROM Employees;`,
keywordId:"CAST",
sampleDataId:"Employees",
businessCaseId:"Convert Salary To Integer",
optimizationId:"CAST",
errorId:"CAST",
interviewId:"CAST",
interviewQuestions:["<b>Q:</b> What is the CAST function?<br><b>A:</b> CAST converts a value from one data type to another.","<b>Q:</b> When should CAST be used?<br><b>A:</b> CAST is used when a query requires data type conversion for calculations, comparisons, or formatting."],
relatedTopics:["cast","cast function","data type conversion","convert data type","sql cast","integer conversion","string conversion","date conversion","numeric conversion","employee salary","database query","sql basics","type conversion","datatype","convert value","query functions","report formatting","database values","sql interview","cast keyword"]
},

/*==================================
 CONVERT FUNCTION
==================================*/

{
id:33,
category:"SQL Basics",
subCategory:"Data Type Conversion",
difficulty:"Intermediate",
title:"CONVERT Function",
shortDescription:"Convert a value from one data type to another with formatting options.",
syntax:`SELECT
CONVERT(data_type,expression);`,
sql:`SELECT
EmployeeName,
CONVERT(VARCHAR,JoiningDate,103) AS JoiningDate
FROM Employees;`,
keywordId:"CONVERT",
sampleDataId:"Employees",
businessCaseId:"Display Joining Date In DD/MM/YYYY Format",
optimizationId:"CONVERT",
errorId:"CONVERT",
interviewId:"CONVERT",
interviewQuestions:["<b>Q:</b> What is the CONVERT function?<br><b>A:</b> CONVERT changes a value to another data type and supports formatting styles.","<b>Q:</b> What is the difference between CAST and CONVERT?<br><b>A:</b> CAST is ANSI standard, whereas CONVERT provides additional formatting options in SQL Server."],
relatedTopics:["convert","convert function","data type conversion","date format","sql convert","varchar conversion","joining date","employee report","database query","sql basics","format date","type conversion","convert value","database values","query functions","report formatting","employee information","sql interview","convert keyword","date conversion"]
},

/*==================================
 CONCAT FUNCTION
==================================*/

{
id:34,
category:"SQL Basics",
subCategory:"String Functions",
difficulty:"Beginner",
title:"CONCAT Function",
shortDescription:"Combine two or more strings into a single value.",
syntax:`SELECT
CONCAT(value1,value2,...);`,
sql:`SELECT
CONCAT(EmployeeName,' - ',Department) AS EmployeeDetails
FROM Employees;`,
keywordId:"CONCAT",
sampleDataId:"Employees",
businessCaseId:"Employee Directory",
optimizationId:"CONCAT",
errorId:"CONCAT",
interviewId:"CONCAT",
interviewQuestions:["<b>Q:</b> What is the CONCAT function?<br><b>A:</b> CONCAT joins two or more strings into a single string.","<b>Q:</b> Why is CONCAT preferred over the '+' operator?<br><b>A:</b> CONCAT handles NULL values better and improves readability."],
relatedTopics:["concat","concat function","combine text","merge text","join strings","employee details","employee directory","string function","sql concat","database query","sql basics","text concatenation","full name","employee report","query functions","database values","string manipulation","sql interview","concat keyword","combine columns"]
},

/*==================================
 LITERAL VALUES
==================================*/

{
id:35,
category:"SQL Basics",
subCategory:"SQL Expressions",
difficulty:"Beginner",
title:"Literal Values",
shortDescription:"Use fixed values directly in SQL queries.",
syntax:`SELECT
'Text',
100,
GETDATE();`,
sql:`SELECT
EmployeeName,
'Active' AS Status
FROM Employees;`,
keywordId:"LITERAL",
sampleDataId:"Employees",
businessCaseId:"Display Employee Status",
optimizationId:"LITERAL",
errorId:"LITERAL",
interviewId:"LITERAL",
interviewQuestions:["<b>Q:</b> What are literal values in SQL?<br><b>A:</b> Literal values are fixed values such as text, numbers or dates written directly in a query.","<b>Q:</b> Why are literal values used?<br><b>A:</b> They are used to display constant values or compare data within SQL queries."],
relatedTopics:["literal","literal values","constant values","fixed values","text literal","numeric literal","date literal","sql literals","employee status","database query","sql basics","query constants","static values","employee report","query expressions","database values","sql interview","literal keyword","constant expression","sql syntax"]
},

/*==================================
 SQL EXPRESSIONS
==================================*/

{
id:36,
category:"SQL Basics",
subCategory:"SQL Expressions",
difficulty:"Beginner",
title:"SQL Expressions",
shortDescription:"Combine values, columns and operators to produce a result.",
syntax:`SELECT
expression
FROM table_name;`,
sql:`SELECT
EmployeeName,
Salary*12 AS AnnualSalary
FROM Employees;`,
keywordId:"EXPRESSION",
sampleDataId:"Employees",
businessCaseId:"Annual Salary Report",
optimizationId:"EXPRESSIONS",
errorId:"EXPRESSIONS",
interviewId:"EXPRESSIONS",
interviewQuestions:["<b>Q:</b> What is an SQL expression?<br><b>A:</b> An SQL expression is a combination of columns, values, operators or functions that produces a single result.","<b>Q:</b> Where are SQL expressions commonly used?<br><b>A:</b> SQL expressions are used in SELECT, WHERE, ORDER BY and calculated columns."],
relatedTopics:["sql expression","expression","calculated column","salary calculation","annual salary","sql basics","mathematical expression","logical expression","employee report","database query","query calculation","computed column","sql functions","employee salary","database values","query expressions","business calculations","sql interview","expression keyword","formula in sql"]
},

/*==================================
 SQL Operators
==================================*/

{
id:37,
category:"SQL Basics",
subCategory:"SQL Operators",
difficulty:"Beginner",
title:"SQL Operators",
shortDescription:"Use operators to compare, calculate and filter data in SQL queries.",
syntax:`SELECT column_name FROM table_name WHERE condition;`,
sql:`SELECT EmployeeName,Salary FROM Employees WHERE Salary>=50000;`,
keywordId:"OPERATORS",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Filter",
optimizationId:"OPERATORS",
errorId:"OPERATORS",
interviewId:"OPERATORS",
interviewQuestions:["<b>Q:</b> What are SQL operators?<br><b>A:</b> SQL operators compare values, perform calculations and combine conditions.","<b>Q:</b> Name the major SQL operator categories.<br><b>A:</b> Arithmetic, Comparison, Logical and Special operators."],
relatedTopics:["sql operators","operator","comparison operator","logical operator","arithmetic operator","relational operator","greater than","less than","equal","not equal","greater than equal","less than equal","where operator","sql comparison","filter data","sql basics","employee salary","database operator","query operator","comparison symbols"]
},

/*==================================
 Arithmetic Operators
==================================*/

{
id:38,
category:"SQL Basics",
subCategory:"Arithmetic Operators",
difficulty:"Beginner",
title:"Arithmetic Operators",
shortDescription:"Perform mathematical calculations on numeric values in SQL queries.",
syntax:`SELECT Salary+5000,Salary-1000,Salary*12,Salary/2,Salary%2 FROM Employees;`,
sql:`SELECT EmployeeName,Salary,Salary+5000 AS RevisedSalary,Salary*12 AS AnnualSalary FROM Employees;`,
keywordId:"ARITHMETIC_OPERATORS",
sampleDataId:"Employees",
businessCaseId:"Salary Calculation",
optimizationId:"ARITHMETIC_OPERATORS",
errorId:"ARITHMETIC_OPERATORS",
interviewId:"ARITHMETIC_OPERATORS",
interviewQuestions:["<b>Q:</b> What are Arithmetic Operators?<br><b>A:</b> Operators used to perform mathematical calculations.","<b>Q:</b> Which operators are supported?<br><b>A:</b> +, -, *, / and %."],
relatedTopics:["arithmetic operators","sql arithmetic","addition","subtraction","multiplication","division","modulus","mod","salary calculation","annual salary","bonus","calculated column","computed value","expression","math operator","formula","employee salary","sql basics","numeric calculation","database calculation"]
},

/*==================================
 Comparison Operators
==================================*/

{
id:39,
category:"SQL Basics",
subCategory:"Comparison Operators",
difficulty:"Beginner",
title:"Comparison Operators",
shortDescription:"Compare values inside SQL conditions.",
syntax:`SELECT * FROM Employees WHERE Salary>=50000;`,
sql:`SELECT EmployeeName,Salary FROM Employees WHERE Salary>=50000;`,
keywordId:"COMPARISON_OPERATORS",
sampleDataId:"Employees",
businessCaseId:"Salary Comparison",
optimizationId:"COMPARISON_OPERATORS",
errorId:"COMPARISON_OPERATORS",
interviewId:"COMPARISON_OPERATORS",
interviewQuestions:["<b>Q:</b> What are Comparison Operators?<br><b>A:</b> Operators that compare two values.","<b>Q:</b> Name common comparison operators.<br><b>A:</b> =, >, <, >=, <=, <>."],
relatedTopics:["comparison operator","equal","greater than","less than","greater than equal","less than equal","not equal","comparison","salary filter","employee filter","sql comparison","where clause","database comparison","conditions","filter records","comparison symbols","sql basics","relational operator","comparison examples","sql query"]
},

/*==================================
 Logical Operators
==================================*/

{
id:40,
category:"SQL Basics",
subCategory:"Logical Operators",
difficulty:"Beginner",
title:"Logical Operators",
shortDescription:"Combine multiple conditions in SQL queries.",
syntax:`SELECT * FROM Employees WHERE Department='IT' AND Salary>50000;`,
sql:`SELECT EmployeeName,Department,Salary FROM Employees WHERE Department='IT' AND Salary>50000;`,
keywordId:"LOGICAL_OPERATORS",
sampleDataId:"Employees",
businessCaseId:"Department Salary Filter",
optimizationId:"LOGICAL_OPERATORS",
errorId:"LOGICAL_OPERATORS",
interviewId:"LOGICAL_OPERATORS",
interviewQuestions:["<b>Q:</b> What are Logical Operators?<br><b>A:</b> Operators used to combine conditions.","<b>Q:</b> Which logical operators are commonly used?<br><b>A:</b> AND, OR and NOT."],
relatedTopics:["logical operators","and","or","not","multiple conditions","where and","where or","sql logic","condition","employee filter","department filter","salary filter","sql basics","boolean operator","logical condition","database filter","combined condition","query condition","sql interview","logic"]
},

/*==================================
 IN Operator
==================================*/

{
id:41,
category:"SQL Basics",
subCategory:"IN Operator",
difficulty:"Beginner",
title:"IN Operator",
shortDescription:"Filter rows matching multiple values.",
syntax:`SELECT * FROM Employees WHERE Department IN('IT','HR');`,
sql:`SELECT EmployeeName,Department FROM Employees WHERE Department IN('IT','HR');`,
keywordId:"IN",
sampleDataId:"Employees",
businessCaseId:"Department Selection",
optimizationId:"IN",
errorId:"IN",
interviewId:"IN",
interviewQuestions:["<b>Q:</b> What does IN do?<br><b>A:</b> Checks multiple values in one condition.","<b>Q:</b> Why use IN?<br><b>A:</b> It replaces multiple OR conditions."],
relatedTopics:["in operator","sql in","multiple values","or replacement","department list","employee department","filter values","where in","sql filter","condition","list values","employee query","sql basics","query operator","database filter","multiple conditions","record filter","sql examples","in clause","selection"]
},

/*==================================
 BETWEEN Operator
==================================*/

{
id:42,
category:"SQL Basics",
subCategory:"BETWEEN Operator",
difficulty:"Beginner",
title:"BETWEEN Operator",
shortDescription:"Filter values within a specified range.",
syntax:`SELECT * FROM Employees WHERE Salary BETWEEN 30000 AND 60000;`,
sql:`SELECT EmployeeName,Salary FROM Employees WHERE Salary BETWEEN 30000 AND 60000;`,
keywordId:"BETWEEN",
sampleDataId:"Employees",
businessCaseId:"Salary Range",
optimizationId:"BETWEEN",
errorId:"BETWEEN",
interviewId:"BETWEEN",
interviewQuestions:["<b>Q:</b> What is BETWEEN?<br><b>A:</b> Filters values between two limits.","<b>Q:</b> Is BETWEEN inclusive?<br><b>A:</b> Yes, it includes both boundary values."],
relatedTopics:["between","between operator","range","salary range","date range","numeric range","employee salary","where between","sql filter","inclusive","minimum","maximum","database query","sql basics","comparison","record filter","value range","query condition","between clause","sql interview"]
},

/*==================================
 LIKE Operator
==================================*/

{
id:43,
category:"SQL Basics",
subCategory:"LIKE Operator",
difficulty:"Beginner",
title:"LIKE Operator",
shortDescription:"Search text using wildcard patterns.",
syntax:`SELECT * FROM Employees WHERE EmployeeName LIKE 'R%';`,
sql:`SELECT EmployeeName FROM Employees WHERE EmployeeName LIKE 'R%';`,
keywordId:"LIKE",
sampleDataId:"Employees",
businessCaseId:"Customer Name Search",
optimizationId:"LIKE",
errorId:"LIKE",
interviewId:"LIKE",
interviewQuestions:["<b>Q:</b> What is LIKE?<br><b>A:</b> Searches text using patterns.","<b>Q:</b> Which wildcards are commonly used?<br><b>A:</b> % and _."],
relatedTopics:["like","like operator","pattern matching","wildcard","percent","underscore","starts with","ends with","contains","customer search","employee search","text search","string filter","database search","sql basics","pattern","where like","query filter","search records","sql interview"]
},

/*==================================
 Wildcards
==================================*/

{
id:44,
category:"SQL Basics",
subCategory:"Wildcards",
difficulty:"Beginner",
title:"Wildcards",
shortDescription:"Use wildcard characters for flexible text matching.",
syntax:`SELECT * FROM Employees WHERE EmployeeName LIKE '%a%';`,
sql:`SELECT EmployeeName FROM Employees WHERE EmployeeName LIKE '%a%';`,
keywordId:"WILDCARDS",
sampleDataId:"Employees",
businessCaseId:"Flexible Name Search",
optimizationId:"WILDCARDS",
errorId:"WILDCARDS",
interviewId:"WILDCARDS",
interviewQuestions:["<b>Q:</b> What are SQL wildcards?<br><b>A:</b> Characters used with LIKE for pattern matching.","<b>Q:</b> Name common wildcards.<br><b>A:</b> % and _."],
relatedTopics:["wildcards","percent wildcard","underscore wildcard","like","pattern","contains","starts with","ends with","employee search","customer search","text matching","sql basics","database search","filter text","string comparison","pattern search","query search","wildcard examples","sql interview","matching"]
},

/*==================================
 IS NULL
==================================*/

{
id:45,
category:"SQL Basics",
subCategory:"IS NULL",
difficulty:"Beginner",
title:"IS NULL",
shortDescription:"Retrieve records containing NULL values.",
syntax:`SELECT * FROM Employees WHERE ManagerID IS NULL;`,
sql:`SELECT EmployeeName,ManagerID FROM Employees WHERE ManagerID IS NULL;`,
keywordId:"IS_NULL",
sampleDataId:"Employees",
businessCaseId:"Missing Manager Report",
optimizationId:"IS_NULL",
errorId:"IS_NULL",
interviewId:"IS_NULL",
interviewQuestions:["<b>Q:</b> What is IS NULL?<br><b>A:</b> Checks whether a value is NULL.","<b>Q:</b> Can '=' compare NULL?<br><b>A:</b> No, use IS NULL."],
relatedTopics:["is null","null","missing value","blank value","null records","manager id","employee report","database null","sql basics","where null","filter null","empty value","null comparison","query filter","sql interview","record validation","database query","null check","sql examples","isnull"]
},

/*==================================
 IS NOT NULL
==================================*/

{
id:46,
category:"SQL Basics",
subCategory:"IS NOT NULL",
difficulty:"Beginner",
title:"IS NOT NULL",
shortDescription:"Retrieve records containing non-NULL values.",
syntax:`SELECT * FROM Employees WHERE ManagerID IS NOT NULL;`,
sql:`SELECT EmployeeName,ManagerID FROM Employees WHERE ManagerID IS NOT NULL;`,
keywordId:"IS_NOT_NULL",
sampleDataId:"Employees",
businessCaseId:"Assigned Manager Report",
optimizationId:"IS_NOT_NULL",
errorId:"IS_NOT_NULL",
interviewId:"IS_NOT_NULL",
interviewQuestions:["<b>Q:</b> What is IS NOT NULL?<br><b>A:</b> Filters records having values.","<b>Q:</b> Why use IS NOT NULL?<br><b>A:</b> To exclude missing data."],
relatedTopics:["is not null","not null","existing value","assigned manager","employee report","database values","null filter","sql basics","query filter","not null condition","missing data","record validation","sql interview","where not null","filter records","database query","null handling","value exists","sql examples","employee data"]
},

/*==================================
 AS Alias
==================================*/

{
id:47,
category:"SQL Basics",
subCategory:"AS Alias",
difficulty:"Beginner",
title:"AS Alias",
shortDescription:"Assign temporary names to columns or tables.",
syntax:`SELECT EmployeeName AS Name,Salary AS Income FROM Employees;`,
sql:`SELECT EmployeeName AS Name,Salary AS Income FROM Employees;`,
keywordId:"AS",
sampleDataId:"Employees",
businessCaseId:"Readable Reports",
optimizationId:"AS",
errorId:"AS",
interviewId:"AS",
interviewQuestions:["<b>Q:</b> What is AS in SQL?<br><b>A:</b> AS creates a temporary alias for a column or table.","<b>Q:</b> Does AS rename the actual column?<br><b>A:</b> No, it only changes the display name in the result."],
relatedTopics:["as","alias","column alias","table alias","rename column","temporary name","employee report","sql alias","readable output","display name","query formatting","database query","sql basics","column name","table name","alias keyword","result set","sql interview","report formatting","query alias"]
},

/*==================================
 TOP Clause
==================================*/

{
id:48,
category:"SQL Basics",
subCategory:"TOP Clause",
difficulty:"Beginner",
title:"TOP Clause",
shortDescription:"Return a specified number of rows from the result set.",
syntax:`SELECT TOP 5 * FROM Employees;`,
sql:`SELECT TOP 5 EmployeeName,Salary FROM Employees ORDER BY Salary DESC;`,
keywordId:"TOP",
sampleDataId:"Employees",
businessCaseId:"Top Paid Employees",
optimizationId:"TOP",
errorId:"TOP",
interviewId:"TOP",
interviewQuestions:["<b>Q:</b> What is TOP in SQL?<br><b>A:</b> It limits the number of rows returned.","<b>Q:</b> Which database mainly uses TOP?<br><b>A:</b> SQL Server."],
relatedTopics:["top","top clause","top rows","limit rows","first records","highest salary","top employees","sql server top","order by","top keyword","sql basics","fetch records","limit output","query optimization","database query","row limit","employee report","top values","select top","sql interview"]
},

/*==================================
 LIMIT Clause
==================================*/

{
id:49,
category:"SQL Basics",
subCategory:"LIMIT Clause",
difficulty:"Beginner",
title:"LIMIT Clause",
shortDescription:"Restrict the number of rows returned in MySQL and PostgreSQL.",
syntax:`SELECT * FROM Employees LIMIT 5;`,
sql:`SELECT EmployeeName,Salary FROM Employees ORDER BY Salary DESC LIMIT 5;`,
keywordId:"LIMIT",
sampleDataId:"Employees",
businessCaseId:"Top Employee Report",
optimizationId:"LIMIT",
errorId:"LIMIT",
interviewId:"LIMIT",
interviewQuestions:["<b>Q:</b> What is LIMIT?<br><b>A:</b> LIMIT restricts the number of returned rows.","<b>Q:</b> Which databases support LIMIT?<br><b>A:</b> MySQL and PostgreSQL."],
relatedTopics:["limit","limit clause","mysql limit","postgresql limit","top records","row limit","limit rows","highest salary","employee report","query limit","sql basics","database query","result limit","fetch rows","order by","pagination","sql interview","select limit","top values","limit keyword"]
},

/*==================================
 OFFSET Clause
==================================*/

{
id:50,
category:"SQL Basics",
subCategory:"OFFSET Clause",
difficulty:"Beginner",
title:"OFFSET Clause",
shortDescription:"Skip a specified number of rows before returning results.",
syntax:`SELECT * FROM Employees ORDER BY EmployeeID OFFSET 5 ROWS;`,
sql:`SELECT EmployeeName,Salary FROM Employees ORDER BY EmployeeID OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY;`,
keywordId:"OFFSET",
sampleDataId:"Employees",
businessCaseId:"Pagination",
optimizationId:"OFFSET",
errorId:"OFFSET",
interviewId:"OFFSET",
interviewQuestions:["<b>Q:</b> What is OFFSET?<br><b>A:</b> It skips a specified number of rows.","<b>Q:</b> Where is OFFSET commonly used?<br><b>A:</b> Pagination."],
relatedTopics:["offset","offset clause","pagination","skip rows","fetch next","sql server offset","page records","employee list","sql basics","database query","result paging","offset fetch","query pagination","row skip","order by","fetch rows","sql interview","paging","offset keyword","record navigation"]
},

/*==================================
 FETCH Clause
==================================*/

{
id:51,
category:"SQL Basics",
subCategory:"FETCH Clause",
difficulty:"Beginner",
title:"FETCH Clause",
shortDescription:"Retrieve a fixed number of rows after OFFSET.",
syntax:`SELECT * FROM Employees ORDER BY EmployeeID OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;`,
sql:`SELECT EmployeeName,Department FROM Employees ORDER BY EmployeeID OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;`,
keywordId:"FETCH",
sampleDataId:"Employees",
businessCaseId:"Employee Pagination",
optimizationId:"FETCH",
errorId:"FETCH",
interviewId:"FETCH",
interviewQuestions:["<b>Q:</b> What is FETCH?<br><b>A:</b> FETCH returns a fixed number of rows after OFFSET.","<b>Q:</b> Can FETCH be used without OFFSET?<br><b>A:</b> No, SQL Server requires OFFSET."],
relatedTopics:["fetch","fetch next","offset fetch","pagination","row limit","sql server fetch","employee report","page results","database query","sql basics","query paging","fetch rows","result limit","offset","order by","fetch clause","sql interview","record paging","navigation","fetch keyword"]
},

/*==================================
 Single Line Comment
==================================*/

{
id:52,
category:"SQL Basics",
subCategory:"Comments",
difficulty:"Beginner",
title:"Single Line Comment",
shortDescription:"Write comments using two hyphens.",
syntax:`-- This is a comment`,
sql:`-- Display employee records
SELECT * FROM Employees;`,
keywordId:"SINGLE_COMMENT",
sampleDataId:"Employees",
businessCaseId:"SQL Documentation",
optimizationId:"SINGLE_COMMENT",
errorId:"SINGLE_COMMENT",
interviewId:"SINGLE_COMMENT",
interviewQuestions:["<b>Q:</b> How do you write a single-line comment?<br><b>A:</b> Use -- before the comment.","<b>Q:</b> Are comments executed?<br><b>A:</b> No."],
relatedTopics:["single line comment","comment","sql comment","double hyphen","documentation","ignore line","sql basics","query documentation","developer notes","code comments","sql interview","database script","annotation","sql syntax","comment line","sql developer","comment keyword","notes","sql examples","commenting"]
},

/*==================================
 Multi Line Comment
==================================*/

{
id:53,
category:"SQL Basics",
subCategory:"Comments",
difficulty:"Beginner",
title:"Multi Line Comment",
shortDescription:"Write comments across multiple lines.",
syntax:`/* Comment */`,
sql:`/* Employee Report Query */
SELECT * FROM Employees;`,
keywordId:"MULTI_COMMENT",
sampleDataId:"Employees",
businessCaseId:"Large Script Documentation",
optimizationId:"MULTI_COMMENT",
errorId:"MULTI_COMMENT",
interviewId:"MULTI_COMMENT",
interviewQuestions:["<b>Q:</b> How do you write a multi-line comment?<br><b>A:</b> Use /* and */.","<b>Q:</b> Why are multi-line comments useful?<br><b>A:</b> They document large SQL scripts."],
relatedTopics:["multi line comment","block comment","sql comment","documentation","sql basics","developer notes","database script","annotation","comment block","ignore code","query notes","comment syntax","sql interview","documentation","code explanation","script comment","sql examples","block notes","comment keyword","sql developer"]
},

/*==================================
 CONCAT Function
==================================*/

{
id:54,
category:"SQL Functions",
subCategory:"String Functions",
difficulty:"Beginner",
title:"CONCAT Function",
shortDescription:"Combine two or more strings into one value.",
syntax:`SELECT CONCAT(first_name,' ',last_name) FROM Employees;`,
sql:`SELECT CONCAT(EmployeeName,' - ',Department) AS EmployeeInfo FROM Employees;`,
keywordId:"CONCAT",
sampleDataId:"Employees",
businessCaseId:"Employee Display Name",
optimizationId:"CONCAT",
errorId:"CONCAT",
interviewId:"CONCAT",
interviewQuestions:["<b>Q:</b> What is CONCAT?<br><b>A:</b> CONCAT joins multiple strings.","<b>Q:</b> Can CONCAT combine columns?<br><b>A:</b> Yes."],
relatedTopics:["concat","string function","join text","merge text","employee name","department","text combination","sql functions","string manipulation","display value","database function","sql basics","concatenate","full name","query output","sql interview","concat function","text formatting","string operator","sql examples"]
},

/*==================================
 CASE Expression
==================================*/

{
id:55,
category:"SQL Functions",
subCategory:"Conditional Functions",
difficulty:"Intermediate",
title:"CASE Expression",
shortDescription:"Return values based on specified conditions.",
syntax:`SELECT CASE WHEN Salary>=50000 THEN 'High' ELSE 'Low' END FROM Employees;`,
sql:`SELECT EmployeeName,CASE WHEN Salary>=50000 THEN 'High Salary' ELSE 'Normal Salary' END AS SalaryStatus FROM Employees;`,
keywordId:"CASE",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Classification",
optimizationId:"CASE",
errorId:"CASE",
interviewId:"CASE",
interviewQuestions:["<b>Q:</b> What is CASE?<br><b>A:</b> CASE applies conditional logic in SQL.","<b>Q:</b> Where is CASE commonly used?<br><b>A:</b> SELECT, ORDER BY and UPDATE statements."],
relatedTopics:["case","case expression","conditional statement","if else","salary status","employee classification","sql condition","database logic","sql functions","case when","sql basics","conditional query","result value","query logic","business rules","sql interview","case keyword","expression","classification","sql examples"]
},

/*==================================
 CAST Function
==================================*/

{
id:56,
category:"SQL Functions",
subCategory:"Conversion Functions",
difficulty:"Beginner",
title:"CAST Function",
shortDescription:"Convert a value from one data type to another.",
syntax:`SELECT CAST(Salary AS INT) FROM Employees;`,
sql:`SELECT EmployeeName,CAST(Salary AS DECIMAL(10,2)) AS SalaryAmount FROM Employees;`,
keywordId:"CAST",
sampleDataId:"Employees",
businessCaseId:"Data Type Conversion",
optimizationId:"CAST",
errorId:"CAST",
interviewId:"CAST",
interviewQuestions:["<b>Q:</b> What is CAST?<br><b>A:</b> CAST converts one data type into another.","<b>Q:</b> Why use CAST?<br><b>A:</b> To ensure compatible data types during processing."],
relatedTopics:["cast","type conversion","data conversion","convert datatype","decimal","integer","varchar","numeric","sql functions","conversion function","database conversion","sql basics","cast function","datatype","query conversion","sql interview","casting","type change","data formatting","sql examples"]
},

/*==================================
 CONVERT Function
==================================*/

{
id:57,
category:"SQL Functions",
subCategory:"Conversion Functions",
difficulty:"Beginner",
title:"CONVERT Function",
shortDescription:"Convert values between different data types with formatting options.",
syntax:`SELECT CONVERT(VARCHAR,GETDATE(),103);`,
sql:`SELECT EmployeeName,CONVERT(VARCHAR,JoiningDate,105) AS JoiningDateFormat FROM Employees;`,
keywordId:"CONVERT",
sampleDataId:"Employees",
businessCaseId:"Date Formatting",
optimizationId:"CONVERT",
errorId:"CONVERT",
interviewId:"CONVERT",
interviewQuestions:["<b>Q:</b> What is CONVERT?<br><b>A:</b> CONVERT changes data types and supports formatting.","<b>Q:</b> Which database commonly uses CONVERT?<br><b>A:</b> SQL Server."],
relatedTopics:["convert","convert function","datatype conversion","date format","varchar","datetime","sql server","format date","conversion","sql functions","database function","sql basics","type conversion","query formatting","employee joining date","sql interview","convert keyword","date style","formatting","sql examples"]
},

/*==================================
 COUNT Function
==================================*/

{
id:58,
category:"SQL Aggregate Functions",
subCategory:"COUNT Function",
difficulty:"Beginner",
title:"COUNT Function",
shortDescription:"Count the number of rows or non-NULL values in a table.",
syntax:`SELECT COUNT(*) FROM Employees;`,
sql:`SELECT COUNT(*) AS TotalEmployees FROM Employees;`,
keywordId:"COUNT",
sampleDataId:"Employees",
businessCaseId:"Employee Head Count",
optimizationId:"COUNT",
errorId:"COUNT",
interviewId:"COUNT",
interviewQuestions:["<b>Q:</b> What does COUNT() do?<br><b>A:</b> It returns the number of rows or non-NULL values.","<b>Q:</b> Difference between COUNT(*) and COUNT(column)?<br><b>A:</b> COUNT(*) counts all rows while COUNT(column) ignores NULL values."],
relatedTopics:["count","count function","count rows","count records","count employees","aggregate function","sql count","total employees","row count","count column","count star","sql aggregate","database count","employee report","sql basics","count example","count values","count query","sql interview","total records"]
},

/*==================================
 SUM Function
==================================*/

{
id:59,
category:"SQL Aggregate Functions",
subCategory:"SUM Function",
difficulty:"Beginner",
title:"SUM Function",
shortDescription:"Calculate the total of numeric values.",
syntax:`SELECT SUM(Salary) FROM Employees;`,
sql:`SELECT SUM(Salary) AS TotalSalary FROM Employees;`,
keywordId:"SUM",
sampleDataId:"Employees",
businessCaseId:"Monthly Salary Cost",
optimizationId:"SUM",
errorId:"SUM",
interviewId:"SUM",
interviewQuestions:["<b>Q:</b> What does SUM() return?<br><b>A:</b> It returns the total of numeric values.","<b>Q:</b> Can SUM() work on text columns?<br><b>A:</b> No, it works only on numeric values."],
relatedTopics:["sum","sum function","total salary","aggregate","salary total","calculate total","numeric function","sql sum","employee salary","database function","sql aggregate","sum query","total amount","sql basics","finance report","payroll","sum values","sql interview","aggregation","business report"]
},

/*==================================
 AVG Function
==================================*/

{
id:60,
category:"SQL Aggregate Functions",
subCategory:"AVG Function",
difficulty:"Beginner",
title:"AVG Function",
shortDescription:"Calculate the average value of a numeric column.",
syntax:`SELECT AVG(Salary) FROM Employees;`,
sql:`SELECT AVG(Salary) AS AverageSalary FROM Employees;`,
keywordId:"AVG",
sampleDataId:"Employees",
businessCaseId:"Average Employee Salary",
optimizationId:"AVG",
errorId:"AVG",
interviewId:"AVG",
interviewQuestions:["<b>Q:</b> What does AVG() do?<br><b>A:</b> It calculates the average value.","<b>Q:</b> Does AVG() ignore NULL values?<br><b>A:</b> Yes."],
relatedTopics:["avg","average","average salary","avg function","aggregate","mean","salary average","numeric function","sql aggregate","employee report","database function","sql basics","average calculation","avg query","sql interview","business analysis","salary analysis","average values","aggregate function","statistics"]
},

/*==================================
 MIN Function
==================================*/

{
id:61,
category:"SQL Aggregate Functions",
subCategory:"MIN Function",
difficulty:"Beginner",
title:"MIN Function",
shortDescription:"Return the smallest value from a column.",
syntax:`SELECT MIN(Salary) FROM Employees;`,
sql:`SELECT MIN(Salary) AS LowestSalary FROM Employees;`,
keywordId:"MIN",
sampleDataId:"Employees",
businessCaseId:"Lowest Salary Analysis",
optimizationId:"MIN",
errorId:"MIN",
interviewId:"MIN",
interviewQuestions:["<b>Q:</b> What does MIN() return?<br><b>A:</b> The smallest value.","<b>Q:</b> Can MIN() be used on dates?<br><b>A:</b> Yes."],
relatedTopics:["min","minimum","lowest salary","minimum value","aggregate","min function","salary analysis","sql aggregate","database function","employee report","minimum date","lowest value","sql basics","aggregate function","min query","sql interview","statistics","business report","minimum amount","data analysis"]
},

/*==================================
 MAX Function
==================================*/

{
id:62,
category:"SQL Aggregate Functions",
subCategory:"MAX Function",
difficulty:"Beginner",
title:"MAX Function",
shortDescription:"Return the highest value from a column.",
syntax:`SELECT MAX(Salary) FROM Employees;`,
sql:`SELECT MAX(Salary) AS HighestSalary FROM Employees;`,
keywordId:"MAX",
sampleDataId:"Employees",
businessCaseId:"Highest Salary Analysis",
optimizationId:"MAX",
errorId:"MAX",
interviewId:"MAX",
interviewQuestions:["<b>Q:</b> What does MAX() return?<br><b>A:</b> The largest value.","<b>Q:</b> Can MAX() be used with dates?<br><b>A:</b> Yes."],
relatedTopics:["max","maximum","highest salary","maximum value","aggregate","max function","salary report","sql aggregate","database function","employee report","maximum date","highest value","sql basics","aggregate function","max query","sql interview","statistics","business analysis","maximum amount","data analysis"]
},

/*==================================
 GROUP BY Clause
==================================*/

{
id:63,
category:"SQL Aggregate Functions",
subCategory:"GROUP BY",
difficulty:"Beginner",
title:"GROUP BY Clause",
shortDescription:"Group rows that have the same values into summary rows.",
syntax:`SELECT Department,COUNT(*) FROM Employees GROUP BY Department;`,
sql:`SELECT Department,COUNT(*) AS TotalEmployees FROM Employees GROUP BY Department;`,
keywordId:"GROUP_BY",
sampleDataId:"Employees",
businessCaseId:"Department Wise Employee Count",
optimizationId:"GROUP_BY",
errorId:"GROUP_BY",
interviewId:"GROUP_BY",
interviewQuestions:["<b>Q:</b> Why is GROUP BY used?<br><b>A:</b> To group similar rows for aggregation.","<b>Q:</b> Which functions are commonly used with GROUP BY?<br><b>A:</b> COUNT, SUM, AVG, MIN and MAX."],
relatedTopics:["group by","group records","department wise","aggregate","group data","count by department","salary summary","sql aggregate","database grouping","group clause","employee report","sql basics","grouping","aggregate query","sql interview","summary report","department analysis","group results","sql query","data grouping"]
},

/*==================================
 HAVING Clause
==================================*/

{
id:64,
category:"SQL Aggregate Functions",
subCategory:"HAVING Clause",
difficulty:"Intermediate",
title:"HAVING Clause",
shortDescription:"Filter grouped records after aggregation.",
syntax:`SELECT Department,COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*)>5;`,
sql:`SELECT Department,COUNT(*) AS TotalEmployees FROM Employees GROUP BY Department HAVING COUNT(*)>5;`,
keywordId:"HAVING",
sampleDataId:"Employees",
businessCaseId:"Departments Having More Than Five Employees",
optimizationId:"HAVING",
errorId:"HAVING",
interviewId:"HAVING",
interviewQuestions:["<b>Q:</b> What is HAVING used for?<br><b>A:</b> To filter grouped data.","<b>Q:</b> Difference between WHERE and HAVING?<br><b>A:</b> WHERE filters rows before grouping, HAVING filters groups after aggregation."],
relatedTopics:["having","having clause","group by","aggregate filter","department count","summary filter","sql aggregate","database grouping","group filter","employee report","sql basics","aggregate query","having example","group condition","sql interview","summary report","count filter","group analysis","sql query","having keyword"]
},

/*==================================
 ORDER BY Multiple Columns
==================================*/

{
id:65,
category:"SQL Basics",
subCategory:"ORDER BY",
difficulty:"Beginner",
title:"ORDER BY Multiple Columns",
shortDescription:"Sort data using more than one column.",
syntax:`SELECT * FROM Employees ORDER BY Department ASC,Salary DESC;`,
sql:`SELECT EmployeeName,Department,Salary FROM Employees ORDER BY Department ASC,Salary DESC;`,
keywordId:"ORDER_BY_MULTIPLE",
sampleDataId:"Employees",
businessCaseId:"Department Wise Salary Report",
optimizationId:"ORDER_BY_MULTIPLE",
errorId:"ORDER_BY_MULTIPLE",
interviewId:"ORDER_BY_MULTIPLE",
interviewQuestions:["<b>Q:</b> Can ORDER BY sort multiple columns?<br><b>A:</b> Yes.","<b>Q:</b> Can ASC and DESC be used together?<br><b>A:</b> Yes."],
relatedTopics:["order by multiple","multiple sorting","department salary","sort data","ascending","descending","employee report","sql basics","database sorting","query sorting","multi column sort","order clause","salary report","department report","sql interview","sort records","sql examples","order by","sorting","employee data"]
},

/*==================================
 DISTINCT with COUNT
==================================*/

{
id:66,
category:"SQL Aggregate Functions",
subCategory:"COUNT DISTINCT",
difficulty:"Intermediate",
title:"COUNT DISTINCT",
shortDescription:"Count unique values from a column.",
syntax:`SELECT COUNT(DISTINCT Department) FROM Employees;`,
sql:`SELECT COUNT(DISTINCT Department) AS TotalDepartments FROM Employees;`,
keywordId:"COUNT_DISTINCT",
sampleDataId:"Employees",
businessCaseId:"Unique Department Count",
optimizationId:"COUNT_DISTINCT",
errorId:"COUNT_DISTINCT",
interviewId:"COUNT_DISTINCT",
interviewQuestions:["<b>Q:</b> What does COUNT(DISTINCT) do?<br><b>A:</b> Counts unique non-NULL values.","<b>Q:</b> Why use DISTINCT with COUNT?<br><b>A:</b> To avoid duplicate values."],
relatedTopics:["count distinct","distinct count","unique values","unique department","aggregate","count unique","database function","sql aggregate","employee report","department count","sql basics","distinct query","count function","sql interview","aggregation","duplicate removal","summary report","unique count","sql examples","database analysis"]
},

/*==================================
 GROUP BY Multiple Columns
==================================*/

{
id:67,
category:"SQL Aggregate Functions",
subCategory:"GROUP BY",
difficulty:"Intermediate",
title:"GROUP BY Multiple Columns",
shortDescription:"Group data using more than one column.",
syntax:`SELECT Department,Designation,COUNT(*) FROM Employees GROUP BY Department,Designation;`,
sql:`SELECT Department,Designation,COUNT(*) AS TotalEmployees FROM Employees GROUP BY Department,Designation;`,
keywordId:"GROUP_BY_MULTIPLE",
sampleDataId:"Employees",
businessCaseId:"Department and Designation Summary",
optimizationId:"GROUP_BY_MULTIPLE",
errorId:"GROUP_BY_MULTIPLE",
interviewId:"GROUP_BY_MULTIPLE",
interviewQuestions:["<b>Q:</b> Can GROUP BY use multiple columns?<br><b>A:</b> Yes.","<b>Q:</b> Why use multiple GROUP BY columns?<br><b>A:</b> To create detailed summaries."],
relatedTopics:["group by multiple","multiple group by","department designation","summary report","aggregate","employee summary","database grouping","group clause","group records","sql aggregate","sql basics","department analysis","designation analysis","group query","sql interview","grouping","summary","aggregate function","sql examples","data analysis"]
},

/*==================================
 ROLLUP
==================================*/

{
id:68,
category:"SQL Aggregate Functions",
subCategory:"ROLLUP",
difficulty:"Intermediate",
title:"ROLLUP",
shortDescription:"Generate subtotals and grand totals in grouped data.",
syntax:`SELECT Department,SUM(Salary) FROM Employees GROUP BY ROLLUP(Department);`,
sql:`SELECT Department,SUM(Salary) AS TotalSalary FROM Employees GROUP BY ROLLUP(Department);`,
keywordId:"ROLLUP",
sampleDataId:"Employees",
businessCaseId:"Department Wise Salary Summary",
optimizationId:"ROLLUP",
errorId:"ROLLUP",
interviewId:"ROLLUP",
interviewQuestions:["<b>Q:</b> What is ROLLUP?<br><b>A:</b> ROLLUP creates subtotals and grand totals.","<b>Q:</b> Where is ROLLUP used?<br><b>A:</b> Reporting and business summaries."],
relatedTopics:["rollup","group by rollup","subtotal","grand total","salary summary","department summary","aggregate","grouping","sql aggregate","business report","summary report","rollup function","database report","analytics","employee salary","reporting","sql interview","rollup clause","group totals","sql examples"]
},

/*==================================
 CUBE
==================================*/

{
id:69,
category:"SQL Aggregate Functions",
subCategory:"CUBE",
difficulty:"Intermediate",
title:"CUBE",
shortDescription:"Generate all possible subtotal combinations for grouped columns.",
syntax:`SELECT Department,Designation,SUM(Salary) FROM Employees GROUP BY CUBE(Department,Designation);`,
sql:`SELECT Department,Designation,SUM(Salary) AS TotalSalary FROM Employees GROUP BY CUBE(Department,Designation);`,
keywordId:"CUBE",
sampleDataId:"Employees",
businessCaseId:"Department and Designation Analysis",
optimizationId:"CUBE",
errorId:"CUBE",
interviewId:"CUBE",
interviewQuestions:["<b>Q:</b> What is CUBE?<br><b>A:</b> CUBE generates every subtotal combination.","<b>Q:</b> Difference between CUBE and ROLLUP?<br><b>A:</b> CUBE creates all subtotal combinations while ROLLUP creates hierarchical totals."],
relatedTopics:["cube","group by cube","subtotal","grand total","department summary","designation summary","aggregate","analytics","business report","sql aggregate","database report","cube clause","employee report","summary","sql interview","group analysis","reporting","data warehouse","olap","sql examples"]
},

/*==================================
 GROUPING SETS
==================================*/

{
id:70,
category:"SQL Aggregate Functions",
subCategory:"GROUPING SETS",
difficulty:"Advanced",
title:"GROUPING SETS",
shortDescription:"Create multiple grouping combinations in one query.",
syntax:`SELECT Department,Designation,SUM(Salary) FROM Employees GROUP BY GROUPING SETS((Department),(Designation));`,
sql:`SELECT Department,Designation,SUM(Salary) AS TotalSalary FROM Employees GROUP BY GROUPING SETS((Department),(Designation));`,
keywordId:"GROUPING_SETS",
sampleDataId:"Employees",
businessCaseId:"Multiple Summary Reports",
optimizationId:"GROUPING_SETS",
errorId:"GROUPING_SETS",
interviewId:"GROUPING_SETS",
interviewQuestions:["<b>Q:</b> What are GROUPING SETS?<br><b>A:</b> They generate multiple GROUP BY results in one query.","<b>Q:</b> Why use GROUPING SETS?<br><b>A:</b> To reduce multiple UNION queries."],
relatedTopics:["grouping sets","multiple grouping","group by","aggregate","summary","department report","designation report","analytics","sql aggregate","business report","database reporting","group analysis","sql interview","grouping","reporting","summary query","olap","sql examples","data warehouse","aggregation"]
},

/*==================================
 UNION
==================================*/

{
id:71,
category:"SQL Set Operators",
subCategory:"UNION",
difficulty:"Beginner",
title:"UNION",
shortDescription:"Combine unique rows from two or more SELECT statements.",
syntax:`SELECT City FROM Customers UNION SELECT City FROM Suppliers;`,
sql:`SELECT Department FROM Employees UNION SELECT Department FROM Managers;`,
keywordId:"UNION",
sampleDataId:"Employees",
businessCaseId:"Department Consolidation",
optimizationId:"UNION",
errorId:"UNION",
interviewId:"UNION",
interviewQuestions:["<b>Q:</b> What does UNION do?<br><b>A:</b> Combines unique rows from multiple queries.","<b>Q:</b> Does UNION remove duplicates?<br><b>A:</b> Yes."],
relatedTopics:["union","union operator","combine queries","merge result","unique records","set operator","sql union","database query","employee department","department report","sql basics","duplicate removal","query combination","sql interview","union example","result set","multiple select","sql examples","set operations","combine tables"]
},

/*==================================
 UNION ALL
==================================*/

{
id:72,
category:"SQL Set Operators",
subCategory:"UNION ALL",
difficulty:"Beginner",
title:"UNION ALL",
shortDescription:"Combine all rows including duplicate records.",
syntax:`SELECT City FROM Customers UNION ALL SELECT City FROM Suppliers;`,
sql:`SELECT Department FROM Employees UNION ALL SELECT Department FROM Managers;`,
keywordId:"UNION_ALL",
sampleDataId:"Employees",
businessCaseId:"Complete Department List",
optimizationId:"UNION_ALL",
errorId:"UNION_ALL",
interviewId:"UNION_ALL",
interviewQuestions:["<b>Q:</b> What is UNION ALL?<br><b>A:</b> Combines all rows including duplicates.","<b>Q:</b> Which is faster, UNION or UNION ALL?<br><b>A:</b> UNION ALL."],
relatedTopics:["union all","combine queries","duplicate rows","set operator","sql union all","merge results","database query","employee report","department report","sql basics","query combination","result set","sql interview","multiple select","union vs union all","performance","sql examples","combine tables","all records","set operations"]
},

/*==================================
 INTERSECT
==================================*/

{
id:73,
category:"SQL Set Operators",
subCategory:"INTERSECT",
difficulty:"Intermediate",
title:"INTERSECT",
shortDescription:"Return only common rows from multiple queries.",
syntax:`SELECT City FROM Customers INTERSECT SELECT City FROM Suppliers;`,
sql:`SELECT Department FROM Employees INTERSECT SELECT Department FROM Managers;`,
keywordId:"INTERSECT",
sampleDataId:"Employees",
businessCaseId:"Common Departments",
optimizationId:"INTERSECT",
errorId:"INTERSECT",
interviewId:"INTERSECT",
interviewQuestions:["<b>Q:</b> What is INTERSECT?<br><b>A:</b> Returns common rows from two queries.","<b>Q:</b> Does MySQL support INTERSECT?<br><b>A:</b> No."],
relatedTopics:["intersect","common records","matching rows","set operator","sql intersect","database query","common department","employee report","query comparison","sql basics","result set","intersection","sql interview","compare queries","set operations","analytics","sql examples","database comparison","shared records","common values"]
},

/*==================================
 EXCEPT
==================================*/

{
id:74,
category:"SQL Set Operators",
subCategory:"EXCEPT",
difficulty:"Intermediate",
title:"EXCEPT",
shortDescription:"Return rows from the first query that do not exist in the second.",
syntax:`SELECT City FROM Customers EXCEPT SELECT City FROM Suppliers;`,
sql:`SELECT Department FROM Employees EXCEPT SELECT Department FROM Managers;`,
keywordId:"EXCEPT",
sampleDataId:"Employees",
businessCaseId:"Unique Departments",
optimizationId:"EXCEPT",
errorId:"EXCEPT",
interviewId:"EXCEPT",
interviewQuestions:["<b>Q:</b> What is EXCEPT?<br><b>A:</b> Returns rows found only in the first query.","<b>Q:</b> Which database uses MINUS instead of EXCEPT?<br><b>A:</b> Oracle."],
relatedTopics:["except","minus","difference","set operator","unique records","query comparison","database query","department report","employee report","sql basics","set operations","result difference","sql interview","compare queries","analytics","database comparison","sql examples","record comparison","first query","second query"]
},

/*==================================
 EXISTS
==================================*/

{
id:75,
category:"SQL Subqueries",
subCategory:"EXISTS",
difficulty:"Intermediate",
title:"EXISTS",
shortDescription:"Check whether a subquery returns any rows.",
syntax:`SELECT * FROM Departments d WHERE EXISTS(SELECT 1 FROM Employees e WHERE e.Department=d.Department);`,
sql:`SELECT * FROM Departments d WHERE EXISTS(SELECT 1 FROM Employees e WHERE e.Department=d.Department);`,
keywordId:"EXISTS",
sampleDataId:"Employees",
businessCaseId:"Departments Having Employees",
optimizationId:"EXISTS",
errorId:"EXISTS",
interviewId:"EXISTS",
interviewQuestions:["<b>Q:</b> What does EXISTS do?<br><b>A:</b> Checks whether a subquery returns rows.","<b>Q:</b> When is EXISTS preferred?<br><b>A:</b> When checking row existence in correlated subqueries."],
relatedTopics:["exists","exists operator","subquery","correlated subquery","check existence","department report","employee department","sql subquery","database query","sql basics","exists clause","query optimization","sql interview","business query","record exists","filter data","sql examples","exists keyword","subquery examples","database analysis"]
},

/*==================================
 NOT EXISTS
==================================*/

{
id:76,
category:"SQL Subqueries",
subCategory:"NOT EXISTS",
difficulty:"Intermediate",
title:"NOT EXISTS",
shortDescription:"Return rows where the subquery returns no records.",
syntax:`SELECT * FROM Departments d WHERE NOT EXISTS(SELECT 1 FROM Employees e WHERE e.Department=d.Department);`,
sql:`SELECT * FROM Departments d WHERE NOT EXISTS(SELECT 1 FROM Employees e WHERE e.Department=d.Department);`,
keywordId:"NOT_EXISTS",
sampleDataId:"Employees",
businessCaseId:"Departments Without Employees",
optimizationId:"NOT_EXISTS",
errorId:"NOT_EXISTS",
interviewId:"NOT_EXISTS",
interviewQuestions:["<b>Q:</b> What is NOT EXISTS?<br><b>A:</b> Returns rows when the subquery has no records.","<b>Q:</b> Where is NOT EXISTS used?<br><b>A:</b> Finding unmatched records."],
relatedTopics:["not exists","exists","subquery","missing records","unmatched rows","department report","employee report","sql subquery","database query","sql basics","correlated subquery","query optimization","sql interview","record missing","filter data","sql examples","not exists clause","database analysis","subquery keyword","business report"]
},

/*==================================
 ANY Operator
==================================*/

{
id:77,
category:"SQL Subqueries",
subCategory:"ANY Operator",
difficulty:"Intermediate",
title:"ANY Operator",
shortDescription:"Compare a value with any value returned by a subquery.",
syntax:`SELECT EmployeeName FROM Employees WHERE Salary>ANY(SELECT Salary FROM Employees WHERE Department='HR');`,
sql:`SELECT EmployeeName,Salary FROM Employees WHERE Salary>ANY(SELECT Salary FROM Employees WHERE Department='HR');`,
keywordId:"ANY",
sampleDataId:"Employees",
businessCaseId:"Employees Earning More Than Any HR Employee",
optimizationId:"ANY",
errorId:"ANY",
interviewId:"ANY",
interviewQuestions:["<b>Q:</b> What does ANY do?<br><b>A:</b> Compares a value with any value returned by a subquery.","<b>Q:</b> Which operators work with ANY?<br><b>A:</b> =, >, >=, <, <= and <>."],
relatedTopics:["any","any operator","subquery","compare any","salary comparison","employee salary","sql subquery","database query","comparison operator","sql basics","any clause","filter data","query comparison","sql interview","business report","subquery example","comparison","sql examples","employee analysis","any keyword"]
},

/*==================================
 ALL Operator
==================================*/

{
id:78,
category:"SQL Subqueries",
subCategory:"ALL Operator",
difficulty:"Intermediate",
title:"ALL Operator",
shortDescription:"Compare a value with every value returned by a subquery.",
syntax:`SELECT EmployeeName FROM Employees WHERE Salary>ALL(SELECT Salary FROM Employees WHERE Department='HR');`,
sql:`SELECT EmployeeName,Salary FROM Employees WHERE Salary>ALL(SELECT Salary FROM Employees WHERE Department='HR');`,
keywordId:"ALL",
sampleDataId:"Employees",
businessCaseId:"Highest Paid Employees",
optimizationId:"ALL",
errorId:"ALL",
interviewId:"ALL",
interviewQuestions:["<b>Q:</b> What does ALL do?<br><b>A:</b> Compares a value with every value from a subquery.","<b>Q:</b> Difference between ANY and ALL?<br><b>A:</b> ANY checks one matching value, ALL checks every value."],
relatedTopics:["all","all operator","subquery","compare all","salary comparison","employee salary","database query","sql basics","comparison operator","all clause","filter data","query comparison","sql interview","business report","subquery example","comparison","sql examples","employee analysis","all keyword","sql subquery"]
},

/*==================================
 Subquery
==================================*/

{
id:79,
category:"SQL Subqueries",
subCategory:"Subquery",
difficulty:"Intermediate",
title:"Subquery",
shortDescription:"Use one query inside another SQL query.",
syntax:`SELECT * FROM Employees WHERE Salary>(SELECT AVG(Salary) FROM Employees);`,
sql:`SELECT EmployeeName,Salary FROM Employees WHERE Salary>(SELECT AVG(Salary) FROM Employees);`,
keywordId:"SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Employees Above Average Salary",
optimizationId:"SUBQUERY",
errorId:"SUBQUERY",
interviewId:"SUBQUERY",
interviewQuestions:["<b>Q:</b> What is a Subquery?<br><b>A:</b> A query written inside another SQL query.","<b>Q:</b> Where can subqueries be used?<br><b>A:</b> SELECT, FROM, WHERE and HAVING clauses."],
relatedTopics:["subquery","nested query","inner query","outer query","average salary","employee report","sql subquery","database query","sql basics","nested select","query inside query","filter data","sql interview","business analysis","subquery example","query logic","sql examples","database analysis","nested sql","subquery keyword"]
},

/*==================================
 Correlated Subquery
==================================*/

{
id:80,
category:"SQL Subqueries",
subCategory:"Correlated Subquery",
difficulty:"Advanced",
title:"Correlated Subquery",
shortDescription:"A subquery that depends on the outer query.",
syntax:`SELECT * FROM Employees e WHERE Salary>(SELECT AVG(Salary) FROM Employees WHERE Department=e.Department);`,
sql:`SELECT EmployeeName,Department,Salary FROM Employees e WHERE Salary>(SELECT AVG(Salary) FROM Employees WHERE Department=e.Department);`,
keywordId:"CORRELATED_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Department Wise Salary Analysis",
optimizationId:"CORRELATED_SUBQUERY",
errorId:"CORRELATED_SUBQUERY",
interviewId:"CORRELATED_SUBQUERY",
interviewQuestions:["<b>Q:</b> What is a Correlated Subquery?<br><b>A:</b> A subquery executed once for every outer query row.","<b>Q:</b> Is a correlated subquery slower?<br><b>A:</b> Usually yes, because it executes repeatedly."],
relatedTopics:["correlated subquery","subquery","nested query","department salary","employee report","sql subquery","database query","outer query","inner query","sql basics","query optimization","business analysis","salary comparison","sql interview","subquery example","correlated query","database analysis","sql examples","advanced sql","nested sql"]
},

/*==================================
 INNER JOIN
==================================*/

{
id:81,
category:"SQL Joins",
subCategory:"INNER JOIN",
difficulty:"Beginner",
title:"INNER JOIN",
shortDescription:"Return matching records from both tables.",
syntax:`SELECT * FROM Employees INNER JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees INNER JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
keywordId:"INNER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Department Report",
optimizationId:"INNER_JOIN",
errorId:"INNER_JOIN",
interviewId:"INNER_JOIN",
interviewQuestions:["<b>Q:</b> What is INNER JOIN?<br><b>A:</b> Returns matching rows from both tables.","<b>Q:</b> What happens to unmatched rows?<br><b>A:</b> They are excluded."],
relatedTopics:["inner join","join","matching records","employee department","department table","sql join","database join","join clause","employee report","sql basics","join example","foreign key","primary key","table relationship","sql interview","join query","database query","sql examples","inner join keyword","table join"]
},

/*==================================
 LEFT JOIN
==================================*/

{
id:82,
category:"SQL Joins",
subCategory:"LEFT JOIN",
difficulty:"Beginner",
title:"LEFT JOIN",
shortDescription:"Return all rows from the left table and matching rows from the right table.",
syntax:`SELECT * FROM Employees LEFT JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees LEFT JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
keywordId:"LEFT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employees Without Departments",
optimizationId:"LEFT_JOIN",
errorId:"LEFT_JOIN",
interviewId:"LEFT_JOIN",
interviewQuestions:["<b>Q:</b> What is LEFT JOIN?<br><b>A:</b> Returns all rows from the left table.","<b>Q:</b> What happens if no match exists?<br><b>A:</b> NULL values are returned for the right table."],
relatedTopics:["left join","left outer join","join","employee report","department table","database join","table relationship","sql join","sql basics","join example","foreign key","primary key","left table","matching records","sql interview","join query","database query","sql examples","outer join","table join"]
},

/*==================================
 RIGHT JOIN
==================================*/

{
id:83,
category:"SQL Joins",
subCategory:"RIGHT JOIN",
difficulty:"Beginner",
title:"RIGHT JOIN",
shortDescription:"Return all rows from the right table and matching rows from the left table.",
syntax:`SELECT * FROM Employees RIGHT JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees RIGHT JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
keywordId:"RIGHT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Department List Including Empty Departments",
optimizationId:"RIGHT_JOIN",
errorId:"RIGHT_JOIN",
interviewId:"RIGHT_JOIN",
interviewQuestions:["<b>Q:</b> What is RIGHT JOIN?<br><b>A:</b> Returns all rows from the right table.","<b>Q:</b> What if no employee exists?<br><b>A:</b> Employee columns return NULL."],
relatedTopics:["right join","right outer join","join","employee report","department table","database join","table relationship","sql join","sql basics","join example","foreign key","primary key","right table","matching records","sql interview","join query","database query","sql examples","outer join","table join"]
},

/*==================================
 FULL OUTER JOIN
==================================*/

{
id:84,
category:"SQL Joins",
subCategory:"FULL OUTER JOIN",
difficulty:"Intermediate",
title:"FULL OUTER JOIN",
shortDescription:"Return all matching and non-matching rows from both tables.",
syntax:`SELECT * FROM Employees FULL OUTER JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees FULL OUTER JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
keywordId:"FULL_OUTER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Complete Employee Department Analysis",
optimizationId:"FULL_OUTER_JOIN",
errorId:"FULL_OUTER_JOIN",
interviewId:"FULL_OUTER_JOIN",
interviewQuestions:["<b>Q:</b> What is FULL OUTER JOIN?<br><b>A:</b> Returns all rows from both tables.","<b>Q:</b> What happens to unmatched rows?<br><b>A:</b> NULL values are returned where no match exists."],
relatedTopics:["full outer join","full join","outer join","join","employee report","department report","database join","sql join","table relationship","sql basics","join example","foreign key","primary key","matching records","sql interview","join query","database query","sql examples","full join keyword","table join"]
},

/*==================================
 CROSS JOIN
==================================*/

{
id:85,
category:"SQL Joins",
subCategory:"CROSS JOIN",
difficulty:"Intermediate",
title:"CROSS JOIN",
shortDescription:"Return the Cartesian product of two tables.",
syntax:`SELECT * FROM Employees CROSS JOIN Departments;`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees CROSS JOIN Departments;`,
keywordId:"CROSS_JOIN",
sampleDataId:"Employees",
businessCaseId:"Generate All Employee Department Combinations",
optimizationId:"CROSS_JOIN",
errorId:"CROSS_JOIN",
interviewId:"CROSS_JOIN",
interviewQuestions:["<b>Q:</b> What is CROSS JOIN?<br><b>A:</b> Returns every possible row combination.","<b>Q:</b> Does CROSS JOIN require a condition?<br><b>A:</b> No."],
relatedTopics:["cross join","cartesian product","join","employee department","database join","sql join","table relationship","all combinations","sql basics","join example","cross product","table combination","sql interview","join query","database query","sql examples","cartesian join","cross keyword","table join","all records"]
},

/*==================================
 SELF JOIN
==================================*/

{
id:86,
category:"SQL Joins",
subCategory:"SELF JOIN",
difficulty:"Intermediate",
title:"SELF JOIN",
shortDescription:"Join a table with itself to compare rows within the same table.",
syntax:`SELECT A.EmployeeName,B.EmployeeName AS Manager FROM Employees A INNER JOIN Employees B ON A.ManagerID=B.EmployeeID;`,
sql:`SELECT A.EmployeeName,B.EmployeeName AS Manager FROM Employees A INNER JOIN Employees B ON A.ManagerID=B.EmployeeID;`,
keywordId:"SELF_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Manager Report",
optimizationId:"SELF_JOIN",
errorId:"SELF_JOIN",
interviewId:"SELF_JOIN",
interviewQuestions:["<b>Q:</b> What is SELF JOIN?<br><b>A:</b> A table joined with itself using aliases.","<b>Q:</b> Why are aliases required in SELF JOIN?<br><b>A:</b> To distinguish between the two instances of the same table."],
relatedTopics:["self join","employee manager","manager report","same table join","table alias","employee hierarchy","recursive data","sql join","database join","join example","employee relationship","manager employee","sql basics","table relationship","sql interview","join query","database query","sql examples","hierarchy","self join keyword"]
},

/*==================================
 Multiple JOIN
==================================*/

{
id:87,
category:"SQL Joins",
subCategory:"Multiple JOIN",
difficulty:"Intermediate",
title:"Multiple JOIN",
shortDescription:"Join more than two tables in a single SQL query.",
syntax:`SELECT * FROM Employees E INNER JOIN Departments D ON E.DepartmentID=D.DepartmentID INNER JOIN Locations L ON D.LocationID=L.LocationID;`,
sql:`SELECT E.EmployeeName,D.DepartmentName,L.City FROM Employees E INNER JOIN Departments D ON E.DepartmentID=D.DepartmentID INNER JOIN Locations L ON D.LocationID=L.LocationID;`,
keywordId:"MULTIPLE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Department Location Report",
optimizationId:"MULTIPLE_JOIN",
errorId:"MULTIPLE_JOIN",
interviewId:"MULTIPLE_JOIN",
interviewQuestions:["<b>Q:</b> What is Multiple JOIN?<br><b>A:</b> Joining three or more tables in one query.","<b>Q:</b> What should be considered while using Multiple JOIN?<br><b>A:</b> Proper join conditions and indexing."],
relatedTopics:["multiple join","three table join","multi join","employee department location","database join","sql join","join multiple tables","sql basics","join example","foreign key","table relationship","query optimization","sql interview","join query","database query","sql examples","inner join","left join","complex join","multiple tables"]
},

/*==================================
 NATURAL JOIN
==================================*/

{
id:88,
category:"SQL Joins",
subCategory:"NATURAL JOIN",
difficulty:"Intermediate",
title:"NATURAL JOIN",
shortDescription:"Automatically join tables using columns with the same name.",
syntax:`SELECT * FROM Employees NATURAL JOIN Departments;`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees NATURAL JOIN Departments;`,
keywordId:"NATURAL_JOIN",
sampleDataId:"Employees",
businessCaseId:"Automatic Table Join",
optimizationId:"NATURAL_JOIN",
errorId:"NATURAL_JOIN",
interviewId:"NATURAL_JOIN",
interviewQuestions:["<b>Q:</b> What is NATURAL JOIN?<br><b>A:</b> It joins tables automatically using common column names.","<b>Q:</b> Is NATURAL JOIN recommended in production?<br><b>A:</b> Usually no, explicit JOIN conditions are preferred."],
relatedTopics:["natural join","automatic join","common columns","join","database join","sql join","table relationship","employee department","sql basics","join example","query join","sql interview","database query","join clause","natural keyword","table join","sql examples","automatic matching","common field","join types"]
},

/*==================================
 JOIN vs UNION
==================================*/

{
id:89,
category:"SQL Joins",
subCategory:"JOIN vs UNION",
difficulty:"Intermediate",
title:"JOIN vs UNION",
shortDescription:"Understand the difference between JOIN and UNION operations.",
syntax:`JOIN combines columns, UNION combines rows.`,
sql:`SELECT EmployeeName,DepartmentName FROM Employees INNER JOIN Departments ON Employees.DepartmentID=Departments.DepartmentID;`,
keywordId:"JOIN_VS_UNION",
sampleDataId:"Employees",
businessCaseId:"Choosing the Correct SQL Operation",
optimizationId:"JOIN_VS_UNION",
errorId:"JOIN_VS_UNION",
interviewId:"JOIN_VS_UNION",
interviewQuestions:["<b>Q:</b> What is the difference between JOIN and UNION?<br><b>A:</b> JOIN combines columns, UNION combines rows.","<b>Q:</b> When should UNION be used instead of JOIN?<br><b>A:</b> When combining similar result sets."],
relatedTopics:["join vs union","join difference","union difference","sql comparison","join types","set operator","combine rows","combine columns","database query","sql basics","sql interview","query comparison","join example","union example","database concepts","table join","result set","sql examples","comparison","join keyword"]
},

/*==================================
 INSERT Statement
==================================*/

{
id:90,
category:"SQL DML",
subCategory:"INSERT",
difficulty:"Beginner",
title:"INSERT Statement",
shortDescription:"Insert new records into a database table.",
syntax:`INSERT INTO Employees(EmployeeID,EmployeeName,Salary) VALUES(201,'Amit',55000);`,
sql:`INSERT INTO Employees(EmployeeID,EmployeeName,Department,Salary) VALUES(201,'Amit','IT',55000);`,
keywordId:"INSERT",
sampleDataId:"Employees",
businessCaseId:"Add New Employee",
optimizationId:"INSERT",
errorId:"INSERT",
interviewId:"INSERT",
interviewQuestions:["<b>Q:</b> What does INSERT do?<br><b>A:</b> Inserts new rows into a table.","<b>Q:</b> Can INSERT add multiple rows?<br><b>A:</b> Yes."],
relatedTopics:["insert","insert statement","insert into","add record","new employee","insert row","sql dml","database insert","employee table","sql basics","insert values","database query","sql interview","data entry","table records","insert query","sql examples","new row","data manipulation","insert keyword"]
},

/*==================================
 INSERT Multiple Rows
==================================*/

{
id:91,
category:"SQL DML",
subCategory:"INSERT",
difficulty:"Beginner",
title:"INSERT Multiple Rows",
shortDescription:"Insert multiple records using a single SQL statement.",
syntax:`INSERT INTO Employees(EmployeeID,EmployeeName) VALUES(201,'Amit'),(202,'Riya');`,
sql:`INSERT INTO Employees(EmployeeID,EmployeeName,Department) VALUES(201,'Amit','IT'),(202,'Riya','HR');`,
keywordId:"INSERT_MULTIPLE",
sampleDataId:"Employees",
businessCaseId:"Bulk Employee Creation",
optimizationId:"INSERT_MULTIPLE",
errorId:"INSERT_MULTIPLE",
interviewId:"INSERT_MULTIPLE",
interviewQuestions:["<b>Q:</b> Can INSERT add multiple rows?<br><b>A:</b> Yes, by separating VALUES with commas.","<b>Q:</b> Why use multi-row INSERT?<br><b>A:</b> Better performance than multiple INSERT statements."],
relatedTopics:["insert multiple","bulk insert","multiple values","insert rows","employee records","sql insert","database insert","sql dml","bulk data","insert query","sql basics","data entry","performance","database query","sql interview","insert example","multiple records","sql examples","table insert","batch insert"]
},

/*==================================
 INSERT INTO SELECT
==================================*/

{
id:92,
category:"SQL DML",
subCategory:"INSERT",
difficulty:"Intermediate",
title:"INSERT INTO SELECT",
shortDescription:"Copy data from one table into another.",
syntax:`INSERT INTO EmployeeBackup SELECT * FROM Employees;`,
sql:`INSERT INTO EmployeeBackup(EmployeeID,EmployeeName,Department) SELECT EmployeeID,EmployeeName,Department FROM Employees;`,
keywordId:"INSERT_SELECT",
sampleDataId:"Employees",
businessCaseId:"Employee Backup",
optimizationId:"INSERT_SELECT",
errorId:"INSERT_SELECT",
interviewId:"INSERT_SELECT",
interviewQuestions:["<b>Q:</b> What is INSERT INTO SELECT?<br><b>A:</b> Copies data from one table to another.","<b>Q:</b> Does the destination table need matching columns?<br><b>A:</b> Yes."],
relatedTopics:["insert into select","copy records","backup table","employee backup","sql insert","database backup","sql dml","copy data","insert query","sql basics","data migration","database query","sql interview","insert select","duplicate table","sql examples","table copy","data transfer","bulk copy","insert keyword"]
},

/*==================================
 UPDATE Statement
==================================*/

{
id:93,
category:"SQL DML",
subCategory:"UPDATE",
difficulty:"Beginner",
title:"UPDATE Statement",
shortDescription:"Modify existing records in a database table.",
syntax:`UPDATE Employees SET Salary=60000 WHERE EmployeeID=101;`,
sql:`UPDATE Employees SET Salary=60000 WHERE EmployeeID=101;`,
keywordId:"UPDATE",
sampleDataId:"Employees",
businessCaseId:"Salary Revision",
optimizationId:"UPDATE",
errorId:"UPDATE",
interviewId:"UPDATE",
interviewQuestions:["<b>Q:</b> What does UPDATE do?<br><b>A:</b> Modifies existing records.","<b>Q:</b> Why is WHERE important in UPDATE?<br><b>A:</b> To avoid updating every row."],
relatedTopics:["update","update statement","modify record","salary update","employee update","sql update","database update","sql dml","where clause","sql basics","update query","database query","sql interview","data modification","update values","employee table","sql examples","record update","data manipulation","update keyword"]
},

/*==================================
 UPDATE Multiple Columns
==================================*/

{
id:94,
category:"SQL DML",
subCategory:"UPDATE",
difficulty:"Beginner",
title:"UPDATE Multiple Columns",
shortDescription:"Update more than one column in a single statement.",
syntax:`UPDATE Employees SET Salary=60000,Department='IT' WHERE EmployeeID=101;`,
sql:`UPDATE Employees SET Salary=60000,Department='IT' WHERE EmployeeID=101;`,
keywordId:"UPDATE_MULTIPLE",
sampleDataId:"Employees",
businessCaseId:"Employee Information Update",
optimizationId:"UPDATE_MULTIPLE",
errorId:"UPDATE_MULTIPLE",
interviewId:"UPDATE_MULTIPLE",
interviewQuestions:["<b>Q:</b> Can UPDATE modify multiple columns?<br><b>A:</b> Yes.","<b>Q:</b> How are multiple columns separated?<br><b>A:</b> By commas in the SET clause."],
relatedTopics:["update multiple","multiple columns","update statement","employee update","salary update","department update","sql update","database update","sql dml","sql basics","set clause","update query","database query","sql interview","record update","data modification","sql examples","employee record","multiple update","update keyword"]
},

/*==================================
 UPDATE with JOIN
==================================*/

{
id:95,
category:"SQL DML",
subCategory:"UPDATE",
difficulty:"Intermediate",
title:"UPDATE with JOIN",
shortDescription:"Update records in one table using values from another table.",
syntax:`UPDATE E SET E.Salary=B.Salary FROM Employees E INNER JOIN EmployeeBonus B ON E.EmployeeID=B.EmployeeID;`,
sql:`UPDATE E SET E.Salary=B.NewSalary FROM Employees E INNER JOIN SalaryRevision B ON E.EmployeeID=B.EmployeeID;`,
keywordId:"UPDATE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Bulk Salary Revision",
optimizationId:"UPDATE_JOIN",
errorId:"UPDATE_JOIN",
interviewId:"UPDATE_JOIN",
interviewQuestions:["<b>Q:</b> What is UPDATE with JOIN?<br><b>A:</b> It updates one table using matching records from another table.","<b>Q:</b> Why use UPDATE JOIN?<br><b>A:</b> To perform bulk updates efficiently."],
relatedTopics:["update join","update with join","bulk update","salary revision","employee update","sql update","database update","join update","sql dml","sql basics","update query","employee salary","data modification","sql interview","join query","table update","sql examples","record update","update keyword","join"]
},

/*==================================
 DELETE Statement
==================================*/

{
id:96,
category:"SQL DML",
subCategory:"DELETE",
difficulty:"Beginner",
title:"DELETE Statement",
shortDescription:"Delete one or more rows from a table.",
syntax:`DELETE FROM Employees WHERE EmployeeID=101;`,
sql:`DELETE FROM Employees WHERE EmployeeID=101;`,
keywordId:"DELETE",
sampleDataId:"Employees",
businessCaseId:"Remove Resigned Employee",
optimizationId:"DELETE",
errorId:"DELETE",
interviewId:"DELETE",
interviewQuestions:["<b>Q:</b> What does DELETE do?<br><b>A:</b> Removes rows from a table.","<b>Q:</b> Why is WHERE important in DELETE?<br><b>A:</b> Without WHERE all rows are deleted."],
relatedTopics:["delete","delete statement","remove record","delete row","employee delete","sql delete","database delete","sql dml","delete query","where clause","sql basics","employee table","record deletion","sql interview","data manipulation","delete keyword","delete employee","database query","sql examples","remove data"]
},

/*==================================
 DELETE ALL Records
==================================*/

{
id:97,
category:"SQL DML",
subCategory:"DELETE",
difficulty:"Beginner",
title:"DELETE All Records",
shortDescription:"Delete every record from a table while keeping the table structure.",
syntax:`DELETE FROM Employees;`,
sql:`DELETE FROM Employees;`,
keywordId:"DELETE_ALL",
sampleDataId:"Employees",
businessCaseId:"Clear Employee Data",
optimizationId:"DELETE_ALL",
errorId:"DELETE_ALL",
interviewId:"DELETE_ALL",
interviewQuestions:["<b>Q:</b> What happens when DELETE has no WHERE clause?<br><b>A:</b> All rows are removed.","<b>Q:</b> Is the table deleted?<br><b>A:</b> No, only the data is removed."],
relatedTopics:["delete all","delete without where","remove all rows","clear table","sql delete","database delete","employee table","sql dml","delete query","sql basics","data deletion","table data","sql interview","delete records","database query","sql examples","remove data","delete keyword","all records","delete rows"]
},

/*==================================
 TRUNCATE TABLE
==================================*/

{
id:98,
category:"SQL DDL",
subCategory:"TRUNCATE",
difficulty:"Beginner",
title:"TRUNCATE TABLE",
shortDescription:"Remove all rows quickly while keeping the table structure.",
syntax:`TRUNCATE TABLE Employees;`,
sql:`TRUNCATE TABLE Employees;`,
keywordId:"TRUNCATE",
sampleDataId:"Employees",
businessCaseId:"Clear Temporary Data",
optimizationId:"TRUNCATE",
errorId:"TRUNCATE",
interviewId:"TRUNCATE",
interviewQuestions:["<b>Q:</b> What does TRUNCATE do?<br><b>A:</b> Removes all rows quickly.","<b>Q:</b> Difference between DELETE and TRUNCATE?<br><b>A:</b> TRUNCATE is faster and cannot use WHERE."],
relatedTopics:["truncate","truncate table","clear table","remove all rows","sql truncate","database truncate","sql ddl","table cleanup","delete vs truncate","sql basics","truncate command","database query","sql interview","remove records","performance","sql examples","data cleanup","truncate keyword","table reset","database maintenance"]
},

/*==================================
 DROP TABLE
==================================*/

{
id:99,
category:"SQL DDL",
subCategory:"DROP",
difficulty:"Beginner",
title:"DROP TABLE",
shortDescription:"Delete a table permanently from the database.",
syntax:`DROP TABLE Employees;`,
sql:`DROP TABLE Employees;`,
keywordId:"DROP",
sampleDataId:"Employees",
businessCaseId:"Remove Obsolete Table",
optimizationId:"DROP",
errorId:"DROP",
interviewId:"DROP",
interviewQuestions:["<b>Q:</b> What does DROP TABLE do?<br><b>A:</b> Deletes the table permanently.","<b>Q:</b> Can dropped data be recovered easily?<br><b>A:</b> No."],
relatedTopics:["drop","drop table","delete table","remove table","sql drop","database ddl","table deletion","sql basics","database maintenance","drop command","sql interview","drop keyword","database query","table remove","sql examples","ddl command","drop database object","delete structure","drop object","table management"]
},

/*==================================
 CREATE TABLE
==================================*/

{
id:100,
category:"SQL DDL",
subCategory:"CREATE",
difficulty:"Beginner",
title:"CREATE TABLE",
shortDescription:"Create a new table in the database.",
syntax:`CREATE TABLE Employees(EmployeeID INT,EmployeeName VARCHAR(100));`,
sql:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,EmployeeName VARCHAR(100),Department VARCHAR(50),Salary DECIMAL(10,2));`,
keywordId:"CREATE_TABLE",
sampleDataId:"Employees",
businessCaseId:"Create Employee Master Table",
optimizationId:"CREATE_TABLE",
errorId:"CREATE_TABLE",
interviewId:"CREATE_TABLE",
interviewQuestions:["<b>Q:</b> What does CREATE TABLE do?<br><b>A:</b> Creates a new database table.","<b>Q:</b> Can constraints be added during CREATE TABLE?<br><b>A:</b> Yes."],
relatedTopics:["create table","create","new table","sql create","database ddl","employee table","table structure","sql basics","create command","database design","primary key","table creation","sql interview","database query","sql examples","ddl","table definition","create keyword","database object","table management"]
},

/*==================================
 ALTER TABLE
==================================*/

{
id:101,
category:"SQL DDL",
subCategory:"ALTER",
difficulty:"Beginner",
title:"ALTER TABLE",
shortDescription:"Modify the structure of an existing table.",
syntax:`ALTER TABLE Employees ADD Email VARCHAR(100);`,
sql:`ALTER TABLE Employees ADD Email VARCHAR(100);`,
keywordId:"ALTER_TABLE",
sampleDataId:"Employees",
businessCaseId:"Add Employee Email Column",
optimizationId:"ALTER_TABLE",
errorId:"ALTER_TABLE",
interviewId:"ALTER_TABLE",
interviewQuestions:["<b>Q:</b> What does ALTER TABLE do?<br><b>A:</b> Changes the structure of an existing table.","<b>Q:</b> Can ALTER remove columns?<br><b>A:</b> Yes."],
relatedTopics:["alter table","alter","modify table","add column","drop column","sql alter","database ddl","table structure","employee table","sql basics","alter command","database design","sql interview","database query","sql examples","ddl","modify column","table modification","alter keyword","database object"]
},

/*==================================
 RENAME TABLE
==================================*/

{
id:102,
category:"SQL DDL",
subCategory:"RENAME",
difficulty:"Beginner",
title:"RENAME TABLE",
shortDescription:"Change the name of an existing table.",
syntax:`ALTER TABLE Employees RENAME TO EmployeeMaster;`,
sql:`ALTER TABLE Employees RENAME TO EmployeeMaster;`,
keywordId:"RENAME_TABLE",
sampleDataId:"Employees",
businessCaseId:"Rename Existing Table",
optimizationId:"RENAME_TABLE",
errorId:"RENAME_TABLE",
interviewId:"RENAME_TABLE",
interviewQuestions:["<b>Q:</b> Why is RENAME TABLE used?<br><b>A:</b> To change a table name.","<b>Q:</b> Does renaming affect data?<br><b>A:</b> No."],
relatedTopics:["rename table","rename","change table name","sql rename","database ddl","table rename","sql basics","alter table rename","database object","sql interview","rename command","database query","sql examples","table management","rename keyword","ddl","database design","table structure","rename object","change name"]
},

/*==================================
 CREATE DATABASE
==================================*/

{
id:103,
category:"SQL DDL",
subCategory:"CREATE DATABASE",
difficulty:"Beginner",
title:"CREATE DATABASE",
shortDescription:"Create a new SQL database.",
syntax:`CREATE DATABASE CompanyDB;`,
sql:`CREATE DATABASE CompanyDB;`,
keywordId:"CREATE_DATABASE",
sampleDataId:"Employees",
businessCaseId:"Create Company Database",
optimizationId:"CREATE_DATABASE",
errorId:"CREATE_DATABASE",
interviewId:"CREATE_DATABASE",
interviewQuestions:["<b>Q:</b> What does CREATE DATABASE do?<br><b>A:</b> Creates a new database.","<b>Q:</b> Can tables exist before a database is created?<br><b>A:</b> No."],
relatedTopics:["create database","database","new database","sql database","create db","database creation","sql ddl","sql basics","database management","create command","sql interview","database object","sql examples","company database","ddl","database design","database administration","create keyword","db creation","database setup"]
},

/*==================================
 DROP DATABASE
==================================*/

{
id:104,
category:"SQL DDL",
subCategory:"DROP DATABASE",
difficulty:"Beginner",
title:"DROP DATABASE",
shortDescription:"Permanently delete an existing database.",
syntax:`DROP DATABASE CompanyDB;`,
sql:`DROP DATABASE CompanyDB;`,
keywordId:"DROP_DATABASE",
sampleDataId:"Employees",
businessCaseId:"Remove Test Database",
optimizationId:"DROP_DATABASE",
errorId:"DROP_DATABASE",
interviewId:"DROP_DATABASE",
interviewQuestions:["<b>Q:</b> What does DROP DATABASE do?<br><b>A:</b> Permanently removes a database.","<b>Q:</b> Can a dropped database be recovered easily?<br><b>A:</b> No, unless a backup exists."],
relatedTopics:["drop database","delete database","remove database","database management","sql ddl","drop db","database administration","sql basics","database object","drop command","sql interview","database delete","database maintenance","sql examples","ddl","database removal","drop keyword","company database","database cleanup","drop"]
},

/*==================================
 PRIMARY KEY
==================================*/

{
id:105,
category:"SQL Constraints",
subCategory:"PRIMARY KEY",
difficulty:"Beginner",
title:"PRIMARY KEY",
shortDescription:"Uniquely identifies each record in a table.",
syntax:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,EmployeeName VARCHAR(100));`,
sql:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,EmployeeName VARCHAR(100),Department VARCHAR(50));`,
keywordId:"PRIMARY_KEY",
sampleDataId:"Employees",
businessCaseId:"Unique Employee Identification",
optimizationId:"PRIMARY_KEY",
errorId:"PRIMARY_KEY",
interviewId:"PRIMARY_KEY",
interviewQuestions:["<b>Q:</b> What is a PRIMARY KEY?<br><b>A:</b> A unique identifier for each row.","<b>Q:</b> Can a PRIMARY KEY contain NULL values?<br><b>A:</b> No."],
relatedTopics:["primary key","pk","unique key","table key","employee id","database design","sql constraints","primary key constraint","sql basics","table structure","database key","sql interview","constraint","create table","sql examples","database management","unique identifier","key constraint","primary","table design"]
},

/*==================================
 FOREIGN KEY
==================================*/

{
id:106,
category:"SQL Constraints",
subCategory:"FOREIGN KEY",
difficulty:"Beginner",
title:"FOREIGN KEY",
shortDescription:"Create relationships between two tables.",
syntax:`ALTER TABLE Employees ADD CONSTRAINT FK_Department FOREIGN KEY(DepartmentID) REFERENCES Departments(DepartmentID);`,
sql:`ALTER TABLE Employees ADD CONSTRAINT FK_Department FOREIGN KEY(DepartmentID) REFERENCES Departments(DepartmentID);`,
keywordId:"FOREIGN_KEY",
sampleDataId:"Employees",
businessCaseId:"Employee Department Relationship",
optimizationId:"FOREIGN_KEY",
errorId:"FOREIGN_KEY",
interviewId:"FOREIGN_KEY",
interviewQuestions:["<b>Q:</b> What is a FOREIGN KEY?<br><b>A:</b> It links one table to another.","<b>Q:</b> Why use FOREIGN KEY?<br><b>A:</b> To maintain referential integrity."],
relatedTopics:["foreign key","fk","relationship","referential integrity","table relationship","department id","employee department","database design","sql constraints","foreign key constraint","sql basics","database key","sql interview","constraint","create table","sql examples","table relation","database management","foreign","key"]
},

/*==================================
 UNIQUE Constraint
==================================*/

{
id:107,
category:"SQL Constraints",
subCategory:"UNIQUE",
difficulty:"Beginner",
title:"UNIQUE Constraint",
shortDescription:"Ensure that all values in a column are unique.",
syntax:`CREATE TABLE Employees(EmployeeID INT,Email VARCHAR(100) UNIQUE);`,
sql:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,Email VARCHAR(100) UNIQUE);`,
keywordId:"UNIQUE",
sampleDataId:"Employees",
businessCaseId:"Unique Employee Email",
optimizationId:"UNIQUE",
errorId:"UNIQUE",
interviewId:"UNIQUE",
interviewQuestions:["<b>Q:</b> What is UNIQUE?<br><b>A:</b> Prevents duplicate values.","<b>Q:</b> Can UNIQUE contain NULL values?<br><b>A:</b> Yes, depending on the database."],
relatedTopics:["unique","unique constraint","duplicate values","email unique","database design","sql constraints","unique key","sql basics","constraint","table structure","database key","sql interview","create table","sql examples","unique column","database management","unique keyword","table design","unique index","data integrity"]
},

/*==================================
 NOT NULL Constraint
==================================*/

{
id:108,
category:"SQL Constraints",
subCategory:"NOT NULL",
difficulty:"Beginner",
title:"NOT NULL Constraint",
shortDescription:"Prevent NULL values in a column.",
syntax:`CREATE TABLE Employees(EmployeeName VARCHAR(100) NOT NULL);`,
sql:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,EmployeeName VARCHAR(100) NOT NULL);`,
keywordId:"NOT_NULL",
sampleDataId:"Employees",
businessCaseId:"Mandatory Employee Name",
optimizationId:"NOT_NULL",
errorId:"NOT_NULL",
interviewId:"NOT_NULL",
interviewQuestions:["<b>Q:</b> What is NOT NULL?<br><b>A:</b> Prevents NULL values.","<b>Q:</b> Why use NOT NULL?<br><b>A:</b> To ensure mandatory data entry."],
relatedTopics:["not null","mandatory field","required column","null values","database design","sql constraints","table structure","sql basics","constraint","employee table","database management","sql interview","create table","sql examples","mandatory data","not null constraint","data integrity","column constraint","database rules","required data"]
},

/*==================================
 DEFAULT Constraint
==================================*/

{
id:109,
category:"SQL Constraints",
subCategory:"DEFAULT",
difficulty:"Beginner",
title:"DEFAULT Constraint",
shortDescription:"Assign a default value when no value is provided.",
syntax:`CREATE TABLE Employees(Status VARCHAR(20) DEFAULT 'Active');`,
sql:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,Status VARCHAR(20) DEFAULT 'Active');`,
keywordId:"DEFAULT",
sampleDataId:"Employees",
businessCaseId:"Default Employee Status",
optimizationId:"DEFAULT",
errorId:"DEFAULT",
interviewId:"DEFAULT",
interviewQuestions:["<b>Q:</b> What is DEFAULT?<br><b>A:</b> Assigns a predefined value.","<b>Q:</b> When is DEFAULT applied?<br><b>A:</b> When no value is supplied during INSERT."],
relatedTopics:["default","default constraint","default value","employee status","database design","sql constraints","table structure","sql basics","constraint","insert","database management","sql interview","create table","sql examples","default keyword","column value","data integrity","database rules","automatic value","default data"]
},

/*==================================
 CHECK Constraint
==================================*/

{
id:110,
category:"SQL Constraints",
subCategory:"CHECK",
difficulty:"Intermediate",
title:"CHECK Constraint",
shortDescription:"Restrict values that can be inserted into a column.",
syntax:`CREATE TABLE Employees(Age INT CHECK(Age>=18));`,
sql:`CREATE TABLE Employees(EmployeeID INT PRIMARY KEY,Age INT CHECK(Age>=18));`,
keywordId:"CHECK",
sampleDataId:"Employees",
businessCaseId:"Minimum Employee Age Validation",
optimizationId:"CHECK",
errorId:"CHECK",
interviewId:"CHECK",
interviewQuestions:["<b>Q:</b> What is CHECK?<br><b>A:</b> Validates data before insertion.","<b>Q:</b> Why use CHECK constraints?<br><b>A:</b> To enforce business rules."],
relatedTopics:["check","check constraint","validation","age validation","business rules","database design","sql constraints","table structure","sql basics","constraint","data validation","sql interview","create table","sql examples","database rules","check keyword","column validation","employee age","data integrity","validation rule"]
},

/*==================================
 INDEX
==================================*/

{
id:111,
category:"SQL Performance",
subCategory:"INDEX",
difficulty:"Intermediate",
title:"INDEX",
shortDescription:"Improve query performance by creating indexes.",
syntax:`CREATE INDEX idx_salary ON Employees(Salary);`,
sql:`CREATE INDEX idx_department ON Employees(Department);`,
keywordId:"INDEX",
sampleDataId:"Employees",
businessCaseId:"Faster Employee Search",
optimizationId:"INDEX",
errorId:"INDEX",
interviewId:"INDEX",
interviewQuestions:["<b>Q:</b> What is an INDEX?<br><b>A:</b> It improves query performance.","<b>Q:</b> Does an INDEX speed up INSERT operations?<br><b>A:</b> No, excessive indexes may slow INSERT and UPDATE."],
relatedTopics:["index","create index","performance","query optimization","database index","sql performance","employee search","indexing","sql basics","database tuning","sql interview","clustered index","non clustered index","sql examples","optimization","search performance","index keyword","database performance","table index","query speed"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:112,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW",
shortDescription:"Create a virtual table based on an SQL query.",
syntax:`CREATE VIEW EmployeeView AS SELECT EmployeeID,EmployeeName,Department,Salary FROM Employees;`,
sql:`CREATE VIEW EmployeeView AS SELECT EmployeeID,EmployeeName,Department,Salary FROM Employees;`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Create Employee Reporting View",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b> What is a VIEW?<br><b>A:</b> A virtual table created from a SELECT query.","<b>Q:</b> Does a VIEW store data?<br><b>A:</b> No, it stores only the SQL definition."],
relatedTopics:["create view","view","virtual table","employee view","sql view","database view","create virtual table","sql basics","reporting","employee report","sql interview","view syntax","database object","sql examples","create keyword","select view","database design","view creation","query view","sql object"]
},

/*==================================
 SELECT From VIEW
==================================*/

{
id:113,
category:"SQL Views",
subCategory:"VIEW",
difficulty:"Beginner",
title:"SELECT From VIEW",
shortDescription:"Retrieve data from an existing SQL View.",
syntax:`SELECT * FROM EmployeeView;`,
sql:`SELECT EmployeeName,Department,Salary FROM EmployeeView;`,
keywordId:"VIEW_SELECT",
sampleDataId:"Employees",
businessCaseId:"Employee Reporting",
optimizationId:"VIEW_SELECT",
errorId:"VIEW_SELECT",
interviewId:"VIEW_SELECT",
interviewQuestions:["<b>Q:</b> How do you retrieve data from a VIEW?<br><b>A:</b> Use the SELECT statement.","<b>Q:</b> Is querying a VIEW similar to querying a table?<br><b>A:</b> Yes."],
relatedTopics:["view","select view","query view","employee view","virtual table","database view","sql view","reporting","sql basics","employee report","database query","sql interview","view example","select statement","query report","view keyword","sql examples","virtual table query","database object","view select"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:114,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW",
shortDescription:"Modify an existing SQL View.",
syntax:`ALTER VIEW EmployeeView AS SELECT EmployeeName,Department FROM Employees;`,
sql:`ALTER VIEW EmployeeView AS SELECT EmployeeID,EmployeeName,Department,Salary FROM Employees WHERE Salary>50000;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Modify Employee Report",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b> What does ALTER VIEW do?<br><b>A:</b> It changes an existing VIEW definition.","<b>Q:</b> Is data lost when ALTER VIEW is executed?<br><b>A:</b> No."],
relatedTopics:["alter view","modify view","update view","employee view","database view","sql view","virtual table","sql basics","reporting","database object","sql interview","view syntax","alter keyword","sql examples","view modification","query view","view definition","database design","sql object","alter"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:115,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW",
shortDescription:"Delete an existing SQL View.",
syntax:`DROP VIEW EmployeeView;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Old Reports",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b> What does DROP VIEW do?<br><b>A:</b> Deletes the VIEW definition.","<b>Q:</b> Does DROP VIEW delete the underlying table?<br><b>A:</b> No."],
relatedTopics:["drop view","delete view","remove view","database view","sql view","virtual table","database object","sql basics","drop keyword","sql interview","view syntax","reporting","drop command","sql examples","database management","view removal","query view","view object","sql object","drop"]
},

/*==================================
 Simple View
==================================*/

{
id:116,
category:"SQL Views",
subCategory:"Simple View",
difficulty:"Beginner",
title:"Simple View",
shortDescription:"Create a View using a single table.",
syntax:`CREATE VIEW EmployeeNames AS SELECT EmployeeID,EmployeeName FROM Employees;`,
sql:`CREATE VIEW EmployeeNames AS SELECT EmployeeID,EmployeeName FROM Employees;`,
keywordId:"SIMPLE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Employee Directory",
optimizationId:"SIMPLE_VIEW",
errorId:"SIMPLE_VIEW",
interviewId:"SIMPLE_VIEW",
interviewQuestions:["<b>Q:</b> What is a Simple View?<br><b>A:</b> A VIEW based on a single table.","<b>Q:</b> Is a Simple View easier to update?<br><b>A:</b> Yes."],
relatedTopics:["simple view","view","single table view","employee view","virtual table","database view","sql basics","reporting","sql interview","view example","database object","query view","simple sql","view keyword","sql examples","single table","view creation","employee report","database design","view syntax"]
},

/*==================================
 Complex View
==================================*/

{
id:117,
category:"SQL Views",
subCategory:"Complex View",
difficulty:"Intermediate",
title:"Complex View",
shortDescription:"Create a View using joins, functions or multiple tables.",
syntax:`CREATE VIEW EmployeeDepartmentView AS SELECT E.EmployeeName,D.DepartmentName FROM Employees E INNER JOIN Departments D ON E.DepartmentID=D.DepartmentID;`,
sql:`CREATE VIEW EmployeeDepartmentView AS SELECT E.EmployeeName,D.DepartmentName,E.Salary FROM Employees E INNER JOIN Departments D ON E.DepartmentID=D.DepartmentID;`,
keywordId:"COMPLEX_VIEW",
sampleDataId:"Employees",
businessCaseId:"Employee Department Dashboard",
optimizationId:"COMPLEX_VIEW",
errorId:"COMPLEX_VIEW",
interviewId:"COMPLEX_VIEW",
interviewQuestions:["<b>Q:</b> What is a Complex View?<br><b>A:</b> A VIEW created using multiple tables or functions.","<b>Q:</b> Can Complex Views contain JOINs?<br><b>A:</b> Yes."],
relatedTopics:["complex view","join view","multiple table view","employee department","database view","sql view","virtual table","sql basics","reporting","join","sql interview","view syntax","database object","sql examples","query view","view keyword","advanced view","dashboard","database design","complex sql"]
},

/*==================================
 Updatable View
==================================*/

{
id:118,
category:"SQL Views",
subCategory:"Updatable View",
difficulty:"Intermediate",
title:"Updatable View",
shortDescription:"A View that allows INSERT, UPDATE and DELETE operations.",
syntax:`CREATE VIEW EmployeeBasic AS SELECT EmployeeID,EmployeeName FROM Employees;`,
sql:`UPDATE EmployeeBasic SET EmployeeName='Rahul' WHERE EmployeeID=101;`,
keywordId:"UPDATABLE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Employee Maintenance Screen",
optimizationId:"UPDATABLE_VIEW",
errorId:"UPDATABLE_VIEW",
interviewId:"UPDATABLE_VIEW",
interviewQuestions:["<b>Q:</b> What is an Updatable View?<br><b>A:</b> A VIEW that supports DML operations.","<b>Q:</b> Are all Views updatable?<br><b>A:</b> No."],
relatedTopics:["updatable view","update view","editable view","sql view","database view","virtual table","employee maintenance","sql basics","view update","sql interview","view example","database object","sql examples","query view","view keyword","update","insert","delete","view design","dml view"]
},

/*==================================
 Read Only View
==================================*/

{
id:119,
category:"SQL Views",
subCategory:"Read Only View",
difficulty:"Intermediate",
title:"Read Only View",
shortDescription:"A View that allows only SELECT operations.",
syntax:`CREATE VIEW EmployeeReport AS SELECT EmployeeName,Salary FROM Employees WITH READ ONLY;`,
sql:`CREATE VIEW EmployeeReport AS SELECT EmployeeName,Department,Salary FROM Employees WITH READ ONLY;`,
keywordId:"READONLY_VIEW",
sampleDataId:"Employees",
businessCaseId:"Management Reports",
optimizationId:"READONLY_VIEW",
errorId:"READONLY_VIEW",
interviewId:"READONLY_VIEW",
interviewQuestions:["<b>Q:</b> What is a Read Only View?<br><b>A:</b> A VIEW that prevents data modification.","<b>Q:</b> Why use Read Only Views?<br><b>A:</b> To protect business data."],
relatedTopics:["read only view","readonly view","view","report view","management report","database view","sql view","virtual table","sql basics","security","sql interview","view syntax","database object","sql examples","reporting","view keyword","read only","view security","query view","database design"]
},

/*==================================
 Materialized View
==================================*/

{
id:120,
category:"SQL Views",
subCategory:"Materialized View",
difficulty:"Advanced",
title:"Materialized View",
shortDescription:"Store the query result physically for faster reporting.",
syntax:`CREATE MATERIALIZED VIEW EmployeeSummary AS SELECT Department,SUM(Salary) FROM Employees GROUP BY Department;`,
sql:`CREATE MATERIALIZED VIEW EmployeeSummary AS SELECT Department,SUM(Salary) AS TotalSalary FROM Employees GROUP BY Department;`,
keywordId:"MATERIALIZED_VIEW",
sampleDataId:"Employees",
businessCaseId:"High Performance Dashboard",
optimizationId:"MATERIALIZED_VIEW",
errorId:"MATERIALIZED_VIEW",
interviewId:"MATERIALIZED_VIEW",
interviewQuestions:["<b>Q:</b> What is a Materialized View?<br><b>A:</b> It stores query results physically.","<b>Q:</b> Why use Materialized Views?<br><b>A:</b> To improve reporting performance."],
relatedTopics:["materialized view","materialized","view","performance","dashboard","reporting","database view","sql advanced","summary report","aggregation","sql interview","database object","sql examples","query optimization","refresh view","analytics","view keyword","data warehouse","business intelligence","performance tuning"]
},

/*==================================
 Stored Procedure
==================================*/

{
id:121,
category:"SQL Stored Procedures",
subCategory:"Introduction",
difficulty:"Beginner",
title:"Stored Procedure",
shortDescription:"A stored procedure is a precompiled collection of SQL statements that can be executed repeatedly.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SELECT * FROM Employees;
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SELECT * FROM Employees;
END;`,
keywordId:"STORED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Reusable Employee Reports",
optimizationId:"STORED_PROCEDURE",
errorId:"STORED_PROCEDURE",
interviewId:"STORED_PROCEDURE",
interviewQuestions:["<b>Q:</b> What is a Stored Procedure?<br><b>A:</b> A reusable set of SQL statements stored inside the database.","<b>Q:</b> Why use Stored Procedures?<br><b>A:</b> They improve security, performance and code reusability."],
relatedTopics:["stored procedure","procedure","sql procedure","database procedure","stored proc","precompiled query","sql server procedure","reusable sql","database programming","sql basics","sql interview","employee procedure","execute procedure","create procedure","database object","stored procedure example","business logic","sql examples","procedure keyword","sql programming"]
},

/*==================================
 CREATE PROCEDURE
==================================*/

{
id:122,
category:"SQL Stored Procedures",
subCategory:"CREATE PROCEDURE",
difficulty:"Beginner",
title:"CREATE PROCEDURE",
shortDescription:"Create a new stored procedure in the database.",
syntax:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SELECT * FROM Employees;
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SELECT EmployeeID,EmployeeName,Department,Salary
FROM Employees;
END;`,
keywordId:"CREATE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Employee Reporting Procedure",
optimizationId:"CREATE_PROCEDURE",
errorId:"CREATE_PROCEDURE",
interviewId:"CREATE_PROCEDURE",
interviewQuestions:["<b>Q:</b> Which statement creates a Stored Procedure?<br><b>A:</b> CREATE PROCEDURE.","<b>Q:</b> Can a procedure contain multiple SQL statements?<br><b>A:</b> Yes."],
relatedTopics:["create procedure","stored procedure","procedure","sql procedure","database procedure","create proc","sql server","employee report","sql programming","sql interview","database object","stored procedure example","business logic","procedure syntax","sql examples","procedure keyword","database programming","create stored procedure","sql server procedure","procedure creation"]
},

/*==================================
 EXEC Procedure
==================================*/

{
id:123,
category:"SQL Stored Procedures",
subCategory:"EXEC",
difficulty:"Beginner",
title:"EXEC Procedure",
shortDescription:"Execute a stored procedure.",
syntax:`EXEC GetEmployees;`,
sql:`EXEC GetEmployees;`,
keywordId:"EXEC",
sampleDataId:"Employees",
businessCaseId:"Run Employee Report",
optimizationId:"EXEC",
errorId:"EXEC",
interviewId:"EXEC",
interviewQuestions:["<b>Q:</b> Which command executes a Stored Procedure?<br><b>A:</b> EXEC or EXECUTE.","<b>Q:</b> Can EXEC run procedures with parameters?<br><b>A:</b> Yes."],
relatedTopics:["exec","execute procedure","run procedure","stored procedure","sql exec","database procedure","procedure execution","sql basics","sql interview","execute","stored proc","employee report","procedure keyword","database object","sql examples","sql server","run sql","business logic","exec keyword","procedure"]
},

/*==================================
 ALTER PROCEDURE
==================================*/

{
id:124,
category:"SQL Stored Procedures",
subCategory:"ALTER PROCEDURE",
difficulty:"Intermediate",
title:"ALTER PROCEDURE",
shortDescription:"Modify an existing stored procedure.",
syntax:`ALTER PROCEDURE GetEmployees
AS
BEGIN
SELECT EmployeeName,Salary FROM Employees;
END;`,
sql:`ALTER PROCEDURE GetEmployees
AS
BEGIN
SELECT EmployeeID,EmployeeName,Department,Salary
FROM Employees;
END;`,
keywordId:"ALTER_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Modify Existing Reports",
optimizationId:"ALTER_PROCEDURE",
errorId:"ALTER_PROCEDURE",
interviewId:"ALTER_PROCEDURE",
interviewQuestions:["<b>Q:</b> What does ALTER PROCEDURE do?<br><b>A:</b> Modifies an existing Stored Procedure.","<b>Q:</b> Is the procedure recreated?<br><b>A:</b> No, it is modified."],
relatedTopics:["alter procedure","modify procedure","stored procedure","sql procedure","database procedure","procedure update","sql server","procedure syntax","sql interview","business logic","database object","stored procedure example","sql examples","procedure keyword","database programming","procedure modification","sql programming","alter proc","stored proc","alter"]
},

/*==================================
 DROP PROCEDURE
==================================*/

{
id:125,
category:"SQL Stored Procedures",
subCategory:"DROP PROCEDURE",
difficulty:"Beginner",
title:"DROP PROCEDURE",
shortDescription:"Delete an existing stored procedure from the database.",
syntax:`DROP PROCEDURE GetEmployees;`,
sql:`DROP PROCEDURE GetEmployees;`,
keywordId:"DROP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Remove Obsolete Procedure",
optimizationId:"DROP_PROCEDURE",
errorId:"DROP_PROCEDURE",
interviewId:"DROP_PROCEDURE",
interviewQuestions:["<b>Q:</b> What does DROP PROCEDURE do?<br><b>A:</b> Permanently removes a Stored Procedure.","<b>Q:</b> Does DROP PROCEDURE delete any table data?<br><b>A:</b> No."],
relatedTopics:["drop procedure","delete procedure","stored procedure","procedure removal","sql procedure","database procedure","sql server","database object","sql interview","procedure keyword","stored proc","sql examples","drop proc","database programming","procedure management","business logic","sql programming","remove procedure","procedure delete","drop"]
},

/*==================================
 Procedure with Parameters
==================================*/

{
id:126,
category:"SQL Stored Procedures",
subCategory:"Parameters",
difficulty:"Beginner",
title:"Procedure with Parameters",
shortDescription:"Pass input values to a stored procedure.",
syntax:`CREATE PROCEDURE GetEmployeeByID
@EmployeeID INT
AS
BEGIN
SELECT * FROM Employees WHERE EmployeeID=@EmployeeID;
END;`,
sql:`CREATE PROCEDURE GetEmployeeByID
@EmployeeID INT
AS
BEGIN
SELECT EmployeeID,EmployeeName,Department,Salary
FROM Employees
WHERE EmployeeID=@EmployeeID;
END;`,
keywordId:"PROCEDURE_PARAMETERS",
sampleDataId:"Employees",
businessCaseId:"Search Employee by ID",
optimizationId:"PROCEDURE_PARAMETERS",
errorId:"PROCEDURE_PARAMETERS",
interviewId:"PROCEDURE_PARAMETERS",
interviewQuestions:["<b>Q:</b> Why are parameters used in Stored Procedures?<br><b>A:</b> To pass dynamic values during execution.","<b>Q:</b> Can a procedure have multiple parameters?<br><b>A:</b> Yes."],
relatedTopics:["procedure parameters","input parameter","stored procedure","employee id","sql procedure","sql server","database programming","dynamic query","sql interview","procedure example","execute procedure","stored proc","business logic","parameterized procedure","sql examples","procedure keyword","database object","sql programming","parameter","procedure input"]
},

/*==================================
 Execute Procedure with Parameter
==================================*/

{
id:127,
category:"SQL Stored Procedures",
subCategory:"EXEC",
difficulty:"Beginner",
title:"Execute Procedure with Parameter",
shortDescription:"Execute a stored procedure by passing parameter values.",
syntax:`EXEC GetEmployeeByID 101;`,
sql:`EXEC GetEmployeeByID @EmployeeID=101;`,
keywordId:"EXEC_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Employee Lookup",
optimizationId:"EXEC_PARAMETER",
errorId:"EXEC_PARAMETER",
interviewId:"EXEC_PARAMETER",
interviewQuestions:["<b>Q:</b>How do you execute a procedure with parameters?<br><b>A:</b>Use EXEC and pass parameter values.","<b>Q:</b>Can named parameters be used?<br><b>A:</b>Yes."],
relatedTopics:["exec parameter","execute procedure","stored procedure","procedure parameter","employee search","sql server","database programming","sql interview","procedure execution","exec keyword","stored proc","parameter","sql examples","business logic","procedure syntax","dynamic execution","database object","sql programming","run procedure","procedure"]
},

/*==================================
 Output Parameters
==================================*/

{
id:128,
category:"SQL Stored Procedures",
subCategory:"Output Parameters",
difficulty:"Intermediate",
title:"Output Parameters",
shortDescription:"Return values from a stored procedure using OUTPUT parameters.",
syntax:`CREATE PROCEDURE GetEmployeeCount
@Total INT OUTPUT
AS
BEGIN
SELECT @Total=COUNT(*) FROM Employees;
END;`,
sql:`CREATE PROCEDURE GetEmployeeCount
@TotalEmployees INT OUTPUT
AS
BEGIN
SELECT @TotalEmployees=COUNT(*) FROM Employees;
END;`,
keywordId:"OUTPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Employee Count Report",
optimizationId:"OUTPUT_PARAMETER",
errorId:"OUTPUT_PARAMETER",
interviewId:"OUTPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is an OUTPUT parameter?<br><b>A:</b>It returns a value from a stored procedure.","<b>Q:</b>Can a procedure return multiple OUTPUT parameters?<br><b>A:</b>Yes."],
relatedTopics:["output parameter","stored procedure","procedure output","sql server","database programming","employee count","output value","sql interview","stored proc","parameter","procedure example","sql examples","database object","business logic","procedure keyword","sql programming","output variable","procedure return","dynamic values","output"]
},

/*==================================
 RETURN Statement
==================================*/

{
id:129,
category:"SQL Stored Procedures",
subCategory:"RETURN",
difficulty:"Intermediate",
title:"RETURN Statement",
shortDescription:"Return an integer value from a stored procedure.",
syntax:`RETURN 0;`,
sql:`CREATE PROCEDURE ValidateEmployee
AS
BEGIN
RETURN 1;
END;`,
keywordId:"RETURN",
sampleDataId:"Employees",
businessCaseId:"Procedure Status Validation",
optimizationId:"RETURN",
errorId:"RETURN",
interviewId:"RETURN",
interviewQuestions:["<b>Q:</b>What does RETURN do?<br><b>A:</b>Returns an integer status code.","<b>Q:</b>Is RETURN different from OUTPUT parameters?<br><b>A:</b>Yes."],
relatedTopics:["return","return statement","stored procedure","procedure return","status code","sql server","database programming","sql interview","stored proc","procedure keyword","sql examples","business logic","procedure example","database object","return value","sql programming","return code","procedure status","procedure output","return keyword"]
},

/*==================================
 IF ELSE in Procedure
==================================*/

{
id:130,
category:"SQL Stored Procedures",
subCategory:"IF ELSE",
difficulty:"Intermediate",
title:"IF ELSE in Procedure",
shortDescription:"Use conditional logic inside stored procedures.",
syntax:`IF @Salary>50000
PRINT 'High Salary'
ELSE
PRINT 'Normal Salary';`,
sql:`CREATE PROCEDURE CheckSalary
@Salary DECIMAL(10,2)
AS
BEGIN
IF @Salary>=50000
PRINT 'High Salary'
ELSE
PRINT 'Normal Salary'
END;`,
keywordId:"PROCEDURE_IF",
sampleDataId:"Employees",
businessCaseId:"Salary Classification",
optimizationId:"PROCEDURE_IF",
errorId:"PROCEDURE_IF",
interviewId:"PROCEDURE_IF",
interviewQuestions:["<b>Q:</b>Can IF ELSE be used inside Stored Procedures?<br><b>A:</b>Yes.","<b>Q:</b>Why use IF ELSE?<br><b>A:</b>To implement business rules."],
relatedTopics:["if else","procedure if","stored procedure","conditional logic","business rules","sql server","database programming","salary validation","sql interview","stored proc","procedure keyword","sql examples","decision making","if statement","procedure example","database object","logic","condition","sql programming","if keyword"]
},

/*==================================
 WHILE Loop in Procedure
==================================*/

{
id:131,
category:"SQL Stored Procedures",
subCategory:"WHILE",
difficulty:"Intermediate",
title:"WHILE Loop in Procedure",
shortDescription:"Execute a block of code repeatedly while a condition is true.",
syntax:`WHILE @Counter<=10
BEGIN
SET @Counter=@Counter+1;
END;`,
sql:`CREATE PROCEDURE PrintNumbers
AS
BEGIN
DECLARE @Counter INT=1;
WHILE @Counter<=10
BEGIN
PRINT @Counter;
SET @Counter=@Counter+1;
END
END;`,
keywordId:"WHILE_LOOP",
sampleDataId:"Employees",
businessCaseId:"Batch Data Processing",
optimizationId:"WHILE_LOOP",
errorId:"WHILE_LOOP",
interviewId:"WHILE_LOOP",
interviewQuestions:["<b>Q:</b>What is a WHILE loop?<br><b>A:</b>It repeatedly executes SQL statements while a condition is true.","<b>Q:</b>When should WHILE loops be avoided?<br><b>A:</b>For large datasets where set-based queries are more efficient."],
relatedTopics:["while loop","while","loop","stored procedure","sql while","iteration","batch processing","sql server","database programming","sql interview","loop example","stored proc","business logic","sql examples","procedure keyword","counter","loop statement","sql programming","while keyword","repetition"]
},

/*==================================
 TRY CATCH
==================================*/

{
id:132,
category:"SQL Stored Procedures",
subCategory:"TRY CATCH",
difficulty:"Intermediate",
title:"TRY CATCH",
shortDescription:"Handle SQL errors using TRY...CATCH blocks.",
syntax:`BEGIN TRY
SELECT * FROM Employees;
END TRY
BEGIN CATCH
PRINT ERROR_MESSAGE();
END CATCH;`,
sql:`BEGIN TRY
SELECT EmployeeName FROM Employees;
END TRY
BEGIN CATCH
PRINT ERROR_MESSAGE();
END CATCH;`,
keywordId:"TRY_CATCH",
sampleDataId:"Employees",
businessCaseId:"Database Error Handling",
optimizationId:"TRY_CATCH",
errorId:"TRY_CATCH",
interviewId:"TRY_CATCH",
interviewQuestions:["<b>Q:</b>What is TRY...CATCH?<br><b>A:</b>It handles runtime SQL errors.","<b>Q:</b>Which function returns the error message?<br><b>A:</b>ERROR_MESSAGE()."],
relatedTopics:["try catch","error handling","exception","sql error","stored procedure","sql server","database programming","sql interview","error message","try","catch","sql examples","business logic","procedure","error handling sql","runtime error","sql programming","exception handling","try catch block","error"]
},

/*==================================
 Transaction in Procedure
==================================*/

{
id:133,
category:"SQL Stored Procedures",
subCategory:"Transaction",
difficulty:"Intermediate",
title:"Transaction in Procedure",
shortDescription:"Execute multiple SQL statements as a single transaction.",
syntax:`BEGIN TRANSACTION
COMMIT TRANSACTION;`,
sql:`BEGIN TRANSACTION
UPDATE Employees SET Salary=Salary+5000 WHERE EmployeeID=101;
COMMIT TRANSACTION;`,
keywordId:"PROCEDURE_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Salary Processing",
optimizationId:"PROCEDURE_TRANSACTION",
errorId:"PROCEDURE_TRANSACTION",
interviewId:"PROCEDURE_TRANSACTION",
interviewQuestions:["<b>Q:</b>Why use transactions inside procedures?<br><b>A:</b>To maintain data consistency.","<b>Q:</b>Which commands complete a transaction?<br><b>A:</b>COMMIT or ROLLBACK."],
relatedTopics:["transaction","procedure transaction","commit","rollback","stored procedure","sql transaction","database consistency","sql server","sql interview","business logic","database programming","transaction management","sql examples","atomicity","data integrity","procedure keyword","transaction block","sql programming","commit transaction","rollback transaction"]
},

/*==================================
 Dynamic SQL
==================================*/

{
id:134,
category:"SQL Stored Procedures",
subCategory:"Dynamic SQL",
difficulty:"Advanced",
title:"Dynamic SQL",
shortDescription:"Execute SQL statements created at runtime.",
syntax:`EXEC sp_executesql @SQL;`,
sql:`DECLARE @SQL NVARCHAR(MAX);
SET @SQL='SELECT * FROM Employees';
EXEC sp_executesql @SQL;`,
keywordId:"DYNAMIC_SQL",
sampleDataId:"Employees",
businessCaseId:"Dynamic Search Reports",
optimizationId:"DYNAMIC_SQL",
errorId:"DYNAMIC_SQL",
interviewId:"DYNAMIC_SQL",
interviewQuestions:["<b>Q:</b>What is Dynamic SQL?<br><b>A:</b>SQL generated and executed at runtime.","<b>Q:</b>Which command executes Dynamic SQL?<br><b>A:</b>sp_executesql."],
relatedTopics:["dynamic sql","sp_executesql","runtime sql","dynamic query","stored procedure","sql server","database programming","sql interview","dynamic execution","sql examples","parameterized query","business logic","sql programming","dynamic procedure","query generation","database object","dynamic statement","dynamic keyword","procedure","sql"]
},

/*==================================
 Temporary Table
==================================*/

{
id:135,
category:"SQL Stored Procedures",
subCategory:"Temporary Table",
difficulty:"Intermediate",
title:"Temporary Table",
shortDescription:"Store temporary data inside a procedure.",
syntax:`CREATE TABLE #TempEmployees(EmployeeID INT,EmployeeName VARCHAR(100));`,
sql:`CREATE TABLE #TempEmployees(EmployeeID INT,EmployeeName VARCHAR(100));
INSERT INTO #TempEmployees SELECT EmployeeID,EmployeeName FROM Employees;
SELECT * FROM #TempEmployees;`,
keywordId:"TEMP_TABLE",
sampleDataId:"Employees",
businessCaseId:"Temporary Report Generation",
optimizationId:"TEMP_TABLE",
errorId:"TEMP_TABLE",
interviewId:"TEMP_TABLE",
interviewQuestions:["<b>Q:</b>What is a Temporary Table?<br><b>A:</b>A table that exists only during the session.","<b>Q:</b>How is a temporary table identified?<br><b>A:</b>By the # symbol."],
relatedTopics:["temporary table","temp table","#table","temporary data","stored procedure","sql server","database programming","sql interview","temporary storage","sql examples","business logic","temp table example","procedure","session table","sql programming","database object","temporary keyword","local temp table","sql temp","temp"]
},

/*==================================
 Table Variable
==================================*/

{
id:136,
category:"SQL Stored Procedures",
subCategory:"Table Variable",
difficulty:"Intermediate",
title:"Table Variable",
shortDescription:"Store multiple rows using a table variable.",
syntax:`DECLARE @Employees TABLE(EmployeeID INT,EmployeeName VARCHAR(100));`,
sql:`DECLARE @Employees TABLE(EmployeeID INT,EmployeeName VARCHAR(100));
INSERT INTO @Employees
SELECT EmployeeID,EmployeeName FROM Employees;
SELECT * FROM @Employees;`,
keywordId:"TABLE_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Small Data Processing",
optimizationId:"TABLE_VARIABLE",
errorId:"TABLE_VARIABLE",
interviewId:"TABLE_VARIABLE",
interviewQuestions:["<b>Q:</b>What is a Table Variable?<br><b>A:</b>A variable capable of storing multiple rows.","<b>Q:</b>When is a Table Variable preferred?<br><b>A:</b>For small datasets."],
relatedTopics:["table variable","table variable sql","declare table","stored procedure","sql server","database programming","sql interview","table type","temporary storage","sql examples","business logic","procedure","table variable example","sql programming","memory table","variable table","database object","table keyword","temporary variable","table"]
},

/*==================================
 CURSOR
==================================*/

{
id:137,
category:"SQL Stored Procedures",
subCategory:"CURSOR",
difficulty:"Advanced",
title:"CURSOR",
shortDescription:"Process query results one row at a time.",
syntax:`DECLARE EmployeeCursor CURSOR FOR
SELECT EmployeeName FROM Employees;`,
sql:`DECLARE EmployeeCursor CURSOR FOR
SELECT EmployeeName FROM Employees;
OPEN EmployeeCursor;
CLOSE EmployeeCursor;
DEALLOCATE EmployeeCursor;`,
keywordId:"CURSOR",
sampleDataId:"Employees",
businessCaseId:"Row by Row Processing",
optimizationId:"CURSOR",
errorId:"CURSOR",
interviewId:"CURSOR",
interviewQuestions:["<b>Q:</b>What is a CURSOR?<br><b>A:</b>Processes one row at a time.","<b>Q:</b>Why should CURSOR be used carefully?<br><b>A:</b>Because it is slower than set-based operations."],
relatedTopics:["cursor","sql cursor","row by row","stored procedure","sql server","database programming","sql interview","cursor example","loop","business logic","sql examples","procedure","cursor keyword","database object","data processing","cursor declaration","sql programming","fetch cursor","open cursor","close cursor"]
},

/*==================================
 Recursive Procedure
==================================*/

{
id:138,
category:"SQL Stored Procedures",
subCategory:"Recursive Procedure",
difficulty:"Advanced",
title:"Recursive Procedure",
shortDescription:"A procedure that calls itself until a condition is met.",
syntax:`EXEC RecursiveProcedure;`,
sql:`CREATE PROCEDURE RecursiveProcedure
@Count INT
AS
BEGIN
IF @Count>0
EXEC RecursiveProcedure @Count-1;
END;`,
keywordId:"RECURSIVE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Hierarchy Processing",
optimizationId:"RECURSIVE_PROCEDURE",
errorId:"RECURSIVE_PROCEDURE",
interviewId:"RECURSIVE_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is a Recursive Procedure?<br><b>A:</b>A procedure that calls itself.","<b>Q:</b>What is required to stop recursion?<br><b>A:</b>A termination condition."],
relatedTopics:["recursive procedure","recursion","stored procedure","recursive sql","hierarchy","sql server","database programming","sql interview","procedure recursion","sql examples","business logic","procedure","recursive call","database object","sql programming","recursion example","loop","recursive keyword","procedure example","recursive"]
},

/*==================================
 Encrypted Procedure
==================================*/

{
id:139,
category:"SQL Stored Procedures",
subCategory:"Encryption",
difficulty:"Advanced",
title:"Encrypted Procedure",
shortDescription:"Hide the source code of a stored procedure.",
syntax:`CREATE PROCEDURE GetEmployees
WITH ENCRYPTION
AS
SELECT * FROM Employees;`,
sql:`CREATE PROCEDURE GetEmployees
WITH ENCRYPTION
AS
SELECT EmployeeName,Salary FROM Employees;`,
keywordId:"ENCRYPTED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Protect Business Logic",
optimizationId:"ENCRYPTED_PROCEDURE",
errorId:"ENCRYPTED_PROCEDURE",
interviewId:"ENCRYPTED_PROCEDURE",
interviewQuestions:["<b>Q:</b>Why use WITH ENCRYPTION?<br><b>A:</b>To hide procedure source code.","<b>Q:</b>Does encryption improve performance?<br><b>A:</b>No."],
relatedTopics:["encrypted procedure","with encryption","stored procedure","procedure security","sql server","database programming","sql interview","procedure protection","business logic","sql examples","database object","procedure keyword","sql programming","encryption","secure procedure","source code","procedure example","encrypted","database security","procedure encryption"]
},

/*==================================
 Procedure Best Practices
==================================*/

{
id:140,
category:"SQL Stored Procedures",
subCategory:"Best Practices",
difficulty:"Intermediate",
title:"Procedure Best Practices",
shortDescription:"Guidelines for writing efficient and maintainable stored procedures.",
syntax:`-- Use parameters, transactions and proper error handling.`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SET NOCOUNT ON;
SELECT EmployeeID,EmployeeName FROM Employees;
END;`,
keywordId:"PROCEDURE_BEST_PRACTICES",
sampleDataId:"Employees",
businessCaseId:"Enterprise SQL Development",
optimizationId:"PROCEDURE_BEST_PRACTICES",
errorId:"PROCEDURE_BEST_PRACTICES",
interviewId:"PROCEDURE_BEST_PRACTICES",
interviewQuestions:["<b>Q:</b>Name two Stored Procedure best practices.<br><b>A:</b>Use parameters and proper error handling.","<b>Q:</b>Why use SET NOCOUNT ON?<br><b>A:</b>To improve performance by suppressing row count messages."],
relatedTopics:["procedure best practices","best practices","stored procedure","sql procedure","sql server","database programming","sql interview","performance","error handling","set nocount","business logic","sql examples","procedure optimization","database object","coding standards","maintainability","sql programming","enterprise sql","optimization","procedure guideline"]
},

/*==================================
 Scalar Function
==================================*/

{
id:141,
category:"SQL Functions",
subCategory:"Scalar Function",
difficulty:"Beginner",
title:"Scalar Function",
shortDescription:"A scalar function returns a single value for each input.",
syntax:`SELECT UPPER(EmployeeName) FROM Employees;`,
sql:`SELECT EmployeeName,UPPER(EmployeeName) AS EmployeeNameUpper FROM Employees;`,
keywordId:"SCALAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Standardize Employee Names",
optimizationId:"SCALAR_FUNCTION",
errorId:"SCALAR_FUNCTION",
interviewId:"SCALAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What is a Scalar Function?<br><b>A:</b>A function that returns a single value.","<b>Q:</b>Give an example of a scalar function.<br><b>A:</b>UPPER(), LOWER(), LEN()."],
relatedTopics:["scalar function","function","upper","lower","len","single value","sql function","built in function","database function","sql basics","employee name","sql interview","string function","sql examples","function keyword","database programming","single result","sql programming","scalar","functions"]
},

/*==================================
 User Defined Function (UDF)
==================================*/

{
id:142,
category:"SQL Functions",
subCategory:"User Defined Function",
difficulty:"Intermediate",
title:"User Defined Function (UDF)",
shortDescription:"Create your own reusable SQL function.",
syntax:`CREATE FUNCTION dbo.GetBonus(@Salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
RETURN @Salary*0.10;
END;`,
sql:`CREATE FUNCTION dbo.GetBonus(@Salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
RETURN @Salary*0.10;
END;`,
keywordId:"USER_DEFINED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Bonus Calculation",
optimizationId:"USER_DEFINED_FUNCTION",
errorId:"USER_DEFINED_FUNCTION",
interviewId:"USER_DEFINED_FUNCTION",
interviewQuestions:["<b>Q:</b>What is a User Defined Function?<br><b>A:</b>A custom function created by the developer.","<b>Q:</b>Why use UDFs?<br><b>A:</b>To reuse business logic."],
relatedTopics:["user defined function","udf","custom function","sql function","database function","bonus calculation","sql server","database programming","sql interview","function example","sql examples","business logic","function keyword","database object","sql programming","custom sql","user function","scalar udf","function creation","udf keyword"]
},

/*==================================
 Table Valued Function
==================================*/

{
id:143,
category:"SQL Functions",
subCategory:"Table Valued Function",
difficulty:"Intermediate",
title:"Table Valued Function",
shortDescription:"Return an entire table instead of a single value.",
syntax:`SELECT * FROM dbo.GetEmployees();`,
sql:`CREATE FUNCTION dbo.GetEmployees()
RETURNS TABLE
AS
RETURN
(
SELECT EmployeeID,EmployeeName,Department FROM Employees
);`,
keywordId:"TABLE_VALUED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Employee Dataset",
optimizationId:"TABLE_VALUED_FUNCTION",
errorId:"TABLE_VALUED_FUNCTION",
interviewId:"TABLE_VALUED_FUNCTION",
interviewQuestions:["<b>Q:</b>What is a Table Valued Function?<br><b>A:</b>A function that returns a table.","<b>Q:</b>How is it queried?<br><b>A:</b>Using SELECT."],
relatedTopics:["table valued function","tvf","table function","sql function","database function","sql server","employee function","table result","sql interview","database programming","function example","sql examples","business logic","database object","sql programming","table function example","tvf keyword","function keyword","return table","function"]
},

/*==================================
 Aggregate Functions
==================================*/

{
id:144,
category:"SQL Functions",
subCategory:"Aggregate Functions",
difficulty:"Beginner",
title:"Aggregate Functions",
shortDescription:"Perform calculations on multiple rows and return one value.",
syntax:`SELECT COUNT(*),SUM(Salary),AVG(Salary) FROM Employees;`,
sql:`SELECT COUNT(*) AS TotalEmployees,SUM(Salary) AS TotalSalary,AVG(Salary) AS AverageSalary FROM Employees;`,
keywordId:"AGGREGATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Salary Summary Report",
optimizationId:"AGGREGATE_FUNCTION",
errorId:"AGGREGATE_FUNCTION",
interviewId:"AGGREGATE_FUNCTION",
interviewQuestions:["<b>Q:</b>Name common Aggregate Functions.<br><b>A:</b>COUNT(), SUM(), AVG(), MIN(), MAX().","<b>Q:</b>How many values do Aggregate Functions return?<br><b>A:</b>One value per group."],
relatedTopics:["aggregate function","count","sum","avg","min","max","group function","sql function","database function","salary summary","sql basics","sql interview","aggregation","sql examples","function keyword","database programming","statistics","aggregate","reporting","functions"]
},

/*==================================
 String Functions
==================================*/

{
id:145,
category:"SQL Functions",
subCategory:"String Functions",
difficulty:"Beginner",
title:"String Functions",
shortDescription:"Manipulate and format text values.",
syntax:`SELECT UPPER(EmployeeName),LOWER(EmployeeName),LEN(EmployeeName) FROM Employees;`,
sql:`SELECT EmployeeName,UPPER(EmployeeName) AS UpperName,LOWER(EmployeeName) AS LowerName,LEN(EmployeeName) AS NameLength FROM Employees;`,
keywordId:"STRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Name Formatting",
optimizationId:"STRING_FUNCTION",
errorId:"STRING_FUNCTION",
interviewId:"STRING_FUNCTION",
interviewQuestions:["<b>Q:</b>Name common String Functions.<br><b>A:</b>UPPER(), LOWER(), LEN(), LEFT(), RIGHT().","<b>Q:</b>Why are String Functions used?<br><b>A:</b>To manipulate text data."],
relatedTopics:["string function","upper","lower","left","right","len","text function","sql function","employee name","database function","sql basics","sql interview","text formatting","sql examples","function keyword","database programming","character function","string manipulation","functions","sql programming"]
},

/*==================================
 Numeric Functions
==================================*/

{
id:146,
category:"SQL Functions",
subCategory:"Numeric Functions",
difficulty:"Beginner",
title:"Numeric Functions",
shortDescription:"Perform mathematical calculations on numeric values.",
syntax:`SELECT ROUND(Salary,0),ABS(-100),CEILING(10.5);`,
sql:`SELECT Salary,ROUND(Salary,0) AS RoundedSalary,ABS(-100) AS AbsoluteValue,CEILING(10.5) AS CeilingValue FROM Employees;`,
keywordId:"NUMERIC_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Financial Calculations",
optimizationId:"NUMERIC_FUNCTION",
errorId:"NUMERIC_FUNCTION",
interviewId:"NUMERIC_FUNCTION",
interviewQuestions:["<b>Q:</b>Name common Numeric Functions.<br><b>A:</b>ROUND(), ABS(), CEILING(), FLOOR().","<b>Q:</b>Why use Numeric Functions?<br><b>A:</b>To perform mathematical calculations."],
relatedTopics:["numeric function","round","abs","ceiling","floor","math function","sql function","salary calculation","database function","sql basics","sql interview","financial calculation","sql examples","function keyword","database programming","mathematical function","number function","functions","sql programming","numeric"]
},

/*==================================
 Date Functions
==================================*/

{
id:147,
category:"SQL Functions",
subCategory:"Date Functions",
difficulty:"Beginner",
title:"Date Functions",
shortDescription:"Work with dates and time values.",
syntax:`SELECT GETDATE(),YEAR(GETDATE()),MONTH(GETDATE());`,
sql:`SELECT EmployeeName,JoiningDate,DATEDIFF(YEAR,JoiningDate,GETDATE()) AS Experience FROM Employees;`,
keywordId:"DATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Experience Report",
optimizationId:"DATE_FUNCTION",
errorId:"DATE_FUNCTION",
interviewId:"DATE_FUNCTION",
interviewQuestions:["<b>Q:</b>Name common Date Functions.<br><b>A:</b>GETDATE(), DATEADD(), DATEDIFF(), YEAR().","<b>Q:</b>Why use Date Functions?<br><b>A:</b>To manipulate date and time values."],
relatedTopics:["date function","getdate","datediff","dateadd","year","month","day","joining date","sql function","database function","sql basics","sql interview","date calculation","sql examples","function keyword","database programming","calendar","time function","functions","sql programming"]
},

/*==================================
 Conversion Functions
==================================*/

{
id:148,
category:"SQL Functions",
subCategory:"Conversion Functions",
difficulty:"Intermediate",
title:"Conversion Functions",
shortDescription:"Convert data from one data type to another.",
syntax:`SELECT CAST(Salary AS INT),CONVERT(VARCHAR,GETDATE(),103);`,
sql:`SELECT EmployeeName,CAST(Salary AS INT) AS SalaryInt,CONVERT(VARCHAR,JoiningDate,103) AS JoiningDateFormatted FROM Employees;`,
keywordId:"CONVERSION_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Data Type Conversion",
optimizationId:"CONVERSION_FUNCTION",
errorId:"CONVERSION_FUNCTION",
interviewId:"CONVERSION_FUNCTION",
interviewQuestions:["<b>Q:</b>Which functions convert data types?<br><b>A:</b>CAST() and CONVERT().","<b>Q:</b>Why use Conversion Functions?<br><b>A:</b>To change data formats."],
relatedTopics:["conversion function","cast","convert","datatype conversion","sql function","database function","sql basics","sql interview","data conversion","sql examples","function keyword","database programming","cast function","convert function","type conversion","functions","sql programming","formatting","conversion","data type"]
},

/*==================================
 CASE Function
==================================*/

{
id:149,
category:"SQL Functions",
subCategory:"CASE",
difficulty:"Intermediate",
title:"CASE Function",
shortDescription:"Return different values based on specified conditions.",
syntax:`SELECT EmployeeName,CASE WHEN Salary>=50000 THEN 'High' ELSE 'Normal' END AS SalaryStatus FROM Employees;`,
sql:`SELECT EmployeeName,Salary,CASE WHEN Salary>=70000 THEN 'High Salary' WHEN Salary>=50000 THEN 'Medium Salary' ELSE 'Normal Salary' END AS SalaryCategory FROM Employees;`,
keywordId:"CASE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Classification",
optimizationId:"CASE_FUNCTION",
errorId:"CASE_FUNCTION",
interviewId:"CASE_FUNCTION",
interviewQuestions:["<b>Q:</b>What is the CASE expression?<br><b>A:</b>It performs conditional logic in SQL.","<b>Q:</b>Can CASE replace IF statements in SELECT queries?<br><b>A:</b>Yes."],
relatedTopics:["case","case function","case expression","when then","conditional sql","salary category","sql function","database function","sql basics","sql interview","conditional logic","sql examples","business rules","case keyword","database programming","if else","functions","sql programming","case statement","conditions"]
},

/*==================================
 NULL Functions
==================================*/

{
id:150,
category:"SQL Functions",
subCategory:"NULL Functions",
difficulty:"Intermediate",
title:"NULL Functions",
shortDescription:"Handle NULL values using SQL functions.",
syntax:`SELECT ISNULL(Bonus,0) FROM Employees;`,
sql:`SELECT EmployeeName,Salary,ISNULL(Bonus,0) AS Bonus,NVL(Bonus,0) AS BonusValue FROM Employees;`,
keywordId:"NULL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Missing Bonus Report",
optimizationId:"NULL_FUNCTION",
errorId:"NULL_FUNCTION",
interviewId:"NULL_FUNCTION",
interviewQuestions:["<b>Q:</b>Which function replaces NULL values?<br><b>A:</b>ISNULL(), IFNULL(), NVL() or COALESCE().","<b>Q:</b>Why handle NULL values?<br><b>A:</b>To avoid incorrect calculations."],
relatedTopics:["null function","isnull","ifnull","nvl","coalesce","null value","sql function","database function","sql basics","sql interview","missing values","sql examples","function keyword","database programming","null handling","functions","sql programming","data cleaning","null replacement","null"]
},

/*==================================
 COALESCE Function
==================================*/

{
id:151,
category:"SQL Functions",
subCategory:"COALESCE",
difficulty:"Intermediate",
title:"COALESCE Function",
shortDescription:"Return the first non-NULL value from a list.",
syntax:`SELECT COALESCE(HomePhone,MobilePhone,'Not Available') FROM Employees;`,
sql:`SELECT EmployeeName,COALESCE(HomePhone,OfficePhone,MobilePhone,'No Contact') AS ContactNumber FROM Employees;`,
keywordId:"COALESCE",
sampleDataId:"Employees",
businessCaseId:"Employee Contact Directory",
optimizationId:"COALESCE",
errorId:"COALESCE",
interviewId:"COALESCE",
interviewQuestions:["<b>Q:</b>What does COALESCE do?<br><b>A:</b>Returns the first non-NULL value.","<b>Q:</b>How is COALESCE different from ISNULL?<br><b>A:</b>COALESCE accepts multiple expressions."],
relatedTopics:["coalesce","null handling","first non null","sql function","database function","contact number","sql basics","sql interview","data cleaning","sql examples","function keyword","database programming","null value","functions","sql programming","coalesce function","missing values","fallback value","null replacement","coalesce keyword"]
},

/*==================================
 IIF Function
==================================*/

{
id:152,
category:"SQL Functions",
subCategory:"IIF",
difficulty:"Intermediate",
title:"IIF Function",
shortDescription:"Return one value if a condition is true and another if false.",
syntax:`SELECT IIF(Salary>=50000,'High','Normal') FROM Employees;`,
sql:`SELECT EmployeeName,Salary,IIF(Salary>=50000,'Eligible','Not Eligible') AS BonusStatus FROM Employees;`,
keywordId:"IIF",
sampleDataId:"Employees",
businessCaseId:"Bonus Eligibility",
optimizationId:"IIF",
errorId:"IIF",
interviewId:"IIF",
interviewQuestions:["<b>Q:</b>What is IIF?<br><b>A:</b>A shorthand conditional function.","<b>Q:</b>Which SQL Server version introduced IIF?<br><b>A:</b>SQL Server 2012."],
relatedTopics:["iif","conditional function","if function","sql function","database function","bonus eligibility","sql basics","sql interview","conditional logic","sql examples","function keyword","database programming","if else","functions","sql programming","iif function","condition","decision making","iif keyword","logical function"]
},

/*==================================
 CHOOSE Function
==================================*/

{
id:153,
category:"SQL Functions",
subCategory:"CHOOSE",
difficulty:"Intermediate",
title:"CHOOSE Function",
shortDescription:"Return a value from a list based on a numeric index.",
syntax:`SELECT CHOOSE(2,'HR','Finance','IT');`,
sql:`SELECT EmployeeName,DepartmentID,CHOOSE(DepartmentID,'HR','Finance','IT','Sales') AS DepartmentName FROM Employees;`,
keywordId:"CHOOSE",
sampleDataId:"Employees",
businessCaseId:"Department Mapping",
optimizationId:"CHOOSE",
errorId:"CHOOSE",
interviewId:"CHOOSE",
interviewQuestions:["<b>Q:</b>What does CHOOSE do?<br><b>A:</b>Returns an item based on its position.","<b>Q:</b>What is the first index in CHOOSE?<br><b>A:</b>1."],
relatedTopics:["choose","choose function","index function","department mapping","sql function","database function","sql basics","sql interview","lookup","sql examples","function keyword","database programming","functions","sql programming","list selection","choose keyword","mapping","department","logical function","choose statement"]
},

/*==================================
 Logical Functions
==================================*/

{
id:154,
category:"SQL Functions",
subCategory:"Logical Functions",
difficulty:"Intermediate",
title:"Logical Functions",
shortDescription:"Evaluate logical conditions in SQL queries.",
syntax:`SELECT IIF(Salary>50000,'Yes','No') FROM Employees;`,
sql:`SELECT EmployeeName,IIF(Department='IT','Technology','Other') AS Category FROM Employees;`,
keywordId:"LOGICAL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Department Classification",
optimizationId:"LOGICAL_FUNCTION",
errorId:"LOGICAL_FUNCTION",
interviewId:"LOGICAL_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Logical Functions?<br><b>A:</b>Functions that evaluate conditions.","<b>Q:</b>Give an example.<br><b>A:</b>IIF() or CASE."],
relatedTopics:["logical function","case","iif","conditions","sql function","database function","logical operators","sql basics","sql interview","conditional","sql examples","function keyword","database programming","business rules","functions","sql programming","decision making","logic","logical keyword","condition"]
},

/*==================================
 Ranking Functions
==================================*/

{
id:155,
category:"SQL Functions",
subCategory:"Ranking Functions",
difficulty:"Advanced",
title:"Ranking Functions",
shortDescription:"Assign ranks to rows using window functions.",
syntax:`SELECT EmployeeName,ROW_NUMBER() OVER(ORDER BY Salary DESC) FROM Employees;`,
sql:`SELECT EmployeeName,Salary,ROW_NUMBER() OVER(ORDER BY Salary DESC) AS RankNumber FROM Employees;`,
keywordId:"RANKING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Top Salary Ranking",
optimizationId:"RANKING_FUNCTION",
errorId:"RANKING_FUNCTION",
interviewId:"RANKING_FUNCTION",
interviewQuestions:["<b>Q:</b>Name common Ranking Functions.<br><b>A:</b>ROW_NUMBER(), RANK(), DENSE_RANK().","<b>Q:</b>Which clause is required?<br><b>A:</b>OVER()."],
relatedTopics:["ranking function","row_number","rank","dense_rank","window function","sql function","database function","salary ranking","sql advanced","sql interview","analytics","sql examples","function keyword","database programming","over clause","functions","sql programming","ranking","top records","window"]
},

/*==================================
 CREATE TRIGGER
==================================*/

{
id:156,
category:"SQL Triggers",
subCategory:"CREATE TRIGGER",
difficulty:"Intermediate",
title:"CREATE TRIGGER",
shortDescription:"Create a trigger that executes automatically when a database event occurs.",
syntax:`CREATE TRIGGER TriggerName
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'Employee Added';
END;`,
sql:`CREATE TRIGGER trgEmployeeInsert
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'New Employee Record Inserted';
END;`,
keywordId:"CREATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automatic Employee Audit",
optimizationId:"CREATE_TRIGGER",
errorId:"CREATE_TRIGGER",
interviewId:"CREATE_TRIGGER",
interviewQuestions:["<b>Q:</b>What is a Trigger?<br><b>A:</b>A database object that executes automatically after a specified event.","<b>Q:</b>Which events can activate a trigger?<br><b>A:</b>INSERT, UPDATE and DELETE."],
relatedTopics:["create trigger","trigger","database trigger","sql trigger","automatic execution","insert trigger","update trigger","delete trigger","employee audit","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","event driven","automatic sql","create trigger statement"]
},

/*==================================
 AFTER Trigger
==================================*/

{
id:157,
category:"SQL Triggers",
subCategory:"AFTER Trigger",
difficulty:"Intermediate",
title:"AFTER Trigger",
shortDescription:"Execute automatically after an INSERT, UPDATE or DELETE operation completes.",
syntax:`CREATE TRIGGER trgAfterInsert
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'Record Inserted';
END;`,
sql:`CREATE TRIGGER trgAfterSalaryUpdate
ON Employees
AFTER UPDATE
AS
BEGIN
PRINT 'Employee Salary Updated';
END;`,
keywordId:"AFTER_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Salary Change Notification",
optimizationId:"AFTER_TRIGGER",
errorId:"AFTER_TRIGGER",
interviewId:"AFTER_TRIGGER",
interviewQuestions:["<b>Q:</b>When does an AFTER Trigger execute?<br><b>A:</b>After the DML operation completes successfully.","<b>Q:</b>Can AFTER Trigger be created for INSERT, UPDATE and DELETE?<br><b>A:</b>Yes."],
relatedTopics:["after trigger","trigger","sql trigger","after insert","after update","after delete","database trigger","employee audit","automatic execution","sql server","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","event trigger","after keyword","database programming","automatic action"]
},

/*==================================
 INSTEAD OF Trigger
==================================*/

{
id:158,
category:"SQL Triggers",
subCategory:"INSTEAD OF Trigger",
difficulty:"Advanced",
title:"INSTEAD OF Trigger",
shortDescription:"Execute custom logic instead of the original INSERT, UPDATE or DELETE operation.",
syntax:`CREATE TRIGGER trgInsteadOfDelete
ON Employees
INSTEAD OF DELETE
AS
BEGIN
PRINT 'Delete Not Allowed';
END;`,
sql:`CREATE TRIGGER trgInsteadOfDelete
ON Employees
INSTEAD OF DELETE
AS
BEGIN
PRINT 'Employee Deletion Restricted';
END;`,
keywordId:"INSTEAD_OF_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Prevent Employee Deletion",
optimizationId:"INSTEAD_OF_TRIGGER",
errorId:"INSTEAD_OF_TRIGGER",
interviewId:"INSTEAD_OF_TRIGGER",
interviewQuestions:["<b>Q:</b>What is an INSTEAD OF Trigger?<br><b>A:</b>It replaces the original DML operation with custom logic.","<b>Q:</b>Where is INSTEAD OF Trigger commonly used?<br><b>A:</b>Views and data validation."],
relatedTopics:["instead of trigger","instead trigger","trigger","delete restriction","database trigger","sql trigger","custom logic","view trigger","sql server","sql interview","trigger example","sql examples","database object","business rules","trigger keyword","advanced trigger","event trigger","database programming","instead of delete","trigger types"]
},

/*==================================
 BEFORE Trigger
==================================*/

{
id:159,
category:"SQL Triggers",
subCategory:"BEFORE Trigger",
difficulty:"Advanced",
title:"BEFORE Trigger",
shortDescription:"Execute before a DML operation begins (supported in MySQL and Oracle).",
syntax:`CREATE TRIGGER trgBeforeInsert
BEFORE INSERT
ON Employees
FOR EACH ROW
SET NEW.Status='Active';`,
sql:`CREATE TRIGGER trgBeforeInsert
BEFORE INSERT
ON Employees
FOR EACH ROW
SET NEW.CreatedDate=NOW();`,
keywordId:"BEFORE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automatic Default Values",
optimizationId:"BEFORE_TRIGGER",
errorId:"BEFORE_TRIGGER",
interviewId:"BEFORE_TRIGGER",
interviewQuestions:["<b>Q:</b>When does a BEFORE Trigger execute?<br><b>A:</b>Before the INSERT, UPDATE or DELETE operation.","<b>Q:</b>Does SQL Server support BEFORE Trigger?<br><b>A:</b>No."],
relatedTopics:["before trigger","mysql trigger","oracle trigger","database trigger","sql trigger","before insert","before update","before delete","automatic values","sql interview","trigger example","database programming","sql examples","event trigger","trigger keyword","before keyword","data validation","business rules","trigger types","automatic execution"]
},

/*==================================
 ALTER TRIGGER
==================================*/

{
id:160,
category:"SQL Triggers",
subCategory:"ALTER TRIGGER",
difficulty:"Intermediate",
title:"ALTER TRIGGER",
shortDescription:"Modify an existing database trigger.",
syntax:`ALTER TRIGGER trgEmployeeInsert
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'Employee Added Successfully';
END;`,
sql:`ALTER TRIGGER trgEmployeeInsert
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'New Employee Successfully Created';
END;`,
keywordId:"ALTER_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Modify Audit Logic",
optimizationId:"ALTER_TRIGGER",
errorId:"ALTER_TRIGGER",
interviewId:"ALTER_TRIGGER",
interviewQuestions:["<b>Q:</b>What does ALTER TRIGGER do?<br><b>A:</b>Modifies an existing trigger.","<b>Q:</b>Does ALTER TRIGGER recreate the trigger?<br><b>A:</b>No."],
relatedTopics:["alter trigger","modify trigger","database trigger","sql trigger","trigger update","employee audit","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","trigger modification","event trigger","sql programming","trigger management","alter keyword","trigger"]
},

/*==================================
 DROP TRIGGER
==================================*/

{
id:161,
category:"SQL Triggers",
subCategory:"DROP TRIGGER",
difficulty:"Beginner",
title:"DROP TRIGGER",
shortDescription:"Delete an existing trigger from the database.",
syntax:`DROP TRIGGER trgEmployeeInsert;`,
sql:`DROP TRIGGER trgEmployeeInsert;`,
keywordId:"DROP_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Trigger",
optimizationId:"DROP_TRIGGER",
errorId:"DROP_TRIGGER",
interviewId:"DROP_TRIGGER",
interviewQuestions:["<b>Q:</b>What does DROP TRIGGER do?<br><b>A:</b>It permanently removes a trigger from the database.","<b>Q:</b>Can a dropped trigger be executed?<br><b>A:</b>No."],
relatedTopics:["drop trigger","delete trigger","remove trigger","database trigger","sql trigger","trigger management","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","drop keyword","trigger removal","event trigger","sql programming","drop database trigger","trigger delete"]
},

/*==================================
 INSERT Trigger
==================================*/

{
id:162,
category:"SQL Triggers",
subCategory:"INSERT Trigger",
difficulty:"Intermediate",
title:"INSERT Trigger",
shortDescription:"Automatically execute logic whenever a new row is inserted.",
syntax:`CREATE TRIGGER trgInsert
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'Employee Inserted';
END;`,
sql:`CREATE TRIGGER trgEmployeeInsertAudit
ON Employees
AFTER INSERT
AS
BEGIN
PRINT 'Employee Record Added';
END;`,
keywordId:"INSERT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Employee Audit Trail",
optimizationId:"INSERT_TRIGGER",
errorId:"INSERT_TRIGGER",
interviewId:"INSERT_TRIGGER",
interviewQuestions:["<b>Q:</b>When does an INSERT Trigger execute?<br><b>A:</b>Immediately after an INSERT operation.","<b>Q:</b>Why use an INSERT Trigger?<br><b>A:</b>To automate auditing and validation."],
relatedTopics:["insert trigger","after insert","trigger","database trigger","audit trigger","employee audit","sql trigger","automatic insert","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","event trigger","insert event","automatic execution","insert"]
},

/*==================================
 UPDATE Trigger
==================================*/

{
id:163,
category:"SQL Triggers",
subCategory:"UPDATE Trigger",
difficulty:"Intermediate",
title:"UPDATE Trigger",
shortDescription:"Automatically execute logic whenever existing records are updated.",
syntax:`CREATE TRIGGER trgUpdate
ON Employees
AFTER UPDATE
AS
BEGIN
PRINT 'Employee Updated';
END;`,
sql:`CREATE TRIGGER trgSalaryUpdate
ON Employees
AFTER UPDATE
AS
BEGIN
PRINT 'Salary Updated Successfully';
END;`,
keywordId:"UPDATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Salary Change Audit",
optimizationId:"UPDATE_TRIGGER",
errorId:"UPDATE_TRIGGER",
interviewId:"UPDATE_TRIGGER",
interviewQuestions:["<b>Q:</b>When does an UPDATE Trigger execute?<br><b>A:</b>After an UPDATE statement completes.","<b>Q:</b>Why use UPDATE Triggers?<br><b>A:</b>To track important data changes."],
relatedTopics:["update trigger","after update","trigger","database trigger","salary update","audit trigger","sql trigger","employee update","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","event trigger","update event","automatic execution","update"]
},

/*==================================
 DELETE Trigger
==================================*/

{
id:164,
category:"SQL Triggers",
subCategory:"DELETE Trigger",
difficulty:"Intermediate",
title:"DELETE Trigger",
shortDescription:"Automatically execute logic whenever records are deleted.",
syntax:`CREATE TRIGGER trgDelete
ON Employees
AFTER DELETE
AS
BEGIN
PRINT 'Employee Deleted';
END;`,
sql:`CREATE TRIGGER trgEmployeeDelete
ON Employees
AFTER DELETE
AS
BEGIN
PRINT 'Employee Record Deleted';
END;`,
keywordId:"DELETE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Employee Deletion Audit",
optimizationId:"DELETE_TRIGGER",
errorId:"DELETE_TRIGGER",
interviewId:"DELETE_TRIGGER",
interviewQuestions:["<b>Q:</b>When does a DELETE Trigger execute?<br><b>A:</b>After a DELETE statement completes.","<b>Q:</b>Why use DELETE Triggers?<br><b>A:</b>To maintain audit history."],
relatedTopics:["delete trigger","after delete","trigger","database trigger","audit delete","employee delete","sql trigger","delete event","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","event trigger","automatic execution","delete audit","delete"]
},

/*==================================
 Audit Trigger
==================================*/

{
id:165,
category:"SQL Triggers",
subCategory:"Audit Trigger",
difficulty:"Advanced",
title:"Audit Trigger",
shortDescription:"Store changes made to database records for auditing purposes.",
syntax:`CREATE TRIGGER trgAuditEmployee
ON Employees
AFTER UPDATE
AS
BEGIN
INSERT INTO EmployeeAudit(EmployeeID,ActionDate)
SELECT EmployeeID,GETDATE() FROM inserted;
END;`,
sql:`CREATE TRIGGER trgAuditSalary
ON Employees
AFTER UPDATE
AS
BEGIN
INSERT INTO EmployeeAudit(EmployeeID,ActionType,ActionDate)
SELECT EmployeeID,'Salary Updated',GETDATE()
FROM inserted;
END;`,
keywordId:"AUDIT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Employee Activity Audit",
optimizationId:"AUDIT_TRIGGER",
errorId:"AUDIT_TRIGGER",
interviewId:"AUDIT_TRIGGER",
interviewQuestions:["<b>Q:</b>What is an Audit Trigger?<br><b>A:</b>It records database changes for auditing purposes.","<b>Q:</b>Why are Audit Triggers important?<br><b>A:</b>They improve compliance, security and change tracking."],
relatedTopics:["audit trigger","audit","database audit","employee audit","change tracking","sql trigger","database trigger","audit table","sql server","database programming","sql interview","trigger example","sql examples","database object","business logic","trigger keyword","audit log","security","compliance","audit trail"]
},

/*==================================
 SQL Views
==================================*/

{
id:166,
category:"SQL Views",
subCategory:"Introduction",
difficulty:"Beginner",
title:"SQL Views",
shortDescription:"A View is a virtual table created from one or more SQL queries.",
syntax:`CREATE VIEW ViewName AS
SELECT column_name
FROM table_name;`,
sql:`CREATE VIEW EmployeeView AS
SELECT EmployeeID,EmployeeName,Department,Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplify Employee Reporting",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is a SQL View?<br><b>A:</b>A virtual table based on a SQL query.","<b>Q:</b>Does a View store data?<br><b>A:</b>No, it stores only the SQL query."],
relatedTopics:["view","sql view","virtual table","database view","employee view","reporting","sql basics","create view","view example","sql interview","database object","sql examples","view keyword","business reporting","sql programming","virtual table sql","database programming","query view","view statement","view syntax"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:167,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW",
shortDescription:"Create a reusable virtual table using a SELECT statement.",
syntax:`CREATE VIEW EmployeeView AS
SELECT EmployeeName,Salary
FROM Employees;`,
sql:`CREATE VIEW EmployeeSalaryView AS
SELECT EmployeeID,EmployeeName,Salary
FROM Employees;`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Dashboard",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>Which command creates a View?<br><b>A:</b>CREATE VIEW.","<b>Q:</b>Can a View contain joins?<br><b>A:</b>Yes."],
relatedTopics:["create view","view","virtual table","sql view","employee salary","reporting","database object","sql interview","sql examples","database programming","view syntax","view keyword","business reporting","query view","sql programming","create virtual table","view creation","database view","create statement","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:168,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW",
shortDescription:"Modify an existing SQL View.",
syntax:`ALTER VIEW EmployeeView AS
SELECT EmployeeID,EmployeeName,Department
FROM Employees;`,
sql:`ALTER VIEW EmployeeSalaryView AS
SELECT EmployeeID,EmployeeName,Department,Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Modify Reporting View",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>It modifies an existing View.","<b>Q:</b>Does ALTER VIEW affect table data?<br><b>A:</b>No."],
relatedTopics:["alter view","modify view","sql view","database view","view update","reporting","database object","sql interview","sql examples","database programming","view keyword","business reporting","query view","sql programming","alter statement","view modification","virtual table","alter","view syntax","view"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:169,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW",
shortDescription:"Delete an existing SQL View.",
syntax:`DROP VIEW EmployeeView;`,
sql:`DROP VIEW EmployeeSalaryView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Obsolete Reports",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>Deletes a View from the database.","<b>Q:</b>Does DROP VIEW delete table data?<br><b>A:</b>No."],
relatedTopics:["drop view","delete view","remove view","sql view","database view","view management","database object","sql interview","sql examples","database programming","view keyword","business reporting","query view","sql programming","drop statement","virtual table","view deletion","drop","view syntax","sql"]
},

/*==================================
 Simple View
==================================*/

{
id:170,
category:"SQL Views",
subCategory:"Simple View",
difficulty:"Beginner",
title:"Simple View",
shortDescription:"A View based on a single table without complex logic.",
syntax:`CREATE VIEW EmployeeNames AS
SELECT EmployeeName
FROM Employees;`,
sql:`CREATE VIEW EmployeeNames AS
SELECT EmployeeID,EmployeeName
FROM Employees;`,
keywordId:"SIMPLE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Quick Employee Directory",
optimizationId:"SIMPLE_VIEW",
errorId:"SIMPLE_VIEW",
interviewId:"SIMPLE_VIEW",
interviewQuestions:["<b>Q:</b>What is a Simple View?<br><b>A:</b>A View created from one table.","<b>Q:</b>Can Simple Views usually be updated?<br><b>A:</b>Yes."],
relatedTopics:["simple view","view","single table view","sql view","employee directory","database object","sql interview","sql examples","database programming","view keyword","business reporting","query view","sql programming","virtual table","simple","view syntax","create view","reporting","database view","sql"]
},

/*==================================
 Complex View
==================================*/

{
id:171,
category:"SQL Views",
subCategory:"Complex View",
difficulty:"Intermediate",
title:"Complex View",
shortDescription:"A View created using multiple tables, joins or aggregate functions.",
syntax:`CREATE VIEW EmployeeDepartmentView AS
SELECT e.EmployeeName,d.DepartmentName
FROM Employees e
INNER JOIN Departments d
ON e.DepartmentID=d.DepartmentID;`,
sql:`CREATE VIEW EmployeeDepartmentView AS
SELECT e.EmployeeID,e.EmployeeName,d.DepartmentName,e.Salary
FROM Employees e
INNER JOIN Departments d
ON e.DepartmentID=d.DepartmentID;`,
keywordId:"COMPLEX_VIEW",
sampleDataId:"Employees",
businessCaseId:"Employee Department Report",
optimizationId:"COMPLEX_VIEW",
errorId:"COMPLEX_VIEW",
interviewId:"COMPLEX_VIEW",
interviewQuestions:["<b>Q:</b>What is a Complex View?<br><b>A:</b>A View built using joins, multiple tables or aggregate functions.","<b>Q:</b>Can Complex Views always be updated?<br><b>A:</b>No."],
relatedTopics:["complex view","sql view","join view","multiple table view","aggregate view","database view","employee department","sql interview","database object","sql examples","view keyword","business reporting","query view","sql programming","virtual table","join","complex sql","view syntax","advanced view","sql"]
},

/*==================================
 Indexed View
==================================*/

{
id:172,
category:"SQL Views",
subCategory:"Indexed View",
difficulty:"Advanced",
title:"Indexed View",
shortDescription:"A View with a clustered index that stores data physically for faster queries.",
syntax:`CREATE UNIQUE CLUSTERED INDEX IX_EmployeeView
ON EmployeeView(EmployeeID);`,
sql:`CREATE UNIQUE CLUSTERED INDEX IX_EmployeeSalary
ON EmployeeSalaryView(EmployeeID);`,
keywordId:"INDEXED_VIEW",
sampleDataId:"Employees",
businessCaseId:"High Performance Reporting",
optimizationId:"INDEXED_VIEW",
errorId:"INDEXED_VIEW",
interviewId:"INDEXED_VIEW",
interviewQuestions:["<b>Q:</b>What is an Indexed View?<br><b>A:</b>A View with a clustered index that improves query performance.","<b>Q:</b>Does every database support Indexed Views?<br><b>A:</b>No."],
relatedTopics:["indexed view","materialized view","clustered index","performance","sql server","database view","sql interview","view optimization","database object","sql examples","view keyword","business reporting","query optimization","sql programming","advanced sql","view index","indexed","database programming","performance tuning","view"]
},

/*==================================
 Updatable View
==================================*/

{
id:173,
category:"SQL Views",
subCategory:"Updatable View",
difficulty:"Intermediate",
title:"Updatable View",
shortDescription:"A View that allows INSERT, UPDATE and DELETE operations.",
syntax:`UPDATE EmployeeView
SET Salary=60000
WHERE EmployeeID=101;`,
sql:`UPDATE EmployeeSalaryView
SET Salary=65000
WHERE EmployeeID=101;`,
keywordId:"UPDATABLE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Maintain Employee Records",
optimizationId:"UPDATABLE_VIEW",
errorId:"UPDATABLE_VIEW",
interviewId:"UPDATABLE_VIEW",
interviewQuestions:["<b>Q:</b>What is an Updatable View?<br><b>A:</b>A View through which table data can be modified.","<b>Q:</b>Can every View be updated?<br><b>A:</b>No."],
relatedTopics:["updatable view","update view","sql view","database view","modify view","employee update","sql interview","database programming","database object","sql examples","view keyword","business reporting","query view","sql programming","virtual table","view update","updateable view","view syntax","sql","view"]
},

/*==================================
 Read Only View
==================================*/

{
id:174,
category:"SQL Views",
subCategory:"Read Only View",
difficulty:"Intermediate",
title:"Read Only View",
shortDescription:"A View that allows only data retrieval and prevents modifications.",
syntax:`CREATE VIEW EmployeeView
AS
SELECT EmployeeName,Salary
FROM Employees
WITH READ ONLY;`,
sql:`CREATE VIEW EmployeeReportView
AS
SELECT EmployeeID,EmployeeName,Department,Salary
FROM Employees
WITH READ ONLY;`,
keywordId:"READ_ONLY_VIEW",
sampleDataId:"Employees",
businessCaseId:"Secure Employee Reports",
optimizationId:"READ_ONLY_VIEW",
errorId:"READ_ONLY_VIEW",
interviewId:"READ_ONLY_VIEW",
interviewQuestions:["<b>Q:</b>What is a Read Only View?<br><b>A:</b>A View that prevents data modification.","<b>Q:</b>Why use Read Only Views?<br><b>A:</b>To improve security."],
relatedTopics:["read only view","readonly view","sql view","database view","secure reporting","employee report","sql interview","database programming","database object","sql examples","view keyword","business reporting","query view","sql programming","view security","virtual table","read only","security","view syntax","sql"]
},

/*==================================
 WITH CHECK OPTION
==================================*/

{
id:175,
category:"SQL Views",
subCategory:"WITH CHECK OPTION",
difficulty:"Advanced",
title:"WITH CHECK OPTION",
shortDescription:"Ensures inserted or updated rows satisfy the View condition.",
syntax:`CREATE VIEW ITEmployees AS
SELECT *
FROM Employees
WHERE Department='IT'
WITH CHECK OPTION;`,
sql:`CREATE VIEW ITEmployees AS
SELECT EmployeeID,EmployeeName,Department
FROM Employees
WHERE Department='IT'
WITH CHECK OPTION;`,
keywordId:"CHECK_OPTION",
sampleDataId:"Employees",
businessCaseId:"Department Wise Data Security",
optimizationId:"CHECK_OPTION",
errorId:"CHECK_OPTION",
interviewId:"CHECK_OPTION",
interviewQuestions:["<b>Q:</b>What does WITH CHECK OPTION do?<br><b>A:</b>It enforces the View condition during INSERT and UPDATE.","<b>Q:</b>Why use WITH CHECK OPTION?<br><b>A:</b>To maintain data integrity."],
relatedTopics:["with check option","check option","sql view","view condition","data integrity","database view","sql interview","database programming","database object","sql examples","view keyword","business reporting","query view","sql programming","view security","check constraint","advanced sql","view syntax","sql","view"]
},

/*==================================
 Materialized View
==================================*/

{
id:176,
category:"SQL Views",
subCategory:"Materialized View",
difficulty:"Advanced",
title:"Materialized View",
shortDescription:"A materialized view stores the query result physically for faster data retrieval.",
syntax:`CREATE MATERIALIZED VIEW EmployeeSummary
AS
SELECT Department,SUM(Salary)
FROM Employees
GROUP BY Department;`,
sql:`CREATE MATERIALIZED VIEW EmployeeSummary
AS
SELECT Department,
COUNT(*) AS TotalEmployees,
SUM(Salary) AS TotalSalary,
AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department;`,
keywordId:"MATERIALIZED_VIEW",
sampleDataId:"Employees",
businessCaseId:"Department Summary Dashboard",
optimizationId:"MATERIALIZED_VIEW",
errorId:"MATERIALIZED_VIEW",
interviewId:"MATERIALIZED_VIEW",
interviewQuestions:["<b>Q:</b>What is a Materialized View?<br><b>A:</b>It stores query results physically for faster access.","<b>Q:</b>Does SQL Server support Materialized Views directly?<br><b>A:</b>No. SQL Server uses Indexed Views instead."],
relatedTopics:["materialized view","materialized","indexed view","summary view","database view","performance","reporting","sql interview","advanced sql","database programming","sql examples","view keyword","query optimization","materialized view example","dashboard","aggregate view","business reporting","sql optimization","view performance","materialized data"]
},

/*==================================
 View with JOIN
==================================*/

{
id:177,
category:"SQL Views",
subCategory:"JOIN View",
difficulty:"Intermediate",
title:"View with JOIN",
shortDescription:"Create a View using data from multiple related tables.",
syntax:`CREATE VIEW EmployeeDepartmentView
AS
SELECT e.EmployeeName,d.DepartmentName
FROM Employees e
INNER JOIN Departments d
ON e.DepartmentID=d.DepartmentID;`,
sql:`CREATE VIEW EmployeeDepartmentView
AS
SELECT e.EmployeeID,
e.EmployeeName,
d.DepartmentName,
e.Salary
FROM Employees e
INNER JOIN Departments d
ON e.DepartmentID=d.DepartmentID;`,
keywordId:"VIEW_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Department Dashboard",
optimizationId:"VIEW_JOIN",
errorId:"VIEW_JOIN",
interviewId:"VIEW_JOIN",
interviewQuestions:["<b>Q:</b>Can a View contain JOIN statements?<br><b>A:</b>Yes.","<b>Q:</b>Why use JOIN inside a View?<br><b>A:</b>To simplify complex queries."],
relatedTopics:["view join","join view","sql join","employee department","multiple tables","database view","inner join","left join","sql interview","sql examples","view keyword","business reporting","query simplification","database programming","advanced sql","join example","reporting","virtual table","sql view","join"]
},

/*==================================
 View with Aggregate Function
==================================*/

{
id:178,
category:"SQL Views",
subCategory:"Aggregate View",
difficulty:"Intermediate",
title:"View with Aggregate Function",
shortDescription:"Create a View using aggregate functions like COUNT, SUM and AVG.",
syntax:`CREATE VIEW SalarySummary
AS
SELECT Department,
AVG(Salary)
FROM Employees
GROUP BY Department;`,
sql:`CREATE VIEW DepartmentSalarySummary
AS
SELECT Department,
COUNT(*) AS TotalEmployees,
SUM(Salary) AS TotalSalary,
AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY Department;`,
keywordId:"AGGREGATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Department Salary Analysis",
optimizationId:"AGGREGATE_VIEW",
errorId:"AGGREGATE_VIEW",
interviewId:"AGGREGATE_VIEW",
interviewQuestions:["<b>Q:</b>Can Aggregate Functions be used inside a View?<br><b>A:</b>Yes.","<b>Q:</b>Why use Aggregate Views?<br><b>A:</b>To simplify reporting and dashboards."],
relatedTopics:["aggregate view","group by view","summary view","salary summary","database view","sql interview","aggregate function","count","sum","avg","sql examples","view keyword","dashboard","business reporting","advanced sql","database programming","reporting","analytics","group by","view"]
},

/*==================================
 View Advantages
==================================*/

{
id:179,
category:"SQL Views",
subCategory:"Advantages",
difficulty:"Beginner",
title:"View Advantages",
shortDescription:"Understand the benefits of using SQL Views in real-world applications.",
syntax:`-- Views simplify complex SQL queries.`,
sql:`CREATE VIEW EmployeeReport
AS
SELECT EmployeeID,EmployeeName,Department
FROM Employees;`,
keywordId:"VIEW_ADVANTAGES",
sampleDataId:"Employees",
businessCaseId:"Simplified Business Reports",
optimizationId:"VIEW_ADVANTAGES",
errorId:"VIEW_ADVANTAGES",
interviewId:"VIEW_ADVANTAGES",
interviewQuestions:["<b>Q:</b>Name two advantages of SQL Views.<br><b>A:</b>Security and query simplification.","<b>Q:</b>Do Views improve code reusability?<br><b>A:</b>Yes."],
relatedTopics:["view advantages","advantages of view","benefits of view","sql view","database view","security","reusability","query simplification","sql interview","sql examples","view keyword","business reporting","database programming","advanced sql","reporting","virtual table","database object","view benefits","sql","view"]
},

/*==================================
 View Limitations
==================================*/

{
id:180,
category:"SQL Views",
subCategory:"Limitations",
difficulty:"Beginner",
title:"View Limitations",
shortDescription:"Understand the common limitations and restrictions of SQL Views.",
syntax:`-- Some complex Views are not updateable.`,
sql:`SELECT *
FROM EmployeeDepartmentView;`,
keywordId:"VIEW_LIMITATIONS",
sampleDataId:"Employees",
businessCaseId:"View Design Best Practices",
optimizationId:"VIEW_LIMITATIONS",
errorId:"VIEW_LIMITATIONS",
interviewId:"VIEW_LIMITATIONS",
interviewQuestions:["<b>Q:</b>What are the limitations of SQL Views?<br><b>A:</b>Some Views cannot be updated and may affect performance.","<b>Q:</b>Do Views store data?<br><b>A:</b>Normally no, except Materialized/Indexed Views."],
relatedTopics:["view limitations","limitations of view","view restrictions","sql view","database view","view performance","updateable view","sql interview","sql examples","view keyword","database programming","advanced sql","reporting","security","virtual table","database object","view disadvantages","sql","view","best practices"]
},

/*==================================
 SQL Index
==================================*/

{
id:181,
category:"SQL Indexes",
subCategory:"Introduction",
difficulty:"Beginner",
title:"SQL Index",
shortDescription:"An index improves query performance by allowing faster data retrieval from a table.",
syntax:`CREATE INDEX IndexName
ON Employees(EmployeeName);`,
sql:`CREATE INDEX IX_Employees_Name
ON Employees(EmployeeName);`,
keywordId:"INDEX",
sampleDataId:"Employees",
businessCaseId:"Speed Up Employee Search",
optimizationId:"INDEX",
errorId:"INDEX",
interviewId:"INDEX",
interviewQuestions:["<b>Q:</b>What is an SQL Index?<br><b>A:</b>An index is a database object that improves query performance.","<b>Q:</b>Does an index speed up INSERT and UPDATE operations?<br><b>A:</b>No, indexes may slightly slow down data modification because they must also be updated."],
relatedTopics:["index","sql index","database index","performance","query optimization","search performance","employee search","create index","clustered index","non clustered index","database tuning","sql interview","sql examples","index keyword","optimization","database programming","query performance","index example","sql optimization","indexing"]
},

/*==================================
 Clustered Index
==================================*/

{
id:182,
category:"SQL Indexes",
subCategory:"Clustered Index",
difficulty:"Intermediate",
title:"Clustered Index",
shortDescription:"A clustered index sorts and stores table data physically based on the indexed column.",
syntax:`CREATE CLUSTERED INDEX IX_EmployeeID
ON Employees(EmployeeID);`,
sql:`CREATE CLUSTERED INDEX IX_Employees_ID
ON Employees(EmployeeID);`,
keywordId:"CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Fast Employee Lookup",
optimizationId:"CLUSTERED_INDEX",
errorId:"CLUSTERED_INDEX",
interviewId:"CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is a Clustered Index?<br><b>A:</b>It stores table rows physically in index order.","<b>Q:</b>How many Clustered Indexes can a table have?<br><b>A:</b>Only one."],
relatedTopics:["clustered index","cluster index","physical order","primary key","sql index","database index","performance tuning","sql server","sql interview","index example","database optimization","query performance","index keyword","clustered","database programming","sql examples","table storage","indexing","clustered index example","optimization"]
},

/*==================================
 Non-Clustered Index
==================================*/

{
id:183,
category:"SQL Indexes",
subCategory:"Non-Clustered Index",
difficulty:"Intermediate",
title:"Non-Clustered Index",
shortDescription:"A non-clustered index stores a separate lookup structure without changing the physical order of the table.",
syntax:`CREATE NONCLUSTERED INDEX IX_Department
ON Employees(Department);`,
sql:`CREATE NONCLUSTERED INDEX IX_Employees_Department
ON Employees(Department);`,
keywordId:"NON_CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Department Search Optimization",
optimizationId:"NON_CLUSTERED_INDEX",
errorId:"NON_CLUSTERED_INDEX",
interviewId:"NON_CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is a Non-Clustered Index?<br><b>A:</b>It creates a separate index structure pointing to table rows.","<b>Q:</b>How many Non-Clustered Indexes can a table have?<br><b>A:</b>Multiple."],
relatedTopics:["non clustered index","nonclustered index","secondary index","sql index","database index","performance","department search","sql interview","database optimization","query performance","index keyword","sql examples","database programming","indexing","optimization","lookup index","non clustered","index example","search optimization","sql"]
},

/*==================================
 Unique Index
==================================*/

{
id:184,
category:"SQL Indexes",
subCategory:"Unique Index",
difficulty:"Intermediate",
title:"Unique Index",
shortDescription:"A unique index prevents duplicate values in one or more columns.",
syntax:`CREATE UNIQUE INDEX IX_Email
ON Employees(Email);`,
sql:`CREATE UNIQUE INDEX IX_Employees_Email
ON Employees(Email);`,
keywordId:"UNIQUE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Prevent Duplicate Employee Emails",
optimizationId:"UNIQUE_INDEX",
errorId:"UNIQUE_INDEX",
interviewId:"UNIQUE_INDEX",
interviewQuestions:["<b>Q:</b>What is a Unique Index?<br><b>A:</b>It enforces uniqueness for indexed columns.","<b>Q:</b>Can duplicate values exist in a Unique Index?<br><b>A:</b>No."],
relatedTopics:["unique index","unique constraint","duplicate prevention","email uniqueness","sql index","database index","performance","sql interview","index keyword","database programming","sql examples","optimization","data integrity","indexing","unique key","database design","index example","unique values","sql optimization","index"]
},

/*==================================
 Composite Index
==================================*/

{
id:185,
category:"SQL Indexes",
subCategory:"Composite Index",
difficulty:"Intermediate",
title:"Composite Index",
shortDescription:"A composite index is created on two or more columns to improve multi-column searches.",
syntax:`CREATE INDEX IX_DepartmentSalary
ON Employees(Department,Salary);`,
sql:`CREATE INDEX IX_Employees_DepartmentSalary
ON Employees(Department,Salary);`,
keywordId:"COMPOSITE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Department Wise Salary Search",
optimizationId:"COMPOSITE_INDEX",
errorId:"COMPOSITE_INDEX",
interviewId:"COMPOSITE_INDEX",
interviewQuestions:["<b>Q:</b>What is a Composite Index?<br><b>A:</b>An index created on multiple columns.","<b>Q:</b>Why use Composite Indexes?<br><b>A:</b>To improve queries filtering on multiple columns."],
relatedTopics:["composite index","multi column index","combined index","department salary","sql index","database index","performance","query optimization","sql interview","index keyword","database programming","sql examples","optimization","index example","search optimization","database tuning","indexing","multiple columns","sql optimization","index"]
},

/*==================================
 CREATE INDEX
==================================*/

{
id:186,
category:"SQL Indexes",
subCategory:"CREATE INDEX",
difficulty:"Beginner",
title:"CREATE INDEX",
shortDescription:"Create an index to improve query performance.",
syntax:`CREATE INDEX IndexName
ON table_name(column_name);`,
sql:`CREATE INDEX IX_Employees_Salary
ON Employees(Salary);`,
keywordId:"CREATE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Speed Up Salary Search",
optimizationId:"CREATE_INDEX",
errorId:"CREATE_INDEX",
interviewId:"CREATE_INDEX",
interviewQuestions:["<b>Q:</b>Which statement creates an index?<br><b>A:</b>CREATE INDEX.","<b>Q:</b>Why create indexes?<br><b>A:</b>To improve query performance."],
relatedTopics:["create index","index","sql index","database index","performance","query optimization","salary search","sql server","sql interview","index example","database programming","sql examples","optimization","index keyword","create statement","database tuning","search optimization","indexing","performance tuning","sql"]
},

/*==================================
 DROP INDEX
==================================*/

{
id:187,
category:"SQL Indexes",
subCategory:"DROP INDEX",
difficulty:"Beginner",
title:"DROP INDEX",
shortDescription:"Remove an existing index from a table.",
syntax:`DROP INDEX IX_Employees_Salary
ON Employees;`,
sql:`DROP INDEX IX_Employees_Salary
ON Employees;`,
keywordId:"DROP_INDEX",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Index",
optimizationId:"DROP_INDEX",
errorId:"DROP_INDEX",
interviewId:"DROP_INDEX",
interviewQuestions:["<b>Q:</b>What does DROP INDEX do?<br><b>A:</b>Removes an index from the database.","<b>Q:</b>Does DROP INDEX delete table data?<br><b>A:</b>No."],
relatedTopics:["drop index","delete index","remove index","sql index","database index","performance","sql server","sql interview","index management","database programming","sql examples","optimization","index keyword","database tuning","drop statement","index removal","performance tuning","indexing","sql optimization","index"]
},

/*==================================
 REBUILD INDEX
==================================*/

{
id:188,
category:"SQL Indexes",
subCategory:"REBUILD INDEX",
difficulty:"Advanced",
title:"REBUILD INDEX",
shortDescription:"Rebuild fragmented indexes to improve query performance.",
syntax:`ALTER INDEX IX_Employees_Salary
ON Employees
REBUILD;`,
sql:`ALTER INDEX IX_Employees_Salary
ON Employees
REBUILD;`,
keywordId:"REBUILD_INDEX",
sampleDataId:"Employees",
businessCaseId:"Database Performance Maintenance",
optimizationId:"REBUILD_INDEX",
errorId:"REBUILD_INDEX",
interviewId:"REBUILD_INDEX",
interviewQuestions:["<b>Q:</b>Why rebuild an index?<br><b>A:</b>To reduce fragmentation and improve performance.","<b>Q:</b>Which command rebuilds an index?<br><b>A:</b>ALTER INDEX ... REBUILD."],
relatedTopics:["rebuild index","alter index","fragmentation","index maintenance","sql index","database performance","sql server","sql interview","optimization","database tuning","index keyword","performance tuning","sql examples","database programming","index rebuild","maintenance","sql optimization","indexing","advanced sql","rebuild"]
},

/*==================================
 Filtered Index
==================================*/

{
id:189,
category:"SQL Indexes",
subCategory:"Filtered Index",
difficulty:"Advanced",
title:"Filtered Index",
shortDescription:"Create an index only on rows that satisfy a specified condition.",
syntax:`CREATE INDEX IX_ActiveEmployees
ON Employees(EmployeeName)
WHERE Status='Active';`,
sql:`CREATE INDEX IX_Employees_Active
ON Employees(EmployeeName)
WHERE Status='Active';`,
keywordId:"FILTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Optimize Active Employee Search",
optimizationId:"FILTERED_INDEX",
errorId:"FILTERED_INDEX",
interviewId:"FILTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is a Filtered Index?<br><b>A:</b>An index created only for rows matching a condition.","<b>Q:</b>Why use Filtered Indexes?<br><b>A:</b>To reduce index size and improve performance."],
relatedTopics:["filtered index","where index","partial index","active employees","sql index","database index","performance","sql interview","database programming","optimization","index keyword","sql examples","database tuning","performance tuning","conditional index","index example","sql optimization","indexing","advanced sql","filter index"]
},

/*==================================
 Covering Index
==================================*/

{
id:190,
category:"SQL Indexes",
subCategory:"Covering Index",
difficulty:"Advanced",
title:"Covering Index",
shortDescription:"A covering index contains all columns needed by a query, avoiding additional table lookups.",
syntax:`CREATE INDEX IX_EmployeeCover
ON Employees(Department)
INCLUDE(EmployeeName,Salary);`,
sql:`CREATE INDEX IX_Employees_Cover
ON Employees(Department)
INCLUDE(EmployeeName,Salary);`,
keywordId:"COVERING_INDEX",
sampleDataId:"Employees",
businessCaseId:"High-Speed Employee Reports",
optimizationId:"COVERING_INDEX",
errorId:"COVERING_INDEX",
interviewId:"COVERING_INDEX",
interviewQuestions:["<b>Q:</b>What is a Covering Index?<br><b>A:</b>An index containing all columns required by a query.","<b>Q:</b>Why use INCLUDE columns?<br><b>A:</b>To avoid expensive key lookups."],
relatedTopics:["covering index","include columns","include","key lookup","sql index","database index","performance","query optimization","sql interview","database programming","optimization","index keyword","sql examples","database tuning","performance tuning","advanced sql","indexing","cover index","include keyword","sql"]
},

/*==================================
 Full-Text Index
==================================*/

{
id:191,
category:"SQL Indexes",
subCategory:"Full-Text Index",
difficulty:"Advanced",
title:"Full-Text Index",
shortDescription:"A Full-Text Index enables fast searching of words and phrases within large text columns.",
syntax:`CREATE FULLTEXT INDEX
ON Employees(Comments)
KEY INDEX PK_Employees;`,
sql:`CREATE FULLTEXT INDEX
ON Employees(EmployeeRemarks)
KEY INDEX PK_Employees;`,
keywordId:"FULLTEXT_INDEX",
sampleDataId:"Employees",
businessCaseId:"Search Employee Remarks",
optimizationId:"FULLTEXT_INDEX",
errorId:"FULLTEXT_INDEX",
interviewId:"FULLTEXT_INDEX",
interviewQuestions:["<b>Q:</b>What is a Full-Text Index?<br><b>A:</b>It allows fast searching of words and phrases in character-based columns.","<b>Q:</b>Which operator is commonly used with Full-Text Index?<br><b>A:</b>CONTAINS() and FREETEXT()."],
relatedTopics:["full text index","fulltext index","contains","freetext","text search","search documents","employee remarks","sql index","database index","sql server","performance","sql interview","index keyword","database programming","search optimization","advanced sql","indexing","text indexing","full text search","sql examples"]
},

/*==================================
 XML Index
==================================*/

{
id:192,
category:"SQL Indexes",
subCategory:"XML Index",
difficulty:"Advanced",
title:"XML Index",
shortDescription:"An XML Index improves the performance of queries on XML data stored in SQL Server.",
syntax:`CREATE PRIMARY XML INDEX
IX_EmployeeXML
ON Employees(EmployeeXML);`,
sql:`CREATE PRIMARY XML INDEX
IX_Employees_XML
ON Employees(EmployeeXML);`,
keywordId:"XML_INDEX",
sampleDataId:"Employees",
businessCaseId:"Optimize XML Data Search",
optimizationId:"XML_INDEX",
errorId:"XML_INDEX",
interviewId:"XML_INDEX",
interviewQuestions:["<b>Q:</b>Why is an XML Index used?<br><b>A:</b>To improve XML query performance.","<b>Q:</b>Can an XML Index exist without a Primary XML Index?<br><b>A:</b>No."],
relatedTopics:["xml index","primary xml index","secondary xml index","xml data","sql server","database index","performance","sql interview","advanced sql","database programming","index keyword","optimization","sql examples","xml query","database tuning","indexing","xml search","xml","sql optimization","index"]
},

/*==================================
 Spatial Index
==================================*/

{
id:193,
category:"SQL Indexes",
subCategory:"Spatial Index",
difficulty:"Advanced",
title:"Spatial Index",
shortDescription:"A Spatial Index improves the performance of geographic and geometry data queries.",
syntax:`CREATE SPATIAL INDEX
IX_Location
ON Locations(GeoLocation);`,
sql:`CREATE SPATIAL INDEX
IX_CustomerLocation
ON CustomerLocations(GeoLocation);`,
keywordId:"SPATIAL_INDEX",
sampleDataId:"Employees",
businessCaseId:"Nearest Branch Search",
optimizationId:"SPATIAL_INDEX",
errorId:"SPATIAL_INDEX",
interviewId:"SPATIAL_INDEX",
interviewQuestions:["<b>Q:</b>What is a Spatial Index?<br><b>A:</b>It optimizes queries on geography and geometry data.","<b>Q:</b>Where are Spatial Indexes commonly used?<br><b>A:</b>Maps, GPS and location-based applications."],
relatedTopics:["spatial index","geography index","geometry index","map data","gps","location search","sql server","database index","performance","sql interview","advanced sql","database programming","index keyword","optimization","sql examples","spatial data","nearest location","indexing","geo index","sql"]
},

/*==================================
 Columnstore Index
==================================*/

{
id:194,
category:"SQL Indexes",
subCategory:"Columnstore Index",
difficulty:"Advanced",
title:"Columnstore Index",
shortDescription:"A Columnstore Index stores data by columns instead of rows, improving analytical query performance.",
syntax:`CREATE COLUMNSTORE INDEX
IX_Sales
ON Sales(SalesAmount,Region,SalesDate);`,
sql:`CREATE COLUMNSTORE INDEX
IX_EmployeeSalary
ON Employees(Salary,Department,JoiningDate);`,
keywordId:"COLUMNSTORE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Business Intelligence Reporting",
optimizationId:"COLUMNSTORE_INDEX",
errorId:"COLUMNSTORE_INDEX",
interviewId:"COLUMNSTORE_INDEX",
interviewQuestions:["<b>Q:</b>What is a Columnstore Index?<br><b>A:</b>It stores data column-wise for high-performance analytics.","<b>Q:</b>Which workloads benefit most from Columnstore Indexes?<br><b>A:</b>Data warehouses and reporting systems."],
relatedTopics:["columnstore index","column store","analytics","data warehouse","business intelligence","sql server","database index","performance","sql interview","advanced sql","database programming","optimization","index keyword","sql examples","reporting","columnar storage","indexing","warehouse","bi","sql"]
},

/*==================================
 Index Best Practices
==================================*/

{
id:195,
category:"SQL Indexes",
subCategory:"Best Practices",
difficulty:"Intermediate",
title:"Index Best Practices",
shortDescription:"Follow recommended practices to maximize index performance and minimize maintenance overhead.",
syntax:`-- Create indexes only on frequently searched columns.`,
sql:`CREATE INDEX IX_Employees_Department
ON Employees(Department);`,
keywordId:"INDEX_BEST_PRACTICES",
sampleDataId:"Employees",
businessCaseId:"Enterprise Database Optimization",
optimizationId:"INDEX_BEST_PRACTICES",
errorId:"INDEX_BEST_PRACTICES",
interviewId:"INDEX_BEST_PRACTICES",
interviewQuestions:["<b>Q:</b>Name two Index best practices.<br><b>A:</b>Create indexes on frequently searched columns and remove unused indexes.","<b>Q:</b>Why should indexes be monitored regularly?<br><b>A:</b>To reduce fragmentation and maintain performance."],
relatedTopics:["index best practices","index optimization","database tuning","performance tuning","sql index","index maintenance","query optimization","sql interview","database programming","optimization","index keyword","sql examples","fragmentation","rebuild index","statistics","indexing","enterprise sql","performance","best practices","sql"]
},

/*==================================
 SQL Transactions
==================================*/

{
id:196,
category:"SQL Transactions",
subCategory:"Introduction",
difficulty:"Beginner",
title:"SQL Transaction",
shortDescription:"A transaction is a sequence of SQL statements executed as a single unit of work.",
syntax:`BEGIN TRANSACTION;
SQL Statements;
COMMIT;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=60000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Update",
optimizationId:"TRANSACTION",
errorId:"TRANSACTION",
interviewId:"TRANSACTION",
interviewQuestions:["<b>Q:</b>What is an SQL Transaction?<br><b>A:</b>A transaction is a group of SQL statements executed as one logical unit.","<b>Q:</b>Why are transactions used?<br><b>A:</b>To maintain data consistency and integrity."],
relatedTopics:["transaction","sql transaction","database transaction","commit","rollback","begin transaction","acid","data consistency","bank transaction","employee update","sql interview","sql examples","transaction keyword","database programming","database management","atomic transaction","transaction example","sql basics","data integrity","sql"]
},

/*==================================
 BEGIN TRANSACTION
==================================*/

{
id:197,
category:"SQL Transactions",
subCategory:"BEGIN TRANSACTION",
difficulty:"Beginner",
title:"BEGIN TRANSACTION",
shortDescription:"Starts a new database transaction.",
syntax:`BEGIN TRANSACTION;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=65000
WHERE EmployeeID=102;`,
keywordId:"BEGIN_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Start Payroll Update",
optimizationId:"BEGIN_TRANSACTION",
errorId:"BEGIN_TRANSACTION",
interviewId:"BEGIN_TRANSACTION",
interviewQuestions:["<b>Q:</b>What does BEGIN TRANSACTION do?<br><b>A:</b>It starts a new transaction.","<b>Q:</b>Can multiple SQL statements exist inside a transaction?<br><b>A:</b>Yes."],
relatedTopics:["begin transaction","start transaction","transaction","sql transaction","database transaction","commit","rollback","sql interview","transaction keyword","database programming","sql examples","data integrity","transaction management","banking","employee update","transaction example","sql","begin","database","transaction control"]
},

/*==================================
 COMMIT
==================================*/

{
id:198,
category:"SQL Transactions",
subCategory:"COMMIT",
difficulty:"Beginner",
title:"COMMIT",
shortDescription:"Permanently saves all changes made during the current transaction.",
syntax:`COMMIT;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=70000
WHERE EmployeeID=103;

COMMIT;`,
keywordId:"COMMIT",
sampleDataId:"Employees",
businessCaseId:"Finalize Salary Revision",
optimizationId:"COMMIT",
errorId:"COMMIT",
interviewId:"COMMIT",
interviewQuestions:["<b>Q:</b>What does COMMIT do?<br><b>A:</b>It permanently saves transaction changes.","<b>Q:</b>Can committed changes be rolled back?<br><b>A:</b>No."],
relatedTopics:["commit","save transaction","sql commit","transaction","database transaction","begin transaction","rollback","sql interview","transaction keyword","database programming","sql examples","data consistency","transaction control","bank transaction","commit statement","sql","database","save changes","transaction example","acid"]
},

/*==================================
 ROLLBACK
==================================*/

{
id:199,
category:"SQL Transactions",
subCategory:"ROLLBACK",
difficulty:"Beginner",
title:"ROLLBACK",
shortDescription:"Undo all uncommitted changes made during the current transaction.",
syntax:`ROLLBACK;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=100000
WHERE EmployeeID=101;

ROLLBACK;`,
keywordId:"ROLLBACK",
sampleDataId:"Employees",
businessCaseId:"Cancel Incorrect Salary Update",
optimizationId:"ROLLBACK",
errorId:"ROLLBACK",
interviewId:"ROLLBACK",
interviewQuestions:["<b>Q:</b>What does ROLLBACK do?<br><b>A:</b>It cancels uncommitted transaction changes.","<b>Q:</b>Can ROLLBACK undo committed data?<br><b>A:</b>No."],
relatedTopics:["rollback","undo transaction","cancel transaction","sql rollback","database transaction","commit","begin transaction","sql interview","transaction keyword","database programming","sql examples","transaction control","banking","employee update","rollback statement","sql","database","data integrity","transaction example","acid"]
},

/*==================================
 SAVEPOINT
==================================*/

{
id:200,
category:"SQL Transactions",
subCategory:"SAVEPOINT",
difficulty:"Intermediate",
title:"SAVEPOINT",
shortDescription:"Create a checkpoint inside a transaction to allow partial rollback.",
syntax:`SAVE TRANSACTION SavePoint1;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=60000
WHERE EmployeeID=101;

SAVE TRANSACTION SalaryUpdated;

UPDATE Employees
SET Department='HR'
WHERE EmployeeID=101;`,
keywordId:"SAVEPOINT",
sampleDataId:"Employees",
businessCaseId:"Partial Payroll Rollback",
optimizationId:"SAVEPOINT",
errorId:"SAVEPOINT",
interviewId:"SAVEPOINT",
interviewQuestions:["<b>Q:</b>What is a SAVEPOINT?<br><b>A:</b>A checkpoint within a transaction.","<b>Q:</b>Why use SAVEPOINT?<br><b>A:</b>To roll back only part of a transaction."],
relatedTopics:["savepoint","save transaction","partial rollback","transaction","sql transaction","rollback","commit","database transaction","sql interview","transaction keyword","database programming","sql examples","transaction control","banking","checkpoint","sql","database","transaction example","data integrity","savepoint example"]
},

/*==================================
 NESTED TRANSACTIONS
==================================*/

{
id:201,
category:"SQL Transactions",
subCategory:"Nested Transactions",
difficulty:"Advanced",
title:"Nested Transactions",
shortDescription:"A nested transaction is a transaction started inside another transaction.",
syntax:`BEGIN TRANSACTION;
SQL Statements;

BEGIN TRANSACTION;
SQL Statements;

COMMIT;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=70000
WHERE EmployeeID=101;

BEGIN TRANSACTION;

UPDATE Employees
SET Department='IT'
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"NESTED_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Complex Business Updates",
optimizationId:"NESTED_TRANSACTION",
errorId:"NESTED_TRANSACTION",
interviewId:"NESTED_TRANSACTION",
interviewQuestions:["<b>Q:</b>What is a Nested Transaction?<br><b>A:</b>A transaction created inside another transaction.","<b>Q:</b>Where are Nested Transactions used?<br><b>A:</b>Complex business operations requiring multiple logical steps."],
relatedTopics:["nested transaction","inner transaction","transaction inside transaction","sql transaction","begin transaction","commit","rollback","database transaction","sql interview","transaction management","database programming","sql examples","transaction control","complex transaction","business transaction","sql"]
},

/*==================================
 ACID PROPERTIES
==================================*/

{
id:202,
category:"SQL Transactions",
subCategory:"ACID Properties",
difficulty:"Beginner",
title:"ACID Properties",
shortDescription:"ACID properties ensure reliable and consistent database transactions.",
syntax:`Atomicity
Consistency
Isolation
Durability`,
sql:`BEGIN TRANSACTION;

UPDATE Accounts
SET Balance=Balance-1000
WHERE AccountID=101;

COMMIT;`,
keywordId:"ACID_PROPERTIES",
sampleDataId:"Employees",
businessCaseId:"Bank Transaction Reliability",
optimizationId:"ACID_PROPERTIES",
errorId:"ACID_PROPERTIES",
interviewId:"ACID_PROPERTIES",
interviewQuestions:["<b>Q:</b>What are ACID properties?<br><b>A:</b>Atomicity, Consistency, Isolation and Durability.","<b>Q:</b>Why are ACID properties important?<br><b>A:</b>They maintain database reliability and integrity."],
relatedTopics:["acid properties","acid","atomicity","consistency","isolation","durability","database transaction","sql transaction","bank transaction","sql interview","database programming","transaction management","data integrity","sql examples","transaction control","database reliability","sql"]
},

/*==================================
 ATOMICITY
==================================*/

{
id:203,
category:"SQL Transactions",
subCategory:"Atomicity",
difficulty:"Beginner",
title:"Atomicity",
shortDescription:"Atomicity ensures that all transaction operations complete successfully or none are applied.",
syntax:`BEGIN TRANSACTION;

SQL Operations;

COMMIT;

OR

ROLLBACK;`,
sql:`BEGIN TRANSACTION;

UPDATE Accounts
SET Balance=Balance-500
WHERE AccountID=101;

UPDATE Accounts
SET Balance=Balance+500
WHERE AccountID=102;

COMMIT;`,
keywordId:"ATOMICITY",
sampleDataId:"Employees",
businessCaseId:"Money Transfer Transaction",
optimizationId:"ATOMICITY",
errorId:"ATOMICITY",
interviewId:"ATOMICITY",
interviewQuestions:["<b>Q:</b>What does Atomicity mean?<br><b>A:</b>A transaction is completed fully or not executed at all.","<b>Q:</b>Which command supports Atomicity?<br><b>A:</b>COMMIT and ROLLBACK."],
relatedTopics:["atomicity","acid","transaction","all or nothing","rollback","commit","database transaction","bank transfer","sql interview","data integrity","sql examples","transaction control","database programming","sql","transaction reliability","atomic transaction"]
},

/*==================================
 CONSISTENCY
==================================*/

{
id:204,
category:"SQL Transactions",
subCategory:"Consistency",
difficulty:"Beginner",
title:"Consistency",
shortDescription:"Consistency ensures that database rules and constraints remain valid after transactions.",
syntax:`Transaction Before State
+
Valid Operations
=
Transaction After State`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=75000
WHERE EmployeeID=105;

COMMIT;`,
keywordId:"CONSISTENCY",
sampleDataId:"Employees",
businessCaseId:"Maintain Database Rules",
optimizationId:"CONSISTENCY",
errorId:"CONSISTENCY",
interviewId:"CONSISTENCY",
interviewQuestions:["<b>Q:</b>What does Consistency ensure?<br><b>A:</b>Database remains valid before and after transactions.","<b>Q:</b>Which constraints help maintain consistency?<br><b>A:</b>Primary Key, Foreign Key and Check constraints."],
relatedTopics:["consistency","acid","transaction","database rules","constraints","data integrity","sql transaction","sql interview","database programming","transaction control","sql examples","valid data","database reliability","business rules","sql"]
},

/*==================================
 ISOLATION
==================================*/

{
id:205,
category:"SQL Transactions",
subCategory:"Isolation",
difficulty:"Intermediate",
title:"Isolation",
shortDescription:"Isolation controls how transactions interact with each other when running simultaneously.",
syntax:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;`,
sql:`SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN TRANSACTION;

SELECT *
FROM Employees;

COMMIT;`,
keywordId:"ISOLATION",
sampleDataId:"Employees",
businessCaseId:"Concurrent User Operations",
optimizationId:"ISOLATION",
errorId:"ISOLATION",
interviewId:"ISOLATION",
interviewQuestions:["<b>Q:</b>What is Isolation in SQL?<br><b>A:</b>It controls visibility of changes between transactions.","<b>Q:</b>Why is Isolation required?<br><b>A:</b>To prevent incorrect data reads."],
relatedTopics:["isolation","acid","transaction isolation","concurrency","locking","sql transaction","database transaction","sql interview","database programming","isolation level","sql examples","transaction control","data consistency","sql"]
},

/*==================================
 DURABILITY
==================================*/

{
id:206,
category:"SQL Transactions",
subCategory:"Durability",
difficulty:"Beginner",
title:"Durability",
shortDescription:"Durability ensures committed transaction changes are permanently stored.",
syntax:`BEGIN TRANSACTION;

SQL Operations;

COMMIT;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=80000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"DURABILITY",
sampleDataId:"Employees",
businessCaseId:"Permanent Payroll Update",
optimizationId:"DURABILITY",
errorId:"DURABILITY",
interviewId:"DURABILITY",
interviewQuestions:["<b>Q:</b>What does Durability mean?<br><b>A:</b>Committed changes remain saved even after system failure.","<b>Q:</b>Which component helps durability?<br><b>A:</b>Transaction logs and database recovery mechanisms."],
relatedTopics:["durability","acid","transaction","commit","database recovery","transaction log","sql transaction","data persistence","sql interview","database programming","sql examples","transaction control","permanent changes","database reliability","sql"]
},

/*==================================
 TRANSACTION ISOLATION LEVELS
==================================*/

{
id:207,
category:"SQL Transactions",
subCategory:"Isolation Levels",
difficulty:"Intermediate",
title:"Transaction Isolation Levels",
shortDescription:"Isolation levels define how transactions access and modify shared data.",
syntax:`SET TRANSACTION ISOLATION LEVEL
IsolationLevel;`,
sql:`SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

SELECT *
FROM Employees;`,
keywordId:"ISOLATION_LEVELS",
sampleDataId:"Employees",
businessCaseId:"Control Concurrent Transactions",
optimizationId:"ISOLATION_LEVELS",
errorId:"ISOLATION_LEVELS",
interviewId:"ISOLATION_LEVELS",
interviewQuestions:["<b>Q:</b>What are Transaction Isolation Levels?<br><b>A:</b>Rules controlling transaction visibility and locking behavior.","<b>Q:</b>Name SQL Isolation Levels.<br><b>A:</b>Read Uncommitted, Read Committed, Repeatable Read, Serializable and Snapshot."],
relatedTopics:["isolation levels","transaction isolation","read uncommitted","read committed","repeatable read","serializable","snapshot isolation","sql transaction","concurrency","locking","sql interview","database programming","transaction control","acid","sql"]
},

/*==================================
 READ UNCOMMITTED
==================================*/

{
id:208,
category:"SQL Transactions",
subCategory:"Read Uncommitted",
difficulty:"Intermediate",
title:"Read Uncommitted",
shortDescription:"Allows reading uncommitted changes from other transactions.",
syntax:`SET TRANSACTION ISOLATION LEVEL
READ UNCOMMITTED;`,
sql:`SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

SELECT *
FROM Employees;`,
keywordId:"READ_UNCOMMITTED",
sampleDataId:"Employees",
businessCaseId:"Fast Reporting With Dirty Reads",
optimizationId:"READ_UNCOMMITTED",
errorId:"READ_UNCOMMITTED",
interviewId:"READ_UNCOMMITTED",
interviewQuestions:["<b>Q:</b>What is Read Uncommitted?<br><b>A:</b>The lowest isolation level allowing dirty reads.","<b>Q:</b>What is a dirty read?<br><b>A:</b>Reading data that has not been committed."],
relatedTopics:["read uncommitted","dirty read","isolation level","transaction","sql transaction","concurrency","locking","sql interview","database programming","sql examples","fast reporting","transaction control","acid","sql"]
},

/*==================================
 READ COMMITTED
==================================*/

{
id:209,
category:"SQL Transactions",
subCategory:"Read Committed",
difficulty:"Intermediate",
title:"Read Committed",
shortDescription:"Prevents reading uncommitted changes from other transactions.",
syntax:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;`,
sql:`SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

SELECT *
FROM Employees;`,
keywordId:"READ_COMMITTED",
sampleDataId:"Employees",
businessCaseId:"Reliable Business Reports",
optimizationId:"READ_COMMITTED",
errorId:"READ_COMMITTED",
interviewId:"READ_COMMITTED",
interviewQuestions:["<b>Q:</b>What is Read Committed?<br><b>A:</b>An isolation level that only reads committed data.","<b>Q:</b>Is Read Committed the default level in SQL Server?<br><b>A:</b>Yes."],
relatedTopics:["read committed","committed data","isolation level","transaction","sql transaction","dirty read prevention","locking","sql interview","database programming","sql examples","concurrency","transaction control","acid","sql"]
},

/*==================================
 REPEATABLE READ
==================================*/

{
id:210,
category:"SQL Transactions",
subCategory:"Repeatable Read",
difficulty:"Advanced",
title:"Repeatable Read",
shortDescription:"Ensures rows read during a transaction cannot be modified by other transactions.",
syntax:`SET TRANSACTION ISOLATION LEVEL
REPEATABLE READ;`,
sql:`SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

BEGIN TRANSACTION;

SELECT *
FROM Employees
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"REPEATABLE_READ",
sampleDataId:"Employees",
businessCaseId:"Consistent Data Analysis",
optimizationId:"REPEATABLE_READ",
errorId:"REPEATABLE_READ",
interviewId:"REPEATABLE_READ",
interviewQuestions:["<b>Q:</b>What does Repeatable Read prevent?<br><b>A:</b>It prevents non-repeatable reads.","<b>Q:</b>Is Repeatable Read stronger than Read Committed?<br><b>A:</b>Yes."],
relatedTopics:["repeatable read","isolation level","transaction","non repeatable read","sql transaction","concurrency","locking","sql interview","database programming","sql examples","transaction control","acid","data consistency","sql"]
},

/*==================================
 SERIALIZABLE
==================================*/

{
id:211,
category:"SQL Transactions",
subCategory:"Serializable",
difficulty:"Advanced",
title:"Serializable",
shortDescription:"Serializable is the highest isolation level that provides complete transaction isolation.",
syntax:`SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE;`,
sql:`SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN TRANSACTION;

SELECT *
FROM Employees
WHERE Department='IT';

COMMIT;`,
keywordId:"SERIALIZABLE",
sampleDataId:"Employees",
businessCaseId:"Critical Financial Transactions",
optimizationId:"SERIALIZABLE",
errorId:"SERIALIZABLE",
interviewId:"SERIALIZABLE",
interviewQuestions:["<b>Q:</b>What is Serializable Isolation Level?<br><b>A:</b>The highest isolation level that prevents dirty reads, non-repeatable reads and phantom reads.","<b>Q:</b>What is the disadvantage of Serializable?<br><b>A:</b>It can reduce concurrency due to increased locking."],
relatedTopics:["serializable","isolation level","highest isolation","transaction","phantom read","locking","sql transaction","database concurrency","sql interview","database programming","sql examples","transaction control","acid","financial transaction","data consistency","sql"]
},

/*==================================
 SNAPSHOT ISOLATION
==================================*/

{
id:212,
category:"SQL Transactions",
subCategory:"Snapshot Isolation",
difficulty:"Advanced",
title:"Snapshot Isolation",
shortDescription:"Snapshot Isolation uses row versions to provide consistent data without blocking readers.",
syntax:`SET TRANSACTION ISOLATION LEVEL
SNAPSHOT;`,
sql:`SET TRANSACTION ISOLATION LEVEL SNAPSHOT;

BEGIN TRANSACTION;

SELECT *
FROM Employees;

COMMIT;`,
keywordId:"SNAPSHOT_ISOLATION",
sampleDataId:"Employees",
businessCaseId:"High Performance Reporting",
optimizationId:"SNAPSHOT_ISOLATION",
errorId:"SNAPSHOT_ISOLATION",
interviewId:"SNAPSHOT_ISOLATION",
interviewQuestions:["<b>Q:</b>What is Snapshot Isolation?<br><b>A:</b>An isolation level that reads a consistent version of data.","<b>Q:</b>Does Snapshot Isolation use locks?<br><b>A:</b>No, it uses row versioning."],
relatedTopics:["snapshot isolation","row versioning","isolation level","transaction","concurrency","locking","sql transaction","sql server","sql interview","database programming","sql examples","transaction control","acid","performance","reporting","sql"]
},

/*==================================
 DEADLOCK
==================================*/

{
id:213,
category:"SQL Transactions",
subCategory:"Deadlock",
difficulty:"Advanced",
title:"Deadlock",
shortDescription:"A deadlock occurs when two transactions wait for each other to release resources.",
syntax:`-- Transaction 1 locks Resource A
-- Transaction 2 locks Resource B`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=90000
WHERE EmployeeID=101;

-- Waiting for another transaction

COMMIT;`,
keywordId:"DEADLOCK",
sampleDataId:"Employees",
businessCaseId:"Prevent Transaction Failure",
optimizationId:"DEADLOCK",
errorId:"DEADLOCK",
interviewId:"DEADLOCK",
interviewQuestions:["<b>Q:</b>What is a Deadlock?<br><b>A:</b>A situation where transactions block each other permanently.","<b>Q:</b>How can deadlocks be reduced?<br><b>A:</b>Use proper indexing, shorter transactions and consistent locking order."],
relatedTopics:["deadlock","transaction deadlock","blocking","locking","concurrency","sql transaction","database performance","sql interview","database programming","sql examples","transaction control","deadlock prevention","sql server","lock management","sql"]
},

/*==================================
 LOCKING
==================================*/

{
id:214,
category:"SQL Transactions",
subCategory:"Locking",
difficulty:"Intermediate",
title:"SQL Locking",
shortDescription:"Locking controls access to database resources during transactions.",
syntax:`BEGIN TRANSACTION;

SELECT *
FROM Employees
WITH (ROWLOCK);`,
sql:`BEGIN TRANSACTION;

UPDATE Employees WITH (ROWLOCK)
SET Salary=75000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"LOCKING",
sampleDataId:"Employees",
businessCaseId:"Control Concurrent Updates",
optimizationId:"LOCKING",
errorId:"LOCKING",
interviewId:"LOCKING",
interviewQuestions:["<b>Q:</b>What is SQL Locking?<br><b>A:</b>A mechanism to control simultaneous access to data.","<b>Q:</b>Name common lock types.<br><b>A:</b>Shared Lock, Exclusive Lock and Update Lock."],
relatedTopics:["locking","sql lock","shared lock","exclusive lock","update lock","transaction","concurrency","sql interview","database programming","sql examples","transaction control","deadlock","database security","sql server","sql"]
},

/*==================================
 CONCURRENCY CONTROL
==================================*/

{
id:215,
category:"SQL Transactions",
subCategory:"Concurrency Control",
difficulty:"Advanced",
title:"Concurrency Control",
shortDescription:"Concurrency control manages multiple transactions executing at the same time.",
syntax:`-- Control simultaneous transactions
using locks and isolation levels`,
sql:`SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

BEGIN TRANSACTION;

UPDATE Employees
SET Salary=85000
WHERE EmployeeID=102;

COMMIT;`,
keywordId:"CONCURRENCY_CONTROL",
sampleDataId:"Employees",
businessCaseId:"Multi User Database Operations",
optimizationId:"CONCURRENCY_CONTROL",
errorId:"CONCURRENCY_CONTROL",
interviewId:"CONCURRENCY_CONTROL",
interviewQuestions:["<b>Q:</b>What is Concurrency Control?<br><b>A:</b>It manages simultaneous database transactions safely.","<b>Q:</b>Why is concurrency control required?<br><b>A:</b>To prevent data conflicts and maintain consistency."],
relatedTopics:["concurrency control","multi user transaction","transaction management","locking","isolation level","database concurrency","sql transaction","sql interview","database programming","sql examples","transaction control","acid","deadlock","performance","sql"]
},

/*==================================
 SQL Stored Procedures
==================================*/

{
id:216,
category:"SQL Stored Procedures",
subCategory:"Introduction",
difficulty:"Beginner",
title:"Stored Procedure",
shortDescription:"A Stored Procedure is a precompiled collection of SQL statements stored in the database.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SQL Statements;
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SELECT *
FROM Employees;
END;`,
keywordId:"STORED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Reusable Employee Reports",
optimizationId:"STORED_PROCEDURE",
errorId:"STORED_PROCEDURE",
interviewId:"STORED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is a Stored Procedure?<br><b>A:</b>A saved collection of SQL statements that can be executed repeatedly.","<b>Q:</b>Why use Stored Procedures?<br><b>A:</b>For reusability, security and performance."],
relatedTopics:["stored procedure","procedure","sql procedure","database procedure","create procedure","execute procedure","sql interview","database programming","sql examples","reusable query","business logic","sql server","procedure keyword","database object","stored code","sql"]
},

/*==================================
 CREATE PROCEDURE
==================================*/

{
id:217,
category:"SQL Stored Procedures",
subCategory:"CREATE PROCEDURE",
difficulty:"Beginner",
title:"CREATE PROCEDURE",
shortDescription:"Create a new Stored Procedure in the database.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SQL Query;
END;`,
sql:`CREATE PROCEDURE GetEmployeeSalary
AS
BEGIN
SELECT EmployeeName,Salary
FROM Employees;
END;`,
keywordId:"CREATE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Report",
optimizationId:"CREATE_PROCEDURE",
errorId:"CREATE_PROCEDURE",
interviewId:"CREATE_PROCEDURE",
interviewQuestions:["<b>Q:</b>Which command creates a Stored Procedure?<br><b>A:</b>CREATE PROCEDURE.","<b>Q:</b>Can Stored Procedures contain multiple SQL statements?<br><b>A:</b>Yes."],
relatedTopics:["create procedure","stored procedure","sql procedure","database object","employee report","sql interview","database programming","sql examples","procedure keyword","create statement","business logic","sql server","stored code","sql"]
},

/*==================================
 EXECUTE PROCEDURE
==================================*/

{
id:218,
category:"SQL Stored Procedures",
subCategory:"EXECUTE PROCEDURE",
difficulty:"Beginner",
title:"EXECUTE PROCEDURE",
shortDescription:"Execute a Stored Procedure to run predefined SQL logic.",
syntax:`EXEC ProcedureName;`,
sql:`EXEC GetEmployeeSalary;`,
keywordId:"EXECUTE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Run Employee Report",
optimizationId:"EXECUTE_PROCEDURE",
errorId:"EXECUTE_PROCEDURE",
interviewId:"EXECUTE_PROCEDURE",
interviewQuestions:["<b>Q:</b>How do you execute a Stored Procedure?<br><b>A:</b>Using EXEC or EXECUTE command.","<b>Q:</b>Can Stored Procedures accept parameters?<br><b>A:</b>Yes."],
relatedTopics:["execute procedure","exec procedure","run procedure","stored procedure","sql procedure","database programming","sql interview","sql examples","procedure execution","procedure keyword","business logic","sql server","database object","sql"]
},

/*==================================
 PROCEDURE PARAMETERS
==================================*/

{
id:219,
category:"SQL Stored Procedures",
subCategory:"Parameters",
difficulty:"Intermediate",
title:"Stored Procedure Parameters",
shortDescription:"Parameters allow Stored Procedures to receive dynamic input values.",
syntax:`CREATE PROCEDURE ProcedureName
@Parameter datatype
AS
BEGIN
SQL Query;
END;`,
sql:`CREATE PROCEDURE GetEmployeeByDepartment
@Department VARCHAR(50)
AS
BEGIN
SELECT *
FROM Employees
WHERE Department=@Department;
END;`,
keywordId:"PROCEDURE_PARAMETERS",
sampleDataId:"Employees",
businessCaseId:"Dynamic Employee Search",
optimizationId:"PROCEDURE_PARAMETERS",
errorId:"PROCEDURE_PARAMETERS",
interviewId:"PROCEDURE_PARAMETERS",
interviewQuestions:["<b>Q:</b>Why use Stored Procedure Parameters?<br><b>A:</b>To pass dynamic values during execution.","<b>Q:</b>Can procedures have multiple parameters?<br><b>A:</b>Yes."],
relatedTopics:["procedure parameters","stored procedure parameter","input parameter","dynamic query","stored procedure","sql procedure","sql interview","database programming","sql examples","procedure keyword","sql server","business logic","parameterized query","sql"]
},

/*==================================
 INPUT PARAMETER
==================================*/

{
id:220,
category:"SQL Stored Procedures",
subCategory:"Input Parameter",
difficulty:"Intermediate",
title:"Input Parameter",
shortDescription:"Input parameters send values into a Stored Procedure.",
syntax:`CREATE PROCEDURE GetEmployee
@EmployeeID INT
AS
BEGIN
SELECT *
FROM Employees
WHERE EmployeeID=@EmployeeID;
END;`,
sql:`EXEC GetEmployee 101;`,
keywordId:"INPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Employee Detail Search",
optimizationId:"INPUT_PARAMETER",
errorId:"INPUT_PARAMETER",
interviewId:"INPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is an Input Parameter?<br><b>A:</b>A parameter used to pass values into a procedure.","<b>Q:</b>Can Input Parameters be optional?<br><b>A:</b>Yes, by assigning default values."],
relatedTopics:["input parameter","stored procedure","procedure parameter","sql procedure","employee search","sql interview","database programming","sql examples","procedure keyword","dynamic input","sql server","parameter query","business logic","sql"]
},

/*==================================
 OUTPUT PARAMETER
==================================*/

{
id:221,
category:"SQL Stored Procedures",
subCategory:"Output Parameter",
difficulty:"Intermediate",
title:"Output Parameter",
shortDescription:"Output parameters return values from a Stored Procedure to the caller.",
syntax:`CREATE PROCEDURE ProcedureName
@OutputParameter datatype OUTPUT
AS
BEGIN
SQL Query;
END;`,
sql:`CREATE PROCEDURE GetEmployeeCount
@TotalEmployees INT OUTPUT
AS
BEGIN
SELECT @TotalEmployees = COUNT(*)
FROM Employees;
END;`,
keywordId:"OUTPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Return Employee Statistics",
optimizationId:"OUTPUT_PARAMETER",
errorId:"OUTPUT_PARAMETER",
interviewId:"OUTPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is an Output Parameter?<br><b>A:</b>A parameter that returns a value from a Stored Procedure.","<b>Q:</b>How do you define an Output Parameter?<br><b>A:</b>Using OUTPUT keyword."],
relatedTopics:["output parameter","stored procedure output","return value","procedure parameter","sql procedure","sql interview","database programming","sql examples","procedure keyword","employee count","sql server","business logic","dynamic output","sql"]
},

/*==================================
 ALTER PROCEDURE
==================================*/

{
id:222,
category:"SQL Stored Procedures",
subCategory:"ALTER PROCEDURE",
difficulty:"Intermediate",
title:"ALTER PROCEDURE",
shortDescription:"Modify an existing Stored Procedure without dropping it.",
syntax:`ALTER PROCEDURE ProcedureName
AS
BEGIN
SQL Statements;
END;`,
sql:`ALTER PROCEDURE GetEmployees
AS
BEGIN
SELECT EmployeeName,Department
FROM Employees;
END;`,
keywordId:"ALTER_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Update Existing Reports",
optimizationId:"ALTER_PROCEDURE",
errorId:"ALTER_PROCEDURE",
interviewId:"ALTER_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does ALTER PROCEDURE do?<br><b>A:</b>It modifies an existing Stored Procedure.","<b>Q:</b>Does ALTER PROCEDURE remove existing procedure?<br><b>A:</b>No."],
relatedTopics:["alter procedure","modify procedure","stored procedure","sql procedure","database object","sql interview","database programming","sql examples","procedure keyword","update procedure","sql server","business logic","sql"]
},

/*==================================
 DROP PROCEDURE
==================================*/

{
id:223,
category:"SQL Stored Procedures",
subCategory:"DROP PROCEDURE",
difficulty:"Beginner",
title:"DROP PROCEDURE",
shortDescription:"Remove an existing Stored Procedure from the database.",
syntax:`DROP PROCEDURE ProcedureName;`,
sql:`DROP PROCEDURE GetEmployees;`,
keywordId:"DROP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Remove Old Business Logic",
optimizationId:"DROP_PROCEDURE",
errorId:"DROP_PROCEDURE",
interviewId:"DROP_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does DROP PROCEDURE do?<br><b>A:</b>Deletes a Stored Procedure.","<b>Q:</b>Does DROP PROCEDURE delete table data?<br><b>A:</b>No."],
relatedTopics:["drop procedure","delete procedure","remove procedure","stored procedure","sql procedure","database object","sql interview","database programming","sql examples","procedure keyword","remove code","sql server","business logic","sql"]
},

/*==================================
 STORED PROCEDURE WITH JOIN
==================================*/

{
id:224,
category:"SQL Stored Procedures",
subCategory:"JOIN Procedure",
difficulty:"Intermediate",
title:"Stored Procedure with JOIN",
shortDescription:"A Stored Procedure can contain JOIN queries to combine multiple tables.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SELECT *
FROM Table1
JOIN Table2;
END;`,
sql:`CREATE PROCEDURE EmployeeDepartmentReport
AS
BEGIN
SELECT e.EmployeeName,
d.DepartmentName
FROM Employees e
JOIN Departments d
ON e.DepartmentID=d.DepartmentID;
END;`,
keywordId:"JOIN_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Combined Employee Reports",
optimizationId:"JOIN_PROCEDURE",
errorId:"JOIN_PROCEDURE",
interviewId:"JOIN_PROCEDURE",
interviewQuestions:["<b>Q:</b>Can Stored Procedures contain JOINs?<br><b>A:</b>Yes.","<b>Q:</b>Why use JOIN in Procedures?<br><b>A:</b>To create reusable combined reports."],
relatedTopics:["stored procedure join","join procedure","sql join","stored procedure","multiple tables","database programming","sql interview","sql examples","procedure keyword","employee report","business logic","sql server","database object","sql"]
},

/*==================================
 STORED PROCEDURE WITH TRANSACTION
==================================*/

{
id:225,
category:"SQL Stored Procedures",
subCategory:"Transaction Procedure",
difficulty:"Advanced",
title:"Stored Procedure with Transaction",
shortDescription:"Combine Stored Procedures with transactions to ensure reliable operations.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
BEGIN TRANSACTION;
SQL Statements;
COMMIT;
END;`,
sql:`CREATE PROCEDURE TransferSalary
AS
BEGIN
BEGIN TRANSACTION;

UPDATE Employees
SET Salary=Salary+5000
WHERE EmployeeID=101;

COMMIT;
END;`,
keywordId:"TRANSACTION_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Safe Business Operations",
optimizationId:"TRANSACTION_PROCEDURE",
errorId:"TRANSACTION_PROCEDURE",
interviewId:"TRANSACTION_PROCEDURE",
interviewQuestions:["<b>Q:</b>Why use transactions inside Stored Procedures?<br><b>A:</b>To maintain data consistency.","<b>Q:</b>Can a procedure handle rollback?<br><b>A:</b>Yes."],
relatedTopics:["transaction procedure","stored procedure transaction","begin transaction","commit","rollback","sql procedure","database programming","sql interview","sql examples","procedure keyword","business logic","sql server","data consistency","sql"]
},

/*==================================
 STORED PROCEDURE WITH IF ELSE
==================================*/

{
id:226,
category:"SQL Stored Procedures",
subCategory:"IF ELSE Procedure",
difficulty:"Intermediate",
title:"Stored Procedure with IF ELSE",
shortDescription:"Use IF ELSE conditions inside Stored Procedures to apply business rules.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
IF Condition
BEGIN
SQL Statement
END
ELSE
BEGIN
SQL Statement
END
END;`,
sql:`CREATE PROCEDURE CheckSalary
@EmployeeID INT
AS
BEGIN

IF EXISTS
(
SELECT *
FROM Employees
WHERE EmployeeID=@EmployeeID
AND Salary>50000
)

SELECT 'High Salary Employee';

ELSE

SELECT 'Normal Salary Employee';

END;`,
keywordId:"IF_ELSE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Classification",
optimizationId:"IF_ELSE_PROCEDURE",
errorId:"IF_ELSE_PROCEDURE",
interviewId:"IF_ELSE_PROCEDURE",
interviewQuestions:["<b>Q:</b>Can IF ELSE be used inside Stored Procedures?<br><b>A:</b>Yes, it is used for conditional logic.","<b>Q:</b>Why use conditions in procedures?<br><b>A:</b>To implement business rules."],
relatedTopics:["if else procedure","stored procedure condition","conditional procedure","if statement","else statement","stored procedure","sql procedure","business logic","sql interview","database programming","sql examples","sql server","procedure keyword","sql"]
},

/*==================================
 STORED PROCEDURE WITH LOOP
==================================*/

{
id:227,
category:"SQL Stored Procedures",
subCategory:"Loop Procedure",
difficulty:"Advanced",
title:"Stored Procedure with LOOP",
shortDescription:"Loops inside Stored Procedures execute repeated operations.",
syntax:`WHILE Condition
BEGIN
SQL Statements;
END;`,
sql:`CREATE PROCEDURE UpdateSalary
AS
BEGIN

DECLARE @ID INT=1;

WHILE @ID<=10
BEGIN

UPDATE Employees
SET Salary=Salary+1000
WHERE EmployeeID=@ID;

SET @ID=@ID+1;

END;

END;`,
keywordId:"LOOP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Bulk Employee Updates",
optimizationId:"LOOP_PROCEDURE",
errorId:"LOOP_PROCEDURE",
interviewId:"LOOP_PROCEDURE",
interviewQuestions:["<b>Q:</b>Can loops be used in Stored Procedures?<br><b>A:</b>Yes, using WHILE loops.","<b>Q:</b>When should loops be avoided?<br><b>A:</b>When set-based SQL can solve the problem faster."],
relatedTopics:["loop procedure","while loop","stored procedure loop","repeat operation","bulk update","sql procedure","sql interview","database programming","sql examples","procedure keyword","sql server","business logic","sql"]
},

/*==================================
 STORED PROCEDURE ERROR HANDLING
==================================*/

{
id:228,
category:"SQL Stored Procedures",
subCategory:"Error Handling",
difficulty:"Advanced",
title:"Stored Procedure Error Handling",
shortDescription:"Handle runtime errors inside Stored Procedures using TRY CATCH.",
syntax:`BEGIN TRY
SQL Statements;
END TRY

BEGIN CATCH
Error Handling;
END CATCH;`,
sql:`CREATE PROCEDURE UpdateEmployee
AS
BEGIN

BEGIN TRY

UPDATE Employees
SET Salary=90000
WHERE EmployeeID=101;

END TRY

BEGIN CATCH

SELECT ERROR_MESSAGE();

END CATCH;

END;`,
keywordId:"PROCEDURE_ERROR_HANDLING",
sampleDataId:"Employees",
businessCaseId:"Reliable Database Applications",
optimizationId:"PROCEDURE_ERROR_HANDLING",
errorId:"PROCEDURE_ERROR_HANDLING",
interviewId:"PROCEDURE_ERROR_HANDLING",
interviewQuestions:["<b>Q:</b>How do you handle errors in Stored Procedures?<br><b>A:</b>Using TRY CATCH blocks.","<b>Q:</b>Why is error handling important?<br><b>A:</b>It prevents application failures."],
relatedTopics:["procedure error handling","try catch","stored procedure error","error handling","sql procedure","database programming","sql interview","sql examples","sql server","business logic","procedure keyword","sql"]
},

/*==================================
 STORED PROCEDURE SECURITY
==================================*/

{
id:229,
category:"SQL Stored Procedures",
subCategory:"Security",
difficulty:"Intermediate",
title:"Stored Procedure Security",
shortDescription:"Stored Procedures improve database security by controlling access to data.",
syntax:`GRANT EXECUTE
ON ProcedureName
TO UserName;`,
sql:`GRANT EXECUTE
ON GetEmployees
TO AnalystUser;`,
keywordId:"PROCEDURE_SECURITY",
sampleDataId:"Employees",
businessCaseId:"Controlled Data Access",
optimizationId:"PROCEDURE_SECURITY",
errorId:"PROCEDURE_SECURITY",
interviewId:"PROCEDURE_SECURITY",
interviewQuestions:["<b>Q:</b>How do Stored Procedures improve security?<br><b>A:</b>Users can access procedures without direct table permissions.","<b>Q:</b>Which permission executes a procedure?<br><b>A:</b>EXECUTE permission."],
relatedTopics:["stored procedure security","execute permission","grant execute","database security","stored procedure","sql procedure","sql interview","database programming","sql examples","access control","sql server","procedure keyword","sql"]
},

/*==================================
 STORED PROCEDURE BEST PRACTICES
==================================*/

{
id:230,
category:"SQL Stored Procedures",
subCategory:"Best Practices",
difficulty:"Intermediate",
title:"Stored Procedure Best Practices",
shortDescription:"Follow recommended practices to create efficient and maintainable Stored Procedures.",
syntax:`CREATE PROCEDURE
Use Parameters
Handle Errors
Optimize Queries`,
sql:`CREATE PROCEDURE GetActiveEmployees
AS
BEGIN

SELECT EmployeeName
FROM Employees
WHERE Status='Active';

END;`,
keywordId:"PROCEDURE_BEST_PRACTICES",
sampleDataId:"Employees",
businessCaseId:"Enterprise Database Development",
optimizationId:"PROCEDURE_BEST_PRACTICES",
errorId:"PROCEDURE_BEST_PRACTICES",
interviewId:"PROCEDURE_BEST_PRACTICES",
interviewQuestions:["<b>Q:</b>Name Stored Procedure best practices.<br><b>A:</b>Use parameters, avoid unnecessary queries and handle errors.","<b>Q:</b>Why optimize Stored Procedures?<br><b>A:</b>To improve application performance."],
relatedTopics:["stored procedure best practices","procedure optimization","stored procedure","sql procedure","performance tuning","sql interview","database programming","sql examples","procedure keyword","sql server","database design","business logic","sql"]
},

/*==================================
 SQL Views
==================================*/

{
id:231,
category:"SQL Views",
subCategory:"Introduction",
difficulty:"Beginner",
title:"SQL View",
shortDescription:"A View is a virtual table created from a SQL query.",
syntax:`CREATE VIEW ViewName AS
SELECT columns
FROM table_name;`,
sql:`CREATE VIEW EmployeeView AS
SELECT EmployeeName,Department,Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplified Reporting",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is a SQL View?<br><b>A:</b>A View is a virtual table based on a query.","<b>Q:</b>Does a View store data physically?<br><b>A:</b>No, it stores only the query definition."],
relatedTopics:["view","sql view","database view","virtual table","create view","reporting view","sql interview","database programming","sql examples","view keyword","database object","sql server","data abstraction","sql"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:232,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW",
shortDescription:"Create a new View to store a reusable SQL query.",
syntax:`CREATE VIEW ViewName AS
SELECT Query;`,
sql:`CREATE VIEW HighSalaryEmployees AS
SELECT EmployeeName,Salary
FROM Employees
WHERE Salary>50000;`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Reusable Employee Reports",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>Which command creates a View?<br><b>A:</b>CREATE VIEW.","<b>Q:</b>Can Views contain WHERE conditions?<br><b>A:</b>Yes."],
relatedTopics:["create view","view","sql view","virtual table","database object","employee report","sql interview","database programming","sql examples","view keyword","sql server","reporting","sql"]
},

/*==================================
 SELECT FROM VIEW
==================================*/

{
id:233,
category:"SQL Views",
subCategory:"Query View",
difficulty:"Beginner",
title:"Select Data From View",
shortDescription:"Retrieve data from a View using SELECT statement.",
syntax:`SELECT *
FROM ViewName;`,
sql:`SELECT *
FROM EmployeeView;`,
keywordId:"SELECT_VIEW",
sampleDataId:"Employees",
businessCaseId:"View Based Reporting",
optimizationId:"SELECT_VIEW",
errorId:"SELECT_VIEW",
interviewId:"SELECT_VIEW",
interviewQuestions:["<b>Q:</b>How do you access View data?<br><b>A:</b>Using SELECT statement.","<b>Q:</b>Can Views be queried like tables?<br><b>A:</b>Yes."],
relatedTopics:["select view","query view","view data","sql view","virtual table","database object","sql interview","database programming","sql examples","reporting view","sql server","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:234,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW",
shortDescription:"Modify the definition of an existing View.",
syntax:`ALTER VIEW ViewName AS
SELECT Query;`,
sql:`ALTER VIEW EmployeeView AS
SELECT EmployeeName,Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Update Existing Reports",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>It modifies an existing View.","<b>Q:</b>Does ALTER VIEW delete data?<br><b>A:</b>No."],
relatedTopics:["alter view","modify view","sql view","database object","report update","sql interview","database programming","sql examples","view keyword","sql server","sql"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:235,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW",
shortDescription:"Remove an existing View from the database.",
syntax:`DROP VIEW ViewName;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Old Reports",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>It removes a View definition.","<b>Q:</b>Does DROP VIEW delete table records?<br><b>A:</b>No."],
relatedTopics:["drop view","delete view","remove view","sql view","database object","sql interview","database programming","sql examples","view keyword","sql server","sql"]
},

/*==================================
 SQL Views WITH JOIN
==================================*/

{
id:236,
category:"SQL Views",
subCategory:"JOIN View",
difficulty:"Intermediate",
title:"View With JOIN",
shortDescription:"Create a View by combining multiple tables using JOIN.",
syntax:`CREATE VIEW ViewName AS
SELECT columns
FROM Table1
JOIN Table2;`,
sql:`CREATE VIEW EmployeeDepartmentView AS
SELECT 
e.EmployeeName,
d.DepartmentName
FROM Employees e
JOIN Departments d
ON e.DepartmentID=d.DepartmentID;`,
keywordId:"JOIN_VIEW",
sampleDataId:"Employees",
businessCaseId:"Combined Employee Department Report",
optimizationId:"JOIN_VIEW",
errorId:"JOIN_VIEW",
interviewId:"JOIN_VIEW",
interviewQuestions:["<b>Q:</b>Can Views contain JOIN operations?<br><b>A:</b>Yes, Views can combine multiple tables.","<b>Q:</b>Why use JOIN Views?<br><b>A:</b>To simplify complex reporting queries."],
relatedTopics:["join view","view with join","sql view","inner join","multiple tables","database view","reporting view","sql interview","database programming","sql examples","view keyword","sql server","sql"]
},

/*==================================
 SQL VIEW WITH WHERE
==================================*/

{
id:237,
category:"SQL Views",
subCategory:"Filtered View",
difficulty:"Intermediate",
title:"Filtered View",
shortDescription:"A View can include WHERE conditions to show specific records.",
syntax:`CREATE VIEW ViewName AS
SELECT *
FROM TableName
WHERE Condition;`,
sql:`CREATE VIEW ActiveEmployees AS
SELECT *
FROM Employees
WHERE Status='Active';`,
keywordId:"FILTERED_VIEW",
sampleDataId:"Employees",
businessCaseId:"Active Employee Reporting",
optimizationId:"FILTERED_VIEW",
errorId:"FILTERED_VIEW",
interviewId:"FILTERED_VIEW",
interviewQuestions:["<b>Q:</b>Can a View contain filters?<br><b>A:</b>Yes, WHERE conditions can be used.","<b>Q:</b>Why create filtered Views?<br><b>A:</b>To show only required data."],
relatedTopics:["filtered view","where view","sql view","view condition","active employee","database view","reporting","sql interview","database programming","sql examples","view keyword","sql server","sql"]
},

/*==================================
 INDEXED VIEW
==================================*/

{
id:238,
category:"SQL Views",
subCategory:"Indexed View",
difficulty:"Advanced",
title:"Indexed View",
shortDescription:"An Indexed View stores calculated results physically to improve performance.",
syntax:`CREATE UNIQUE CLUSTERED INDEX
IndexName
ON ViewName(Column);`,
sql:`CREATE UNIQUE CLUSTERED INDEX IX_EmployeeView
ON EmployeeSummary(EmployeeID);`,
keywordId:"INDEXED_VIEW",
sampleDataId:"Employees",
businessCaseId:"High Performance Reporting",
optimizationId:"INDEXED_VIEW",
errorId:"INDEXED_VIEW",
interviewId:"INDEXED_VIEW",
interviewQuestions:["<b>Q:</b>What is an Indexed View?<br><b>A:</b>A View with a physical index created on it.","<b>Q:</b>Why use Indexed Views?<br><b>A:</b>To improve performance of complex queries."],
relatedTopics:["indexed view","materialized view","view index","sql view","performance optimization","database object","sql interview","database programming","sql examples","view keyword","sql server","reporting performance","sql"]
},

/*==================================
 VIEW SECURITY
==================================*/

{
id:239,
category:"SQL Views",
subCategory:"Security",
difficulty:"Intermediate",
title:"View Security",
shortDescription:"Views can restrict users from accessing sensitive columns and rows.",
syntax:`GRANT SELECT
ON ViewName
TO UserName;`,
sql:`GRANT SELECT
ON EmployeeView
TO AnalystUser;`,
keywordId:"VIEW_SECURITY",
sampleDataId:"Employees",
businessCaseId:"Controlled Data Access",
optimizationId:"VIEW_SECURITY",
errorId:"VIEW_SECURITY",
interviewId:"VIEW_SECURITY",
interviewQuestions:["<b>Q:</b>How do Views improve security?<br><b>A:</b>They expose only required data.","<b>Q:</b>Can Views hide columns?<br><b>A:</b>Yes."],
relatedTopics:["view security","secure view","grant select","database security","sql view","access control","sql interview","database programming","sql examples","view keyword","sql server","data protection","sql"]
},

/*==================================
 VIEW BEST PRACTICES
==================================*/

{
id:240,
category:"SQL Views",
subCategory:"Best Practices",
difficulty:"Intermediate",
title:"View Best Practices",
shortDescription:"Recommended practices for creating efficient and maintainable Views.",
syntax:`CREATE VIEW
Use Required Columns
Avoid Complex Logic`,
sql:`CREATE VIEW EmployeeReport AS
SELECT EmployeeName,Department
FROM Employees;`,
keywordId:"VIEW_BEST_PRACTICES",
sampleDataId:"Employees",
businessCaseId:"Enterprise Reporting Standards",
optimizationId:"VIEW_BEST_PRACTICES",
errorId:"VIEW_BEST_PRACTICES",
interviewId:"VIEW_BEST_PRACTICES",
interviewQuestions:["<b>Q:</b>Name View best practices.<br><b>A:</b>Use required columns and avoid unnecessary complexity.","<b>Q:</b>Why optimize Views?<br><b>A:</b>To improve query performance and maintainability."],
relatedTopics:["view best practices","view optimization","sql view","database view","performance tuning","sql interview","database programming","sql examples","view keyword","sql server","reporting","sql"]
},

/*==================================
 SQL Functions
==================================*/

{
id:241,
category:"SQL Functions",
subCategory:"Introduction",
difficulty:"Beginner",
title:"SQL Function",
shortDescription:"A SQL Function is a reusable block of SQL logic that returns a value.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary * 12;
END;`,
keywordId:"FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Calculations",
optimizationId:"FUNCTION",
errorId:"FUNCTION",
interviewId:"FUNCTION",
interviewQuestions:["<b>Q:</b>What is a SQL Function?<br><b>A:</b>A reusable SQL program that returns a value.","<b>Q:</b>Why use Functions?<br><b>A:</b>To reuse calculations and logic."],
relatedTopics:["function","sql function","database function","create function","scalar function","table function","sql interview","database programming","sql examples","function keyword","sql server","reusable logic","sql"]
},

/*==================================
 CREATE FUNCTION
==================================*/

{
id:242,
category:"SQL Functions",
subCategory:"CREATE FUNCTION",
difficulty:"Beginner",
title:"CREATE FUNCTION",
shortDescription:"Create a new user-defined SQL Function.",
syntax:`CREATE FUNCTION FunctionName
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION CalculateBonus
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary * 10 / 100;
END;`,
keywordId:"CREATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Bonus Calculation",
optimizationId:"CREATE_FUNCTION",
errorId:"CREATE_FUNCTION",
interviewId:"CREATE_FUNCTION",
interviewQuestions:["<b>Q:</b>Which command creates a Function?<br><b>A:</b>CREATE FUNCTION.","<b>Q:</b>Can Functions accept parameters?<br><b>A:</b>Yes."],
relatedTopics:["create function","sql function","user defined function","udf","database object","sql interview","database programming","sql examples","function keyword","sql server","calculation","sql"]
},

/*==================================
 SCALAR FUNCTION
==================================*/

{
id:243,
category:"SQL Functions",
subCategory:"Scalar Function",
difficulty:"Intermediate",
title:"Scalar Function",
shortDescription:"A Scalar Function returns a single value after processing input.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS datatype`,
sql:`CREATE FUNCTION GetTax
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*5/100;
END;`,
keywordId:"SCALAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Salary Tax Calculation",
optimizationId:"SCALAR_FUNCTION",
errorId:"SCALAR_FUNCTION",
interviewId:"SCALAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does a Scalar Function return?<br><b>A:</b>A single value.","<b>Q:</b>Where can Scalar Functions be used?<br><b>A:</b>SELECT statements and expressions."],
relatedTopics:["scalar function","single value function","sql function","udf","calculation","sql interview","database programming","sql examples","function keyword","sql server","business calculation","sql"]
},

/*==================================
 TABLE VALUED FUNCTION
==================================*/

{
id:244,
category:"SQL Functions",
subCategory:"Table Valued Function",
difficulty:"Advanced",
title:"Table Valued Function",
shortDescription:"A Table Valued Function returns a table as output.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS TABLE
AS
RETURN
(
SELECT Query
);`,
sql:`CREATE FUNCTION GetEmployees()
RETURNS TABLE
AS
RETURN
(
SELECT *
FROM Employees
);`,
keywordId:"TABLE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Employee Dataset",
optimizationId:"TABLE_FUNCTION",
errorId:"TABLE_FUNCTION",
interviewId:"TABLE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does a Table Valued Function return?<br><b>A:</b>A table result set.","<b>Q:</b>Can Table Functions be joined?<br><b>A:</b>Yes."],
relatedTopics:["table valued function","table function","tvf","sql function","return table","sql interview","database programming","sql examples","function keyword","sql server","dataset function","sql"]
},

/*==================================
 INLINE TABLE FUNCTION
==================================*/

{
id:245,
category:"SQL Functions",
subCategory:"Inline Table Function",
difficulty:"Advanced",
title:"Inline Table Function",
shortDescription:"An Inline Table Function returns a table using a single SELECT statement.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS TABLE
AS
RETURN
(
SELECT Statement
);`,
sql:`CREATE FUNCTION GetITEmployees()
RETURNS TABLE
AS
RETURN
(
SELECT *
FROM Employees
WHERE Department='IT'
);`,
keywordId:"INLINE_TABLE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Department Wise Reporting",
optimizationId:"INLINE_TABLE_FUNCTION",
errorId:"INLINE_TABLE_FUNCTION",
interviewId:"INLINE_TABLE_FUNCTION",
interviewQuestions:["<b>Q:</b>What is Inline Table Function?<br><b>A:</b>A table function containing a single SELECT statement.","<b>Q:</b>Is Inline Function faster than Multi Statement Function?<br><b>A:</b>Generally yes."],
relatedTopics:["inline table function","inline function","table valued function","sql function","department report","sql interview","database programming","sql examples","function keyword","sql server","udf","sql"]
},

/*==================================
 MULTI STATEMENT TABLE FUNCTION
==================================*/

{
id:246,
category:"SQL Functions",
subCategory:"Multi Statement Table Function",
difficulty:"Advanced",
title:"Multi Statement Table Function",
shortDescription:"A Multi Statement Table Function allows multiple SQL statements before returning a table.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS @Table TABLE
(
Column Definitions
)
AS
BEGIN
SQL Statements;
RETURN;
END;`,
sql:`CREATE FUNCTION GetHighSalaryEmployees()
RETURNS @EmployeeTable TABLE
(
EmployeeName VARCHAR(100),
Salary INT
)
AS
BEGIN

INSERT INTO @EmployeeTable
SELECT EmployeeName,Salary
FROM Employees
WHERE Salary>50000;

RETURN;

END;`,
keywordId:"MULTI_STATEMENT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Complex Employee Data Processing",
optimizationId:"MULTI_STATEMENT_FUNCTION",
errorId:"MULTI_STATEMENT_FUNCTION",
interviewId:"MULTI_STATEMENT_FUNCTION",
interviewQuestions:["<b>Q:</b>What is Multi Statement Table Function?<br><b>A:</b>A function that builds and returns a table using multiple statements.","<b>Q:</b>When should it be used?<br><b>A:</b>When complex logic is required before returning data."],
relatedTopics:["multi statement function","table function","tvf","sql function","user defined function","sql interview","database programming","sql examples","function keyword","sql server","complex logic","sql"]
},

/*==================================
 ALTER FUNCTION
==================================*/

{
id:247,
category:"SQL Functions",
subCategory:"ALTER FUNCTION",
difficulty:"Intermediate",
title:"ALTER FUNCTION",
shortDescription:"Modify an existing SQL Function definition.",
syntax:`ALTER FUNCTION FunctionName()
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`ALTER FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*12;
END;`,
keywordId:"ALTER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Update Calculation Logic",
optimizationId:"ALTER_FUNCTION",
errorId:"ALTER_FUNCTION",
interviewId:"ALTER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ALTER FUNCTION do?<br><b>A:</b>It modifies an existing function.","<b>Q:</b>Does ALTER FUNCTION remove data?<br><b>A:</b>No."],
relatedTopics:["alter function","modify function","sql function","database object","udf","sql interview","database programming","sql examples","function keyword","sql server","function update","sql"]
},

/*==================================
 DROP FUNCTION
==================================*/

{
id:248,
category:"SQL Functions",
subCategory:"DROP FUNCTION",
difficulty:"Beginner",
title:"DROP FUNCTION",
shortDescription:"Remove an existing Function from the database.",
syntax:`DROP FUNCTION FunctionName;`,
sql:`DROP FUNCTION GetAnnualSalary;`,
keywordId:"DROP_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Logic",
optimizationId:"DROP_FUNCTION",
errorId:"DROP_FUNCTION",
interviewId:"DROP_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DROP FUNCTION do?<br><b>A:</b>It removes a function definition.","<b>Q:</b>Does DROP FUNCTION delete table data?<br><b>A:</b>No."],
relatedTopics:["drop function","delete function","remove function","sql function","database object","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 BUILT IN FUNCTIONS
==================================*/

{
id:249,
category:"SQL Functions",
subCategory:"Built In Functions",
difficulty:"Beginner",
title:"Built In Functions",
shortDescription:"SQL provides predefined functions for calculations and data manipulation.",
syntax:`SELECT FUNCTION(column)
FROM table_name;`,
sql:`SELECT 
COUNT(*) AS EmployeeCount,
AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"BUILT_IN_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Analytics",
optimizationId:"BUILT_IN_FUNCTION",
errorId:"BUILT_IN_FUNCTION",
interviewId:"BUILT_IN_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Built In Functions?<br><b>A:</b>Predefined SQL functions available for common operations.","<b>Q:</b>Name SQL function categories.<br><b>A:</b>Aggregate, String, Date and Mathematical functions."],
relatedTopics:["built in function","sql functions","aggregate function","string function","date function","math function","sql interview","database programming","sql examples","function keyword","sql server","analytics","sql"]
},

/*==================================
 AGGREGATE FUNCTIONS
==================================*/

{
id:250,
category:"SQL Functions",
subCategory:"Aggregate Functions",
difficulty:"Beginner",
title:"Aggregate Functions",
shortDescription:"Aggregate Functions perform calculations on multiple rows and return one result.",
syntax:`SELECT
FUNCTION(column)
FROM table_name;`,
sql:`SELECT
COUNT(*) AS TotalEmployees,
SUM(Salary) AS TotalSalary,
AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"AGGREGATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Summary Reports",
optimizationId:"AGGREGATE_FUNCTION",
errorId:"AGGREGATE_FUNCTION",
interviewId:"AGGREGATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Aggregate Functions?<br><b>A:</b>Functions that perform calculations across multiple rows.","<b>Q:</b>Name common Aggregate Functions.<br><b>A:</b>COUNT, SUM, AVG, MIN and MAX."],
relatedTopics:["aggregate function","count","sum","avg","min","max","sql function","group by","sql interview","database programming","sql examples","function keyword","sql server","reporting","sql"]
},
/*==================================
 COUNT FUNCTION
==================================*/

{
id:251,
category:"SQL Functions",
subCategory:"COUNT Function",
difficulty:"Beginner",
title:"COUNT Function",
shortDescription:"COUNT returns the number of rows or non-null values in a column.",
syntax:`SELECT COUNT(column_name)
FROM table_name;`,
sql:`SELECT COUNT(*) AS TotalEmployees
FROM Employees;`,
keywordId:"COUNT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Count Report",
optimizationId:"COUNT_FUNCTION",
errorId:"COUNT_FUNCTION",
interviewId:"COUNT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does COUNT return?<br><b>A:</b>The number of rows or non-null values.","<b>Q:</b>Difference between COUNT(*) and COUNT(column)?<br><b>A:</b>COUNT(*) counts rows, COUNT(column) ignores NULL values."],
relatedTopics:["count function","count","row count","sql function","aggregate function","employee count","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 SUM FUNCTION
==================================*/

{
id:252,
category:"SQL Functions",
subCategory:"SUM Function",
difficulty:"Beginner",
title:"SUM Function",
shortDescription:"SUM calculates the total value of a numeric column.",
syntax:`SELECT SUM(column_name)
FROM table_name;`,
sql:`SELECT SUM(Salary) AS TotalSalary
FROM Employees;`,
keywordId:"SUM_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Total Salary Calculation",
optimizationId:"SUM_FUNCTION",
errorId:"SUM_FUNCTION",
interviewId:"SUM_FUNCTION",
interviewQuestions:["<b>Q:</b>What does SUM function do?<br><b>A:</b>It calculates the total of numeric values.","<b>Q:</b>Can SUM work with text columns?<br><b>A:</b>No."],
relatedTopics:["sum function","sum","total salary","aggregate function","sql function","salary calculation","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 AVG FUNCTION
==================================*/

{
id:253,
category:"SQL Functions",
subCategory:"AVG Function",
difficulty:"Beginner",
title:"AVG Function",
shortDescription:"AVG calculates the average value of a numeric column.",
syntax:`SELECT AVG(column_name)
FROM table_name;`,
sql:`SELECT AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"AVG_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Average Salary Analysis",
optimizationId:"AVG_FUNCTION",
errorId:"AVG_FUNCTION",
interviewId:"AVG_FUNCTION",
interviewQuestions:["<b>Q:</b>What does AVG function return?<br><b>A:</b>The average value of numeric data.","<b>Q:</b>Does AVG ignore NULL values?<br><b>A:</b>Yes."],
relatedTopics:["avg function","average function","average salary","aggregate function","sql function","salary analysis","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 MIN FUNCTION
==================================*/

{
id:254,
category:"SQL Functions",
subCategory:"MIN Function",
difficulty:"Beginner",
title:"MIN Function",
shortDescription:"MIN returns the smallest value from a column.",
syntax:`SELECT MIN(column_name)
FROM table_name;`,
sql:`SELECT MIN(Salary) AS LowestSalary
FROM Employees;`,
keywordId:"MIN_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Minimum Salary Analysis",
optimizationId:"MIN_FUNCTION",
errorId:"MIN_FUNCTION",
interviewId:"MIN_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MIN function return?<br><b>A:</b>The lowest value.","<b>Q:</b>Can MIN work on dates?<br><b>A:</b>Yes, it can return earliest date."],
relatedTopics:["min function","minimum value","lowest salary","aggregate function","sql function","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 MAX FUNCTION
==================================*/

{
id:255,
category:"SQL Functions",
subCategory:"MAX Function",
difficulty:"Beginner",
title:"MAX Function",
shortDescription:"MAX returns the highest value from a column.",
syntax:`SELECT MAX(column_name)
FROM table_name;`,
sql:`SELECT MAX(Salary) AS HighestSalary
FROM Employees;`,
keywordId:"MAX_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Highest Salary Analysis",
optimizationId:"MAX_FUNCTION",
errorId:"MAX_FUNCTION",
interviewId:"MAX_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MAX function return?<br><b>A:</b>The highest value.","<b>Q:</b>Can MAX work with dates?<br><b>A:</b>Yes, it returns latest date."],
relatedTopics:["max function","maximum value","highest salary","aggregate function","sql function","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 STRING FUNCTIONS
==================================*/

{
id:256,
category:"SQL Functions",
subCategory:"String Functions",
difficulty:"Beginner",
title:"String Functions",
shortDescription:"String Functions manipulate and transform text values.",
syntax:`SELECT FUNCTION(column_name)
FROM table_name;`,
sql:`SELECT 
UPPER(EmployeeName) AS EmployeeName
FROM Employees;`,
keywordId:"STRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Name Formatting",
optimizationId:"STRING_FUNCTION",
errorId:"STRING_FUNCTION",
interviewId:"STRING_FUNCTION",
interviewQuestions:["<b>Q:</b>What are String Functions?<br><b>A:</b>Functions used to modify and analyze text data.","<b>Q:</b>Name common String Functions.<br><b>A:</b>UPPER, LOWER, LEN, CONCAT and SUBSTRING."],
relatedTopics:["string function","text function","upper","lower","concat","substring","sql function","sql interview","database programming","sql examples","function keyword","data formatting","sql"]
},

/*==================================
 UPPER FUNCTION
==================================*/

{
id:257,
category:"SQL Functions",
subCategory:"UPPER Function",
difficulty:"Beginner",
title:"UPPER Function",
shortDescription:"UPPER converts text values into uppercase letters.",
syntax:`SELECT UPPER(column_name)
FROM table_name;`,
sql:`SELECT 
UPPER(EmployeeName) AS EmployeeName
FROM Employees;`,
keywordId:"UPPER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Standardize Employee Names",
optimizationId:"UPPER_FUNCTION",
errorId:"UPPER_FUNCTION",
interviewId:"UPPER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does UPPER function do?<br><b>A:</b>Converts lowercase characters into uppercase.","<b>Q:</b>Where is UPPER used?<br><b>A:</b>Data cleaning and formatting."],
relatedTopics:["upper function","uppercase","convert text","string function","sql function","data cleaning","sql interview","database programming","sql examples","function keyword","sql"]
},

/*==================================
 LOWER FUNCTION
==================================*/

{
id:258,
category:"SQL Functions",
subCategory:"LOWER Function",
difficulty:"Beginner",
title:"LOWER Function",
shortDescription:"LOWER converts text values into lowercase letters.",
syntax:`SELECT LOWER(column_name)
FROM table_name;`,
sql:`SELECT 
LOWER(EmployeeName) AS EmployeeName
FROM Employees;`,
keywordId:"LOWER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Normalize Text Data",
optimizationId:"LOWER_FUNCTION",
errorId:"LOWER_FUNCTION",
interviewId:"LOWER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LOWER function do?<br><b>A:</b>Converts uppercase characters into lowercase.","<b>Q:</b>Why use LOWER?<br><b>A:</b>For consistent text comparison."],
relatedTopics:["lower function","lowercase","convert text","string function","sql function","data cleaning","sql interview","database programming","sql examples","function keyword","sql"]
},

/*==================================
 LEN FUNCTION
==================================*/

{
id:259,
category:"SQL Functions",
subCategory:"LEN Function",
difficulty:"Beginner",
title:"LEN Function",
shortDescription:"LEN returns the number of characters in a text value.",
syntax:`SELECT LEN(column_name)
FROM table_name;`,
sql:`SELECT 
EmployeeName,
LEN(EmployeeName) AS NameLength
FROM Employees;`,
keywordId:"LEN_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Validate Text Length",
optimizationId:"LEN_FUNCTION",
errorId:"LEN_FUNCTION",
interviewId:"LEN_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LEN function return?<br><b>A:</b>The number of characters in a string.","<b>Q:</b>Where is LEN useful?<br><b>A:</b>Data validation and quality checks."],
relatedTopics:["len function","length function","string length","text validation","string function","sql function","sql interview","database programming","sql examples","function keyword","data quality","sql"]
},

/*==================================
 CONCAT FUNCTION
==================================*/

{
id:260,
category:"SQL Functions",
subCategory:"CONCAT Function",
difficulty:"Beginner",
title:"CONCAT Function",
shortDescription:"CONCAT joins two or more text values into one string.",
syntax:`SELECT CONCAT(value1,value2);`,
sql:`SELECT 
CONCAT(EmployeeName,' - ',Department)
AS EmployeeDetails
FROM Employees;`,
keywordId:"CONCAT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Create Combined Employee Information",
optimizationId:"CONCAT_FUNCTION",
errorId:"CONCAT_FUNCTION",
interviewId:"CONCAT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CONCAT do?<br><b>A:</b>Combines multiple strings into one value.","<b>Q:</b>What is an alternative to CONCAT?<br><b>A:</b>String concatenation operator."],
relatedTopics:["concat function","concatenate","combine text","string function","sql function","employee details","sql interview","database programming","sql examples","function keyword","sql"]
},
/*==================================
 SUBSTRING FUNCTION
==================================*/

{
id:261,
category:"SQL Functions",
subCategory:"SUBSTRING Function",
difficulty:"Beginner",
title:"SUBSTRING Function",
shortDescription:"SUBSTRING extracts a specific part of a text value.",
syntax:`SELECT SUBSTRING(
column_name,
start_position,
length
)
FROM table_name;`,
sql:`SELECT 
SUBSTRING(EmployeeName,1,5)
AS ShortName
FROM Employees;`,
keywordId:"SUBSTRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Text Information",
optimizationId:"SUBSTRING_FUNCTION",
errorId:"SUBSTRING_FUNCTION",
interviewId:"SUBSTRING_FUNCTION",
interviewQuestions:["<b>Q:</b>What does SUBSTRING do?<br><b>A:</b>Extracts characters from a string.","<b>Q:</b>Where is SUBSTRING used?<br><b>A:</b>Text extraction and data cleaning."],
relatedTopics:["substring function","extract text","string function","text manipulation","sql function","sql interview","database programming","sql examples","function keyword","data cleaning","sql"]
},

/*==================================
 REPLACE FUNCTION
==================================*/

{
id:262,
category:"SQL Functions",
subCategory:"REPLACE Function",
difficulty:"Beginner",
title:"REPLACE Function",
shortDescription:"REPLACE substitutes existing text with new text.",
syntax:`SELECT REPLACE(
column_name,
old_value,
new_value
)
FROM table_name;`,
sql:`SELECT 
REPLACE(Department,'IT','Technology')
AS DepartmentName
FROM Employees;`,
keywordId:"REPLACE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Correct Text Values",
optimizationId:"REPLACE_FUNCTION",
errorId:"REPLACE_FUNCTION",
interviewId:"REPLACE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does REPLACE function do?<br><b>A:</b>Replaces characters or words inside text.","<b>Q:</b>Is REPLACE permanent?<br><b>A:</b>No, unless used in UPDATE statement."],
relatedTopics:["replace function","replace text","string function","data cleaning","sql function","sql interview","database programming","sql examples","function keyword","text correction","sql"]
},

/*==================================
 TRIM FUNCTION
==================================*/

{
id:263,
category:"SQL Functions",
subCategory:"TRIM Function",
difficulty:"Beginner",
title:"TRIM Function",
shortDescription:"TRIM removes unwanted spaces from text values.",
syntax:`SELECT TRIM(column_name)
FROM table_name;`,
sql:`SELECT 
TRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"TRIM_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Clean Customer Data",
optimizationId:"TRIM_FUNCTION",
errorId:"TRIM_FUNCTION",
interviewId:"TRIM_FUNCTION",
interviewQuestions:["<b>Q:</b>Why use TRIM?<br><b>A:</b>To remove extra spaces from text data.","<b>Q:</b>Where is TRIM commonly used?<br><b>A:</b>Data cleaning before reporting."],
relatedTopics:["trim function","remove spaces","clean text","string function","sql function","data quality","sql interview","database programming","sql examples","function keyword","sql"]
},

/*==================================
 LEFT FUNCTION
==================================*/

{
id:264,
category:"SQL Functions",
subCategory:"LEFT Function",
difficulty:"Beginner",
title:"LEFT Function",
shortDescription:"LEFT returns characters from the beginning of a string.",
syntax:`SELECT LEFT(
column_name,
number_of_characters
)
FROM table_name;`,
sql:`SELECT 
LEFT(EmployeeName,3)
AS FirstCharacters
FROM Employees;`,
keywordId:"LEFT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Prefix Information",
optimizationId:"LEFT_FUNCTION",
errorId:"LEFT_FUNCTION",
interviewId:"LEFT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LEFT function return?<br><b>A:</b>Characters from the left side of text.","<b>Q:</b>Where is LEFT used?<br><b>A:</b>Extracting codes and prefixes."],
relatedTopics:["left function","extract first characters","string function","text extraction","sql function","sql interview","database programming","sql examples","function keyword","sql"]
},

/*==================================
 RIGHT FUNCTION
==================================*/

{
id:265,
category:"SQL Functions",
subCategory:"RIGHT Function",
difficulty:"Beginner",
title:"RIGHT Function",
shortDescription:"RIGHT returns characters from the end of a string.",
syntax:`SELECT RIGHT(
column_name,
number_of_characters
)
FROM table_name;`,
sql:`SELECT 
RIGHT(EmployeeName,3)
AS LastCharacters
FROM Employees;`,
keywordId:"RIGHT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Suffix Information",
optimizationId:"RIGHT_FUNCTION",
errorId:"RIGHT_FUNCTION",
interviewId:"RIGHT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does RIGHT function return?<br><b>A:</b>Characters from the right side of text.","<b>Q:</b>Where is RIGHT used?<br><b>A:</b>Extracting suffixes and ending codes."],
relatedTopics:["right function","extract last characters","string function","text extraction","sql function","sql interview","database programming","sql examples","function keyword","sql"]
},

/*==================================
 DATE FUNCTIONS
==================================*/

{
id:266,
category:"SQL Functions",
subCategory:"Date Functions",
difficulty:"Beginner",
title:"Date Functions",
shortDescription:"Date Functions perform calculations and formatting on date values.",
syntax:`SELECT FUNCTION(date_column)
FROM table_name;`,
sql:`SELECT 
GETDATE() AS CurrentDate;`,
keywordId:"DATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Date Based Reporting",
optimizationId:"DATE_FUNCTION",
errorId:"DATE_FUNCTION",
interviewId:"DATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Date Functions?<br><b>A:</b>Functions used to manipulate date and time values.","<b>Q:</b>Name common Date Functions.<br><b>A:</b>GETDATE, DATEADD, DATEDIFF and YEAR."],
relatedTopics:["date function","sql date","date calculation","getdate","dateadd","datediff","sql function","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 GETDATE FUNCTION
==================================*/

{
id:267,
category:"SQL Functions",
subCategory:"GETDATE Function",
difficulty:"Beginner",
title:"GETDATE Function",
shortDescription:"GETDATE returns the current system date and time.",
syntax:`SELECT GETDATE();`,
sql:`SELECT 
GETDATE() AS CurrentDateTime;`,
keywordId:"GETDATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Current Date Reporting",
optimizationId:"GETDATE_FUNCTION",
errorId:"GETDATE_FUNCTION",
interviewId:"GETDATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does GETDATE return?<br><b>A:</b>Current system date and time.","<b>Q:</b>Where is GETDATE used?<br><b>A:</b>Audit columns and date calculations."],
relatedTopics:["getdate","current date","current time","date function","sql date","sql function","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 DATEADD FUNCTION
==================================*/

{
id:268,
category:"SQL Functions",
subCategory:"DATEADD Function",
difficulty:"Intermediate",
title:"DATEADD Function",
shortDescription:"DATEADD adds a specified time interval to a date value.",
syntax:`DATEADD(
datepart,
number,
date
)`,
sql:`SELECT 
DATEADD(YEAR,1,JoiningDate)
AS NextYear
FROM Employees;`,
keywordId:"DATEADD_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Future Date Calculation",
optimizationId:"DATEADD_FUNCTION",
errorId:"DATEADD_FUNCTION",
interviewId:"DATEADD_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DATEADD do?<br><b>A:</b>Adds days, months or years to a date.","<b>Q:</b>Where is DATEADD used?<br><b>A:</b>Expiry dates and schedule calculation."],
relatedTopics:["dateadd","add date","date calculation","date function","sql function","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 DATEDIFF FUNCTION
==================================*/

{
id:269,
category:"SQL Functions",
subCategory:"DATEDIFF Function",
difficulty:"Intermediate",
title:"DATEDIFF Function",
shortDescription:"DATEDIFF calculates the difference between two dates.",
syntax:`DATEDIFF(
datepart,
start_date,
end_date
)`,
sql:`SELECT 
DATEDIFF(YEAR,JoiningDate,GETDATE())
AS Experience
FROM Employees;`,
keywordId:"DATEDIFF_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Experience Calculation",
optimizationId:"DATEDIFF_FUNCTION",
errorId:"DATEDIFF_FUNCTION",
interviewId:"DATEDIFF_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DATEDIFF return?<br><b>A:</b>The difference between two dates.","<b>Q:</b>Where is DATEDIFF used?<br><b>A:</b>Age, experience and duration calculation."],
relatedTopics:["datediff","date difference","experience calculation","date function","sql function","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 YEAR FUNCTION
==================================*/

{
id:270,
category:"SQL Functions",
subCategory:"YEAR Function",
difficulty:"Beginner",
title:"YEAR Function",
shortDescription:"YEAR extracts the year portion from a date.",
syntax:`SELECT YEAR(date_column)
FROM table_name;`,
sql:`SELECT 
YEAR(JoiningDate)
AS JoiningYear
FROM Employees;`,
keywordId:"YEAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Year Wise Analysis",
optimizationId:"YEAR_FUNCTION",
errorId:"YEAR_FUNCTION",
interviewId:"YEAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does YEAR function return?<br><b>A:</b>The year part of a date.","<b>Q:</b>Where is YEAR used?<br><b>A:</b>Year wise reports and filtering."],
relatedTopics:["year function","extract year","date function","year wise report","sql function","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 MONTH FUNCTION
==================================*/

{
id:271,
category:"SQL Functions",
subCategory:"MONTH Function",
difficulty:"Beginner",
title:"MONTH Function",
shortDescription:"MONTH extracts the month number from a date value.",
syntax:`SELECT MONTH(date_column)
FROM table_name;`,
sql:`SELECT
EmployeeName,
MONTH(JoiningDate) AS JoiningMonth
FROM Employees;`,
keywordId:"MONTH_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Monthly Employee Analysis",
optimizationId:"MONTH_FUNCTION",
errorId:"MONTH_FUNCTION",
interviewId:"MONTH_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MONTH function return?<br><b>A:</b>The month number from a date.","<b>Q:</b>Where is MONTH used?<br><b>A:</b>Monthly reporting and grouping."],
relatedTopics:["month function","extract month","date function","monthly report","sql function","sql interview","database programming","sql examples","function keyword","date analysis","sql"]
},

/*==================================
 DAY FUNCTION
==================================*/

{
id:272,
category:"SQL Functions",
subCategory:"DAY Function",
difficulty:"Beginner",
title:"DAY Function",
shortDescription:"DAY extracts the day number from a date value.",
syntax:`SELECT DAY(date_column)
FROM table_name;`,
sql:`SELECT
EmployeeName,
DAY(JoiningDate) AS JoiningDay
FROM Employees;`,
keywordId:"DAY_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Daily Date Analysis",
optimizationId:"DAY_FUNCTION",
errorId:"DAY_FUNCTION",
interviewId:"DAY_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DAY function return?<br><b>A:</b>The day part of a date.","<b>Q:</b>Where is DAY used?<br><b>A:</b>Daily reports and date filtering."],
relatedTopics:["day function","extract day","date function","daily report","sql function","sql interview","database programming","sql examples","function keyword","date analysis","sql"]
},

/*==================================
 DATEPART FUNCTION
==================================*/

{
id:273,
category:"SQL Functions",
subCategory:"DATEPART Function",
difficulty:"Intermediate",
title:"DATEPART Function",
shortDescription:"DATEPART extracts a specific part of a date value.",
syntax:`DATEPART(
datepart,
date
)`,
sql:`SELECT
DATEPART(YEAR,JoiningDate)
AS JoiningYear
FROM Employees;`,
keywordId:"DATEPART_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Advanced Date Reporting",
optimizationId:"DATEPART_FUNCTION",
errorId:"DATEPART_FUNCTION",
interviewId:"DATEPART_FUNCTION",
interviewQuestions:["<b>Q:</b>What is DATEPART?<br><b>A:</b>A function used to extract specific date components.","<b>Q:</b>How is DATEPART different from YEAR?<br><b>A:</b>DATEPART can extract many date parts."],
relatedTopics:["datepart","date extraction","date function","sql date","sql function","sql interview","database programming","sql examples","function keyword","reporting","sql"]
},

/*==================================
 ISDATE FUNCTION
==================================*/

{
id:274,
category:"SQL Functions",
subCategory:"ISDATE Function",
difficulty:"Intermediate",
title:"ISDATE Function",
shortDescription:"ISDATE checks whether an expression contains a valid date.",
syntax:`SELECT ISDATE(expression);`,
sql:`SELECT
ISDATE('2026-01-01')
AS ValidDate;`,
keywordId:"ISDATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Date Validation",
optimizationId:"ISDATE_FUNCTION",
errorId:"ISDATE_FUNCTION",
interviewId:"ISDATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ISDATE return?<br><b>A:</b>It returns whether a value is a valid date.","<b>Q:</b>Where is ISDATE useful?<br><b>A:</b>Data quality validation."],
relatedTopics:["isdate","date validation","date function","data quality","sql function","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 EOMONTH FUNCTION
==================================*/

{
id:275,
category:"SQL Functions",
subCategory:"EOMONTH Function",
difficulty:"Intermediate",
title:"EOMONTH Function",
shortDescription:"EOMONTH returns the last day of a month.",
syntax:`EOMONTH(
start_date
)`,
sql:`SELECT
EOMONTH(GETDATE())
AS MonthEndDate;`,
keywordId:"EOMONTH_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Month End Reporting",
optimizationId:"EOMONTH_FUNCTION",
errorId:"EOMONTH_FUNCTION",
interviewId:"EOMONTH_FUNCTION",
interviewQuestions:["<b>Q:</b>What does EOMONTH return?<br><b>A:</b>The last date of a month.","<b>Q:</b>Where is EOMONTH used?<br><b>A:</b>Financial month-end reporting."],
relatedTopics:["eomonth","month end","financial reporting","date function","sql function","sql interview","database programming","sql examples","function keyword","sql server","sql"]
},

/*==================================
 MATHEMATICAL FUNCTIONS
==================================*/

{
id:276,
category:"SQL Functions",
subCategory:"Mathematical Functions",
difficulty:"Beginner",
title:"Mathematical Functions",
shortDescription:"Mathematical Functions perform numeric calculations on values.",
syntax:`SELECT FUNCTION(number)
FROM table_name;`,
sql:`SELECT
ABS(-500) AS AbsoluteValue;`,
keywordId:"MATHEMATICAL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Financial Calculations",
optimizationId:"MATHEMATICAL_FUNCTION",
errorId:"MATHEMATICAL_FUNCTION",
interviewId:"MATHEMATICAL_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Mathematical Functions?<br><b>A:</b>Functions used for numeric calculations.","<b>Q:</b>Name common Mathematical Functions.<br><b>A:</b>ABS, ROUND, CEILING, FLOOR and POWER."],
relatedTopics:["mathematical function","numeric function","abs","round","ceiling","floor","power","sql function","sql interview","database programming","sql examples","calculation","sql"]
},

/*==================================
 ABS FUNCTION
==================================*/

{
id:277,
category:"SQL Functions",
subCategory:"ABS Function",
difficulty:"Beginner",
title:"ABS Function",
shortDescription:"ABS returns the absolute positive value of a number.",
syntax:`SELECT ABS(number);`,
sql:`SELECT
ABS(-100) AS PositiveValue;`,
keywordId:"ABS_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Financial Difference Calculation",
optimizationId:"ABS_FUNCTION",
errorId:"ABS_FUNCTION",
interviewId:"ABS_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ABS function do?<br><b>A:</b>Returns the positive value of a number.","<b>Q:</b>Where is ABS used?<br><b>A:</b>Variance and difference calculations."],
relatedTopics:["abs function","absolute value","math function","numeric function","sql function","sql interview","database programming","sql examples","financial calculation","sql"]
},

/*==================================
 ROUND FUNCTION
==================================*/

{
id:278,
category:"SQL Functions",
subCategory:"ROUND Function",
difficulty:"Beginner",
title:"ROUND Function",
shortDescription:"ROUND rounds a number to a specified number of decimal places.",
syntax:`SELECT ROUND(
number,
decimal_places
);`,
sql:`SELECT
ROUND(123.456,2)
AS RoundedValue;`,
keywordId:"ROUND_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Financial Reporting",
optimizationId:"ROUND_FUNCTION",
errorId:"ROUND_FUNCTION",
interviewId:"ROUND_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ROUND function do?<br><b>A:</b>Rounds numeric values.","<b>Q:</b>Where is ROUND used?<br><b>A:</b>Currency and financial calculations."],
relatedTopics:["round function","round number","math function","numeric function","sql function","sql interview","database programming","sql examples","financial calculation","sql"]
},

/*==================================
 CEILING FUNCTION
==================================*/

{
id:279,
category:"SQL Functions",
subCategory:"CEILING Function",
difficulty:"Beginner",
title:"CEILING Function",
shortDescription:"CEILING returns the smallest integer greater than or equal to a number.",
syntax:`SELECT CEILING(number);`,
sql:`SELECT
CEILING(45.2)
AS RoundedUp;`,
keywordId:"CEILING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Invoice Calculation",
optimizationId:"CEILING_FUNCTION",
errorId:"CEILING_FUNCTION",
interviewId:"CEILING_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CEILING do?<br><b>A:</b>Rounds a number upward.","<b>Q:</b>Where is CEILING used?<br><b>A:</b>Billing and quantity calculations."],
relatedTopics:["ceiling function","round up","math function","numeric function","sql function","sql interview","database programming","sql examples","calculation","sql"]
},

/*==================================
 FLOOR FUNCTION
==================================*/

{
id:280,
category:"SQL Functions",
subCategory:"FLOOR Function",
difficulty:"Beginner",
title:"FLOOR Function",
shortDescription:"FLOOR returns the largest integer less than or equal to a number.",
syntax:`SELECT FLOOR(number);`,
sql:`SELECT
FLOOR(45.9)
AS RoundedDown;`,
keywordId:"FLOOR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Quantity Calculation",
optimizationId:"FLOOR_FUNCTION",
errorId:"FLOOR_FUNCTION",
interviewId:"FLOOR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does FLOOR function do?<br><b>A:</b>Rounds a number downward.","<b>Q:</b>Where is FLOOR used?<br><b>A:</b>Inventory and quantity calculations."],
relatedTopics:["floor function","round down","math function","numeric function","sql function","sql interview","database programming","sql examples","calculation","sql"]
},

/*==================================
 POWER FUNCTION
==================================*/

{
id:281,
category:"SQL Functions",
subCategory:"POWER Function",
difficulty:"Beginner",
title:"POWER Function",
shortDescription:"POWER returns a number raised to a specified power.",
syntax:`SELECT POWER(
number,
power_value
);`,
sql:`SELECT
POWER(5,2)
AS Result;`,
keywordId:"POWER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Mathematical Calculations",
optimizationId:"POWER_FUNCTION",
errorId:"POWER_FUNCTION",
interviewId:"POWER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does POWER function do?<br><b>A:</b>Calculates exponential values.","<b>Q:</b>Where is POWER used?<br><b>A:</b>Scientific and financial calculations."],
relatedTopics:["power function","exponential calculation","math function","numeric function","sql function","sql interview","database programming","sql examples","calculation","sql"]
},

/*==================================
 SQRT FUNCTION
==================================*/

{
id:282,
category:"SQL Functions",
subCategory:"SQRT Function",
difficulty:"Beginner",
title:"SQRT Function",
shortDescription:"SQRT returns the square root of a numeric value.",
syntax:`SELECT SQRT(number);`,
sql:`SELECT
SQRT(144)
AS SquareRootValue;`,
keywordId:"SQRT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Mathematical Analysis",
optimizationId:"SQRT_FUNCTION",
errorId:"SQRT_FUNCTION",
interviewId:"SQRT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does SQRT function return?<br><b>A:</b>The square root of a number.","<b>Q:</b>Where is SQRT used?<br><b>A:</b>Mathematical and statistical calculations."],
relatedTopics:["sqrt function","square root","math function","numeric function","sql function","sql interview","database programming","sql examples","calculation","sql"]
},

/*==================================
 RAND FUNCTION
==================================*/

{
id:283,
category:"SQL Functions",
subCategory:"RAND Function",
difficulty:"Intermediate",
title:"RAND Function",
shortDescription:"RAND generates a random floating-point number.",
syntax:`SELECT RAND();`,
sql:`SELECT
RAND()
AS RandomNumber;`,
keywordId:"RAND_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Random Data Generation",
optimizationId:"RAND_FUNCTION",
errorId:"RAND_FUNCTION",
interviewId:"RAND_FUNCTION",
interviewQuestions:["<b>Q:</b>What does RAND return?<br><b>A:</b>A random numeric value between 0 and 1.","<b>Q:</b>Where is RAND used?<br><b>A:</b>Testing and sample data generation."],
relatedTopics:["rand function","random number","math function","sql function","sql interview","database programming","sql examples","test data","sql"]
},

/*==================================
 POWER BI DATA FUNCTION EXAMPLE
==================================*/

{
id:284,
category:"SQL Functions",
subCategory:"Calculation Functions",
difficulty:"Intermediate",
title:"SQL Calculation Functions",
shortDescription:"Combine SQL functions to create calculated business metrics.",
syntax:`SELECT
expression AS ColumnName
FROM table_name;`,
sql:`SELECT
EmployeeName,
Salary*12 AS AnnualSalary,
Salary*0.1 AS Bonus
FROM Employees;`,
keywordId:"CALCULATION_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Salary Analytics",
optimizationId:"CALCULATION_FUNCTION",
errorId:"CALCULATION_FUNCTION",
interviewId:"CALCULATION_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Calculation Functions?<br><b>A:</b>Functions and expressions used to generate calculated values.","<b>Q:</b>Where are calculations used?<br><b>A:</b>Reports, dashboards and analytics."],
relatedTopics:["calculation function","sql calculation","computed value","expression","annual salary","bonus calculation","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 NULL FUNCTIONS
==================================*/

{
id:285,
category:"SQL Functions",
subCategory:"NULL Functions",
difficulty:"Beginner",
title:"NULL Functions",
shortDescription:"NULL Functions handle missing or unknown values in SQL.",
syntax:`SELECT FUNCTION(column_name)
FROM table_name;`,
sql:`SELECT
ISNULL(EmployeeName,'Unknown')
AS Employee
FROM Employees;`,
keywordId:"NULL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Data Quality Management",
optimizationId:"NULL_FUNCTION",
errorId:"NULL_FUNCTION",
interviewId:"NULL_FUNCTION",
interviewQuestions:["<b>Q:</b>Why handle NULL values?<br><b>A:</b>To prevent incorrect results and improve reports.","<b>Q:</b>Name NULL handling functions.<br><b>A:</b>ISNULL, COALESCE and NULLIF."],
relatedTopics:["null function","isnull","coalesce","null handling","missing values","sql function","sql interview","database programming","sql examples","data quality","sql"]
},

/*==================================
 ISNULL FUNCTION
==================================*/

{
id:286,
category:"SQL Functions",
subCategory:"ISNULL Function",
difficulty:"Beginner",
title:"ISNULL Function",
shortDescription:"ISNULL replaces NULL values with a specified replacement value.",
syntax:`SELECT ISNULL(
column_name,
replacement_value
)
FROM table_name;`,
sql:`SELECT
EmployeeName,
ISNULL(Department,'Not Assigned')
AS DepartmentName
FROM Employees;`,
keywordId:"ISNULL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Handle Missing Employee Data",
optimizationId:"ISNULL_FUNCTION",
errorId:"ISNULL_FUNCTION",
interviewId:"ISNULL_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ISNULL do?<br><b>A:</b>Replaces NULL values with another value.","<b>Q:</b>Why use ISNULL?<br><b>A:</b>To avoid NULL display in reports."],
relatedTopics:["isnull","null handling","replace null","missing data","sql function","sql interview","database programming","sql examples","data quality","sql server","sql"]
},

/*==================================
 COALESCE FUNCTION
==================================*/

{
id:287,
category:"SQL Functions",
subCategory:"COALESCE Function",
difficulty:"Intermediate",
title:"COALESCE Function",
shortDescription:"COALESCE returns the first non-null value from multiple expressions.",
syntax:`SELECT COALESCE(
value1,
value2,
value3
);`,
sql:`SELECT
COALESCE(Email,
'No Email')
AS ContactEmail
FROM Employees;`,
keywordId:"COALESCE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Customer Contact Management",
optimizationId:"COALESCE_FUNCTION",
errorId:"COALESCE_FUNCTION",
interviewId:"COALESCE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does COALESCE return?<br><b>A:</b>The first non-null value.","<b>Q:</b>Difference between ISNULL and COALESCE?<br><b>A:</b>COALESCE supports multiple values."],
relatedTopics:["coalesce","null handling","first non null","isnull","sql function","sql interview","database programming","sql examples","data quality","sql server","sql"]
},

/*==================================
 NULLIF FUNCTION
==================================*/

{
id:288,
category:"SQL Functions",
subCategory:"NULLIF Function",
difficulty:"Intermediate",
title:"NULLIF Function",
shortDescription:"NULLIF returns NULL when two expressions are equal.",
syntax:`SELECT NULLIF(
expression1,
expression2
);`,
sql:`SELECT
NULLIF(Salary,0)
AS ValidSalary
FROM Employees;`,
keywordId:"NULLIF_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Avoid Divide By Zero Errors",
optimizationId:"NULLIF_FUNCTION",
errorId:"NULLIF_FUNCTION",
interviewId:"NULLIF_FUNCTION",
interviewQuestions:["<b>Q:</b>What does NULLIF do?<br><b>A:</b>Returns NULL if two values are equal.","<b>Q:</b>Where is NULLIF useful?<br><b>A:</b>Handling zero values and comparisons."],
relatedTopics:["nullif","null handling","avoid zero error","sql function","sql interview","database programming","sql examples","data quality","sql server","sql"]
},

/*==================================
 CONVERSION FUNCTIONS
==================================*/

{
id:289,
category:"SQL Functions",
subCategory:"Conversion Functions",
difficulty:"Intermediate",
title:"Conversion Functions",
shortDescription:"Conversion Functions change data from one datatype to another.",
syntax:`SELECT CAST(value AS datatype);`,
sql:`SELECT
CAST(Salary AS VARCHAR)
AS SalaryText
FROM Employees;`,
keywordId:"CONVERSION_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Data Type Transformation",
optimizationId:"CONVERSION_FUNCTION",
errorId:"CONVERSION_FUNCTION",
interviewId:"CONVERSION_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Conversion Functions?<br><b>A:</b>Functions used to convert data types.","<b>Q:</b>Name conversion functions.<br><b>A:</b>CAST and CONVERT."],
relatedTopics:["conversion function","cast","convert","datatype conversion","sql function","sql interview","database programming","sql examples","data transformation","sql server","sql"]
},

/*==================================
 CAST FUNCTION
==================================*/

{
id:290,
category:"SQL Functions",
subCategory:"CAST Function",
difficulty:"Intermediate",
title:"CAST Function",
shortDescription:"CAST converts an expression from one data type to another.",
syntax:`CAST(
expression AS datatype
);`,
sql:`SELECT
CAST(Salary AS DECIMAL(10,2))
AS SalaryAmount
FROM Employees;`,
keywordId:"CAST_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Data Formatting",
optimizationId:"CAST_FUNCTION",
errorId:"CAST_FUNCTION",
interviewId:"CAST_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CAST do?<br><b>A:</b>Converts data into another datatype.","<b>Q:</b>Where is CAST used?<br><b>A:</b>Formatting and calculations."],
relatedTopics:["cast function","datatype conversion","convert data","conversion function","sql function","sql interview","database programming","sql examples","data transformation","sql"]
},

/*==================================
 CONVERT FUNCTION
==================================*/

{
id:291,
category:"SQL Functions",
subCategory:"CONVERT Function",
difficulty:"Intermediate",
title:"CONVERT Function",
shortDescription:"CONVERT changes the datatype of an expression and supports formatting styles.",
syntax:`CONVERT(
datatype,
expression,
style
);`,
sql:`SELECT
CONVERT(VARCHAR,JoiningDate,103)
AS JoiningDate
FROM Employees;`,
keywordId:"CONVERT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Date Format Conversion",
optimizationId:"CONVERT_FUNCTION",
errorId:"CONVERT_FUNCTION",
interviewId:"CONVERT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CONVERT function do?<br><b>A:</b>Converts one datatype into another.","<b>Q:</b>Difference between CAST and CONVERT?<br><b>A:</b>CONVERT supports style formatting."],
relatedTopics:["convert function","cast","datatype conversion","date formatting","sql function","sql interview","database programming","sql examples","data transformation","sql server","sql"]
},

/*==================================
 WINDOW FUNCTIONS
==================================*/

{
id:292,
category:"SQL Functions",
subCategory:"Window Functions",
difficulty:"Advanced",
title:"Window Functions",
shortDescription:"Window Functions perform calculations across related rows without grouping them.",
syntax:`FUNCTION()
OVER(
PARTITION BY column
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
AVG(Salary)
OVER()
AS AverageSalary
FROM Employees;`,
keywordId:"WINDOW_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Advanced Analytics Reports",
optimizationId:"WINDOW_FUNCTION",
errorId:"WINDOW_FUNCTION",
interviewId:"WINDOW_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Window Functions?<br><b>A:</b>Functions that perform calculations across rows while keeping individual records.","<b>Q:</b>Name common Window Functions.<br><b>A:</b>ROW_NUMBER, RANK, DENSE_RANK and LEAD."],
relatedTopics:["window function","analytic function","over clause","partition by","sql function","sql interview","database programming","sql examples","ranking","analytics","sql"]
},

/*==================================
 ROW_NUMBER FUNCTION
==================================*/

{
id:293,
category:"SQL Functions",
subCategory:"ROW_NUMBER Function",
difficulty:"Advanced",
title:"ROW_NUMBER Function",
shortDescription:"ROW_NUMBER assigns a unique sequential number to rows.",
syntax:`ROW_NUMBER()
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
ROW_NUMBER()
OVER(
ORDER BY Salary DESC
)
AS RowNumber
FROM Employees;`,
keywordId:"ROW_NUMBER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Ranking",
optimizationId:"ROW_NUMBER_FUNCTION",
errorId:"ROW_NUMBER_FUNCTION",
interviewId:"ROW_NUMBER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ROW_NUMBER do?<br><b>A:</b>Assigns unique numbers to rows.","<b>Q:</b>Can ROW_NUMBER have duplicate values?<br><b>A:</b>No."],
relatedTopics:["row_number","row number function","ranking","window function","over clause","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 RANK FUNCTION
==================================*/

{
id:294,
category:"SQL Functions",
subCategory:"RANK Function",
difficulty:"Advanced",
title:"RANK Function",
shortDescription:"RANK assigns ranking numbers with gaps for duplicate values.",
syntax:`RANK()
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
RANK()
OVER(
ORDER BY Salary DESC
)
AS SalaryRank
FROM Employees;`,
keywordId:"RANK_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Salary Ranking Report",
optimizationId:"RANK_FUNCTION",
errorId:"RANK_FUNCTION",
interviewId:"RANK_FUNCTION",
interviewQuestions:["<b>Q:</b>What does RANK do?<br><b>A:</b>Assigns ranking values and creates gaps for ties.","<b>Q:</b>Difference between RANK and ROW_NUMBER?<br><b>A:</b>RANK allows duplicate rankings."],
relatedTopics:["rank function","ranking","salary rank","window function","over clause","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 DENSE_RANK FUNCTION
==================================*/

{
id:295,
category:"SQL Functions",
subCategory:"DENSE_RANK Function",
difficulty:"Advanced",
title:"DENSE_RANK Function",
shortDescription:"DENSE_RANK assigns ranking without gaps between duplicate values.",
syntax:`DENSE_RANK()
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
DENSE_RANK()
OVER(
ORDER BY Salary DESC
)
AS DenseRank
FROM Employees;`,
keywordId:"DENSE_RANK_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Top Employee Analysis",
optimizationId:"DENSE_RANK_FUNCTION",
errorId:"DENSE_RANK_FUNCTION",
interviewId:"DENSE_RANK_FUNCTION",
interviewQuestions:["<b>Q:</b>What is DENSE_RANK?<br><b>A:</b>A ranking function without gaps.","<b>Q:</b>Difference between RANK and DENSE_RANK?<br><b>A:</b>DENSE_RANK does not skip numbers."],
relatedTopics:["dense rank","dense_rank function","ranking","window function","over clause","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 NTILE FUNCTION
==================================*/

{
id:296,
category:"SQL Functions",
subCategory:"NTILE Function",
difficulty:"Advanced",
title:"NTILE Function",
shortDescription:"NTILE divides rows into a specified number of groups.",
syntax:`NTILE(number)
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
NTILE(4)
OVER(
ORDER BY Salary DESC
)
AS SalaryGroup
FROM Employees;`,
keywordId:"NTILE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Employee Salary Segmentation",
optimizationId:"NTILE_FUNCTION",
errorId:"NTILE_FUNCTION",
interviewId:"NTILE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does NTILE do?<br><b>A:</b>Divides ordered rows into equal groups.","<b>Q:</b>Where is NTILE used?<br><b>A:</b>Ranking and data segmentation."],
relatedTopics:["ntile function","data grouping","window function","ranking","over clause","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 LEAD FUNCTION
==================================*/

{
id:297,
category:"SQL Functions",
subCategory:"LEAD Function",
difficulty:"Advanced",
title:"LEAD Function",
shortDescription:"LEAD accesses data from the next row without using self joins.",
syntax:`LEAD(column)
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
LEAD(Salary)
OVER(
ORDER BY EmployeeID
)
AS NextSalary
FROM Employees;`,
keywordId:"LEAD_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Compare Future Values",
optimizationId:"LEAD_FUNCTION",
errorId:"LEAD_FUNCTION",
interviewId:"LEAD_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LEAD function do?<br><b>A:</b>Returns value from the next row.","<b>Q:</b>Where is LEAD useful?<br><b>A:</b>Trend and comparison analysis."],
relatedTopics:["lead function","next row","window function","analytic function","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 LAG FUNCTION
==================================*/

{
id:298,
category:"SQL Functions",
subCategory:"LAG Function",
difficulty:"Advanced",
title:"LAG Function",
shortDescription:"LAG accesses data from the previous row without using self joins.",
syntax:`LAG(column)
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
LAG(Salary)
OVER(
ORDER BY EmployeeID
)
AS PreviousSalary
FROM Employees;`,
keywordId:"LAG_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Previous Value Comparison",
optimizationId:"LAG_FUNCTION",
errorId:"LAG_FUNCTION",
interviewId:"LAG_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LAG function do?<br><b>A:</b>Returns value from the previous row.","<b>Q:</b>Where is LAG used?<br><b>A:</b>Month-on-month and trend analysis."],
relatedTopics:["lag function","previous row","window function","analytic function","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 FIRST_VALUE FUNCTION
==================================*/

{
id:299,
category:"SQL Functions",
subCategory:"FIRST_VALUE Function",
difficulty:"Advanced",
title:"FIRST_VALUE Function",
shortDescription:"FIRST_VALUE returns the first value from an ordered window.",
syntax:`FIRST_VALUE(column)
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
FIRST_VALUE(Salary)
OVER(
ORDER BY Salary DESC
)
AS HighestSalary
FROM Employees;`,
keywordId:"FIRST_VALUE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Find Top Performing Values",
optimizationId:"FIRST_VALUE_FUNCTION",
errorId:"FIRST_VALUE_FUNCTION",
interviewId:"FIRST_VALUE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does FIRST_VALUE return?<br><b>A:</b>The first value in an ordered set.","<b>Q:</b>Where is FIRST_VALUE used?<br><b>A:</b>Finding highest or earliest values."],
relatedTopics:["first value","first_value function","window function","analytic function","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 LAST_VALUE FUNCTION
==================================*/

{
id:300,
category:"SQL Functions",
subCategory:"LAST_VALUE Function",
difficulty:"Advanced",
title:"LAST_VALUE Function",
shortDescription:"LAST_VALUE returns the last value from an ordered window.",
syntax:`LAST_VALUE(column)
OVER(
ORDER BY column
);`,
sql:`SELECT
EmployeeName,
Salary,
LAST_VALUE(Salary)
OVER(
ORDER BY Salary
ROWS BETWEEN UNBOUNDED PRECEDING
AND UNBOUNDED FOLLOWING
)
AS LowestSalary
FROM Employees;`,
keywordId:"LAST_VALUE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Find Final Values",
optimizationId:"LAST_VALUE_FUNCTION",
errorId:"LAST_VALUE_FUNCTION",
interviewId:"LAST_VALUE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LAST_VALUE return?<br><b>A:</b>The last value in an ordered window.","<b>Q:</b>Why use window frame with LAST_VALUE?<br><b>A:</b>To correctly define the range."],
relatedTopics:["last value","last_value function","window function","analytic function","sql function","sql interview","database programming","sql examples","analytics","sql"]
},

/*==================================
 SQL PROCEDURES
==================================*/

{
id:301,
category:"SQL Procedures",
subCategory:"Stored Procedure",
difficulty:"Intermediate",
title:"Stored Procedure",
shortDescription:"A Stored Procedure is a saved collection of SQL statements that can be executed repeatedly.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SQL Statements;
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN

SELECT *
FROM Employees;

END;`,
keywordId:"STORED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Reusable Database Operations",
optimizationId:"STORED_PROCEDURE",
errorId:"STORED_PROCEDURE",
interviewId:"STORED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Stored Procedure?<br><b>A:</b>A precompiled group of SQL statements stored in database.","<b>Q:</b>Why use Stored Procedures?<br><b>A:</b>For reusability, security and performance."],
relatedTopics:["stored procedure","procedure","sql procedure","database programming","execute procedure","sql server","sql interview","sql examples","reusable query","database object","sql"]
},

/*==================================
 CREATE PROCEDURE
==================================*/

{
id:302,
category:"SQL Procedures",
subCategory:"CREATE PROCEDURE",
difficulty:"Intermediate",
title:"CREATE PROCEDURE",
shortDescription:"CREATE PROCEDURE creates a new stored procedure in SQL.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SQL Code
END;`,
sql:`CREATE PROCEDURE EmployeeReport
AS
BEGIN

SELECT EmployeeName,Salary
FROM Employees;

END;`,
keywordId:"CREATE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Create Automated Reports",
optimizationId:"CREATE_PROCEDURE",
errorId:"CREATE_PROCEDURE",
interviewId:"CREATE_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does CREATE PROCEDURE do?<br><b>A:</b>Creates a stored procedure object.","<b>Q:</b>Where are procedures stored?<br><b>A:</b>Inside the database."],
relatedTopics:["create procedure","stored procedure","sql procedure","database object","sql programming","sql interview","sql examples","automation","sql server","sql"]
},

/*==================================
 EXEC PROCEDURE
==================================*/

{
id:303,
category:"SQL Procedures",
subCategory:"EXEC Procedure",
difficulty:"Beginner",
title:"EXEC Procedure",
shortDescription:"EXEC executes a stored procedure.",
syntax:`EXEC ProcedureName;`,
sql:`EXEC EmployeeReport;`,
keywordId:"EXEC_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Run Stored Reports",
optimizationId:"EXEC_PROCEDURE",
errorId:"EXEC_PROCEDURE",
interviewId:"EXEC_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does EXEC do?<br><b>A:</b>Runs a stored procedure.","<b>Q:</b>Can EXEC pass parameters?<br><b>A:</b>Yes."],
relatedTopics:["exec procedure","execute procedure","stored procedure","run procedure","sql procedure","sql interview","sql examples","database programming","sql server","sql"]
},

/*==================================
 STORED PROCEDURE PARAMETERS
==================================*/

{
id:304,
category:"SQL Procedures",
subCategory:"Procedure Parameters",
difficulty:"Intermediate",
title:"Stored Procedure Parameters",
shortDescription:"Parameters allow stored procedures to accept dynamic values.",
syntax:`CREATE PROCEDURE ProcedureName
@Parameter datatype
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE PROCEDURE GetEmployee
@EmployeeID INT
AS
BEGIN

SELECT *
FROM Employees
WHERE EmployeeID=@EmployeeID;

END;`,
keywordId:"PROCEDURE_PARAMETERS",
sampleDataId:"Employees",
businessCaseId:"Dynamic Employee Search",
optimizationId:"PROCEDURE_PARAMETERS",
errorId:"PROCEDURE_PARAMETERS",
interviewId:"PROCEDURE_PARAMETERS",
interviewQuestions:["<b>Q:</b>Why use procedure parameters?<br><b>A:</b>To make procedures dynamic.","<b>Q:</b>Can procedures have multiple parameters?<br><b>A:</b>Yes."],
relatedTopics:["procedure parameter","stored procedure","input parameter","dynamic query","sql procedure","sql interview","sql examples","database programming","sql server","sql"]
},

/*==================================
 ALTER PROCEDURE
==================================*/

{
id:305,
category:"SQL Procedures",
subCategory:"ALTER PROCEDURE",
difficulty:"Intermediate",
title:"ALTER PROCEDURE",
shortDescription:"ALTER PROCEDURE modifies an existing stored procedure.",
syntax:`ALTER PROCEDURE ProcedureName
AS
BEGIN
Updated SQL
END;`,
sql:`ALTER PROCEDURE EmployeeReport
AS
BEGIN

SELECT EmployeeName,Department
FROM Employees;

END;`,
keywordId:"ALTER_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Update Existing Reports",
optimizationId:"ALTER_PROCEDURE",
errorId:"ALTER_PROCEDURE",
interviewId:"ALTER_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does ALTER PROCEDURE do?<br><b>A:</b>Updates an existing procedure.","<b>Q:</b>Does ALTER remove procedure data?<br><b>A:</b>No."],
relatedTopics:["alter procedure","modify procedure","stored procedure","sql procedure","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP PROCEDURE
==================================*/

{
id:306,
category:"SQL Procedures",
subCategory:"DROP PROCEDURE",
difficulty:"Beginner",
title:"DROP PROCEDURE",
shortDescription:"DROP PROCEDURE removes an existing stored procedure from the database.",
syntax:`DROP PROCEDURE ProcedureName;`,
sql:`DROP PROCEDURE EmployeeReport;`,
keywordId:"DROP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Procedures",
optimizationId:"DROP_PROCEDURE",
errorId:"DROP_PROCEDURE",
interviewId:"DROP_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does DROP PROCEDURE do?<br><b>A:</b>Deletes the stored procedure definition.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop procedure","delete procedure","remove procedure","stored procedure","sql procedure","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PROCEDURE OUTPUT PARAMETER
==================================*/

{
id:307,
category:"SQL Procedures",
subCategory:"Output Parameter",
difficulty:"Advanced",
title:"Procedure Output Parameter",
shortDescription:"Output parameters return values from stored procedures.",
syntax:`CREATE PROCEDURE ProcedureName
@Parameter datatype OUTPUT
AS
BEGIN
SET @Parameter=value;
END;`,
sql:`CREATE PROCEDURE GetEmployeeCount
@TotalEmployees INT OUTPUT
AS
BEGIN

SELECT @TotalEmployees=COUNT(*)
FROM Employees;

END;`,
keywordId:"OUTPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Return Calculated Results",
optimizationId:"OUTPUT_PARAMETER",
errorId:"OUTPUT_PARAMETER",
interviewId:"OUTPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is Output Parameter?<br><b>A:</b>A parameter used to return values from procedures.","<b>Q:</b>Where are output parameters used?<br><b>A:</b>Returning totals and calculated values."],
relatedTopics:["output parameter","stored procedure","return value","sql procedure","database programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PROCEDURE WITH INPUT PARAMETER
==================================*/

{
id:308,
category:"SQL Procedures",
subCategory:"Input Parameter",
difficulty:"Intermediate",
title:"Procedure Input Parameter",
shortDescription:"Input parameters pass values into stored procedures.",
syntax:`CREATE PROCEDURE ProcedureName
@InputValue datatype
AS
BEGIN
SQL Query
END;`,
sql:`CREATE PROCEDURE GetEmployeeByDepartment
@Department VARCHAR(50)
AS
BEGIN

SELECT *
FROM Employees
WHERE Department=@Department;

END;`,
keywordId:"INPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Department Wise Employee Search",
optimizationId:"INPUT_PARAMETER",
errorId:"INPUT_PARAMETER",
interviewId:"INPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is Input Parameter?<br><b>A:</b>A value passed into a procedure.","<b>Q:</b>Why use input parameters?<br><b>A:</b>To filter dynamic data."],
relatedTopics:["input parameter","stored procedure","procedure parameter","dynamic filtering","sql procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NESTED PROCEDURE
==================================*/

{
id:309,
category:"SQL Procedures",
subCategory:"Nested Procedure",
difficulty:"Advanced",
title:"Nested Procedure",
shortDescription:"A Nested Procedure calls one stored procedure from another procedure.",
syntax:`EXEC AnotherProcedure;`,
sql:`CREATE PROCEDURE MainReport
AS
BEGIN

EXEC EmployeeReport;

END;`,
keywordId:"NESTED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Modular Database Programming",
optimizationId:"NESTED_PROCEDURE",
errorId:"NESTED_PROCEDURE",
interviewId:"NESTED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Nested Procedure?<br><b>A:</b>A procedure calling another procedure.","<b>Q:</b>Why use nested procedures?<br><b>A:</b>For reusable modular logic."],
relatedTopics:["nested procedure","procedure calling","stored procedure","sql programming","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE VS FUNCTION
==================================*/

{
id:310,
category:"SQL Procedures",
subCategory:"Procedure vs Function",
difficulty:"Advanced",
title:"Stored Procedure vs Function",
shortDescription:"Compare SQL Stored Procedures and Functions.",
syntax:`Procedure:
EXEC Name;

Function:
SELECT FunctionName();`,
sql:`CREATE FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN

RETURN @Salary*12;

END;`,
keywordId:"PROCEDURE_VS_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"SQL Interview Comparison",
optimizationId:"PROCEDURE_VS_FUNCTION",
errorId:"PROCEDURE_VS_FUNCTION",
interviewId:"PROCEDURE_VS_FUNCTION",
interviewQuestions:["<b>Q:</b>Difference between Procedure and Function?<br><b>A:</b>Procedure can perform actions while function returns a value.","<b>Q:</b>Which is faster?<br><b>A:</b>Depends on implementation and use case."],
relatedTopics:["procedure vs function","stored procedure","function","sql interview","database programming","sql comparison","sql examples","sql server","sql"]
},

/*==================================
 SQL TRIGGERS
==================================*/

{
id:311,
category:"SQL Triggers",
subCategory:"Trigger",
difficulty:"Intermediate",
title:"SQL Trigger",
shortDescription:"A Trigger automatically executes when a database event occurs.",
syntax:`CREATE TRIGGER TriggerName
ON TableName
AFTER INSERT
AS
BEGIN
SQL Statements;
END;`,
sql:`CREATE TRIGGER EmployeeAudit
ON Employees
AFTER INSERT
AS
BEGIN

INSERT INTO EmployeeLog
SELECT *
FROM inserted;

END;`,
keywordId:"TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automatic Audit Tracking",
optimizationId:"TRIGGER",
errorId:"TRIGGER",
interviewId:"TRIGGER",
interviewQuestions:["<b>Q:</b>What is SQL Trigger?<br><b>A:</b>A special procedure that runs automatically on database events.","<b>Q:</b>When does a trigger execute?<br><b>A:</b>During INSERT, UPDATE or DELETE operations."],
relatedTopics:["trigger","sql trigger","database trigger","audit trigger","automatic execution","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 AFTER INSERT TRIGGER
==================================*/

{
id:312,
category:"SQL Triggers",
subCategory:"AFTER INSERT Trigger",
difficulty:"Intermediate",
title:"AFTER INSERT Trigger",
shortDescription:"AFTER INSERT trigger runs after new records are added.",
syntax:`CREATE TRIGGER TriggerName
AFTER INSERT
ON TableName
AS
BEGIN
SQL Code
END;`,
sql:`CREATE TRIGGER EmployeeInsertAudit
ON Employees
AFTER INSERT
AS
BEGIN

INSERT INTO AuditLog
VALUES('New Employee Added');

END;`,
keywordId:"AFTER_INSERT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track New Records",
optimizationId:"AFTER_INSERT_TRIGGER",
errorId:"AFTER_INSERT_TRIGGER",
interviewId:"AFTER_INSERT_TRIGGER",
interviewQuestions:["<b>Q:</b>When does AFTER INSERT execute?<br><b>A:</b>After successful insert operation.","<b>Q:</b>Why use it?<br><b>A:</b>For audit and logging."],
relatedTopics:["after insert trigger","insert trigger","sql trigger","audit logging","database trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER UPDATE TRIGGER
==================================*/

{
id:313,
category:"SQL Triggers",
subCategory:"AFTER UPDATE Trigger",
difficulty:"Intermediate",
title:"AFTER UPDATE Trigger",
shortDescription:"AFTER UPDATE trigger runs after existing records are modified.",
syntax:`CREATE TRIGGER TriggerName
AFTER UPDATE
ON TableName
AS
BEGIN
SQL Code
END;`,
sql:`CREATE TRIGGER SalaryUpdateAudit
ON Employees
AFTER UPDATE
AS
BEGIN

INSERT INTO AuditLog
VALUES('Salary Updated');

END;`,
keywordId:"AFTER_UPDATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track Data Changes",
optimizationId:"AFTER_UPDATE_TRIGGER",
errorId:"AFTER_UPDATE_TRIGGER",
interviewId:"AFTER_UPDATE_TRIGGER",
interviewQuestions:["<b>Q:</b>What is AFTER UPDATE Trigger?<br><b>A:</b>A trigger executed after update operation.","<b>Q:</b>Where is it used?<br><b>A:</b>Change tracking and auditing."],
relatedTopics:["after update trigger","update trigger","sql trigger","audit trail","database trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER DELETE TRIGGER
==================================*/

{
id:314,
category:"SQL Triggers",
subCategory:"AFTER DELETE Trigger",
difficulty:"Intermediate",
title:"AFTER DELETE Trigger",
shortDescription:"AFTER DELETE trigger runs after records are removed.",
syntax:`CREATE TRIGGER TriggerName
AFTER DELETE
ON TableName
AS
BEGIN
SQL Code
END;`,
sql:`CREATE TRIGGER EmployeeDeleteAudit
ON Employees
AFTER DELETE
AS
BEGIN

INSERT INTO AuditLog
VALUES('Employee Deleted');

END;`,
keywordId:"AFTER_DELETE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Deletion Tracking",
optimizationId:"AFTER_DELETE_TRIGGER",
errorId:"AFTER_DELETE_TRIGGER",
interviewId:"AFTER_DELETE_TRIGGER",
interviewQuestions:["<b>Q:</b>What does AFTER DELETE trigger do?<br><b>A:</b>Runs after delete operation.","<b>Q:</b>Why track deletes?<br><b>A:</b>For audit and compliance."],
relatedTopics:["after delete trigger","delete trigger","sql trigger","audit trail","database trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INSTEAD OF TRIGGER
==================================*/

{
id:315,
category:"SQL Triggers",
subCategory:"INSTEAD OF Trigger",
difficulty:"Advanced",
title:"INSTEAD OF Trigger",
shortDescription:"INSTEAD OF Trigger runs instead of the original INSERT, UPDATE or DELETE operation.",
syntax:`CREATE TRIGGER TriggerName
ON TableName
INSTEAD OF INSERT
AS
BEGIN
SQL Code
END;`,
sql:`CREATE TRIGGER PreventDelete
ON Employees
INSTEAD OF DELETE
AS
BEGIN

PRINT 'Delete Not Allowed';

END;`,
keywordId:"INSTEAD_OF_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Control Data Operations",
optimizationId:"INSTEAD_OF_TRIGGER",
errorId:"INSTEAD_OF_TRIGGER",
interviewId:"INSTEAD_OF_TRIGGER",
interviewQuestions:["<b>Q:</b>What is INSTEAD OF Trigger?<br><b>A:</b>A trigger that executes instead of the original action.","<b>Q:</b>Where is it used?<br><b>A:</b>Custom validation and operation control."],
relatedTopics:["instead of trigger","instead trigger","sql trigger","data control","database trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL VIEWS
==================================*/

{
id:316,
category:"SQL Views",
subCategory:"View",
difficulty:"Beginner",
title:"SQL View",
shortDescription:"A View is a virtual table based on the result of a SQL query.",
syntax:`CREATE VIEW ViewName AS
SELECT columns
FROM table_name;`,
sql:`CREATE VIEW EmployeeView AS
SELECT
EmployeeName,
Department,
Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplified Reporting",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is SQL View?<br><b>A:</b>A virtual table created from a query.","<b>Q:</b>Does View store data?<br><b>A:</b>No, it stores query definition."],
relatedTopics:["view","sql view","virtual table","database view","reporting view","sql interview","database object","sql examples","sql server","sql"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:317,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW",
shortDescription:"CREATE VIEW creates a new virtual table.",
syntax:`CREATE VIEW ViewName AS
SELECT Query;`,
sql:`CREATE VIEW HighSalaryEmployees AS
SELECT *
FROM Employees
WHERE Salary>50000;`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Create Business Reports",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>What does CREATE VIEW do?<br><b>A:</b>Creates a virtual table from SQL query.","<b>Q:</b>Why create views?<br><b>A:</b>To simplify complex queries."],
relatedTopics:["create view","sql view","virtual table","database object","reporting","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:318,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW",
shortDescription:"ALTER VIEW modifies an existing view definition.",
syntax:`ALTER VIEW ViewName AS
SELECT Query;`,
sql:`ALTER VIEW EmployeeView AS
SELECT
EmployeeName,
Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Update Reporting Logic",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>Updates an existing view.","<b>Q:</b>Does ALTER VIEW create a new view?<br><b>A:</b>No."],
relatedTopics:["alter view","modify view","sql view","database object","reporting","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:319,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW",
shortDescription:"DROP VIEW removes a view from the database.",
syntax:`DROP VIEW ViewName;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Reports",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>Deletes the view definition.","<b>Q:</b>Does DROP VIEW delete table data?<br><b>A:</b>No."],
relatedTopics:["drop view","delete view","remove view","sql view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEXED VIEW
==================================*/

{
id:320,
category:"SQL Views",
subCategory:"Indexed View",
difficulty:"Advanced",
title:"Indexed View",
shortDescription:"Indexed View stores view results physically to improve performance.",
syntax:`CREATE VIEW ViewName
WITH SCHEMABINDING
AS
SELECT Query;`,
sql:`CREATE VIEW EmployeeSummary
WITH SCHEMABINDING
AS
SELECT
Department,
COUNT_BIG(*) AS TotalEmployees
FROM dbo.Employees
GROUP BY Department;`,
keywordId:"INDEXED_VIEW",
sampleDataId:"Employees",
businessCaseId:"Performance Optimization",
optimizationId:"INDEXED_VIEW",
errorId:"INDEXED_VIEW",
interviewId:"INDEXED_VIEW",
interviewQuestions:["<b>Q:</b>What is Indexed View?<br><b>A:</b>A view with stored index data for faster retrieval.","<b>Q:</b>When use Indexed View?<br><b>A:</b>For complex reporting queries."],
relatedTopics:["indexed view","materialized view","performance view","sql view","database optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL JOINS
==================================*/

{
id:321,
category:"SQL Joins",
subCategory:"Joins",
difficulty:"Beginner",
title:"SQL Joins",
shortDescription:"SQL Joins combine data from multiple tables using related columns.",
syntax:`SELECT columns
FROM table1
JOIN table2
ON table1.column = table2.column;`,
sql:`SELECT
Employees.EmployeeName,
Departments.DepartmentName
FROM Employees
JOIN Departments
ON Employees.DepartmentID = Departments.DepartmentID;`,
keywordId:"JOIN",
sampleDataId:"Employees",
businessCaseId:"Combine Related Business Data",
optimizationId:"JOIN",
errorId:"JOIN",
interviewId:"JOIN",
interviewQuestions:["<b>Q:</b>What is SQL Join?<br><b>A:</b>A method to combine rows from multiple tables.","<b>Q:</b>Why use Joins?<br><b>A:</b>To retrieve related information stored in different tables."],
relatedTopics:["join","sql join","combine tables","table relationship","database relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INNER JOIN
==================================*/

{
id:322,
category:"SQL Joins",
subCategory:"INNER JOIN",
difficulty:"Beginner",
title:"INNER JOIN",
shortDescription:"INNER JOIN returns only matching records from both tables.",
syntax:`SELECT columns
FROM table1
INNER JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
INNER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"INNER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Department Report",
optimizationId:"INNER_JOIN",
errorId:"INNER_JOIN",
interviewId:"INNER_JOIN",
interviewQuestions:["<b>Q:</b>What does INNER JOIN return?<br><b>A:</b>Only matching records from both tables.","<b>Q:</b>Most commonly used join?<br><b>A:</b>INNER JOIN."],
relatedTopics:["inner join","join matching records","sql join","table relationship","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT JOIN
==================================*/

{
id:323,
category:"SQL Joins",
subCategory:"LEFT JOIN",
difficulty:"Beginner",
title:"LEFT JOIN",
shortDescription:"LEFT JOIN returns all records from left table and matching records from right table.",
syntax:`SELECT columns
FROM table1
LEFT JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
LEFT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"LEFT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Find Employees Without Department",
optimizationId:"LEFT_JOIN",
errorId:"LEFT_JOIN",
interviewId:"LEFT_JOIN",
interviewQuestions:["<b>Q:</b>What does LEFT JOIN return?<br><b>A:</b>All left table records with matching right records.","<b>Q:</b>When use LEFT JOIN?<br><b>A:</b>To find missing related data."],
relatedTopics:["left join","left outer join","sql join","missing records","table relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT JOIN
==================================*/

{
id:324,
category:"SQL Joins",
subCategory:"RIGHT JOIN",
difficulty:"Beginner",
title:"RIGHT JOIN",
shortDescription:"RIGHT JOIN returns all records from right table and matching records from left table.",
syntax:`SELECT columns
FROM table1
RIGHT JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
RIGHT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"RIGHT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Department Coverage Report",
optimizationId:"RIGHT_JOIN",
errorId:"RIGHT_JOIN",
interviewId:"RIGHT_JOIN",
interviewQuestions:["<b>Q:</b>What does RIGHT JOIN return?<br><b>A:</b>All right table records with matching left records.","<b>Q:</b>Alternative to RIGHT JOIN?<br><b>A:</b>Reverse tables and use LEFT JOIN."],
relatedTopics:["right join","right outer join","sql join","table relationship","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FULL OUTER JOIN
==================================*/

{
id:325,
category:"SQL Joins",
subCategory:"FULL OUTER JOIN",
difficulty:"Intermediate",
title:"FULL OUTER JOIN",
shortDescription:"FULL OUTER JOIN returns all matching and non-matching records from both tables.",
syntax:`SELECT columns
FROM table1
FULL OUTER JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
FULL OUTER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"FULL_OUTER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Complete Data Comparison",
optimizationId:"FULL_OUTER_JOIN",
errorId:"FULL_OUTER_JOIN",
interviewId:"FULL_OUTER_JOIN",
interviewQuestions:["<b>Q:</b>What does FULL OUTER JOIN return?<br><b>A:</b>All records from both tables.","<b>Q:</b>When use FULL OUTER JOIN?<br><b>A:</b>Data reconciliation and comparison."],
relatedTopics:["full outer join","full join","sql join","compare tables","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CROSS JOIN
==================================*/

{
id:326,
category:"SQL Joins",
subCategory:"CROSS JOIN",
difficulty:"Intermediate",
title:"CROSS JOIN",
shortDescription:"CROSS JOIN creates a combination of every row from both tables.",
syntax:`SELECT columns
FROM table1
CROSS JOIN table2;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
CROSS JOIN Departments D;`,
keywordId:"CROSS_JOIN",
sampleDataId:"Employees",
businessCaseId:"Create All Possible Combinations",
optimizationId:"CROSS_JOIN",
errorId:"CROSS_JOIN",
interviewId:"CROSS_JOIN",
interviewQuestions:["<b>Q:</b>What is CROSS JOIN?<br><b>A:</b>It returns Cartesian product of two tables.","<b>Q:</b>Does CROSS JOIN require ON condition?<br><b>A:</b>No."],
relatedTopics:["cross join","cartesian product","sql join","table combination","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SELF JOIN
==================================*/

{
id:327,
category:"SQL Joins",
subCategory:"SELF JOIN",
difficulty:"Intermediate",
title:"SELF JOIN",
shortDescription:"SELF JOIN joins a table with itself using aliases.",
syntax:`SELECT columns
FROM table1 A
JOIN table1 B
ON condition;`,
sql:`SELECT
E.EmployeeName AS Employee,
M.EmployeeName AS Manager
FROM Employees E
JOIN Employees M
ON E.ManagerID=M.EmployeeID;`,
keywordId:"SELF_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Manager Hierarchy",
optimizationId:"SELF_JOIN",
errorId:"SELF_JOIN",
interviewId:"SELF_JOIN",
interviewQuestions:["<b>Q:</b>What is SELF JOIN?<br><b>A:</b>A table joined with itself.","<b>Q:</b>Where is SELF JOIN used?<br><b>A:</b>Hierarchy and relationship analysis."],
relatedTopics:["self join","recursive relationship","sql join","employee hierarchy","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN USING
==================================*/

{
id:328,
category:"SQL Joins",
subCategory:"JOIN USING",
difficulty:"Intermediate",
title:"JOIN USING",
shortDescription:"JOIN USING combines tables based on columns with the same name.",
syntax:`SELECT columns
FROM table1
JOIN table2
USING(column_name);`,
sql:`SELECT
EmployeeName,
DepartmentName
FROM Employees
JOIN Departments
USING(DepartmentID);`,
keywordId:"JOIN_USING",
sampleDataId:"Employees",
businessCaseId:"Simplified Table Joining",
optimizationId:"JOIN_USING",
errorId:"JOIN_USING",
interviewId:"JOIN_USING",
interviewQuestions:["<b>Q:</b>What is JOIN USING?<br><b>A:</b>A join syntax used when both tables have same column name.","<b>Q:</b>Is USING supported everywhere?<br><b>A:</b>No, database support varies."],
relatedTopics:["join using","using clause","sql join","table relationship","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN ON
==================================*/

{
id:329,
category:"SQL Joins",
subCategory:"JOIN ON",
difficulty:"Beginner",
title:"JOIN ON Clause",
shortDescription:"ON clause defines the matching condition between joined tables.",
syntax:`JOIN table_name
ON table1.column = table2.column;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"JOIN_ON",
sampleDataId:"Employees",
businessCaseId:"Define Table Relationships",
optimizationId:"JOIN_ON",
errorId:"JOIN_ON",
interviewId:"JOIN_ON",
interviewQuestions:["<b>Q:</b>What is ON clause?<br><b>A:</b>Defines join matching conditions.","<b>Q:</b>Can ON have multiple conditions?<br><b>A:</b>Yes."],
relatedTopics:["join on","on clause","sql join","table relationship","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTIPLE TABLE JOIN
==================================*/

{
id:330,
category:"SQL Joins",
subCategory:"Multiple Table Join",
difficulty:"Advanced",
title:"Multiple Table Join",
shortDescription:"Multiple Table Join combines data from three or more tables.",
syntax:`SELECT columns
FROM table1
JOIN table2
ON condition
JOIN table3
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName,
L.LocationName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID
JOIN Locations L
ON D.LocationID=L.LocationID;`,
keywordId:"MULTIPLE_TABLE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Complete Business Reporting",
optimizationId:"MULTIPLE_TABLE_JOIN",
errorId:"MULTIPLE_TABLE_JOIN",
interviewId:"MULTIPLE_TABLE_JOIN",
interviewQuestions:["<b>Q:</b>What is Multiple Table Join?<br><b>A:</b>Joining more than two related tables.","<b>Q:</b>What should be considered?<br><b>A:</b>Proper relationships and indexing."],
relatedTopics:["multiple table join","three table join","sql join","complex query","database relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL SUBQUERIES
==================================*/

{
id:331,
category:"SQL Subqueries",
subCategory:"Subquery",
difficulty:"Intermediate",
title:"SQL Subquery",
shortDescription:"A Subquery is a query written inside another SQL query.",
syntax:`SELECT columns
FROM table_name
WHERE column IN
(
SELECT column
FROM table_name
);`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary >
(
SELECT AVG(Salary)
FROM Employees
);`,
keywordId:"SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Compare Data Using Internal Query",
optimizationId:"SUBQUERY",
errorId:"SUBQUERY",
interviewId:"SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Subquery?<br><b>A:</b>A query inside another query.","<b>Q:</b>Where can Subquery be used?<br><b>A:</b>SELECT, FROM and WHERE clauses."],
relatedTopics:["subquery","nested query","inner query","sql query inside query","database programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SINGLE ROW SUBQUERY
==================================*/

{
id:332,
category:"SQL Subqueries",
subCategory:"Single Row Subquery",
difficulty:"Intermediate",
title:"Single Row Subquery",
shortDescription:"Single Row Subquery returns only one value from inner query.",
syntax:`SELECT columns
FROM table
WHERE column =
(
SELECT value
);`,
sql:`SELECT *
FROM Employees
WHERE Salary =
(
SELECT MAX(Salary)
FROM Employees
);`,
keywordId:"SINGLE_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Find Single Matching Value",
optimizationId:"SINGLE_ROW_SUBQUERY",
errorId:"SINGLE_ROW_SUBQUERY",
interviewId:"SINGLE_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Single Row Subquery?<br><b>A:</b>A subquery returning one value.","<b>Q:</b>Which operators are used?<br><b>A:</b>=, >, < operators."],
relatedTopics:["single row subquery","subquery","nested query","sql query","database programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTI ROW SUBQUERY
==================================*/

{
id:333,
category:"SQL Subqueries",
subCategory:"Multi Row Subquery",
difficulty:"Intermediate",
title:"Multi Row Subquery",
shortDescription:"Multi Row Subquery returns multiple values from inner query.",
syntax:`SELECT columns
FROM table
WHERE column IN
(
SELECT column
FROM table
);`,
sql:`SELECT *
FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
WHERE Location='Mumbai'
);`,
keywordId:"MULTI_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Filter Using Multiple Values",
optimizationId:"MULTI_ROW_SUBQUERY",
errorId:"MULTI_ROW_SUBQUERY",
interviewId:"MULTI_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Multi Row Subquery?<br><b>A:</b>A subquery returning multiple values.","<b>Q:</b>Which operator is commonly used?<br><b>A:</b>IN operator."],
relatedTopics:["multi row subquery","subquery","nested query","in operator","sql query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CORRELATED SUBQUERY
==================================*/

{
id:334,
category:"SQL Subqueries",
subCategory:"Correlated Subquery",
difficulty:"Advanced",
title:"Correlated Subquery",
shortDescription:"A Correlated Subquery depends on values from the outer query.",
syntax:`SELECT columns
FROM table1 A
WHERE column >
(
SELECT value
FROM table2 B
WHERE A.column=B.column
);`,
sql:`SELECT E1.EmployeeName,
E1.Salary
FROM Employees E1
WHERE Salary >
(
SELECT AVG(E2.Salary)
FROM Employees E2
WHERE E1.Department=E2.Department
);`,
keywordId:"CORRELATED_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Department Wise Comparison",
optimizationId:"CORRELATED_SUBQUERY",
errorId:"CORRELATED_SUBQUERY",
interviewId:"CORRELATED_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Correlated Subquery?<br><b>A:</b>A subquery that runs for each outer query row.","<b>Q:</b>Is it slower than normal subquery?<br><b>A:</b>Usually yes because it executes repeatedly."],
relatedTopics:["correlated subquery","subquery","nested query","advanced sql","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 EXISTS OPERATOR
==================================*/

{
id:335,
category:"SQL Subqueries",
subCategory:"EXISTS Operator",
difficulty:"Intermediate",
title:"EXISTS Operator",
shortDescription:"EXISTS checks whether a subquery returns any records.",
syntax:`SELECT columns
FROM table
WHERE EXISTS
(
SELECT query
);`,
sql:`SELECT *
FROM Employees E
WHERE EXISTS
(
SELECT 1
FROM Departments D
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"EXISTS_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Check Data Availability",
optimizationId:"EXISTS_OPERATOR",
errorId:"EXISTS_OPERATOR",
interviewId:"EXISTS_OPERATOR",
interviewQuestions:["<b>Q:</b>What does EXISTS do?<br><b>A:</b>Checks if rows exist in a subquery.","<b>Q:</b>What does EXISTS return?<br><b>A:</b>TRUE or FALSE."],
relatedTopics:["exists operator","exists","subquery","sql query","data validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EXISTS OPERATOR
==================================*/

{
id:336,
category:"SQL Subqueries",
subCategory:"NOT EXISTS Operator",
difficulty:"Intermediate",
title:"NOT EXISTS Operator",
shortDescription:"NOT EXISTS checks whether a subquery returns no records.",
syntax:`SELECT columns
FROM table
WHERE NOT EXISTS
(
SELECT query
);`,
sql:`SELECT *
FROM Departments D
WHERE NOT EXISTS
(
SELECT 1
FROM Employees E
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"NOT_EXISTS_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Find Missing Related Data",
optimizationId:"NOT_EXISTS_OPERATOR",
errorId:"NOT_EXISTS_OPERATOR",
interviewId:"NOT_EXISTS_OPERATOR",
interviewQuestions:["<b>Q:</b>What does NOT EXISTS do?<br><b>A:</b>Returns records when subquery has no matching rows.","<b>Q:</b>Where is NOT EXISTS used?<br><b>A:</b>Finding missing relationships."],
relatedTopics:["not exists","exists","subquery","missing records","sql query","database programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN SELECT
==================================*/

{
id:337,
category:"SQL Subqueries",
subCategory:"Subquery in SELECT",
difficulty:"Advanced",
title:"Subquery in SELECT",
shortDescription:"A Subquery can be used inside SELECT to calculate values.",
syntax:`SELECT
column,
(
SELECT value
)
FROM table;`,
sql:`SELECT
EmployeeName,
Salary,
(
SELECT AVG(Salary)
FROM Employees
)
AS AverageSalary
FROM Employees;`,
keywordId:"SELECT_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Add Calculated Information",
optimizationId:"SELECT_SUBQUERY",
errorId:"SELECT_SUBQUERY",
interviewId:"SELECT_SUBQUERY",
interviewQuestions:["<b>Q:</b>Can subquery be used in SELECT?<br><b>A:</b>Yes, for calculated values.","<b>Q:</b>What does it return?<br><b>A:</b>Usually a single value."],
relatedTopics:["select subquery","subquery","nested query","calculated value","sql query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN FROM
==================================*/

{
id:338,
category:"SQL Subqueries",
subCategory:"Subquery in FROM",
difficulty:"Advanced",
title:"Subquery in FROM",
shortDescription:"A Subquery inside FROM acts as a temporary table.",
syntax:`SELECT *
FROM
(
SELECT columns
FROM table
)
AS temp_table;`,
sql:`SELECT *
FROM
(
SELECT
Department,
AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
)
AS DeptSalary;`,
keywordId:"FROM_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Temporary Data Analysis",
optimizationId:"FROM_SUBQUERY",
errorId:"FROM_SUBQUERY",
interviewId:"FROM_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is FROM Subquery?<br><b>A:</b>A query used as a temporary table.","<b>Q:</b>Is alias required?<br><b>A:</b>Yes in most databases."],
relatedTopics:["from subquery","derived table","subquery","temporary table","sql query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY WITH UPDATE
==================================*/

{
id:339,
category:"SQL Subqueries",
subCategory:"Subquery with UPDATE",
difficulty:"Advanced",
title:"Subquery with UPDATE",
shortDescription:"Subquery can be used to update records based on another query.",
syntax:`UPDATE table
SET column=value
WHERE column IN
(
SELECT column
);`,
sql:`UPDATE Employees
SET Salary=Salary*1.10
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
WHERE DepartmentName='IT'
);`,
keywordId:"UPDATE_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Bulk Data Update",
optimizationId:"UPDATE_SUBQUERY",
errorId:"UPDATE_SUBQUERY",
interviewId:"UPDATE_SUBQUERY",
interviewQuestions:["<b>Q:</b>Can subquery be used in UPDATE?<br><b>A:</b>Yes.","<b>Q:</b>Why use UPDATE subquery?<br><b>A:</b>To update based on another table condition."],
relatedTopics:["update subquery","subquery","update query","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY WITH DELETE
==================================*/

{
id:340,
category:"SQL Subqueries",
subCategory:"Subquery with DELETE",
difficulty:"Advanced",
title:"Subquery with DELETE",
shortDescription:"Subquery can be used to delete records based on conditions.",
syntax:`DELETE FROM table
WHERE column IN
(
SELECT column
);`,
sql:`DELETE FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
WHERE DepartmentName='Closed'
);`,
keywordId:"DELETE_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Controlled Data Cleanup",
optimizationId:"DELETE_SUBQUERY",
errorId:"DELETE_SUBQUERY",
interviewId:"DELETE_SUBQUERY",
interviewQuestions:["<b>Q:</b>Can subquery be used with DELETE?<br><b>A:</b>Yes.","<b>Q:</b>Why validate before DELETE?<br><b>A:</b>To avoid accidental data loss."],
relatedTopics:["delete subquery","subquery","delete query","data cleanup","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL CTE
==================================*/

{
id:341,
category:"SQL CTE",
subCategory:"Common Table Expression",
difficulty:"Intermediate",
title:"Common Table Expression (CTE)",
shortDescription:"CTE creates a temporary named result set that can be referenced within a query.",
syntax:`WITH CTE_Name AS
(
SELECT columns
FROM table_name
)
SELECT *
FROM CTE_Name;`,
sql:`WITH EmployeeCTE AS
(
SELECT
EmployeeName,
Salary
FROM Employees
)

SELECT *
FROM EmployeeCTE;`,
keywordId:"CTE",
sampleDataId:"Employees",
businessCaseId:"Simplify Complex Queries",
optimizationId:"CTE",
errorId:"CTE",
interviewId:"CTE",
interviewQuestions:["<b>Q:</b>What is CTE?<br><b>A:</b>A temporary result set used inside a SQL statement.","<b>Q:</b>Where is CTE defined?<br><b>A:</b>Using WITH keyword."],
relatedTopics:["cte","common table expression","with clause","temporary result","sql query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RECURSIVE CTE
==================================*/

{
id:342,
category:"SQL CTE",
subCategory:"Recursive CTE",
difficulty:"Advanced",
title:"Recursive CTE",
shortDescription:"Recursive CTE references itself to process hierarchical data.",
syntax:`WITH CTE_Name AS
(
Anchor Query
UNION ALL
Recursive Query
)
SELECT *
FROM CTE_Name;`,
sql:`WITH EmployeeHierarchy AS
(
SELECT EmployeeID,EmployeeName,ManagerID
FROM Employees
WHERE ManagerID IS NULL

UNION ALL

SELECT E.EmployeeID,E.EmployeeName,E.ManagerID
FROM Employees E
JOIN EmployeeHierarchy H
ON E.ManagerID=H.EmployeeID
)

SELECT *
FROM EmployeeHierarchy;`,
keywordId:"RECURSIVE_CTE",
sampleDataId:"Employees",
businessCaseId:"Employee Hierarchy Analysis",
optimizationId:"RECURSIVE_CTE",
errorId:"RECURSIVE_CTE",
interviewId:"RECURSIVE_CTE",
interviewQuestions:["<b>Q:</b>What is Recursive CTE?<br><b>A:</b>A CTE that calls itself repeatedly.","<b>Q:</b>Where is it used?<br><b>A:</b>Hierarchy and tree structures."],
relatedTopics:["recursive cte","cte","hierarchy query","common table expression","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CTE WITH JOIN
==================================*/

{
id:343,
category:"SQL CTE",
subCategory:"CTE with JOIN",
difficulty:"Advanced",
title:"CTE with JOIN",
shortDescription:"CTE can be combined with JOIN operations for complex analysis.",
syntax:`WITH CTE_Name AS
(
SELECT query
)
SELECT *
FROM CTE_Name
JOIN table_name
ON condition;`,
sql:`WITH EmployeeCTE AS
(
SELECT *
FROM Employees
)

SELECT
E.EmployeeName,
D.DepartmentName
FROM EmployeeCTE E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"CTE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Advanced Reporting",
optimizationId:"CTE_JOIN",
errorId:"CTE_JOIN",
interviewId:"CTE_JOIN",
interviewQuestions:["<b>Q:</b>Can CTE use JOIN?<br><b>A:</b>Yes.","<b>Q:</b>Why combine CTE and JOIN?<br><b>A:</b>To improve readability of complex queries."],
relatedTopics:["cte join","common table expression","join","complex query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CTE WITH AGGREGATE
==================================*/

{
id:344,
category:"SQL CTE",
subCategory:"CTE Aggregate",
difficulty:"Intermediate",
title:"CTE with Aggregate Functions",
shortDescription:"CTE can store aggregated results for further analysis.",
syntax:`WITH CTE_Name AS
(
SELECT
GROUP BY query
)
SELECT *
FROM CTE_Name;`,
sql:`WITH SalaryCTE AS
(
SELECT
Department,
AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
)

SELECT *
FROM SalaryCTE;`,
keywordId:"CTE_AGGREGATE",
sampleDataId:"Employees",
businessCaseId:"Department Salary Analysis",
optimizationId:"CTE_AGGREGATE",
errorId:"CTE_AGGREGATE",
interviewId:"CTE_AGGREGATE",
interviewQuestions:["<b>Q:</b>Can CTE contain GROUP BY?<br><b>A:</b>Yes.","<b>Q:</b>Why use aggregate CTE?<br><b>A:</b>For organized analytical queries."],
relatedTopics:["cte aggregate","cte","group by","aggregate function","sql analysis","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CTE VS TEMP TABLE
==================================*/

{
id:345,
category:"SQL CTE",
subCategory:"CTE vs Temp Table",
difficulty:"Advanced",
title:"CTE vs Temporary Table",
shortDescription:"Comparison between CTE and temporary tables in SQL.",
syntax:`CTE:
WITH Name AS()

Temp Table:
CREATE TABLE #Temp`,
sql:`WITH SalesCTE AS
(
SELECT *
FROM Sales
)

SELECT *
FROM SalesCTE;`,
keywordId:"CTE_VS_TEMP_TABLE",
sampleDataId:"Employees",
businessCaseId:"SQL Interview Comparison",
optimizationId:"CTE_VS_TEMP_TABLE",
errorId:"CTE_VS_TEMP_TABLE",
interviewId:"CTE_VS_TEMP_TABLE",
interviewQuestions:["<b>Q:</b>Difference between CTE and Temp Table?<br><b>A:</b>CTE exists for one query while temp table can store data temporarily.","<b>Q:</b>Which is faster?<br><b>A:</b>Depends on scenario and data size."],
relatedTopics:["cte vs temp table","cte","temporary table","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 SQL TEMPORARY TABLES
==================================*/

{
id:346,
category:"SQL Temporary Tables",
subCategory:"Temporary Table",
difficulty:"Intermediate",
title:"Temporary Table",
shortDescription:"Temporary tables store intermediate data temporarily during a SQL session.",
syntax:`CREATE TABLE #TableName
(
column datatype
);`,
sql:`CREATE TABLE #EmployeeTemp
(
EmployeeID INT,
EmployeeName VARCHAR(100)
);

INSERT INTO #EmployeeTemp
SELECT EmployeeID,EmployeeName
FROM Employees;`,
keywordId:"TEMP_TABLE",
sampleDataId:"Employees",
businessCaseId:"Temporary Data Processing",
optimizationId:"TEMP_TABLE",
errorId:"TEMP_TABLE",
interviewId:"TEMP_TABLE",
interviewQuestions:["<b>Q:</b>What is Temporary Table?<br><b>A:</b>A table created temporarily for storing intermediate results.","<b>Q:</b>Where are temp tables stored?<br><b>A:</b>Usually in temporary database storage."],
relatedTopics:["temporary table","temp table","sql temp","intermediate data","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 LOCAL TEMP TABLE
==================================*/

{
id:347,
category:"SQL Temporary Tables",
subCategory:"Local Temporary Table",
difficulty:"Intermediate",
title:"Local Temporary Table",
shortDescription:"Local temporary tables are available only within the current session.",
syntax:`CREATE TABLE #TableName
(
columns
);`,
sql:`CREATE TABLE #EmployeeData
(
EmployeeID INT,
Salary INT
);

SELECT *
FROM #EmployeeData;`,
keywordId:"LOCAL_TEMP_TABLE",
sampleDataId:"Employees",
businessCaseId:"Session Based Data Processing",
optimizationId:"LOCAL_TEMP_TABLE",
errorId:"LOCAL_TEMP_TABLE",
interviewId:"LOCAL_TEMP_TABLE",
interviewQuestions:["<b>Q:</b>What is Local Temp Table?<br><b>A:</b>A temporary table available only to current user session.","<b>Q:</b>How is it created?<br><b>A:</b>Using # symbol."],
relatedTopics:["local temp table","temporary table","temp table","sql server","database programming","sql interview","sql examples","sql"]
},

/*==================================
 GLOBAL TEMP TABLE
==================================*/

{
id:348,
category:"SQL Temporary Tables",
subCategory:"Global Temporary Table",
difficulty:"Intermediate",
title:"Global Temporary Table",
shortDescription:"Global temporary tables are accessible by multiple sessions.",
syntax:`CREATE TABLE ##TableName
(
columns
);`,
sql:`CREATE TABLE ##EmployeeReport
(
EmployeeID INT,
EmployeeName VARCHAR(100)
);`,
keywordId:"GLOBAL_TEMP_TABLE",
sampleDataId:"Employees",
businessCaseId:"Shared Temporary Data",
optimizationId:"GLOBAL_TEMP_TABLE",
errorId:"GLOBAL_TEMP_TABLE",
interviewId:"GLOBAL_TEMP_TABLE",
interviewQuestions:["<b>Q:</b>What is Global Temp Table?<br><b>A:</b>A temporary table accessible across sessions.","<b>Q:</b>How is it created?<br><b>A:</b>Using ## symbol."],
relatedTopics:["global temp table","temporary table","temp table","sql server","database programming","sql interview","sql examples","sql"]
},

/*==================================
 TABLE VARIABLE
==================================*/

{
id:349,
category:"SQL Temporary Tables",
subCategory:"Table Variable",
difficulty:"Intermediate",
title:"Table Variable",
shortDescription:"Table variables store temporary data inside procedures or batches.",
syntax:`DECLARE @TableName TABLE
(
column datatype
);`,
sql:`DECLARE @Employee TABLE
(
EmployeeID INT,
EmployeeName VARCHAR(100)
);

INSERT INTO @Employee
SELECT EmployeeID,EmployeeName
FROM Employees;`,
keywordId:"TABLE_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Small Temporary Data Storage",
optimizationId:"TABLE_VARIABLE",
errorId:"TABLE_VARIABLE",
interviewId:"TABLE_VARIABLE",
interviewQuestions:["<b>Q:</b>What is Table Variable?<br><b>A:</b>A variable that stores table-like data.","<b>Q:</b>Where are table variables used?<br><b>A:</b>Stored procedures and functions."],
relatedTopics:["table variable","temporary data","temp table","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TEMP TABLE VS TABLE VARIABLE
==================================*/

{
id:350,
category:"SQL Temporary Tables",
subCategory:"Temp Table vs Table Variable",
difficulty:"Advanced",
title:"Temp Table vs Table Variable",
shortDescription:"Comparison between temporary tables and table variables.",
syntax:`Temp Table:
CREATE TABLE #Temp

Table Variable:
DECLARE @Table TABLE`,
sql:`CREATE TABLE #TempEmployee
(
EmployeeID INT
);

DECLARE @Employee TABLE
(
EmployeeID INT
);`,
keywordId:"TEMP_VS_TABLE_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"SQL Interview Comparison",
optimizationId:"TEMP_VS_TABLE_VARIABLE",
errorId:"TEMP_VS_TABLE_VARIABLE",
interviewId:"TEMP_VS_TABLE_VARIABLE",
interviewQuestions:["<b>Q:</b>Difference between Temp Table and Table Variable?<br><b>A:</b>Temp tables support larger data and indexing.","<b>Q:</b>Which should be used?<br><b>A:</b>Depends on data size and requirement."],
relatedTopics:["temp table vs table variable","temporary table","table variable","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 SQL TRANSACTIONS
==================================*/

{
id:351,
category:"SQL Transactions",
subCategory:"Transaction",
difficulty:"Intermediate",
title:"SQL Transaction",
shortDescription:"A Transaction is a sequence of SQL operations executed as a single unit.",
syntax:`BEGIN TRANSACTION;

SQL Statements;

COMMIT;
`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=Salary+5000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Ensure Data Consistency",
optimizationId:"TRANSACTION",
errorId:"TRANSACTION",
interviewId:"TRANSACTION",
interviewQuestions:["<b>Q:</b>What is SQL Transaction?<br><b>A:</b>A group of operations treated as one unit.","<b>Q:</b>Why use transactions?<br><b>A:</b>To maintain data consistency."],
relatedTopics:["transaction","sql transaction","commit","rollback","database consistency","acid properties","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BEGIN TRANSACTION
==================================*/

{
id:352,
category:"SQL Transactions",
subCategory:"BEGIN TRANSACTION",
difficulty:"Beginner",
title:"BEGIN TRANSACTION",
shortDescription:"BEGIN TRANSACTION starts a new transaction block.",
syntax:`BEGIN TRANSACTION;

SQL Statements;`,
sql:`BEGIN TRANSACTION;

DELETE FROM Employees
WHERE EmployeeID=101;`,
keywordId:"BEGIN_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Start Controlled Database Operation",
optimizationId:"BEGIN_TRANSACTION",
errorId:"BEGIN_TRANSACTION",
interviewId:"BEGIN_TRANSACTION",
interviewQuestions:["<b>Q:</b>What does BEGIN TRANSACTION do?<br><b>A:</b>Starts a transaction.","<b>Q:</b>What comes after BEGIN TRANSACTION?<br><b>A:</b>COMMIT or ROLLBACK."],
relatedTopics:["begin transaction","transaction","commit","rollback","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMMIT TRANSACTION
==================================*/

{
id:353,
category:"SQL Transactions",
subCategory:"COMMIT",
difficulty:"Beginner",
title:"COMMIT Transaction",
shortDescription:"COMMIT permanently saves transaction changes.",
syntax:`COMMIT TRANSACTION;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=60000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"COMMIT",
sampleDataId:"Employees",
businessCaseId:"Save Database Changes",
optimizationId:"COMMIT",
errorId:"COMMIT",
interviewId:"COMMIT",
interviewQuestions:["<b>Q:</b>What does COMMIT do?<br><b>A:</b>Saves transaction changes permanently.","<b>Q:</b>Can COMMIT be undone?<br><b>A:</b>No."],
relatedTopics:["commit","save transaction","transaction","rollback","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 ROLLBACK TRANSACTION
==================================*/

{
id:354,
category:"SQL Transactions",
subCategory:"ROLLBACK",
difficulty:"Beginner",
title:"ROLLBACK Transaction",
shortDescription:"ROLLBACK cancels transaction changes before commit.",
syntax:`ROLLBACK TRANSACTION;`,
sql:`BEGIN TRANSACTION;

DELETE FROM Employees
WHERE EmployeeID=101;

ROLLBACK;`,
keywordId:"ROLLBACK",
sampleDataId:"Employees",
businessCaseId:"Undo Incorrect Changes",
optimizationId:"ROLLBACK",
errorId:"ROLLBACK",
interviewId:"ROLLBACK",
interviewQuestions:["<b>Q:</b>What does ROLLBACK do?<br><b>A:</b>Undo uncommitted changes.","<b>Q:</b>When use ROLLBACK?<br><b>A:</b>When an error occurs."],
relatedTopics:["rollback","undo transaction","transaction","commit","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 SAVEPOINT
==================================*/

{
id:355,
category:"SQL Transactions",
subCategory:"SAVEPOINT",
difficulty:"Intermediate",
title:"SAVEPOINT",
shortDescription:"SAVEPOINT creates a point inside a transaction for partial rollback.",
syntax:`SAVEPOINT SavePointName;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=70000
WHERE EmployeeID=101;

SAVEPOINT SalaryUpdate;`,
keywordId:"SAVEPOINT",
sampleDataId:"Employees",
businessCaseId:"Partial Transaction Recovery",
optimizationId:"SAVEPOINT",
errorId:"SAVEPOINT",
interviewId:"SAVEPOINT",
interviewQuestions:["<b>Q:</b>What is SAVEPOINT?<br><b>A:</b>A marker inside a transaction.","<b>Q:</b>Why use SAVEPOINT?<br><b>A:</b>To rollback partially."],
relatedTopics:["savepoint","transaction","rollback","commit","database recovery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ACID PROPERTIES
==================================*/

{
id:356,
category:"SQL Transactions",
subCategory:"ACID Properties",
difficulty:"Intermediate",
title:"ACID Properties",
shortDescription:"ACID properties ensure reliable and consistent database transactions.",
syntax:`Atomicity
Consistency
Isolation
Durability`,
sql:`BEGIN TRANSACTION;

UPDATE Accounts
SET Balance=Balance-1000
WHERE AccountID=101;

COMMIT;`,
keywordId:"ACID_PROPERTIES",
sampleDataId:"Employees",
businessCaseId:"Banking Transaction Reliability",
optimizationId:"ACID_PROPERTIES",
errorId:"ACID_PROPERTIES",
interviewId:"ACID_PROPERTIES",
interviewQuestions:["<b>Q:</b>What are ACID properties?<br><b>A:</b>Rules that maintain transaction reliability.","<b>Q:</b>What does ACID stand for?<br><b>A:</b>Atomicity, Consistency, Isolation and Durability."],
relatedTopics:["acid properties","transaction","database consistency","atomicity","isolation","sql interview","sql examples","database programming","sql"]
},

/*==================================
 ATOMICITY
==================================*/

{
id:357,
category:"SQL Transactions",
subCategory:"Atomicity",
difficulty:"Intermediate",
title:"Atomicity",
shortDescription:"Atomicity ensures a transaction completes fully or not at all.",
syntax:`Transaction
=
Complete Success
OR
Complete Failure`,
sql:`BEGIN TRANSACTION;

UPDATE Account
SET Balance=Balance-500
WHERE AccountID=1;

UPDATE Account
SET Balance=Balance+500
WHERE AccountID=2;

COMMIT;`,
keywordId:"ATOMICITY",
sampleDataId:"Employees",
businessCaseId:"Bank Transfer Processing",
optimizationId:"ATOMICITY",
errorId:"ATOMICITY",
interviewId:"ATOMICITY",
interviewQuestions:["<b>Q:</b>What is Atomicity?<br><b>A:</b>All operations in a transaction succeed or fail together.","<b>Q:</b>Which ACID property prevents partial updates?<br><b>A:</b>Atomicity."],
relatedTopics:["atomicity","acid properties","transaction","database consistency","bank transaction","sql interview","sql examples","sql"]
},

/*==================================
 CONSISTENCY
==================================*/

{
id:358,
category:"SQL Transactions",
subCategory:"Consistency",
difficulty:"Intermediate",
title:"Consistency",
shortDescription:"Consistency ensures database remains valid before and after transactions.",
syntax:`Before Transaction
=
Valid Data

After Transaction
=
Valid Data`,
sql:`BEGIN TRANSACTION;

UPDATE Accounts
SET Balance=Balance-1000
WHERE AccountID=101;

COMMIT;`,
keywordId:"CONSISTENCY",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Accuracy",
optimizationId:"CONSISTENCY",
errorId:"CONSISTENCY",
interviewId:"CONSISTENCY",
interviewQuestions:["<b>Q:</b>What is Consistency?<br><b>A:</b>Keeps database rules and constraints valid.","<b>Q:</b>Which ACID property maintains valid data?<br><b>A:</b>Consistency."],
relatedTopics:["consistency","acid properties","transaction","database rules","data integrity","sql interview","sql examples","sql"]
},

/*==================================
 ISOLATION
==================================*/

{
id:359,
category:"SQL Transactions",
subCategory:"Isolation",
difficulty:"Advanced",
title:"Isolation",
shortDescription:"Isolation controls how transactions interact with each other.",
syntax:`Transaction A
+
Transaction B
=
Controlled Access`,
sql:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;`,
keywordId:"ISOLATION",
sampleDataId:"Employees",
businessCaseId:"Concurrent User Management",
optimizationId:"ISOLATION",
errorId:"ISOLATION",
interviewId:"ISOLATION",
interviewQuestions:["<b>Q:</b>What is Isolation?<br><b>A:</b>Controls visibility between transactions.","<b>Q:</b>Why use isolation levels?<br><b>A:</b>To prevent transaction conflicts."],
relatedTopics:["isolation","acid properties","transaction isolation level","concurrency","sql interview","sql examples","database programming","sql"]
},

/*==================================
 DURABILITY
==================================*/

{
id:360,
category:"SQL Transactions",
subCategory:"Durability",
difficulty:"Intermediate",
title:"Durability",
shortDescription:"Durability ensures committed data remains permanently stored.",
syntax:`COMMIT
=
Permanent Storage`,
sql:`BEGIN TRANSACTION;

INSERT INTO Employees
VALUES(101,'Rahul',50000);

COMMIT;`,
keywordId:"DURABILITY",
sampleDataId:"Employees",
businessCaseId:"Permanent Data Storage",
optimizationId:"DURABILITY",
errorId:"DURABILITY",
interviewId:"DURABILITY",
interviewQuestions:["<b>Q:</b>What is Durability?<br><b>A:</b>Committed changes survive system failures.","<b>Q:</b>Which ACID property ensures permanent save?<br><b>A:</b>Durability."],
relatedTopics:["durability","acid properties","commit","transaction","database recovery","sql interview","sql examples","sql"]
},

/*==================================
 SQL INDEXES
==================================*/

{
id:361,
category:"SQL Indexes",
subCategory:"Index",
difficulty:"Intermediate",
title:"SQL Index",
shortDescription:"An Index improves query performance by providing faster data access.",
syntax:`CREATE INDEX IndexName
ON TableName(column_name);`,
sql:`CREATE INDEX IX_EmployeeName
ON Employees(EmployeeName);`,
keywordId:"INDEX",
sampleDataId:"Employees",
businessCaseId:"Improve Query Performance",
optimizationId:"INDEX",
errorId:"INDEX",
interviewId:"INDEX",
interviewQuestions:["<b>Q:</b>What is SQL Index?<br><b>A:</b>A database object that improves data retrieval speed.","<b>Q:</b>Does index store complete table data?<br><b>A:</b>No, it stores indexed column information."],
relatedTopics:["index","sql index","database index","performance tuning","query optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE INDEX
==================================*/

{
id:362,
category:"SQL Indexes",
subCategory:"CREATE INDEX",
difficulty:"Beginner",
title:"CREATE INDEX",
shortDescription:"CREATE INDEX creates a new index on a table column.",
syntax:`CREATE INDEX IndexName
ON TableName(ColumnName);`,
sql:`CREATE INDEX IX_Department
ON Employees(Department);`,
keywordId:"CREATE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Faster Searching",
optimizationId:"CREATE_INDEX",
errorId:"CREATE_INDEX",
interviewId:"CREATE_INDEX",
interviewQuestions:["<b>Q:</b>What does CREATE INDEX do?<br><b>A:</b>Creates an index for faster retrieval.","<b>Q:</b>On which objects can indexes be created?<br><b>A:</b>Tables and views."],
relatedTopics:["create index","index","database optimization","query performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP INDEX
==================================*/

{
id:363,
category:"SQL Indexes",
subCategory:"DROP INDEX",
difficulty:"Beginner",
title:"DROP INDEX",
shortDescription:"DROP INDEX removes an existing index.",
syntax:`DROP INDEX IndexName;`,
sql:`DROP INDEX IX_Department;`,
keywordId:"DROP_INDEX",
sampleDataId:"Employees",
businessCaseId:"Remove Unnecessary Index",
optimizationId:"DROP_INDEX",
errorId:"DROP_INDEX",
interviewId:"DROP_INDEX",
interviewQuestions:["<b>Q:</b>What does DROP INDEX do?<br><b>A:</b>Deletes an index from database.","<b>Q:</b>Why remove indexes?<br><b>A:</b>To reduce storage and maintenance overhead."],
relatedTopics:["drop index","delete index","index","database optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CLUSTERED INDEX
==================================*/

{
id:364,
category:"SQL Indexes",
subCategory:"Clustered Index",
difficulty:"Advanced",
title:"Clustered Index",
shortDescription:"Clustered Index determines the physical order of data rows in a table.",
syntax:`CREATE CLUSTERED INDEX
IndexName
ON TableName(Column);`,
sql:`CREATE CLUSTERED INDEX IX_EmployeeID
ON Employees(EmployeeID);`,
keywordId:"CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Fast Range Searching",
optimizationId:"CLUSTERED_INDEX",
errorId:"CLUSTERED_INDEX",
interviewId:"CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is Clustered Index?<br><b>A:</b>An index that controls physical data order.","<b>Q:</b>How many clustered indexes can a table have?<br><b>A:</b>Only one."],
relatedTopics:["clustered index","index","sql performance","database optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NONCLUSTERED INDEX
==================================*/

{
id:365,
category:"SQL Indexes",
subCategory:"Nonclustered Index",
difficulty:"Advanced",
title:"Nonclustered Index",
shortDescription:"Nonclustered Index creates a separate structure pointing to table data.",
syntax:`CREATE NONCLUSTERED INDEX
IndexName
ON TableName(Column);`,
sql:`CREATE NONCLUSTERED INDEX IX_Salary
ON Employees(Salary);`,
keywordId:"NONCLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Optimize Search Queries",
optimizationId:"NONCLUSTERED_INDEX",
errorId:"NONCLUSTERED_INDEX",
interviewId:"NONCLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is Nonclustered Index?<br><b>A:</b>An index stored separately from actual table data.","<b>Q:</b>How many nonclustered indexes can a table have?<br><b>A:</b>Multiple."],
relatedTopics:["nonclustered index","index","sql performance","query optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNIQUE INDEX
==================================*/

{
id:366,
category:"SQL Indexes",
subCategory:"Unique Index",
difficulty:"Intermediate",
title:"Unique Index",
shortDescription:"Unique Index ensures that indexed column values do not contain duplicates.",
syntax:`CREATE UNIQUE INDEX IndexName
ON TableName(ColumnName);`,
sql:`CREATE UNIQUE INDEX IX_Email
ON Employees(Email);`,
keywordId:"UNIQUE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Prevent Duplicate Records",
optimizationId:"UNIQUE_INDEX",
errorId:"UNIQUE_INDEX",
interviewId:"UNIQUE_INDEX",
interviewQuestions:["<b>Q:</b>What is Unique Index?<br><b>A:</b>An index that prevents duplicate values.","<b>Q:</b>Can Unique Index improve performance?<br><b>A:</b>Yes, it speeds up searches."],
relatedTopics:["unique index","duplicate prevention","index","sql constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMPOSITE INDEX
==================================*/

{
id:367,
category:"SQL Indexes",
subCategory:"Composite Index",
difficulty:"Advanced",
title:"Composite Index",
shortDescription:"Composite Index is created using multiple columns.",
syntax:`CREATE INDEX IndexName
ON TableName(Column1,Column2);`,
sql:`CREATE INDEX IX_DeptSalary
ON Employees(Department,Salary);`,
keywordId:"COMPOSITE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Optimize Multi Column Searches",
optimizationId:"COMPOSITE_INDEX",
errorId:"COMPOSITE_INDEX",
interviewId:"COMPOSITE_INDEX",
interviewQuestions:["<b>Q:</b>What is Composite Index?<br><b>A:</b>An index created on multiple columns.","<b>Q:</b>How many columns can composite index contain?<br><b>A:</b>Multiple columns."],
relatedTopics:["composite index","multi column index","index","query optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COVERING INDEX
==================================*/

{
id:368,
category:"SQL Indexes",
subCategory:"Covering Index",
difficulty:"Advanced",
title:"Covering Index",
shortDescription:"Covering Index contains all columns required by a query.",
syntax:`CREATE INDEX IndexName
ON TableName(KeyColumn)
INCLUDE(ColumnName);`,
sql:`CREATE INDEX IX_EmployeeCover
ON Employees(EmployeeID)
INCLUDE(EmployeeName,Salary);`,
keywordId:"COVERING_INDEX",
sampleDataId:"Employees",
businessCaseId:"Reduce Table Lookup",
optimizationId:"COVERING_INDEX",
errorId:"COVERING_INDEX",
interviewId:"COVERING_INDEX",
interviewQuestions:["<b>Q:</b>What is Covering Index?<br><b>A:</b>An index containing all required query columns.","<b>Q:</b>Why use covering index?<br><b>A:</b>To improve query speed."],
relatedTopics:["covering index","included columns","index","performance tuning","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEX SEEK
==================================*/

{
id:369,
category:"SQL Indexes",
subCategory:"Index Seek",
difficulty:"Advanced",
title:"Index Seek",
shortDescription:"Index Seek directly finds matching rows using an index.",
syntax:`Query
→ Index
→ Required Rows`,
sql:`SELECT *
FROM Employees
WHERE EmployeeID=101;`,
keywordId:"INDEX_SEEK",
sampleDataId:"Employees",
businessCaseId:"Fast Record Retrieval",
optimizationId:"INDEX_SEEK",
errorId:"INDEX_SEEK",
interviewId:"INDEX_SEEK",
interviewQuestions:["<b>Q:</b>What is Index Seek?<br><b>A:</b>Searching directly through index structure.","<b>Q:</b>Is Index Seek faster than Scan?<br><b>A:</b>Usually yes."],
relatedTopics:["index seek","index scan","query performance","sql optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEX SCAN
==================================*/

{
id:370,
category:"SQL Indexes",
subCategory:"Index Scan",
difficulty:"Advanced",
title:"Index Scan",
shortDescription:"Index Scan reads all rows from an index to find results.",
syntax:`Query
→ Scan Complete Index`,
sql:`SELECT *
FROM Employees
WHERE Salary>0;`,
keywordId:"INDEX_SCAN",
sampleDataId:"Employees",
businessCaseId:"Large Data Retrieval",
optimizationId:"INDEX_SCAN",
errorId:"INDEX_SCAN",
interviewId:"INDEX_SCAN",
interviewQuestions:["<b>Q:</b>What is Index Scan?<br><b>A:</b>Reading entire index structure.","<b>Q:</b>Why avoid unnecessary scans?<br><b>A:</b>They can reduce performance on large tables."],
relatedTopics:["index scan","index seek","query optimization","performance tuning","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL STORED PROCEDURES
==================================*/

{
id:371,
category:"SQL Stored Procedures",
subCategory:"Stored Procedure",
difficulty:"Intermediate",
title:"Stored Procedure",
shortDescription:"A Stored Procedure is a reusable set of SQL statements stored inside the database.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SQL Statements;
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN

SELECT *
FROM Employees;

END;`,
keywordId:"STORED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Reusable Database Operations",
optimizationId:"STORED_PROCEDURE",
errorId:"STORED_PROCEDURE",
interviewId:"STORED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Stored Procedure?<br><b>A:</b>A precompiled group of SQL statements stored in database.","<b>Q:</b>Why use stored procedures?<br><b>A:</b>For reusability and performance."],
relatedTopics:["stored procedure","procedure","sql procedure","database programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE PROCEDURE
==================================*/

{
id:372,
category:"SQL Stored Procedures",
subCategory:"CREATE PROCEDURE",
difficulty:"Beginner",
title:"CREATE PROCEDURE",
shortDescription:"CREATE PROCEDURE creates a new stored procedure.",
syntax:`CREATE PROCEDURE ProcedureName
AS
BEGIN
SQL Code
END;`,
sql:`CREATE PROCEDURE GetEmployeeData
AS
BEGIN

SELECT EmployeeName,Salary
FROM Employees;

END;`,
keywordId:"CREATE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Create Reusable Reports",
optimizationId:"CREATE_PROCEDURE",
errorId:"CREATE_PROCEDURE",
interviewId:"CREATE_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does CREATE PROCEDURE do?<br><b>A:</b>Creates a stored procedure.","<b>Q:</b>Can procedure contain multiple SQL statements?<br><b>A:</b>Yes."],
relatedTopics:["create procedure","stored procedure","sql procedure","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXECUTE PROCEDURE
==================================*/

{
id:373,
category:"SQL Stored Procedures",
subCategory:"Execute Procedure",
difficulty:"Beginner",
title:"Execute Stored Procedure",
shortDescription:"EXEC runs a stored procedure.",
syntax:`EXEC ProcedureName;`,
sql:`EXEC GetEmployees;`,
keywordId:"EXEC_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Run Stored Logic",
optimizationId:"EXEC_PROCEDURE",
errorId:"EXEC_PROCEDURE",
interviewId:"EXEC_PROCEDURE",
interviewQuestions:["<b>Q:</b>How to execute procedure?<br><b>A:</b>Using EXEC command.","<b>Q:</b>Can procedure accept parameters?<br><b>A:</b>Yes."],
relatedTopics:["execute procedure","exec","stored procedure","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE WITH PARAMETERS
==================================*/

{
id:374,
category:"SQL Stored Procedures",
subCategory:"Procedure Parameters",
difficulty:"Intermediate",
title:"Stored Procedure with Parameters",
shortDescription:"Parameters allow stored procedures to accept dynamic values.",
syntax:`CREATE PROCEDURE ProcedureName
@Parameter datatype
AS
BEGIN
SQL Code
END;`,
sql:`CREATE PROCEDURE GetEmployee
@EmployeeID INT
AS
BEGIN

SELECT *
FROM Employees
WHERE EmployeeID=@EmployeeID;

END;`,
keywordId:"PROCEDURE_PARAMETERS",
sampleDataId:"Employees",
businessCaseId:"Dynamic Reports",
optimizationId:"PROCEDURE_PARAMETERS",
errorId:"PROCEDURE_PARAMETERS",
interviewId:"PROCEDURE_PARAMETERS",
interviewQuestions:["<b>Q:</b>Why use parameters in procedures?<br><b>A:</b>To pass dynamic values.","<b>Q:</b>Can procedures have multiple parameters?<br><b>A:</b>Yes."],
relatedTopics:["procedure parameters","stored procedure","input parameter","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER PROCEDURE
==================================*/

{
id:375,
category:"SQL Stored Procedures",
subCategory:"ALTER PROCEDURE",
difficulty:"Intermediate",
title:"ALTER PROCEDURE",
shortDescription:"ALTER PROCEDURE modifies an existing stored procedure.",
syntax:`ALTER PROCEDURE ProcedureName
AS
BEGIN
SQL Code
END;`,
sql:`ALTER PROCEDURE GetEmployees
AS
BEGIN

SELECT EmployeeName
FROM Employees;

END;`,
keywordId:"ALTER_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Modify Existing Logic",
optimizationId:"ALTER_PROCEDURE",
errorId:"ALTER_PROCEDURE",
interviewId:"ALTER_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does ALTER PROCEDURE do?<br><b>A:</b>Updates procedure definition.","<b>Q:</b>Does it create a new procedure?<br><b>A:</b>No, it modifies existing one."],
relatedTopics:["alter procedure","modify procedure","stored procedure","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP PROCEDURE
==================================*/

{
id:376,
category:"SQL Stored Procedures",
subCategory:"DROP PROCEDURE",
difficulty:"Beginner",
title:"DROP PROCEDURE",
shortDescription:"DROP PROCEDURE removes an existing stored procedure from database.",
syntax:`DROP PROCEDURE ProcedureName;`,
sql:`DROP PROCEDURE GetEmployees;`,
keywordId:"DROP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Database Objects",
optimizationId:"DROP_PROCEDURE",
errorId:"DROP_PROCEDURE",
interviewId:"DROP_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does DROP PROCEDURE do?<br><b>A:</b>Deletes a stored procedure.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop procedure","delete procedure","stored procedure","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 OUTPUT PARAMETER
==================================*/

{
id:377,
category:"SQL Stored Procedures",
subCategory:"Output Parameter",
difficulty:"Advanced",
title:"Stored Procedure Output Parameter",
shortDescription:"Output parameters return values from stored procedures.",
syntax:`CREATE PROCEDURE ProcedureName
@Parameter datatype OUTPUT
AS
BEGIN
SQL Code
END;`,
sql:`CREATE PROCEDURE GetEmployeeCount
@Total INT OUTPUT
AS
BEGIN

SELECT @Total=COUNT(*)
FROM Employees;

END;`,
keywordId:"OUTPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Return Calculated Values",
optimizationId:"OUTPUT_PARAMETER",
errorId:"OUTPUT_PARAMETER",
interviewId:"OUTPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is Output Parameter?<br><b>A:</b>A parameter used to return values.","<b>Q:</b>Where is it used?<br><b>A:</b>Stored procedures and functions."],
relatedTopics:["output parameter","stored procedure","return value","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INPUT PARAMETER
==================================*/

{
id:378,
category:"SQL Stored Procedures",
subCategory:"Input Parameter",
difficulty:"Intermediate",
title:"Stored Procedure Input Parameter",
shortDescription:"Input parameters pass values into stored procedures.",
syntax:`CREATE PROCEDURE ProcedureName
@Parameter datatype
AS
BEGIN
SQL Code
END;`,
sql:`CREATE PROCEDURE FindEmployee
@Department VARCHAR(50)
AS
BEGIN

SELECT *
FROM Employees
WHERE Department=@Department;

END;`,
keywordId:"INPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Dynamic Filtering",
optimizationId:"INPUT_PARAMETER",
errorId:"INPUT_PARAMETER",
interviewId:"INPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is Input Parameter?<br><b>A:</b>A value passed into a procedure.","<b>Q:</b>Why use input parameters?<br><b>A:</b>To make procedures reusable."],
relatedTopics:["input parameter","stored procedure","procedure parameter","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE VS FUNCTION
==================================*/

{
id:379,
category:"SQL Stored Procedures",
subCategory:"Procedure vs Function",
difficulty:"Advanced",
title:"Stored Procedure vs Function",
shortDescription:"Comparison between stored procedures and SQL functions.",
syntax:`Procedure:
EXEC ProcedureName

Function:
SELECT FunctionName()`,
sql:`CREATE PROCEDURE GetData
AS
BEGIN
SELECT *
FROM Employees;
END;`,
keywordId:"PROCEDURE_VS_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"SQL Interview Comparison",
optimizationId:"PROCEDURE_VS_FUNCTION",
errorId:"PROCEDURE_VS_FUNCTION",
interviewId:"PROCEDURE_VS_FUNCTION",
interviewQuestions:["<b>Q:</b>Difference between procedure and function?<br><b>A:</b>Procedure performs actions while function returns values.","<b>Q:</b>Can function modify data?<br><b>A:</b>Depends on database rules."],
relatedTopics:["procedure vs function","stored procedure","sql function","sql interview","database programming","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE SECURITY
==================================*/

{
id:380,
category:"SQL Stored Procedures",
subCategory:"Procedure Security",
difficulty:"Advanced",
title:"Stored Procedure Security",
shortDescription:"Stored procedures improve security by controlling database access.",
syntax:`GRANT EXECUTE
ON ProcedureName
TO User;`,
sql:`GRANT EXECUTE
ON GetEmployees
TO AnalystUser;`,
keywordId:"PROCEDURE_SECURITY",
sampleDataId:"Employees",
businessCaseId:"Controlled Database Access",
optimizationId:"PROCEDURE_SECURITY",
errorId:"PROCEDURE_SECURITY",
interviewId:"PROCEDURE_SECURITY",
interviewQuestions:["<b>Q:</b>How procedures improve security?<br><b>A:</b>Users can access procedures instead of direct tables.","<b>Q:</b>What permission is required?<br><b>A:</b>EXECUTE permission."],
relatedTopics:["procedure security","stored procedure","database security","grant execute","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL FUNCTIONS
==================================*/

{
id:381,
category:"SQL Functions",
subCategory:"SQL Function",
difficulty:"Beginner",
title:"SQL Function",
shortDescription:"A Function is a reusable SQL object that returns a value.",
syntax:`CREATE FUNCTION FunctionName
(
Parameters
)
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION GetBonus
(
@Salary INT
)
RETURNS INT
AS
BEGIN

RETURN @Salary*10/100;

END;`,
keywordId:"FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Calculations",
optimizationId:"FUNCTION",
errorId:"FUNCTION",
interviewId:"FUNCTION",
interviewQuestions:["<b>Q:</b>What is SQL Function?<br><b>A:</b>A reusable object that returns a value.","<b>Q:</b>Why use functions?<br><b>A:</b>To avoid repeating calculations."],
relatedTopics:["function","sql function","database function","calculation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BUILT IN FUNCTION
==================================*/

{
id:382,
category:"SQL Functions",
subCategory:"Built In Function",
difficulty:"Beginner",
title:"Built In Functions",
shortDescription:"Built-in functions are predefined SQL functions for common operations.",
syntax:`SELECT FunctionName(column)
FROM table;`,
sql:`SELECT
UPPER(EmployeeName),
LEN(EmployeeName)
FROM Employees;`,
keywordId:"BUILT_IN_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Data Transformation",
optimizationId:"BUILT_IN_FUNCTION",
errorId:"BUILT_IN_FUNCTION",
interviewId:"BUILT_IN_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Built-in Functions?<br><b>A:</b>Predefined functions provided by SQL.","<b>Q:</b>Example of built-in function?<br><b>A:</b>SUM, COUNT, UPPER, GETDATE."],
relatedTopics:["built in function","sql function","aggregate function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 USER DEFINED FUNCTION
==================================*/

{
id:383,
category:"SQL Functions",
subCategory:"User Defined Function",
difficulty:"Intermediate",
title:"User Defined Function (UDF)",
shortDescription:"User Defined Function is created by users for custom logic.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION CalculateTax
(
@Amount INT
)
RETURNS INT
AS
BEGIN

RETURN @Amount*5/100;

END;`,
keywordId:"USER_DEFINED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Custom Business Calculation",
optimizationId:"USER_DEFINED_FUNCTION",
errorId:"USER_DEFINED_FUNCTION",
interviewId:"USER_DEFINED_FUNCTION",
interviewQuestions:["<b>Q:</b>What is UDF?<br><b>A:</b>A function created by database users.","<b>Q:</b>Why create UDF?<br><b>A:</b>For reusable custom logic."],
relatedTopics:["user defined function","udf","sql function","custom function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SCALAR FUNCTION
==================================*/

{
id:384,
category:"SQL Functions",
subCategory:"Scalar Function",
difficulty:"Intermediate",
title:"Scalar Function",
shortDescription:"Scalar Function returns a single value.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS datatype`,
sql:`CREATE FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN

RETURN @Salary*12;

END;`,
keywordId:"SCALAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Single Value Calculation",
optimizationId:"SCALAR_FUNCTION",
errorId:"SCALAR_FUNCTION",
interviewId:"SCALAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What is Scalar Function?<br><b>A:</b>A function returning one value.","<b>Q:</b>Example?<br><b>A:</b>Salary calculation function."],
relatedTopics:["scalar function","sql function","single value","udf","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TABLE VALUED FUNCTION
==================================*/

{
id:385,
category:"SQL Functions",
subCategory:"Table Valued Function",
difficulty:"Advanced",
title:"Table Valued Function",
shortDescription:"Table Valued Function returns a table as output.",
syntax:`CREATE FUNCTION FunctionName()
RETURNS TABLE
AS
RETURN
(
SELECT Query
);`,
sql:`CREATE FUNCTION GetITEmployees()
RETURNS TABLE
AS
RETURN
(
SELECT *
FROM Employees
WHERE Department='IT'
);`,
keywordId:"TABLE_VALUED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Data Sets",
optimizationId:"TABLE_VALUED_FUNCTION",
errorId:"TABLE_VALUED_FUNCTION",
interviewId:"TABLE_VALUED_FUNCTION",
interviewQuestions:["<b>Q:</b>What is Table Valued Function?<br><b>A:</b>A function that returns rows and columns.","<b>Q:</b>How is it different from Scalar Function?<br><b>A:</b>It returns a table instead of single value."],
relatedTopics:["table valued function","tvf","sql function","udf","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL STRING FUNCTIONS
==================================*/

{
id:386,
category:"SQL Functions",
subCategory:"String Functions",
difficulty:"Beginner",
title:"SQL String Functions",
shortDescription:"String functions perform operations on text values.",
syntax:`SELECT
FunctionName(column)
FROM table;`,
sql:`SELECT
UPPER(EmployeeName) AS Name
FROM Employees;`,
keywordId:"STRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Text Data Cleaning",
optimizationId:"STRING_FUNCTION",
errorId:"STRING_FUNCTION",
interviewId:"STRING_FUNCTION",
interviewQuestions:["<b>Q:</b>What are String Functions?<br><b>A:</b>Functions used to manipulate text data.","<b>Q:</b>Examples?<br><b>A:</b>UPPER, LOWER, CONCAT, SUBSTRING."],
relatedTopics:["string function","text function","sql function","data cleaning","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UPPER FUNCTION
==================================*/

{
id:387,
category:"SQL Functions",
subCategory:"UPPER Function",
difficulty:"Beginner",
title:"UPPER Function",
shortDescription:"UPPER converts text values into uppercase letters.",
syntax:`UPPER(column_name);`,
sql:`SELECT
UPPER(EmployeeName)
FROM Employees;`,
keywordId:"UPPER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Standardize Text Format",
optimizationId:"UPPER_FUNCTION",
errorId:"UPPER_FUNCTION",
interviewId:"UPPER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does UPPER do?<br><b>A:</b>Converts text into uppercase.","<b>Q:</b>Where is it useful?<br><b>A:</b>Data formatting."],
relatedTopics:["upper","uppercase","string function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LOWER FUNCTION
==================================*/

{
id:388,
category:"SQL Functions",
subCategory:"LOWER Function",
difficulty:"Beginner",
title:"LOWER Function",
shortDescription:"LOWER converts text values into lowercase letters.",
syntax:`LOWER(column_name);`,
sql:`SELECT
LOWER(EmployeeName)
FROM Employees;`,
keywordId:"LOWER_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Normalize Text Data",
optimizationId:"LOWER_FUNCTION",
errorId:"LOWER_FUNCTION",
interviewId:"LOWER_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LOWER do?<br><b>A:</b>Converts text into lowercase.","<b>Q:</b>Why use LOWER?<br><b>A:</b>For case-insensitive comparisons."],
relatedTopics:["lower","lowercase","string function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONCAT FUNCTION
==================================*/

{
id:389,
category:"SQL Functions",
subCategory:"CONCAT Function",
difficulty:"Beginner",
title:"CONCAT Function",
shortDescription:"CONCAT joins multiple text values into a single string.",
syntax:`CONCAT(value1,value2);`,
sql:`SELECT
CONCAT(EmployeeName,' - ',Department)
AS EmployeeDetails
FROM Employees;`,
keywordId:"CONCAT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Combine Text Information",
optimizationId:"CONCAT_FUNCTION",
errorId:"CONCAT_FUNCTION",
interviewId:"CONCAT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CONCAT do?<br><b>A:</b>Combines multiple strings.","<b>Q:</b>Alternative operator?<br><b>A:</b>Plus (+) operator in some databases."],
relatedTopics:["concat","combine string","string function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LENGTH FUNCTION
==================================*/

{
id:390,
category:"SQL Functions",
subCategory:"LENGTH Function",
difficulty:"Beginner",
title:"LENGTH Function",
shortDescription:"LENGTH returns the number of characters in a string.",
syntax:`LENGTH(column_name);`,
sql:`SELECT
EmployeeName,
LENGTH(EmployeeName)
AS NameLength
FROM Employees;`,
keywordId:"LENGTH_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Validate Text Data",
optimizationId:"LENGTH_FUNCTION",
errorId:"LENGTH_FUNCTION",
interviewId:"LENGTH_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LENGTH return?<br><b>A:</b>Number of characters.","<b>Q:</b>Where is it used?<br><b>A:</b>Data validation."],
relatedTopics:["length","string length","text function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBSTRING FUNCTION
==================================*/

{
id:391,
category:"SQL Functions",
subCategory:"SUBSTRING Function",
difficulty:"Beginner",
title:"SUBSTRING Function",
shortDescription:"SUBSTRING extracts a part of a text value.",
syntax:`SUBSTRING(
string,
start_position,
length
);`,
sql:`SELECT
SUBSTRING(EmployeeName,1,5)
AS ShortName
FROM Employees;`,
keywordId:"SUBSTRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Specific Text",
optimizationId:"SUBSTRING_FUNCTION",
errorId:"SUBSTRING_FUNCTION",
interviewId:"SUBSTRING_FUNCTION",
interviewQuestions:["<b>Q:</b>What does SUBSTRING do?<br><b>A:</b>Extracts part of a string.","<b>Q:</b>Where is SUBSTRING used?<br><b>A:</b>Data extraction and cleaning."],
relatedTopics:["substring","extract text","string function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT FUNCTION
==================================*/

{
id:392,
category:"SQL Functions",
subCategory:"LEFT Function",
difficulty:"Beginner",
title:"LEFT Function",
shortDescription:"LEFT returns characters from the beginning of a string.",
syntax:`LEFT(
string,
number_of_characters
);`,
sql:`SELECT
LEFT(EmployeeName,3)
AS ShortName
FROM Employees;`,
keywordId:"LEFT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Starting Characters",
optimizationId:"LEFT_FUNCTION",
errorId:"LEFT_FUNCTION",
interviewId:"LEFT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does LEFT function do?<br><b>A:</b>Returns characters from left side.","<b>Q:</b>Example use?<br><b>A:</b>Extract first letters of names."],
relatedTopics:["left function","string extraction","sql function","text function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT FUNCTION
==================================*/

{
id:393,
category:"SQL Functions",
subCategory:"RIGHT Function",
difficulty:"Beginner",
title:"RIGHT Function",
shortDescription:"RIGHT returns characters from the end of a string.",
syntax:`RIGHT(
string,
number_of_characters
);`,
sql:`SELECT
RIGHT(EmployeeName,3)
AS LastCharacters
FROM Employees;`,
keywordId:"RIGHT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Ending Characters",
optimizationId:"RIGHT_FUNCTION",
errorId:"RIGHT_FUNCTION",
interviewId:"RIGHT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does RIGHT function do?<br><b>A:</b>Returns characters from right side.","<b>Q:</b>Where is it used?<br><b>A:</b>Code and identifier extraction."],
relatedTopics:["right function","string extraction","sql function","text function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRIM FUNCTION
==================================*/

{
id:394,
category:"SQL Functions",
subCategory:"TRIM Function",
difficulty:"Beginner",
title:"TRIM Function",
shortDescription:"TRIM removes unwanted spaces from text values.",
syntax:`TRIM(column_name);`,
sql:`SELECT
TRIM(EmployeeName)
FROM Employees;`,
keywordId:"TRIM_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Clean Text Data",
optimizationId:"TRIM_FUNCTION",
errorId:"TRIM_FUNCTION",
interviewId:"TRIM_FUNCTION",
interviewQuestions:["<b>Q:</b>What does TRIM do?<br><b>A:</b>Removes leading and trailing spaces.","<b>Q:</b>Why use TRIM?<br><b>A:</b>To clean imported data."],
relatedTopics:["trim","remove spaces","string function","data cleaning","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REPLACE FUNCTION
==================================*/

{
id:395,
category:"SQL Functions",
subCategory:"REPLACE Function",
difficulty:"Beginner",
title:"REPLACE Function",
shortDescription:"REPLACE substitutes existing text with new text.",
syntax:`REPLACE(
string,
old_value,
new_value
);`,
sql:`SELECT
REPLACE(Department,'IT','Technology')
FROM Employees;`,
keywordId:"REPLACE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Update Text Values",
optimizationId:"REPLACE_FUNCTION",
errorId:"REPLACE_FUNCTION",
interviewId:"REPLACE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does REPLACE do?<br><b>A:</b>Replaces matching text.","<b>Q:</b>Where is it used?<br><b>A:</b>Data correction and cleaning."],
relatedTopics:["replace function","replace text","string function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL DATE FUNCTIONS
==================================*/

{
id:396,
category:"SQL Functions",
subCategory:"Date Functions",
difficulty:"Beginner",
title:"SQL Date Functions",
shortDescription:"Date functions perform operations on date and time values.",
syntax:`SELECT
DateFunction(column)
FROM table;`,
sql:`SELECT
EmployeeName,
YEAR(JoiningDate) AS JoiningYear
FROM Employees;`,
keywordId:"DATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Date Analysis and Reporting",
optimizationId:"DATE_FUNCTION",
errorId:"DATE_FUNCTION",
interviewId:"DATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Date Functions?<br><b>A:</b>Functions used to manipulate date values.","<b>Q:</b>Examples?<br><b>A:</b>YEAR, MONTH, DAY, DATEADD."],
relatedTopics:["date function","sql date","time function","sql function","reporting","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GETDATE FUNCTION
==================================*/

{
id:397,
category:"SQL Functions",
subCategory:"GETDATE Function",
difficulty:"Beginner",
title:"GETDATE Function",
shortDescription:"GETDATE returns current system date and time.",
syntax:`GETDATE();`,
sql:`SELECT
GETDATE()
AS CurrentDateTime;`,
keywordId:"GETDATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Capture Current Timestamp",
optimizationId:"GETDATE_FUNCTION",
errorId:"GETDATE_FUNCTION",
interviewId:"GETDATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does GETDATE return?<br><b>A:</b>Current date and time.","<b>Q:</b>Where is GETDATE used?<br><b>A:</b>Audit and timestamp columns."],
relatedTopics:["getdate","current date","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CURRENT_DATE FUNCTION
==================================*/

{
id:398,
category:"SQL Functions",
subCategory:"CURRENT_DATE",
difficulty:"Beginner",
title:"CURRENT_DATE Function",
shortDescription:"CURRENT_DATE returns the current date without time.",
syntax:`CURRENT_DATE;`,
sql:`SELECT
CURRENT_DATE
AS TodayDate;`,
keywordId:"CURRENT_DATE",
sampleDataId:"Employees",
businessCaseId:"Date Based Reporting",
optimizationId:"CURRENT_DATE",
errorId:"CURRENT_DATE",
interviewId:"CURRENT_DATE",
interviewQuestions:["<b>Q:</b>What is CURRENT_DATE?<br><b>A:</b>Returns today's date.","<b>Q:</b>Difference between GETDATE and CURRENT_DATE?<br><b>A:</b>GETDATE includes time."],
relatedTopics:["current date","today date","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 YEAR FUNCTION
==================================*/

{
id:399,
category:"SQL Functions",
subCategory:"YEAR Function",
difficulty:"Beginner",
title:"YEAR Function",
shortDescription:"YEAR extracts year value from a date.",
syntax:`YEAR(date_column);`,
sql:`SELECT
EmployeeName,
YEAR(JoiningDate)
AS JoiningYear
FROM Employees;`,
keywordId:"YEAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Year Wise Analysis",
optimizationId:"YEAR_FUNCTION",
errorId:"YEAR_FUNCTION",
interviewId:"YEAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does YEAR function return?<br><b>A:</b>Year portion from date.","<b>Q:</b>Example use?<br><b>A:</b>Yearly employee reports."],
relatedTopics:["year function","extract year","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MONTH FUNCTION
==================================*/

{
id:400,
category:"SQL Functions",
subCategory:"MONTH Function",
difficulty:"Beginner",
title:"MONTH Function",
shortDescription:"MONTH extracts month value from a date.",
syntax:`MONTH(date_column);`,
sql:`SELECT
EmployeeName,
MONTH(JoiningDate)
AS JoiningMonth
FROM Employees;`,
keywordId:"MONTH_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Monthly Analysis",
optimizationId:"MONTH_FUNCTION",
errorId:"MONTH_FUNCTION",
interviewId:"MONTH_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MONTH function return?<br><b>A:</b>Month number from date.","<b>Q:</b>Where used?<br><b>A:</b>Monthly reports and trends."],
relatedTopics:["month function","extract month","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DAY FUNCTION
==================================*/

{
id:401,
category:"SQL Functions",
subCategory:"DAY Function",
difficulty:"Beginner",
title:"DAY Function",
shortDescription:"DAY extracts day value from a date.",
syntax:`DAY(date_column);`,
sql:`SELECT
EmployeeName,
DAY(JoiningDate)
AS JoiningDay
FROM Employees;`,
keywordId:"DAY_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Day Wise Analysis",
optimizationId:"DAY_FUNCTION",
errorId:"DAY_FUNCTION",
interviewId:"DAY_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DAY function return?<br><b>A:</b>Day number from date.","<b>Q:</b>Where used?<br><b>A:</b>Date based reporting."],
relatedTopics:["day function","extract day","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEADD FUNCTION
==================================*/

{
id:402,
category:"SQL Functions",
subCategory:"DATEADD Function",
difficulty:"Intermediate",
title:"DATEADD Function",
shortDescription:"DATEADD adds a specific time interval to a date.",
syntax:`DATEADD(
interval,
number,
date
);`,
sql:`SELECT
DATEADD(YEAR,1,JoiningDate)
AS NextYear
FROM Employees;`,
keywordId:"DATEADD_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Calculate Future Dates",
optimizationId:"DATEADD_FUNCTION",
errorId:"DATEADD_FUNCTION",
interviewId:"DATEADD_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DATEADD do?<br><b>A:</b>Adds interval to date.","<b>Q:</b>Example use?<br><b>A:</b>Calculate expiry or renewal dates."],
relatedTopics:["dateadd","date calculation","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEDIFF FUNCTION
==================================*/

{
id:403,
category:"SQL Functions",
subCategory:"DATEDIFF Function",
difficulty:"Intermediate",
title:"DATEDIFF Function",
shortDescription:"DATEDIFF calculates difference between two dates.",
syntax:`DATEDIFF(
interval,
start_date,
end_date
);`,
sql:`SELECT
EmployeeName,
DATEDIFF(YEAR,JoiningDate,GETDATE())
AS Experience
FROM Employees;`,
keywordId:"DATEDIFF_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Calculate Duration",
optimizationId:"DATEDIFF_FUNCTION",
errorId:"DATEDIFF_FUNCTION",
interviewId:"DATEDIFF_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DATEDIFF return?<br><b>A:</b>Difference between dates.","<b>Q:</b>Where used?<br><b>A:</b>Age, experience and SLA calculation."],
relatedTopics:["datediff","date difference","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEPART FUNCTION
==================================*/

{
id:404,
category:"SQL Functions",
subCategory:"DATEPART Function",
difficulty:"Intermediate",
title:"DATEPART Function",
shortDescription:"DATEPART extracts a specific part of date such as year or month.",
syntax:`DATEPART(
part,
date
);`,
sql:`SELECT
DATEPART(MONTH,JoiningDate)
AS JoiningMonth
FROM Employees;`,
keywordId:"DATEPART_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Extract Date Components",
optimizationId:"DATEPART_FUNCTION",
errorId:"DATEPART_FUNCTION",
interviewId:"DATEPART_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DATEPART do?<br><b>A:</b>Returns selected date portion.","<b>Q:</b>Difference between YEAR and DATEPART?<br><b>A:</b>DATEPART is more flexible."],
relatedTopics:["datepart","date extraction","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ISDATE FUNCTION
==================================*/

{
id:405,
category:"SQL Functions",
subCategory:"ISDATE Function",
difficulty:"Intermediate",
title:"ISDATE Function",
shortDescription:"ISDATE checks whether a value is a valid date.",
syntax:`ISDATE(expression);`,
sql:`SELECT
ISDATE('2026-01-01')
AS ValidDate;`,
keywordId:"ISDATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Validate Date Data",
optimizationId:"ISDATE_FUNCTION",
errorId:"ISDATE_FUNCTION",
interviewId:"ISDATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ISDATE return?<br><b>A:</b>1 if valid date otherwise 0.","<b>Q:</b>Where used?<br><b>A:</b>Data validation."],
relatedTopics:["isdate","date validation","date function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL AGGREGATE FUNCTIONS
==================================*/

{
id:406,
category:"SQL Functions",
subCategory:"Aggregate Functions",
difficulty:"Beginner",
title:"SQL Aggregate Functions",
shortDescription:"Aggregate functions perform calculations on multiple rows and return a single result.",
syntax:`SELECT
AggregateFunction(column)
FROM table;`,
sql:`SELECT
AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"AGGREGATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Business Data Analysis",
optimizationId:"AGGREGATE_FUNCTION",
errorId:"AGGREGATE_FUNCTION",
interviewId:"AGGREGATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Aggregate Functions?<br><b>A:</b>Functions that perform calculations on multiple rows.","<b>Q:</b>Examples?<br><b>A:</b>SUM, AVG, COUNT, MIN, MAX."],
relatedTopics:["aggregate function","sql calculation","sum avg count","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COUNT FUNCTION
==================================*/

{
id:407,
category:"SQL Functions",
subCategory:"COUNT Function",
difficulty:"Beginner",
title:"COUNT Function",
shortDescription:"COUNT returns the number of rows or non-null values.",
syntax:`COUNT(column_name);`,
sql:`SELECT
COUNT(*) AS TotalEmployees
FROM Employees;`,
keywordId:"COUNT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Count Business Records",
optimizationId:"COUNT_FUNCTION",
errorId:"COUNT_FUNCTION",
interviewId:"COUNT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does COUNT do?<br><b>A:</b>Counts records.","<b>Q:</b>Difference between COUNT(*) and COUNT(column)?<br><b>A:</b>COUNT(column) ignores NULL values."],
relatedTopics:["count","count function","aggregate function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUM FUNCTION
==================================*/

{
id:408,
category:"SQL Functions",
subCategory:"SUM Function",
difficulty:"Beginner",
title:"SUM Function",
shortDescription:"SUM calculates the total value of numeric columns.",
syntax:`SUM(column_name);`,
sql:`SELECT
SUM(Salary) AS TotalSalary
FROM Employees;`,
keywordId:"SUM_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Calculate Total Amount",
optimizationId:"SUM_FUNCTION",
errorId:"SUM_FUNCTION",
interviewId:"SUM_FUNCTION",
interviewQuestions:["<b>Q:</b>What does SUM do?<br><b>A:</b>Adds numeric values.","<b>Q:</b>Where used?<br><b>A:</b>Revenue and salary calculations."],
relatedTopics:["sum","sum function","aggregate function","sql calculation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AVG FUNCTION
==================================*/

{
id:409,
category:"SQL Functions",
subCategory:"AVG Function",
difficulty:"Beginner",
title:"AVG Function",
shortDescription:"AVG calculates the average value of numeric data.",
syntax:`AVG(column_name);`,
sql:`SELECT
AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"AVG_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Average Performance Analysis",
optimizationId:"AVG_FUNCTION",
errorId:"AVG_FUNCTION",
interviewId:"AVG_FUNCTION",
interviewQuestions:["<b>Q:</b>What does AVG do?<br><b>A:</b>Returns average value.","<b>Q:</b>Where used?<br><b>A:</b>Salary and performance analysis."],
relatedTopics:["avg","average function","aggregate function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MIN FUNCTION
==================================*/

{
id:410,
category:"SQL Functions",
subCategory:"MIN Function",
difficulty:"Beginner",
title:"MIN Function",
shortDescription:"MIN returns the smallest value from a column.",
syntax:`MIN(column_name);`,
sql:`SELECT
MIN(Salary) AS LowestSalary
FROM Employees;`,
keywordId:"MIN_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Find Minimum Value",
optimizationId:"MIN_FUNCTION",
errorId:"MIN_FUNCTION",
interviewId:"MIN_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MIN do?<br><b>A:</b>Returns smallest value.","<b>Q:</b>Where used?<br><b>A:</b>Minimum price, salary or score analysis."],
relatedTopics:["min","minimum function","aggregate function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MAX FUNCTION
==================================*/

{
id:411,
category:"SQL Functions",
subCategory:"MAX Function",
difficulty:"Beginner",
title:"MAX Function",
shortDescription:"MAX returns the highest value from a column.",
syntax:`MAX(column_name);`,
sql:`SELECT
MAX(Salary) AS HighestSalary
FROM Employees;`,
keywordId:"MAX_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Find Maximum Value",
optimizationId:"MAX_FUNCTION",
errorId:"MAX_FUNCTION",
interviewId:"MAX_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MAX do?<br><b>A:</b>Returns the highest value.","<b>Q:</b>Where used?<br><b>A:</b>Highest salary, sales or score analysis."],
relatedTopics:["max","maximum function","aggregate function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GROUP BY FUNCTION
==================================*/

{
id:412,
category:"SQL Functions",
subCategory:"GROUP BY",
difficulty:"Beginner",
title:"GROUP BY Clause",
shortDescription:"GROUP BY combines rows with similar values for aggregate calculations.",
syntax:`SELECT column,
AggregateFunction(column)
FROM table
GROUP BY column;`,
sql:`SELECT
Department,
AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department;`,
keywordId:"GROUP_BY",
sampleDataId:"Employees",
businessCaseId:"Department Wise Analysis",
optimizationId:"GROUP_BY",
errorId:"GROUP_BY",
interviewId:"GROUP_BY",
interviewQuestions:["<b>Q:</b>Why use GROUP BY?<br><b>A:</b>To perform calculations category wise.","<b>Q:</b>Which functions work with GROUP BY?<br><b>A:</b>Aggregate functions."],
relatedTopics:["group by","aggregate","sql function","summary report","sql interview","sql examples","sql server","sql"]
},

/*==================================
 HAVING CLAUSE
==================================*/

{
id:413,
category:"SQL Functions",
subCategory:"HAVING Clause",
difficulty:"Intermediate",
title:"HAVING Clause",
shortDescription:"HAVING filters grouped records after aggregation.",
syntax:`SELECT column,
AggregateFunction(column)
FROM table
GROUP BY column
HAVING condition;`,
sql:`SELECT
Department,
COUNT(*) AS TotalEmployees
FROM Employees
GROUP BY Department
HAVING COUNT(*)>5;`,
keywordId:"HAVING",
sampleDataId:"Employees",
businessCaseId:"Filter Summary Results",
optimizationId:"HAVING",
errorId:"HAVING",
interviewId:"HAVING",
interviewQuestions:["<b>Q:</b>Difference between WHERE and HAVING?<br><b>A:</b>WHERE filters rows before grouping, HAVING filters groups after grouping.","<b>Q:</b>Can HAVING work without GROUP BY?<br><b>A:</b>Depends on database."],
relatedTopics:["having","group by","aggregate function","sql query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DISTINCT FUNCTION
==================================*/

{
id:414,
category:"SQL Functions",
subCategory:"DISTINCT",
difficulty:"Beginner",
title:"DISTINCT Keyword",
shortDescription:"DISTINCT removes duplicate values from query results.",
syntax:`SELECT DISTINCT column
FROM table;`,
sql:`SELECT DISTINCT
Department
FROM Employees;`,
keywordId:"DISTINCT",
sampleDataId:"Employees",
businessCaseId:"Find Unique Values",
optimizationId:"DISTINCT",
errorId:"DISTINCT",
interviewId:"DISTINCT",
interviewQuestions:["<b>Q:</b>What does DISTINCT do?<br><b>A:</b>Removes duplicate records.","<b>Q:</b>Can DISTINCT work on multiple columns?<br><b>A:</b>Yes."],
relatedTopics:["distinct","unique values","duplicate removal","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COALESCE FUNCTION
==================================*/

{
id:415,
category:"SQL Functions",
subCategory:"COALESCE Function",
difficulty:"Intermediate",
title:"COALESCE Function",
shortDescription:"COALESCE returns the first non-null value from multiple expressions.",
syntax:`COALESCE(
value1,
value2,
value3
);`,
sql:`SELECT
EmployeeName,
COALESCE(Email,'Not Available')
AS Email
FROM Employees;`,
keywordId:"COALESCE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Handle Missing Data",
optimizationId:"COALESCE_FUNCTION",
errorId:"COALESCE_FUNCTION",
interviewId:"COALESCE_FUNCTION",
interviewQuestions:["<b>Q:</b>What does COALESCE do?<br><b>A:</b>Returns first non-null value.","<b>Q:</b>Where used?<br><b>A:</b>NULL handling."],
relatedTopics:["coalesce","null handling","sql function","data cleaning","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL NULL FUNCTIONS
==================================*/

{
id:416,
category:"SQL Functions",
subCategory:"NULL Functions",
difficulty:"Beginner",
title:"SQL NULL Functions",
shortDescription:"NULL functions handle missing or unknown values in database columns.",
syntax:`SELECT
NULL Function(column)
FROM table;`,
sql:`SELECT
EmployeeName,
ISNULL(Email,'No Email')
FROM Employees;`,
keywordId:"NULL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Handle Missing Data",
optimizationId:"NULL_FUNCTION",
errorId:"NULL_FUNCTION",
interviewId:"NULL_FUNCTION",
interviewQuestions:["<b>Q:</b>What are NULL Functions?<br><b>A:</b>Functions used to manage NULL values.","<b>Q:</b>Why handle NULL values?<br><b>A:</b>To avoid incorrect results."],
relatedTopics:["null function","isnull","coalesce","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ISNULL FUNCTION
==================================*/

{
id:417,
category:"SQL Functions",
subCategory:"ISNULL Function",
difficulty:"Beginner",
title:"ISNULL Function",
shortDescription:"ISNULL replaces NULL values with a specified value.",
syntax:`ISNULL(
expression,
replacement_value
);`,
sql:`SELECT
EmployeeName,
ISNULL(Email,'Not Available')
AS Email
FROM Employees;`,
keywordId:"ISNULL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Replace Missing Values",
optimizationId:"ISNULL_FUNCTION",
errorId:"ISNULL_FUNCTION",
interviewId:"ISNULL_FUNCTION",
interviewQuestions:["<b>Q:</b>What does ISNULL do?<br><b>A:</b>Replaces NULL with another value.","<b>Q:</b>Where used?<br><b>A:</b>Data cleaning and reports."],
relatedTopics:["isnull","null handling","sql function","coalesce","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NULLIF FUNCTION
==================================*/

{
id:418,
category:"SQL Functions",
subCategory:"NULLIF Function",
difficulty:"Intermediate",
title:"NULLIF Function",
shortDescription:"NULLIF returns NULL when two expressions are equal.",
syntax:`NULLIF(
expression1,
expression2
);`,
sql:`SELECT
NULLIF(Salary,0)
AS ValidSalary
FROM Employees;`,
keywordId:"NULLIF_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Avoid Division Errors",
optimizationId:"NULLIF_FUNCTION",
errorId:"NULLIF_FUNCTION",
interviewId:"NULLIF_FUNCTION",
interviewQuestions:["<b>Q:</b>What does NULLIF do?<br><b>A:</b>Returns NULL if values match.","<b>Q:</b>Where used?<br><b>A:</b>Prevent divide by zero errors."],
relatedTopics:["nullif","null handling","sql function","error handling","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CAST FUNCTION
==================================*/

{
id:419,
category:"SQL Functions",
subCategory:"CAST Function",
difficulty:"Beginner",
title:"CAST Function",
shortDescription:"CAST converts a value from one data type to another.",
syntax:`CAST(
expression AS datatype
);`,
sql:`SELECT
CAST(Salary AS VARCHAR)
AS SalaryText
FROM Employees;`,
keywordId:"CAST_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Data Type Conversion",
optimizationId:"CAST_FUNCTION",
errorId:"CAST_FUNCTION",
interviewId:"CAST_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CAST do?<br><b>A:</b>Converts data type.","<b>Q:</b>Example?<br><b>A:</b>Number to text conversion."],
relatedTopics:["cast","data conversion","sql function","datatype","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONVERT FUNCTION
==================================*/

{
id:420,
category:"SQL Functions",
subCategory:"CONVERT Function",
difficulty:"Intermediate",
title:"CONVERT Function",
shortDescription:"CONVERT changes data type and supports formatting options.",
syntax:`CONVERT(
datatype,
expression
);`,
sql:`SELECT
CONVERT(VARCHAR,JoiningDate,103)
AS JoiningDate
FROM Employees;`,
keywordId:"CONVERT_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Format Data Output",
optimizationId:"CONVERT_FUNCTION",
errorId:"CONVERT_FUNCTION",
interviewId:"CONVERT_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CONVERT do?<br><b>A:</b>Converts one data type to another.","<b>Q:</b>Difference between CAST and CONVERT?<br><b>A:</b>CONVERT provides formatting styles."],
relatedTopics:["convert","cast","datatype conversion","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL OPERATORS
==================================*/

{
id:421,
category:"SQL Operators",
subCategory:"SQL Operator",
difficulty:"Beginner",
title:"SQL Operators",
shortDescription:"Operators perform operations on SQL values and expressions.",
syntax:`SELECT
expression operator expression
FROM table;`,
sql:`SELECT
Salary+5000 AS IncreasedSalary
FROM Employees;`,
keywordId:"OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Perform Calculations and Conditions",
optimizationId:"OPERATOR",
errorId:"OPERATOR",
interviewId:"OPERATOR",
interviewQuestions:["<b>Q:</b>What are SQL Operators?<br><b>A:</b>Symbols used to perform operations.","<b>Q:</b>Examples?<br><b>A:</b>Arithmetic, comparison and logical operators."],
relatedTopics:["operator","sql operator","arithmetic operator","logical operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ARITHMETIC OPERATORS
==================================*/

{
id:422,
category:"SQL Operators",
subCategory:"Arithmetic Operators",
difficulty:"Beginner",
title:"Arithmetic Operators",
shortDescription:"Arithmetic operators perform mathematical calculations.",
syntax:`+
-
*
/
%`,
sql:`SELECT
Salary*12 AS AnnualSalary
FROM Employees;`,
keywordId:"ARITHMETIC_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Salary and Financial Calculations",
optimizationId:"ARITHMETIC_OPERATOR",
errorId:"ARITHMETIC_OPERATOR",
interviewId:"ARITHMETIC_OPERATOR",
interviewQuestions:["<b>Q:</b>What are Arithmetic Operators?<br><b>A:</b>Operators used for mathematical operations.","<b>Q:</b>Examples?<br><b>A:</b>+, -, *, /, %."],
relatedTopics:["arithmetic operator","sql operator","calculation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ADDITION OPERATOR
==================================*/

{
id:423,
category:"SQL Operators",
subCategory:"Addition Operator",
difficulty:"Beginner",
title:"Addition Operator (+)",
shortDescription:"Addition operator adds numeric values.",
syntax:`value1 + value2`,
sql:`SELECT
Salary+10000 AS NewSalary
FROM Employees;`,
keywordId:"ADDITION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Increased Values",
optimizationId:"ADDITION_OPERATOR",
errorId:"ADDITION_OPERATOR",
interviewId:"ADDITION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does + operator do?<br><b>A:</b>Adds values.","<b>Q:</b>Where used?<br><b>A:</b>Calculations."],
relatedTopics:["addition operator","arithmetic operator","sql operator","sql examples","sql interview","sql server","sql"]
},

/*==================================
 SUBTRACTION OPERATOR
==================================*/

{
id:424,
category:"SQL Operators",
subCategory:"Subtraction Operator",
difficulty:"Beginner",
title:"Subtraction Operator (-)",
shortDescription:"Subtraction operator subtracts one value from another.",
syntax:`value1 - value2`,
sql:`SELECT
Salary-5000 AS ReducedSalary
FROM Employees;`,
keywordId:"SUBTRACTION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Difference",
optimizationId:"SUBTRACTION_OPERATOR",
errorId:"SUBTRACTION_OPERATOR",
interviewId:"SUBTRACTION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does subtraction operator do?<br><b>A:</b>Subtracts values.","<b>Q:</b>Example?<br><b>A:</b>Calculate balance difference."],
relatedTopics:["subtraction operator","arithmetic operator","sql operator","sql examples","sql interview","sql server","sql"]
},

/*==================================
 MULTIPLICATION OPERATOR
==================================*/

{
id:425,
category:"SQL Operators",
subCategory:"Multiplication Operator",
difficulty:"Beginner",
title:"Multiplication Operator (*)",
shortDescription:"Multiplication operator multiplies values.",
syntax:`value1 * value2`,
sql:`SELECT
Salary*12 AS AnnualSalary
FROM Employees;`,
keywordId:"MULTIPLICATION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Annual Calculation",
optimizationId:"MULTIPLICATION_OPERATOR",
errorId:"MULTIPLICATION_OPERATOR",
interviewId:"MULTIPLICATION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does multiplication operator do?<br><b>A:</b>Multiplies numeric values.","<b>Q:</b>Example?<br><b>A:</b>Monthly salary to yearly salary."],
relatedTopics:["multiplication operator","arithmetic operator","sql operator","sql examples","sql interview","sql server","sql"]
},

/*==================================
 DIVISION OPERATOR
==================================*/

{
id:426,
category:"SQL Operators",
subCategory:"Division Operator",
difficulty:"Beginner",
title:"Division Operator (/)",
shortDescription:"Division operator divides one numeric value by another.",
syntax:`value1 / value2`,
sql:`SELECT
Salary/12 AS MonthlySalary
FROM Employees;`,
keywordId:"DIVISION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Monthly Values",
optimizationId:"DIVISION_OPERATOR",
errorId:"DIVISION_OPERATOR",
interviewId:"DIVISION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does division operator do?<br><b>A:</b>Divides numeric values.","<b>Q:</b>What error can occur?<br><b>A:</b>Division by zero."],
relatedTopics:["division operator","arithmetic operator","sql operator","sql examples","sql interview","sql server","sql"]
},

/*==================================
 MODULUS OPERATOR
==================================*/

{
id:427,
category:"SQL Operators",
subCategory:"Modulus Operator",
difficulty:"Beginner",
title:"Modulus Operator (%)",
shortDescription:"Modulus returns the remainder after division.",
syntax:`value1 % value2`,
sql:`SELECT
10 % 3 AS Reminder;`,
keywordId:"MODULUS_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Find Remaining Values",
optimizationId:"MODULUS_OPERATOR",
errorId:"MODULUS_OPERATOR",
interviewId:"MODULUS_OPERATOR",
interviewQuestions:["<b>Q:</b>What does modulus operator return?<br><b>A:</b>Division remainder.","<b>Q:</b>Where used?<br><b>A:</b>Odd/even checks."],
relatedTopics:["modulus","percentage operator","arithmetic operator","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMPARISON OPERATORS
==================================*/

{
id:428,
category:"SQL Operators",
subCategory:"Comparison Operators",
difficulty:"Beginner",
title:"Comparison Operators",
shortDescription:"Comparison operators compare values and return TRUE or FALSE.",
syntax:`=
>
<
>=
<=
<>`,
sql:`SELECT *
FROM Employees
WHERE Salary>50000;`,
keywordId:"COMPARISON_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Data Conditions",
optimizationId:"COMPARISON_OPERATOR",
errorId:"COMPARISON_OPERATOR",
interviewId:"COMPARISON_OPERATOR",
interviewQuestions:["<b>Q:</b>What are comparison operators?<br><b>A:</b>Operators used to compare values.","<b>Q:</b>Where used?<br><b>A:</b>WHERE conditions."],
relatedTopics:["comparison operator","sql operator","where clause","filter data","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EQUAL OPERATOR
==================================*/

{
id:429,
category:"SQL Operators",
subCategory:"Equal Operator",
difficulty:"Beginner",
title:"Equal Operator (=)",
shortDescription:"Equal operator checks whether two values are same.",
syntax:`column = value`,
sql:`SELECT *
FROM Employees
WHERE Department='IT';`,
keywordId:"EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exact Match Searching",
optimizationId:"EQUAL_OPERATOR",
errorId:"EQUAL_OPERATOR",
interviewId:"EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does = operator do?<br><b>A:</b>Checks equality.","<b>Q:</b>Where used?<br><b>A:</b>Filtering exact values."],
relatedTopics:["equal operator","comparison operator","where clause","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EQUAL OPERATOR
==================================*/

{
id:430,
category:"SQL Operators",
subCategory:"Not Equal Operator",
difficulty:"Beginner",
title:"Not Equal Operator (<>)",
shortDescription:"Not Equal operator finds values that do not match.",
syntax:`column <> value`,
sql:`SELECT *
FROM Employees
WHERE Department<>'IT';`,
keywordId:"NOT_EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exclude Specific Values",
optimizationId:"NOT_EQUAL_OPERATOR",
errorId:"NOT_EQUAL_OPERATOR",
interviewId:"NOT_EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does <> mean?<br><b>A:</b>Not equal comparison.","<b>Q:</b>Alternative operator?<br><b>A:</b>!= in some databases."],
relatedTopics:["not equal operator","comparison operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GREATER THAN OPERATOR
==================================*/

{
id:431,
category:"SQL Operators",
subCategory:"Greater Than Operator",
difficulty:"Beginner",
title:"Greater Than Operator (>)",
shortDescription:"Greater Than operator returns values higher than specified value.",
syntax:`column > value`,
sql:`SELECT *
FROM Employees
WHERE Salary>60000;`,
keywordId:"GREATER_THAN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Find Higher Values",
optimizationId:"GREATER_THAN_OPERATOR",
errorId:"GREATER_THAN_OPERATOR",
interviewId:"GREATER_THAN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does > operator do?<br><b>A:</b>Checks whether value is greater.","<b>Q:</b>Where used?<br><b>A:</b>Numeric filtering."],
relatedTopics:["greater than","comparison operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LESS THAN OPERATOR
==================================*/

{
id:432,
category:"SQL Operators",
subCategory:"Less Than Operator",
difficulty:"Beginner",
title:"Less Than Operator (<)",
shortDescription:"Less Than operator returns values lower than specified value.",
syntax:`column < value`,
sql:`SELECT *
FROM Employees
WHERE Salary<50000;`,
keywordId:"LESS_THAN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Find Lower Values",
optimizationId:"LESS_THAN_OPERATOR",
errorId:"LESS_THAN_OPERATOR",
interviewId:"LESS_THAN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does < operator do?<br><b>A:</b>Checks smaller values.","<b>Q:</b>Where used?<br><b>A:</b>Range filtering."],
relatedTopics:["less than","comparison operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GREATER THAN EQUAL OPERATOR
==================================*/

{
id:433,
category:"SQL Operators",
subCategory:"Greater Than Equal",
difficulty:"Beginner",
title:"Greater Than Equal Operator (>=)",
shortDescription:"Checks values greater than or equal to a given value.",
syntax:`column >= value`,
sql:`SELECT *
FROM Employees
WHERE Salary>=50000;`,
keywordId:"GREATER_EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Minimum Value Filtering",
optimizationId:"GREATER_EQUAL_OPERATOR",
errorId:"GREATER_EQUAL_OPERATOR",
interviewId:"GREATER_EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does >= mean?<br><b>A:</b>Greater than or equal comparison.","<b>Q:</b>Where used?<br><b>A:</b>Threshold conditions."],
relatedTopics:["greater equal","comparison operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LESS THAN EQUAL OPERATOR
==================================*/

{
id:434,
category:"SQL Operators",
subCategory:"Less Than Equal",
difficulty:"Beginner",
title:"Less Than Equal Operator (<=)",
shortDescription:"Checks values less than or equal to a given value.",
syntax:`column <= value`,
sql:`SELECT *
FROM Employees
WHERE Salary<=70000;`,
keywordId:"LESS_EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Maximum Value Filtering",
optimizationId:"LESS_EQUAL_OPERATOR",
errorId:"LESS_EQUAL_OPERATOR",
interviewId:"LESS_EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does <= mean?<br><b>A:</b>Less than or equal comparison.","<b>Q:</b>Where used?<br><b>A:</b>Limit based filtering."],
relatedTopics:["less equal","comparison operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LOGICAL OPERATORS
==================================*/

{
id:435,
category:"SQL Operators",
subCategory:"Logical Operators",
difficulty:"Beginner",
title:"Logical Operators",
shortDescription:"Logical operators combine multiple conditions in SQL queries.",
syntax:`AND
OR
NOT`,
sql:`SELECT *
FROM Employees
WHERE Department='IT'
AND Salary>50000;`,
keywordId:"LOGICAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Multiple Condition Filtering",
optimizationId:"LOGICAL_OPERATOR",
errorId:"LOGICAL_OPERATOR",
interviewId:"LOGICAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What are Logical Operators?<br><b>A:</b>Operators used to combine conditions.","<b>Q:</b>Examples?<br><b>A:</b>AND, OR, NOT."],
relatedTopics:["logical operator","and","or","not","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AND OPERATOR
==================================*/

{
id:436,
category:"SQL Operators",
subCategory:"AND Operator",
difficulty:"Beginner",
title:"AND Operator",
shortDescription:"AND operator returns records when all conditions are TRUE.",
syntax:`condition1
AND
condition2`,
sql:`SELECT *
FROM Employees
WHERE Department='IT'
AND Salary>60000;`,
keywordId:"AND_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Apply Multiple Filters",
optimizationId:"AND_OPERATOR",
errorId:"AND_OPERATOR",
interviewId:"AND_OPERATOR",
interviewQuestions:["<b>Q:</b>What does AND operator do?<br><b>A:</b>Requires all conditions to be true.","<b>Q:</b>Where used?<br><b>A:</b>Multiple WHERE conditions."],
relatedTopics:["and operator","logical operator","where clause","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 OR OPERATOR
==================================*/

{
id:437,
category:"SQL Operators",
subCategory:"OR Operator",
difficulty:"Beginner",
title:"OR Operator",
shortDescription:"OR operator returns records when any condition is TRUE.",
syntax:`condition1
OR
condition2`,
sql:`SELECT *
FROM Employees
WHERE Department='IT'
OR Department='HR';`,
keywordId:"OR_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Search Multiple Options",
optimizationId:"OR_OPERATOR",
errorId:"OR_OPERATOR",
interviewId:"OR_OPERATOR",
interviewQuestions:["<b>Q:</b>What does OR operator do?<br><b>A:</b>Returns data if any condition is true.","<b>Q:</b>Where used?<br><b>A:</b>Multiple possible values."],
relatedTopics:["or operator","logical operator","where clause","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT OPERATOR
==================================*/

{
id:438,
category:"SQL Operators",
subCategory:"NOT Operator",
difficulty:"Beginner",
title:"NOT Operator",
shortDescription:"NOT reverses the result of a condition.",
syntax:`NOT condition`,
sql:`SELECT *
FROM Employees
WHERE NOT Department='IT';`,
keywordId:"NOT_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exclude Conditions",
optimizationId:"NOT_OPERATOR",
errorId:"NOT_OPERATOR",
interviewId:"NOT_OPERATOR",
interviewQuestions:["<b>Q:</b>What does NOT operator do?<br><b>A:</b>Reverses TRUE/FALSE result.","<b>Q:</b>Where used?<br><b>A:</b>Exclude specific conditions."],
relatedTopics:["not operator","logical operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BETWEEN OPERATOR
==================================*/

{
id:439,
category:"SQL Operators",
subCategory:"BETWEEN Operator",
difficulty:"Beginner",
title:"BETWEEN Operator",
shortDescription:"BETWEEN filters values within a specified range.",
syntax:`column BETWEEN value1 AND value2`,
sql:`SELECT *
FROM Employees
WHERE Salary BETWEEN 50000 AND 80000;`,
keywordId:"BETWEEN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Range Based Filtering",
optimizationId:"BETWEEN_OPERATOR",
errorId:"BETWEEN_OPERATOR",
interviewId:"BETWEEN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does BETWEEN do?<br><b>A:</b>Checks values inside a range.","<b>Q:</b>Are boundary values included?<br><b>A:</b>Yes."],
relatedTopics:["between","range filter","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 IN OPERATOR
==================================*/

{
id:440,
category:"SQL Operators",
subCategory:"IN Operator",
difficulty:"Beginner",
title:"IN Operator",
shortDescription:"IN checks whether a value exists in a list of values.",
syntax:`column IN
(value1,value2,value3);`,
sql:`SELECT *
FROM Employees
WHERE Department IN
('IT','HR','Finance');`,
keywordId:"IN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Multiple Value Filtering",
optimizationId:"IN_OPERATOR",
errorId:"IN_OPERATOR",
interviewId:"IN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does IN operator do?<br><b>A:</b>Matches values from a list.","<b>Q:</b>Alternative to IN?<br><b>A:</b>Multiple OR conditions."],
relatedTopics:["in operator","list filtering","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT IN OPERATOR
==================================*/

{
id:441,
category:"SQL Operators",
subCategory:"NOT IN Operator",
difficulty:"Beginner",
title:"NOT IN Operator",
shortDescription:"NOT IN excludes records matching values from a list.",
syntax:`column NOT IN
(value1,value2,value3);`,
sql:`SELECT *
FROM Employees
WHERE Department NOT IN
('IT','HR');`,
keywordId:"NOT_IN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exclude Multiple Values",
optimizationId:"NOT_IN_OPERATOR",
errorId:"NOT_IN_OPERATOR",
interviewId:"NOT_IN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does NOT IN do?<br><b>A:</b>Removes specified values from result.","<b>Q:</b>Alternative?<br><b>A:</b>Multiple NOT conditions."],
relatedTopics:["not in","in operator","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LIKE OPERATOR
==================================*/

{
id:442,
category:"SQL Operators",
subCategory:"LIKE Operator",
difficulty:"Beginner",
title:"LIKE Operator",
shortDescription:"LIKE searches data using pattern matching.",
syntax:`column LIKE pattern;`,
sql:`SELECT *
FROM Employees
WHERE EmployeeName LIKE 'A%';`,
keywordId:"LIKE_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Search Text Patterns",
optimizationId:"LIKE_OPERATOR",
errorId:"LIKE_OPERATOR",
interviewId:"LIKE_OPERATOR",
interviewQuestions:["<b>Q:</b>What is LIKE operator?<br><b>A:</b>Used for pattern searching.","<b>Q:</b>Which symbols are used?<br><b>A:</b>% and _."],
relatedTopics:["like operator","pattern matching","sql operator","where clause","sql interview","sql examples","sql server","sql"]
},

/*==================================
 WILDCARD %
==================================*/

{
id:443,
category:"SQL Operators",
subCategory:"Percentage Wildcard",
difficulty:"Beginner",
title:"Percentage (%) Wildcard",
shortDescription:"% wildcard represents zero or more characters.",
syntax:`LIKE '%text%';`,
sql:`SELECT *
FROM Employees
WHERE EmployeeName LIKE '%Raj%';`,
keywordId:"PERCENT_WILDCARD",
sampleDataId:"Employees",
businessCaseId:"Find Partial Text",
optimizationId:"PERCENT_WILDCARD",
errorId:"PERCENT_WILDCARD",
interviewId:"PERCENT_WILDCARD",
interviewQuestions:["<b>Q:</b>What does % represent?<br><b>A:</b>Any number of characters.","<b>Q:</b>Example?<br><b>A:</b>Find names containing text."],
relatedTopics:["wildcard","percentage wildcard","like","pattern search","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNDERSCORE WILDCARD
==================================*/

{
id:444,
category:"SQL Operators",
subCategory:"Underscore Wildcard",
difficulty:"Beginner",
title:"Underscore (_) Wildcard",
shortDescription:"Underscore wildcard represents exactly one character.",
syntax:`LIKE '_text';`,
sql:`SELECT *
FROM Employees
WHERE EmployeeName LIKE '_a%';`,
keywordId:"UNDERSCORE_WILDCARD",
sampleDataId:"Employees",
businessCaseId:"Single Character Search",
optimizationId:"UNDERSCORE_WILDCARD",
errorId:"UNDERSCORE_WILDCARD",
interviewId:"UNDERSCORE_WILDCARD",
interviewQuestions:["<b>Q:</b>What does _ represent?<br><b>A:</b>Exactly one character.","<b>Q:</b>Difference between % and _?<br><b>A:</b>% allows many characters, _ allows one."],
relatedTopics:["underscore wildcard","wildcard","like operator","pattern search","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXISTS OPERATOR
==================================*/

{
id:445,
category:"SQL Operators",
subCategory:"EXISTS Operator",
difficulty:"Intermediate",
title:"EXISTS Operator",
shortDescription:"EXISTS checks whether a subquery returns any records.",
syntax:`WHERE EXISTS
(
subquery
);`,
sql:`SELECT *
FROM Employees E
WHERE EXISTS
(
SELECT 1
FROM Departments D
WHERE D.Department=E.Department
);`,
keywordId:"EXISTS_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Check Related Data",
optimizationId:"EXISTS_OPERATOR",
errorId:"EXISTS_OPERATOR",
interviewId:"EXISTS_OPERATOR",
interviewQuestions:["<b>Q:</b>What does EXISTS do?<br><b>A:</b>Checks if rows exist.","<b>Q:</b>Where used?<br><b>A:</b>Subqueries."],
relatedTopics:["exists","subquery","sql operator","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EXISTS OPERATOR
==================================*/

{
id:446,
category:"SQL Operators",
subCategory:"NOT EXISTS Operator",
difficulty:"Intermediate",
title:"NOT EXISTS Operator",
shortDescription:"NOT EXISTS checks whether a subquery returns no records.",
syntax:`WHERE NOT EXISTS
(
subquery
);`,
sql:`SELECT *
FROM Employees E
WHERE NOT EXISTS
(
SELECT 1
FROM Departments D
WHERE D.Department=E.Department
);`,
keywordId:"NOT_EXISTS_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Find Missing Related Data",
optimizationId:"NOT_EXISTS_OPERATOR",
errorId:"NOT_EXISTS_OPERATOR",
interviewId:"NOT_EXISTS_OPERATOR",
interviewQuestions:["<b>Q:</b>What does NOT EXISTS do?<br><b>A:</b>Returns rows when subquery has no result.","<b>Q:</b>Difference between NOT IN and NOT EXISTS?<br><b>A:</b>NOT EXISTS handles NULL values better."],
relatedTopics:["not exists","exists","subquery","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ANY OPERATOR
==================================*/

{
id:447,
category:"SQL Operators",
subCategory:"ANY Operator",
difficulty:"Advanced",
title:"ANY Operator",
shortDescription:"ANY compares a value with any value returned by a subquery.",
syntax:`expression operator ANY
(subquery);`,
sql:`SELECT *
FROM Employees
WHERE Salary > ANY
(
SELECT Salary
FROM Employees
WHERE Department='HR'
);`,
keywordId:"ANY_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Compare Against Multiple Values",
optimizationId:"ANY_OPERATOR",
errorId:"ANY_OPERATOR",
interviewId:"ANY_OPERATOR",
interviewQuestions:["<b>Q:</b>What does ANY operator do?<br><b>A:</b>Compares with any value from subquery.","<b>Q:</b>Where used?<br><b>A:</b>Advanced subqueries."],
relatedTopics:["any operator","subquery","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALL OPERATOR
==================================*/

{
id:448,
category:"SQL Operators",
subCategory:"ALL Operator",
difficulty:"Advanced",
title:"ALL Operator",
shortDescription:"ALL compares a value against every value returned by a subquery.",
syntax:`expression operator ALL
(subquery);`,
sql:`SELECT *
FROM Employees
WHERE Salary > ALL
(
SELECT Salary
FROM Employees
WHERE Department='HR'
);`,
keywordId:"ALL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Compare Against Complete Set",
optimizationId:"ALL_OPERATOR",
errorId:"ALL_OPERATOR",
interviewId:"ALL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does ALL operator do?<br><b>A:</b>Checks condition against all subquery values.","<b>Q:</b>Difference between ANY and ALL?<br><b>A:</b>ANY requires one match, ALL requires every match."],
relatedTopics:["all operator","any operator","subquery","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONCATENATION OPERATOR
==================================*/

{
id:449,
category:"SQL Operators",
subCategory:"Concatenation Operator",
difficulty:"Beginner",
title:"Concatenation Operator",
shortDescription:"Concatenation combines multiple string values.",
syntax:`string1 + string2;`,
sql:`SELECT
EmployeeName+' - '+Department
AS EmployeeInfo
FROM Employees;`,
keywordId:"CONCATENATION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Combine Text Columns",
optimizationId:"CONCATENATION_OPERATOR",
errorId:"CONCATENATION_OPERATOR",
interviewId:"CONCATENATION_OPERATOR",
interviewQuestions:["<b>Q:</b>What is concatenation?<br><b>A:</b>Combining strings together.","<b>Q:</b>Alternative function?<br><b>A:</b>CONCAT."],
relatedTopics:["concatenation","string operator","concat","sql operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BITWISE OPERATORS
==================================*/

{
id:450,
category:"SQL Operators",
subCategory:"Bitwise Operators",
difficulty:"Advanced",
title:"Bitwise Operators",
shortDescription:"Bitwise operators perform operations on binary values.",
syntax:`&
|
^`,
sql:`SELECT
5 & 3 AS Result;`,
keywordId:"BITWISE_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Binary Data Processing",
optimizationId:"BITWISE_OPERATOR",
errorId:"BITWISE_OPERATOR",
interviewId:"BITWISE_OPERATOR",
interviewQuestions:["<b>Q:</b>What are Bitwise Operators?<br><b>A:</b>Operators working at binary level.","<b>Q:</b>Where used?<br><b>A:</b>System and permission handling."],
relatedTopics:["bitwise operator","binary operation","sql operator","advanced sql","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL JOINS
==================================*/

{
id:451,
category:"SQL Joins",
subCategory:"SQL Join",
difficulty:"Beginner",
title:"SQL Join",
shortDescription:"JOIN combines data from two or more related tables.",
syntax:`SELECT columns
FROM Table1
JOIN Table2
ON Table1.column=Table2.column;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"JOIN",
sampleDataId:"Employees",
businessCaseId:"Combine Related Data",
optimizationId:"JOIN",
errorId:"JOIN",
interviewId:"JOIN",
interviewQuestions:["<b>Q:</b>What is SQL JOIN?<br><b>A:</b>Combines rows from multiple tables.","<b>Q:</b>Why use JOIN?<br><b>A:</b>To retrieve related information."],
relatedTopics:["join","sql join","table relationship","database query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INNER JOIN
==================================*/

{
id:452,
category:"SQL Joins",
subCategory:"INNER JOIN",
difficulty:"Beginner",
title:"INNER JOIN",
shortDescription:"INNER JOIN returns only matching records from both tables.",
syntax:`SELECT columns
FROM Table1
INNER JOIN Table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
INNER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"INNER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Matching Records Analysis",
optimizationId:"INNER_JOIN",
errorId:"INNER_JOIN",
interviewId:"INNER_JOIN",
interviewQuestions:["<b>Q:</b>What does INNER JOIN return?<br><b>A:</b>Only matching records.","<b>Q:</b>Most commonly used join?<br><b>A:</b>INNER JOIN."],
relatedTopics:["inner join","join","sql join","table relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT JOIN
==================================*/

{
id:453,
category:"SQL Joins",
subCategory:"LEFT JOIN",
difficulty:"Beginner",
title:"LEFT JOIN",
shortDescription:"LEFT JOIN returns all records from left table and matching records from right table.",
syntax:`SELECT columns
FROM Table1
LEFT JOIN Table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
LEFT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"LEFT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Find Missing Related Data",
optimizationId:"LEFT_JOIN",
errorId:"LEFT_JOIN",
interviewId:"LEFT_JOIN",
interviewQuestions:["<b>Q:</b>What does LEFT JOIN return?<br><b>A:</b>All left table records plus matches.","<b>Q:</b>What happens if no match exists?<br><b>A:</b>NULL values from right table."],
relatedTopics:["left join","outer join","sql join","missing records","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT JOIN
==================================*/

{
id:454,
category:"SQL Joins",
subCategory:"RIGHT JOIN",
difficulty:"Beginner",
title:"RIGHT JOIN",
shortDescription:"RIGHT JOIN returns all records from right table and matching records from left table.",
syntax:`SELECT columns
FROM Table1
RIGHT JOIN Table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
RIGHT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"RIGHT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Department Based Analysis",
optimizationId:"RIGHT_JOIN",
errorId:"RIGHT_JOIN",
interviewId:"RIGHT_JOIN",
interviewQuestions:["<b>Q:</b>What does RIGHT JOIN return?<br><b>A:</b>All right table records plus matches.","<b>Q:</b>Alternative approach?<br><b>A:</b>Reverse LEFT JOIN."],
relatedTopics:["right join","outer join","sql join","database relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FULL OUTER JOIN
==================================*/

{
id:455,
category:"SQL Joins",
subCategory:"FULL OUTER JOIN",
difficulty:"Intermediate",
title:"FULL OUTER JOIN",
shortDescription:"FULL OUTER JOIN returns all records from both tables.",
syntax:`SELECT columns
FROM Table1
FULL OUTER JOIN Table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
FULL OUTER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"FULL_OUTER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Complete Data Comparison",
optimizationId:"FULL_OUTER_JOIN",
errorId:"FULL_OUTER_JOIN",
interviewId:"FULL_OUTER_JOIN",
interviewQuestions:["<b>Q:</b>What does FULL OUTER JOIN return?<br><b>A:</b>Matched and unmatched records from both tables.","<b>Q:</b>Where used?<br><b>A:</b>Data reconciliation."],
relatedTopics:["full outer join","join","data comparison","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CROSS JOIN
==================================*/

{
id:456,
category:"SQL Joins",
subCategory:"CROSS JOIN",
difficulty:"Intermediate",
title:"CROSS JOIN",
shortDescription:"CROSS JOIN returns the Cartesian product of two tables.",
syntax:`SELECT columns
FROM Table1
CROSS JOIN Table2;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
CROSS JOIN Departments D;`,
keywordId:"CROSS_JOIN",
sampleDataId:"Employees",
businessCaseId:"Generate All Possible Combinations",
optimizationId:"CROSS_JOIN",
errorId:"CROSS_JOIN",
interviewId:"CROSS_JOIN",
interviewQuestions:["<b>Q:</b>What does CROSS JOIN return?<br><b>A:</b>Every possible combination of rows.","<b>Q:</b>Does CROSS JOIN require ON condition?<br><b>A:</b>No."],
relatedTopics:["cross join","cartesian product","sql join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SELF JOIN
==================================*/

{
id:457,
category:"SQL Joins",
subCategory:"SELF JOIN",
difficulty:"Intermediate",
title:"SELF JOIN",
shortDescription:"SELF JOIN joins a table with itself using aliases.",
syntax:`SELECT columns
FROM Table1 A
JOIN Table1 B
ON condition;`,
sql:`SELECT
E.EmployeeName AS Employee,
M.EmployeeName AS Manager
FROM Employees E
JOIN Employees M
ON E.ManagerID=M.EmployeeID;`,
keywordId:"SELF_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Manager Relationship",
optimizationId:"SELF_JOIN",
errorId:"SELF_JOIN",
interviewId:"SELF_JOIN",
interviewQuestions:["<b>Q:</b>What is SELF JOIN?<br><b>A:</b>A table joined with itself.","<b>Q:</b>Why use SELF JOIN?<br><b>A:</b>To compare rows within same table."],
relatedTopics:["self join","recursive relationship","sql join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN USING
==================================*/

{
id:458,
category:"SQL Joins",
subCategory:"JOIN USING",
difficulty:"Intermediate",
title:"JOIN USING Clause",
shortDescription:"USING simplifies joins when both tables have the same column name.",
syntax:`SELECT columns
FROM Table1
JOIN Table2
USING(column_name);`,
sql:`SELECT
EmployeeName,
DepartmentName
FROM Employees
JOIN Departments
USING(DepartmentID);`,
keywordId:"JOIN_USING",
sampleDataId:"Employees",
businessCaseId:"Simplify Join Queries",
optimizationId:"JOIN_USING",
errorId:"JOIN_USING",
interviewId:"JOIN_USING",
interviewQuestions:["<b>Q:</b>What is USING clause?<br><b>A:</b>A shortcut for join condition.","<b>Q:</b>When can USING be used?<br><b>A:</b>When column names are identical."],
relatedTopics:["using clause","join","sql join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN ON CLAUSE
==================================*/

{
id:459,
category:"SQL Joins",
subCategory:"JOIN ON Clause",
difficulty:"Beginner",
title:"JOIN ON Clause",
shortDescription:"ON clause defines the relationship condition between joined tables.",
syntax:`JOIN Table2
ON Table1.column=Table2.column;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"JOIN_ON",
sampleDataId:"Employees",
businessCaseId:"Define Table Relationship",
optimizationId:"JOIN_ON",
errorId:"JOIN_ON",
interviewId:"JOIN_ON",
interviewQuestions:["<b>Q:</b>Why use ON clause?<br><b>A:</b>Defines matching condition.","<b>Q:</b>Can JOIN work without ON?<br><b>A:</b>Only some joins like CROSS JOIN."],
relatedTopics:["join on","join condition","sql join","relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTIPLE TABLE JOIN
==================================*/

{
id:460,
category:"SQL Joins",
subCategory:"Multiple Table Join",
difficulty:"Advanced",
title:"Multiple Table JOIN",
shortDescription:"Multiple joins combine data from more than two tables.",
syntax:`SELECT columns
FROM Table1
JOIN Table2
ON condition
JOIN Table3
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName,
L.LocationName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID
JOIN Locations L
ON D.LocationID=L.LocationID;`,
keywordId:"MULTIPLE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Enterprise Reporting",
optimizationId:"MULTIPLE_JOIN",
errorId:"MULTIPLE_JOIN",
interviewId:"MULTIPLE_JOIN",
interviewQuestions:["<b>Q:</b>Can we join multiple tables?<br><b>A:</b>Yes, using multiple JOIN statements.","<b>Q:</b>Where used?<br><b>A:</b>Complex reporting systems."],
relatedTopics:["multiple join","sql join","complex query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL SUBQUERIES
==================================*/

{
id:461,
category:"SQL Subqueries",
subCategory:"Subquery",
difficulty:"Intermediate",
title:"SQL Subquery",
shortDescription:"A Subquery is a query written inside another SQL query.",
syntax:`SELECT columns
FROM table
WHERE column =
(
SELECT column
FROM table
);`,
sql:`SELECT *
FROM Employees
WHERE Salary >
(
SELECT AVG(Salary)
FROM Employees
);`,
keywordId:"SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Nested Data Analysis",
optimizationId:"SUBQUERY",
errorId:"SUBQUERY",
interviewId:"SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Subquery?<br><b>A:</b>A query inside another query.","<b>Q:</b>Where can subquery be used?<br><b>A:</b>SELECT, FROM and WHERE clauses."],
relatedTopics:["subquery","nested query","sql query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SINGLE ROW SUBQUERY
==================================*/

{
id:462,
category:"SQL Subqueries",
subCategory:"Single Row Subquery",
difficulty:"Intermediate",
title:"Single Row Subquery",
shortDescription:"Single Row Subquery returns only one value.",
syntax:`WHERE column =
(
SELECT single_value
);`,
sql:`SELECT *
FROM Employees
WHERE Salary =
(
SELECT MAX(Salary)
FROM Employees
);`,
keywordId:"SINGLE_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Find Specific Record",
optimizationId:"SINGLE_ROW_SUBQUERY",
errorId:"SINGLE_ROW_SUBQUERY",
interviewId:"SINGLE_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Single Row Subquery?<br><b>A:</b>Returns one value.","<b>Q:</b>Which operators are used?<br><b>A:</b>=, >, <."],
relatedTopics:["single row subquery","subquery","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTIPLE ROW SUBQUERY
==================================*/

{
id:463,
category:"SQL Subqueries",
subCategory:"Multiple Row Subquery",
difficulty:"Intermediate",
title:"Multiple Row Subquery",
shortDescription:"Multiple Row Subquery returns multiple values.",
syntax:`WHERE column IN
(
SELECT column
FROM table
);`,
sql:`SELECT *
FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
WHERE Location='Mumbai'
);`,
keywordId:"MULTIPLE_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Multiple Value Filtering",
optimizationId:"MULTIPLE_ROW_SUBQUERY",
errorId:"MULTIPLE_ROW_SUBQUERY",
interviewId:"MULTIPLE_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Multiple Row Subquery?<br><b>A:</b>Returns more than one value.","<b>Q:</b>Which operator commonly used?<br><b>A:</b>IN."],
relatedTopics:["multiple row subquery","subquery","in operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CORRELATED SUBQUERY
==================================*/

{
id:464,
category:"SQL Subqueries",
subCategory:"Correlated Subquery",
difficulty:"Advanced",
title:"Correlated Subquery",
shortDescription:"A Correlated Subquery depends on values from the outer query.",
syntax:`SELECT *
FROM Table A
WHERE column =
(
SELECT column
FROM Table B
WHERE B.id=A.id
);`,
sql:`SELECT *
FROM Employees E
WHERE Salary >
(
SELECT AVG(Salary)
FROM Employees
WHERE Department=E.Department
);`,
keywordId:"CORRELATED_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Department Wise Comparison",
optimizationId:"CORRELATED_SUBQUERY",
errorId:"CORRELATED_SUBQUERY",
interviewId:"CORRELATED_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Correlated Subquery?<br><b>A:</b>A subquery that uses outer query values.","<b>Q:</b>Performance impact?<br><b>A:</b>May execute repeatedly."],
relatedTopics:["correlated subquery","subquery","nested query","sql performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN SELECT
==================================*/

{
id:465,
category:"SQL Subqueries",
subCategory:"Subquery in SELECT",
difficulty:"Advanced",
title:"Subquery in SELECT Clause",
shortDescription:"A subquery can be used inside SELECT to return calculated values.",
syntax:`SELECT
column,
(
SELECT value
)
FROM table;`,
sql:`SELECT
EmployeeName,
(
SELECT COUNT(*)
FROM Employees
) AS TotalEmployees
FROM Employees;`,
keywordId:"SUBQUERY_SELECT",
sampleDataId:"Employees",
businessCaseId:"Add Calculated Information",
optimizationId:"SUBQUERY_SELECT",
errorId:"SUBQUERY_SELECT",
interviewId:"SUBQUERY_SELECT",
interviewQuestions:["<b>Q:</b>Can subquery be used in SELECT?<br><b>A:</b>Yes.","<b>Q:</b>Why use it?<br><b>A:</b>To display additional calculations."],
relatedTopics:["subquery select","subquery","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN FROM CLAUSE
==================================*/

{
id:466,
category:"SQL Subqueries",
subCategory:"Subquery in FROM",
difficulty:"Advanced",
title:"Subquery in FROM Clause",
shortDescription:"A subquery inside FROM creates a temporary result table.",
syntax:`SELECT *
FROM
(
SELECT columns
FROM table
) AS alias;`,
sql:`SELECT *
FROM
(
SELECT
Department,
AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
) AS DeptSalary;`,
keywordId:"SUBQUERY_FROM",
sampleDataId:"Employees",
businessCaseId:"Create Temporary Dataset",
optimizationId:"SUBQUERY_FROM",
errorId:"SUBQUERY_FROM",
interviewId:"SUBQUERY_FROM",
interviewQuestions:["<b>Q:</b>What is subquery in FROM?<br><b>A:</b>A derived table created from another query.","<b>Q:</b>Is alias required?<br><b>A:</b>Yes in most databases."],
relatedTopics:["derived table","subquery from","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN WHERE CLAUSE
==================================*/

{
id:467,
category:"SQL Subqueries",
subCategory:"Subquery in WHERE",
difficulty:"Intermediate",
title:"Subquery in WHERE Clause",
shortDescription:"Subquery in WHERE filters data using another query result.",
syntax:`SELECT *
FROM table
WHERE column operator
(
SELECT column
FROM table
);`,
sql:`SELECT *
FROM Employees
WHERE Salary >
(
SELECT AVG(Salary)
FROM Employees
);`,
keywordId:"SUBQUERY_WHERE",
sampleDataId:"Employees",
businessCaseId:"Advanced Filtering",
optimizationId:"SUBQUERY_WHERE",
errorId:"SUBQUERY_WHERE",
interviewId:"SUBQUERY_WHERE",
interviewQuestions:["<b>Q:</b>Why use subquery in WHERE?<br><b>A:</b>To filter based on calculated values.","<b>Q:</b>Common operators?<br><b>A:</b>IN, EXISTS, =, >."],
relatedTopics:["subquery where","where clause","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXISTS SUBQUERY
==================================*/

{
id:468,
category:"SQL Subqueries",
subCategory:"EXISTS Subquery",
difficulty:"Advanced",
title:"EXISTS Subquery",
shortDescription:"EXISTS subquery checks whether matching records are available.",
syntax:`WHERE EXISTS
(
SELECT 1
FROM table
WHERE condition
);`,
sql:`SELECT *
FROM Employees E
WHERE EXISTS
(
SELECT 1
FROM Departments D
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"EXISTS_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Check Record Availability",
optimizationId:"EXISTS_SUBQUERY",
errorId:"EXISTS_SUBQUERY",
interviewId:"EXISTS_SUBQUERY",
interviewQuestions:["<b>Q:</b>What does EXISTS return?<br><b>A:</b>TRUE/FALSE based on rows.","<b>Q:</b>Why use SELECT 1?<br><b>A:</b>Only existence matters."],
relatedTopics:["exists","subquery","sql operator","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EXISTS SUBQUERY
==================================*/

{
id:469,
category:"SQL Subqueries",
subCategory:"NOT EXISTS Subquery",
difficulty:"Advanced",
title:"NOT EXISTS Subquery",
shortDescription:"NOT EXISTS finds records without matching rows.",
syntax:`WHERE NOT EXISTS
(
SELECT 1
FROM table
WHERE condition
);`,
sql:`SELECT *
FROM Employees E
WHERE NOT EXISTS
(
SELECT 1
FROM Departments D
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"NOT_EXISTS_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Find Missing Relationships",
optimizationId:"NOT_EXISTS_SUBQUERY",
errorId:"NOT_EXISTS_SUBQUERY",
interviewId:"NOT_EXISTS_SUBQUERY",
interviewQuestions:["<b>Q:</b>What does NOT EXISTS do?<br><b>A:</b>Finds records without matches.","<b>Q:</b>Where useful?<br><b>A:</b>Data quality checking."],
relatedTopics:["not exists","subquery","data validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY VS JOIN
==================================*/

{
id:470,
category:"SQL Subqueries",
subCategory:"Subquery vs JOIN",
difficulty:"Intermediate",
title:"Subquery vs JOIN",
shortDescription:"Both retrieve related data but work differently.",
syntax:`JOIN:
Combine tables

SUBQUERY:
Nested query`,
sql:`SELECT *
FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
);`,
keywordId:"SUBQUERY_VS_JOIN",
sampleDataId:"Employees",
businessCaseId:"Choose Query Approach",
optimizationId:"SUBQUERY_VS_JOIN",
errorId:"SUBQUERY_VS_JOIN",
interviewId:"SUBQUERY_VS_JOIN",
interviewQuestions:["<b>Q:</b>Difference between JOIN and Subquery?<br><b>A:</b>JOIN combines tables, Subquery uses query result.","<b>Q:</b>Which is faster?<br><b>A:</b>Depends on query design and database optimizer."],
relatedTopics:["subquery vs join","join","sql optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL VIEWS
==================================*/

{
id:471,
category:"SQL Views",
subCategory:"View",
difficulty:"Beginner",
title:"SQL View",
shortDescription:"A View is a virtual table created from a SQL query.",
syntax:`CREATE VIEW view_name AS
SELECT columns
FROM table;`,
sql:`CREATE VIEW EmployeeView AS
SELECT
EmployeeName,
Department,
Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplify Complex Queries",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is a View?<br><b>A:</b>A virtual table based on a query.","<b>Q:</b>Does View store data?<br><b>A:</b>Normally no, it stores query definition."],
relatedTopics:["view","sql view","virtual table","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:472,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW Statement",
shortDescription:"CREATE VIEW creates a new database view.",
syntax:`CREATE VIEW view_name AS
SELECT statement;`,
sql:`CREATE VIEW HighSalaryEmployees AS
SELECT *
FROM Employees
WHERE Salary>70000;`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Reusable Reporting Query",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>Why create a View?<br><b>A:</b>To reuse SQL logic.","<b>Q:</b>Can View contain joins?<br><b>A:</b>Yes."],
relatedTopics:["create view","view","sql object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:473,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW Statement",
shortDescription:"ALTER VIEW modifies an existing view definition.",
syntax:`ALTER VIEW view_name AS
SELECT statement;`,
sql:`ALTER VIEW EmployeeView AS
SELECT
EmployeeName,
Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Update Reporting Logic",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>Changes an existing view.","<b>Q:</b>Does it delete old view?<br><b>A:</b>No, it modifies definition."],
relatedTopics:["alter view","view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:474,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW Statement",
shortDescription:"DROP VIEW removes an existing view.",
syntax:`DROP VIEW view_name;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Objects",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>Deletes view definition.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop view","view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MATERIALIZED VIEW
==================================*/

{
id:475,
category:"SQL Views",
subCategory:"Materialized View",
difficulty:"Advanced",
title:"Materialized View",
shortDescription:"Materialized View stores query results physically for faster access.",
syntax:`CREATE MATERIALIZED VIEW view_name AS
SELECT statement;`,
sql:`CREATE MATERIALIZED VIEW SalesSummary AS
SELECT
Department,
SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY Department;`,
keywordId:"MATERIALIZED_VIEW",
sampleDataId:"Employees",
businessCaseId:"Improve Reporting Performance",
optimizationId:"MATERIALIZED_VIEW",
errorId:"MATERIALIZED_VIEW",
interviewId:"MATERIALIZED_VIEW",
interviewQuestions:["<b>Q:</b>What is Materialized View?<br><b>A:</b>A view that stores result data.","<b>Q:</b>Difference from normal View?<br><b>A:</b>Materialized View stores data physically."],
relatedTopics:["materialized view","view","performance optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL VIEWS
==================================*/

{
id:471,
category:"SQL Views",
subCategory:"View",
difficulty:"Beginner",
title:"SQL View",
shortDescription:"A View is a virtual table created from a SQL query.",
syntax:`CREATE VIEW view_name AS
SELECT columns
FROM table;`,
sql:`CREATE VIEW EmployeeView AS
SELECT
EmployeeName,
Department,
Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplify Complex Queries",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is a View?<br><b>A:</b>A virtual table based on a query.","<b>Q:</b>Does View store data?<br><b>A:</b>Normally no, it stores query definition."],
relatedTopics:["view","sql view","virtual table","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:472,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW Statement",
shortDescription:"CREATE VIEW creates a new database view.",
syntax:`CREATE VIEW view_name AS
SELECT statement;`,
sql:`CREATE VIEW HighSalaryEmployees AS
SELECT *
FROM Employees
WHERE Salary>70000;`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Reusable Reporting Query",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>Why create a View?<br><b>A:</b>To reuse SQL logic.","<b>Q:</b>Can View contain joins?<br><b>A:</b>Yes."],
relatedTopics:["create view","view","sql object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:473,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW Statement",
shortDescription:"ALTER VIEW modifies an existing view definition.",
syntax:`ALTER VIEW view_name AS
SELECT statement;`,
sql:`ALTER VIEW EmployeeView AS
SELECT
EmployeeName,
Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Update Reporting Logic",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>Changes an existing view.","<b>Q:</b>Does it delete old view?<br><b>A:</b>No, it modifies definition."],
relatedTopics:["alter view","view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:474,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW Statement",
shortDescription:"DROP VIEW removes an existing view.",
syntax:`DROP VIEW view_name;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Objects",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>Deletes view definition.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop view","view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MATERIALIZED VIEW
==================================*/

{
id:475,
category:"SQL Views",
subCategory:"Materialized View",
difficulty:"Advanced",
title:"Materialized View",
shortDescription:"Materialized View stores query results physically for faster access.",
syntax:`CREATE MATERIALIZED VIEW view_name AS
SELECT statement;`,
sql:`CREATE MATERIALIZED VIEW SalesSummary AS
SELECT
Department,
SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY Department;`,
keywordId:"MATERIALIZED_VIEW",
sampleDataId:"Employees",
businessCaseId:"Improve Reporting Performance",
optimizationId:"MATERIALIZED_VIEW",
errorId:"MATERIALIZED_VIEW",
interviewId:"MATERIALIZED_VIEW",
interviewQuestions:["<b>Q:</b>What is Materialized View?<br><b>A:</b>A view that stores result data.","<b>Q:</b>Difference from normal View?<br><b>A:</b>Materialized View stores data physically."],
relatedTopics:["materialized view","view","performance optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 OUTPUT PARAMETER
==================================*/

{
id:481,
category:"SQL Stored Procedures",
subCategory:"Output Parameter",
difficulty:"Intermediate",
title:"Output Parameter",
shortDescription:"Output parameters return values from a stored procedure.",
syntax:`CREATE PROCEDURE procedure_name
@Parameter datatype OUTPUT
AS
BEGIN
SET @Parameter=value;
END;`,
sql:`CREATE PROCEDURE GetEmployeeCount
@TotalEmployees INT OUTPUT
AS
BEGIN
SELECT @TotalEmployees=COUNT(*)
FROM Employees;
END;`,
keywordId:"OUTPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Return Calculated Results",
optimizationId:"OUTPUT_PARAMETER",
errorId:"OUTPUT_PARAMETER",
interviewId:"OUTPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is Output Parameter?<br><b>A:</b>Returns value from procedure.","<b>Q:</b>Difference between Input and Output?<br><b>A:</b>Input sends value, Output returns value."],
relatedTopics:["output parameter","stored procedure","procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER PROCEDURE
==================================*/

{
id:482,
category:"SQL Stored Procedures",
subCategory:"ALTER PROCEDURE",
difficulty:"Intermediate",
title:"ALTER PROCEDURE Statement",
shortDescription:"ALTER PROCEDURE modifies an existing stored procedure.",
syntax:`ALTER PROCEDURE procedure_name
AS
BEGIN
SQL statements
END;`,
sql:`ALTER PROCEDURE GetEmployees
AS
BEGIN
SELECT
EmployeeName,
Department
FROM Employees;
END;`,
keywordId:"ALTER_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Modify Existing Logic",
optimizationId:"ALTER_PROCEDURE",
errorId:"ALTER_PROCEDURE",
interviewId:"ALTER_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does ALTER PROCEDURE do?<br><b>A:</b>Updates procedure code.","<b>Q:</b>Does it create a new procedure?<br><b>A:</b>No."],
relatedTopics:["alter procedure","stored procedure","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP PROCEDURE
==================================*/

{
id:483,
category:"SQL Stored Procedures",
subCategory:"DROP PROCEDURE",
difficulty:"Beginner",
title:"DROP PROCEDURE Statement",
shortDescription:"DROP PROCEDURE removes a stored procedure from database.",
syntax:`DROP PROCEDURE procedure_name;`,
sql:`DROP PROCEDURE GetEmployees;`,
keywordId:"DROP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Procedures",
optimizationId:"DROP_PROCEDURE",
errorId:"DROP_PROCEDURE",
interviewId:"DROP_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does DROP PROCEDURE do?<br><b>A:</b>Deletes procedure.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE VS FUNCTION
==================================*/

{
id:484,
category:"SQL Stored Procedures",
subCategory:"Procedure vs Function",
difficulty:"Advanced",
title:"Stored Procedure vs Function",
shortDescription:"Procedures and Functions both store reusable SQL logic but work differently.",
syntax:`Procedure:
EXEC name;

Function:
SELECT dbo.name();`,
sql:`CREATE PROCEDURE GetEmployee
AS
SELECT *
FROM Employees;`,
keywordId:"PROCEDURE_VS_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Choose Database Object",
optimizationId:"PROCEDURE_VS_FUNCTION",
errorId:"PROCEDURE_VS_FUNCTION",
interviewId:"PROCEDURE_VS_FUNCTION",
interviewQuestions:["<b>Q:</b>Difference between Procedure and Function?<br><b>A:</b>Procedure can perform actions, Function returns value.","<b>Q:</b>Can function be used in SELECT?<br><b>A:</b>Yes."],
relatedTopics:["procedure vs function","stored procedure","function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE TRANSACTION
==================================*/

{
id:485,
category:"SQL Stored Procedures",
subCategory:"Procedure Transaction",
difficulty:"Advanced",
title:"Transaction in Stored Procedure",
shortDescription:"Transactions ensure multiple SQL operations complete safely.",
syntax:`BEGIN TRANSACTION

SQL statements

COMMIT / ROLLBACK`,
sql:`BEGIN TRANSACTION

UPDATE Employees
SET Salary=Salary+5000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"PROCEDURE_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Accuracy",
optimizationId:"PROCEDURE_TRANSACTION",
errorId:"PROCEDURE_TRANSACTION",
interviewId:"PROCEDURE_TRANSACTION",
interviewQuestions:["<b>Q:</b>Why use transaction in procedure?<br><b>A:</b>To maintain data consistency.","<b>Q:</b>Commands used?<br><b>A:</b>COMMIT and ROLLBACK."],
relatedTopics:["transaction","stored procedure","commit","rollback","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL FUNCTIONS
==================================*/

{
id:486,
category:"SQL Functions",
subCategory:"SQL Function",
difficulty:"Beginner",
title:"SQL Function",
shortDescription:"Functions perform calculations and return a value.",
syntax:`CREATE FUNCTION function_name
(
parameters
)
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*12;
END;`,
keywordId:"FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Calculations",
optimizationId:"FUNCTION",
errorId:"FUNCTION",
interviewId:"FUNCTION",
interviewQuestions:["<b>Q:</b>What is SQL Function?<br><b>A:</b>A reusable SQL object that returns value.","<b>Q:</b>Difference from procedure?<br><b>A:</b>Function must return a value."],
relatedTopics:["function","sql function","stored procedure","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SCALAR FUNCTION
==================================*/

{
id:487,
category:"SQL Functions",
subCategory:"Scalar Function",
difficulty:"Intermediate",
title:"Scalar Function",
shortDescription:"Scalar functions return a single value.",
syntax:`CREATE FUNCTION name()
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION CalculateBonus
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*10/100;
END;`,
keywordId:"SCALAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Individual Value Calculation",
optimizationId:"SCALAR_FUNCTION",
errorId:"SCALAR_FUNCTION",
interviewId:"SCALAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What is Scalar Function?<br><b>A:</b>Returns one value.","<b>Q:</b>Example?<br><b>A:</b>Calculate bonus or tax."],
relatedTopics:["scalar function","function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TABLE VALUED FUNCTION
==================================*/

{
id:488,
category:"SQL Functions",
subCategory:"Table Valued Function",
difficulty:"Advanced",
title:"Table Valued Function",
shortDescription:"Table Valued Functions return a table as output.",
syntax:`CREATE FUNCTION name()
RETURNS TABLE
AS
RETURN
(
SELECT statement
);`,
sql:`CREATE FUNCTION GetITEmployees()
RETURNS TABLE
AS
RETURN
(
SELECT *
FROM Employees
WHERE Department='IT'
);`,
keywordId:"TABLE_VALUED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Table Queries",
optimizationId:"TABLE_VALUED_FUNCTION",
errorId:"TABLE_VALUED_FUNCTION",
interviewId:"TABLE_VALUED_FUNCTION",
interviewQuestions:["<b>Q:</b>What does Table Valued Function return?<br><b>A:</b>A table.","<b>Q:</b>Where used?<br><b>A:</b>Reusable queries."],
relatedTopics:["table valued function","function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE FUNCTION
==================================*/

{
id:489,
category:"SQL Functions",
subCategory:"CREATE FUNCTION",
difficulty:"Intermediate",
title:"CREATE FUNCTION Statement",
shortDescription:"CREATE FUNCTION creates a reusable database function.",
syntax:`CREATE FUNCTION function_name
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION GetTax
(
@Amount INT
)
RETURNS INT
AS
BEGIN
RETURN @Amount*5/100;
END;`,
keywordId:"CREATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Automate Calculations",
optimizationId:"CREATE_FUNCTION",
errorId:"CREATE_FUNCTION",
interviewId:"CREATE_FUNCTION",
interviewQuestions:["<b>Q:</b>Why create function?<br><b>A:</b>Reuse calculations.","<b>Q:</b>Can function accept parameters?<br><b>A:</b>Yes."],
relatedTopics:["create function","function","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CALL FUNCTION
==================================*/

{
id:490,
category:"SQL Functions",
subCategory:"Calling Function",
difficulty:"Beginner",
title:"Calling SQL Function",
shortDescription:"Functions are called to use their returned values.",
syntax:`SELECT function_name(parameters);`,
sql:`SELECT
dbo.GetAnnualSalary(50000)
AS AnnualSalary;`,
keywordId:"CALL_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Use Calculated Results",
optimizationId:"CALL_FUNCTION",
errorId:"CALL_FUNCTION",
interviewId:"CALL_FUNCTION",
interviewQuestions:["<b>Q:</b>How to call function?<br><b>A:</b>Using SELECT statement.","<b>Q:</b>Can function be used in queries?<br><b>A:</b>Yes."],
relatedTopics:["call function","sql function","function execution","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL TRIGGERS
==================================*/

{
id:491,
category:"SQL Triggers",
subCategory:"Trigger",
difficulty:"Intermediate",
title:"SQL Trigger",
shortDescription:"A Trigger automatically executes when a database event occurs.",
syntax:`CREATE TRIGGER trigger_name
ON table_name
AFTER INSERT
AS
BEGIN
SQL statements;
END;`,
sql:`CREATE TRIGGER Employee_Insert_Log
ON Employees
AFTER INSERT
AS
BEGIN
INSERT INTO EmployeeLog
VALUES('New Employee Added');
END;`,
keywordId:"TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automatic Database Actions",
optimizationId:"TRIGGER",
errorId:"TRIGGER",
interviewId:"TRIGGER",
interviewQuestions:["<b>Q:</b>What is SQL Trigger?<br><b>A:</b>Automatically executed database code.","<b>Q:</b>When does trigger run?<br><b>A:</b>After database events like INSERT, UPDATE or DELETE."],
relatedTopics:["trigger","sql trigger","database automation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE TRIGGER
==================================*/

{
id:492,
category:"SQL Triggers",
subCategory:"CREATE TRIGGER",
difficulty:"Intermediate",
title:"CREATE TRIGGER Statement",
shortDescription:"CREATE TRIGGER creates an automatic database action.",
syntax:`CREATE TRIGGER trigger_name
ON table_name
FOR event
AS
BEGIN
statement
END;`,
sql:`CREATE TRIGGER Salary_Update
ON Employees
AFTER UPDATE
AS
BEGIN
PRINT 'Salary Updated';
END;`,
keywordId:"CREATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automate Database Monitoring",
optimizationId:"CREATE_TRIGGER",
errorId:"CREATE_TRIGGER",
interviewId:"CREATE_TRIGGER",
interviewQuestions:["<b>Q:</b>Why create trigger?<br><b>A:</b>To automate actions after data changes.","<b>Q:</b>Can trigger be called manually?<br><b>A:</b>No."],
relatedTopics:["create trigger","trigger","database automation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER INSERT TRIGGER
==================================*/

{
id:493,
category:"SQL Triggers",
subCategory:"AFTER INSERT Trigger",
difficulty:"Intermediate",
title:"AFTER INSERT Trigger",
shortDescription:"Runs automatically after inserting new records.",
syntax:`CREATE TRIGGER name
AFTER INSERT
ON table_name
AS
BEGIN
statement
END;`,
sql:`CREATE TRIGGER NewEmployee
ON Employees
AFTER INSERT
AS
BEGIN
INSERT INTO EmployeeLog
VALUES('Employee Created');
END;`,
keywordId:"AFTER_INSERT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track New Records",
optimizationId:"AFTER_INSERT_TRIGGER",
errorId:"AFTER_INSERT_TRIGGER",
interviewId:"AFTER_INSERT_TRIGGER",
interviewQuestions:["<b>Q:</b>When does AFTER INSERT execute?<br><b>A:</b>After successful insert.","<b>Q:</b>Common use?<br><b>A:</b>Audit logging."],
relatedTopics:["after insert","trigger","audit log","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER UPDATE TRIGGER
==================================*/

{
id:494,
category:"SQL Triggers",
subCategory:"AFTER UPDATE Trigger",
difficulty:"Intermediate",
title:"AFTER UPDATE Trigger",
shortDescription:"Runs automatically after updating existing records.",
syntax:`CREATE TRIGGER name
AFTER UPDATE
ON table_name
AS
BEGIN
statement
END;`,
sql:`CREATE TRIGGER SalaryChange
ON Employees
AFTER UPDATE
AS
BEGIN
INSERT INTO SalaryLog
VALUES('Salary Changed');
END;`,
keywordId:"AFTER_UPDATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track Data Changes",
optimizationId:"AFTER_UPDATE_TRIGGER",
errorId:"AFTER_UPDATE_TRIGGER",
interviewId:"AFTER_UPDATE_TRIGGER",
interviewQuestions:["<b>Q:</b>What is AFTER UPDATE trigger?<br><b>A:</b>Executes after update operation.","<b>Q:</b>Where used?<br><b>A:</b>Change tracking."],
relatedTopics:["after update","trigger","audit","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER DELETE TRIGGER
==================================*/

{
id:495,
category:"SQL Triggers",
subCategory:"AFTER DELETE Trigger",
difficulty:"Intermediate",
title:"AFTER DELETE Trigger",
shortDescription:"Runs automatically after deleting records.",
syntax:`CREATE TRIGGER name
AFTER DELETE
ON table_name
AS
BEGIN
statement
END;`,
sql:`CREATE TRIGGER Employee_Delete_Log
ON Employees
AFTER DELETE
AS
BEGIN
INSERT INTO EmployeeLog
VALUES('Employee Deleted');
END;`,
keywordId:"AFTER_DELETE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Deletion Tracking",
optimizationId:"AFTER_DELETE_TRIGGER",
errorId:"AFTER_DELETE_TRIGGER",
interviewId:"AFTER_DELETE_TRIGGER",
interviewQuestions:["<b>Q:</b>What is AFTER DELETE trigger?<br><b>A:</b>Runs after delete operation.","<b>Q:</b>Why use it?<br><b>A:</b>Maintain audit history."],
relatedTopics:["after delete","trigger","audit log","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BEFORE INSERT TRIGGER
==================================*/

{
id:496,
category:"SQL Triggers",
subCategory:"BEFORE INSERT Trigger",
difficulty:"Advanced",
title:"BEFORE INSERT Trigger",
shortDescription:"Runs before inserting data into a table.",
syntax:`CREATE TRIGGER trigger_name
BEFORE INSERT
ON table_name
FOR EACH ROW
BEGIN
SQL statements;
END;`,
sql:`CREATE TRIGGER CheckSalary
BEFORE INSERT
ON Employees
FOR EACH ROW
BEGIN
IF NEW.Salary < 0 THEN
SET NEW.Salary=0;
END IF;
END;`,
keywordId:"BEFORE_INSERT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Validate Data Before Insert",
optimizationId:"BEFORE_INSERT_TRIGGER",
errorId:"BEFORE_INSERT_TRIGGER",
interviewId:"BEFORE_INSERT_TRIGGER",
interviewQuestions:["<b>Q:</b>When does BEFORE INSERT execute?<br><b>A:</b>Before new record insertion.","<b>Q:</b>Purpose?<br><b>A:</b>Data validation."],
relatedTopics:["before insert","trigger","data validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BEFORE UPDATE TRIGGER
==================================*/

{
id:497,
category:"SQL Triggers",
subCategory:"BEFORE UPDATE Trigger",
difficulty:"Advanced",
title:"BEFORE UPDATE Trigger",
shortDescription:"Runs before updating existing records.",
syntax:`CREATE TRIGGER trigger_name
BEFORE UPDATE
ON table_name
FOR EACH ROW
BEGIN
SQL statements;
END;`,
sql:`CREATE TRIGGER ValidateSalary
BEFORE UPDATE
ON Employees
FOR EACH ROW
BEGIN
IF NEW.Salary<OLD.Salary THEN
SIGNAL SQLSTATE '45000';
END IF;
END;`,
keywordId:"BEFORE_UPDATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Prevent Invalid Updates",
optimizationId:"BEFORE_UPDATE_TRIGGER",
errorId:"BEFORE_UPDATE_TRIGGER",
interviewId:"BEFORE_UPDATE_TRIGGER",
interviewQuestions:["<b>Q:</b>What is BEFORE UPDATE trigger?<br><b>A:</b>Runs before update operation.","<b>Q:</b>Why use it?<br><b>A:</b>To control data changes."],
relatedTopics:["before update","trigger","validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INSTEAD OF TRIGGER
==================================*/

{
id:498,
category:"SQL Triggers",
subCategory:"INSTEAD OF Trigger",
difficulty:"Advanced",
title:"INSTEAD OF Trigger",
shortDescription:"INSTEAD OF trigger executes instead of the original operation.",
syntax:`CREATE TRIGGER trigger_name
ON table_name
INSTEAD OF INSERT
AS
BEGIN
statement
END;`,
sql:`CREATE TRIGGER Employee_Insert
ON Employees
INSTEAD OF INSERT
AS
BEGIN
PRINT 'Custom Insert Logic';
END;`,
keywordId:"INSTEAD_OF_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Custom Data Processing",
optimizationId:"INSTEAD_OF_TRIGGER",
errorId:"INSTEAD_OF_TRIGGER",
interviewId:"INSTEAD_OF_TRIGGER",
interviewQuestions:["<b>Q:</b>What is INSTEAD OF trigger?<br><b>A:</b>Replaces original operation.","<b>Q:</b>Where commonly used?<br><b>A:</b>Views."],
relatedTopics:["instead of trigger","trigger","sql server","sql interview","sql examples","sql"]
},

/*==================================
 ENABLE TRIGGER
==================================*/

{
id:499,
category:"SQL Triggers",
subCategory:"ENABLE TRIGGER",
difficulty:"Intermediate",
title:"ENABLE TRIGGER Statement",
shortDescription:"ENABLE TRIGGER activates a disabled trigger.",
syntax:`ENABLE TRIGGER trigger_name
ON table_name;`,
sql:`ENABLE TRIGGER Salary_Update
ON Employees;`,
keywordId:"ENABLE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Activate Database Automation",
optimizationId:"ENABLE_TRIGGER",
errorId:"ENABLE_TRIGGER",
interviewId:"ENABLE_TRIGGER",
interviewQuestions:["<b>Q:</b>Why enable trigger?<br><b>A:</b>To activate trigger execution.","<b>Q:</b>Can disabled trigger run?<br><b>A:</b>No."],
relatedTopics:["enable trigger","trigger","database automation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DISABLE TRIGGER
==================================*/

{
id:500,
category:"SQL Triggers",
subCategory:"DISABLE TRIGGER",
difficulty:"Intermediate",
title:"DISABLE TRIGGER Statement",
shortDescription:"DISABLE TRIGGER temporarily stops trigger execution.",
syntax:`DISABLE TRIGGER trigger_name
ON table_name;`,
sql:`DISABLE TRIGGER Salary_Update
ON Employees;`,
keywordId:"DISABLE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Temporarily Stop Automation",
optimizationId:"DISABLE_TRIGGER",
errorId:"DISABLE_TRIGGER",
interviewId:"DISABLE_TRIGGER",
interviewQuestions:["<b>Q:</b>Why disable trigger?<br><b>A:</b>During bulk data operations.","<b>Q:</b>Is trigger deleted?<br><b>A:</b>No."],
relatedTopics:["disable trigger","trigger","database management","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL TRANSACTIONS
==================================*/

{
id:501,
category:"SQL Transactions",
subCategory:"Transaction",
difficulty:"Beginner",
title:"SQL Transaction",
shortDescription:"A transaction is a sequence of SQL operations executed as a single unit.",
syntax:`BEGIN TRANSACTION

SQL Statements

COMMIT / ROLLBACK`,
sql:`BEGIN TRANSACTION

UPDATE Employees
SET Salary=Salary+5000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Consistency",
optimizationId:"TRANSACTION",
errorId:"TRANSACTION",
interviewId:"TRANSACTION",
interviewQuestions:["<b>Q:</b>What is SQL Transaction?<br><b>A:</b>A group of operations treated as one unit.","<b>Q:</b>Why use transaction?<br><b>A:</b>To maintain data accuracy."],
relatedTopics:["transaction","sql transaction","commit","rollback","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BEGIN TRANSACTION
==================================*/

{
id:502,
category:"SQL Transactions",
subCategory:"BEGIN TRANSACTION",
difficulty:"Beginner",
title:"BEGIN TRANSACTION",
shortDescription:"BEGIN TRANSACTION starts a new transaction.",
syntax:`BEGIN TRANSACTION;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=60000
WHERE EmployeeID=101;`,
keywordId:"BEGIN_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Start Controlled Operations",
optimizationId:"BEGIN_TRANSACTION",
errorId:"BEGIN_TRANSACTION",
interviewId:"BEGIN_TRANSACTION",
interviewQuestions:["<b>Q:</b>What does BEGIN TRANSACTION do?<br><b>A:</b>Starts transaction processing.","<b>Q:</b>What comes after begin?<br><b>A:</b>COMMIT or ROLLBACK."],
relatedTopics:["begin transaction","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMMIT TRANSACTION
==================================*/

{
id:503,
category:"SQL Transactions",
subCategory:"COMMIT",
difficulty:"Beginner",
title:"COMMIT Transaction",
shortDescription:"COMMIT permanently saves transaction changes.",
syntax:`COMMIT;`,
sql:`BEGIN TRANSACTION

UPDATE Employees
SET Salary=Salary+1000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"COMMIT",
sampleDataId:"Employees",
businessCaseId:"Save Database Changes",
optimizationId:"COMMIT",
errorId:"COMMIT",
interviewId:"COMMIT",
interviewQuestions:["<b>Q:</b>What does COMMIT do?<br><b>A:</b>Saves changes permanently.","<b>Q:</b>Can committed data be rolled back?<br><b>A:</b>No."],
relatedTopics:["commit","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ROLLBACK TRANSACTION
==================================*/

{
id:504,
category:"SQL Transactions",
subCategory:"ROLLBACK",
difficulty:"Beginner",
title:"ROLLBACK Transaction",
shortDescription:"ROLLBACK cancels transaction changes.",
syntax:`ROLLBACK;`,
sql:`BEGIN TRANSACTION

UPDATE Employees
SET Salary=0
WHERE EmployeeID=101;

ROLLBACK;`,
keywordId:"ROLLBACK",
sampleDataId:"Employees",
businessCaseId:"Undo Incorrect Changes",
optimizationId:"ROLLBACK",
errorId:"ROLLBACK",
interviewId:"ROLLBACK",
interviewQuestions:["<b>Q:</b>What does ROLLBACK do?<br><b>A:</b>Reverses uncommitted changes.","<b>Q:</b>When used?<br><b>A:</b>When an error occurs."],
relatedTopics:["rollback","transaction","undo changes","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SAVEPOINT
==================================*/

{
id:505,
category:"SQL Transactions",
subCategory:"SAVEPOINT",
difficulty:"Intermediate",
title:"SAVEPOINT",
shortDescription:"SAVEPOINT creates a checkpoint inside a transaction.",
syntax:`SAVEPOINT savepoint_name;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=Salary+5000;

SAVEPOINT Salary_Update;`,
keywordId:"SAVEPOINT",
sampleDataId:"Employees",
businessCaseId:"Partial Transaction Control",
optimizationId:"SAVEPOINT",
errorId:"SAVEPOINT",
interviewId:"SAVEPOINT",
interviewQuestions:["<b>Q:</b>What is SAVEPOINT?<br><b>A:</b>A point inside transaction for partial rollback.","<b>Q:</b>Why use it?<br><b>A:</b>Manage large transactions."],
relatedTopics:["savepoint","transaction","rollback","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ACID PROPERTIES
==================================*/

{
id:506,
category:"SQL Transactions",
subCategory:"ACID Properties",
difficulty:"Intermediate",
title:"ACID Properties",
shortDescription:"ACID properties ensure reliable and consistent database transactions.",
syntax:`A - Atomicity
C - Consistency
I - Isolation
D - Durability`,
sql:`BEGIN TRANSACTION;

UPDATE Account
SET Balance=Balance-1000
WHERE AccountID=1;

COMMIT;`,
keywordId:"ACID_PROPERTIES",
sampleDataId:"Employees",
businessCaseId:"Reliable Banking Transactions",
optimizationId:"ACID_PROPERTIES",
errorId:"ACID_PROPERTIES",
interviewId:"ACID_PROPERTIES",
interviewQuestions:["<b>Q:</b>What are ACID properties?<br><b>A:</b>Rules that ensure transaction reliability.","<b>Q:</b>Full form of ACID?<br><b>A:</b>Atomicity, Consistency, Isolation, Durability."],
relatedTopics:["acid properties","transaction","database concept","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ATOMICITY
==================================*/

{
id:507,
category:"SQL Transactions",
subCategory:"Atomicity",
difficulty:"Intermediate",
title:"Atomicity",
shortDescription:"Atomicity ensures all transaction operations complete or none are applied.",
syntax:`All or Nothing`,
sql:`BEGIN TRANSACTION;

UPDATE Account
SET Balance=Balance-500
WHERE AccountID=1;

UPDATE Account
SET Balance=Balance+500
WHERE AccountID=2;

COMMIT;`,
keywordId:"ATOMICITY",
sampleDataId:"Employees",
businessCaseId:"Prevent Partial Updates",
optimizationId:"ATOMICITY",
errorId:"ATOMICITY",
interviewId:"ATOMICITY",
interviewQuestions:["<b>Q:</b>What is Atomicity?<br><b>A:</b>Transaction happens completely or not at all.","<b>Q:</b>Example?<br><b>A:</b>Bank transfer."],
relatedTopics:["atomicity","acid","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONSISTENCY
==================================*/

{
id:508,
category:"SQL Transactions",
subCategory:"Consistency",
difficulty:"Intermediate",
title:"Consistency",
shortDescription:"Consistency ensures database rules remain valid after transactions.",
syntax:`Valid State Before
&
After Transaction`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=-5000
WHERE EmployeeID=101;

ROLLBACK;`,
keywordId:"CONSISTENCY",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Integrity",
optimizationId:"CONSISTENCY",
errorId:"CONSISTENCY",
interviewId:"CONSISTENCY",
interviewQuestions:["<b>Q:</b>What is Consistency?<br><b>A:</b>Database remains correct after transaction.","<b>Q:</b>What maintains consistency?<br><b>A:</b>Constraints and rules."],
relatedTopics:["consistency","acid","transaction","data integrity","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ISOLATION
==================================*/

{
id:509,
category:"SQL Transactions",
subCategory:"Isolation",
difficulty:"Intermediate",
title:"Isolation",
shortDescription:"Isolation controls how transactions interact with each other.",
syntax:`Transaction A
≠
Transaction B`,
sql:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;`,
keywordId:"ISOLATION",
sampleDataId:"Employees",
businessCaseId:"Prevent Transaction Conflicts",
optimizationId:"ISOLATION",
errorId:"ISOLATION",
interviewId:"ISOLATION",
interviewQuestions:["<b>Q:</b>What is Isolation?<br><b>A:</b>Keeps transactions independent.","<b>Q:</b>Why needed?<br><b>A:</b>Prevent incorrect reads."],
relatedTopics:["isolation","acid","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DURABILITY
==================================*/

{
id:510,
category:"SQL Transactions",
subCategory:"Durability",
difficulty:"Intermediate",
title:"Durability",
shortDescription:"Durability ensures committed changes permanently remain in database.",
syntax:`COMMIT
=
Permanent Save`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=90000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"DURABILITY",
sampleDataId:"Employees",
businessCaseId:"Permanent Data Storage",
optimizationId:"DURABILITY",
errorId:"DURABILITY",
interviewId:"DURABILITY",
interviewQuestions:["<b>Q:</b>What is Durability?<br><b>A:</b>Committed data remains saved.","<b>Q:</b>How achieved?<br><b>A:</b>Transaction logs and storage systems."],
relatedTopics:["durability","acid","transaction","database reliability","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRANSACTION ISOLATION LEVELS
==================================*/

{
id:511,
category:"SQL Transactions",
subCategory:"Isolation Levels",
difficulty:"Advanced",
title:"Transaction Isolation Levels",
shortDescription:"Isolation levels control visibility of changes between transactions.",
syntax:`SET TRANSACTION ISOLATION LEVEL
level_name;`,
sql:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;`,
keywordId:"ISOLATION_LEVELS",
sampleDataId:"Employees",
businessCaseId:"Control Concurrent Transactions",
optimizationId:"ISOLATION_LEVELS",
errorId:"ISOLATION_LEVELS",
interviewId:"ISOLATION_LEVELS",
interviewQuestions:["<b>Q:</b>What are Isolation Levels?<br><b>A:</b>Rules controlling transaction access.","<b>Q:</b>Why required?<br><b>A:</b>Manage concurrency issues."],
relatedTopics:["isolation level","transaction","acid","sql interview","sql examples","sql server","sql"]
},

/*==================================
 READ UNCOMMITTED
==================================*/

{
id:512,
category:"SQL Transactions",
subCategory:"READ UNCOMMITTED",
difficulty:"Advanced",
title:"READ UNCOMMITTED",
shortDescription:"Allows reading uncommitted changes from other transactions.",
syntax:`SET TRANSACTION ISOLATION LEVEL
READ UNCOMMITTED;`,
sql:`SET TRANSACTION ISOLATION LEVEL
READ UNCOMMITTED;

SELECT *
FROM Employees;`,
keywordId:"READ_UNCOMMITTED",
sampleDataId:"Employees",
businessCaseId:"Fast Reporting With Dirty Reads",
optimizationId:"READ_UNCOMMITTED",
errorId:"READ_UNCOMMITTED",
interviewId:"READ_UNCOMMITTED",
interviewQuestions:["<b>Q:</b>What is READ UNCOMMITTED?<br><b>A:</b>Lowest isolation level.","<b>Q:</b>Main issue?<br><b>A:</b>Dirty reads."],
relatedTopics:["read uncommitted","dirty read","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 READ COMMITTED
==================================*/

{
id:513,
category:"SQL Transactions",
subCategory:"READ COMMITTED",
difficulty:"Advanced",
title:"READ COMMITTED",
shortDescription:"Allows reading only committed data.",
syntax:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;`,
sql:`SET TRANSACTION ISOLATION LEVEL
READ COMMITTED;

SELECT *
FROM Employees;`,
keywordId:"READ_COMMITTED",
sampleDataId:"Employees",
businessCaseId:"Prevent Dirty Reads",
optimizationId:"READ_COMMITTED",
errorId:"READ_COMMITTED",
interviewId:"READ_COMMITTED",
interviewQuestions:["<b>Q:</b>What does READ COMMITTED prevent?<br><b>A:</b>Dirty reads.","<b>Q:</b>Default level in SQL Server?<br><b>A:</b>READ COMMITTED."],
relatedTopics:["read committed","transaction","isolation level","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REPEATABLE READ
==================================*/

{
id:514,
category:"SQL Transactions",
subCategory:"REPEATABLE READ",
difficulty:"Advanced",
title:"REPEATABLE READ",
shortDescription:"Ensures repeated reads return the same data during transaction.",
syntax:`SET TRANSACTION ISOLATION LEVEL
REPEATABLE READ;`,
sql:`SET TRANSACTION ISOLATION LEVEL
REPEATABLE READ;

SELECT *
FROM Employees
WHERE EmployeeID=101;`,
keywordId:"REPEATABLE_READ",
sampleDataId:"Employees",
businessCaseId:"Stable Data Reading",
optimizationId:"REPEATABLE_READ",
errorId:"REPEATABLE_READ",
interviewId:"REPEATABLE_READ",
interviewQuestions:["<b>Q:</b>What does REPEATABLE READ prevent?<br><b>A:</b>Non-repeatable reads.","<b>Q:</b>Higher than READ COMMITTED?<br><b>A:</b>Yes."],
relatedTopics:["repeatable read","transaction","isolation level","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SERIALIZABLE
==================================*/

{
id:515,
category:"SQL Transactions",
subCategory:"SERIALIZABLE",
difficulty:"Advanced",
title:"SERIALIZABLE Isolation Level",
shortDescription:"Highest isolation level that completely isolates transactions.",
syntax:`SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE;`,
sql:`SET TRANSACTION ISOLATION LEVEL
SERIALIZABLE;

SELECT *
FROM Employees;`,
keywordId:"SERIALIZABLE",
sampleDataId:"Employees",
businessCaseId:"Maximum Data Accuracy",
optimizationId:"SERIALIZABLE",
errorId:"SERIALIZABLE",
interviewId:"SERIALIZABLE",
interviewQuestions:["<b>Q:</b>What is SERIALIZABLE?<br><b>A:</b>Highest isolation level.","<b>Q:</b>Trade-off?<br><b>A:</b>Lower performance due to locking."],
relatedTopics:["serializable","isolation level","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL INDEXES
==================================*/

{
id:516,
category:"SQL Indexes",
subCategory:"Index",
difficulty:"Beginner",
title:"SQL Index",
shortDescription:"An Index improves query performance by allowing faster data searching.",
syntax:`CREATE INDEX index_name
ON table_name(column_name);`,
sql:`CREATE INDEX idx_employee_name
ON Employees(EmployeeName);`,
keywordId:"INDEX",
sampleDataId:"Employees",
businessCaseId:"Improve Query Speed",
optimizationId:"INDEX",
errorId:"INDEX",
interviewId:"INDEX",
interviewQuestions:["<b>Q:</b>What is SQL Index?<br><b>A:</b>A database object used to speed up data retrieval.","<b>Q:</b>Does Index store duplicate data?<br><b>A:</b>No, it stores pointers to data."],
relatedTopics:["index","sql index","performance tuning","database optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE INDEX
==================================*/

{
id:517,
category:"SQL Indexes",
subCategory:"CREATE INDEX",
difficulty:"Beginner",
title:"CREATE INDEX Statement",
shortDescription:"CREATE INDEX creates a new index on a table column.",
syntax:`CREATE INDEX index_name
ON table_name(column_name);`,
sql:`CREATE INDEX idx_salary
ON Employees(Salary);`,
keywordId:"CREATE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Faster Data Search",
optimizationId:"CREATE_INDEX",
errorId:"CREATE_INDEX",
interviewId:"CREATE_INDEX",
interviewQuestions:["<b>Q:</b>Why create index?<br><b>A:</b>Improve SELECT performance.","<b>Q:</b>Can index slow operations?<br><b>A:</b>Yes, INSERT, UPDATE and DELETE may slow."],
relatedTopics:["create index","index","performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP INDEX
==================================*/

{
id:518,
category:"SQL Indexes",
subCategory:"DROP INDEX",
difficulty:"Beginner",
title:"DROP INDEX Statement",
shortDescription:"DROP INDEX removes an existing index.",
syntax:`DROP INDEX index_name;`,
sql:`DROP INDEX idx_salary;`,
keywordId:"DROP_INDEX",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Index",
optimizationId:"DROP_INDEX",
errorId:"DROP_INDEX",
interviewId:"DROP_INDEX",
interviewQuestions:["<b>Q:</b>What does DROP INDEX do?<br><b>A:</b>Deletes index structure.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop index","index","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CLUSTERED INDEX
==================================*/

{
id:519,
category:"SQL Indexes",
subCategory:"Clustered Index",
difficulty:"Intermediate",
title:"Clustered Index",
shortDescription:"Clustered Index determines the physical order of data in a table.",
syntax:`CREATE CLUSTERED INDEX
index_name
ON table_name(column);`,
sql:`CREATE CLUSTERED INDEX idx_emp_id
ON Employees(EmployeeID);`,
keywordId:"CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Fast Primary Key Search",
optimizationId:"CLUSTERED_INDEX",
errorId:"CLUSTERED_INDEX",
interviewId:"CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is Clustered Index?<br><b>A:</b>Index that controls physical data order.","<b>Q:</b>How many clustered indexes per table?<br><b>A:</b>Only one."],
relatedTopics:["clustered index","index","sql performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NON CLUSTERED INDEX
==================================*/

{
id:520,
category:"SQL Indexes",
subCategory:"Non Clustered Index",
difficulty:"Intermediate",
title:"Non Clustered Index",
shortDescription:"Non Clustered Index stores separate structure with pointers to data.",
syntax:`CREATE NONCLUSTERED INDEX
index_name
ON table_name(column);`,
sql:`CREATE NONCLUSTERED INDEX idx_department
ON Employees(Department);`,
keywordId:"NON_CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Optimize Search Columns",
optimizationId:"NON_CLUSTERED_INDEX",
errorId:"NON_CLUSTERED_INDEX",
interviewId:"NON_CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is Non Clustered Index?<br><b>A:</b>Separate structure pointing to table data.","<b>Q:</b>How many can exist?<br><b>A:</b>Multiple."],
relatedTopics:["non clustered index","index","database optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNIQUE INDEX
==================================*/

{
id:521,
category:"SQL Indexes",
subCategory:"Unique Index",
difficulty:"Intermediate",
title:"Unique Index",
shortDescription:"Unique Index prevents duplicate values in indexed columns.",
syntax:`CREATE UNIQUE INDEX index_name
ON table_name(column_name);`,
sql:`CREATE UNIQUE INDEX idx_email
ON Employees(Email);`,
keywordId:"UNIQUE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Prevent Duplicate Records",
optimizationId:"UNIQUE_INDEX",
errorId:"UNIQUE_INDEX",
interviewId:"UNIQUE_INDEX",
interviewQuestions:["<b>Q:</b>What is Unique Index?<br><b>A:</b>An index that does not allow duplicate values.","<b>Q:</b>Difference from normal index?<br><b>A:</b>Unique index enforces uniqueness."],
relatedTopics:["unique index","index","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMPOSITE INDEX
==================================*/

{
id:522,
category:"SQL Indexes",
subCategory:"Composite Index",
difficulty:"Intermediate",
title:"Composite Index",
shortDescription:"Composite Index is created using multiple columns.",
syntax:`CREATE INDEX index_name
ON table_name(column1,column2);`,
sql:`CREATE INDEX idx_emp_search
ON Employees(Department,Salary);`,
keywordId:"COMPOSITE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Multi Column Search Optimization",
optimizationId:"COMPOSITE_INDEX",
errorId:"COMPOSITE_INDEX",
interviewId:"COMPOSITE_INDEX",
interviewQuestions:["<b>Q:</b>What is Composite Index?<br><b>A:</b>Index created on multiple columns.","<b>Q:</b>Maximum columns?<br><b>A:</b>Depends on database system."],
relatedTopics:["composite index","multi column index","sql performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COVERING INDEX
==================================*/

{
id:523,
category:"SQL Indexes",
subCategory:"Covering Index",
difficulty:"Advanced",
title:"Covering Index",
shortDescription:"Covering Index contains all columns required by a query.",
syntax:`CREATE INDEX index_name
ON table(column)
INCLUDE(columns);`,
sql:`CREATE INDEX idx_employee_cover
ON Employees(EmployeeID)
INCLUDE(EmployeeName,Salary);`,
keywordId:"COVERING_INDEX",
sampleDataId:"Employees",
businessCaseId:"Avoid Table Lookup",
optimizationId:"COVERING_INDEX",
errorId:"COVERING_INDEX",
interviewId:"COVERING_INDEX",
interviewQuestions:["<b>Q:</b>What is Covering Index?<br><b>A:</b>Index containing all query-required columns.","<b>Q:</b>Benefit?<br><b>A:</b>Improves SELECT performance."],
relatedTopics:["covering index","index","query optimization","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEX SEEK
==================================*/

{
id:524,
category:"SQL Indexes",
subCategory:"Index Seek",
difficulty:"Advanced",
title:"Index Seek",
shortDescription:"Index Seek directly finds required records using an index.",
syntax:`Search
→ Index
→ Required Rows`,
sql:`SELECT *
FROM Employees
WHERE EmployeeID=101;`,
keywordId:"INDEX_SEEK",
sampleDataId:"Employees",
businessCaseId:"Fast Record Retrieval",
optimizationId:"INDEX_SEEK",
errorId:"INDEX_SEEK",
interviewId:"INDEX_SEEK",
interviewQuestions:["<b>Q:</b>What is Index Seek?<br><b>A:</b>Direct lookup using index.","<b>Q:</b>Is it faster than scan?<br><b>A:</b>Usually yes."],
relatedTopics:["index seek","execution plan","performance tuning","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEX SCAN
==================================*/

{
id:525,
category:"SQL Indexes",
subCategory:"Index Scan",
difficulty:"Advanced",
title:"Index Scan",
shortDescription:"Index Scan reads many or all rows from an index.",
syntax:`Read
→ Multiple Index Pages
→ Filter Result`,
sql:`SELECT *
FROM Employees;`,
keywordId:"INDEX_SCAN",
sampleDataId:"Employees",
businessCaseId:"Large Data Reading",
optimizationId:"INDEX_SCAN",
errorId:"INDEX_SCAN",
interviewId:"INDEX_SCAN",
interviewQuestions:["<b>Q:</b>What is Index Scan?<br><b>A:</b>Reads complete or large part of index.","<b>Q:</b>Seek vs Scan?<br><b>A:</b>Seek finds specific rows, Scan reads many rows."],
relatedTopics:["index scan","index seek","execution plan","sql performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL CONSTRAINTS
==================================*/

{
id:526,
category:"SQL Constraints",
subCategory:"Constraint",
difficulty:"Beginner",
title:"SQL Constraint",
shortDescription:"Constraints enforce rules on data stored in database tables.",
syntax:`CREATE TABLE table_name
(
column datatype CONSTRAINT
);`,
sql:`CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
EmployeeName VARCHAR(100)
);`,
keywordId:"CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Integrity",
optimizationId:"CONSTRAINT",
errorId:"CONSTRAINT",
interviewId:"CONSTRAINT",
interviewQuestions:["<b>Q:</b>What is Constraint?<br><b>A:</b>Rule applied to table data.","<b>Q:</b>Why use constraints?<br><b>A:</b>Prevent invalid data."],
relatedTopics:["constraint","database rules","data integrity","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PRIMARY KEY
==================================*/

{
id:527,
category:"SQL Constraints",
subCategory:"Primary Key",
difficulty:"Beginner",
title:"PRIMARY KEY Constraint",
shortDescription:"Primary Key uniquely identifies each record in a table.",
syntax:`column datatype PRIMARY KEY`,
sql:`CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
EmployeeName VARCHAR(100)
);`,
keywordId:"PRIMARY_KEY",
sampleDataId:"Employees",
businessCaseId:"Unique Record Identification",
optimizationId:"PRIMARY_KEY",
errorId:"PRIMARY_KEY",
interviewId:"PRIMARY_KEY",
interviewQuestions:["<b>Q:</b>What is Primary Key?<br><b>A:</b>Unique identifier for each row.","<b>Q:</b>Can Primary Key contain NULL?<br><b>A:</b>No."],
relatedTopics:["primary key","constraint","database design","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FOREIGN KEY
==================================*/

{
id:528,
category:"SQL Constraints",
subCategory:"Foreign Key",
difficulty:"Beginner",
title:"FOREIGN KEY Constraint",
shortDescription:"Foreign Key creates a relationship between tables.",
syntax:`FOREIGN KEY(column)
REFERENCES table(column);`,
sql:`CREATE TABLE Employees
(
DepartmentID INT,
FOREIGN KEY(DepartmentID)
REFERENCES Departments(DepartmentID)
);`,
keywordId:"FOREIGN_KEY",
sampleDataId:"Employees",
businessCaseId:"Maintain Table Relationships",
optimizationId:"FOREIGN_KEY",
errorId:"FOREIGN_KEY",
interviewId:"FOREIGN_KEY",
interviewQuestions:["<b>Q:</b>What is Foreign Key?<br><b>A:</b>Column that references another table.","<b>Q:</b>Purpose?<br><b>A:</b>Maintain referential integrity."],
relatedTopics:["foreign key","primary key","relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNIQUE CONSTRAINT
==================================*/

{
id:529,
category:"SQL Constraints",
subCategory:"Unique Constraint",
difficulty:"Beginner",
title:"UNIQUE Constraint",
shortDescription:"UNIQUE ensures all values in a column are different.",
syntax:`column datatype UNIQUE`,
sql:`CREATE TABLE Employees
(
Email VARCHAR(100) UNIQUE
);`,
keywordId:"UNIQUE_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Prevent Duplicate Values",
optimizationId:"UNIQUE_CONSTRAINT",
errorId:"UNIQUE_CONSTRAINT",
interviewId:"UNIQUE_CONSTRAINT",
interviewQuestions:["<b>Q:</b>What does UNIQUE do?<br><b>A:</b>Prevents duplicate values.","<b>Q:</b>Difference from Primary Key?<br><b>A:</b>Multiple UNIQUE columns possible."],
relatedTopics:["unique constraint","constraint","data validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT NULL CONSTRAINT
==================================*/

{
id:530,
category:"SQL Constraints",
subCategory:"NOT NULL",
difficulty:"Beginner",
title:"NOT NULL Constraint",
shortDescription:"NOT NULL prevents empty values in a column.",
syntax:`column datatype NOT NULL`,
sql:`CREATE TABLE Employees
(
EmployeeName VARCHAR(100) NOT NULL
);`,
keywordId:"NOT_NULL",
sampleDataId:"Employees",
businessCaseId:"Mandatory Data Fields",
optimizationId:"NOT_NULL",
errorId:"NOT_NULL",
interviewId:"NOT_NULL",
interviewQuestions:["<b>Q:</b>What is NOT NULL?<br><b>A:</b>Prevents NULL values.","<b>Q:</b>Can it store blank text?<br><b>A:</b>Depends on value rules."],
relatedTopics:["not null","constraint","data validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHECK CONSTRAINT
==================================*/

{
id:531,
category:"SQL Constraints",
subCategory:"CHECK Constraint",
difficulty:"Beginner",
title:"CHECK Constraint",
shortDescription:"CHECK constraint ensures values satisfy a specified condition.",
syntax:`column datatype
CHECK(condition);`,
sql:`CREATE TABLE Employees
(
Salary INT
CHECK(Salary>0)
);`,
keywordId:"CHECK_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Validate Business Rules",
optimizationId:"CHECK_CONSTRAINT",
errorId:"CHECK_CONSTRAINT",
interviewId:"CHECK_CONSTRAINT",
interviewQuestions:["<b>Q:</b>What is CHECK constraint?<br><b>A:</b>Validates data before storing.","<b>Q:</b>Example?<br><b>A:</b>Salary cannot be negative."],
relatedTopics:["check constraint","constraint","data validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DEFAULT CONSTRAINT
==================================*/

{
id:532,
category:"SQL Constraints",
subCategory:"DEFAULT Constraint",
difficulty:"Beginner",
title:"DEFAULT Constraint",
shortDescription:"DEFAULT assigns a predefined value when no value is provided.",
syntax:`column datatype
DEFAULT value;`,
sql:`CREATE TABLE Employees
(
Status VARCHAR(20)
DEFAULT 'Active'
);`,
keywordId:"DEFAULT_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Automatic Default Values",
optimizationId:"DEFAULT_CONSTRAINT",
errorId:"DEFAULT_CONSTRAINT",
interviewId:"DEFAULT_CONSTRAINT",
interviewQuestions:["<b>Q:</b>What does DEFAULT do?<br><b>A:</b>Provides automatic value.","<b>Q:</b>When applied?<br><b>A:</b>When INSERT does not provide value."],
relatedTopics:["default constraint","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PRIMARY KEY VS UNIQUE
==================================*/

{
id:533,
category:"SQL Constraints",
subCategory:"Primary Key vs Unique",
difficulty:"Intermediate",
title:"Primary Key vs UNIQUE Constraint",
shortDescription:"Both enforce uniqueness but have different database purposes.",
syntax:`PRIMARY KEY
=
Unique + Not NULL

UNIQUE
=
No Duplicate Values`,
sql:`CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
Email VARCHAR(100) UNIQUE
);`,
keywordId:"PRIMARY_VS_UNIQUE",
sampleDataId:"Employees",
businessCaseId:"Database Design Decisions",
optimizationId:"PRIMARY_VS_UNIQUE",
errorId:"PRIMARY_VS_UNIQUE",
interviewId:"PRIMARY_VS_UNIQUE",
interviewQuestions:["<b>Q:</b>Difference between Primary Key and Unique?<br><b>A:</b>Primary Key identifies row, Unique prevents duplicates.","<b>Q:</b>How many Primary Keys?<br><b>A:</b>Only one."],
relatedTopics:["primary key vs unique","constraint","database design","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FOREIGN KEY CASCADE
==================================*/

{
id:534,
category:"SQL Constraints",
subCategory:"Cascade Actions",
difficulty:"Advanced",
title:"Foreign Key Cascade",
shortDescription:"Cascade actions automatically update or delete related records.",
syntax:`ON DELETE CASCADE
ON UPDATE CASCADE`,
sql:`CREATE TABLE Employees
(
DepartmentID INT,
FOREIGN KEY(DepartmentID)
REFERENCES Departments(DepartmentID)
ON DELETE CASCADE
);`,
keywordId:"FOREIGN_KEY_CASCADE",
sampleDataId:"Employees",
businessCaseId:"Automatic Related Data Management",
optimizationId:"FOREIGN_KEY_CASCADE",
errorId:"FOREIGN_KEY_CASCADE",
interviewId:"FOREIGN_KEY_CASCADE",
interviewQuestions:["<b>Q:</b>What is CASCADE?<br><b>A:</b>Automatic action on related rows.","<b>Q:</b>Example?<br><b>A:</b>Delete department deletes employees."],
relatedTopics:["cascade","foreign key","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REFERENTIAL INTEGRITY
==================================*/

{
id:535,
category:"SQL Constraints",
subCategory:"Referential Integrity",
difficulty:"Advanced",
title:"Referential Integrity",
shortDescription:"Ensures relationships between tables remain accurate.",
syntax:`Primary Key
↓
Foreign Key`,
sql:`CREATE TABLE Orders
(
CustomerID INT,
FOREIGN KEY(CustomerID)
REFERENCES Customers(CustomerID)
);`,
keywordId:"REFERENTIAL_INTEGRITY",
sampleDataId:"Employees",
businessCaseId:"Maintain Related Data Accuracy",
optimizationId:"REFERENTIAL_INTEGRITY",
errorId:"REFERENTIAL_INTEGRITY",
interviewId:"REFERENTIAL_INTEGRITY",
interviewQuestions:["<b>Q:</b>What is Referential Integrity?<br><b>A:</b>Maintains valid table relationships.","<b>Q:</b>Which constraint helps?<br><b>A:</b>Foreign Key."],
relatedTopics:["referential integrity","foreign key","constraint","database design","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL DATA TYPES
==================================*/

{
id:536,
category:"SQL Data Types",
subCategory:"Data Type",
difficulty:"Beginner",
title:"SQL Data Types",
shortDescription:"Data types define what kind of values a column can store.",
syntax:`CREATE TABLE table_name
(
column_name datatype
);`,
sql:`CREATE TABLE Employees
(
EmployeeID INT,
EmployeeName VARCHAR(100),
Salary DECIMAL(10,2)
);`,
keywordId:"DATA_TYPE",
sampleDataId:"Employees",
businessCaseId:"Design Database Columns",
optimizationId:"DATA_TYPE",
errorId:"DATA_TYPE",
interviewId:"DATA_TYPE",
interviewQuestions:["<b>Q:</b>What is Data Type?<br><b>A:</b>Defines the type of data stored.","<b>Q:</b>Why important?<br><b>A:</b>Ensures correct storage and validation."],
relatedTopics:["data type","sql datatype","database design","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INTEGER DATA TYPE
==================================*/

{
id:537,
category:"SQL Data Types",
subCategory:"INTEGER",
difficulty:"Beginner",
title:"INTEGER Data Type",
shortDescription:"INTEGER stores whole numbers without decimal values.",
syntax:`INT`,
sql:`CREATE TABLE Employees
(
EmployeeID INT
);`,
keywordId:"INTEGER",
sampleDataId:"Employees",
businessCaseId:"Store Numeric IDs",
optimizationId:"INTEGER",
errorId:"INTEGER",
interviewId:"INTEGER",
interviewQuestions:["<b>Q:</b>What does INT store?<br><b>A:</b>Whole numbers.","<b>Q:</b>Example?<br><b>A:</b>Employee ID."],
relatedTopics:["integer","int","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BIGINT DATA TYPE
==================================*/

{
id:538,
category:"SQL Data Types",
subCategory:"BIGINT",
difficulty:"Beginner",
title:"BIGINT Data Type",
shortDescription:"BIGINT stores very large whole numbers.",
syntax:`BIGINT`,
sql:`CREATE TABLE Transactions
(
TransactionID BIGINT
);`,
keywordId:"BIGINT",
sampleDataId:"Employees",
businessCaseId:"Store Large Numeric Values",
optimizationId:"BIGINT",
errorId:"BIGINT",
interviewId:"BIGINT",
interviewQuestions:["<b>Q:</b>When use BIGINT?<br><b>A:</b>For very large numbers.","<b>Q:</b>Difference from INT?<br><b>A:</b>BIGINT stores larger values."],
relatedTopics:["bigint","integer","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DECIMAL DATA TYPE
==================================*/

{
id:539,
category:"SQL Data Types",
subCategory:"DECIMAL",
difficulty:"Beginner",
title:"DECIMAL Data Type",
shortDescription:"DECIMAL stores exact numeric values with decimal places.",
syntax:`DECIMAL(precision,scale)`,
sql:`CREATE TABLE Employees
(
Salary DECIMAL(10,2)
);`,
keywordId:"DECIMAL",
sampleDataId:"Employees",
businessCaseId:"Store Financial Amounts",
optimizationId:"DECIMAL",
errorId:"DECIMAL",
interviewId:"DECIMAL",
interviewQuestions:["<b>Q:</b>Why use DECIMAL?<br><b>A:</b>For accurate financial calculations.","<b>Q:</b>Example?<br><b>A:</b>Salary, invoice amount."],
relatedTopics:["decimal","numeric","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FLOAT DATA TYPE
==================================*/

{
id:540,
category:"SQL Data Types",
subCategory:"FLOAT",
difficulty:"Beginner",
title:"FLOAT Data Type",
shortDescription:"FLOAT stores approximate decimal numbers.",
syntax:`FLOAT`,
sql:`CREATE TABLE Measurement
(
Value FLOAT
);`,
keywordId:"FLOAT",
sampleDataId:"Employees",
businessCaseId:"Scientific Calculations",
optimizationId:"FLOAT",
errorId:"FLOAT",
interviewId:"FLOAT",
interviewQuestions:["<b>Q:</b>What is FLOAT?<br><b>A:</b>Stores approximate decimal values.","<b>Q:</b>DECIMAL vs FLOAT?<br><b>A:</b>DECIMAL is exact, FLOAT is approximate."],
relatedTopics:["float","decimal","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 VARCHAR DATA TYPE
==================================*/

{
id:541,
category:"SQL Data Types",
subCategory:"VARCHAR",
difficulty:"Beginner",
title:"VARCHAR Data Type",
shortDescription:"VARCHAR stores variable-length text values.",
syntax:`VARCHAR(size)`,
sql:`CREATE TABLE Employees
(
EmployeeName VARCHAR(100)
);`,
keywordId:"VARCHAR",
sampleDataId:"Employees",
businessCaseId:"Store Names and Text Data",
optimizationId:"VARCHAR",
errorId:"VARCHAR",
interviewId:"VARCHAR",
interviewQuestions:["<b>Q:</b>What is VARCHAR?<br><b>A:</b>Variable length character data type.","<b>Q:</b>Example?<br><b>A:</b>Employee name, address."],
relatedTopics:["varchar","character datatype","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHAR DATA TYPE
==================================*/

{
id:542,
category:"SQL Data Types",
subCategory:"CHAR",
difficulty:"Beginner",
title:"CHAR Data Type",
shortDescription:"CHAR stores fixed-length character values.",
syntax:`CHAR(size)`,
sql:`CREATE TABLE EmployeeCode
(
Code CHAR(5)
);`,
keywordId:"CHAR",
sampleDataId:"Employees",
businessCaseId:"Store Fixed Length Codes",
optimizationId:"CHAR",
errorId:"CHAR",
interviewId:"CHAR",
interviewQuestions:["<b>Q:</b>Difference between CHAR and VARCHAR?<br><b>A:</b>CHAR fixed length, VARCHAR variable length.","<b>Q:</b>Example?<br><b>A:</b>Country code."],
relatedTopics:["char","varchar","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TEXT DATA TYPE
==================================*/

{
id:543,
category:"SQL Data Types",
subCategory:"TEXT",
difficulty:"Beginner",
title:"TEXT Data Type",
shortDescription:"TEXT stores large amounts of character data.",
syntax:`TEXT`,
sql:`CREATE TABLE Notes
(
Description TEXT
);`,
keywordId:"TEXT",
sampleDataId:"Employees",
businessCaseId:"Store Large Text Information",
optimizationId:"TEXT",
errorId:"TEXT",
interviewId:"TEXT",
interviewQuestions:["<b>Q:</b>What is TEXT datatype?<br><b>A:</b>Stores large text values.","<b>Q:</b>Alternative?<br><b>A:</b>VARCHAR(MAX) in SQL Server."],
relatedTopics:["text","varchar","large text","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATE DATA TYPE
==================================*/

{
id:544,
category:"SQL Data Types",
subCategory:"DATE",
difficulty:"Beginner",
title:"DATE Data Type",
shortDescription:"DATE stores calendar date values.",
syntax:`DATE`,
sql:`CREATE TABLE Employees
(
JoiningDate DATE
);`,
keywordId:"DATE",
sampleDataId:"Employees",
businessCaseId:"Store Joining Dates",
optimizationId:"DATE",
errorId:"DATE",
interviewId:"DATE",
interviewQuestions:["<b>Q:</b>What does DATE store?<br><b>A:</b>Date without time.","<b>Q:</b>Example?<br><b>A:</b>Joining date."],
relatedTopics:["date","datetime","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATETIME DATA TYPE
==================================*/

{
id:545,
category:"SQL Data Types",
subCategory:"DATETIME",
difficulty:"Beginner",
title:"DATETIME Data Type",
shortDescription:"DATETIME stores date and time values.",
syntax:`DATETIME`,
sql:`CREATE TABLE Transactions
(
CreatedDate DATETIME
);`,
keywordId:"DATETIME",
sampleDataId:"Employees",
businessCaseId:"Store Date and Time Records",
optimizationId:"DATETIME",
errorId:"DATETIME",
interviewId:"DATETIME",
interviewQuestions:["<b>Q:</b>Difference between DATE and DATETIME?<br><b>A:</b>DATE stores only date, DATETIME stores date and time.","<b>Q:</b>Example?<br><b>A:</b>Transaction timestamp."],
relatedTopics:["datetime","date","timestamp","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TIME DATA TYPE
==================================*/

{
id:546,
category:"SQL Data Types",
subCategory:"TIME",
difficulty:"Beginner",
title:"TIME Data Type",
shortDescription:"TIME stores only time values without date.",
syntax:`TIME`,
sql:`CREATE TABLE OfficeTiming
(
LoginTime TIME
);`,
keywordId:"TIME",
sampleDataId:"Employees",
businessCaseId:"Store Time Information",
optimizationId:"TIME",
errorId:"TIME",
interviewId:"TIME",
interviewQuestions:["<b>Q:</b>What does TIME store?<br><b>A:</b>Only time value.","<b>Q:</b>Example?<br><b>A:</b>Login time, shift timing."],
relatedTopics:["time datatype","date time","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TIMESTAMP DATA TYPE
==================================*/

{
id:547,
category:"SQL Data Types",
subCategory:"TIMESTAMP",
difficulty:"Intermediate",
title:"TIMESTAMP Data Type",
shortDescription:"TIMESTAMP stores automatic record version or time information.",
syntax:`TIMESTAMP`,
sql:`CREATE TABLE EmployeeLog
(
UpdatedTime TIMESTAMP
);`,
keywordId:"TIMESTAMP",
sampleDataId:"Employees",
businessCaseId:"Track Record Changes",
optimizationId:"TIMESTAMP",
errorId:"TIMESTAMP",
interviewId:"TIMESTAMP",
interviewQuestions:["<b>Q:</b>What is TIMESTAMP?<br><b>A:</b>Stores time-based record information.","<b>Q:</b>Common use?<br><b>A:</b>Audit tracking."],
relatedTopics:["timestamp","datetime","audit","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BOOLEAN DATA TYPE
==================================*/

{
id:548,
category:"SQL Data Types",
subCategory:"BOOLEAN",
difficulty:"Beginner",
title:"BOOLEAN Data Type",
shortDescription:"BOOLEAN stores TRUE or FALSE values.",
syntax:`BOOLEAN`,
sql:`CREATE TABLE Employees
(
IsActive BOOLEAN
);`,
keywordId:"BOOLEAN",
sampleDataId:"Employees",
businessCaseId:"Store Yes No Information",
optimizationId:"BOOLEAN",
errorId:"BOOLEAN",
interviewId:"BOOLEAN",
interviewQuestions:["<b>Q:</b>What does BOOLEAN store?<br><b>A:</b>True or False values.","<b>Q:</b>Example?<br><b>A:</b>Active employee status."],
relatedTopics:["boolean","bit","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BIT DATA TYPE
==================================*/

{
id:549,
category:"SQL Data Types",
subCategory:"BIT",
difficulty:"Beginner",
title:"BIT Data Type",
shortDescription:"BIT stores binary values like 0 and 1.",
syntax:`BIT`,
sql:`CREATE TABLE Employees
(
IsActive BIT
);`,
keywordId:"BIT",
sampleDataId:"Employees",
businessCaseId:"Store Flags and Status",
optimizationId:"BIT",
errorId:"BIT",
interviewId:"BIT",
interviewQuestions:["<b>Q:</b>What is BIT datatype?<br><b>A:</b>Stores 0 or 1 values.","<b>Q:</b>Example?<br><b>A:</b>Active/Inactive status."],
relatedTopics:["bit","boolean","flag column","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BINARY DATA TYPE
==================================*/

{
id:550,
category:"SQL Data Types",
subCategory:"BINARY",
difficulty:"Intermediate",
title:"BINARY Data Type",
shortDescription:"BINARY stores fixed-length binary data.",
syntax:`BINARY(size)`,
sql:`CREATE TABLE Files
(
FileCode BINARY(10)
);`,
keywordId:"BINARY",
sampleDataId:"Employees",
businessCaseId:"Store Binary Information",
optimizationId:"BINARY",
errorId:"BINARY",
interviewId:"BINARY",
interviewQuestions:["<b>Q:</b>What is BINARY datatype?<br><b>A:</b>Stores binary values.","<b>Q:</b>Example use?<br><b>A:</b>Binary identifiers."],
relatedTopics:["binary","varbinary","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 VARBINARY DATA TYPE
==================================*/

{
id:551,
category:"SQL Data Types",
subCategory:"VARBINARY",
difficulty:"Intermediate",
title:"VARBINARY Data Type",
shortDescription:"VARBINARY stores variable-length binary data.",
syntax:`VARBINARY(size)`,
sql:`CREATE TABLE Documents
(
FileData VARBINARY(MAX)
);`,
keywordId:"VARBINARY",
sampleDataId:"Employees",
businessCaseId:"Store Files and Images",
optimizationId:"VARBINARY",
errorId:"VARBINARY",
interviewId:"VARBINARY",
interviewQuestions:["<b>Q:</b>What is VARBINARY?<br><b>A:</b>Stores variable binary data.","<b>Q:</b>Example?<br><b>A:</b>Images, documents."],
relatedTopics:["varbinary","binary","blob","sql interview","sql examples","sql server","sql"]
},

/*==================================
 XML DATA TYPE
==================================*/

{
id:552,
category:"SQL Data Types",
subCategory:"XML",
difficulty:"Intermediate",
title:"XML Data Type",
shortDescription:"XML stores structured XML documents inside database.",
syntax:`XML`,
sql:`CREATE TABLE EmployeeDetails
(
Profile XML
);`,
keywordId:"XML",
sampleDataId:"Employees",
businessCaseId:"Store Structured Documents",
optimizationId:"XML",
errorId:"XML",
interviewId:"XML",
interviewQuestions:["<b>Q:</b>What is XML datatype?<br><b>A:</b>Stores XML formatted data.","<b>Q:</b>Where used?<br><b>A:</b>Document storage and exchange."],
relatedTopics:["xml","data type","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JSON DATA TYPE
==================================*/

{
id:553,
category:"SQL Data Types",
subCategory:"JSON",
difficulty:"Intermediate",
title:"JSON Data Type",
shortDescription:"JSON stores JavaScript Object Notation formatted data.",
syntax:`JSON`,
sql:`CREATE TABLE EmployeeInfo
(
Details JSON
);`,
keywordId:"JSON",
sampleDataId:"Employees",
businessCaseId:"Store Flexible Data Structures",
optimizationId:"JSON",
errorId:"JSON",
interviewId:"JSON",
interviewQuestions:["<b>Q:</b>What is JSON datatype?<br><b>A:</b>Stores JSON formatted information.","<b>Q:</b>Benefit?<br><b>A:</b>Flexible schema storage."],
relatedTopics:["json","xml","nosql","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL DATE FUNCTIONS
==================================*/

{
id:554,
category:"SQL Date Functions",
subCategory:"GETDATE",
difficulty:"Beginner",
title:"GETDATE Function",
shortDescription:"GETDATE returns current date and time.",
syntax:`GETDATE()`,
sql:`SELECT
GETDATE()
AS CurrentDateTime;`,
keywordId:"GETDATE",
sampleDataId:"Employees",
businessCaseId:"Capture Current Timestamp",
optimizationId:"GETDATE",
errorId:"GETDATE",
interviewId:"GETDATE",
interviewQuestions:["<b>Q:</b>What does GETDATE return?<br><b>A:</b>Current system date and time.","<b>Q:</b>Where used?<br><b>A:</b>Audit columns."],
relatedTopics:["getdate","date function","datetime","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CURRENT_DATE
==================================*/

{
id:555,
category:"SQL Date Functions",
subCategory:"CURRENT_DATE",
difficulty:"Beginner",
title:"CURRENT_DATE Function",
shortDescription:"CURRENT_DATE returns current date only.",
syntax:`CURRENT_DATE`,
sql:`SELECT
CURRENT_DATE
AS TodayDate;`,
keywordId:"CURRENT_DATE",
sampleDataId:"Employees",
businessCaseId:"Date Based Reporting",
optimizationId:"CURRENT_DATE",
errorId:"CURRENT_DATE",
interviewId:"CURRENT_DATE",
interviewQuestions:["<b>Q:</b>What does CURRENT_DATE return?<br><b>A:</b>Today's date.","<b>Q:</b>Difference from GETDATE?<br><b>A:</b>GETDATE includes time."],
relatedTopics:["current date","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEADD FUNCTION
==================================*/

{
id:556,
category:"SQL Date Functions",
subCategory:"DATEADD",
difficulty:"Intermediate",
title:"DATEADD Function",
shortDescription:"DATEADD adds a specific time interval to a date value.",
syntax:`DATEADD(interval, number, date)`,
sql:`SELECT
DATEADD(YEAR,1,'2026-01-01')
AS NextYear;`,
keywordId:"DATEADD",
sampleDataId:"Employees",
businessCaseId:"Calculate Future Dates",
optimizationId:"DATEADD",
errorId:"DATEADD",
interviewId:"DATEADD",
interviewQuestions:["<b>Q:</b>What does DATEADD do?<br><b>A:</b>Adds time period to date.","<b>Q:</b>Example use?<br><b>A:</b>Calculate expiry date."],
relatedTopics:["dateadd","date function","datetime","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEDIFF FUNCTION
==================================*/

{
id:557,
category:"SQL Date Functions",
subCategory:"DATEDIFF",
difficulty:"Intermediate",
title:"DATEDIFF Function",
shortDescription:"DATEDIFF calculates difference between two dates.",
syntax:`DATEDIFF(interval,startdate,enddate)`,
sql:`SELECT
DATEDIFF(YEAR,
'2020-01-01',
'2026-01-01')
AS YearsDifference;`,
keywordId:"DATEDIFF",
sampleDataId:"Employees",
businessCaseId:"Calculate Duration",
optimizationId:"DATEDIFF",
errorId:"DATEDIFF",
interviewId:"DATEDIFF",
interviewQuestions:["<b>Q:</b>What does DATEDIFF do?<br><b>A:</b>Returns difference between dates.","<b>Q:</b>Where used?<br><b>A:</b>Age, tenure and SLA calculation."],
relatedTopics:["datediff","date difference","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEPART FUNCTION
==================================*/

{
id:558,
category:"SQL Date Functions",
subCategory:"DATEPART",
difficulty:"Intermediate",
title:"DATEPART Function",
shortDescription:"DATEPART extracts a specific part from a date.",
syntax:`DATEPART(part,date)`,
sql:`SELECT
DATEPART(YEAR,'2026-08-03')
AS YearValue;`,
keywordId:"DATEPART",
sampleDataId:"Employees",
businessCaseId:"Extract Date Components",
optimizationId:"DATEPART",
errorId:"DATEPART",
interviewId:"DATEPART",
interviewQuestions:["<b>Q:</b>What does DATEPART return?<br><b>A:</b>Specific date component.","<b>Q:</b>Example?<br><b>A:</b>Year, month, day."],
relatedTopics:["datepart","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 YEAR FUNCTION
==================================*/

{
id:559,
category:"SQL Date Functions",
subCategory:"YEAR",
difficulty:"Beginner",
title:"YEAR Function",
shortDescription:"YEAR extracts year value from a date.",
syntax:`YEAR(date)`,
sql:`SELECT
YEAR(JoiningDate)
AS JoiningYear
FROM Employees;`,
keywordId:"YEAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Year Wise Analysis",
optimizationId:"YEAR_FUNCTION",
errorId:"YEAR_FUNCTION",
interviewId:"YEAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does YEAR function do?<br><b>A:</b>Returns year from date.","<b>Q:</b>Example use?<br><b>A:</b>Employee joining year."],
relatedTopics:["year function","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MONTH FUNCTION
==================================*/

{
id:560,
category:"SQL Date Functions",
subCategory:"MONTH",
difficulty:"Beginner",
title:"MONTH Function",
shortDescription:"MONTH extracts month value from a date.",
syntax:`MONTH(date)`,
sql:`SELECT
MONTH(JoiningDate)
AS JoiningMonth
FROM Employees;`,
keywordId:"MONTH_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Monthly Reporting",
optimizationId:"MONTH_FUNCTION",
errorId:"MONTH_FUNCTION",
interviewId:"MONTH_FUNCTION",
interviewQuestions:["<b>Q:</b>What does MONTH return?<br><b>A:</b>Month number from date.","<b>Q:</b>Where used?<br><b>A:</b>Monthly analysis."],
relatedTopics:["month function","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DAY FUNCTION
==================================*/

{
id:561,
category:"SQL Date Functions",
subCategory:"DAY",
difficulty:"Beginner",
title:"DAY Function",
shortDescription:"DAY extracts day number from a date value.",
syntax:`DAY(date)`,
sql:`SELECT
DAY(JoiningDate)
AS JoiningDay
FROM Employees;`,
keywordId:"DAY_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Daily Analysis",
optimizationId:"DAY_FUNCTION",
errorId:"DAY_FUNCTION",
interviewId:"DAY_FUNCTION",
interviewQuestions:["<b>Q:</b>What does DAY function return?<br><b>A:</b>Day number from date.","<b>Q:</b>Example use?<br><b>A:</b>Daily transaction analysis."],
relatedTopics:["day function","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EOMONTH FUNCTION
==================================*/

{
id:562,
category:"SQL Date Functions",
subCategory:"EOMONTH",
difficulty:"Intermediate",
title:"EOMONTH Function",
shortDescription:"EOMONTH returns the last day of a month.",
syntax:`EOMONTH(date)`,
sql:`SELECT
EOMONTH('2026-08-03')
AS MonthEndDate;`,
keywordId:"EOMONTH",
sampleDataId:"Employees",
businessCaseId:"Month End Reporting",
optimizationId:"EOMONTH",
errorId:"EOMONTH",
interviewId:"EOMONTH",
interviewQuestions:["<b>Q:</b>What does EOMONTH return?<br><b>A:</b>Last date of month.","<b>Q:</b>Where used?<br><b>A:</b>Financial month closing."],
relatedTopics:["eomonth","date function","month end","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FORMAT DATE
==================================*/

{
id:563,
category:"SQL Date Functions",
subCategory:"FORMAT",
difficulty:"Intermediate",
title:"FORMAT Date Function",
shortDescription:"FORMAT converts date values into required display format.",
syntax:`FORMAT(date,format)`,
sql:`SELECT
FORMAT(GETDATE(),'dd-MM-yyyy')
AS FormattedDate;`,
keywordId:"FORMAT_DATE",
sampleDataId:"Employees",
businessCaseId:"Display Custom Dates",
optimizationId:"FORMAT_DATE",
errorId:"FORMAT_DATE",
interviewId:"FORMAT_DATE",
interviewQuestions:["<b>Q:</b>What does FORMAT do?<br><b>A:</b>Changes display format.","<b>Q:</b>Example?<br><b>A:</b>dd-MM-yyyy format."],
relatedTopics:["format date","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ISDATE FUNCTION
==================================*/

{
id:564,
category:"SQL Date Functions",
subCategory:"ISDATE",
difficulty:"Intermediate",
title:"ISDATE Function",
shortDescription:"ISDATE checks whether a value is a valid date.",
syntax:`ISDATE(expression)`,
sql:`SELECT
ISDATE('2026-08-03')
AS ValidDate;`,
keywordId:"ISDATE",
sampleDataId:"Employees",
businessCaseId:"Validate Date Inputs",
optimizationId:"ISDATE",
errorId:"ISDATE",
interviewId:"ISDATE",
interviewQuestions:["<b>Q:</b>What does ISDATE return?<br><b>A:</b>Checks valid date format.","<b>Q:</b>Output?<br><b>A:</b>1 for valid, 0 for invalid."],
relatedTopics:["isdate","date validation","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEFROMPARTS
==================================*/

{
id:565,
category:"SQL Date Functions",
subCategory:"DATEFROMPARTS",
difficulty:"Advanced",
title:"DATEFROMPARTS Function",
shortDescription:"DATEFROMPARTS creates a date from year, month and day values.",
syntax:`DATEFROMPARTS(year,month,day)`,
sql:`SELECT
DATEFROMPARTS(2026,8,3)
AS CreatedDate;`,
keywordId:"DATEFROMPARTS",
sampleDataId:"Employees",
businessCaseId:"Generate Dynamic Dates",
optimizationId:"DATEFROMPARTS",
errorId:"DATEFROMPARTS",
interviewId:"DATEFROMPARTS",
interviewQuestions:["<b>Q:</b>What does DATEFROMPARTS do?<br><b>A:</b>Creates date from components.","<b>Q:</b>Parameters?<br><b>A:</b>Year, month and day."],
relatedTopics:["datefromparts","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL STRING FUNCTIONS
==================================*/

{
id:566,
category:"SQL String Functions",
subCategory:"String Function",
difficulty:"Beginner",
title:"SQL String Functions",
shortDescription:"String functions manipulate and process text values.",
syntax:`FUNCTION(column_name)`,
sql:`SELECT
UPPER(EmployeeName)
FROM Employees;`,
keywordId:"STRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Text Data Processing",
optimizationId:"STRING_FUNCTION",
errorId:"STRING_FUNCTION",
interviewId:"STRING_FUNCTION",
interviewQuestions:["<b>Q:</b>What are String Functions?<br><b>A:</b>Functions used to modify text data.","<b>Q:</b>Example?<br><b>A:</b>UPPER, LOWER, CONCAT."],
relatedTopics:["string function","text function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEN FUNCTION
==================================*/

{
id:567,
category:"SQL String Functions",
subCategory:"LEN",
difficulty:"Beginner",
title:"LEN Function",
shortDescription:"LEN returns the number of characters in a string.",
syntax:`LEN(string)`,
sql:`SELECT
LEN(EmployeeName)
AS NameLength
FROM Employees;`,
keywordId:"LEN",
sampleDataId:"Employees",
businessCaseId:"Count Text Characters",
optimizationId:"LEN",
errorId:"LEN",
interviewId:"LEN",
interviewQuestions:["<b>Q:</b>What does LEN do?<br><b>A:</b>Counts characters in text.","<b>Q:</b>Does LEN count spaces?<br><b>A:</b>Depends on database behavior."],
relatedTopics:["len","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LOWER FUNCTION
==================================*/

{
id:568,
category:"SQL String Functions",
subCategory:"LOWER",
difficulty:"Beginner",
title:"LOWER Function",
shortDescription:"LOWER converts text into lowercase characters.",
syntax:`LOWER(string)`,
sql:`SELECT
LOWER(EmployeeName)
AS LowerName
FROM Employees;`,
keywordId:"LOWER",
sampleDataId:"Employees",
businessCaseId:"Standardize Text Format",
optimizationId:"LOWER",
errorId:"LOWER",
interviewId:"LOWER",
interviewQuestions:["<b>Q:</b>What does LOWER do?<br><b>A:</b>Converts text to lowercase.","<b>Q:</b>Why use it?<br><b>A:</b>Text comparison."],
relatedTopics:["lower","upper","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UPPER FUNCTION
==================================*/

{
id:569,
category:"SQL String Functions",
subCategory:"UPPER",
difficulty:"Beginner",
title:"UPPER Function",
shortDescription:"UPPER converts text into uppercase characters.",
syntax:`UPPER(string)`,
sql:`SELECT
UPPER(EmployeeName)
AS UpperName
FROM Employees;`,
keywordId:"UPPER",
sampleDataId:"Employees",
businessCaseId:"Create Standard Reports",
optimizationId:"UPPER",
errorId:"UPPER",
interviewId:"UPPER",
interviewQuestions:["<b>Q:</b>What does UPPER do?<br><b>A:</b>Converts text to uppercase.","<b>Q:</b>Example use?<br><b>A:</b>Display names in capital letters."],
relatedTopics:["upper","lower","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONCAT FUNCTION
==================================*/

{
id:570,
category:"SQL String Functions",
subCategory:"CONCAT",
difficulty:"Beginner",
title:"CONCAT Function",
shortDescription:"CONCAT joins multiple strings together.",
syntax:`CONCAT(string1,string2,...)`,
sql:`SELECT
CONCAT(EmployeeName,' - ',Department)
AS EmployeeDetails
FROM Employees;`,
keywordId:"CONCAT",
sampleDataId:"Employees",
businessCaseId:"Combine Text Fields",
optimizationId:"CONCAT",
errorId:"CONCAT",
interviewId:"CONCAT",
interviewQuestions:["<b>Q:</b>What does CONCAT do?<br><b>A:</b>Combines multiple text values.","<b>Q:</b>Alternative?<br><b>A:</b>String concatenation operator."],
relatedTopics:["concat","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBSTRING FUNCTION
==================================*/

{
id:571,
category:"SQL String Functions",
subCategory:"SUBSTRING",
difficulty:"Intermediate",
title:"SUBSTRING Function",
shortDescription:"SUBSTRING extracts a part of a string.",
syntax:`SUBSTRING(string,start,length)`,
sql:`SELECT
SUBSTRING(EmployeeName,1,5)
AS ShortName
FROM Employees;`,
keywordId:"SUBSTRING",
sampleDataId:"Employees",
businessCaseId:"Extract Text Portions",
optimizationId:"SUBSTRING",
errorId:"SUBSTRING",
interviewId:"SUBSTRING",
interviewQuestions:["<b>Q:</b>What does SUBSTRING do?<br><b>A:</b>Returns part of a string.","<b>Q:</b>Example?<br><b>A:</b>Extract first five characters."],
relatedTopics:["substring","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT FUNCTION
==================================*/

{
id:572,
category:"SQL String Functions",
subCategory:"LEFT",
difficulty:"Beginner",
title:"LEFT Function",
shortDescription:"LEFT returns characters from the beginning of a string.",
syntax:`LEFT(string,number_of_characters)`,
sql:`SELECT
LEFT(EmployeeName,3)
AS FirstCharacters
FROM Employees;`,
keywordId:"LEFT",
sampleDataId:"Employees",
businessCaseId:"Extract Starting Text",
optimizationId:"LEFT",
errorId:"LEFT",
interviewId:"LEFT",
interviewQuestions:["<b>Q:</b>What does LEFT do?<br><b>A:</b>Returns characters from left side.","<b>Q:</b>Example?<br><b>A:</b>Extract initials."],
relatedTopics:["left function","substring","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT FUNCTION
==================================*/

{
id:573,
category:"SQL String Functions",
subCategory:"RIGHT",
difficulty:"Beginner",
title:"RIGHT Function",
shortDescription:"RIGHT returns characters from the end of a string.",
syntax:`RIGHT(string,number_of_characters)`,
sql:`SELECT
RIGHT(EmployeeName,3)
AS LastCharacters
FROM Employees;`,
keywordId:"RIGHT",
sampleDataId:"Employees",
businessCaseId:"Extract Ending Text",
optimizationId:"RIGHT",
errorId:"RIGHT",
interviewId:"RIGHT",
interviewQuestions:["<b>Q:</b>What does RIGHT do?<br><b>A:</b>Returns characters from right side.","<b>Q:</b>Example?<br><b>A:</b>Extract last digits."],
relatedTopics:["right function","substring","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRIM FUNCTION
==================================*/

{
id:574,
category:"SQL String Functions",
subCategory:"TRIM",
difficulty:"Intermediate",
title:"TRIM Function",
shortDescription:"TRIM removes extra spaces from beginning and end of text.",
syntax:`TRIM(string)`,
sql:`SELECT
TRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"TRIM",
sampleDataId:"Employees",
businessCaseId:"Clean Text Data",
optimizationId:"TRIM",
errorId:"TRIM",
interviewId:"TRIM",
interviewQuestions:["<b>Q:</b>What does TRIM do?<br><b>A:</b>Removes unwanted spaces.","<b>Q:</b>Why use TRIM?<br><b>A:</b>Data cleaning."],
relatedTopics:["trim","clean data","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LTRIM FUNCTION
==================================*/

{
id:575,
category:"SQL String Functions",
subCategory:"LTRIM",
difficulty:"Beginner",
title:"LTRIM Function",
shortDescription:"LTRIM removes spaces from the left side of a string.",
syntax:`LTRIM(string)`,
sql:`SELECT
LTRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"LTRIM",
sampleDataId:"Employees",
businessCaseId:"Remove Leading Spaces",
optimizationId:"LTRIM",
errorId:"LTRIM",
interviewId:"LTRIM",
interviewQuestions:["<b>Q:</b>What does LTRIM remove?<br><b>A:</b>Leading spaces.","<b>Q:</b>Difference from TRIM?<br><b>A:</b>TRIM removes both sides."],
relatedTopics:["ltrim","trim","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RTRIM FUNCTION
==================================*/

{
id:576,
category:"SQL String Functions",
subCategory:"RTRIM",
difficulty:"Beginner",
title:"RTRIM Function",
shortDescription:"RTRIM removes spaces from the right side of a string.",
syntax:`RTRIM(string)`,
sql:`SELECT
RTRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"RTRIM",
sampleDataId:"Employees",
businessCaseId:"Remove Trailing Spaces",
optimizationId:"RTRIM",
errorId:"RTRIM",
interviewId:"RTRIM",
interviewQuestions:["<b>Q:</b>What does RTRIM remove?<br><b>A:</b>Spaces from right side.","<b>Q:</b>Why use it?<br><b>A:</b>Clean text before reporting."],
relatedTopics:["rtrim","trim","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REPLACE FUNCTION
==================================*/

{
id:577,
category:"SQL String Functions",
subCategory:"REPLACE",
difficulty:"Intermediate",
title:"REPLACE Function",
shortDescription:"REPLACE substitutes existing text with new text.",
syntax:`REPLACE(string,old,new)`,
sql:`SELECT
REPLACE(EmployeeName,'Rahul','R.')
AS UpdatedName
FROM Employees;`,
keywordId:"REPLACE",
sampleDataId:"Employees",
businessCaseId:"Modify Text Values",
optimizationId:"REPLACE",
errorId:"REPLACE",
interviewId:"REPLACE",
interviewQuestions:["<b>Q:</b>What does REPLACE do?<br><b>A:</b>Replaces matching text.","<b>Q:</b>Example?<br><b>A:</b>Update abbreviations."],
relatedTopics:["replace","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHARINDEX FUNCTION
==================================*/

{
id:578,
category:"SQL String Functions",
subCategory:"CHARINDEX",
difficulty:"Intermediate",
title:"CHARINDEX Function",
shortDescription:"CHARINDEX finds the position of a character or text inside a string.",
syntax:`CHARINDEX(search,string)`,
sql:`SELECT
CHARINDEX('IT',Department)
AS Position
FROM Employees;`,
keywordId:"CHARINDEX",
sampleDataId:"Employees",
businessCaseId:"Search Text Position",
optimizationId:"CHARINDEX",
errorId:"CHARINDEX",
interviewId:"CHARINDEX",
interviewQuestions:["<b>Q:</b>What does CHARINDEX return?<br><b>A:</b>Position of searched text.","<b>Q:</b>Example?<br><b>A:</b>Find keyword location."],
relatedTopics:["charindex","search string","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STUFF FUNCTION
==================================*/

{
id:579,
category:"SQL String Functions",
subCategory:"STUFF",
difficulty:"Advanced",
title:"STUFF Function",
shortDescription:"STUFF inserts new characters into a string and removes existing characters.",
syntax:`STUFF(string,start,length,new_string)`,
sql:`SELECT
STUFF('Database',1,4,'SQL')
AS UpdatedText;`,
keywordId:"STUFF",
sampleDataId:"Employees",
businessCaseId:"Advanced Text Modification",
optimizationId:"STUFF",
errorId:"STUFF",
interviewId:"STUFF",
interviewQuestions:["<b>Q:</b>What does STUFF do?<br><b>A:</b>Deletes and inserts characters.","<b>Q:</b>Use case?<br><b>A:</b>Text transformation."],
relatedTopics:["stuff","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REVERSE FUNCTION
==================================*/

{
id:580,
category:"SQL String Functions",
subCategory:"REVERSE",
difficulty:"Beginner",
title:"REVERSE Function",
shortDescription:"REVERSE returns characters in reverse order.",
syntax:`REVERSE(string)`,
sql:`SELECT
REVERSE(EmployeeName)
AS ReverseName
FROM Employees;`,
keywordId:"REVERSE",
sampleDataId:"Employees",
businessCaseId:"Reverse Text Values",
optimizationId:"REVERSE",
errorId:"REVERSE",
interviewId:"REVERSE",
interviewQuestions:["<b>Q:</b>What does REVERSE do?<br><b>A:</b>Reverses string characters.","<b>Q:</b>Example?<br><b>A:</b>String manipulation."],
relatedTopics:["reverse","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REPLICATE FUNCTION
==================================*/

{
id:581,
category:"SQL String Functions",
subCategory:"REPLICATE",
difficulty:"Intermediate",
title:"REPLICATE Function",
shortDescription:"REPLICATE repeats a string value specified number of times.",
syntax:`REPLICATE(string,number)`,
sql:`SELECT
REPLICATE('*',5)
AS MaskValue;`,
keywordId:"REPLICATE",
sampleDataId:"Employees",
businessCaseId:"Mask Sensitive Information",
optimizationId:"REPLICATE",
errorId:"REPLICATE",
interviewId:"REPLICATE",
interviewQuestions:["<b>Q:</b>What does REPLICATE do?<br><b>A:</b>Repeats text multiple times.","<b>Q:</b>Example?<br><b>A:</b>Masking account numbers."],
relatedTopics:["replicate","string function","masking","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SPACE FUNCTION
==================================*/

{
id:582,
category:"SQL String Functions",
subCategory:"SPACE",
difficulty:"Beginner",
title:"SPACE Function",
shortDescription:"SPACE creates a specified number of blank spaces.",
syntax:`SPACE(number)`,
sql:`SELECT
'SQL'+SPACE(5)+'Server'
AS TextValue;`,
keywordId:"SPACE",
sampleDataId:"Employees",
businessCaseId:"Format Text Output",
optimizationId:"SPACE",
errorId:"SPACE",
interviewId:"SPACE",
interviewQuestions:["<b>Q:</b>What does SPACE do?<br><b>A:</b>Creates blank spaces.","<b>Q:</b>Where used?<br><b>A:</b>Text formatting."],
relatedTopics:["space function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ASCII FUNCTION
==================================*/

{
id:583,
category:"SQL String Functions",
subCategory:"ASCII",
difficulty:"Intermediate",
title:"ASCII Function",
shortDescription:"ASCII returns numeric ASCII code of a character.",
syntax:`ASCII(character)`,
sql:`SELECT
ASCII('A')
AS ASCIIValue;`,
keywordId:"ASCII",
sampleDataId:"Employees",
businessCaseId:"Character Encoding Analysis",
optimizationId:"ASCII",
errorId:"ASCII",
interviewId:"ASCII",
interviewQuestions:["<b>Q:</b>What does ASCII return?<br><b>A:</b>Character code value.","<b>Q:</b>Example?<br><b>A:</b>ASCII('A') returns 65."],
relatedTopics:["ascii","character function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHAR FUNCTION
==================================*/

{
id:584,
category:"SQL String Functions",
subCategory:"CHAR",
difficulty:"Intermediate",
title:"CHAR Function",
shortDescription:"CHAR converts ASCII code into a character.",
syntax:`CHAR(number)`,
sql:`SELECT
CHAR(65)
AS CharacterValue;`,
keywordId:"CHAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Convert Codes To Characters",
optimizationId:"CHAR_FUNCTION",
errorId:"CHAR_FUNCTION",
interviewId:"CHAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does CHAR do?<br><b>A:</b>Returns character from ASCII code.","<b>Q:</b>Example?<br><b>A:</b>CHAR(65) returns A."],
relatedTopics:["char function","ascii","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNICODE FUNCTION
==================================*/

{
id:585,
category:"SQL String Functions",
subCategory:"UNICODE",
difficulty:"Advanced",
title:"UNICODE Function",
shortDescription:"UNICODE returns Unicode number of a character.",
syntax:`UNICODE(character)`,
sql:`SELECT
UNICODE('A')
AS UnicodeValue;`,
keywordId:"UNICODE",
sampleDataId:"Employees",
businessCaseId:"Support Multiple Languages",
optimizationId:"UNICODE",
errorId:"UNICODE",
interviewId:"UNICODE",
interviewQuestions:["<b>Q:</b>What does UNICODE return?<br><b>A:</b>Unicode numeric value.","<b>Q:</b>Why use Unicode?<br><b>A:</b>Store multilingual data."],
relatedTopics:["unicode","char","ascii","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL MATHEMATICAL FUNCTIONS
==================================*/

{
id:586,
category:"SQL Mathematical Functions",
subCategory:"Math Function",
difficulty:"Beginner",
title:"SQL Mathematical Functions",
shortDescription:"Mathematical functions perform numeric calculations on data.",
syntax:`FUNCTION(number)`,
sql:`SELECT
ABS(-100)
AS PositiveValue;`,
keywordId:"MATH_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Numeric Data Analysis",
optimizationId:"MATH_FUNCTION",
errorId:"MATH_FUNCTION",
interviewId:"MATH_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Mathematical Functions?<br><b>A:</b>Functions used for numeric calculations.","<b>Q:</b>Example?<br><b>A:</b>ABS, ROUND, CEILING."],
relatedTopics:["math function","numeric function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ABS FUNCTION
==================================*/

{
id:587,
category:"SQL Mathematical Functions",
subCategory:"ABS",
difficulty:"Beginner",
title:"ABS Function",
shortDescription:"ABS returns the absolute positive value of a number.",
syntax:`ABS(number)`,
sql:`SELECT
ABS(-500)
AS PositiveValue;`,
keywordId:"ABS",
sampleDataId:"Employees",
businessCaseId:"Calculate Positive Difference",
optimizationId:"ABS",
errorId:"ABS",
interviewId:"ABS",
interviewQuestions:["<b>Q:</b>What does ABS do?<br><b>A:</b>Returns positive value.","<b>Q:</b>Example?<br><b>A:</b>Remove negative sign."],
relatedTopics:["abs","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ROUND FUNCTION
==================================*/

{
id:588,
category:"SQL Mathematical Functions",
subCategory:"ROUND",
difficulty:"Beginner",
title:"ROUND Function",
shortDescription:"ROUND rounds a number to specified decimal places.",
syntax:`ROUND(number,decimal_places)`,
sql:`SELECT
ROUND(125.567,2)
AS RoundedValue;`,
keywordId:"ROUND",
sampleDataId:"Employees",
businessCaseId:"Financial Reporting",
optimizationId:"ROUND",
errorId:"ROUND",
interviewId:"ROUND",
interviewQuestions:["<b>Q:</b>What does ROUND do?<br><b>A:</b>Rounds numeric values.","<b>Q:</b>Example?<br><b>A:</b>Currency formatting."],
relatedTopics:["round","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CEILING FUNCTION
==================================*/

{
id:589,
category:"SQL Mathematical Functions",
subCategory:"CEILING",
difficulty:"Beginner",
title:"CEILING Function",
shortDescription:"CEILING returns the smallest integer greater than or equal to a number.",
syntax:`CEILING(number)`,
sql:`SELECT
CEILING(10.25)
AS Value;`,
keywordId:"CEILING",
sampleDataId:"Employees",
businessCaseId:"Round Up Calculations",
optimizationId:"CEILING",
errorId:"CEILING",
interviewId:"CEILING",
interviewQuestions:["<b>Q:</b>What does CEILING do?<br><b>A:</b>Rounds value upward.","<b>Q:</b>Example?<br><b>A:</b>10.25 becomes 11."],
relatedTopics:["ceiling","round","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FLOOR FUNCTION
==================================*/

{
id:590,
category:"SQL Mathematical Functions",
subCategory:"FLOOR",
difficulty:"Beginner",
title:"FLOOR Function",
shortDescription:"FLOOR returns the largest integer less than or equal to a number.",
syntax:`FLOOR(number)`,
sql:`SELECT
FLOOR(10.99)
AS Value;`,
keywordId:"FLOOR",
sampleDataId:"Employees",
businessCaseId:"Round Down Calculations",
optimizationId:"FLOOR",
errorId:"FLOOR",
interviewId:"FLOOR",
interviewQuestions:["<b>Q:</b>What does FLOOR do?<br><b>A:</b>Rounds value downward.","<b>Q:</b>Example?<br><b>A:</b>10.99 becomes 10."],
relatedTopics:["floor","round","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 POWER FUNCTION
==================================*/

{
id:591,
category:"SQL Mathematical Functions",
subCategory:"POWER",
difficulty:"Intermediate",
title:"POWER Function",
shortDescription:"POWER returns a number raised to a specified exponent.",
syntax:`POWER(number,exponent)`,
sql:`SELECT
POWER(2,3)
AS Result;`,
keywordId:"POWER",
sampleDataId:"Employees",
businessCaseId:"Calculate Growth Values",
optimizationId:"POWER",
errorId:"POWER",
interviewId:"POWER",
interviewQuestions:["<b>Q:</b>What does POWER do?<br><b>A:</b>Returns exponential value.","<b>Q:</b>Example?<br><b>A:</b>2³ = 8."],
relatedTopics:["power","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQRT FUNCTION
==================================*/

{
id:592,
category:"SQL Mathematical Functions",
subCategory:"SQRT",
difficulty:"Intermediate",
title:"SQRT Function",
shortDescription:"SQRT returns the square root of a number.",
syntax:`SQRT(number)`,
sql:`SELECT
SQRT(25)
AS SquareRoot;`,
keywordId:"SQRT",
sampleDataId:"Employees",
businessCaseId:"Mathematical Calculations",
optimizationId:"SQRT",
errorId:"SQRT",
interviewId:"SQRT",
interviewQuestions:["<b>Q:</b>What does SQRT return?<br><b>A:</b>Square root value.","<b>Q:</b>Example?<br><b>A:</b>SQRT(25)=5."],
relatedTopics:["sqrt","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQUARE FUNCTION
==================================*/

{
id:593,
category:"SQL Mathematical Functions",
subCategory:"SQUARE",
difficulty:"Intermediate",
title:"SQUARE Calculation",
shortDescription:"Calculates the square of a numeric value.",
syntax:`POWER(number,2)`,
sql:`SELECT
POWER(10,2)
AS SquareValue;`,
keywordId:"SQUARE",
sampleDataId:"Employees",
businessCaseId:"Statistical Calculations",
optimizationId:"SQUARE",
errorId:"SQUARE",
interviewId:"SQUARE",
interviewQuestions:["<b>Q:</b>How calculate square in SQL?<br><b>A:</b>Using POWER function.","<b>Q:</b>Example?<br><b>A:</b>10² = 100."],
relatedTopics:["square","power","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RAND FUNCTION
==================================*/

{
id:594,
category:"SQL Mathematical Functions",
subCategory:"RAND",
difficulty:"Intermediate",
title:"RAND Function",
shortDescription:"RAND generates a random floating-point number.",
syntax:`RAND()`,
sql:`SELECT
RAND()
AS RandomNumber;`,
keywordId:"RAND",
sampleDataId:"Employees",
businessCaseId:"Generate Random Values",
optimizationId:"RAND",
errorId:"RAND",
interviewId:"RAND",
interviewQuestions:["<b>Q:</b>What does RAND do?<br><b>A:</b>Generates random number.","<b>Q:</b>Where used?<br><b>A:</b>Testing and sampling."],
relatedTopics:["rand","random number","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SIGN FUNCTION
==================================*/

{
id:595,
category:"SQL Mathematical Functions",
subCategory:"SIGN",
difficulty:"Intermediate",
title:"SIGN Function",
shortDescription:"SIGN returns positive, negative or zero indicator.",
syntax:`SIGN(number)`,
sql:`SELECT
SIGN(-25)
AS SignValue;`,
keywordId:"SIGN",
sampleDataId:"Employees",
businessCaseId:"Check Number Direction",
optimizationId:"SIGN",
errorId:"SIGN",
interviewId:"SIGN",
interviewQuestions:["<b>Q:</b>What does SIGN return?<br><b>A:</b>-1, 0 or 1.","<b>Q:</b>Example?<br><b>A:</b>Identify negative values."],
relatedTopics:["sign","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL AGGREGATE FUNCTIONS
==================================*/

{
id:596,
category:"SQL Aggregate Functions",
subCategory:"Aggregate Function",
difficulty:"Beginner",
title:"SQL Aggregate Functions",
shortDescription:"Aggregate functions perform calculations on multiple rows and return a single value.",
syntax:`FUNCTION(column_name)
FROM table_name;`,
sql:`SELECT
AVG(Salary)
AS AverageSalary
FROM Employees;`,
keywordId:"AGGREGATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Business Data Summaries",
optimizationId:"AGGREGATE_FUNCTION",
errorId:"AGGREGATE_FUNCTION",
interviewId:"AGGREGATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Aggregate Functions?<br><b>A:</b>Functions that calculate values from multiple rows.","<b>Q:</b>Examples?<br><b>A:</b>SUM, AVG, COUNT, MAX, MIN."],
relatedTopics:["aggregate function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COUNT FUNCTION
==================================*/

{
id:597,
category:"SQL Aggregate Functions",
subCategory:"COUNT",
difficulty:"Beginner",
title:"COUNT Function",
shortDescription:"COUNT returns the number of rows or non-null values.",
syntax:`COUNT(column_name)`,
sql:`SELECT
COUNT(EmployeeID)
AS TotalEmployees
FROM Employees;`,
keywordId:"COUNT",
sampleDataId:"Employees",
businessCaseId:"Count Records",
optimizationId:"COUNT",
errorId:"COUNT",
interviewId:"COUNT",
interviewQuestions:["<b>Q:</b>What does COUNT do?<br><b>A:</b>Counts rows.","<b>Q:</b>Difference COUNT(*) and COUNT(column)?<br><b>A:</b>COUNT(*) counts all rows."],
relatedTopics:["count","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUM FUNCTION
==================================*/

{
id:598,
category:"SQL Aggregate Functions",
subCategory:"SUM",
difficulty:"Beginner",
title:"SUM Function",
shortDescription:"SUM calculates the total of numeric values.",
syntax:`SUM(column_name)`,
sql:`SELECT
SUM(Salary)
AS TotalSalary
FROM Employees;`,
keywordId:"SUM",
sampleDataId:"Employees",
businessCaseId:"Calculate Total Amount",
optimizationId:"SUM",
errorId:"SUM",
interviewId:"SUM",
interviewQuestions:["<b>Q:</b>What does SUM do?<br><b>A:</b>Adds numeric values.","<b>Q:</b>Example?<br><b>A:</b>Total salary calculation."],
relatedTopics:["sum","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AVG FUNCTION
==================================*/

{
id:599,
category:"SQL Aggregate Functions",
subCategory:"AVG",
difficulty:"Beginner",
title:"AVG Function",
shortDescription:"AVG calculates the average value of numeric data.",
syntax:`AVG(column_name)`,
sql:`SELECT
AVG(Salary)
AS AverageSalary
FROM Employees;`,
keywordId:"AVG",
sampleDataId:"Employees",
businessCaseId:"Calculate Average Performance",
optimizationId:"AVG",
errorId:"AVG",
interviewId:"AVG",
interviewQuestions:["<b>Q:</b>What does AVG do?<br><b>A:</b>Returns average value.","<b>Q:</b>Example?<br><b>A:</b>Average employee salary."],
relatedTopics:["avg","average","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MAX FUNCTION
==================================*/

{
id:600,
category:"SQL Aggregate Functions",
subCategory:"MAX",
difficulty:"Beginner",
title:"MAX Function",
shortDescription:"MAX returns the highest value from a column.",
syntax:`MAX(column_name)`,
sql:`SELECT
MAX(Salary)
AS HighestSalary
FROM Employees;`,
keywordId:"MAX",
sampleDataId:"Employees",
businessCaseId:"Find Maximum Value",
optimizationId:"MAX",
errorId:"MAX",
interviewId:"MAX",
interviewQuestions:["<b>Q:</b>What does MAX return?<br><b>A:</b>Largest value.","<b>Q:</b>Example?<br><b>A:</b>Highest salary."],
relatedTopics:["max","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL AGGREGATE FUNCTIONS
==================================*/

{
id:596,
category:"SQL Aggregate Functions",
subCategory:"Aggregate Function",
difficulty:"Beginner",
title:"SQL Aggregate Functions",
shortDescription:"Aggregate functions perform calculations on multiple rows and return a single value.",
syntax:`FUNCTION(column_name)
FROM table_name;`,
sql:`SELECT
AVG(Salary)
AS AverageSalary
FROM Employees;`,
keywordId:"AGGREGATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Business Data Summaries",
optimizationId:"AGGREGATE_FUNCTION",
errorId:"AGGREGATE_FUNCTION",
interviewId:"AGGREGATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Aggregate Functions?<br><b>A:</b>Functions that calculate values from multiple rows.","<b>Q:</b>Examples?<br><b>A:</b>SUM, AVG, COUNT, MAX, MIN."],
relatedTopics:["aggregate function","sql function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COUNT FUNCTION
==================================*/

{
id:597,
category:"SQL Aggregate Functions",
subCategory:"COUNT",
difficulty:"Beginner",
title:"COUNT Function",
shortDescription:"COUNT returns the number of rows or non-null values.",
syntax:`COUNT(column_name)`,
sql:`SELECT
COUNT(EmployeeID)
AS TotalEmployees
FROM Employees;`,
keywordId:"COUNT",
sampleDataId:"Employees",
businessCaseId:"Count Records",
optimizationId:"COUNT",
errorId:"COUNT",
interviewId:"COUNT",
interviewQuestions:["<b>Q:</b>What does COUNT do?<br><b>A:</b>Counts rows.","<b>Q:</b>Difference COUNT(*) and COUNT(column)?<br><b>A:</b>COUNT(*) counts all rows."],
relatedTopics:["count","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUM FUNCTION
==================================*/

{
id:598,
category:"SQL Aggregate Functions",
subCategory:"SUM",
difficulty:"Beginner",
title:"SUM Function",
shortDescription:"SUM calculates the total of numeric values.",
syntax:`SUM(column_name)`,
sql:`SELECT
SUM(Salary)
AS TotalSalary
FROM Employees;`,
keywordId:"SUM",
sampleDataId:"Employees",
businessCaseId:"Calculate Total Amount",
optimizationId:"SUM",
errorId:"SUM",
interviewId:"SUM",
interviewQuestions:["<b>Q:</b>What does SUM do?<br><b>A:</b>Adds numeric values.","<b>Q:</b>Example?<br><b>A:</b>Total salary calculation."],
relatedTopics:["sum","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AVG FUNCTION
==================================*/

{
id:599,
category:"SQL Aggregate Functions",
subCategory:"AVG",
difficulty:"Beginner",
title:"AVG Function",
shortDescription:"AVG calculates the average value of numeric data.",
syntax:`AVG(column_name)`,
sql:`SELECT
AVG(Salary)
AS AverageSalary
FROM Employees;`,
keywordId:"AVG",
sampleDataId:"Employees",
businessCaseId:"Calculate Average Performance",
optimizationId:"AVG",
errorId:"AVG",
interviewId:"AVG",
interviewQuestions:["<b>Q:</b>What does AVG do?<br><b>A:</b>Returns average value.","<b>Q:</b>Example?<br><b>A:</b>Average employee salary."],
relatedTopics:["avg","average","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MAX FUNCTION
==================================*/

{
id:600,
category:"SQL Aggregate Functions",
subCategory:"MAX",
difficulty:"Beginner",
title:"MAX Function",
shortDescription:"MAX returns the highest value from a column.",
syntax:`MAX(column_name)`,
sql:`SELECT
MAX(Salary)
AS HighestSalary
FROM Employees;`,
keywordId:"MAX",
sampleDataId:"Employees",
businessCaseId:"Find Maximum Value",
optimizationId:"MAX",
errorId:"MAX",
interviewId:"MAX",
interviewQuestions:["<b>Q:</b>What does MAX return?<br><b>A:</b>Largest value.","<b>Q:</b>Example?<br><b>A:</b>Highest salary."],
relatedTopics:["max","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CUBE OPERATOR
==================================*/

{
id:606,
category:"SQL Aggregate Functions",
subCategory:"CUBE",
difficulty:"Advanced",
title:"CUBE Operator",
shortDescription:"CUBE generates subtotals for all possible combinations of grouped columns.",
syntax:`GROUP BY CUBE(column1,column2)`,
sql:`SELECT
Department,
JobRole,
SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY CUBE(Department,JobRole);`,
keywordId:"CUBE",
sampleDataId:"Employees",
businessCaseId:"Multi Dimensional Reporting",
optimizationId:"CUBE",
errorId:"CUBE",
interviewId:"CUBE",
interviewQuestions:["<b>Q:</b>What is CUBE operator?<br><b>A:</b>Creates summaries for all grouping combinations.","<b>Q:</b>ROLLUP vs CUBE?<br><b>A:</b>ROLLUP follows hierarchy, CUBE creates all combinations."],
relatedTopics:["cube","rollup","group by","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GROUPING FUNCTION
==================================*/

{
id:607,
category:"SQL Aggregate Functions",
subCategory:"GROUPING",
difficulty:"Advanced",
title:"GROUPING Function",
shortDescription:"GROUPING identifies whether a row is a subtotal or regular row.",
syntax:`GROUPING(column_name)`,
sql:`SELECT
Department,
SUM(Salary),
GROUPING(Department)
FROM Employees
GROUP BY ROLLUP(Department);`,
keywordId:"GROUPING",
sampleDataId:"Employees",
businessCaseId:"Identify Summary Rows",
optimizationId:"GROUPING",
errorId:"GROUPING",
interviewId:"GROUPING",
interviewQuestions:["<b>Q:</b>What does GROUPING do?<br><b>A:</b>Identifies aggregate rows.","<b>Q:</b>Used with?<br><b>A:</b>ROLLUP and CUBE."],
relatedTopics:["grouping","rollup","cube","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STRING_AGG FUNCTION
==================================*/

{
id:608,
category:"SQL Aggregate Functions",
subCategory:"STRING_AGG",
difficulty:"Advanced",
title:"STRING_AGG Function",
shortDescription:"STRING_AGG combines multiple row values into a single string.",
syntax:`STRING_AGG(column,separator)`,
sql:`SELECT
STRING_AGG(EmployeeName,', ')
AS EmployeeList
FROM Employees;`,
keywordId:"STRING_AGG",
sampleDataId:"Employees",
businessCaseId:"Create Combined Lists",
optimizationId:"STRING_AGG",
errorId:"STRING_AGG",
interviewId:"STRING_AGG",
interviewQuestions:["<b>Q:</b>What does STRING_AGG do?<br><b>A:</b>Combines rows into one text value.","<b>Q:</b>Alternative?<br><b>A:</b>FOR XML PATH in older SQL Server."],
relatedTopics:["string agg","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DISTINCT KEYWORD
==================================*/

{
id:609,
category:"SQL Aggregate Functions",
subCategory:"DISTINCT",
difficulty:"Beginner",
title:"DISTINCT Keyword",
shortDescription:"DISTINCT removes duplicate rows from query results.",
syntax:`SELECT DISTINCT column
FROM table;`,
sql:`SELECT DISTINCT
Department
FROM Employees;`,
keywordId:"DISTINCT",
sampleDataId:"Employees",
businessCaseId:"Remove Duplicate Results",
optimizationId:"DISTINCT",
errorId:"DISTINCT",
interviewId:"DISTINCT",
interviewQuestions:["<b>Q:</b>What does DISTINCT do?<br><b>A:</b>Returns unique values.","<b>Q:</b>Difference COUNT and COUNT DISTINCT?<br><b>A:</b>COUNT counts rows, COUNT DISTINCT counts unique values."],
relatedTopics:["distinct","duplicate removal","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AGGREGATE WITH NULL
==================================*/

{
id:610,
category:"SQL Aggregate Functions",
subCategory:"NULL Handling",
difficulty:"Intermediate",
title:"Aggregate Functions With NULL",
shortDescription:"Aggregate functions handle NULL values differently.",
syntax:`COUNT()
SUM()
AVG()
with NULL values`,
sql:`SELECT
COUNT(Salary),
SUM(Salary),
AVG(Salary)
FROM Employees;`,
keywordId:"AGGREGATE_NULL",
sampleDataId:"Employees",
businessCaseId:"Handle Missing Data",
optimizationId:"AGGREGATE_NULL",
errorId:"AGGREGATE_NULL",
interviewId:"AGGREGATE_NULL",
interviewQuestions:["<b>Q:</b>Do SUM and AVG count NULL?<br><b>A:</b>No, they ignore NULL values.","<b>Q:</b>Does COUNT(*) count NULL?<br><b>A:</b>Yes."],
relatedTopics:["null aggregate","count","sum","avg","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL JOINS
==================================*/

{
id:611,
category:"SQL Joins",
subCategory:"JOIN",
difficulty:"Beginner",
title:"SQL JOIN",
shortDescription:"JOIN combines rows from two or more tables based on related columns.",
syntax:`SELECT columns
FROM table1
JOIN table2
ON table1.column=table2.column;`,
sql:`SELECT
Employees.EmployeeName,
Departments.DepartmentName
FROM Employees
JOIN Departments
ON Employees.DepartmentID=
Departments.DepartmentID;`,
keywordId:"JOIN",
sampleDataId:"Employees",
businessCaseId:"Combine Related Tables",
optimizationId:"JOIN",
errorId:"JOIN",
interviewId:"JOIN",
interviewQuestions:["<b>Q:</b>What is JOIN?<br><b>A:</b>Combines data from multiple tables.","<b>Q:</b>Why use JOIN?<br><b>A:</b>Retrieve related information."],
relatedTopics:["join","sql joins","table relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INNER JOIN
==================================*/

{
id:612,
category:"SQL Joins",
subCategory:"INNER JOIN",
difficulty:"Beginner",
title:"INNER JOIN",
shortDescription:"INNER JOIN returns only matching records from both tables.",
syntax:`SELECT columns
FROM table1
INNER JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
INNER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"INNER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Match Existing Records",
optimizationId:"INNER_JOIN",
errorId:"INNER_JOIN",
interviewId:"INNER_JOIN",
interviewQuestions:["<b>Q:</b>What does INNER JOIN return?<br><b>A:</b>Only matching rows.","<b>Q:</b>Most commonly used JOIN?<br><b>A:</b>INNER JOIN."],
relatedTopics:["inner join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT JOIN
==================================*/

{
id:613,
category:"SQL Joins",
subCategory:"LEFT JOIN",
difficulty:"Beginner",
title:"LEFT JOIN",
shortDescription:"LEFT JOIN returns all rows from left table and matching rows from right table.",
syntax:`SELECT columns
FROM table1
LEFT JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
LEFT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"LEFT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Find Missing Matches",
optimizationId:"LEFT_JOIN",
errorId:"LEFT_JOIN",
interviewId:"LEFT_JOIN",
interviewQuestions:["<b>Q:</b>What does LEFT JOIN return?<br><b>A:</b>All left table rows.","<b>Q:</b>Why use LEFT JOIN?<br><b>A:</b>Find unmatched records."],
relatedTopics:["left join","outer join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT JOIN
==================================*/

{
id:614,
category:"SQL Joins",
subCategory:"RIGHT JOIN",
difficulty:"Beginner",
title:"RIGHT JOIN",
shortDescription:"RIGHT JOIN returns all rows from right table and matching rows from left table.",
syntax:`SELECT columns
FROM table1
RIGHT JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
RIGHT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"RIGHT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Include All Reference Data",
optimizationId:"RIGHT_JOIN",
errorId:"RIGHT_JOIN",
interviewId:"RIGHT_JOIN",
interviewQuestions:["<b>Q:</b>What does RIGHT JOIN return?<br><b>A:</b>All right table rows.","<b>Q:</b>Alternative?<br><b>A:</b>Swap table order and use LEFT JOIN."],
relatedTopics:["right join","left join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FULL OUTER JOIN
==================================*/

{
id:615,
category:"SQL Joins",
subCategory:"FULL OUTER JOIN",
difficulty:"Intermediate",
title:"FULL OUTER JOIN",
shortDescription:"FULL OUTER JOIN returns matching and non-matching rows from both tables.",
syntax:`SELECT columns
FROM table1
FULL OUTER JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
FULL OUTER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"FULL_OUTER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Compare Complete Data Sets",
optimizationId:"FULL_OUTER_JOIN",
errorId:"FULL_OUTER_JOIN",
interviewId:"FULL_OUTER_JOIN",
interviewQuestions:["<b>Q:</b>What does FULL OUTER JOIN return?<br><b>A:</b>All rows from both tables.","<b>Q:</b>Use case?<br><b>A:</b>Data reconciliation."],
relatedTopics:["full outer join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CROSS JOIN
==================================*/

{
id:616,
category:"SQL Joins",
subCategory:"CROSS JOIN",
difficulty:"Intermediate",
title:"CROSS JOIN",
shortDescription:"CROSS JOIN returns the Cartesian product of two tables.",
syntax:`SELECT columns
FROM table1
CROSS JOIN table2;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
CROSS JOIN Departments D;`,
keywordId:"CROSS_JOIN",
sampleDataId:"Employees",
businessCaseId:"Generate All Possible Combinations",
optimizationId:"CROSS_JOIN",
errorId:"CROSS_JOIN",
interviewId:"CROSS_JOIN",
interviewQuestions:["<b>Q:</b>What does CROSS JOIN return?<br><b>A:</b>Every possible combination.","<b>Q:</b>Does CROSS JOIN need ON condition?<br><b>A:</b>No."],
relatedTopics:["cross join","cartesian product","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SELF JOIN
==================================*/

{
id:617,
category:"SQL Joins",
subCategory:"SELF JOIN",
difficulty:"Intermediate",
title:"SELF JOIN",
shortDescription:"SELF JOIN joins a table with itself using aliases.",
syntax:`SELECT columns
FROM table A
JOIN table B
ON condition;`,
sql:`SELECT
E.EmployeeName AS Employee,
M.EmployeeName AS Manager
FROM Employees E
JOIN Employees M
ON E.ManagerID=M.EmployeeID;`,
keywordId:"SELF_JOIN",
sampleDataId:"Employees",
businessCaseId:"Employee Hierarchy Analysis",
optimizationId:"SELF_JOIN",
errorId:"SELF_JOIN",
interviewId:"SELF_JOIN",
interviewQuestions:["<b>Q:</b>What is SELF JOIN?<br><b>A:</b>Joining a table with itself.","<b>Q:</b>Example?<br><b>A:</b>Employee-manager relationship."],
relatedTopics:["self join","join","hierarchy","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN USING
==================================*/

{
id:618,
category:"SQL Joins",
subCategory:"USING Clause",
difficulty:"Intermediate",
title:"JOIN USING Clause",
shortDescription:"USING simplifies JOIN when both tables have the same column name.",
syntax:`JOIN table
USING(column_name);`,
sql:`SELECT *
FROM Employees
JOIN Departments
USING(DepartmentID);`,
keywordId:"JOIN_USING",
sampleDataId:"Employees",
businessCaseId:"Simplify Join Conditions",
optimizationId:"JOIN_USING",
errorId:"JOIN_USING",
interviewId:"JOIN_USING",
interviewQuestions:["<b>Q:</b>What is USING clause?<br><b>A:</b>Shortcut for same column joins.","<b>Q:</b>Supported everywhere?<br><b>A:</b>No, depends on database."],
relatedTopics:["using clause","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN WITH WHERE
==================================*/

{
id:619,
category:"SQL Joins",
subCategory:"JOIN WHERE",
difficulty:"Beginner",
title:"JOIN With WHERE Condition",
shortDescription:"JOIN can filter combined data using WHERE clause.",
syntax:`JOIN table2
ON condition
WHERE filter;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID
WHERE D.DepartmentName='IT';`,
keywordId:"JOIN_WHERE",
sampleDataId:"Employees",
businessCaseId:"Filtered Combined Reports",
optimizationId:"JOIN_WHERE",
errorId:"JOIN_WHERE",
interviewId:"JOIN_WHERE",
interviewQuestions:["<b>Q:</b>Can WHERE be used with JOIN?<br><b>A:</b>Yes.","<b>Q:</b>Purpose?<br><b>A:</b>Filter joined results."],
relatedTopics:["join where","join","filter","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTIPLE TABLE JOIN
==================================*/

{
id:620,
category:"SQL Joins",
subCategory:"Multiple JOIN",
difficulty:"Advanced",
title:"Multiple Table JOIN",
shortDescription:"Multiple JOIN combines data from more than two tables.",
syntax:`FROM table1
JOIN table2
JOIN table3
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName,
P.ProjectName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID
JOIN Projects P
ON E.EmployeeID=P.EmployeeID;`,
keywordId:"MULTIPLE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Complex Business Reports",
optimizationId:"MULTIPLE_JOIN",
errorId:"MULTIPLE_JOIN",
interviewId:"MULTIPLE_JOIN",
interviewQuestions:["<b>Q:</b>Can we join multiple tables?<br><b>A:</b>Yes.","<b>Q:</b>Important rule?<br><b>A:</b>Each table needs relationship condition."],
relatedTopics:["multiple join","sql joins","database relationship","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL SUBQUERIES
==================================*/

{
id:621,
category:"SQL Subqueries",
subCategory:"Subquery",
difficulty:"Intermediate",
title:"SQL Subquery",
shortDescription:"A subquery is a query written inside another SQL query.",
syntax:`SELECT column
FROM table
WHERE column =
(
SELECT column
FROM table
);`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary >
(
SELECT AVG(Salary)
FROM Employees
);`,
keywordId:"SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Compare Data With Calculated Results",
optimizationId:"SUBQUERY",
errorId:"SUBQUERY",
interviewId:"SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Subquery?<br><b>A:</b>A query inside another query.","<b>Q:</b>Where can subquery be used?<br><b>A:</b>SELECT, FROM, WHERE clauses."],
relatedTopics:["subquery","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SCALAR SUBQUERY
==================================*/

{
id:622,
category:"SQL Subqueries",
subCategory:"Scalar Subquery",
difficulty:"Intermediate",
title:"Scalar Subquery",
shortDescription:"Scalar subquery returns a single value.",
syntax:`SELECT
(
SELECT value
);`,
sql:`SELECT
EmployeeName,
(
SELECT AVG(Salary)
FROM Employees
) AS AverageSalary
FROM Employees;`,
keywordId:"SCALAR_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Use Single Calculated Value",
optimizationId:"SCALAR_SUBQUERY",
errorId:"SCALAR_SUBQUERY",
interviewId:"SCALAR_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Scalar Subquery?<br><b>A:</b>Returns one value.","<b>Q:</b>Can it return multiple rows?<br><b>A:</b>No."],
relatedTopics:["scalar subquery","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTI ROW SUBQUERY
==================================*/

{
id:623,
category:"SQL Subqueries",
subCategory:"Multi Row Subquery",
difficulty:"Intermediate",
title:"Multi Row Subquery",
shortDescription:"Returns multiple rows and works with operators like IN.",
syntax:`WHERE column IN
(
SELECT column
FROM table
);`,
sql:`SELECT
EmployeeName
FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
);`,
keywordId:"MULTI_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Filter Using Multiple Values",
optimizationId:"MULTI_ROW_SUBQUERY",
errorId:"MULTI_ROW_SUBQUERY",
interviewId:"MULTI_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Multi Row Subquery?<br><b>A:</b>Returns more than one row.","<b>Q:</b>Which operator commonly used?<br><b>A:</b>IN."],
relatedTopics:["multi row subquery","subquery","in operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CORRELATED SUBQUERY
==================================*/

{
id:624,
category:"SQL Subqueries",
subCategory:"Correlated Subquery",
difficulty:"Advanced",
title:"Correlated Subquery",
shortDescription:"Correlated subquery runs once for each row of outer query.",
syntax:`SELECT column
FROM table1
WHERE column =
(
SELECT column
FROM table2
WHERE condition
);`,
sql:`SELECT
E1.EmployeeName,
E1.Salary
FROM Employees E1
WHERE Salary >
(
SELECT AVG(E2.Salary)
FROM Employees E2
WHERE E1.DepartmentID=E2.DepartmentID
);`,
keywordId:"CORRELATED_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Row Level Comparison",
optimizationId:"CORRELATED_SUBQUERY",
errorId:"CORRELATED_SUBQUERY",
interviewId:"CORRELATED_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Correlated Subquery?<br><b>A:</b>Depends on outer query values.","<b>Q:</b>Performance?<br><b>A:</b>Can be slower than joins."],
relatedTopics:["correlated subquery","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN SELECT
==================================*/

{
id:625,
category:"SQL Subqueries",
subCategory:"SELECT Subquery",
difficulty:"Intermediate",
title:"Subquery In SELECT",
shortDescription:"Subquery can be used as a calculated column.",
syntax:`SELECT
column,
(
SELECT value
);`,
sql:`SELECT
EmployeeName,
(
SELECT COUNT(*)
FROM Employees
) AS TotalEmployees
FROM Employees;`,
keywordId:"SUBQUERY_SELECT",
sampleDataId:"Employees",
businessCaseId:"Add Summary Information",
optimizationId:"SUBQUERY_SELECT",
errorId:"SUBQUERY_SELECT",
interviewId:"SUBQUERY_SELECT",
interviewQuestions:["<b>Q:</b>Can subquery be used in SELECT?<br><b>A:</b>Yes.","<b>Q:</b>Output type?<br><b>A:</b>Usually single value."],
relatedTopics:["subquery select","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBQUERY IN FROM
==================================*/

{
id:626,
category:"SQL Subqueries",
subCategory:"FROM Subquery",
difficulty:"Advanced",
title:"Subquery In FROM",
shortDescription:"A subquery inside FROM creates a temporary result set.",
syntax:`SELECT *
FROM
(
SELECT columns
FROM table
) AS alias;`,
sql:`SELECT *
FROM
(
SELECT
Department,
AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department
) AS DeptSalary;`,
keywordId:"SUBQUERY_FROM",
sampleDataId:"Employees",
businessCaseId:"Create Temporary Tables",
optimizationId:"SUBQUERY_FROM",
errorId:"SUBQUERY_FROM",
interviewId:"SUBQUERY_FROM",
interviewQuestions:["<b>Q:</b>What is FROM subquery?<br><b>A:</b>A query used as a temporary table.","<b>Q:</b>Requirement?<br><b>A:</b>Must have an alias."],
relatedTopics:["from subquery","derived table","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXISTS OPERATOR
==================================*/

{
id:627,
category:"SQL Subqueries",
subCategory:"EXISTS",
difficulty:"Intermediate",
title:"EXISTS Operator",
shortDescription:"EXISTS checks whether a subquery returns any rows.",
syntax:`WHERE EXISTS
(
SELECT *
FROM table
);`,
sql:`SELECT
EmployeeName
FROM Employees E
WHERE EXISTS
(
SELECT 1
FROM Departments D
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"EXISTS",
sampleDataId:"Employees",
businessCaseId:"Check Record Availability",
optimizationId:"EXISTS",
errorId:"EXISTS",
interviewId:"EXISTS",
interviewQuestions:["<b>Q:</b>What does EXISTS do?<br><b>A:</b>Checks if records exist.","<b>Q:</b>Does EXISTS return data?<br><b>A:</b>No, only TRUE or FALSE."],
relatedTopics:["exists","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EXISTS OPERATOR
==================================*/

{
id:628,
category:"SQL Subqueries",
subCategory:"NOT EXISTS",
difficulty:"Intermediate",
title:"NOT EXISTS Operator",
shortDescription:"NOT EXISTS finds records where matching rows do not exist.",
syntax:`WHERE NOT EXISTS
(
SELECT *
FROM table
);`,
sql:`SELECT
EmployeeName
FROM Employees E
WHERE NOT EXISTS
(
SELECT 1
FROM Projects P
WHERE E.EmployeeID=P.EmployeeID
);`,
keywordId:"NOT_EXISTS",
sampleDataId:"Employees",
businessCaseId:"Find Missing Relationships",
optimizationId:"NOT_EXISTS",
errorId:"NOT_EXISTS",
interviewId:"NOT_EXISTS",
interviewQuestions:["<b>Q:</b>What does NOT EXISTS do?<br><b>A:</b>Returns records without matches.","<b>Q:</b>Common use?<br><b>A:</b>Missing data detection."],
relatedTopics:["not exists","exists","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ANY OPERATOR
==================================*/

{
id:629,
category:"SQL Subqueries",
subCategory:"ANY",
difficulty:"Advanced",
title:"ANY Operator",
shortDescription:"ANY compares a value with any value returned by a subquery.",
syntax:`WHERE column > ANY
(
SELECT column
FROM table
);`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary > ANY
(
SELECT Salary
FROM Employees
WHERE Department='IT'
);`,
keywordId:"ANY",
sampleDataId:"Employees",
businessCaseId:"Compare Against Multiple Values",
optimizationId:"ANY",
errorId:"ANY",
interviewId:"ANY",
interviewQuestions:["<b>Q:</b>What does ANY do?<br><b>A:</b>Compares with at least one value.","<b>Q:</b>Alternative?<br><b>A:</b>SOME keyword."],
relatedTopics:["any operator","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALL OPERATOR
==================================*/

{
id:630,
category:"SQL Subqueries",
subCategory:"ALL",
difficulty:"Advanced",
title:"ALL Operator",
shortDescription:"ALL compares a value against every value returned by subquery.",
syntax:`WHERE column > ALL
(
SELECT column
FROM table
);`,
sql:`SELECT
EmployeeName,
Salary
FROM Employees
WHERE Salary > ALL
(
SELECT Salary
FROM Employees
WHERE Department='IT'
);`,
keywordId:"ALL",
sampleDataId:"Employees",
businessCaseId:"Compare Against Complete Set",
optimizationId:"ALL",
errorId:"ALL",
interviewId:"ALL",
interviewQuestions:["<b>Q:</b>What does ALL do?<br><b>A:</b>Must satisfy every returned value.","<b>Q:</b>Difference ANY vs ALL?<br><b>A:</b>ANY requires one match, ALL requires every match."],
relatedTopics:["all operator","any","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL VIEWS
==================================*/

{
id:631,
category:"SQL Views",
subCategory:"VIEW",
difficulty:"Beginner",
title:"SQL VIEW",
shortDescription:"A VIEW is a virtual table created from a SQL query.",
syntax:`CREATE VIEW view_name AS
SELECT columns
FROM table;`,
sql:`CREATE VIEW EmployeeView AS
SELECT
EmployeeName,
Department,
Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplify Complex Queries",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is a VIEW?<br><b>A:</b>A virtual table based on query result.","<b>Q:</b>Does VIEW store data?<br><b>A:</b>Normally no, only definition."],
relatedTopics:["view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:632,
category:"SQL Views",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW Statement",
shortDescription:"CREATE VIEW creates a new database view.",
syntax:`CREATE VIEW name AS SELECT query;`,
sql:`CREATE VIEW ITEmployees AS
SELECT *
FROM Employees
WHERE Department='IT';`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Create Reusable Reports",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>How create a VIEW?<br><b>A:</b>Using CREATE VIEW.","<b>Q:</b>Why create views?<br><b>A:</b>Reuse queries and improve security."],
relatedTopics:["create view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:633,
category:"SQL Views",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW Statement",
shortDescription:"ALTER VIEW modifies an existing view definition.",
syntax:`ALTER VIEW view_name AS
SELECT query;`,
sql:`ALTER VIEW EmployeeView AS
SELECT
EmployeeName,
Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Update Existing Reports",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>Changes view query.","<b>Q:</b>Does it change base table?<br><b>A:</b>No."],
relatedTopics:["alter view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:634,
category:"SQL Views",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW Statement",
shortDescription:"DROP VIEW removes a view from database.",
syntax:`DROP VIEW view_name;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Reports",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>Deletes view definition.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEXED VIEW
==================================*/

{
id:635,
category:"SQL Views",
subCategory:"INDEXED VIEW",
difficulty:"Advanced",
title:"Indexed View",
shortDescription:"Indexed view stores calculated results physically using indexes.",
syntax:`CREATE INDEX ON VIEW`,
sql:`CREATE VIEW SalesSummary
WITH SCHEMABINDING AS
SELECT
Department,
COUNT_BIG(*) AS TotalCount
FROM dbo.Employees
GROUP BY Department;`,
keywordId:"INDEXED_VIEW",
sampleDataId:"Employees",
businessCaseId:"Improve Query Performance",
optimizationId:"INDEXED_VIEW",
errorId:"INDEXED_VIEW",
interviewId:"INDEXED_VIEW",
interviewQuestions:["<b>Q:</b>What is Indexed View?<br><b>A:</b>A view with physical index storage.","<b>Q:</b>Benefit?<br><b>A:</b>Faster complex queries."],
relatedTopics:["indexed view","materialized view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL STORED PROCEDURES
==================================*/

{
id:636,
category:"SQL Stored Procedures",
subCategory:"Stored Procedure",
difficulty:"Beginner",
title:"SQL Stored Procedure",
shortDescription:"A Stored Procedure is a saved collection of SQL statements that can be executed repeatedly.",
syntax:`CREATE PROCEDURE procedure_name
AS
BEGIN
SQL Statements
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SELECT *
FROM Employees;
END;`,
keywordId:"STORED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Reusable Database Operations",
optimizationId:"STORED_PROCEDURE",
errorId:"STORED_PROCEDURE",
interviewId:"STORED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Stored Procedure?<br><b>A:</b>Precompiled SQL code stored in database.","<b>Q:</b>Benefits?<br><b>A:</b>Reuse, security and performance."],
relatedTopics:["stored procedure","procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE PROCEDURE
==================================*/

{
id:637,
category:"SQL Stored Procedures",
subCategory:"CREATE PROCEDURE",
difficulty:"Beginner",
title:"CREATE PROCEDURE Statement",
shortDescription:"CREATE PROCEDURE creates a new stored procedure.",
syntax:`CREATE PROCEDURE name
AS
SQL Statement;`,
sql:`CREATE PROCEDURE GetEmployeeData
AS
SELECT *
FROM Employees;`,
keywordId:"CREATE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Automate Database Tasks",
optimizationId:"CREATE_PROCEDURE",
errorId:"CREATE_PROCEDURE",
interviewId:"CREATE_PROCEDURE",
interviewQuestions:["<b>Q:</b>How create procedure?<br><b>A:</b>Using CREATE PROCEDURE.","<b>Q:</b>Where stored?<br><b>A:</b>Inside database."],
relatedTopics:["create procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXECUTE PROCEDURE
==================================*/

{
id:638,
category:"SQL Stored Procedures",
subCategory:"EXEC",
difficulty:"Beginner",
title:"EXEC Statement",
shortDescription:"EXEC executes a stored procedure.",
syntax:`EXEC procedure_name;`,
sql:`EXEC GetEmployees;`,
keywordId:"EXEC",
sampleDataId:"Employees",
businessCaseId:"Run Saved SQL Logic",
optimizationId:"EXEC",
errorId:"EXEC",
interviewId:"EXEC",
interviewQuestions:["<b>Q:</b>How execute procedure?<br><b>A:</b>Using EXEC command.","<b>Q:</b>Alternative keyword?<br><b>A:</b>EXECUTE."],
relatedTopics:["exec","execute procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PROCEDURE WITH PARAMETERS
==================================*/

{
id:639,
category:"SQL Stored Procedures",
subCategory:"Parameters",
difficulty:"Intermediate",
title:"Stored Procedure With Parameters",
shortDescription:"Parameters allow procedures to accept input values.",
syntax:`CREATE PROCEDURE name
@param datatype
AS
SQL Statement;`,
sql:`CREATE PROCEDURE GetEmployeeByID
@EmployeeID INT
AS
SELECT *
FROM Employees
WHERE EmployeeID=@EmployeeID;`,
keywordId:"PROCEDURE_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Dynamic Data Retrieval",
optimizationId:"PROCEDURE_PARAMETER",
errorId:"PROCEDURE_PARAMETER",
interviewId:"PROCEDURE_PARAMETER",
interviewQuestions:["<b>Q:</b>Why use parameters?<br><b>A:</b>Pass dynamic values.","<b>Q:</b>Benefit?<br><b>A:</b>Reusable procedures."],
relatedTopics:["procedure parameter","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 OUTPUT PARAMETER
==================================*/

{
id:640,
category:"SQL Stored Procedures",
subCategory:"OUTPUT Parameter",
difficulty:"Advanced",
title:"OUTPUT Parameter",
shortDescription:"OUTPUT parameters return values from stored procedures.",
syntax:`@parameter datatype OUTPUT`,
sql:`CREATE PROCEDURE GetEmployeeCount
@Total INT OUTPUT
AS
SELECT @Total=COUNT(*)
FROM Employees;`,
keywordId:"OUTPUT_PARAMETER",
sampleDataId:"Employees",
businessCaseId:"Return Calculated Results",
optimizationId:"OUTPUT_PARAMETER",
errorId:"OUTPUT_PARAMETER",
interviewId:"OUTPUT_PARAMETER",
interviewQuestions:["<b>Q:</b>What is OUTPUT parameter?<br><b>A:</b>Returns value from procedure.","<b>Q:</b>Input vs Output?<br><b>A:</b>Input receives value, output returns value."],
relatedTopics:["output parameter","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER PROCEDURE
==================================*/

{
id:641,
category:"SQL Stored Procedures",
subCategory:"ALTER PROCEDURE",
difficulty:"Intermediate",
title:"ALTER PROCEDURE Statement",
shortDescription:"ALTER PROCEDURE modifies an existing stored procedure.",
syntax:`ALTER PROCEDURE procedure_name
AS
BEGIN
SQL Statements
END;`,
sql:`ALTER PROCEDURE GetEmployees
AS
BEGIN
SELECT
EmployeeName,
Salary
FROM Employees;
END;`,
keywordId:"ALTER_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Update Existing Database Logic",
optimizationId:"ALTER_PROCEDURE",
errorId:"ALTER_PROCEDURE",
interviewId:"ALTER_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does ALTER PROCEDURE do?<br><b>A:</b>Changes an existing procedure.","<b>Q:</b>Does it create new procedure?<br><b>A:</b>No."],
relatedTopics:["alter procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP PROCEDURE
==================================*/

{
id:642,
category:"SQL Stored Procedures",
subCategory:"DROP PROCEDURE",
difficulty:"Beginner",
title:"DROP PROCEDURE Statement",
shortDescription:"DROP PROCEDURE deletes a stored procedure.",
syntax:`DROP PROCEDURE procedure_name;`,
sql:`DROP PROCEDURE GetEmployees;`,
keywordId:"DROP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Procedures",
optimizationId:"DROP_PROCEDURE",
errorId:"DROP_PROCEDURE",
interviewId:"DROP_PROCEDURE",
interviewQuestions:["<b>Q:</b>What does DROP PROCEDURE do?<br><b>A:</b>Deletes procedure object.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE RETURN VALUE
==================================*/

{
id:643,
category:"SQL Stored Procedures",
subCategory:"RETURN",
difficulty:"Advanced",
title:"RETURN Statement In Procedure",
shortDescription:"RETURN sends an integer status value from a stored procedure.",
syntax:`RETURN value;`,
sql:`CREATE PROCEDURE CheckEmployee
@ID INT
AS
BEGIN

IF EXISTS
(
SELECT 1
FROM Employees
WHERE EmployeeID=@ID
)

RETURN 1;

RETURN 0;

END;`,
keywordId:"PROCEDURE_RETURN",
sampleDataId:"Employees",
businessCaseId:"Send Execution Status",
optimizationId:"PROCEDURE_RETURN",
errorId:"PROCEDURE_RETURN",
interviewId:"PROCEDURE_RETURN",
interviewQuestions:["<b>Q:</b>What does RETURN do?<br><b>A:</b>Sends status value.","<b>Q:</b>Can RETURN send table data?<br><b>A:</b>No."],
relatedTopics:["return statement","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NESTED PROCEDURE
==================================*/

{
id:644,
category:"SQL Stored Procedures",
subCategory:"Nested Procedure",
difficulty:"Advanced",
title:"Nested Stored Procedure",
shortDescription:"A stored procedure that calls another stored procedure.",
syntax:`EXEC procedure_name;`,
sql:`CREATE PROCEDURE MainProcess
AS
BEGIN

EXEC CalculateSalary;

END;`,
keywordId:"NESTED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Break Complex Logic Into Modules",
optimizationId:"NESTED_PROCEDURE",
errorId:"NESTED_PROCEDURE",
interviewId:"NESTED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Nested Procedure?<br><b>A:</b>Procedure calling another procedure.","<b>Q:</b>Benefit?<br><b>A:</b>Modular code."],
relatedTopics:["nested procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TEMPORARY PROCEDURE
==================================*/

{
id:645,
category:"SQL Stored Procedures",
subCategory:"Temporary Procedure",
difficulty:"Advanced",
title:"Temporary Stored Procedure",
shortDescription:"Temporary procedures exist only for a session or temporary usage.",
syntax:`CREATE PROCEDURE #procedure_name
AS
SQL Statement;`,
sql:`CREATE PROCEDURE #TempEmployee
AS
SELECT *
FROM Employees;`,
keywordId:"TEMP_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Temporary Database Tasks",
optimizationId:"TEMP_PROCEDURE",
errorId:"TEMP_PROCEDURE",
interviewId:"TEMP_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Temporary Procedure?<br><b>A:</b>Procedure created temporarily.","<b>Q:</b>Lifetime?<br><b>A:</b>Usually session based."],
relatedTopics:["temporary procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL TRIGGERS
==================================*/

{
id:646,
category:"SQL Triggers",
subCategory:"Trigger",
difficulty:"Beginner",
title:"SQL Trigger",
shortDescription:"A Trigger automatically executes when a database event occurs.",
syntax:`CREATE TRIGGER trigger_name
ON table_name
AFTER INSERT
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_AuditEmployee
ON Employees
AFTER INSERT
AS
BEGIN
INSERT INTO EmployeeAudit
SELECT *
FROM inserted;
END;`,
keywordId:"TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automatic Data Actions",
optimizationId:"TRIGGER",
errorId:"TRIGGER",
interviewId:"TRIGGER",
interviewQuestions:["<b>Q:</b>What is Trigger?<br><b>A:</b>Automatically executed SQL code.","<b>Q:</b>When trigger runs?<br><b>A:</b>During INSERT, UPDATE or DELETE events."],
relatedTopics:["trigger","database trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE TRIGGER
==================================*/

{
id:647,
category:"SQL Triggers",
subCategory:"CREATE TRIGGER",
difficulty:"Beginner",
title:"CREATE TRIGGER Statement",
shortDescription:"CREATE TRIGGER creates an automatic database action.",
syntax:`CREATE TRIGGER name
ON table
FOR event
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_UpdateLog
ON Employees
AFTER UPDATE
AS
BEGIN
PRINT 'Employee Updated';
END;`,
keywordId:"CREATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automate Audit Process",
optimizationId:"CREATE_TRIGGER",
errorId:"CREATE_TRIGGER",
interviewId:"CREATE_TRIGGER",
interviewQuestions:["<b>Q:</b>How create trigger?<br><b>A:</b>Using CREATE TRIGGER.","<b>Q:</b>Does user call trigger manually?<br><b>A:</b>No."],
relatedTopics:["create trigger","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER INSERT TRIGGER
==================================*/

{
id:648,
category:"SQL Triggers",
subCategory:"AFTER INSERT",
difficulty:"Intermediate",
title:"AFTER INSERT Trigger",
shortDescription:"Runs automatically after new records are inserted.",
syntax:`AFTER INSERT
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE TRIGGER trg_InsertEmployee
ON Employees
AFTER INSERT
AS
BEGIN
INSERT INTO EmployeeLog(Action)
VALUES('New Employee Added');
END;`,
keywordId:"AFTER_INSERT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track New Records",
optimizationId:"AFTER_INSERT_TRIGGER",
errorId:"AFTER_INSERT_TRIGGER",
interviewId:"AFTER_INSERT_TRIGGER",
interviewQuestions:["<b>Q:</b>When AFTER INSERT runs?<br><b>A:</b>After successful insert.","<b>Q:</b>Common use?<br><b>A:</b>Audit logging."],
relatedTopics:["after insert","trigger","audit log","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER UPDATE TRIGGER
==================================*/

{
id:649,
category:"SQL Triggers",
subCategory:"AFTER UPDATE",
difficulty:"Intermediate",
title:"AFTER UPDATE Trigger",
shortDescription:"Runs automatically after existing records are updated.",
syntax:`AFTER UPDATE
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE TRIGGER trg_UpdateSalary
ON Employees
AFTER UPDATE
AS
BEGIN
INSERT INTO SalaryAudit
SELECT *
FROM inserted;
END;`,
keywordId:"AFTER_UPDATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track Data Changes",
optimizationId:"AFTER_UPDATE_TRIGGER",
errorId:"AFTER_UPDATE_TRIGGER",
interviewId:"AFTER_UPDATE_TRIGGER",
interviewQuestions:["<b>Q:</b>When UPDATE trigger runs?<br><b>A:</b>After update operation.","<b>Q:</b>Use case?<br><b>A:</b>Maintain history."],
relatedTopics:["after update","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER DELETE TRIGGER
==================================*/

{
id:650,
category:"SQL Triggers",
subCategory:"AFTER DELETE",
difficulty:"Intermediate",
title:"AFTER DELETE Trigger",
shortDescription:"Runs automatically after records are deleted.",
syntax:`AFTER DELETE
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE TRIGGER trg_DeleteEmployee
ON Employees
AFTER DELETE
AS
BEGIN
INSERT INTO EmployeeArchive
SELECT *
FROM deleted;
END;`,
keywordId:"AFTER_DELETE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Archive Deleted Records",
optimizationId:"AFTER_DELETE_TRIGGER",
errorId:"AFTER_DELETE_TRIGGER",
interviewId:"AFTER_DELETE_TRIGGER",
interviewQuestions:["<b>Q:</b>When DELETE trigger runs?<br><b>A:</b>After delete operation.","<b>Q:</b>Why use it?<br><b>A:</b>Backup and auditing."],
relatedTopics:["after delete","trigger","audit","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INSTEAD OF INSERT TRIGGER
==================================*/

{
id:651,
category:"SQL Triggers",
subCategory:"INSTEAD OF INSERT",
difficulty:"Advanced",
title:"INSTEAD OF INSERT Trigger",
shortDescription:"INSTEAD OF INSERT executes custom logic instead of normal insert operation.",
syntax:`CREATE TRIGGER trigger_name
ON table_name
INSTEAD OF INSERT
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_InsertControl
ON Employees
INSTEAD OF INSERT
AS
BEGIN
PRINT 'Insert Operation Controlled';
END;`,
keywordId:"INSTEAD_OF_INSERT",
sampleDataId:"Employees",
businessCaseId:"Control Insert Operations",
optimizationId:"INSTEAD_OF_INSERT",
errorId:"INSTEAD_OF_INSERT",
interviewId:"INSTEAD_OF_INSERT",
interviewQuestions:["<b>Q:</b>What does INSTEAD OF do?<br><b>A:</b>Runs instead of original operation.","<b>Q:</b>Where commonly used?<br><b>A:</b>Complex views."],
relatedTopics:["instead of insert","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INSTEAD OF UPDATE TRIGGER
==================================*/

{
id:652,
category:"SQL Triggers",
subCategory:"INSTEAD OF UPDATE",
difficulty:"Advanced",
title:"INSTEAD OF UPDATE Trigger",
shortDescription:"Runs custom logic instead of performing update operation.",
syntax:`INSTEAD OF UPDATE
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE TRIGGER trg_UpdateControl
ON Employees
INSTEAD OF UPDATE
AS
BEGIN
PRINT 'Update Restricted';
END;`,
keywordId:"INSTEAD_OF_UPDATE",
sampleDataId:"Employees",
businessCaseId:"Prevent Unauthorized Changes",
optimizationId:"INSTEAD_OF_UPDATE",
errorId:"INSTEAD_OF_UPDATE",
interviewId:"INSTEAD_OF_UPDATE",
interviewQuestions:["<b>Q:</b>Purpose of INSTEAD OF UPDATE?<br><b>A:</b>Override update behavior.","<b>Q:</b>Example?<br><b>A:</b>Data validation."],
relatedTopics:["instead of update","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INSTEAD OF DELETE TRIGGER
==================================*/

{
id:653,
category:"SQL Triggers",
subCategory:"INSTEAD OF DELETE",
difficulty:"Advanced",
title:"INSTEAD OF DELETE Trigger",
shortDescription:"Executes custom logic instead of deleting records.",
syntax:`INSTEAD OF DELETE
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE TRIGGER trg_DeleteControl
ON Employees
INSTEAD OF DELETE
AS
BEGIN
PRINT 'Delete Blocked';
END;`,
keywordId:"INSTEAD_OF_DELETE",
sampleDataId:"Employees",
businessCaseId:"Protect Important Records",
optimizationId:"INSTEAD_OF_DELETE",
errorId:"INSTEAD_OF_DELETE",
interviewId:"INSTEAD_OF_DELETE",
interviewQuestions:["<b>Q:</b>Why use INSTEAD OF DELETE?<br><b>A:</b>Prevent direct deletion.","<b>Q:</b>Alternative?<br><b>A:</b>Soft delete."],
relatedTopics:["instead of delete","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DML TRIGGER
==================================*/

{
id:654,
category:"SQL Triggers",
subCategory:"DML Trigger",
difficulty:"Intermediate",
title:"DML Trigger",
shortDescription:"DML triggers execute during INSERT, UPDATE and DELETE operations.",
syntax:`CREATE TRIGGER name
ON table
FOR INSERT, UPDATE, DELETE`,
sql:`CREATE TRIGGER trg_DMLAudit
ON Employees
AFTER INSERT,UPDATE,DELETE
AS
BEGIN
PRINT 'Data Changed';
END;`,
keywordId:"DML_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track Data Modifications",
optimizationId:"DML_TRIGGER",
errorId:"DML_TRIGGER",
interviewId:"DML_TRIGGER",
interviewQuestions:["<b>Q:</b>What is DML Trigger?<br><b>A:</b>Trigger on data changes.","<b>Q:</b>DML operations?<br><b>A:</b>INSERT UPDATE DELETE."],
relatedTopics:["dml trigger","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DDL TRIGGER
==================================*/

{
id:655,
category:"SQL Triggers",
subCategory:"DDL Trigger",
difficulty:"Advanced",
title:"DDL Trigger",
shortDescription:"DDL triggers respond to database structure changes.",
syntax:`CREATE TRIGGER name
ON DATABASE
FOR CREATE_TABLE, ALTER_TABLE`,
sql:`CREATE TRIGGER trg_DDLLog
ON DATABASE
FOR CREATE_TABLE
AS
BEGIN
PRINT 'Table Created';
END;`,
keywordId:"DDL_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Monitor Database Changes",
optimizationId:"DDL_TRIGGER",
errorId:"DDL_TRIGGER",
interviewId:"DDL_TRIGGER",
interviewQuestions:["<b>Q:</b>What is DDL Trigger?<br><b>A:</b>Trigger for database structure changes.","<b>Q:</b>Examples?<br><b>A:</b>CREATE, ALTER, DROP."],
relatedTopics:["ddl trigger","trigger","database security","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL TRANSACTIONS
==================================*/

{
id:656,
category:"SQL Transactions",
subCategory:"Transaction",
difficulty:"Beginner",
title:"SQL Transaction",
shortDescription:"A transaction is a sequence of SQL operations executed as a single unit.",
syntax:`BEGIN TRANSACTION
SQL Statements
COMMIT / ROLLBACK;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=60000
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Consistency",
optimizationId:"TRANSACTION",
errorId:"TRANSACTION",
interviewId:"TRANSACTION",
interviewQuestions:["<b>Q:</b>What is Transaction?<br><b>A:</b>Group of SQL operations treated as one unit.","<b>Q:</b>Main purpose?<br><b>A:</b>Maintain data integrity."],
relatedTopics:["transaction","database transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BEGIN TRANSACTION
==================================*/

{
id:657,
category:"SQL Transactions",
subCategory:"BEGIN TRANSACTION",
difficulty:"Beginner",
title:"BEGIN TRANSACTION",
shortDescription:"BEGIN TRANSACTION starts a new transaction.",
syntax:`BEGIN TRANSACTION;`,
sql:`BEGIN TRANSACTION;

DELETE FROM Employees
WHERE EmployeeID=101;`,
keywordId:"BEGIN_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Start Controlled Operations",
optimizationId:"BEGIN_TRANSACTION",
errorId:"BEGIN_TRANSACTION",
interviewId:"BEGIN_TRANSACTION",
interviewQuestions:["<b>Q:</b>What does BEGIN TRANSACTION do?<br><b>A:</b>Starts transaction processing.","<b>Q:</b>Next step?<br><b>A:</b>COMMIT or ROLLBACK."],
relatedTopics:["begin transaction","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMMIT TRANSACTION
==================================*/

{
id:658,
category:"SQL Transactions",
subCategory:"COMMIT",
difficulty:"Beginner",
title:"COMMIT Transaction",
shortDescription:"COMMIT permanently saves transaction changes.",
syntax:`COMMIT TRANSACTION;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=70000
WHERE EmployeeID=102;

COMMIT;`,
keywordId:"COMMIT",
sampleDataId:"Employees",
businessCaseId:"Save Successful Changes",
optimizationId:"COMMIT",
errorId:"COMMIT",
interviewId:"COMMIT",
interviewQuestions:["<b>Q:</b>What does COMMIT do?<br><b>A:</b>Permanently saves changes.","<b>Q:</b>Can COMMIT be undone?<br><b>A:</b>No."],
relatedTopics:["commit","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ROLLBACK TRANSACTION
==================================*/

{
id:659,
category:"SQL Transactions",
subCategory:"ROLLBACK",
difficulty:"Beginner",
title:"ROLLBACK Transaction",
shortDescription:"ROLLBACK cancels transaction changes.",
syntax:`ROLLBACK TRANSACTION;`,
sql:`BEGIN TRANSACTION;

DELETE FROM Employees
WHERE EmployeeID=103;

ROLLBACK;`,
keywordId:"ROLLBACK",
sampleDataId:"Employees",
businessCaseId:"Undo Incorrect Changes",
optimizationId:"ROLLBACK",
errorId:"ROLLBACK",
interviewId:"ROLLBACK",
interviewQuestions:["<b>Q:</b>What does ROLLBACK do?<br><b>A:</b>Undo uncommitted changes.","<b>Q:</b>When used?<br><b>A:</b>When error occurs."],
relatedTopics:["rollback","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SAVEPOINT
==================================*/

{
id:660,
category:"SQL Transactions",
subCategory:"SAVEPOINT",
difficulty:"Intermediate",
title:"SAVEPOINT",
shortDescription:"SAVEPOINT creates a checkpoint inside a transaction.",
syntax:`SAVEPOINT savepoint_name;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=50000;

SAVEPOINT SalaryUpdate;`,
keywordId:"SAVEPOINT",
sampleDataId:"Employees",
businessCaseId:"Partial Transaction Recovery",
optimizationId:"SAVEPOINT",
errorId:"SAVEPOINT",
interviewId:"SAVEPOINT",
interviewQuestions:["<b>Q:</b>What is SAVEPOINT?<br><b>A:</b>A point to rollback within transaction.","<b>Q:</b>Benefit?<br><b>A:</b>Partial undo."],
relatedTopics:["savepoint","transaction","rollback","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRANSACTION CONTROL LANGUAGE (TCL)
==================================*/

{
id:661,
category:"SQL Transactions",
subCategory:"TCL",
difficulty:"Beginner",
title:"Transaction Control Language (TCL)",
shortDescription:"TCL commands manage database transactions.",
syntax:`COMMIT;
ROLLBACK;
SAVEPOINT;`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Salary=80000;

COMMIT;`,
keywordId:"TCL",
sampleDataId:"Employees",
businessCaseId:"Manage Data Changes",
optimizationId:"TCL",
errorId:"TCL",
interviewId:"TCL",
interviewQuestions:["<b>Q:</b>What is TCL?<br><b>A:</b>Commands used to manage transactions.","<b>Q:</b>Examples?<br><b>A:</b>COMMIT, ROLLBACK, SAVEPOINT."],
relatedTopics:["tcl","transaction","commit","rollback","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AUTO COMMIT
==================================*/

{
id:662,
category:"SQL Transactions",
subCategory:"AUTO COMMIT",
difficulty:"Intermediate",
title:"Auto Commit Mode",
shortDescription:"Auto Commit automatically saves each SQL statement.",
syntax:`SET AUTOCOMMIT ON;`,
sql:`INSERT INTO Employees
(EmployeeID,EmployeeName)
VALUES
(201,'Amit');`,
keywordId:"AUTO_COMMIT",
sampleDataId:"Employees",
businessCaseId:"Automatic Transaction Handling",
optimizationId:"AUTO_COMMIT",
errorId:"AUTO_COMMIT",
interviewId:"AUTO_COMMIT",
interviewQuestions:["<b>Q:</b>What is Auto Commit?<br><b>A:</b>Automatic transaction saving mode.","<b>Q:</b>Can we disable it?<br><b>A:</b>Yes, database dependent."],
relatedTopics:["auto commit","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXPLICIT TRANSACTION
==================================*/

{
id:663,
category:"SQL Transactions",
subCategory:"Explicit Transaction",
difficulty:"Intermediate",
title:"Explicit Transaction",
shortDescription:"Explicit transactions are manually controlled by developer.",
syntax:`BEGIN TRANSACTION
COMMIT / ROLLBACK`,
sql:`BEGIN TRANSACTION;

UPDATE Employees
SET Department='IT'
WHERE EmployeeID=101;

COMMIT;`,
keywordId:"EXPLICIT_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Control Critical Updates",
optimizationId:"EXPLICIT_TRANSACTION",
errorId:"EXPLICIT_TRANSACTION",
interviewId:"EXPLICIT_TRANSACTION",
interviewQuestions:["<b>Q:</b>What is Explicit Transaction?<br><b>A:</b>Transaction controlled manually.","<b>Q:</b>Difference from Auto Commit?<br><b>A:</b>Developer controls completion."],
relatedTopics:["explicit transaction","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 IMPLICIT TRANSACTION
==================================*/

{
id:664,
category:"SQL Transactions",
subCategory:"Implicit Transaction",
difficulty:"Advanced",
title:"Implicit Transaction",
shortDescription:"Database automatically starts a transaction after certain statements.",
syntax:`SET IMPLICIT_TRANSACTIONS ON;`,
sql:`SET IMPLICIT_TRANSACTIONS ON;

UPDATE Employees
SET Salary=90000;`,
keywordId:"IMPLICIT_TRANSACTION",
sampleDataId:"Employees",
businessCaseId:"Automatic Transaction Control",
optimizationId:"IMPLICIT_TRANSACTION",
errorId:"IMPLICIT_TRANSACTION",
interviewId:"IMPLICIT_TRANSACTION",
interviewQuestions:["<b>Q:</b>What is Implicit Transaction?<br><b>A:</b>Database starts transaction automatically.","<b>Q:</b>Need COMMIT?<br><b>A:</b>Yes."],
relatedTopics:["implicit transaction","transaction","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRANSACTION LOG
==================================*/

{
id:665,
category:"SQL Transactions",
subCategory:"Transaction Log",
difficulty:"Advanced",
title:"Transaction Log",
shortDescription:"Transaction Log records all database changes for recovery.",
syntax:`Transaction Log`,
sql:`UPDATE Employees
SET Salary=100000
WHERE EmployeeID=105;`,
keywordId:"TRANSACTION_LOG",
sampleDataId:"Employees",
businessCaseId:"Database Recovery",
optimizationId:"TRANSACTION_LOG",
errorId:"TRANSACTION_LOG",
interviewId:"TRANSACTION_LOG",
interviewQuestions:["<b>Q:</b>What is Transaction Log?<br><b>A:</b>Records database modifications.","<b>Q:</b>Purpose?<br><b>A:</b>Recovery and rollback."],
relatedTopics:["transaction log","recovery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL CONSTRAINTS
==================================*/

{
id:666,
category:"SQL Constraints",
subCategory:"Constraint",
difficulty:"Beginner",
title:"SQL Constraints",
shortDescription:"Constraints enforce rules on data stored in database tables.",
syntax:`CREATE TABLE table_name
(
column datatype CONSTRAINT
constraint_name
);
`,
sql:`CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
EmployeeName VARCHAR(100) NOT NULL
);`,
keywordId:"CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Maintain Data Accuracy",
optimizationId:"CONSTRAINT",
errorId:"CONSTRAINT",
interviewId:"CONSTRAINT",
interviewQuestions:["<b>Q:</b>What are Constraints?<br><b>A:</b>Rules applied on table columns.","<b>Q:</b>Examples?<br><b>A:</b>PRIMARY KEY, FOREIGN KEY, UNIQUE."],
relatedTopics:["constraint","database design","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PRIMARY KEY
==================================*/

{
id:667,
category:"SQL Constraints",
subCategory:"PRIMARY KEY",
difficulty:"Beginner",
title:"PRIMARY KEY Constraint",
shortDescription:"PRIMARY KEY uniquely identifies each row in a table.",
syntax:`column datatype PRIMARY KEY`,
sql:`CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
EmployeeName VARCHAR(100)
);`,
keywordId:"PRIMARY_KEY",
sampleDataId:"Employees",
businessCaseId:"Unique Record Identification",
optimizationId:"PRIMARY_KEY",
errorId:"PRIMARY_KEY",
interviewId:"PRIMARY_KEY",
interviewQuestions:["<b>Q:</b>What is PRIMARY KEY?<br><b>A:</b>Unique identifier for each record.","<b>Q:</b>Can primary key contain NULL?<br><b>A:</b>No."],
relatedTopics:["primary key","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FOREIGN KEY
==================================*/

{
id:668,
category:"SQL Constraints",
subCategory:"FOREIGN KEY",
difficulty:"Beginner",
title:"FOREIGN KEY Constraint",
shortDescription:"FOREIGN KEY creates relationship between tables.",
syntax:`FOREIGN KEY(column)
REFERENCES table(column)`,
sql:`CREATE TABLE Employees
(
EmployeeID INT,
DepartmentID INT,
FOREIGN KEY(DepartmentID)
REFERENCES Departments(DepartmentID)
);`,
keywordId:"FOREIGN_KEY",
sampleDataId:"Employees",
businessCaseId:"Maintain Table Relationships",
optimizationId:"FOREIGN_KEY",
errorId:"FOREIGN_KEY",
interviewId:"FOREIGN_KEY",
interviewQuestions:["<b>Q:</b>What is FOREIGN KEY?<br><b>A:</b>Column that links two tables.","<b>Q:</b>Can it contain duplicates?<br><b>A:</b>Yes."],
relatedTopics:["foreign key","relationship","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNIQUE CONSTRAINT
==================================*/

{
id:669,
category:"SQL Constraints",
subCategory:"UNIQUE",
difficulty:"Beginner",
title:"UNIQUE Constraint",
shortDescription:"UNIQUE ensures all values in a column are different.",
syntax:`column datatype UNIQUE`,
sql:`CREATE TABLE Users
(
Email VARCHAR(100) UNIQUE
);`,
keywordId:"UNIQUE",
sampleDataId:"Employees",
businessCaseId:"Prevent Duplicate Values",
optimizationId:"UNIQUE",
errorId:"UNIQUE",
interviewId:"UNIQUE",
interviewQuestions:["<b>Q:</b>What does UNIQUE do?<br><b>A:</b>Prevents duplicate values.","<b>Q:</b>Difference from PRIMARY KEY?<br><b>A:</b>Primary key cannot be NULL."],
relatedTopics:["unique constraint","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT NULL CONSTRAINT
==================================*/

{
id:670,
category:"SQL Constraints",
subCategory:"NOT NULL",
difficulty:"Beginner",
title:"NOT NULL Constraint",
shortDescription:"NOT NULL prevents empty values in a column.",
syntax:`column datatype NOT NULL`,
sql:`CREATE TABLE Employees
(
EmployeeName VARCHAR(100)
NOT NULL
);`,
keywordId:"NOT_NULL",
sampleDataId:"Employees",
businessCaseId:"Mandatory Data Fields",
optimizationId:"NOT_NULL",
errorId:"NOT_NULL",
interviewId:"NOT_NULL",
interviewQuestions:["<b>Q:</b>What does NOT NULL do?<br><b>A:</b>Prevents missing values.","<b>Q:</b>Can column have blank string?<br><b>A:</b>Yes, blank is different from NULL."],
relatedTopics:["not null","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHECK CONSTRAINT
==================================*/

{
id:671,
category:"SQL Constraints",
subCategory:"CHECK",
difficulty:"Beginner",
title:"CHECK Constraint",
shortDescription:"CHECK constraint validates values before storing data.",
syntax:`column datatype
CHECK(condition);`,
sql:`CREATE TABLE Employees
(
Age INT
CHECK(Age>=18)
);`,
keywordId:"CHECK",
sampleDataId:"Employees",
businessCaseId:"Validate Business Rules",
optimizationId:"CHECK",
errorId:"CHECK",
interviewId:"CHECK",
interviewQuestions:["<b>Q:</b>What is CHECK constraint?<br><b>A:</b>Validates data based on condition.","<b>Q:</b>Example?<br><b>A:</b>Salary must be positive."],
relatedTopics:["check constraint","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DEFAULT CONSTRAINT
==================================*/

{
id:672,
category:"SQL Constraints",
subCategory:"DEFAULT",
difficulty:"Beginner",
title:"DEFAULT Constraint",
shortDescription:"DEFAULT assigns a predefined value when no value is provided.",
syntax:`column datatype
DEFAULT value;`,
sql:`CREATE TABLE Employees
(
Status VARCHAR(20)
DEFAULT 'Active'
);`,
keywordId:"DEFAULT",
sampleDataId:"Employees",
businessCaseId:"Automatic Default Values",
optimizationId:"DEFAULT",
errorId:"DEFAULT",
interviewId:"DEFAULT",
interviewQuestions:["<b>Q:</b>What is DEFAULT constraint?<br><b>A:</b>Provides automatic value.","<b>Q:</b>When applied?<br><b>A:</b>When column value is missing."],
relatedTopics:["default constraint","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT NULL VS DEFAULT
==================================*/

{
id:673,
category:"SQL Constraints",
subCategory:"NOT NULL VS DEFAULT",
difficulty:"Intermediate",
title:"NOT NULL vs DEFAULT",
shortDescription:"NOT NULL requires value, DEFAULT provides value automatically.",
syntax:`NOT NULL
DEFAULT value`,
sql:`CREATE TABLE Employees
(
Status VARCHAR(20)
NOT NULL
DEFAULT 'Active'
);`,
keywordId:"NOT_NULL_DEFAULT",
sampleDataId:"Employees",
businessCaseId:"Data Quality Rules",
optimizationId:"NOT_NULL_DEFAULT",
errorId:"NOT_NULL_DEFAULT",
interviewId:"NOT_NULL_DEFAULT",
interviewQuestions:["<b>Q:</b>Difference NOT NULL and DEFAULT?<br><b>A:</b>NOT NULL blocks empty values, DEFAULT inserts value.","<b>Q:</b>Can both be used together?<br><b>A:</b>Yes."],
relatedTopics:["not null","default","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ADD CONSTRAINT
==================================*/

{
id:674,
category:"SQL Constraints",
subCategory:"ADD CONSTRAINT",
difficulty:"Intermediate",
title:"ADD CONSTRAINT Statement",
shortDescription:"ADD CONSTRAINT adds rules to an existing table.",
syntax:`ALTER TABLE table_name
ADD CONSTRAINT constraint_name
constraint_type;`,
sql:`ALTER TABLE Employees
ADD CONSTRAINT PK_Employee
PRIMARY KEY(EmployeeID);`,
keywordId:"ADD_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Modify Existing Tables",
optimizationId:"ADD_CONSTRAINT",
errorId:"ADD_CONSTRAINT",
interviewId:"ADD_CONSTRAINT",
interviewQuestions:["<b>Q:</b>Why ADD CONSTRAINT?<br><b>A:</b>Add rules after table creation.","<b>Q:</b>Command used?<br><b>A:</b>ALTER TABLE."],
relatedTopics:["add constraint","alter table","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP CONSTRAINT
==================================*/

{
id:675,
category:"SQL Constraints",
subCategory:"DROP CONSTRAINT",
difficulty:"Intermediate",
title:"DROP CONSTRAINT Statement",
shortDescription:"DROP CONSTRAINT removes an existing table rule.",
syntax:`ALTER TABLE table_name
DROP CONSTRAINT constraint_name;`,
sql:`ALTER TABLE Employees
DROP CONSTRAINT PK_Employee;`,
keywordId:"DROP_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Remove Data Restrictions",
optimizationId:"DROP_CONSTRAINT",
errorId:"DROP_CONSTRAINT",
interviewId:"DROP_CONSTRAINT",
interviewQuestions:["<b>Q:</b>What does DROP CONSTRAINT do?<br><b>A:</b>Removes constraint rule.","<b>Q:</b>Does it delete data?<br><b>A:</b>No."],
relatedTopics:["drop constraint","alter table","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHECK CONSTRAINT
==================================*/

{
id:671,
category:"SQL Constraints",
subCategory:"CHECK",
difficulty:"Beginner",
title:"CHECK Constraint",
shortDescription:"CHECK constraint validates values before storing data.",
syntax:`column datatype
CHECK(condition);`,
sql:`CREATE TABLE Employees
(
Age INT
CHECK(Age>=18)
);`,
keywordId:"CHECK",
sampleDataId:"Employees",
businessCaseId:"Validate Business Rules",
optimizationId:"CHECK",
errorId:"CHECK",
interviewId:"CHECK",
interviewQuestions:["<b>Q:</b>What is CHECK constraint?<br><b>A:</b>Validates data based on condition.","<b>Q:</b>Example?<br><b>A:</b>Salary must be positive."],
relatedTopics:["check constraint","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DEFAULT CONSTRAINT
==================================*/

{
id:672,
category:"SQL Constraints",
subCategory:"DEFAULT",
difficulty:"Beginner",
title:"DEFAULT Constraint",
shortDescription:"DEFAULT assigns a predefined value when no value is provided.",
syntax:`column datatype
DEFAULT value;`,
sql:`CREATE TABLE Employees
(
Status VARCHAR(20)
DEFAULT 'Active'
);`,
keywordId:"DEFAULT",
sampleDataId:"Employees",
businessCaseId:"Automatic Default Values",
optimizationId:"DEFAULT",
errorId:"DEFAULT",
interviewId:"DEFAULT",
interviewQuestions:["<b>Q:</b>What is DEFAULT constraint?<br><b>A:</b>Provides automatic value.","<b>Q:</b>When applied?<br><b>A:</b>When column value is missing."],
relatedTopics:["default constraint","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT NULL VS DEFAULT
==================================*/

{
id:673,
category:"SQL Constraints",
subCategory:"NOT NULL VS DEFAULT",
difficulty:"Intermediate",
title:"NOT NULL vs DEFAULT",
shortDescription:"NOT NULL requires value, DEFAULT provides value automatically.",
syntax:`NOT NULL
DEFAULT value`,
sql:`CREATE TABLE Employees
(
Status VARCHAR(20)
NOT NULL
DEFAULT 'Active'
);`,
keywordId:"NOT_NULL_DEFAULT",
sampleDataId:"Employees",
businessCaseId:"Data Quality Rules",
optimizationId:"NOT_NULL_DEFAULT",
errorId:"NOT_NULL_DEFAULT",
interviewId:"NOT_NULL_DEFAULT",
interviewQuestions:["<b>Q:</b>Difference NOT NULL and DEFAULT?<br><b>A:</b>NOT NULL blocks empty values, DEFAULT inserts value.","<b>Q:</b>Can both be used together?<br><b>A:</b>Yes."],
relatedTopics:["not null","default","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ADD CONSTRAINT
==================================*/

{
id:674,
category:"SQL Constraints",
subCategory:"ADD CONSTRAINT",
difficulty:"Intermediate",
title:"ADD CONSTRAINT Statement",
shortDescription:"ADD CONSTRAINT adds rules to an existing table.",
syntax:`ALTER TABLE table_name
ADD CONSTRAINT constraint_name
constraint_type;`,
sql:`ALTER TABLE Employees
ADD CONSTRAINT PK_Employee
PRIMARY KEY(EmployeeID);`,
keywordId:"ADD_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Modify Existing Tables",
optimizationId:"ADD_CONSTRAINT",
errorId:"ADD_CONSTRAINT",
interviewId:"ADD_CONSTRAINT",
interviewQuestions:["<b>Q:</b>Why ADD CONSTRAINT?<br><b>A:</b>Add rules after table creation.","<b>Q:</b>Command used?<br><b>A:</b>ALTER TABLE."],
relatedTopics:["add constraint","alter table","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP CONSTRAINT
==================================*/

{
id:675,
category:"SQL Constraints",
subCategory:"DROP CONSTRAINT",
difficulty:"Intermediate",
title:"DROP CONSTRAINT Statement",
shortDescription:"DROP CONSTRAINT removes an existing table rule.",
syntax:`ALTER TABLE table_name
DROP CONSTRAINT constraint_name;`,
sql:`ALTER TABLE Employees
DROP CONSTRAINT PK_Employee;`,
keywordId:"DROP_CONSTRAINT",
sampleDataId:"Employees",
businessCaseId:"Remove Data Restrictions",
optimizationId:"DROP_CONSTRAINT",
errorId:"DROP_CONSTRAINT",
interviewId:"DROP_CONSTRAINT",
interviewQuestions:["<b>Q:</b>What does DROP CONSTRAINT do?<br><b>A:</b>Removes constraint rule.","<b>Q:</b>Does it delete data?<br><b>A:</b>No."],
relatedTopics:["drop constraint","alter table","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL INDEXES
==================================*/

{
id:676,
category:"SQL Indexes",
subCategory:"INDEX",
difficulty:"Beginner",
title:"SQL INDEX",
shortDescription:"An INDEX improves the speed of data retrieval from tables.",
syntax:`CREATE INDEX index_name
ON table_name(column);`,
sql:`CREATE INDEX idx_employee_name
ON Employees(EmployeeName);`,
keywordId:"INDEX",
sampleDataId:"Employees",
businessCaseId:"Improve Search Performance",
optimizationId:"INDEX",
errorId:"INDEX",
interviewId:"INDEX",
interviewQuestions:["<b>Q:</b>What is INDEX?<br><b>A:</b>Database object that speeds up searches.","<b>Q:</b>Does index store duplicate data?<br><b>A:</b>No, it stores references."],
relatedTopics:["index","database performance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE INDEX
==================================*/

{
id:677,
category:"SQL Indexes",
subCategory:"CREATE INDEX",
difficulty:"Beginner",
title:"CREATE INDEX Statement",
shortDescription:"CREATE INDEX creates an index on one or more columns.",
syntax:`CREATE INDEX index_name
ON table_name(column);`,
sql:`CREATE INDEX idx_salary
ON Employees(Salary);`,
keywordId:"CREATE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Faster Filtering Operations",
optimizationId:"CREATE_INDEX",
errorId:"CREATE_INDEX",
interviewId:"CREATE_INDEX",
interviewQuestions:["<b>Q:</b>How create index?<br><b>A:</b>Using CREATE INDEX.","<b>Q:</b>Where used?<br><b>A:</b>Frequently searched columns."],
relatedTopics:["create index","index","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UNIQUE INDEX
==================================*/

{
id:678,
category:"SQL Indexes",
subCategory:"UNIQUE INDEX",
difficulty:"Intermediate",
title:"UNIQUE INDEX",
shortDescription:"UNIQUE INDEX prevents duplicate values and improves lookup speed.",
syntax:`CREATE UNIQUE INDEX index_name
ON table_name(column);`,
sql:`CREATE UNIQUE INDEX idx_email
ON Employees(Email);`,
keywordId:"UNIQUE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Ensure Unique Data",
optimizationId:"UNIQUE_INDEX",
errorId:"UNIQUE_INDEX",
interviewId:"UNIQUE_INDEX",
interviewQuestions:["<b>Q:</b>What is UNIQUE INDEX?<br><b>A:</b>Index that allows only unique values.","<b>Q:</b>Difference from UNIQUE constraint?<br><b>A:</b>Both enforce uniqueness but implemented differently."],
relatedTopics:["unique index","index","constraint","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CLUSTERED INDEX
==================================*/

{
id:679,
category:"SQL Indexes",
subCategory:"CLUSTERED INDEX",
difficulty:"Intermediate",
title:"Clustered Index",
shortDescription:"Clustered index determines the physical order of data rows.",
syntax:`CREATE CLUSTERED INDEX
index_name
ON table(column);`,
sql:`CREATE CLUSTERED INDEX idx_employee_id
ON Employees(EmployeeID);`,
keywordId:"CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Fast Range Searching",
optimizationId:"CLUSTERED_INDEX",
errorId:"CLUSTERED_INDEX",
interviewId:"CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is Clustered Index?<br><b>A:</b>Controls physical row storage order.","<b>Q:</b>How many clustered indexes per table?<br><b>A:</b>Only one."],
relatedTopics:["clustered index","index","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NON CLUSTERED INDEX
==================================*/

{
id:680,
category:"SQL Indexes",
subCategory:"NON CLUSTERED INDEX",
difficulty:"Intermediate",
title:"Non Clustered Index",
shortDescription:"Non clustered index stores separate structure with pointers to data.",
syntax:`CREATE NONCLUSTERED INDEX
index_name
ON table(column);`,
sql:`CREATE NONCLUSTERED INDEX idx_department
ON Employees(Department);`,
keywordId:"NON_CLUSTERED_INDEX",
sampleDataId:"Employees",
businessCaseId:"Improve Query Lookup",
optimizationId:"NON_CLUSTERED_INDEX",
errorId:"NON_CLUSTERED_INDEX",
interviewId:"NON_CLUSTERED_INDEX",
interviewQuestions:["<b>Q:</b>What is Non Clustered Index?<br><b>A:</b>Separate index structure pointing to rows.","<b>Q:</b>How many allowed?<br><b>A:</b>Multiple."],
relatedTopics:["non clustered index","index","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMPOSITE INDEX
==================================*/

{
id:681,
category:"SQL Indexes",
subCategory:"COMPOSITE INDEX",
difficulty:"Intermediate",
title:"Composite Index",
shortDescription:"Composite index contains multiple columns in a single index.",
syntax:`CREATE INDEX index_name
ON table_name(column1,column2);`,
sql:`CREATE INDEX idx_emp_dept_salary
ON Employees(Department,Salary);`,
keywordId:"COMPOSITE_INDEX",
sampleDataId:"Employees",
businessCaseId:"Optimize Multi Column Searches",
optimizationId:"COMPOSITE_INDEX",
errorId:"COMPOSITE_INDEX",
interviewId:"COMPOSITE_INDEX",
interviewQuestions:["<b>Q:</b>What is Composite Index?<br><b>A:</b>Index created on multiple columns.","<b>Q:</b>Column order important?<br><b>A:</b>Yes, query performance depends on order."],
relatedTopics:["composite index","multi column index","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COVERING INDEX
==================================*/

{
id:682,
category:"SQL Indexes",
subCategory:"COVERING INDEX",
difficulty:"Advanced",
title:"Covering Index",
shortDescription:"Covering index contains all columns required by a query.",
syntax:`CREATE INDEX index_name
ON table(column)
INCLUDE(column);`,
sql:`CREATE INDEX idx_employee_cover
ON Employees(EmployeeID)
INCLUDE(EmployeeName,Salary);`,
keywordId:"COVERING_INDEX",
sampleDataId:"Employees",
businessCaseId:"Avoid Extra Table Lookup",
optimizationId:"COVERING_INDEX",
errorId:"COVERING_INDEX",
interviewId:"COVERING_INDEX",
interviewQuestions:["<b>Q:</b>What is Covering Index?<br><b>A:</b>Index that contains all required query columns.","<b>Q:</b>Benefit?<br><b>A:</b>Improves query speed."],
relatedTopics:["covering index","include column","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEX WITH INCLUDE
==================================*/

{
id:683,
category:"SQL Indexes",
subCategory:"INCLUDE COLUMN",
difficulty:"Advanced",
title:"Index INCLUDE Column",
shortDescription:"INCLUDE stores additional non-key columns inside an index.",
syntax:`CREATE INDEX index_name
ON table(key_column)
INCLUDE(column);`,
sql:`CREATE INDEX idx_salary_search
ON Employees(Department)
INCLUDE(Salary,EmployeeName);`,
keywordId:"INDEX_INCLUDE",
sampleDataId:"Employees",
businessCaseId:"Improve Select Performance",
optimizationId:"INDEX_INCLUDE",
errorId:"INDEX_INCLUDE",
interviewId:"INDEX_INCLUDE",
interviewQuestions:["<b>Q:</b>Why use INCLUDE?<br><b>A:</b>Store extra columns without adding index keys.","<b>Q:</b>Supported in SQL Server?<br><b>A:</b>Yes."],
relatedTopics:["include column","covering index","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP INDEX
==================================*/

{
id:684,
category:"SQL Indexes",
subCategory:"DROP INDEX",
difficulty:"Beginner",
title:"DROP INDEX Statement",
shortDescription:"DROP INDEX removes an existing index.",
syntax:`DROP INDEX index_name
ON table_name;`,
sql:`DROP INDEX idx_salary
ON Employees;`,
keywordId:"DROP_INDEX",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Indexes",
optimizationId:"DROP_INDEX",
errorId:"DROP_INDEX",
interviewId:"DROP_INDEX",
interviewQuestions:["<b>Q:</b>What does DROP INDEX do?<br><b>A:</b>Deletes an index.","<b>Q:</b>Does it delete table data?<br><b>A:</b>No."],
relatedTopics:["drop index","index","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INDEX REBUILD
==================================*/

{
id:685,
category:"SQL Indexes",
subCategory:"INDEX REBUILD",
difficulty:"Advanced",
title:"Index Rebuild",
shortDescription:"Index rebuild recreates indexes to improve performance.",
syntax:`ALTER INDEX index_name
ON table_name
REBUILD;`,
sql:`ALTER INDEX idx_employee_name
ON Employees
REBUILD;`,
keywordId:"INDEX_REBUILD",
sampleDataId:"Employees",
businessCaseId:"Maintain Database Performance",
optimizationId:"INDEX_REBUILD",
errorId:"INDEX_REBUILD",
interviewId:"INDEX_REBUILD",
interviewQuestions:["<b>Q:</b>Why rebuild index?<br><b>A:</b>Remove fragmentation.","<b>Q:</b>When used?<br><b>A:</b>During database maintenance."],
relatedTopics:["index rebuild","index maintenance","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL FUNCTIONS
==================================*/

{
id:686,
category:"SQL Functions",
subCategory:"Function",
difficulty:"Beginner",
title:"SQL Functions",
shortDescription:"Functions perform calculations and return a value.",
syntax:`SELECT
function_name(column)
FROM table;`,
sql:`SELECT
UPPER(EmployeeName)
FROM Employees;`,
keywordId:"FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Perform Data Calculations",
optimizationId:"FUNCTION",
errorId:"FUNCTION",
interviewId:"FUNCTION",
interviewQuestions:["<b>Q:</b>What is SQL Function?<br><b>A:</b>A reusable block that returns a value.","<b>Q:</b>Types of functions?<br><b>A:</b>Built-in and User Defined."],
relatedTopics:["function","sql functions","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BUILT-IN FUNCTION
==================================*/

{
id:687,
category:"SQL Functions",
subCategory:"BUILT-IN FUNCTION",
difficulty:"Beginner",
title:"Built-in SQL Function",
shortDescription:"Built-in functions are predefined database functions.",
syntax:`SELECT
FUNCTION_NAME(value);`,
sql:`SELECT
GETDATE();`,
keywordId:"BUILT_IN_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Quick Data Processing",
optimizationId:"BUILT_IN_FUNCTION",
errorId:"BUILT_IN_FUNCTION",
interviewId:"BUILT_IN_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Built-in Functions?<br><b>A:</b>Functions provided by database.","<b>Q:</b>Example?<br><b>A:</b>SUM, COUNT, GETDATE."],
relatedTopics:["built in function","sql functions","sql interview","sql examples","sql server","sql"]
},

/*==================================
 USER DEFINED FUNCTION
==================================*/

{
id:688,
category:"SQL Functions",
subCategory:"USER DEFINED FUNCTION",
difficulty:"Intermediate",
title:"User Defined Function (UDF)",
shortDescription:"A custom function created by the developer.",
syntax:`CREATE FUNCTION function_name()
RETURNS datatype
AS
BEGIN
RETURN value;
END;`,
sql:`CREATE FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*12;
END;`,
keywordId:"USER_DEFINED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Create Reusable Business Logic",
optimizationId:"USER_DEFINED_FUNCTION",
errorId:"USER_DEFINED_FUNCTION",
interviewId:"USER_DEFINED_FUNCTION",
interviewQuestions:["<b>Q:</b>What is UDF?<br><b>A:</b>Function created by user.","<b>Q:</b>Benefit?<br><b>A:</b>Reusable calculations."],
relatedTopics:["udf","user defined function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SCALAR FUNCTION
==================================*/

{
id:689,
category:"SQL Functions",
subCategory:"SCALAR FUNCTION",
difficulty:"Intermediate",
title:"Scalar Function",
shortDescription:"Scalar function returns a single value.",
syntax:`CREATE FUNCTION name()
RETURNS datatype`,
sql:`CREATE FUNCTION CalculateBonus
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*10/100;
END;`,
keywordId:"SCALAR_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Return Single Calculated Value",
optimizationId:"SCALAR_FUNCTION",
errorId:"SCALAR_FUNCTION",
interviewId:"SCALAR_FUNCTION",
interviewQuestions:["<b>Q:</b>What does Scalar Function return?<br><b>A:</b>Single value.","<b>Q:</b>Example?<br><b>A:</b>Total amount calculation."],
relatedTopics:["scalar function","function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TABLE VALUED FUNCTION
==================================*/

{
id:690,
category:"SQL Functions",
subCategory:"TABLE VALUED FUNCTION",
difficulty:"Advanced",
title:"Table Valued Function",
shortDescription:"Returns a table as the function output.",
syntax:`CREATE FUNCTION name()
RETURNS TABLE
AS
RETURN
(
SELECT query
);`,
sql:`CREATE FUNCTION GetITEmployees()
RETURNS TABLE
AS
RETURN
(
SELECT *
FROM Employees
WHERE Department='IT'
);`,
keywordId:"TABLE_VALUED_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Reusable Table Queries",
optimizationId:"TABLE_VALUED_FUNCTION",
errorId:"TABLE_VALUED_FUNCTION",
interviewId:"TABLE_VALUED_FUNCTION",
interviewQuestions:["<b>Q:</b>What does Table Valued Function return?<br><b>A:</b>A table.","<b>Q:</b>Use case?<br><b>A:</b>Reusable result sets."],
relatedTopics:["table valued function","tvf","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL AGGREGATE FUNCTIONS
==================================*/

{
id:691,
category:"SQL Functions",
subCategory:"AGGREGATE FUNCTION",
difficulty:"Beginner",
title:"Aggregate Functions",
shortDescription:"Aggregate functions perform calculations on multiple rows.",
syntax:`SELECT
FUNCTION(column)
FROM table;`,
sql:`SELECT
AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"AGGREGATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Generate Summary Reports",
optimizationId:"AGGREGATE_FUNCTION",
errorId:"AGGREGATE_FUNCTION",
interviewId:"AGGREGATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Aggregate Functions?<br><b>A:</b>Functions that calculate values from multiple rows.","<b>Q:</b>Examples?<br><b>A:</b>SUM, AVG, COUNT, MIN, MAX."],
relatedTopics:["aggregate function","sql functions","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COUNT FUNCTION
==================================*/

{
id:692,
category:"SQL Functions",
subCategory:"COUNT",
difficulty:"Beginner",
title:"COUNT Function",
shortDescription:"COUNT returns the number of rows.",
syntax:`SELECT COUNT(column)
FROM table;`,
sql:`SELECT
COUNT(*) AS TotalEmployees
FROM Employees;`,
keywordId:"COUNT",
sampleDataId:"Employees",
businessCaseId:"Count Total Records",
optimizationId:"COUNT",
errorId:"COUNT",
interviewId:"COUNT",
interviewQuestions:["<b>Q:</b>What does COUNT do?<br><b>A:</b>Counts rows.","<b>Q:</b>COUNT(*) counts what?<br><b>A:</b>All rows including NULL columns."],
relatedTopics:["count function","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUM FUNCTION
==================================*/

{
id:693,
category:"SQL Functions",
subCategory:"SUM",
difficulty:"Beginner",
title:"SUM Function",
shortDescription:"SUM calculates the total of numeric values.",
syntax:`SELECT SUM(column)
FROM table;`,
sql:`SELECT
SUM(Salary) AS TotalSalary
FROM Employees;`,
keywordId:"SUM",
sampleDataId:"Employees",
businessCaseId:"Calculate Total Amounts",
optimizationId:"SUM",
errorId:"SUM",
interviewId:"SUM",
interviewQuestions:["<b>Q:</b>What does SUM do?<br><b>A:</b>Adds numeric values.","<b>Q:</b>Can SUM work on text?<br><b>A:</b>No."],
relatedTopics:["sum function","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AVG FUNCTION
==================================*/

{
id:694,
category:"SQL Functions",
subCategory:"AVG",
difficulty:"Beginner",
title:"AVG Function",
shortDescription:"AVG calculates the average value.",
syntax:`SELECT AVG(column)
FROM table;`,
sql:`SELECT
AVG(Salary) AS AverageSalary
FROM Employees;`,
keywordId:"AVG",
sampleDataId:"Employees",
businessCaseId:"Calculate Average Metrics",
optimizationId:"AVG",
errorId:"AVG",
interviewId:"AVG",
interviewQuestions:["<b>Q:</b>What does AVG do?<br><b>A:</b>Returns average value.","<b>Q:</b>Example?<br><b>A:</b>Average employee salary."],
relatedTopics:["avg function","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MIN FUNCTION
==================================*/

{
id:695,
category:"SQL Functions",
subCategory:"MIN",
difficulty:"Beginner",
title:"MIN Function",
shortDescription:"MIN returns the smallest value.",
syntax:`SELECT MIN(column)
FROM table;`,
sql:`SELECT
MIN(Salary) AS LowestSalary
FROM Employees;`,
keywordId:"MIN",
sampleDataId:"Employees",
businessCaseId:"Find Minimum Values",
optimizationId:"MIN",
errorId:"MIN",
interviewId:"MIN",
interviewQuestions:["<b>Q:</b>What does MIN do?<br><b>A:</b>Returns lowest value.","<b>Q:</b>Use case?<br><b>A:</b>Minimum salary or price."],
relatedTopics:["min function","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MAX FUNCTION
==================================*/

{
id:696,
category:"SQL Functions",
subCategory:"MAX",
difficulty:"Beginner",
title:"MAX Function",
shortDescription:"MAX returns the highest value from a column.",
syntax:`SELECT MAX(column)
FROM table;`,
sql:`SELECT
MAX(Salary) AS HighestSalary
FROM Employees;`,
keywordId:"MAX",
sampleDataId:"Employees",
businessCaseId:"Find Maximum Values",
optimizationId:"MAX",
errorId:"MAX",
interviewId:"MAX",
interviewQuestions:["<b>Q:</b>What does MAX do?<br><b>A:</b>Returns highest value.","<b>Q:</b>Example?<br><b>A:</b>Highest employee salary."],
relatedTopics:["max function","aggregate function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DISTINCT FUNCTION
==================================*/

{
id:697,
category:"SQL Functions",
subCategory:"DISTINCT",
difficulty:"Beginner",
title:"DISTINCT Keyword",
shortDescription:"DISTINCT removes duplicate values from result.",
syntax:`SELECT DISTINCT column
FROM table;`,
sql:`SELECT DISTINCT
Department
FROM Employees;`,
keywordId:"DISTINCT",
sampleDataId:"Employees",
businessCaseId:"Find Unique Values",
optimizationId:"DISTINCT",
errorId:"DISTINCT",
interviewId:"DISTINCT",
interviewQuestions:["<b>Q:</b>What does DISTINCT do?<br><b>A:</b>Removes duplicate records.","<b>Q:</b>Can DISTINCT work with multiple columns?<br><b>A:</b>Yes."],
relatedTopics:["distinct","unique values","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STRING FUNCTIONS
==================================*/

{
id:698,
category:"SQL Functions",
subCategory:"STRING FUNCTION",
difficulty:"Beginner",
title:"String Functions",
shortDescription:"String functions manipulate text values.",
syntax:`SELECT
STRING_FUNCTION(column)
FROM table;`,
sql:`SELECT
UPPER(EmployeeName)
FROM Employees;`,
keywordId:"STRING_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Clean and Format Text Data",
optimizationId:"STRING_FUNCTION",
errorId:"STRING_FUNCTION",
interviewId:"STRING_FUNCTION",
interviewQuestions:["<b>Q:</b>What are String Functions?<br><b>A:</b>Functions used for text operations.","<b>Q:</b>Examples?<br><b>A:</b>UPPER, LOWER, CONCAT."],
relatedTopics:["string function","sql functions","sql interview","sql examples","sql server","sql"]
},

/*==================================
 UPPER FUNCTION
==================================*/

{
id:699,
category:"SQL Functions",
subCategory:"UPPER",
difficulty:"Beginner",
title:"UPPER Function",
shortDescription:"UPPER converts text into uppercase letters.",
syntax:`SELECT UPPER(column)
FROM table;`,
sql:`SELECT
UPPER(EmployeeName) AS NameUpper
FROM Employees;`,
keywordId:"UPPER",
sampleDataId:"Employees",
businessCaseId:"Standardize Text Format",
optimizationId:"UPPER",
errorId:"UPPER",
interviewId:"UPPER",
interviewQuestions:["<b>Q:</b>What does UPPER do?<br><b>A:</b>Converts text to capital letters.","<b>Q:</b>Does it change original data?<br><b>A:</b>No, only output."],
relatedTopics:["upper function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LOWER FUNCTION
==================================*/

{
id:700,
category:"SQL Functions",
subCategory:"LOWER",
difficulty:"Beginner",
title:"LOWER Function",
shortDescription:"LOWER converts text into lowercase letters.",
syntax:`SELECT LOWER(column)
FROM table;`,
sql:`SELECT
LOWER(EmployeeName) AS NameLower
FROM Employees;`,
keywordId:"LOWER",
sampleDataId:"Employees",
businessCaseId:"Normalize Text Values",
optimizationId:"LOWER",
errorId:"LOWER",
interviewId:"LOWER",
interviewQuestions:["<b>Q:</b>What does LOWER do?<br><b>A:</b>Converts text to small letters.","<b>Q:</b>Does it update table?<br><b>A:</b>No."],
relatedTopics:["lower function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEN FUNCTION
==================================*/

{
id:701,
category:"SQL Functions",
subCategory:"LEN",
difficulty:"Beginner",
title:"LEN Function",
shortDescription:"LEN returns the number of characters in a string.",
syntax:`SELECT LEN(column)
FROM table;`,
sql:`SELECT
EmployeeName,
LEN(EmployeeName) AS NameLength
FROM Employees;`,
keywordId:"LEN",
sampleDataId:"Employees",
businessCaseId:"Check Text Length",
optimizationId:"LEN",
errorId:"LEN",
interviewId:"LEN",
interviewQuestions:["<b>Q:</b>What does LEN do?<br><b>A:</b>Counts characters in text.","<b>Q:</b>Does LEN count spaces?<br><b>A:</b>Depends on database behavior."],
relatedTopics:["len function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONCAT FUNCTION
==================================*/

{
id:702,
category:"SQL Functions",
subCategory:"CONCAT",
difficulty:"Beginner",
title:"CONCAT Function",
shortDescription:"CONCAT joins multiple strings together.",
syntax:`SELECT CONCAT(value1,value2);`,
sql:`SELECT
CONCAT(EmployeeName,' - ',Department)
AS EmployeeDetails
FROM Employees;`,
keywordId:"CONCAT",
sampleDataId:"Employees",
businessCaseId:"Combine Text Fields",
optimizationId:"CONCAT",
errorId:"CONCAT",
interviewId:"CONCAT",
interviewQuestions:["<b>Q:</b>What does CONCAT do?<br><b>A:</b>Combines multiple strings.","<b>Q:</b>Alternative operator?<br><b>A:</b>Plus (+) in SQL Server."],
relatedTopics:["concat","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBSTRING FUNCTION
==================================*/

{
id:703,
category:"SQL Functions",
subCategory:"SUBSTRING",
difficulty:"Intermediate",
title:"SUBSTRING Function",
shortDescription:"SUBSTRING extracts part of a string.",
syntax:`SUBSTRING(expression,start,length);`,
sql:`SELECT
SUBSTRING(EmployeeName,1,5)
AS ShortName
FROM Employees;`,
keywordId:"SUBSTRING",
sampleDataId:"Employees",
businessCaseId:"Extract Text Portions",
optimizationId:"SUBSTRING",
errorId:"SUBSTRING",
interviewId:"SUBSTRING",
interviewQuestions:["<b>Q:</b>What does SUBSTRING do?<br><b>A:</b>Returns part of text.","<b>Q:</b>Common use?<br><b>A:</b>Extract codes or IDs."],
relatedTopics:["substring","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT FUNCTION
==================================*/

{
id:704,
category:"SQL Functions",
subCategory:"LEFT",
difficulty:"Beginner",
title:"LEFT Function",
shortDescription:"LEFT returns characters from the beginning of a string.",
syntax:`LEFT(string,length);`,
sql:`SELECT
LEFT(EmployeeName,3)
AS FirstCharacters
FROM Employees;`,
keywordId:"LEFT",
sampleDataId:"Employees",
businessCaseId:"Extract Starting Characters",
optimizationId:"LEFT",
errorId:"LEFT",
interviewId:"LEFT",
interviewQuestions:["<b>Q:</b>What does LEFT do?<br><b>A:</b>Returns characters from left side.","<b>Q:</b>Example?<br><b>A:</b>Extract first name code."],
relatedTopics:["left function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT FUNCTION
==================================*/

{
id:705,
category:"SQL Functions",
subCategory:"RIGHT",
difficulty:"Beginner",
title:"RIGHT Function",
shortDescription:"RIGHT returns characters from the end of a string.",
syntax:`RIGHT(string,length);`,
sql:`SELECT
RIGHT(EmployeeName,3)
AS LastCharacters
FROM Employees;`,
keywordId:"RIGHT",
sampleDataId:"Employees",
businessCaseId:"Extract Ending Characters",
optimizationId:"RIGHT",
errorId:"RIGHT",
interviewId:"RIGHT",
interviewQuestions:["<b>Q:</b>What does RIGHT do?<br><b>A:</b>Returns characters from right side.","<b>Q:</b>Example?<br><b>A:</b>Extract last digits of code."],
relatedTopics:["right function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRIM FUNCTION
==================================*/

{
id:706,
category:"SQL Functions",
subCategory:"TRIM",
difficulty:"Beginner",
title:"TRIM Function",
shortDescription:"TRIM removes unwanted spaces from beginning and end of text.",
syntax:`TRIM(string);`,
sql:`SELECT
TRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"TRIM",
sampleDataId:"Employees",
businessCaseId:"Clean Text Data",
optimizationId:"TRIM",
errorId:"TRIM",
interviewId:"TRIM",
interviewQuestions:["<b>Q:</b>What does TRIM do?<br><b>A:</b>Removes extra spaces.","<b>Q:</b>Why use TRIM?<br><b>A:</b>Improve data quality."],
relatedTopics:["trim function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LTRIM FUNCTION
==================================*/

{
id:707,
category:"SQL Functions",
subCategory:"LTRIM",
difficulty:"Beginner",
title:"LTRIM Function",
shortDescription:"LTRIM removes spaces from the left side of text.",
syntax:`LTRIM(string);`,
sql:`SELECT
LTRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"LTRIM",
sampleDataId:"Employees",
businessCaseId:"Remove Leading Spaces",
optimizationId:"LTRIM",
errorId:"LTRIM",
interviewId:"LTRIM",
interviewQuestions:["<b>Q:</b>What does LTRIM remove?<br><b>A:</b>Leading spaces.","<b>Q:</b>Difference from TRIM?<br><b>A:</b>TRIM removes both sides."],
relatedTopics:["ltrim","trim","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RTRIM FUNCTION
==================================*/

{
id:708,
category:"SQL Functions",
subCategory:"RTRIM",
difficulty:"Beginner",
title:"RTRIM Function",
shortDescription:"RTRIM removes spaces from the right side of text.",
syntax:`RTRIM(string);`,
sql:`SELECT
RTRIM(EmployeeName)
AS CleanName
FROM Employees;`,
keywordId:"RTRIM",
sampleDataId:"Employees",
businessCaseId:"Remove Trailing Spaces",
optimizationId:"RTRIM",
errorId:"RTRIM",
interviewId:"RTRIM",
interviewQuestions:["<b>Q:</b>What does RTRIM remove?<br><b>A:</b>Trailing spaces.","<b>Q:</b>Where useful?<br><b>A:</b>Data cleaning."],
relatedTopics:["rtrim","trim","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REPLACE FUNCTION
==================================*/

{
id:709,
category:"SQL Functions",
subCategory:"REPLACE",
difficulty:"Beginner",
title:"REPLACE Function",
shortDescription:"REPLACE substitutes one string value with another.",
syntax:`REPLACE(string,
old_value,
new_value);`,
sql:`SELECT
REPLACE(EmployeeName,' ','_')
AS UpdatedName
FROM Employees;`,
keywordId:"REPLACE",
sampleDataId:"Employees",
businessCaseId:"Modify Text Values",
optimizationId:"REPLACE",
errorId:"REPLACE",
interviewId:"REPLACE",
interviewQuestions:["<b>Q:</b>What does REPLACE do?<br><b>A:</b>Replaces matching text.","<b>Q:</b>Does it update table?<br><b>A:</b>No, unless used with UPDATE."],
relatedTopics:["replace function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CHARINDEX FUNCTION
==================================*/

{
id:710,
category:"SQL Functions",
subCategory:"CHARINDEX",
difficulty:"Intermediate",
title:"CHARINDEX Function",
shortDescription:"CHARINDEX finds the position of a character or text inside a string.",
syntax:`CHARINDEX(search,
expression);`,
sql:`SELECT
CHARINDEX('IT',Department)
AS Position
FROM Employees;`,
keywordId:"CHARINDEX",
sampleDataId:"Employees",
businessCaseId:"Search Text Position",
optimizationId:"CHARINDEX",
errorId:"CHARINDEX",
interviewId:"CHARINDEX",
interviewQuestions:["<b>Q:</b>What does CHARINDEX do?<br><b>A:</b>Finds starting position of text.","<b>Q:</b>Returns what if not found?<br><b>A:</b>0."],
relatedTopics:["charindex","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PATINDEX FUNCTION
==================================*/

{
id:711,
category:"SQL Functions",
subCategory:"PATINDEX",
difficulty:"Intermediate",
title:"PATINDEX Function",
shortDescription:"PATINDEX searches for a pattern position inside a string.",
syntax:`PATINDEX('%pattern%',
expression);`,
sql:`SELECT
PATINDEX('%SQL%', 'Learn SQL Server')
AS Position;`,
keywordId:"PATINDEX",
sampleDataId:"Employees",
businessCaseId:"Pattern Searching In Text",
optimizationId:"PATINDEX",
errorId:"PATINDEX",
interviewId:"PATINDEX",
interviewQuestions:["<b>Q:</b>What does PATINDEX do?<br><b>A:</b>Finds pattern position.","<b>Q:</b>Difference from CHARINDEX?<br><b>A:</b>PATINDEX supports patterns."],
relatedTopics:["patindex","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STUFF FUNCTION
==================================*/

{
id:712,
category:"SQL Functions",
subCategory:"STUFF",
difficulty:"Intermediate",
title:"STUFF Function",
shortDescription:"STUFF deletes and inserts characters at a specified position.",
syntax:`STUFF(string,
start,
length,
replace_string);`,
sql:`SELECT
STUFF('SQLServer',4,6,'Database')
AS Result;`,
keywordId:"STUFF",
sampleDataId:"Employees",
businessCaseId:"Modify String Portions",
optimizationId:"STUFF",
errorId:"STUFF",
interviewId:"STUFF",
interviewQuestions:["<b>Q:</b>What does STUFF do?<br><b>A:</b>Deletes and inserts text.","<b>Q:</b>Common use?<br><b>A:</b>String replacement."],
relatedTopics:["stuff function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 REPLICATE FUNCTION
==================================*/

{
id:713,
category:"SQL Functions",
subCategory:"REPLICATE",
difficulty:"Beginner",
title:"REPLICATE Function",
shortDescription:"REPLICATE repeats a string multiple times.",
syntax:`REPLICATE(string,
number);`,
sql:`SELECT
REPLICATE('*',5)
AS MaskValue;`,
keywordId:"REPLICATE",
sampleDataId:"Employees",
businessCaseId:"Create Masked Output",
optimizationId:"REPLICATE",
errorId:"REPLICATE",
interviewId:"REPLICATE",
interviewQuestions:["<b>Q:</b>What does REPLICATE do?<br><b>A:</b>Repeats text value.","<b>Q:</b>Example?<br><b>A:</b>Masking sensitive data."],
relatedTopics:["replicate","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SPACE FUNCTION
==================================*/

{
id:714,
category:"SQL Functions",
subCategory:"SPACE",
difficulty:"Beginner",
title:"SPACE Function",
shortDescription:"SPACE generates a specified number of blank spaces.",
syntax:`SPACE(number);`,
sql:`SELECT
'SQL'+SPACE(5)+'Server'
AS Result;`,
keywordId:"SPACE",
sampleDataId:"Employees",
businessCaseId:"Format Text Output",
optimizationId:"SPACE",
errorId:"SPACE",
interviewId:"SPACE",
interviewQuestions:["<b>Q:</b>What does SPACE do?<br><b>A:</b>Creates blank spaces.","<b>Q:</b>Where useful?<br><b>A:</b>Text formatting."],
relatedTopics:["space function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FORMAT FUNCTION
==================================*/

{
id:715,
category:"SQL Functions",
subCategory:"FORMAT",
difficulty:"Intermediate",
title:"FORMAT Function",
shortDescription:"FORMAT changes values into a formatted string.",
syntax:`FORMAT(value,
format);`,
sql:`SELECT
FORMAT(Salary,'C')
AS FormattedSalary
FROM Employees;`,
keywordId:"FORMAT",
sampleDataId:"Employees",
businessCaseId:"Display User Friendly Values",
optimizationId:"FORMAT",
errorId:"FORMAT",
interviewId:"FORMAT",
interviewQuestions:["<b>Q:</b>What does FORMAT do?<br><b>A:</b>Formats values as text.","<b>Q:</b>Common use?<br><b>A:</b>Currency and date formatting."],
relatedTopics:["format function","string function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATE FUNCTIONS
==================================*/

{
id:716,
category:"SQL Functions",
subCategory:"DATE FUNCTION",
difficulty:"Beginner",
title:"Date Functions",
shortDescription:"Date functions perform operations on date and time values.",
syntax:`SELECT
DATE_FUNCTION(date);`,
sql:`SELECT
GETDATE()
AS CurrentDate;`,
keywordId:"DATE_FUNCTION",
sampleDataId:"Employees",
businessCaseId:"Date Based Reporting",
optimizationId:"DATE_FUNCTION",
errorId:"DATE_FUNCTION",
interviewId:"DATE_FUNCTION",
interviewQuestions:["<b>Q:</b>What are Date Functions?<br><b>A:</b>Functions used for date calculations.","<b>Q:</b>Examples?<br><b>A:</b>GETDATE, DATEADD, DATEDIFF."],
relatedTopics:["date function","sql functions","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GETDATE FUNCTION
==================================*/

{
id:717,
category:"SQL Functions",
subCategory:"GETDATE",
difficulty:"Beginner",
title:"GETDATE Function",
shortDescription:"GETDATE returns the current date and time.",
syntax:`GETDATE();`,
sql:`SELECT
GETDATE()
AS CurrentDateTime;`,
keywordId:"GETDATE",
sampleDataId:"Employees",
businessCaseId:"Capture Current Timestamp",
optimizationId:"GETDATE",
errorId:"GETDATE",
interviewId:"GETDATE",
interviewQuestions:["<b>Q:</b>What does GETDATE return?<br><b>A:</b>Current system date and time.","<b>Q:</b>Where used?<br><b>A:</b>Audit columns and reports."],
relatedTopics:["getdate","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CURRENT_TIMESTAMP
==================================*/

{
id:718,
category:"SQL Functions",
subCategory:"CURRENT_TIMESTAMP",
difficulty:"Beginner",
title:"CURRENT_TIMESTAMP Function",
shortDescription:"CURRENT_TIMESTAMP returns current date and time.",
syntax:`CURRENT_TIMESTAMP;`,
sql:`SELECT
CURRENT_TIMESTAMP
AS CurrentTime;`,
keywordId:"CURRENT_TIMESTAMP",
sampleDataId:"Employees",
businessCaseId:"Record Creation Time",
optimizationId:"CURRENT_TIMESTAMP",
errorId:"CURRENT_TIMESTAMP",
interviewId:"CURRENT_TIMESTAMP",
interviewQuestions:["<b>Q:</b>What is CURRENT_TIMESTAMP?<br><b>A:</b>ANSI standard date function.","<b>Q:</b>Difference from GETDATE?<br><b>A:</b>Both return current datetime."],
relatedTopics:["current timestamp","getdate","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEADD FUNCTION
==================================*/

{
id:719,
category:"SQL Functions",
subCategory:"DATEADD",
difficulty:"Intermediate",
title:"DATEADD Function",
shortDescription:"DATEADD adds a specified time interval to a date.",
syntax:`DATEADD(interval,
number,
date);`,
sql:`SELECT
DATEADD(YEAR,1,JoiningDate)
AS NextYear
FROM Employees;`,
keywordId:"DATEADD",
sampleDataId:"Employees",
businessCaseId:"Calculate Future Dates",
optimizationId:"DATEADD",
errorId:"DATEADD",
interviewId:"DATEADD",
interviewQuestions:["<b>Q:</b>What does DATEADD do?<br><b>A:</b>Adds time to a date.","<b>Q:</b>Example?<br><b>A:</b>Add one year to joining date."],
relatedTopics:["dateadd","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEDIFF FUNCTION
==================================*/

{
id:720,
category:"SQL Functions",
subCategory:"DATEDIFF",
difficulty:"Intermediate",
title:"DATEDIFF Function",
shortDescription:"DATEDIFF calculates difference between two dates.",
syntax:`DATEDIFF(interval,
start_date,
end_date);`,
sql:`SELECT
DATEDIFF(YEAR,JoiningDate,GETDATE())
AS Experience
FROM Employees;`,
keywordId:"DATEDIFF",
sampleDataId:"Employees",
businessCaseId:"Calculate Date Difference",
optimizationId:"DATEDIFF",
errorId:"DATEDIFF",
interviewId:"DATEDIFF",
interviewQuestions:["<b>Q:</b>What does DATEDIFF do?<br><b>A:</b>Returns difference between dates.","<b>Q:</b>Use case?<br><b>A:</b>Employee experience calculation."],
relatedTopics:["datediff","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DATEPART FUNCTION
==================================*/

{
id:721,
category:"SQL Functions",
subCategory:"DATEPART",
difficulty:"Intermediate",
title:"DATEPART Function",
shortDescription:"DATEPART extracts a specific part of a date.",
syntax:`DATEPART(datepart,
date);`,
sql:`SELECT
DATEPART(YEAR,JoiningDate)
AS JoiningYear
FROM Employees;`,
keywordId:"DATEPART",
sampleDataId:"Employees",
businessCaseId:"Extract Date Components",
optimizationId:"DATEPART",
errorId:"DATEPART",
interviewId:"DATEPART",
interviewQuestions:["<b>Q:</b>What does DATEPART do?<br><b>A:</b>Returns specific date portion.","<b>Q:</b>Example?<br><b>A:</b>Extract year or month."],
relatedTopics:["datepart","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 YEAR FUNCTION
==================================*/

{
id:722,
category:"SQL Functions",
subCategory:"YEAR",
difficulty:"Beginner",
title:"YEAR Function",
shortDescription:"YEAR returns the year portion from a date.",
syntax:`YEAR(date);`,
sql:`SELECT
YEAR(JoiningDate)
AS JoiningYear
FROM Employees;`,
keywordId:"YEAR",
sampleDataId:"Employees",
businessCaseId:"Year Wise Analysis",
optimizationId:"YEAR",
errorId:"YEAR",
interviewId:"YEAR",
interviewQuestions:["<b>Q:</b>What does YEAR return?<br><b>A:</b>Year from date value.","<b>Q:</b>Alternative?<br><b>A:</b>DATEPART(YEAR,date)."],
relatedTopics:["year function","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MONTH FUNCTION
==================================*/

{
id:723,
category:"SQL Functions",
subCategory:"MONTH",
difficulty:"Beginner",
title:"MONTH Function",
shortDescription:"MONTH returns the month number from a date.",
syntax:`MONTH(date);`,
sql:`SELECT
MONTH(JoiningDate)
AS JoiningMonth
FROM Employees;`,
keywordId:"MONTH",
sampleDataId:"Employees",
businessCaseId:"Month Wise Reporting",
optimizationId:"MONTH",
errorId:"MONTH",
interviewId:"MONTH",
interviewQuestions:["<b>Q:</b>What does MONTH return?<br><b>A:</b>Month number from date.","<b>Q:</b>Example?<br><b>A:</b>Monthly employee joining report."],
relatedTopics:["month function","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DAY FUNCTION
==================================*/

{
id:724,
category:"SQL Functions",
subCategory:"DAY",
difficulty:"Beginner",
title:"DAY Function",
shortDescription:"DAY returns the day number from a date.",
syntax:`DAY(date);`,
sql:`SELECT
DAY(JoiningDate)
AS JoiningDay
FROM Employees;`,
keywordId:"DAY",
sampleDataId:"Employees",
businessCaseId:"Daily Analysis",
optimizationId:"DAY",
errorId:"DAY",
interviewId:"DAY",
interviewQuestions:["<b>Q:</b>What does DAY return?<br><b>A:</b>Day portion of date.","<b>Q:</b>Example?<br><b>A:</b>Find joining day."],
relatedTopics:["day function","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EOMONTH FUNCTION
==================================*/

{
id:725,
category:"SQL Functions",
subCategory:"EOMONTH",
difficulty:"Intermediate",
title:"EOMONTH Function",
shortDescription:"EOMONTH returns the last day of a month.",
syntax:`EOMONTH(start_date);`,
sql:`SELECT
EOMONTH(GETDATE())
AS MonthEndDate;`,
keywordId:"EOMONTH",
sampleDataId:"Employees",
businessCaseId:"Month End Reporting",
optimizationId:"EOMONTH",
errorId:"EOMONTH",
interviewId:"EOMONTH",
interviewQuestions:["<b>Q:</b>What does EOMONTH do?<br><b>A:</b>Returns month ending date.","<b>Q:</b>Use case?<br><b>A:</b>Financial month closing."],
relatedTopics:["eomonth","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ISDATE FUNCTION
==================================*/

{
id:726,
category:"SQL Functions",
subCategory:"ISDATE",
difficulty:"Intermediate",
title:"ISDATE Function",
shortDescription:"ISDATE checks whether a value is a valid date.",
syntax:`ISDATE(expression);`,
sql:`SELECT
ISDATE('2026-01-01')
AS ValidDate;`,
keywordId:"ISDATE",
sampleDataId:"Employees",
businessCaseId:"Validate Date Inputs",
optimizationId:"ISDATE",
errorId:"ISDATE",
interviewId:"ISDATE",
interviewQuestions:["<b>Q:</b>What does ISDATE do?<br><b>A:</b>Checks valid date format.","<b>Q:</b>Return value?<br><b>A:</b>1 for valid, 0 for invalid."],
relatedTopics:["isdate","date function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CAST FUNCTION
==================================*/

{
id:727,
category:"SQL Functions",
subCategory:"CAST",
difficulty:"Beginner",
title:"CAST Function",
shortDescription:"CAST converts one data type into another.",
syntax:`CAST(expression AS datatype);`,
sql:`SELECT
CAST(Salary AS VARCHAR(20))
AS SalaryText
FROM Employees;`,
keywordId:"CAST",
sampleDataId:"Employees",
businessCaseId:"Convert Data Types",
optimizationId:"CAST",
errorId:"CAST",
interviewId:"CAST",
interviewQuestions:["<b>Q:</b>What does CAST do?<br><b>A:</b>Converts data type.","<b>Q:</b>Example?<br><b>A:</b>Number to text conversion."],
relatedTopics:["cast","convert","data type conversion","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CONVERT FUNCTION
==================================*/

{
id:728,
category:"SQL Functions",
subCategory:"CONVERT",
difficulty:"Beginner",
title:"CONVERT Function",
shortDescription:"CONVERT changes data type with optional formatting styles.",
syntax:`CONVERT(datatype,
expression,
style);`,
sql:`SELECT
CONVERT(VARCHAR,GETDATE(),103)
AS DateFormat;`,
keywordId:"CONVERT",
sampleDataId:"Employees",
businessCaseId:"Format Dates and Values",
optimizationId:"CONVERT",
errorId:"CONVERT",
interviewId:"CONVERT",
interviewQuestions:["<b>Q:</b>What is CONVERT?<br><b>A:</b>Data type conversion function.","<b>Q:</b>Difference from CAST?<br><b>A:</b>CONVERT supports styles."],
relatedTopics:["convert","cast","date conversion","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COALESCE FUNCTION
==================================*/

{
id:729,
category:"SQL Functions",
subCategory:"COALESCE",
difficulty:"Intermediate",
title:"COALESCE Function",
shortDescription:"COALESCE returns the first non-NULL value.",
syntax:`COALESCE(value1,
value2,...);`,
sql:`SELECT
COALESCE(Phone,'Not Available')
AS Contact
FROM Employees;`,
keywordId:"COALESCE",
sampleDataId:"Employees",
businessCaseId:"Handle Missing Values",
optimizationId:"COALESCE",
errorId:"COALESCE",
interviewId:"COALESCE",
interviewQuestions:["<b>Q:</b>What does COALESCE do?<br><b>A:</b>Returns first non-null value.","<b>Q:</b>Alternative?<br><b>A:</b>ISNULL in SQL Server."],
relatedTopics:["coalesce","null handling","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ISNULL FUNCTION
==================================*/

{
id:730,
category:"SQL Functions",
subCategory:"ISNULL",
difficulty:"Beginner",
title:"ISNULL Function",
shortDescription:"ISNULL replaces NULL values with a specified value.",
syntax:`ISNULL(expression,
replacement_value);`,
sql:`SELECT
ISNULL(Department,'Unknown')
AS DepartmentName
FROM Employees;`,
keywordId:"ISNULL",
sampleDataId:"Employees",
businessCaseId:"Replace Missing Data",
optimizationId:"ISNULL",
errorId:"ISNULL",
interviewId:"ISNULL",
interviewQuestions:["<b>Q:</b>What does ISNULL do?<br><b>A:</b>Replaces NULL values.","<b>Q:</b>ISNULL vs COALESCE?<br><b>A:</b>ISNULL is SQL Server specific."],
relatedTopics:["isnull","coalesce","null handling","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NULLIF FUNCTION
==================================*/

{
id:731,
category:"SQL Functions",
subCategory:"NULLIF",
difficulty:"Intermediate",
title:"NULLIF Function",
shortDescription:"NULLIF returns NULL when two expressions are equal.",
syntax:`NULLIF(expression1,
expression2);`,
sql:`SELECT
NULLIF(Salary,0)
AS ValidSalary
FROM Employees;`,
keywordId:"NULLIF",
sampleDataId:"Employees",
businessCaseId:"Avoid Divide By Zero Errors",
optimizationId:"NULLIF",
errorId:"NULLIF",
interviewId:"NULLIF",
interviewQuestions:["<b>Q:</b>What does NULLIF do?<br><b>A:</b>Returns NULL if values are equal.","<b>Q:</b>Common use?<br><b>A:</b>Prevent calculation errors."],
relatedTopics:["nullif","null handling","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ABS FUNCTION
==================================*/

{
id:732,
category:"SQL Functions",
subCategory:"ABS",
difficulty:"Beginner",
title:"ABS Function",
shortDescription:"ABS returns the absolute positive value of a number.",
syntax:`ABS(number);`,
sql:`SELECT
ABS(-500)
AS PositiveValue;`,
keywordId:"ABS",
sampleDataId:"Employees",
businessCaseId:"Calculate Positive Differences",
optimizationId:"ABS",
errorId:"ABS",
interviewId:"ABS",
interviewQuestions:["<b>Q:</b>What does ABS do?<br><b>A:</b>Returns positive value.","<b>Q:</b>Example?<br><b>A:</b>Remove negative signs."],
relatedTopics:["abs function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ROUND FUNCTION
==================================*/

{
id:733,
category:"SQL Functions",
subCategory:"ROUND",
difficulty:"Beginner",
title:"ROUND Function",
shortDescription:"ROUND rounds numeric values to specified decimal places.",
syntax:`ROUND(number,
decimals);`,
sql:`SELECT
ROUND(123.456,2)
AS RoundedValue;`,
keywordId:"ROUND",
sampleDataId:"Employees",
businessCaseId:"Financial Calculations",
optimizationId:"ROUND",
errorId:"ROUND",
interviewId:"ROUND",
interviewQuestions:["<b>Q:</b>What does ROUND do?<br><b>A:</b>Rounds numbers.","<b>Q:</b>Example?<br><b>A:</b>Currency formatting."],
relatedTopics:["round function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CEILING FUNCTION
==================================*/

{
id:734,
category:"SQL Functions",
subCategory:"CEILING",
difficulty:"Beginner",
title:"CEILING Function",
shortDescription:"CEILING returns the smallest integer greater than or equal to a value.",
syntax:`CEILING(number);`,
sql:`SELECT
CEILING(45.2)
AS RoundedUp;`,
keywordId:"CEILING",
sampleDataId:"Employees",
businessCaseId:"Round Values Up",
optimizationId:"CEILING",
errorId:"CEILING",
interviewId:"CEILING",
interviewQuestions:["<b>Q:</b>What does CEILING do?<br><b>A:</b>Rounds value upward.","<b>Q:</b>Example?<br><b>A:</b>45.2 becomes 46."],
relatedTopics:["ceiling","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FLOOR FUNCTION
==================================*/

{
id:735,
category:"SQL Functions",
subCategory:"FLOOR",
difficulty:"Beginner",
title:"FLOOR Function",
shortDescription:"FLOOR returns the largest integer less than or equal to a value.",
syntax:`FLOOR(number);`,
sql:`SELECT
FLOOR(45.9)
AS RoundedDown;`,
keywordId:"FLOOR",
sampleDataId:"Employees",
businessCaseId:"Round Values Down",
optimizationId:"FLOOR",
errorId:"FLOOR",
interviewId:"FLOOR",
interviewQuestions:["<b>Q:</b>What does FLOOR do?<br><b>A:</b>Rounds value downward.","<b>Q:</b>Example?<br><b>A:</b>45.9 becomes 45."],
relatedTopics:["floor","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 POWER FUNCTION
==================================*/

{
id:736,
category:"SQL Functions",
subCategory:"POWER",
difficulty:"Beginner",
title:"POWER Function",
shortDescription:"POWER returns a number raised to a specified power.",
syntax:`POWER(number,
power);`,
sql:`SELECT
POWER(2,3)
AS Result;`,
keywordId:"POWER",
sampleDataId:"Employees",
businessCaseId:"Mathematical Calculations",
optimizationId:"POWER",
errorId:"POWER",
interviewId:"POWER",
interviewQuestions:["<b>Q:</b>What does POWER do?<br><b>A:</b>Returns exponential value.","<b>Q:</b>Example?<br><b>A:</b>2³ returns 8."],
relatedTopics:["power function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQRT FUNCTION
==================================*/

{
id:737,
category:"SQL Functions",
subCategory:"SQRT",
difficulty:"Beginner",
title:"SQRT Function",
shortDescription:"SQRT returns the square root of a number.",
syntax:`SQRT(number);`,
sql:`SELECT
SQRT(144)
AS Result;`,
keywordId:"SQRT",
sampleDataId:"Employees",
businessCaseId:"Mathematical Analysis",
optimizationId:"SQRT",
errorId:"SQRT",
interviewId:"SQRT",
interviewQuestions:["<b>Q:</b>What does SQRT do?<br><b>A:</b>Returns square root.","<b>Q:</b>Example?<br><b>A:</b>Square root of 144 is 12."],
relatedTopics:["sqrt","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RAND FUNCTION
==================================*/

{
id:738,
category:"SQL Functions",
subCategory:"RAND",
difficulty:"Intermediate",
title:"RAND Function",
shortDescription:"RAND generates a random floating point number.",
syntax:`RAND();`,
sql:`SELECT
RAND()
AS RandomNumber;`,
keywordId:"RAND",
sampleDataId:"Employees",
businessCaseId:"Generate Random Values",
optimizationId:"RAND",
errorId:"RAND",
interviewId:"RAND",
interviewQuestions:["<b>Q:</b>What does RAND do?<br><b>A:</b>Generates random number.","<b>Q:</b>Range?<br><b>A:</b>Between 0 and 1."],
relatedTopics:["rand function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SIGN FUNCTION
==================================*/

{
id:739,
category:"SQL Functions",
subCategory:"SIGN",
difficulty:"Intermediate",
title:"SIGN Function",
shortDescription:"SIGN returns the sign of a numeric value.",
syntax:`SIGN(number);`,
sql:`SELECT
SIGN(-100)
AS Result;`,
keywordId:"SIGN",
sampleDataId:"Employees",
businessCaseId:"Identify Positive Negative Values",
optimizationId:"SIGN",
errorId:"SIGN",
interviewId:"SIGN",
interviewQuestions:["<b>Q:</b>What does SIGN return?<br><b>A:</b>Positive, negative or zero indicator.","<b>Q:</b>Example?<br><b>A:</b>-1 for negative."],
relatedTopics:["sign function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXP FUNCTION
==================================*/

{
id:740,
category:"SQL Functions",
subCategory:"EXP",
difficulty:"Advanced",
title:"EXP Function",
shortDescription:"EXP returns e raised to the power of a number.",
syntax:`EXP(number);`,
sql:`SELECT
EXP(1)
AS Result;`,
keywordId:"EXP",
sampleDataId:"Employees",
businessCaseId:"Scientific Calculations",
optimizationId:"EXP",
errorId:"EXP",
interviewId:"EXP",
interviewQuestions:["<b>Q:</b>What does EXP do?<br><b>A:</b>Returns exponential value.","<b>Q:</b>Base value?<br><b>A:</b>Euler's number e."],
relatedTopics:["exp function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LOG FUNCTION
==================================*/

{
id:741,
category:"SQL Functions",
subCategory:"LOG",
difficulty:"Advanced",
title:"LOG Function",
shortDescription:"LOG returns the natural logarithm of a number.",
syntax:`LOG(number);`,
sql:`SELECT
LOG(10)
AS LogValue;`,
keywordId:"LOG",
sampleDataId:"Employees",
businessCaseId:"Scientific Calculations",
optimizationId:"LOG",
errorId:"LOG",
interviewId:"LOG",
interviewQuestions:["<b>Q:</b>What does LOG do?<br><b>A:</b>Returns logarithmic value.","<b>Q:</b>Common use?<br><b>A:</b>Mathematical calculations."],
relatedTopics:["log function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PI FUNCTION
==================================*/

{
id:742,
category:"SQL Functions",
subCategory:"PI",
difficulty:"Beginner",
title:"PI Function",
shortDescription:"PI returns the mathematical constant value of π.",
syntax:`PI();`,
sql:`SELECT
PI()
AS PiValue;`,
keywordId:"PI",
sampleDataId:"Employees",
businessCaseId:"Mathematical Calculations",
optimizationId:"PI",
errorId:"PI",
interviewId:"PI",
interviewQuestions:["<b>Q:</b>What does PI return?<br><b>A:</b>Constant value of pi.","<b>Q:</b>Where useful?<br><b>A:</b>Geometry calculations."],
relatedTopics:["pi function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COS FUNCTION
==================================*/

{
id:743,
category:"SQL Functions",
subCategory:"COS",
difficulty:"Advanced",
title:"COS Function",
shortDescription:"COS returns the cosine value of an angle.",
syntax:`COS(number);`,
sql:`SELECT
COS(0)
AS CosValue;`,
keywordId:"COS",
sampleDataId:"Employees",
businessCaseId:"Trigonometric Calculations",
optimizationId:"COS",
errorId:"COS",
interviewId:"COS",
interviewQuestions:["<b>Q:</b>What does COS do?<br><b>A:</b>Returns cosine value.","<b>Q:</b>Input unit?<br><b>A:</b>Radians."],
relatedTopics:["cos function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SIN FUNCTION
==================================*/

{
id:744,
category:"SQL Functions",
subCategory:"SIN",
difficulty:"Advanced",
title:"SIN Function",
shortDescription:"SIN returns the sine value of an angle.",
syntax:`SIN(number);`,
sql:`SELECT
SIN(0)
AS SinValue;`,
keywordId:"SIN",
sampleDataId:"Employees",
businessCaseId:"Trigonometric Calculations",
optimizationId:"SIN",
errorId:"SIN",
interviewId:"SIN",
interviewQuestions:["<b>Q:</b>What does SIN do?<br><b>A:</b>Returns sine value.","<b>Q:</b>Input format?<br><b>A:</b>Radians."],
relatedTopics:["sin function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TAN FUNCTION
==================================*/

{
id:745,
category:"SQL Functions",
subCategory:"TAN",
difficulty:"Advanced",
title:"TAN Function",
shortDescription:"TAN returns the tangent value of an angle.",
syntax:`TAN(number);`,
sql:`SELECT
TAN(0)
AS TanValue;`,
keywordId:"TAN",
sampleDataId:"Employees",
businessCaseId:"Advanced Mathematical Analysis",
optimizationId:"TAN",
errorId:"TAN",
interviewId:"TAN",
interviewQuestions:["<b>Q:</b>What does TAN do?<br><b>A:</b>Returns tangent value.","<b>Q:</b>Where used?<br><b>A:</b>Engineering calculations."],
relatedTopics:["tan function","math function","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL OPERATORS
==================================*/

{
id:746,
category:"SQL Operators",
subCategory:"Operator",
difficulty:"Beginner",
title:"SQL Operators",
shortDescription:"Operators perform calculations and comparisons in SQL queries.",
syntax:`SELECT column
FROM table
WHERE condition operator value;`,
sql:`SELECT *
FROM Employees
WHERE Salary > 50000;`,
keywordId:"OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter And Calculate Data",
optimizationId:"OPERATOR",
errorId:"OPERATOR",
interviewId:"OPERATOR",
interviewQuestions:["<b>Q:</b>What are SQL Operators?<br><b>A:</b>Symbols used to perform operations.","<b>Q:</b>Types?<br><b>A:</b>Arithmetic, Comparison, Logical."],
relatedTopics:["operator","sql operators","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ARITHMETIC OPERATORS
==================================*/

{
id:747,
category:"SQL Operators",
subCategory:"ARITHMETIC OPERATOR",
difficulty:"Beginner",
title:"Arithmetic Operators",
shortDescription:"Arithmetic operators perform mathematical calculations.",
syntax:`+
-
*
/
%`,
sql:`SELECT
Salary * 12 AS AnnualSalary
FROM Employees;`,
keywordId:"ARITHMETIC_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Values",
optimizationId:"ARITHMETIC_OPERATOR",
errorId:"ARITHMETIC_OPERATOR",
interviewId:"ARITHMETIC_OPERATOR",
interviewQuestions:["<b>Q:</b>What are Arithmetic Operators?<br><b>A:</b>Operators used for calculations.","<b>Q:</b>Examples?<br><b>A:</b>+, -, *, /, %."],
relatedTopics:["arithmetic operator","sql operators","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ADDITION OPERATOR
==================================*/

{
id:748,
category:"SQL Operators",
subCategory:"ADDITION (+)",
difficulty:"Beginner",
title:"Addition Operator (+)",
shortDescription:"Addition operator adds numeric values.",
syntax:`value1 + value2`,
sql:`SELECT
Salary + 5000 AS IncreasedSalary
FROM Employees;`,
keywordId:"ADDITION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Increased Values",
optimizationId:"ADDITION_OPERATOR",
errorId:"ADDITION_OPERATOR",
interviewId:"ADDITION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does + operator do?<br><b>A:</b>Adds values.","<b>Q:</b>Can it join text?<br><b>A:</b>Database dependent."],
relatedTopics:["addition operator","arithmetic operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SUBTRACTION OPERATOR
==================================*/

{
id:749,
category:"SQL Operators",
subCategory:"SUBTRACTION (-)",
difficulty:"Beginner",
title:"Subtraction Operator (-)",
shortDescription:"Subtraction operator subtracts one value from another.",
syntax:`value1 - value2`,
sql:`SELECT
Salary - 1000 AS NewSalary
FROM Employees;`,
keywordId:"SUBTRACTION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Differences",
optimizationId:"SUBTRACTION_OPERATOR",
errorId:"SUBTRACTION_OPERATOR",
interviewId:"SUBTRACTION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does - operator do?<br><b>A:</b>Subtracts values.","<b>Q:</b>Example?<br><b>A:</b>Calculate salary deduction."],
relatedTopics:["subtraction operator","arithmetic operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTIPLICATION OPERATOR
==================================*/

{
id:750,
category:"SQL Operators",
subCategory:"MULTIPLICATION (*)",
difficulty:"Beginner",
title:"Multiplication Operator (*)",
shortDescription:"Multiplication operator multiplies values.",
syntax:`value1 * value2`,
sql:`SELECT
Salary * 12 AS AnnualSalary
FROM Employees;`,
keywordId:"MULTIPLICATION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Annual Calculations",
optimizationId:"MULTIPLICATION_OPERATOR",
errorId:"MULTIPLICATION_OPERATOR",
interviewId:"MULTIPLICATION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does * operator do?<br><b>A:</b>Multiplies values.","<b>Q:</b>Example?<br><b>A:</b>Monthly salary to annual salary."],
relatedTopics:["multiplication operator","arithmetic operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DIVISION OPERATOR (/)
==================================*/

{
id:751,
category:"SQL Operators",
subCategory:"DIVISION (/)",
difficulty:"Beginner",
title:"Division Operator (/)",
shortDescription:"Division operator divides one numeric value by another.",
syntax:`value1 / value2`,
sql:`SELECT
Salary / 12 AS MonthlySalary
FROM Employees;`,
keywordId:"DIVISION_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Calculate Ratios And Averages",
optimizationId:"DIVISION_OPERATOR",
errorId:"DIVISION_OPERATOR",
interviewId:"DIVISION_OPERATOR",
interviewQuestions:["<b>Q:</b>What does / operator do?<br><b>A:</b>Divides values.","<b>Q:</b>Common error?<br><b>A:</b>Divide by zero."],
relatedTopics:["division operator","arithmetic operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MODULO OPERATOR (%)
==================================*/

{
id:752,
category:"SQL Operators",
subCategory:"MODULO (%)",
difficulty:"Beginner",
title:"Modulo Operator (%)",
shortDescription:"Modulo returns the remainder after division.",
syntax:`value1 % value2`,
sql:`SELECT
EmployeeID % 2 AS EvenOddCheck
FROM Employees;`,
keywordId:"MODULO_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Find Remainders And Patterns",
optimizationId:"MODULO_OPERATOR",
errorId:"MODULO_OPERATOR",
interviewId:"MODULO_OPERATOR",
interviewQuestions:["<b>Q:</b>What does % operator do?<br><b>A:</b>Returns remainder.","<b>Q:</b>Example?<br><b>A:</b>Check even or odd numbers."],
relatedTopics:["modulo operator","arithmetic operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMPARISON OPERATORS
==================================*/

{
id:753,
category:"SQL Operators",
subCategory:"COMPARISON OPERATOR",
difficulty:"Beginner",
title:"Comparison Operators",
shortDescription:"Comparison operators compare two values and return true or false.",
syntax:`=
>
<
>=
<=
<>`,
sql:`SELECT *
FROM Employees
WHERE Salary >= 60000;`,
keywordId:"COMPARISON_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Data Conditions",
optimizationId:"COMPARISON_OPERATOR",
errorId:"COMPARISON_OPERATOR",
interviewId:"COMPARISON_OPERATOR",
interviewQuestions:["<b>Q:</b>What are Comparison Operators?<br><b>A:</b>Operators used to compare values.","<b>Q:</b>Where used?<br><b>A:</b>WHERE conditions."],
relatedTopics:["comparison operator","sql operators","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EQUAL OPERATOR (=)
==================================*/

{
id:754,
category:"SQL Operators",
subCategory:"EQUAL (=)",
difficulty:"Beginner",
title:"Equal Operator (=)",
shortDescription:"Equal operator checks whether two values are same.",
syntax:`column = value`,
sql:`SELECT *
FROM Employees
WHERE Department='IT';`,
keywordId:"EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exact Value Filtering",
optimizationId:"EQUAL_OPERATOR",
errorId:"EQUAL_OPERATOR",
interviewId:"EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does = operator do?<br><b>A:</b>Checks equality.","<b>Q:</b>Where commonly used?<br><b>A:</b>WHERE clause."],
relatedTopics:["equal operator","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EQUAL OPERATOR
==================================*/

{
id:755,
category:"SQL Operators",
subCategory:"NOT EQUAL (<>)",
difficulty:"Beginner",
title:"Not Equal Operator (<>)",
shortDescription:"Not Equal operator checks values that are different.",
syntax:`column <> value`,
sql:`SELECT *
FROM Employees
WHERE Department <> 'HR';`,
keywordId:"NOT_EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exclude Specific Values",
optimizationId:"NOT_EQUAL_OPERATOR",
errorId:"NOT_EQUAL_OPERATOR",
interviewId:"NOT_EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does <> mean?<br><b>A:</b>Not equal comparison.","<b>Q:</b>Alternative symbol?<br><b>A:</b>!= in some databases."],
relatedTopics:["not equal operator","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GREATER THAN OPERATOR (>)
==================================*/

{
id:756,
category:"SQL Operators",
subCategory:"GREATER THAN (>)",
difficulty:"Beginner",
title:"Greater Than Operator (>)",
shortDescription:"Greater than operator checks whether a value is larger than another value.",
syntax:`column > value`,
sql:`SELECT *
FROM Employees
WHERE Salary > 50000;`,
keywordId:"GREATER_THAN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Higher Values",
optimizationId:"GREATER_THAN_OPERATOR",
errorId:"GREATER_THAN_OPERATOR",
interviewId:"GREATER_THAN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does > operator do?<br><b>A:</b>Checks greater values.","<b>Q:</b>Example?<br><b>A:</b>Find employees earning above 50000."],
relatedTopics:["greater than","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LESS THAN OPERATOR (<)
==================================*/

{
id:757,
category:"SQL Operators",
subCategory:"LESS THAN (<)",
difficulty:"Beginner",
title:"Less Than Operator (<)",
shortDescription:"Less than operator checks whether a value is smaller than another value.",
syntax:`column < value`,
sql:`SELECT *
FROM Employees
WHERE Salary < 40000;`,
keywordId:"LESS_THAN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Lower Values",
optimizationId:"LESS_THAN_OPERATOR",
errorId:"LESS_THAN_OPERATOR",
interviewId:"LESS_THAN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does < operator do?<br><b>A:</b>Checks smaller values.","<b>Q:</b>Example?<br><b>A:</b>Find low salary employees."],
relatedTopics:["less than","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 GREATER THAN OR EQUAL (>=)
==================================*/

{
id:758,
category:"SQL Operators",
subCategory:"GREATER OR EQUAL (>=)",
difficulty:"Beginner",
title:"Greater Than Or Equal Operator (>=)",
shortDescription:"Checks whether a value is greater than or equal to another value.",
syntax:`column >= value`,
sql:`SELECT *
FROM Employees
WHERE Salary >= 60000;`,
keywordId:"GREATER_EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Minimum Required Values",
optimizationId:"GREATER_EQUAL_OPERATOR",
errorId:"GREATER_EQUAL_OPERATOR",
interviewId:"GREATER_EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does >= mean?<br><b>A:</b>Greater than or equal comparison.","<b>Q:</b>Example?<br><b>A:</b>Salary 60000 or above."],
relatedTopics:["greater equal","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LESS THAN OR EQUAL (<=)
==================================*/

{
id:759,
category:"SQL Operators",
subCategory:"LESS OR EQUAL (<=)",
difficulty:"Beginner",
title:"Less Than Or Equal Operator (<=)",
shortDescription:"Checks whether a value is less than or equal to another value.",
syntax:`column <= value`,
sql:`SELECT *
FROM Employees
WHERE Salary <= 30000;`,
keywordId:"LESS_EQUAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Maximum Limits",
optimizationId:"LESS_EQUAL_OPERATOR",
errorId:"LESS_EQUAL_OPERATOR",
interviewId:"LESS_EQUAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What does <= mean?<br><b>A:</b>Less than or equal comparison.","<b>Q:</b>Example?<br><b>A:</b>Salary up to 30000."],
relatedTopics:["less equal","comparison operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LOGICAL OPERATORS
==================================*/

{
id:760,
category:"SQL Operators",
subCategory:"LOGICAL OPERATOR",
difficulty:"Beginner",
title:"Logical Operators",
shortDescription:"Logical operators combine multiple conditions.",
syntax:`AND
OR
NOT`,
sql:`SELECT *
FROM Employees
WHERE Department='IT'
AND Salary>50000;`,
keywordId:"LOGICAL_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Apply Multiple Conditions",
optimizationId:"LOGICAL_OPERATOR",
errorId:"LOGICAL_OPERATOR",
interviewId:"LOGICAL_OPERATOR",
interviewQuestions:["<b>Q:</b>What are Logical Operators?<br><b>A:</b>Operators used to combine conditions.","<b>Q:</b>Examples?<br><b>A:</b>AND, OR, NOT."],
relatedTopics:["logical operator","sql operators","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AND OPERATOR
==================================*/

{
id:761,
category:"SQL Operators",
subCategory:"AND",
difficulty:"Beginner",
title:"AND Operator",
shortDescription:"AND returns records only when all conditions are true.",
syntax:`condition1 AND condition2`,
sql:`SELECT *
FROM Employees
WHERE Department='IT'
AND Salary>60000;`,
keywordId:"AND_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Multiple Requirements",
optimizationId:"AND_OPERATOR",
errorId:"AND_OPERATOR",
interviewId:"AND_OPERATOR",
interviewQuestions:["<b>Q:</b>What does AND do?<br><b>A:</b>Requires all conditions true.","<b>Q:</b>Example?<br><b>A:</b>IT employees with salary above 60000."],
relatedTopics:["and operator","logical operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 OR OPERATOR
==================================*/

{
id:762,
category:"SQL Operators",
subCategory:"OR",
difficulty:"Beginner",
title:"OR Operator",
shortDescription:"OR returns records when at least one condition is true.",
syntax:`condition1 OR condition2`,
sql:`SELECT *
FROM Employees
WHERE Department='IT'
OR Department='HR';`,
keywordId:"OR_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Search Multiple Options",
optimizationId:"OR_OPERATOR",
errorId:"OR_OPERATOR",
interviewId:"OR_OPERATOR",
interviewQuestions:["<b>Q:</b>What does OR do?<br><b>A:</b>Any one condition can be true.","<b>Q:</b>Example?<br><b>A:</b>Find IT or HR employees."],
relatedTopics:["or operator","logical operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT OPERATOR
==================================*/

{
id:763,
category:"SQL Operators",
subCategory:"NOT",
difficulty:"Beginner",
title:"NOT Operator",
shortDescription:"NOT reverses the result of a condition.",
syntax:`NOT condition`,
sql:`SELECT *
FROM Employees
WHERE NOT Department='HR';`,
keywordId:"NOT_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Exclude Specific Conditions",
optimizationId:"NOT_OPERATOR",
errorId:"NOT_OPERATOR",
interviewId:"NOT_OPERATOR",
interviewQuestions:["<b>Q:</b>What does NOT do?<br><b>A:</b>Reverses condition result.","<b>Q:</b>Example?<br><b>A:</b>Employees except HR."],
relatedTopics:["not operator","logical operator","sql interview","sql examples","sql server","sql"]
},

/*==================================
 BETWEEN OPERATOR
==================================*/

{
id:764,
category:"SQL Operators",
subCategory:"BETWEEN",
difficulty:"Beginner",
title:"BETWEEN Operator",
shortDescription:"BETWEEN filters values within a specified range.",
syntax:`column BETWEEN value1 AND value2`,
sql:`SELECT *
FROM Employees
WHERE Salary BETWEEN 40000 AND 80000;`,
keywordId:"BETWEEN",
sampleDataId:"Employees",
businessCaseId:"Range Based Filtering",
optimizationId:"BETWEEN",
errorId:"BETWEEN",
interviewId:"BETWEEN",
interviewQuestions:["<b>Q:</b>What does BETWEEN do?<br><b>A:</b>Filters range values.","<b>Q:</b>Is boundary included?<br><b>A:</b>Yes."],
relatedTopics:["between operator","sql operators","sql interview","sql examples","sql server","sql"]
},

/*==================================
 IN OPERATOR
==================================*/

{
id:765,
category:"SQL Operators",
subCategory:"IN",
difficulty:"Beginner",
title:"IN Operator",
shortDescription:"IN checks whether a value exists in a list.",
syntax:`column IN(value1,value2);`,
sql:`SELECT *
FROM Employees
WHERE Department IN('IT','HR','Finance');`,
keywordId:"IN_OPERATOR",
sampleDataId:"Employees",
businessCaseId:"Filter Multiple Values",
optimizationId:"IN_OPERATOR",
errorId:"IN_OPERATOR",
interviewId:"IN_OPERATOR",
interviewQuestions:["<b>Q:</b>What does IN do?<br><b>A:</b>Checks multiple values.","<b>Q:</b>Alternative?<br><b>A:</b>Multiple OR conditions."],
relatedTopics:["in operator","sql operators","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL JOINS
==================================*/

{
id:766,
category:"SQL Joins",
subCategory:"JOIN",
difficulty:"Beginner",
title:"SQL JOIN",
shortDescription:"JOIN combines rows from multiple tables based on related columns.",
syntax:`SELECT columns
FROM table1
JOIN table2
ON table1.column=table2.column;`,
sql:`SELECT
Employees.EmployeeName,
Departments.DepartmentName
FROM Employees
JOIN Departments
ON Employees.DepartmentID=
Departments.DepartmentID;`,
keywordId:"JOIN",
sampleDataId:"Employees",
businessCaseId:"Combine Related Data",
optimizationId:"JOIN",
errorId:"JOIN",
interviewId:"JOIN",
interviewQuestions:["<b>Q:</b>What is JOIN?<br><b>A:</b>Combines data from multiple tables.","<b>Q:</b>Why use JOIN?<br><b>A:</b>Retrieve related information."],
relatedTopics:["join","sql joins","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INNER JOIN
==================================*/

{
id:767,
category:"SQL Joins",
subCategory:"INNER JOIN",
difficulty:"Beginner",
title:"INNER JOIN",
shortDescription:"INNER JOIN returns only matching records from both tables.",
syntax:`SELECT columns
FROM table1
INNER JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
INNER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"INNER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Get Matching Records",
optimizationId:"INNER_JOIN",
errorId:"INNER_JOIN",
interviewId:"INNER_JOIN",
interviewQuestions:["<b>Q:</b>What does INNER JOIN return?<br><b>A:</b>Only matching rows.","<b>Q:</b>Most commonly used JOIN?<br><b>A:</b>INNER JOIN."],
relatedTopics:["inner join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 LEFT JOIN
==================================*/

{
id:768,
category:"SQL Joins",
subCategory:"LEFT JOIN",
difficulty:"Beginner",
title:"LEFT JOIN",
shortDescription:"LEFT JOIN returns all rows from left table and matching rows from right table.",
syntax:`SELECT columns
FROM table1
LEFT JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
LEFT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"LEFT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Find Missing Related Data",
optimizationId:"LEFT_JOIN",
errorId:"LEFT_JOIN",
interviewId:"LEFT_JOIN",
interviewQuestions:["<b>Q:</b>What does LEFT JOIN return?<br><b>A:</b>All left table records.","<b>Q:</b>Use case?<br><b>A:</b>Find unmatched records."],
relatedTopics:["left join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RIGHT JOIN
==================================*/

{
id:769,
category:"SQL Joins",
subCategory:"RIGHT JOIN",
difficulty:"Beginner",
title:"RIGHT JOIN",
shortDescription:"RIGHT JOIN returns all rows from right table and matching rows from left table.",
syntax:`SELECT columns
FROM table1
RIGHT JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
RIGHT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"RIGHT_JOIN",
sampleDataId:"Employees",
businessCaseId:"Show All Right Table Records",
optimizationId:"RIGHT_JOIN",
errorId:"RIGHT_JOIN",
interviewId:"RIGHT_JOIN",
interviewQuestions:["<b>Q:</b>What does RIGHT JOIN return?<br><b>A:</b>All right table records.","<b>Q:</b>Alternative approach?<br><b>A:</b>Swap tables and use LEFT JOIN."],
relatedTopics:["right join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FULL OUTER JOIN
==================================*/

{
id:770,
category:"SQL Joins",
subCategory:"FULL OUTER JOIN",
difficulty:"Intermediate",
title:"FULL OUTER JOIN",
shortDescription:"FULL OUTER JOIN returns all records from both tables.",
syntax:`SELECT columns
FROM table1
FULL OUTER JOIN table2
ON condition;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
FULL OUTER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"FULL_OUTER_JOIN",
sampleDataId:"Employees",
businessCaseId:"Compare Complete Data Sets",
optimizationId:"FULL_OUTER_JOIN",
errorId:"FULL_OUTER_JOIN",
interviewId:"FULL_OUTER_JOIN",
interviewQuestions:["<b>Q:</b>What does FULL OUTER JOIN return?<br><b>A:</b>Matched and unmatched rows from both tables.","<b>Q:</b>When used?<br><b>A:</b>Data reconciliation."],
relatedTopics:["full outer join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CROSS JOIN
==================================*/

{
id:771,
category:"SQL Joins",
subCategory:"CROSS JOIN",
difficulty:"Intermediate",
title:"CROSS JOIN",
shortDescription:"CROSS JOIN returns Cartesian product of two tables.",
syntax:`SELECT columns
FROM table1
CROSS JOIN table2;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
CROSS JOIN Departments D;`,
keywordId:"CROSS_JOIN",
sampleDataId:"Employees",
businessCaseId:"Generate All Possible Combinations",
optimizationId:"CROSS_JOIN",
errorId:"CROSS_JOIN",
interviewId:"CROSS_JOIN",
interviewQuestions:["<b>Q:</b>What does CROSS JOIN return?<br><b>A:</b>Every possible combination of rows.","<b>Q:</b>Does it require ON condition?<br><b>A:</b>No."],
relatedTopics:["cross join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SELF JOIN
==================================*/

{
id:772,
category:"SQL Joins",
subCategory:"SELF JOIN",
difficulty:"Intermediate",
title:"SELF JOIN",
shortDescription:"SELF JOIN joins a table with itself.",
syntax:`SELECT columns
FROM table1 A
JOIN table1 B
ON condition;`,
sql:`SELECT
E.EmployeeName AS Employee,
M.EmployeeName AS Manager
FROM Employees E
JOIN Employees M
ON E.ManagerID=M.EmployeeID;`,
keywordId:"SELF_JOIN",
sampleDataId:"Employees",
businessCaseId:"Compare Records Within Same Table",
optimizationId:"SELF_JOIN",
errorId:"SELF_JOIN",
interviewId:"SELF_JOIN",
interviewQuestions:["<b>Q:</b>What is SELF JOIN?<br><b>A:</b>Joining a table with itself.","<b>Q:</b>Common use?<br><b>A:</b>Employee-manager hierarchy."],
relatedTopics:["self join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN USING
==================================*/

{
id:773,
category:"SQL Joins",
subCategory:"JOIN USING",
difficulty:"Intermediate",
title:"JOIN USING Clause",
shortDescription:"USING simplifies JOIN when both tables have same column name.",
syntax:`SELECT columns
FROM table1
JOIN table2
USING(column);`,
sql:`SELECT *
FROM Employees
JOIN Departments
USING(DepartmentID);`,
keywordId:"JOIN_USING",
sampleDataId:"Employees",
businessCaseId:"Simplify Join Conditions",
optimizationId:"JOIN_USING",
errorId:"JOIN_USING",
interviewId:"JOIN_USING",
interviewQuestions:["<b>Q:</b>What is USING clause?<br><b>A:</b>Shortcut for same column joins.","<b>Q:</b>Supported everywhere?<br><b>A:</b>No, database dependent."],
relatedTopics:["using clause","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN WITH ALIAS
==================================*/

{
id:774,
category:"SQL Joins",
subCategory:"JOIN ALIAS",
difficulty:"Beginner",
title:"JOIN Using Alias",
shortDescription:"Aliases make JOIN queries shorter and easier to read.",
syntax:`SELECT columns
FROM table1 A
JOIN table2 B
ON A.column=B.column;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID;`,
keywordId:"JOIN_ALIAS",
sampleDataId:"Employees",
businessCaseId:"Improve Query Readability",
optimizationId:"JOIN_ALIAS",
errorId:"JOIN_ALIAS",
interviewId:"JOIN_ALIAS",
interviewQuestions:["<b>Q:</b>Why use aliases in JOIN?<br><b>A:</b>Reduce repeated table names.","<b>Q:</b>Are aliases mandatory?<br><b>A:</b>No."],
relatedTopics:["join alias","table alias","sql interview","sql examples","sql server","sql"]
},

/*==================================
 JOIN MULTIPLE TABLES
==================================*/

{
id:775,
category:"SQL Joins",
subCategory:"MULTIPLE TABLE JOIN",
difficulty:"Intermediate",
title:"Joining Multiple Tables",
shortDescription:"SQL can join more than two tables in a single query.",
syntax:`SELECT columns
FROM table1
JOIN table2
JOIN table3;`,
sql:`SELECT
E.EmployeeName,
D.DepartmentName,
L.LocationName
FROM Employees E
JOIN Departments D
ON E.DepartmentID=D.DepartmentID
JOIN Locations L
ON D.LocationID=L.LocationID;`,
keywordId:"MULTIPLE_TABLE_JOIN",
sampleDataId:"Employees",
businessCaseId:"Combine Complex Business Data",
optimizationId:"MULTIPLE_TABLE_JOIN",
errorId:"MULTIPLE_TABLE_JOIN",
interviewId:"MULTIPLE_TABLE_JOIN",
interviewQuestions:["<b>Q:</b>Can SQL join multiple tables?<br><b>A:</b>Yes.","<b>Q:</b>Common in real projects?<br><b>A:</b>Yes, for reporting."],
relatedTopics:["multiple table join","join","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL SUBQUERY
==================================*/

{
id:776,
category:"SQL Queries",
subCategory:"SUBQUERY",
difficulty:"Intermediate",
title:"SQL Subquery",
shortDescription:"Subquery is a query written inside another query.",
syntax:`SELECT columns
FROM table
WHERE column =
(
SELECT column
FROM table
);`,
sql:`SELECT *
FROM Employees
WHERE Salary >
(
SELECT AVG(Salary)
FROM Employees
);`,
keywordId:"SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Use Query Result Inside Another Query",
optimizationId:"SUBQUERY",
errorId:"SUBQUERY",
interviewId:"SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Subquery?<br><b>A:</b>A query inside another query.","<b>Q:</b>Where can subquery be used?<br><b>A:</b>SELECT, FROM, WHERE clauses."],
relatedTopics:["subquery","nested query","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NESTED QUERY
==================================*/

{
id:777,
category:"SQL Queries",
subCategory:"NESTED QUERY",
difficulty:"Intermediate",
title:"Nested Query",
shortDescription:"Nested query is another name for a subquery.",
syntax:`Outer Query
(
Inner Query
);`,
sql:`SELECT EmployeeName
FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
WHERE Location='Mumbai'
);`,
keywordId:"NESTED_QUERY",
sampleDataId:"Employees",
businessCaseId:"Solve Complex Filtering Logic",
optimizationId:"NESTED_QUERY",
errorId:"NESTED_QUERY",
interviewId:"NESTED_QUERY",
interviewQuestions:["<b>Q:</b>What is Nested Query?<br><b>A:</b>Query inside another query.","<b>Q:</b>Another name?<br><b>A:</b>Subquery."],
relatedTopics:["nested query","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SINGLE ROW SUBQUERY
==================================*/

{
id:778,
category:"SQL Queries",
subCategory:"SINGLE ROW SUBQUERY",
difficulty:"Intermediate",
title:"Single Row Subquery",
shortDescription:"Returns only one value from inner query.",
syntax:`WHERE column =
(SELECT single_value);`,
sql:`SELECT *
FROM Employees
WHERE Salary =
(
SELECT MAX(Salary)
FROM Employees
);`,
keywordId:"SINGLE_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Compare With Single Result",
optimizationId:"SINGLE_ROW_SUBQUERY",
errorId:"SINGLE_ROW_SUBQUERY",
interviewId:"SINGLE_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Single Row Subquery?<br><b>A:</b>Returns one row.","<b>Q:</b>Which operator used?<br><b>A:</b>=, >, <."],
relatedTopics:["single row subquery","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 MULTI ROW SUBQUERY
==================================*/

{
id:779,
category:"SQL Queries",
subCategory:"MULTI ROW SUBQUERY",
difficulty:"Intermediate",
title:"Multi Row Subquery",
shortDescription:"Returns multiple rows from inner query.",
syntax:`WHERE column IN
(SELECT column);`,
sql:`SELECT *
FROM Employees
WHERE DepartmentID IN
(
SELECT DepartmentID
FROM Departments
);`,
keywordId:"MULTI_ROW_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Compare Multiple Results",
optimizationId:"MULTI_ROW_SUBQUERY",
errorId:"MULTI_ROW_SUBQUERY",
interviewId:"MULTI_ROW_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Multi Row Subquery?<br><b>A:</b>Returns multiple records.","<b>Q:</b>Common operator?<br><b>A:</b>IN."],
relatedTopics:["multi row subquery","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CORRELATED SUBQUERY
==================================*/

{
id:780,
category:"SQL Queries",
subCategory:"CORRELATED SUBQUERY",
difficulty:"Advanced",
title:"Correlated Subquery",
shortDescription:"Correlated subquery depends on values from outer query.",
syntax:`SELECT *
FROM table A
WHERE column =
(
SELECT column
FROM table B
WHERE A.id=B.id
);`,
sql:`SELECT E1.*
FROM Employees E1
WHERE Salary >
(
SELECT AVG(E2.Salary)
FROM Employees E2
WHERE E1.Department=E2.Department
);`,
keywordId:"CORRELATED_SUBQUERY",
sampleDataId:"Employees",
businessCaseId:"Row Level Comparison",
optimizationId:"CORRELATED_SUBQUERY",
errorId:"CORRELATED_SUBQUERY",
interviewId:"CORRELATED_SUBQUERY",
interviewQuestions:["<b>Q:</b>What is Correlated Subquery?<br><b>A:</b>Subquery using outer query values.","<b>Q:</b>Performance?<br><b>A:</b>Can be slower than joins."],
relatedTopics:["correlated subquery","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXISTS OPERATOR
==================================*/

{
id:781,
category:"SQL Queries",
subCategory:"EXISTS",
difficulty:"Intermediate",
title:"EXISTS Operator",
shortDescription:"EXISTS checks whether a subquery returns any records.",
syntax:`SELECT columns
FROM table
WHERE EXISTS
(
SELECT column
FROM table
);`,
sql:`SELECT *
FROM Employees E
WHERE EXISTS
(
SELECT 1
FROM Departments D
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"EXISTS",
sampleDataId:"Employees",
businessCaseId:"Check Record Availability",
optimizationId:"EXISTS",
errorId:"EXISTS",
interviewId:"EXISTS",
interviewQuestions:["<b>Q:</b>What does EXISTS do?<br><b>A:</b>Checks if rows exist.","<b>Q:</b>What does it return?<br><b>A:</b>TRUE or FALSE."],
relatedTopics:["exists","subquery","sql interview","sql examples","sql server","sql"]
},

/*==================================
 NOT EXISTS OPERATOR
==================================*/

{
id:782,
category:"SQL Queries",
subCategory:"NOT EXISTS",
difficulty:"Intermediate",
title:"NOT EXISTS Operator",
shortDescription:"NOT EXISTS returns records when subquery has no matching rows.",
syntax:`WHERE NOT EXISTS
(
SELECT query
);`,
sql:`SELECT *
FROM Departments D
WHERE NOT EXISTS
(
SELECT *
FROM Employees E
WHERE E.DepartmentID=D.DepartmentID
);`,
keywordId:"NOT_EXISTS",
sampleDataId:"Employees",
businessCaseId:"Find Missing Relationships",
optimizationId:"NOT_EXISTS",
errorId:"NOT_EXISTS",
interviewId:"NOT_EXISTS",
interviewQuestions:["<b>Q:</b>What does NOT EXISTS do?<br><b>A:</b>Finds records without matches.","<b>Q:</b>Use case?<br><b>A:</b>Find empty departments."],
relatedTopics:["not exists","exists","sql interview","sql examples","sql server","sql"]
},

/*==================================
 COMMON TABLE EXPRESSION
==================================*/

{
id:783,
category:"SQL Queries",
subCategory:"CTE",
difficulty:"Advanced",
title:"Common Table Expression (CTE)",
shortDescription:"CTE creates a temporary named result set inside a query.",
syntax:`WITH cte_name AS
(
SELECT query
)
SELECT *
FROM cte_name;`,
sql:`WITH HighSalary AS
(
SELECT *
FROM Employees
WHERE Salary>70000
)
SELECT *
FROM HighSalary;`,
keywordId:"CTE",
sampleDataId:"Employees",
businessCaseId:"Improve Query Readability",
optimizationId:"CTE",
errorId:"CTE",
interviewId:"CTE",
interviewQuestions:["<b>Q:</b>What is CTE?<br><b>A:</b>Temporary result set.","<b>Q:</b>Does CTE store data?<br><b>A:</b>No."],
relatedTopics:["cte","common table expression","sql interview","sql examples","sql server","sql"]
},

/*==================================
 RECURSIVE CTE
==================================*/

{
id:784,
category:"SQL Queries",
subCategory:"RECURSIVE CTE",
difficulty:"Advanced",
title:"Recursive CTE",
shortDescription:"Recursive CTE references itself to process hierarchical data.",
syntax:`WITH cte_name AS
(
Anchor Query
UNION ALL
Recursive Query
)`,
sql:`WITH EmployeeHierarchy AS
(
SELECT EmployeeID,ManagerID
FROM Employees
WHERE ManagerID IS NULL

UNION ALL

SELECT E.EmployeeID,E.ManagerID
FROM Employees E
JOIN EmployeeHierarchy H
ON E.ManagerID=H.EmployeeID
)
SELECT *
FROM EmployeeHierarchy;`,
keywordId:"RECURSIVE_CTE",
sampleDataId:"Employees",
businessCaseId:"Hierarchy Reporting",
optimizationId:"RECURSIVE_CTE",
errorId:"RECURSIVE_CTE",
interviewId:"RECURSIVE_CTE",
interviewQuestions:["<b>Q:</b>What is Recursive CTE?<br><b>A:</b>CTE calling itself.","<b>Q:</b>Where used?<br><b>A:</b>Employee hierarchy."],
relatedTopics:["recursive cte","cte","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TEMP TABLE
==================================*/

{
id:785,
category:"SQL Queries",
subCategory:"TEMP TABLE",
difficulty:"Intermediate",
title:"Temporary Table",
shortDescription:"Temporary table stores intermediate results temporarily.",
syntax:`CREATE TABLE #table_name
(
columns
);`,
sql:`CREATE TABLE #EmployeeTemp
(
EmployeeID INT,
EmployeeName VARCHAR(50)
);`,
keywordId:"TEMP_TABLE",
sampleDataId:"Employees",
businessCaseId:"Store Temporary Data",
optimizationId:"TEMP_TABLE",
errorId:"TEMP_TABLE",
interviewId:"TEMP_TABLE",
interviewQuestions:["<b>Q:</b>What is Temp Table?<br><b>A:</b>Temporary storage table.","<b>Q:</b>Lifetime?<br><b>A:</b>Session based."],
relatedTopics:["temp table","temporary table","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TABLE VARIABLE
==================================*/

{
id:786,
category:"SQL Queries",
subCategory:"TABLE VARIABLE",
difficulty:"Intermediate",
title:"Table Variable",
shortDescription:"Table variable stores temporary data inside a batch or procedure.",
syntax:`DECLARE @table_name TABLE
(
columns
);`,
sql:`DECLARE @EmployeeList TABLE
(
EmployeeID INT,
EmployeeName VARCHAR(50)
);

INSERT INTO @EmployeeList
VALUES(101,'Rahul');`,
keywordId:"TABLE_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Store Small Temporary Results",
optimizationId:"TABLE_VARIABLE",
errorId:"TABLE_VARIABLE",
interviewId:"TABLE_VARIABLE",
interviewQuestions:["<b>Q:</b>What is Table Variable?<br><b>A:</b>Temporary table-like variable.","<b>Q:</b>Where used?<br><b>A:</b>Stored procedures and scripts."],
relatedTopics:["table variable","temp table","sql interview","sql examples","sql server","sql"]
},

/*==================================
 VIEWS
==================================*/

{
id:787,
category:"SQL Database Objects",
subCategory:"VIEW",
difficulty:"Beginner",
title:"SQL View",
shortDescription:"View is a virtual table based on a SQL query.",
syntax:`CREATE VIEW view_name AS
SELECT query;`,
sql:`CREATE VIEW EmployeeView AS
SELECT
EmployeeName,
Department,
Salary
FROM Employees;`,
keywordId:"VIEW",
sampleDataId:"Employees",
businessCaseId:"Simplify Complex Queries",
optimizationId:"VIEW",
errorId:"VIEW",
interviewId:"VIEW",
interviewQuestions:["<b>Q:</b>What is View?<br><b>A:</b>Virtual table created from query.","<b>Q:</b>Does View store data?<br><b>A:</b>Normally no."],
relatedTopics:["view","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE VIEW
==================================*/

{
id:788,
category:"SQL Database Objects",
subCategory:"CREATE VIEW",
difficulty:"Beginner",
title:"CREATE VIEW Statement",
shortDescription:"CREATE VIEW creates a virtual table from a query.",
syntax:`CREATE VIEW view_name AS
SELECT columns
FROM table;`,
sql:`CREATE VIEW ITEmployees AS
SELECT *
FROM Employees
WHERE Department='IT';`,
keywordId:"CREATE_VIEW",
sampleDataId:"Employees",
businessCaseId:"Reusable Reports",
optimizationId:"CREATE_VIEW",
errorId:"CREATE_VIEW",
interviewId:"CREATE_VIEW",
interviewQuestions:["<b>Q:</b>Why create View?<br><b>A:</b>Reuse queries and simplify access.","<b>Q:</b>Can View have WHERE condition?<br><b>A:</b>Yes."],
relatedTopics:["create view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 ALTER VIEW
==================================*/

{
id:789,
category:"SQL Database Objects",
subCategory:"ALTER VIEW",
difficulty:"Intermediate",
title:"ALTER VIEW Statement",
shortDescription:"ALTER VIEW modifies an existing view definition.",
syntax:`ALTER VIEW view_name AS
SELECT query;`,
sql:`ALTER VIEW EmployeeView AS
SELECT
EmployeeName,
Salary
FROM Employees;`,
keywordId:"ALTER_VIEW",
sampleDataId:"Employees",
businessCaseId:"Modify Existing Reports",
optimizationId:"ALTER_VIEW",
errorId:"ALTER_VIEW",
interviewId:"ALTER_VIEW",
interviewQuestions:["<b>Q:</b>What does ALTER VIEW do?<br><b>A:</b>Changes existing view.","<b>Q:</b>Does it create new view?<br><b>A:</b>No."],
relatedTopics:["alter view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DROP VIEW
==================================*/

{
id:790,
category:"SQL Database Objects",
subCategory:"DROP VIEW",
difficulty:"Beginner",
title:"DROP VIEW Statement",
shortDescription:"DROP VIEW removes an existing view.",
syntax:`DROP VIEW view_name;`,
sql:`DROP VIEW EmployeeView;`,
keywordId:"DROP_VIEW",
sampleDataId:"Employees",
businessCaseId:"Remove Unused Database Objects",
optimizationId:"DROP_VIEW",
errorId:"DROP_VIEW",
interviewId:"DROP_VIEW",
interviewQuestions:["<b>Q:</b>What does DROP VIEW do?<br><b>A:</b>Deletes a view.","<b>Q:</b>Does it delete base table data?<br><b>A:</b>No."],
relatedTopics:["drop view","view","sql interview","sql examples","sql server","sql"]
},

/*==================================
 STORED PROCEDURE
==================================*/

{
id:791,
category:"SQL Database Objects",
subCategory:"STORED PROCEDURE",
difficulty:"Intermediate",
title:"Stored Procedure",
shortDescription:"Stored procedure is a reusable collection of SQL statements stored in database.",
syntax:`CREATE PROCEDURE procedure_name
AS
BEGIN
SQL Statements
END;`,
sql:`CREATE PROCEDURE GetEmployees
AS
BEGIN
SELECT *
FROM Employees;
END;`,
keywordId:"STORED_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Reusable Database Operations",
optimizationId:"STORED_PROCEDURE",
errorId:"STORED_PROCEDURE",
interviewId:"STORED_PROCEDURE",
interviewQuestions:["<b>Q:</b>What is Stored Procedure?<br><b>A:</b>Precompiled SQL code stored in database.","<b>Q:</b>Benefits?<br><b>A:</b>Performance, security, reuse."],
relatedTopics:["stored procedure","procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CREATE PROCEDURE
==================================*/

{
id:792,
category:"SQL Database Objects",
subCategory:"CREATE PROCEDURE",
difficulty:"Intermediate",
title:"CREATE PROCEDURE Statement",
shortDescription:"CREATE PROCEDURE creates a new stored procedure.",
syntax:`CREATE PROCEDURE name
AS
SQL Statement;`,
sql:`CREATE PROCEDURE GetITEmployees
AS
SELECT *
FROM Employees
WHERE Department='IT';`,
keywordId:"CREATE_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Automate Repeated Queries",
optimizationId:"CREATE_PROCEDURE",
errorId:"CREATE_PROCEDURE",
interviewId:"CREATE_PROCEDURE",
interviewQuestions:["<b>Q:</b>Why create procedure?<br><b>A:</b>Reuse SQL logic.","<b>Q:</b>Can procedure accept parameters?<br><b>A:</b>Yes."],
relatedTopics:["create procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 EXECUTE PROCEDURE
==================================*/

{
id:793,
category:"SQL Database Objects",
subCategory:"EXEC PROCEDURE",
difficulty:"Beginner",
title:"EXEC Stored Procedure",
shortDescription:"EXEC runs a stored procedure.",
syntax:`EXEC procedure_name;`,
sql:`EXEC GetEmployees;`,
keywordId:"EXEC_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Run Stored Logic",
optimizationId:"EXEC_PROCEDURE",
errorId:"EXEC_PROCEDURE",
interviewId:"EXEC_PROCEDURE",
interviewQuestions:["<b>Q:</b>How to execute procedure?<br><b>A:</b>Using EXEC command.","<b>Q:</b>Alternative?<br><b>A:</b>EXECUTE keyword."],
relatedTopics:["exec procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 PROCEDURE PARAMETERS
==================================*/

{
id:794,
category:"SQL Database Objects",
subCategory:"PROCEDURE PARAMETERS",
difficulty:"Intermediate",
title:"Stored Procedure Parameters",
shortDescription:"Parameters allow procedures to accept dynamic values.",
syntax:`CREATE PROCEDURE name
@param datatype
AS
SQL Statement;`,
sql:`CREATE PROCEDURE GetEmployeeByID
@EmployeeID INT
AS
SELECT *
FROM Employees
WHERE EmployeeID=@EmployeeID;`,
keywordId:"PROCEDURE_PARAMETERS",
sampleDataId:"Employees",
businessCaseId:"Create Dynamic Reports",
optimizationId:"PROCEDURE_PARAMETERS",
errorId:"PROCEDURE_PARAMETERS",
interviewId:"PROCEDURE_PARAMETERS",
interviewQuestions:["<b>Q:</b>Why use parameters?<br><b>A:</b>Pass dynamic values.","<b>Q:</b>Advantage?<br><b>A:</b>Reusable procedure."],
relatedTopics:["procedure parameters","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FUNCTIONS VS PROCEDURES
==================================*/

{
id:795,
category:"SQL Database Objects",
subCategory:"FUNCTION VS PROCEDURE",
difficulty:"Intermediate",
title:"Function vs Stored Procedure",
shortDescription:"Functions return values while procedures perform operations.",
syntax:`FUNCTION -> RETURN value
PROCEDURE -> Execute statements`,
sql:`CREATE FUNCTION GetAnnualSalary
(
@Salary INT
)
RETURNS INT
AS
BEGIN
RETURN @Salary*12
END;`,
keywordId:"FUNCTION_VS_PROCEDURE",
sampleDataId:"Employees",
businessCaseId:"Choose Correct Database Object",
optimizationId:"FUNCTION_VS_PROCEDURE",
errorId:"FUNCTION_VS_PROCEDURE",
interviewId:"FUNCTION_VS_PROCEDURE",
interviewQuestions:["<b>Q:</b>Main difference?<br><b>A:</b>Function returns value, procedure executes logic.","<b>Q:</b>Can procedure call function?<br><b>A:</b>Yes."],
relatedTopics:["function vs procedure","stored procedure","sql interview","sql examples","sql server","sql"]
},

/*==================================
 TRIGGERS
==================================*/

{
id:796,
category:"SQL Database Objects",
subCategory:"TRIGGER",
difficulty:"Advanced",
title:"SQL Trigger",
shortDescription:"Trigger automatically executes when a database event occurs.",
syntax:`CREATE TRIGGER trigger_name
ON table_name
AFTER INSERT
AS
BEGIN
SQL Statement
END;`,
sql:`CREATE TRIGGER trg_AuditEmployee
ON Employees
AFTER INSERT
AS
BEGIN
INSERT INTO EmployeeAudit
SELECT *
FROM inserted;
END;`,
keywordId:"TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Automatic Audit Tracking",
optimizationId:"TRIGGER",
errorId:"TRIGGER",
interviewId:"TRIGGER",
interviewQuestions:["<b>Q:</b>What is Trigger?<br><b>A:</b>Automatically executed SQL code.","<b>Q:</b>When trigger runs?<br><b>A:</b>After INSERT, UPDATE or DELETE events."],
relatedTopics:["trigger","database object","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER INSERT TRIGGER
==================================*/

{
id:797,
category:"SQL Database Objects",
subCategory:"AFTER INSERT TRIGGER",
difficulty:"Advanced",
title:"AFTER INSERT Trigger",
shortDescription:"Runs automatically after inserting records into a table.",
syntax:`CREATE TRIGGER name
ON table
AFTER INSERT
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_InsertLog
ON Employees
AFTER INSERT
AS
BEGIN
SELECT *
FROM inserted;
END;`,
keywordId:"AFTER_INSERT_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track New Records",
optimizationId:"AFTER_INSERT_TRIGGER",
errorId:"AFTER_INSERT_TRIGGER",
interviewId:"AFTER_INSERT_TRIGGER",
interviewQuestions:["<b>Q:</b>When AFTER INSERT executes?<br><b>A:</b>After successful insert.","<b>Q:</b>Common use?<br><b>A:</b>Audit logging."],
relatedTopics:["after insert trigger","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER UPDATE TRIGGER
==================================*/

{
id:798,
category:"SQL Database Objects",
subCategory:"AFTER UPDATE TRIGGER",
difficulty:"Advanced",
title:"AFTER UPDATE Trigger",
shortDescription:"Runs automatically after updating records.",
syntax:`CREATE TRIGGER name
ON table
AFTER UPDATE
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_UpdateSalary
ON Employees
AFTER UPDATE
AS
BEGIN
INSERT INTO SalaryAudit
SELECT *
FROM inserted;
END;`,
keywordId:"AFTER_UPDATE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Track Data Changes",
optimizationId:"AFTER_UPDATE_TRIGGER",
errorId:"AFTER_UPDATE_TRIGGER",
interviewId:"AFTER_UPDATE_TRIGGER",
interviewQuestions:["<b>Q:</b>Purpose of UPDATE trigger?<br><b>A:</b>Capture changed data.","<b>Q:</b>Tables available?<br><b>A:</b>Inserted and Deleted."],
relatedTopics:["after update trigger","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 AFTER DELETE TRIGGER
==================================*/

{
id:799,
category:"SQL Database Objects",
subCategory:"AFTER DELETE TRIGGER",
difficulty:"Advanced",
title:"AFTER DELETE Trigger",
shortDescription:"Runs automatically after deleting records.",
syntax:`CREATE TRIGGER name
ON table
AFTER DELETE
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_DeleteAudit
ON Employees
AFTER DELETE
AS
BEGIN
INSERT INTO EmployeeArchive
SELECT *
FROM deleted;
END;`,
keywordId:"AFTER_DELETE_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Maintain Deleted Records History",
optimizationId:"AFTER_DELETE_TRIGGER",
errorId:"AFTER_DELETE_TRIGGER",
interviewId:"AFTER_DELETE_TRIGGER",
interviewQuestions:["<b>Q:</b>Why use DELETE trigger?<br><b>A:</b>Save deleted data history.","<b>Q:</b>Which table stores old data?<br><b>A:</b>Deleted table."],
relatedTopics:["after delete trigger","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 INSTEAD OF TRIGGER
==================================*/

{
id:800,
category:"SQL Database Objects",
subCategory:"INSTEAD OF TRIGGER",
difficulty:"Advanced",
title:"INSTEAD OF Trigger",
shortDescription:"INSTEAD OF trigger runs instead of the original operation.",
syntax:`CREATE TRIGGER name
ON table
INSTEAD OF INSERT
AS
SQL Statement;`,
sql:`CREATE TRIGGER trg_InsertCheck
ON Employees
INSTEAD OF INSERT
AS
BEGIN
SELECT 'Validation Required';
END;`,
keywordId:"INSTEAD_OF_TRIGGER",
sampleDataId:"Employees",
businessCaseId:"Custom Validation Before Action",
optimizationId:"INSTEAD_OF_TRIGGER",
errorId:"INSTEAD_OF_TRIGGER",
interviewId:"INSTEAD_OF_TRIGGER",
interviewQuestions:["<b>Q:</b>What is INSTEAD OF trigger?<br><b>A:</b>Runs in place of operation.","<b>Q:</b>Common use?<br><b>A:</b>View modifications and validations."],
relatedTopics:["instead of trigger","trigger","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CURSOR
==================================*/

{
id:801,
category:"SQL Programming",
subCategory:"CURSOR",
difficulty:"Advanced",
title:"SQL Cursor",
shortDescription:"Cursor processes query results row by row.",
syntax:`DECLARE cursor_name CURSOR
FOR SELECT statement;`,
sql:`DECLARE EmployeeCursor CURSOR
FOR
SELECT EmployeeName
FROM Employees;`,
keywordId:"CURSOR",
sampleDataId:"Employees",
businessCaseId:"Row By Row Processing",
optimizationId:"CURSOR",
errorId:"CURSOR",
interviewId:"CURSOR",
interviewQuestions:["<b>Q:</b>What is Cursor?<br><b>A:</b>Database object used to process rows individually.","<b>Q:</b>Performance impact?<br><b>A:</b>Usually slower than set-based queries."],
relatedTopics:["cursor","sql programming","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DECLARE CURSOR
==================================*/

{
id:802,
category:"SQL Programming",
subCategory:"DECLARE CURSOR",
difficulty:"Advanced",
title:"DECLARE Cursor",
shortDescription:"DECLARE creates a cursor and defines its query.",
syntax:`DECLARE cursor_name CURSOR
FOR SELECT query;`,
sql:`DECLARE SalaryCursor CURSOR
FOR
SELECT Salary
FROM Employees;`,
keywordId:"DECLARE_CURSOR",
sampleDataId:"Employees",
businessCaseId:"Define Row Processing Logic",
optimizationId:"DECLARE_CURSOR",
errorId:"DECLARE_CURSOR",
interviewId:"DECLARE_CURSOR",
interviewQuestions:["<b>Q:</b>Why declare cursor?<br><b>A:</b>Create cursor definition.","<b>Q:</b>What follows declaration?<br><b>A:</b>OPEN command."],
relatedTopics:["declare cursor","cursor","sql interview","sql examples","sql server","sql"]
},

/*==================================
 OPEN CURSOR
==================================*/

{
id:803,
category:"SQL Programming",
subCategory:"OPEN CURSOR",
difficulty:"Advanced",
title:"OPEN Cursor",
shortDescription:"OPEN activates a declared cursor.",
syntax:`OPEN cursor_name;`,
sql:`OPEN SalaryCursor;`,
keywordId:"OPEN_CURSOR",
sampleDataId:"Employees",
businessCaseId:"Start Cursor Processing",
optimizationId:"OPEN_CURSOR",
errorId:"OPEN_CURSOR",
interviewId:"OPEN_CURSOR",
interviewQuestions:["<b>Q:</b>What does OPEN do?<br><b>A:</b>Loads cursor result set.","<b>Q:</b>Can fetch happen before OPEN?<br><b>A:</b>No."],
relatedTopics:["open cursor","cursor","sql interview","sql examples","sql server","sql"]
},

/*==================================
 FETCH CURSOR
==================================*/

{
id:804,
category:"SQL Programming",
subCategory:"FETCH CURSOR",
difficulty:"Advanced",
title:"FETCH Cursor",
shortDescription:"FETCH retrieves the next row from a cursor.",
syntax:`FETCH NEXT FROM cursor_name;`,
sql:`FETCH NEXT
FROM SalaryCursor;`,
keywordId:"FETCH_CURSOR",
sampleDataId:"Employees",
businessCaseId:"Read Individual Rows",
optimizationId:"FETCH_CURSOR",
errorId:"FETCH_CURSOR",
interviewId:"FETCH_CURSOR",
interviewQuestions:["<b>Q:</b>What does FETCH do?<br><b>A:</b>Reads cursor rows.","<b>Q:</b>How many rows at a time?<br><b>A:</b>One row."],
relatedTopics:["fetch cursor","cursor","sql interview","sql examples","sql server","sql"]
},

/*==================================
 CLOSE CURSOR
==================================*/

{
id:805,
category:"SQL Programming",
subCategory:"CLOSE CURSOR",
difficulty:"Advanced",
title:"CLOSE Cursor",
shortDescription:"CLOSE releases the active cursor result set.",
syntax:`CLOSE cursor_name;`,
sql:`CLOSE SalaryCursor;`,
keywordId:"CLOSE_CURSOR",
sampleDataId:"Employees",
businessCaseId:"Release Cursor Resources",
optimizationId:"CLOSE_CURSOR",
errorId:"CLOSE_CURSOR",
interviewId:"CLOSE_CURSOR",
interviewQuestions:["<b>Q:</b>What does CLOSE do?<br><b>A:</b>Stops cursor usage.","<b>Q:</b>Does it remove cursor?<br><b>A:</b>No, only deactivates it."],
relatedTopics:["close cursor","cursor","sql interview","sql examples","sql server","sql"]
},

/*==================================
 DEALLOCATE CURSOR
==================================*/

{
id:806,
category:"SQL Programming",
subCategory:"DEALLOCATE CURSOR",
difficulty:"Advanced",
title:"DEALLOCATE Cursor",
shortDescription:"DEALLOCATE removes a cursor definition and releases resources.",
syntax:`DEALLOCATE cursor_name;`,
sql:`DEALLOCATE SalaryCursor;`,
keywordId:"DEALLOCATE_CURSOR",
sampleDataId:"Employees",
businessCaseId:"Free Memory Resources",
optimizationId:"DEALLOCATE_CURSOR",
errorId:"DEALLOCATE_CURSOR",
interviewId:"DEALLOCATE_CURSOR",
interviewQuestions:["<b>Q:</b>What does DEALLOCATE do?<br><b>A:</b>Removes cursor completely.","<b>Q:</b>Difference from CLOSE?<br><b>A:</b>CLOSE stops use, DEALLOCATE deletes cursor."],
relatedTopics:["deallocate cursor","cursor","sql interview","sql examples","sql server","sql"]
},

/*==================================
 SQL VARIABLES
==================================*/

{
id:807,
category:"SQL Programming",
subCategory:"VARIABLE",
difficulty:"Beginner",
title:"SQL Variables",
shortDescription:"Variables store temporary values during SQL execution.",
syntax:`DECLARE @variable datatype;`,
sql:`DECLARE @TotalSalary INT;

SET @TotalSalary = 50000;

SELECT @TotalSalary;`,
keywordId:"VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Store Temporary Values",
optimizationId:"VARIABLE",
errorId:"VARIABLE",
interviewId:"VARIABLE",
interviewQuestions:["<b>Q:</b>What is Variable?<br><b>A:</b>Temporary storage for values.","<b>Q:</b>How declare variable?<br><b>A:</b>Using DECLARE."],
relatedTopics:["sql variable","declare variable","sql programming","sql interview","sql"]
},

/*==================================
 DECLARE VARIABLE
==================================*/

{
id:808,
category:"SQL Programming",
subCategory:"DECLARE VARIABLE",
difficulty:"Beginner",
title:"DECLARE Variable",
shortDescription:"DECLARE creates a SQL variable.",
syntax:`DECLARE @name datatype;`,
sql:`DECLARE @EmployeeCount INT;`,
keywordId:"DECLARE_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Create Temporary Storage",
optimizationId:"DECLARE_VARIABLE",
errorId:"DECLARE_VARIABLE",
interviewId:"DECLARE_VARIABLE",
interviewQuestions:["<b>Q:</b>Purpose of DECLARE?<br><b>A:</b>Create variables.","<b>Q:</b>Where used?<br><b>A:</b>Procedures and scripts."],
relatedTopics:["declare variable","sql variable","sql programming","sql interview","sql"]
},

/*==================================
 SET VARIABLE
==================================*/

{
id:809,
category:"SQL Programming",
subCategory:"SET VARIABLE",
difficulty:"Beginner",
title:"SET Variable",
shortDescription:"SET assigns a value to a SQL variable.",
syntax:`SET @variable=value;`,
sql:`DECLARE @Count INT;

SET @Count=100;

SELECT @Count;`,
keywordId:"SET_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Assign Values",
optimizationId:"SET_VARIABLE",
errorId:"SET_VARIABLE",
interviewId:"SET_VARIABLE",
interviewQuestions:["<b>Q:</b>What does SET do?<br><b>A:</b>Assigns value to variable.","<b>Q:</b>Can SET assign expressions?<br><b>A:</b>Yes."],
relatedTopics:["set variable","sql variable","sql programming","sql interview","sql"]
},

/*==================================
 SELECT VARIABLE
==================================*/

{
id:810,
category:"SQL Programming",
subCategory:"SELECT VARIABLE",
difficulty:"Beginner",
title:"SELECT Variable",
shortDescription:"SELECT can assign query results to variables.",
syntax:`SELECT @variable = column
FROM table;`,
sql:`DECLARE @MaxSalary INT;

SELECT @MaxSalary = MAX(Salary)
FROM Employees;

SELECT @MaxSalary;`,
keywordId:"SELECT_VARIABLE",
sampleDataId:"Employees",
businessCaseId:"Store Query Results",
optimizationId:"SELECT_VARIABLE",
errorId:"SELECT_VARIABLE",
interviewId:"SELECT_VARIABLE",
interviewQuestions:["<b>Q:</b>Can SELECT assign variables?<br><b>A:</b>Yes.","<b>Q:</b>Common use?<br><b>A:</b>Store aggregate results."],
relatedTopics:["select variable","sql variable","sql programming","sql interview","sql"]
},

/*==================================
 IF ELSE STATEMENT
==================================*/

{
id:811,
category:"SQL Programming",
subCategory:"IF ELSE",
difficulty:"Intermediate",
title:"IF ELSE Statement",
shortDescription:"IF ELSE executes different SQL statements based on a condition.",
syntax:`IF condition
BEGIN
 statement
END
ELSE
BEGIN
 statement
END;`,
sql:`IF EXISTS
(
SELECT *
FROM Employees
WHERE Department='IT'
)
BEGIN
PRINT 'IT Department Exists'
END
ELSE
BEGIN
PRINT 'No Data Found'
END;`,
keywordId:"IF_ELSE",
sampleDataId:"Employees",
businessCaseId:"Conditional Business Logic",
optimizationId:"IF_ELSE",
errorId:"IF_ELSE",
interviewId:"IF_ELSE",
interviewQuestions:["<b>Q:</b>What is IF ELSE?<br><b>A:</b>Conditional execution statement.","<b>Q:</b>Where used?<br><b>A:</b>Stored procedures and scripts."],
relatedTopics:["if else","conditional statement","sql programming","sql interview","sql"]
},

/*==================================
 CASE STATEMENT
==================================*/

{
id:812,
category:"SQL Programming",
subCategory:"CASE",
difficulty:"Beginner",
title:"CASE Statement",
shortDescription:"CASE adds conditional logic inside SQL queries.",
syntax:`CASE
WHEN condition THEN result
ELSE result
END;`,
sql:`SELECT
EmployeeName,
CASE
WHEN Salary>70000 THEN 'High'
ELSE 'Normal'
END AS SalaryCategory
FROM Employees;`,
keywordId:"CASE",
sampleDataId:"Employees",
businessCaseId:"Create Conditional Columns",
optimizationId:"CASE",
errorId:"CASE",
interviewId:"CASE",
interviewQuestions:["<b>Q:</b>What is CASE?<br><b>A:</b>SQL conditional expression.","<b>Q:</b>Alternative to IF?<br><b>A:</b>CASE inside queries."],
relatedTopics:["case statement","conditional logic","sql interview","sql examples","sql"]
},

/*==================================
 SIMPLE CASE
==================================*/

{
id:813,
category:"SQL Programming",
subCategory:"SIMPLE CASE",
difficulty:"Beginner",
title:"Simple CASE Expression",
shortDescription:"Simple CASE compares one expression with multiple values.",
syntax:`CASE expression
WHEN value THEN result
END;`,
sql:`SELECT
EmployeeName,
CASE Department
WHEN 'IT' THEN 'Technology'
WHEN 'HR' THEN 'Human Resource'
ELSE 'Other'
END AS DeptName
FROM Employees;`,
keywordId:"SIMPLE_CASE",
sampleDataId:"Employees",
businessCaseId:"Value Mapping",
optimizationId:"SIMPLE_CASE",
errorId:"SIMPLE_CASE",
interviewId:"SIMPLE_CASE",
interviewQuestions:["<b>Q:</b>Simple CASE compares what?<br><b>A:</b>Single expression.","<b>Q:</b>Where used?<br><b>A:</b>Data transformation."],
relatedTopics:["simple case","case statement","sql interview","sql examples","sql"]
},

/*==================================
 SEARCHED CASE
==================================*/

{
id:814,
category:"SQL Programming",
subCategory:"SEARCHED CASE",
difficulty:"Intermediate",
title:"Searched CASE Expression",
shortDescription:"Searched CASE evaluates multiple conditions.",
syntax:`CASE
WHEN condition THEN result
END;`,
sql:`SELECT
EmployeeName,
CASE
WHEN Salary>=80000 THEN 'Senior'
WHEN Salary>=50000 THEN 'Mid'
ELSE 'Junior'
END AS Level
FROM Employees;`,
keywordId:"SEARCHED_CASE",
sampleDataId:"Employees",
businessCaseId:"Complex Condition Handling",
optimizationId:"SEARCHED_CASE",
errorId:"SEARCHED_CASE",
interviewId:"SEARCHED_CASE",
interviewQuestions:["<b>Q:</b>Searched CASE uses what?<br><b>A:</b>Conditions.","<b>Q:</b>Difference from Simple CASE?<br><b>A:</b>No direct value comparison."],
relatedTopics:["searched case","case statement","sql interview","sql examples","sql"]
},

/*==================================
 WHILE LOOP
==================================*/

{
id:815,
category:"SQL Programming",
subCategory:"WHILE LOOP",
difficulty:"Intermediate",
title:"WHILE Loop",
shortDescription:"WHILE repeats SQL statements while a condition is true.",
syntax:`WHILE condition
BEGIN
 SQL statements
END;`,
sql:`DECLARE @Count INT=1;

WHILE @Count<=5
BEGIN
PRINT @Count;
SET @Count=@Count+1;
END;`,
keywordId:"WHILE_LOOP",
sampleDataId:"Employees",
businessCaseId:"Repeat Processing Tasks",
optimizationId:"WHILE_LOOP",
errorId:"WHILE_LOOP",
interviewId:"WHILE_LOOP",
interviewQuestions:["<b>Q:</b>What is WHILE loop?<br><b>A:</b>Repeats statements based on condition.","<b>Q:</b>Risk?<br><b>A:</b>Infinite loops."],
relatedTopics:["while loop","loop","sql programming","sql interview","sql"]
}




];

// Make globally available

window.SQL_TOPICS = SQL_TOPICS;