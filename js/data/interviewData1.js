/*==================================
 SQL Interview Questions
==================================*/

const SQL_INTERVIEW = [

{
id:1,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is SQL?",
answer:`Definition:
SQL (Structured Query Language) is a standard language used to communicate with relational databases. It helps users create, retrieve, update and delete data stored in database tables.

────────────────────────────────────────

Easy Explanation:
Think of SQL as a language that helps us talk to a database.

Just like we use English to communicate with people, applications use SQL to communicate with databases.

Whenever you search for a customer in a banking application, book a railway ticket, order food online or log in to a website, SQL works behind the scenes to retrieve and manage data.

────────────────────────────────────────

Real-Life Example:
Imagine a company has an Employees table containing 10,000 employee records.

Your manager asks:
"Show me all employees working in the Finance department."

Instead of searching manually, SQL retrieves the required records within seconds.

────────────────────────────────────────

Interview Answer:
SQL stands for Structured Query Language. It is a standard language used to communicate with relational databases. SQL is mainly used to Create, Read, Update and Delete data (CRUD). It is supported by databases like SQL Server, MySQL, Oracle and PostgreSQL.`,

example:`
SELECT *
FROM Employees;
`,

interviewTip:"Mention CRUD operations and explain that SQL is a language, not a database.",

relatedTopics:[
"SELECT",
"Database",
"RDBMS"
]
},

{
id:2,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is a Database?",
answer:`Definition:
A Database is an organized collection of related data that allows users to store, retrieve, update and manage information efficiently.

────────────────────────────────────────

Easy Explanation:
Think of a database as a digital cupboard where information is stored in an organized way.

Instead of keeping thousands of paper files, companies store customer details, employee records, orders and transactions inside a database. This makes searching and updating information very fast.

────────────────────────────────────────

Real-Life Example:
A bank stores customer details, account numbers, balances and transaction history in a database.

Whenever you use an ATM or mobile banking app, the system retrieves your information from the database within seconds.

────────────────────────────────────────

Interview Answer:
A Database is an organized collection of data that is stored electronically. It allows users to efficiently store, retrieve, update and manage information while maintaining accuracy and security.`,

example:`
Database
│
├── Employees
├── Customers
├── Orders
└── Products
`,

interviewTip:"Explain that a database stores data, whereas SQL is used to interact with that data.",

relatedTopics:[
"SQL",
"RDBMS",
"Table"
]
},

{
id:3,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is RDBMS?",
answer:`Definition:
RDBMS stands for Relational Database Management System. It is software used to store and manage data in the form of related tables.

────────────────────────────────────────

Easy Explanation:
Unlike a normal database, an RDBMS stores data in multiple tables that can be connected using relationships.

These relationships help reduce duplicate data and improve data consistency.

────────────────────────────────────────

Real-Life Example:
A school management system may have separate tables for Students, Teachers and Courses.

These tables are connected using common fields like StudentID or TeacherID.

────────────────────────────────────────

Interview Answer:
RDBMS is a Relational Database Management System that stores data in tables consisting of rows and columns. Relationships between tables are created using Primary Keys and Foreign Keys.

Examples include SQL Server, MySQL, Oracle and PostgreSQL.`,

example:`
Students
-----------
StudentID
StudentName

Courses
-----------
CourseID
CourseName

StudentCourses
-----------
StudentID
CourseID
`,

interviewTip:"Mention that RDBMS uses Primary Keys and Foreign Keys to establish relationships.",

relatedTopics:[
"Database",
"Primary Key",
"Foreign Key"
]
},

{
id:4,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is the difference between SQL and MySQL?",
answer:`Definition:
SQL is a programming language used to communicate with databases, whereas MySQL is a Relational Database Management System that understands SQL commands.

────────────────────────────────────────

Easy Explanation:
Think of SQL as the English language.

Think of MySQL as a person who understands and responds to English.

Similarly, SQL is the language, while MySQL is the software that executes SQL commands.

────────────────────────────────────────

Real-Life Example:
When you write:

SELECT * FROM Employees;

this is SQL.

When MySQL executes this command and returns employee records, MySQL is doing the work.

────────────────────────────────────────

Interview Answer:
SQL is a standard language used for database operations, whereas MySQL is an RDBMS developed to store and manage data using SQL commands.`,

example:`
SQL  → Language

MySQL → Database Software
`,

interviewTip:"Remember this simple sentence: SQL is a language, MySQL is a database software.",

relatedTopics:[
"SQL",
"Database",
"RDBMS"
]
},

{
id:5,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is a Table?",
answer:`Definition:
A Table is a database object that stores related information in the form of rows and columns.

────────────────────────────────────────

Easy Explanation:
A table works just like an Excel worksheet.

Each row stores one complete record, and each column stores one type of information.

────────────────────────────────────────

Real-Life Example:
An Employees table may contain details such as EmployeeID, EmployeeName, Department and Salary.

Every employee occupies one row in the table.

────────────────────────────────────────

Interview Answer:
A Table is a structured collection of related data arranged in rows and columns. It is the basic storage unit in a relational database.`,

example:`
EmployeeID | EmployeeName | Department
---------------------------------------
101        | Rahul        | Finance
102        | Priya        | IT
103        | Amit         | HR
`,

interviewTip:"Compare a database table with an Excel worksheet. Interviewers like simple real-world explanations.",

relatedTopics:[
"Row",
"Column",
"Database"
]
},

{
id:6,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is a Row?",
answer:`Definition:
A Row is a single record in a database table. Each row contains complete information about one item or one entity.

────────────────────────────────────────

Easy Explanation:
Think of a row as one complete entry in an Excel sheet.

For example, if an Employees table contains 500 employees, then the table will have 500 rows. Each row represents one employee.

────────────────────────────────────────

Real-Life Example:
Suppose an Employees table contains the following information:

EmployeeID | EmployeeName | Department
101        | Rahul        | Finance
102        | Priya        | IT

The first row stores Rahul's information, while the second row stores Priya's information.

────────────────────────────────────────

Interview Answer:
A Row represents a single record in a database table. Every row stores complete information about one entity, such as one employee, one customer or one product.`,

example:`
EmployeeID | EmployeeName | Department
---------------------------------------
101        | Rahul        | Finance
`,

interviewTip:"Remember: Row = Record. Interviewers often ask this simple question.",

relatedTopics:[
"Table",
"Column",
"Record"
]
},

{
id:7,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is a Column?",
answer:`Definition:
A Column is a vertical field in a table that stores one type of information for all records.

────────────────────────────────────────

Easy Explanation:
Think of a column as a category of information.

For example, EmployeeName stores only employee names, Salary stores only salaries and Department stores only department names.

────────────────────────────────────────

Real-Life Example:
An Employees table may contain these columns:

EmployeeID
EmployeeName
Department
Salary

Every employee record stores values under these columns.

────────────────────────────────────────

Interview Answer:
A Column is a field in a database table that stores a specific type of information for every record. Every column has a unique name and a defined data type.`,

example:`
EmployeeID
EmployeeName
Department
Salary
`,

interviewTip:"Remember: Column = Field. This is one of the most common beginner interview questions.",

relatedTopics:[
"Table",
"Row",
"Data Type"
]
},

{
id:8,
category:"Constraints",
difficulty:"Beginner",
question:"What is a Primary Key?",
answer:`Definition:
A Primary Key is a column or combination of columns that uniquely identifies every record in a table.

────────────────────────────────────────

Easy Explanation:
Imagine every employee in a company has a unique EmployeeID.

Even if two employees have the same name, their EmployeeID will always be different.

That unique EmployeeID becomes the Primary Key.

A Primary Key cannot contain duplicate values or NULL values.

────────────────────────────────────────

Real-Life Example:
An Employees table contains:

EmployeeID | EmployeeName
101        | Rahul
102        | Rahul

Although both employees have the same name, EmployeeID uniquely identifies each employee.

────────────────────────────────────────

Interview Answer:
A Primary Key uniquely identifies every row in a table. It does not allow duplicate values or NULL values and helps maintain data integrity.`,

example:`
CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
EmployeeName VARCHAR(100)
);
`,

interviewTip:"Always mention two points: No Duplicate Values and No NULL Values.",

relatedTopics:[
"Foreign Key",
"Candidate Key",
"Unique Key"
]
},

{
id:9,
category:"Constraints",
difficulty:"Beginner",
question:"What is a Foreign Key?",
answer:`Definition:
A Foreign Key is a column that creates a relationship between two tables by referring to the Primary Key of another table.

────────────────────────────────────────

Easy Explanation:
A Foreign Key connects one table with another.

It helps maintain relationships and ensures that related data remains accurate.

────────────────────────────────────────

Real-Life Example:
Suppose there are two tables.

Departments

DepartmentID
DepartmentName

Employees

EmployeeID
EmployeeName
DepartmentID

DepartmentID in the Employees table refers to DepartmentID in the Departments table.

This creates a relationship between employees and their departments.

────────────────────────────────────────

Interview Answer:
A Foreign Key is a column that references the Primary Key of another table. It establishes relationships between tables and maintains referential integrity.`,

example:`
FOREIGN KEY (DepartmentID)
REFERENCES Departments(DepartmentID);
`,

interviewTip:"Remember: Primary Key identifies records, Foreign Key connects tables.",

relatedTopics:[
"Primary Key",
"JOIN",
"Referential Integrity"
]
},

{
id:10,
category:"SQL Basics",
difficulty:"Beginner",
question:"What are SQL Commands?",
answer:`Definition:
SQL Commands are instructions used to communicate with a database. They help users create, retrieve, update, delete and manage database objects.

────────────────────────────────────────

Easy Explanation:
Whenever you write SQL code like SELECT or INSERT, you are using SQL commands.

Different commands are used for different purposes.

For example:

SELECT → Retrieve data

INSERT → Add data

UPDATE → Modify data

DELETE → Remove data

────────────────────────────────────────

Real-Life Example:
Suppose a company hires a new employee.

INSERT command is used to add the employee.

If the employee's salary changes, UPDATE is used.

If the employee resigns, DELETE is used.

────────────────────────────────────────

Interview Answer:
SQL Commands are instructions used to perform operations on databases. They are classified into DDL, DML, DQL, DCL and TCL based on their purpose.`,

example:`
SELECT
INSERT
UPDATE
DELETE
CREATE
ALTER
DROP
`,

interviewTip:"Interviewers often ask you to explain all five SQL command categories with examples.",

relatedTopics:[
"DDL",
"DML",
"DQL",
"DCL",
"TCL"
]
},

{
id:11,
category:"Constraints",
difficulty:"Beginner",
question:"What is a Candidate Key?",
answer:`Definition:
A Candidate Key is a column or a combination of columns that can uniquely identify every record in a table.

────────────────────────────────────────

Easy Explanation:
A table can have multiple columns that uniquely identify each row. These columns are called Candidate Keys.

Out of all Candidate Keys, only one is selected as the Primary Key, while the remaining become Alternate Keys.

────────────────────────────────────────

Real-Life Example:
In an Employees table:

• EmployeeID is unique.
• EmailID is also unique.

Both can identify an employee individually, so both are Candidate Keys.

────────────────────────────────────────

Interview Answer:
A Candidate Key is a column or combination of columns that uniquely identifies each record in a table. A table can have multiple Candidate Keys, but only one is selected as the Primary Key.`,

example:`
CREATE TABLE Employees
(
    EmployeeID INT,
    EmailID VARCHAR(100),
    EmployeeName VARCHAR(100),

    PRIMARY KEY(EmployeeID),
    UNIQUE(EmailID)
);
`,

interviewTip:"Remember: Every Primary Key is a Candidate Key, but not every Candidate Key becomes the Primary Key.",

relatedTopics:[
"Primary Key",
"Alternate Key",
"Unique Key"
]
},

{
id:12,
category:"Constraints",
difficulty:"Beginner",
question:"What is an Alternate Key?",
answer:`Definition:
An Alternate Key is a Candidate Key that is not selected as the Primary Key.

────────────────────────────────────────

Easy Explanation:
When a table has multiple Candidate Keys, only one becomes the Primary Key.

The remaining Candidate Keys are known as Alternate Keys.

────────────────────────────────────────

Real-Life Example:
EmployeeID and EmailID are unique.

If EmployeeID is chosen as the Primary Key, then EmailID automatically becomes the Alternate Key.

────────────────────────────────────────

Interview Answer:
An Alternate Key is a Candidate Key that is not selected as the Primary Key but can still uniquely identify every record.`,

example:`
EmployeeID  ← Primary Key

EmailID     ← Alternate Key
`,

interviewTip:"Alternate Keys always contain unique values.",

relatedTopics:[
"Candidate Key",
"Primary Key",
"Unique Key"
]
},

{
id:13,
category:"Constraints",
difficulty:"Beginner",
question:"What is a Composite Key?",
answer:`Definition:
A Composite Key is a Primary Key made by combining two or more columns.

────────────────────────────────────────

Easy Explanation:
Sometimes one column alone cannot uniquely identify a record.

In that case, multiple columns are combined to create a Composite Key.

────────────────────────────────────────

Real-Life Example:
A Student can enroll in many Courses.

A Course can have many Students.

Neither StudentID nor CourseID alone is unique.

StudentID + CourseID together uniquely identify each record.

────────────────────────────────────────

Interview Answer:
A Composite Key consists of two or more columns that together uniquely identify every record in a table.`,

example:`
CREATE TABLE StudentCourses
(
    StudentID INT,
    CourseID INT,

    PRIMARY KEY(StudentID, CourseID)
);
`,

interviewTip:"Composite Key always contains multiple columns.",

relatedTopics:[
"Primary Key",
"Foreign Key",
"Candidate Key"
]
},

{
id:14,
category:"Constraints",
difficulty:"Beginner",
question:"What is a Unique Key?",
answer:`Definition:
A Unique Key ensures that duplicate values are not allowed in a column.

────────────────────────────────────────

Easy Explanation:
If a column has a Unique Key, every value must be different.

For example, every employee should have a different company Email ID.

────────────────────────────────────────

Real-Life Example:
EmployeeID

101
102
103

EmailID

rahul@company.com
priya@company.com
amit@company.com

No duplicate Email IDs are allowed.

────────────────────────────────────────

Interview Answer:
A Unique Key is a constraint that prevents duplicate values in a column. Depending on the database system, it may allow one NULL value.`,

example:`
CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    EmailID VARCHAR(100) UNIQUE
);
`,

interviewTip:"Primary Key does not allow NULL. Unique Key may allow one NULL depending on the database.",

relatedTopics:[
"Primary Key",
"Candidate Key",
"Constraint"
]
},

{
id:15,
category:"Constraints",
difficulty:"Beginner",
question:"What is a Super Key?",
answer:`Definition:
A Super Key is any column or combination of columns that can uniquely identify every record in a table.

────────────────────────────────────────

Easy Explanation:
A Super Key may contain extra columns that are not required for uniqueness.

Candidate Keys are the smallest possible Super Keys.

────────────────────────────────────────

Real-Life Example:
EmployeeID alone identifies an employee.

EmployeeID + EmployeeName also identifies the employee.

Although EmployeeName is unnecessary, the combination is still a Super Key.

────────────────────────────────────────

Interview Answer:
A Super Key is a set of one or more columns that uniquely identifies each record. It may contain additional unnecessary columns.`,

example:`
Super Keys

(EmployeeID)

(EmployeeID, EmployeeName)

(EmployeeID, EmailID)
`,

interviewTip:"Every Candidate Key is a Super Key, but every Super Key is not a Candidate Key.",

relatedTopics:[
"Candidate Key",
"Primary Key",
"Unique Key"
]
},

{
id:16,
category:"Constraints",
difficulty:"Beginner",
question:"What is NULL Value?",
answer:`Definition:
A NULL value represents missing, unknown or unavailable information in a database. It does not mean zero, blank space or an empty string.

────────────────────────────────────────

Easy Explanation:
Think of a student admission form where the Phone Number is not provided.

The phone number is not zero and not blank; it is simply unknown. In SQL, this is stored as NULL.

────────────────────────────────────────

Real-Life Example:
A company has hired a new employee, but the employee has not yet been assigned a Manager.

EmployeeName | ManagerID
--------------------------------
Rahul        | NULL

The ManagerID is currently unknown.

────────────────────────────────────────

Interview Answer:
NULL represents the absence of a value. It indicates that the data is missing, unknown or not applicable. NULL is different from 0 and an empty string.`,

example:`
SELECT *
FROM Employees
WHERE ManagerID IS NULL;
`,

interviewTip:"Never compare NULL using '='. Always use IS NULL or IS NOT NULL.",

relatedTopics:[
"IS NULL",
"IS NOT NULL",
"NOT NULL"
]
},

{
id:17,
category:"Constraints",
difficulty:"Beginner",
question:"What is the difference between NULL and 0?",
answer:`Definition:
NULL means the value is missing or unknown, whereas 0 is an actual numeric value.

────────────────────────────────────────

Easy Explanation:
Suppose an employee's Bonus field is stored in the database.

Bonus = 0
means the employee received zero bonus.

Bonus = NULL
means the bonus information is not available.

────────────────────────────────────────

Real-Life Example:
Salary | Bonus
---------------------
50000  | 0
60000  | NULL

The first employee definitely received no bonus.

The second employee's bonus information is not yet available.

────────────────────────────────────────

Interview Answer:
NULL represents missing or unknown information, while 0 represents an actual numeric value. They should never be treated as the same.`,

example:`
SELECT *
FROM Employees
WHERE Bonus IS NULL;
`,

interviewTip:"One of the most common interview questions. Explain with a real-life example.",

relatedTopics:[
"NULL",
"IS NULL",
"Data Types"
]
},

{
id:18,
category:"Constraints",
difficulty:"Beginner",
question:"What is a DEFAULT Constraint?",
answer:`Definition:
A DEFAULT Constraint automatically assigns a predefined value when no value is provided during data insertion.

────────────────────────────────────────

Easy Explanation:
Imagine every new employee automatically gets the status 'Active' unless another status is specified.

Instead of entering 'Active' every time, SQL does it automatically.

────────────────────────────────────────

Real-Life Example:
A company stores employee records.

If Status is not entered, SQL automatically stores 'Active'.

────────────────────────────────────────

Interview Answer:
A DEFAULT Constraint automatically inserts a default value into a column when no value is provided during an INSERT operation.`,

example:`
CREATE TABLE Employees
(
EmployeeID INT,
Status VARCHAR(20)
DEFAULT 'Active'
);
`,

interviewTip:"DEFAULT works only when no value is supplied during INSERT.",

relatedTopics:[
"Constraint",
"INSERT",
"NOT NULL"
]
},

{
id:19,
category:"Constraints",
difficulty:"Beginner",
question:"What is a NOT NULL Constraint?",
answer:`Definition:
A NOT NULL Constraint ensures that a column cannot store NULL values.

────────────────────────────────────────

Easy Explanation:
Some information is mandatory.

For example, every employee must have an EmployeeID and EmployeeName.

These fields cannot be left empty.

────────────────────────────────────────

Real-Life Example:
During employee registration, EmployeeName must always be entered.

If it is left blank, SQL will reject the record.

────────────────────────────────────────

Interview Answer:
A NOT NULL Constraint makes a column mandatory by preventing NULL values from being stored.`,

example:`
CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
EmployeeName VARCHAR(100) NOT NULL
);
`,

interviewTip:"NOT NULL ensures that mandatory information is always available.",

relatedTopics:[
"NULL",
"Primary Key",
"Constraint"
]
},

{
id:20,
category:"Constraints",
difficulty:"Beginner",
question:"What is a CHECK Constraint?",
answer:`Definition:
A CHECK Constraint validates data before it is stored in the database.

────────────────────────────────────────

Easy Explanation:
It acts like a security guard.

Only values that satisfy a specified condition are allowed.

If the condition fails, SQL rejects the data.

────────────────────────────────────────

Real-Life Example:
A company does not allow negative salaries.

If someone tries to insert Salary = -5000, SQL will reject the record.

────────────────────────────────────────

Interview Answer:
A CHECK Constraint restricts the values that can be stored in a column by enforcing a logical condition.`,

example:`
CREATE TABLE Employees
(
EmployeeID INT,
Salary DECIMAL(10,2),
CHECK (Salary > 0)
);
`,

interviewTip:"CHECK is commonly used for Age, Salary, Marks, Quantity and Percentage validations.",

relatedTopics:[
"Constraint",
"DEFAULT",
"NOT NULL"
]
},

{
id:21,
category:"Constraints",
difficulty:"Beginner",
question:"What is a UNIQUE Constraint?",
answer:`Definition:
A UNIQUE Constraint ensures that every value stored in a column is unique. It prevents duplicate values from being inserted into the table.

────────────────────────────────────────

Easy Explanation:
Imagine every employee in a company has a unique Email Address.

Two employees cannot share the same company email.

The UNIQUE Constraint enforces this rule automatically.

────────────────────────────────────────

Real-Life Example:
A bank stores customers' PAN Numbers.

Every customer must have a unique PAN Number.

If another customer tries to register using the same PAN Number, SQL rejects the record.

────────────────────────────────────────

Interview Answer:
A UNIQUE Constraint prevents duplicate values from being stored in a column. Unlike a Primary Key, most database systems allow one NULL value in a UNIQUE column.`,

example:`
CREATE TABLE Employees
(
EmployeeID INT PRIMARY KEY,
Email VARCHAR(100) UNIQUE
);
`,

interviewTip:"Remember: Primary Key = No NULL + No Duplicate. UNIQUE = No Duplicate (NULL behavior depends on the database).",

relatedTopics:[
"Primary Key",
"Constraint",
"Candidate Key"
]
},

{
id:22,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is AUTO_INCREMENT / IDENTITY?",
answer:`Definition:
AUTO_INCREMENT (MySQL) or IDENTITY (SQL Server) automatically generates unique numbers whenever a new record is inserted.

────────────────────────────────────────

Easy Explanation:
Suppose every new employee joins the company.

Instead of manually assigning Employee IDs like 101, 102 and 103, SQL automatically generates the next available number.

This saves time and prevents duplicate IDs.

────────────────────────────────────────

Real-Life Example:
A shopping website creates Order IDs automatically.

Order 1001

Order 1002

Order 1003

The user never enters these numbers manually.

────────────────────────────────────────

Interview Answer:
AUTO_INCREMENT (MySQL) and IDENTITY (SQL Server) automatically generate sequential numeric values for new records. They are commonly used with Primary Keys.`,

example:`
-- SQL Server

EmployeeID INT IDENTITY(1,1)

-- MySQL

EmployeeID INT AUTO_INCREMENT
PRIMARY KEY
`,

interviewTip:"Remember: SQL Server uses IDENTITY, while MySQL uses AUTO_INCREMENT.",

relatedTopics:[
"Primary Key",
"INSERT",
"Identity"
]
},

{
id:23,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is a Schema?",
answer:`Definition:
A Schema is a logical container inside a database that organizes database objects such as tables, views, stored procedures and functions.

────────────────────────────────────────

Easy Explanation:
Think of a schema as a folder on your computer.

Just as folders help organize files, schemas help organize database objects.

────────────────────────────────────────

Real-Life Example:
A company database may have separate schemas:

HR

Finance

Sales

IT

Each department stores its own tables inside its own schema.

────────────────────────────────────────

Interview Answer:
A Schema is a logical collection of database objects used to organize and manage tables, views, procedures and other objects efficiently.`,

example:`
HR.Employees

Sales.Customers

Finance.Payroll
`,

interviewTip:"Database = Library, Schema = Bookshelf, Table = Book.",

relatedTopics:[
"Database",
"Table",
"View"
]
},

{
id:24,
category:"SQL Basics",
difficulty:"Beginner",
question:"What is Metadata?",
answer:`Definition:
Metadata is information about the database itself rather than the actual business data.

────────────────────────────────────────

Easy Explanation:
Metadata describes the structure of the database.

It tells SQL:

• Table Names

• Column Names

• Data Types

• Constraints

• Keys

────────────────────────────────────────

Real-Life Example:
Suppose the Employees table has these columns:

EmployeeID

EmployeeName

Salary

The names, data types and constraints of these columns are Metadata.

The employee records themselves are actual data.

────────────────────────────────────────

Interview Answer:
Metadata is data about data. It describes the structure and properties of database objects such as tables, columns, keys and constraints.`,

example:`
SELECT *
FROM INFORMATION_SCHEMA.TABLES;
`,

interviewTip:"Remember: Metadata describes the structure, not the records stored in the table.",

relatedTopics:[
"Schema",
"Table",
"Column"
]
},

{
id:25,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the difference between DELETE, TRUNCATE and DROP?",
answer:`Definition:
DELETE, TRUNCATE and DROP are SQL commands used to remove data or database objects, but they work differently.

────────────────────────────────────────

Easy Explanation:

DELETE
Removes selected rows from a table.
The table structure remains.
A WHERE clause can be used.

TRUNCATE
Removes all rows from a table.
The table structure remains.
WHERE cannot be used.

DROP
Deletes the entire table including its structure, indexes and constraints.

────────────────────────────────────────

Real-Life Example:

DELETE
Remove one resigned employee.

TRUNCATE
Clear all employee records before importing fresh data.

DROP
Delete the Employees table permanently because it is no longer required.

────────────────────────────────────────

Interview Answer:
DELETE removes selected rows and supports the WHERE clause.
TRUNCATE removes all rows quickly but keeps the table structure.
DROP removes both the table structure and all data permanently.

This is one of the most frequently asked SQL interview questions.`,

example:`
DELETE FROM Employees
WHERE EmployeeID = 101;

TRUNCATE TABLE Employees;

DROP TABLE Employees;
`,

interviewTip:"Always remember: DELETE = Rows, TRUNCATE = All Rows, DROP = Entire Table.",

relatedTopics:[
"DELETE",
"TRUNCATE",
"DROP"
]
},

{
id:26,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is DDL (Data Definition Language)?",
answer:`Definition:
DDL (Data Definition Language) is a category of SQL commands used to create and modify the structure of database objects such as tables, views, indexes and schemas.

────────────────────────────────────────

Easy Explanation:
Think of DDL as an architect.

Before storing data, we first need to build the database structure.

DDL commands create, modify and remove these structures.

────────────────────────────────────────

Real-Life Example:
A company wants to create an Employees table before storing employee information.

DDL commands are used to create the table and define its columns.

────────────────────────────────────────

Interview Answer:
DDL stands for Data Definition Language. It is used to define and manage database objects. Common DDL commands include CREATE, ALTER, DROP, TRUNCATE and RENAME.`,

example:`
CREATE TABLE Employees
(
    EmployeeID INT,
    EmployeeName VARCHAR(100)
);
`,

interviewTip:"Remember: DDL changes the database structure, not the data.",

relatedTopics:[
"CREATE",
"ALTER",
"DROP"
]
},

{
id:27,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is DML (Data Manipulation Language)?",
answer:`Definition:
DML (Data Manipulation Language) consists of SQL commands used to insert, update and delete data stored inside database tables.

────────────────────────────────────────

Easy Explanation:
Once a table is created, DML commands allow users to work with the data stored inside it.

They help add new records, modify existing records and remove unwanted records.

────────────────────────────────────────

Real-Life Example:
When a new employee joins a company, an INSERT command is used.

If the employee's salary changes, UPDATE is used.

If the employee resigns, DELETE removes the record.

────────────────────────────────────────

Interview Answer:
DML stands for Data Manipulation Language. It is used to insert, update and delete records from database tables. Common DML commands are INSERT, UPDATE and DELETE.`,

example:`
INSERT INTO Employees
VALUES(101,'Rahul','Finance');
`,

interviewTip:"Remember: DML works with table data, not the table structure.",

relatedTopics:[
"INSERT",
"UPDATE",
"DELETE"
]
},

{
id:28,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is DQL (Data Query Language)?",
answer:`Definition:
DQL (Data Query Language) is used to retrieve data from database tables.

────────────────────────────────────────

Easy Explanation:
Whenever you want to view data stored inside a database, you use DQL.

The SELECT statement is the most commonly used DQL command.

────────────────────────────────────────

Real-Life Example:
A manager wants to see all employees working in the Finance department.

The SELECT statement retrieves the required records.

────────────────────────────────────────

Interview Answer:
DQL stands for Data Query Language. It is mainly represented by the SELECT statement, which retrieves data from one or more database tables.`,

example:`
SELECT *
FROM Employees;
`,

interviewTip:"Most interviewers expect you to know that SELECT belongs to DQL.",

relatedTopics:[
"SELECT",
"WHERE",
"ORDER BY"
]
},

{
id:29,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is DCL (Data Control Language)?",
answer:`Definition:
DCL (Data Control Language) is used to control access and permissions in a database.

────────────────────────────────────────

Easy Explanation:
Not every user should have permission to view or modify every table.

DCL allows database administrators to grant or revoke permissions.

────────────────────────────────────────

Real-Life Example:
The HR department can view employee salary details, while interns should not have access.

Using DCL, the administrator grants access only to authorized users.

────────────────────────────────────────

Interview Answer:
DCL stands for Data Control Language. It is used to manage user permissions and security in a database. Common DCL commands are GRANT and REVOKE.`,

example:`
GRANT SELECT
ON Employees
TO HR_User;
`,

interviewTip:"Remember: DCL is mainly used by Database Administrators (DBAs).",

relatedTopics:[
"GRANT",
"REVOKE",
"Security"
]
},

{
id:30,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is TCL (Transaction Control Language)?",
answer:`Definition:
TCL (Transaction Control Language) is used to manage database transactions and ensure data consistency.

────────────────────────────────────────

Easy Explanation:
Imagine transferring ₹10,000 from one bank account to another.

The amount should be deducted from one account and added to the other.

If any step fails, the entire transaction should be cancelled.

TCL makes this possible.

────────────────────────────────────────

Real-Life Example:
An online shopping website deducts inventory and processes payment.

If payment fails, inventory changes should also be cancelled.

This is handled using transactions.

────────────────────────────────────────

Interview Answer:
TCL stands for Transaction Control Language. It manages database transactions using commands such as COMMIT, ROLLBACK and SAVEPOINT to ensure data consistency.`,

example:`
BEGIN TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 1000
WHERE AccountID = 1;

UPDATE Accounts
SET Balance = Balance + 1000
WHERE AccountID = 2;

COMMIT;
`,

interviewTip:"Always explain COMMIT and ROLLBACK with a banking transaction example.",

relatedTopics:[
"COMMIT",
"ROLLBACK",
"SAVEPOINT"
]
},

{
id:31,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the CREATE Statement?",
answer:`Definition:
The CREATE statement is a DDL (Data Definition Language) command used to create new database objects such as tables, databases, views, indexes and stored procedures.

────────────────────────────────────────

Easy Explanation:
Before storing any data, we first need a place to store it.

The CREATE statement builds that place by creating a new database object.

────────────────────────────────────────

Real-Life Example:
A company starts a new HR system.

The database administrator creates an Employees table before HR can store employee information.

────────────────────────────────────────

Interview Answer:
The CREATE statement is used to create new database objects such as tables, databases, views and indexes. It is a DDL command because it defines the database structure.`,

example:`
CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);
`,

interviewTip:"Remember: CREATE builds new database objects.",

relatedTopics:[
"DDL",
"ALTER",
"DROP"
]
},

{
id:32,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the ALTER Statement?",
answer:`Definition:
The ALTER statement is used to modify the structure of an existing database object.

────────────────────────────────────────

Easy Explanation:
Sometimes after creating a table, business requirements change.

Instead of creating the table again, we simply modify it using ALTER.

────────────────────────────────────────

Real-Life Example:
The HR department decides to store Employee Email IDs.

Instead of creating a new table, a new Email column is added using ALTER.

────────────────────────────────────────

Interview Answer:
The ALTER statement modifies existing database objects by adding, removing or changing columns, constraints and other properties.`,

example:`
ALTER TABLE Employees
ADD Email VARCHAR(100);
`,

interviewTip:"ALTER changes the structure without deleting existing data.",

relatedTopics:[
"CREATE",
"DROP",
"Column"
]
},

{
id:33,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the DROP Statement?",
answer:`Definition:
The DROP statement permanently removes a database object along with all of its data.

────────────────────────────────────────

Easy Explanation:
If a table is no longer required, DROP completely removes it from the database.

After dropping the table, both the structure and data are lost.

────────────────────────────────────────

Real-Life Example:
A temporary project table is no longer needed after project completion.

The database administrator removes it using DROP.

────────────────────────────────────────

Interview Answer:
DROP is a DDL command that permanently deletes database objects such as tables, views and databases along with their data and structure.`,

example:`
DROP TABLE Employees;
`,

interviewTip:"DROP removes both the table structure and its data permanently.",

relatedTopics:[
"DELETE",
"TRUNCATE",
"DDL"
]
},

{
id:34,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the RENAME Statement?",
answer:`Definition:
The RENAME statement is used to change the name of an existing database object.

────────────────────────────────────────

Easy Explanation:
Sometimes a table name does not follow company naming standards.

Instead of creating a new table, the existing table can simply be renamed.

────────────────────────────────────────

Real-Life Example:
A table named Emp is renamed to Employees to make it more meaningful and easier to understand.

────────────────────────────────────────

Interview Answer:
The RENAME statement changes the name of database objects without affecting the stored data.`,

example:`
ALTER TABLE Emp
RENAME TO Employees;
`,

interviewTip:"Syntax may vary between SQL Server, MySQL and Oracle, so mention the database if asked.",

relatedTopics:[
"ALTER",
"CREATE",
"Table"
]
},

{
id:35,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the TRUNCATE Statement?",
answer:`Definition:
TRUNCATE removes all rows from a table while keeping the table structure intact.

────────────────────────────────────────

Easy Explanation:
Imagine you want to empty a notebook without throwing the notebook away.

TRUNCATE removes all the records but keeps the table ready for new data.

────────────────────────────────────────

Real-Life Example:
A company imports fresh employee data every month.

Before importing the latest data, the old records are removed using TRUNCATE.

────────────────────────────────────────

Interview Answer:
TRUNCATE is a DDL command that quickly removes all rows from a table while preserving its structure. Unlike DELETE, it cannot use a WHERE clause.`,

example:`
TRUNCATE TABLE Employees;
`,

interviewTip:"Remember: TRUNCATE removes all rows, keeps the table, and does not support WHERE.",

relatedTopics:[
"DELETE",
"DROP",
"DDL"
]
},

{
id:36,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the INSERT Statement?",
answer:`Definition:
The INSERT statement is a DML (Data Manipulation Language) command used to add one or more new records into a database table.

────────────────────────────────────────

Easy Explanation:
Whenever a new record needs to be stored in the database, the INSERT statement is used.

For example, when a new employee joins a company, their details are inserted into the Employees table.

────────────────────────────────────────

Real-Life Example:
An HR executive hires a new employee.

Instead of writing the employee details on paper, the HR application stores the information in the Employees table using the INSERT statement.

────────────────────────────────────────

Interview Answer:
The INSERT statement is used to add new records into a database table. It is a DML command because it modifies the data stored inside the table.`,

example:`
INSERT INTO Employees
(EmployeeID, EmployeeName, Department, Salary)
VALUES
(101, 'Rahul Sharma', 'Finance', 55000);
`,

interviewTip:"Remember: INSERT adds new records. It never modifies existing records.",

relatedTopics:[
"UPDATE",
"DELETE",
"DML"
]
},

{
id:37,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the UPDATE Statement?",
answer:`Definition:
The UPDATE statement is a DML command used to modify existing records in a database table.

────────────────────────────────────────

Easy Explanation:
Sometimes stored information changes.

Instead of deleting and inserting the record again, UPDATE changes only the required values.

────────────────────────────────────────

Real-Life Example:
An employee gets promoted and receives a salary increase.

Only the Salary column is updated while the remaining employee information stays unchanged.

────────────────────────────────────────

Interview Answer:
The UPDATE statement modifies existing records in a table. It is generally used with the WHERE clause to update only the required rows.`,

example:`
UPDATE Employees
SET Salary = 65000
WHERE EmployeeID = 101;
`,

interviewTip:"Never execute UPDATE without a WHERE clause unless you intentionally want to update every row.",

relatedTopics:[
"INSERT",
"DELETE",
"WHERE"
]
},

{
id:38,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the DELETE Statement?",
answer:`Definition:
The DELETE statement is a DML command used to remove one or more records from a database table.

────────────────────────────────────────

Easy Explanation:
When information is no longer required, DELETE removes the selected rows while keeping the table structure unchanged.

────────────────────────────────────────

Real-Life Example:
An employee resigns from the company.

The HR administrator removes the employee record from the Employees table using the DELETE statement.

────────────────────────────────────────

Interview Answer:
The DELETE statement removes records from a table. It supports the WHERE clause to delete only the required rows. Without a WHERE clause, all records in the table are removed while the table itself remains.`,

example:`
DELETE FROM Employees
WHERE EmployeeID = 101;
`,

interviewTip:"Always use WHERE with DELETE unless you intentionally want to remove every record.",

relatedTopics:[
"UPDATE",
"TRUNCATE",
"WHERE"
]
},

{
id:39,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the SELECT Statement?",
answer:`Definition:
The SELECT statement is a DQL (Data Query Language) command used to retrieve data from one or more database tables.

────────────────────────────────────────

Easy Explanation:
SELECT is the most frequently used SQL command.

Whenever users search for customer details, employee information, sales reports or bank transactions, SQL uses the SELECT statement to retrieve the required data.

────────────────────────────────────────

Real-Life Example:
A manager wants to see all employees working in the IT department.

The SELECT statement quickly retrieves only those employee records.

────────────────────────────────────────

Interview Answer:
The SELECT statement retrieves data from database tables. It can be combined with WHERE, ORDER BY, GROUP BY, HAVING and JOIN clauses to produce meaningful reports.`,

example:`
SELECT EmployeeName,
       Department,
       Salary
FROM Employees;
`,

interviewTip:"SELECT is the foundation of SQL. Nearly every interview includes questions about it.",

relatedTopics:[
"WHERE",
"ORDER BY",
"GROUP BY"
]
},

{
id:40,
category:"SQL Commands",
difficulty:"Beginner",
question:"What is the WHERE Clause?",
answer:`Definition:
The WHERE clause is used to filter records based on a specified condition.

────────────────────────────────────────

Easy Explanation:
Imagine a table containing 10,000 employees.

If you only need employees from the Finance department, the WHERE clause filters the records and returns only the matching rows.

────────────────────────────────────────

Real-Life Example:
A bank manager wants to view customers whose account balance is greater than ₹1,00,000.

The WHERE clause filters the records and displays only those customers.

────────────────────────────────────────

Interview Answer:
The WHERE clause filters records based on one or more conditions. It can be used with SELECT, UPDATE and DELETE statements to work only with the required rows.`,

example:`
SELECT *
FROM Employees
WHERE Department = 'Finance';
`,

interviewTip:"WHERE works with SELECT, UPDATE and DELETE. Interviewers often ask this as a follow-up question.",

relatedTopics:[
"SELECT",
"UPDATE",
"DELETE",
"Operators"
]
},

{
id:41,
category:"SQL Clauses",
difficulty:"Beginner",
question:"What is the ORDER BY Clause?",
answer:`Definition:
The ORDER BY clause is used to sort the result set returned by a SQL query in either ascending (ASC) or descending (DESC) order.

────────────────────────────────────────

Easy Explanation:
Imagine you have a list of 1,000 employees.

If you want to arrange them alphabetically by name or from highest salary to lowest salary, you use the ORDER BY clause.

Without ORDER BY, SQL does not guarantee the order of records.

────────────────────────────────────────

Real-Life Example:
An HR manager wants to see employees with the highest salaries first.

Using ORDER BY Salary DESC displays the highest-paid employees at the top.

────────────────────────────────────────

Interview Answer:
The ORDER BY clause sorts the result set based on one or more columns. By default, SQL sorts data in ascending order (ASC). To sort in descending order, use DESC.`,

example:`
-- Ascending Order

SELECT EmployeeName, Salary
FROM Employees
ORDER BY Salary ASC;

-- Descending Order

SELECT EmployeeName, Salary
FROM Employees
ORDER BY Salary DESC;
`,

interviewTip:"Remember: ASC is the default sorting order. DESC displays records from highest to lowest.",

relatedTopics:[
"SELECT",
"WHERE",
"TOP"
]
},

{
id:42,
category:"SQL Clauses",
difficulty:"Beginner",
question:"What is DISTINCT?",
answer:`Definition:
The DISTINCT keyword removes duplicate values from the query result and returns only unique records.

────────────────────────────────────────

Easy Explanation:
Sometimes many employees belong to the same department.

If you want to see each department only once, use DISTINCT.

────────────────────────────────────────

Real-Life Example:
Employees Table

Rahul   Finance

Amit    Finance

Priya   HR

Using DISTINCT Department returns:

Finance

HR

────────────────────────────────────────

Interview Answer:
DISTINCT eliminates duplicate values from the selected column or columns and returns only unique records.`,

example:`
SELECT DISTINCT Department
FROM Employees;
`,

interviewTip:"DISTINCT removes duplicate rows only from the selected columns, not from the entire table.",

relatedTopics:[
"SELECT",
"GROUP BY",
"ORDER BY"
]
},

{
id:43,
category:"SQL Clauses",
difficulty:"Beginner",
question:"What is TOP / LIMIT?",
answer:`Definition:
TOP (SQL Server) and LIMIT (MySQL/PostgreSQL) are used to return only a specified number of records from a query result.

────────────────────────────────────────

Easy Explanation:
Imagine a manager only wants to see the first 10 employees instead of all 50,000 records.

TOP or LIMIT helps retrieve only the required number of rows.

────────────────────────────────────────

Real-Life Example:
A dashboard displays only the latest five customer orders instead of the complete order history.

────────────────────────────────────────

Interview Answer:
TOP and LIMIT restrict the number of rows returned by a SELECT statement. SQL Server uses TOP, while MySQL and PostgreSQL use LIMIT.`,

example:`
-- SQL Server

SELECT TOP 5 *
FROM Employees;

-- MySQL

SELECT *
FROM Employees
LIMIT 5;
`,

interviewTip:"Remember: SQL Server uses TOP, whereas MySQL uses LIMIT.",

relatedTopics:[
"SELECT",
"ORDER BY",
"OFFSET"
]
},

{
id:44,
category:"SQL Clauses",
difficulty:"Beginner",
question:"What is an Alias in SQL?",
answer:`Definition:
An Alias is a temporary name given to a column or table to make SQL queries easier to read and understand.

────────────────────────────────────────

Easy Explanation:
Sometimes column names are very long.

Instead of displaying AnnualEmployeeSalaryAfterTax, you can display Annual Salary.

Aliases improve report readability.

────────────────────────────────────────

Real-Life Example:
A sales report shows:

EmployeeName

MonthlySalary

Instead of displaying MonthlySalary, the report displays Monthly Salary.

────────────────────────────────────────

Interview Answer:
An Alias is a temporary name assigned to a column or table during query execution. It does not permanently change the actual column or table name.`,

example:`
SELECT
EmployeeName AS Employee,
Salary AS MonthlySalary
FROM Employees;
`,

interviewTip:"Aliases exist only while the query is running. They do not rename the actual database object.",

relatedTopics:[
"SELECT",
"Column",
"Table"
]
},

{
id:45,
category:"SQL Operators",
difficulty:"Beginner",
question:"What are Wildcards in SQL?",
answer:`Definition:
Wildcards are special characters used with the LIKE operator to search for patterns instead of exact values.

────────────────────────────────────────

Easy Explanation:
Suppose you don't know the full employee name.

You only remember that it starts with 'Ra'.

Wildcards help find matching records even when the complete value is unknown.

────────────────────────────────────────

Real-Life Example:
Searching customers whose names start with 'A'.

Searching products ending with 'Phone'.

Searching employees whose names contain 'mit'.

────────────────────────────────────────

Interview Answer:
Wildcards are special characters used with the LIKE operator to perform pattern matching. The most common wildcards are '%' (any number of characters) and '_' (exactly one character).`,

example:`
-- Starts with R

SELECT *
FROM Employees
WHERE EmployeeName LIKE 'R%';

-- Ends with a

SELECT *
FROM Employees
WHERE EmployeeName LIKE '%a';

-- Contains 'mit'

SELECT *
FROM Employees
WHERE EmployeeName LIKE '%mit%';

-- Second character is 'a'

SELECT *
FROM Employees
WHERE EmployeeName LIKE '_a%';
`,

interviewTip:"Remember: % = Multiple Characters, _ = Single Character.",

relatedTopics:[
"LIKE",
"Pattern Matching",
"WHERE"
]
},

{
id:46,
category:"SQL Operators",
difficulty:"Beginner",
question:"What is the LIKE Operator?",
answer:`Definition:
The LIKE operator is used to search for values that match a specific pattern in a column.

────────────────────────────────────────

Easy Explanation:
Sometimes you don't know the exact value you're searching for.

For example, you remember that an employee's name starts with "Ra", but you don't remember the full name.

The LIKE operator helps you find matching records.

────────────────────────────────────────

Real-Life Example:
A customer support executive wants to find all customers whose names start with "A".

Instead of checking thousands of records manually, the LIKE operator filters the required records.

────────────────────────────────────────

Interview Answer:
The LIKE operator is used with the WHERE clause to search for records based on a pattern. It commonly uses '%' to represent multiple characters and '_' to represent a single character.`,

example:`
-- Starts with 'R'

SELECT *
FROM Employees
WHERE EmployeeName LIKE 'R%';

-- Ends with 'a'

SELECT *
FROM Employees
WHERE EmployeeName LIKE '%a';

-- Contains 'mit'

SELECT *
FROM Employees
WHERE EmployeeName LIKE '%mit%';
`,

interviewTip:"LIKE is always used with pattern matching. Remember '%' means many characters and '_' means one character.",

relatedTopics:[
"Wildcards",
"WHERE",
"Pattern Matching"
]
},

{
id:47,
category:"SQL Operators",
difficulty:"Beginner",
question:"What is the IN Operator?",
answer:`Definition:
The IN operator allows you to compare a column against multiple values in a single condition.

────────────────────────────────────────

Easy Explanation:
Instead of writing multiple OR conditions, you can write one IN condition.

This makes SQL queries shorter, cleaner and easier to read.

────────────────────────────────────────

Real-Life Example:
A manager wants to view employees working in Finance, HR and IT departments.

Instead of writing three OR conditions, IN performs the same task more efficiently.

────────────────────────────────────────

Interview Answer:
The IN operator checks whether a value exists within a specified list of values. It is commonly used as an alternative to multiple OR conditions.`,

example:`
SELECT *
FROM Employees
WHERE Department IN
('Finance','HR','IT');
`,

interviewTip:"Use IN instead of multiple OR conditions to improve readability.",

relatedTopics:[
"WHERE",
"OR",
"NOT IN"
]
},

{
id:48,
category:"SQL Operators",
difficulty:"Beginner",
question:"What is the BETWEEN Operator?",
answer:`Definition:
The BETWEEN operator is used to retrieve values that fall within a specified range.

────────────────────────────────────────

Easy Explanation:
Instead of checking whether a salary is greater than 50,000 and less than 80,000 separately, BETWEEN allows you to specify the entire range in one condition.

────────────────────────────────────────

Real-Life Example:
A company wants to find employees earning between ₹40,000 and ₹60,000.

BETWEEN returns only those employees whose salaries fall within that range.

────────────────────────────────────────

Interview Answer:
The BETWEEN operator filters records whose values lie between two specified values. It includes both the starting and ending values.`,

example:`
SELECT *
FROM Employees
WHERE Salary
BETWEEN 40000 AND 60000;
`,

interviewTip:"BETWEEN includes both boundary values.",

relatedTopics:[
"WHERE",
"AND",
"Comparison Operators"
]
},

{
id:49,
category:"SQL Operators",
difficulty:"Beginner",
question:"What is the IS NULL Operator?",
answer:`Definition:
The IS NULL operator is used to identify records where a column contains a NULL value.

────────────────────────────────────────

Easy Explanation:
You cannot use '=' to compare NULL values.

SQL provides the IS NULL operator specifically for checking missing or unknown values.

────────────────────────────────────────

Real-Life Example:
A company wants to identify employees who have not yet been assigned a manager.

Those records contain NULL in the ManagerID column.

────────────────────────────────────────

Interview Answer:
The IS NULL operator is used to retrieve records where a column contains NULL values. It is the correct way to check for missing information in SQL.`,

example:`
SELECT *
FROM Employees
WHERE ManagerID IS NULL;
`,

interviewTip:"Never write WHERE ManagerID = NULL. Always use IS NULL.",

relatedTopics:[
"NULL",
"IS NOT NULL",
"WHERE"
]
},

{
id:50,
category:"SQL Operators",
difficulty:"Beginner",
question:"What is the EXISTS Operator?",
answer:`Definition:
The EXISTS operator checks whether a subquery returns any records.

────────────────────────────────────────

Easy Explanation:
Imagine you want to know whether a customer has placed at least one order.

You don't need all order details.

You only need to know whether an order exists.

EXISTS answers this question.

────────────────────────────────────────

Real-Life Example:
A company wants to list only those customers who have placed orders.

The EXISTS operator checks whether matching records are available in the Orders table.

────────────────────────────────────────

Interview Answer:
The EXISTS operator returns TRUE if the subquery returns one or more rows. It is commonly used with correlated subqueries and performs efficiently when checking for the existence of related records.`,

example:`
SELECT CustomerName
FROM Customers C
WHERE EXISTS
(
SELECT 1
FROM Orders O
WHERE O.CustomerID = C.CustomerID
);
`,

interviewTip:"EXISTS checks whether records exist. It does not return the records from the subquery.",

relatedTopics:[
"Subquery",
"IN",
"JOIN"
]
},

{
id:51,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the COUNT() Function?",
answer:`Definition:
The COUNT() function is an aggregate function used to count the number of rows in a table or the number of non-NULL values in a column.

────────────────────────────────────────

Easy Explanation:
Imagine an HR manager wants to know how many employees work in the company.

Instead of counting every employee manually, SQL uses the COUNT() function to calculate the total instantly.

COUNT() saves time and provides accurate results.

────────────────────────────────────────

Real-Life Example:
A company wants to know:

• Total Employees
• Total Customers
• Total Orders

COUNT() returns the required numbers within seconds.

────────────────────────────────────────

Interview Answer:
COUNT() is an aggregate function that returns the total number of records. COUNT(*) counts all rows, whereas COUNT(ColumnName) counts only non-NULL values in that column.`,

example:`
-- Count all employees

SELECT COUNT(*)
FROM Employees;

-- Count employees having Email

SELECT COUNT(Email)
FROM Employees;
`,

interviewTip:"Remember the difference between COUNT(*) and COUNT(ColumnName). This is a very common interview question.",

relatedTopics:[
"Aggregate Functions",
"GROUP BY",
"HAVING"
]
},

{
id:52,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the SUM() Function?",
answer:`Definition:
The SUM() function calculates the total of all numeric values in a column.

────────────────────────────────────────

Easy Explanation:
Suppose a company wants to calculate the total salary paid to all employees.

Instead of adding each salary manually, SQL calculates the total automatically using SUM().

────────────────────────────────────────

Real-Life Example:
A finance manager wants to know the total monthly payroll expense.

SUM(Salary) returns the total salary paid to all employees.

────────────────────────────────────────

Interview Answer:
SUM() is an aggregate function that returns the total of all numeric values in a specified column. It ignores NULL values automatically.`,

example:`
SELECT SUM(Salary)
AS TotalSalary
FROM Employees;
`,

interviewTip:"SUM() works only with numeric columns such as Salary, Amount, Quantity and Marks.",

relatedTopics:[
"AVG",
"COUNT",
"Aggregate Functions"
]
},

{
id:53,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the AVG() Function?",
answer:`Definition:
The AVG() function calculates the average value of a numeric column.

────────────────────────────────────────

Easy Explanation:
Instead of manually calculating the average salary of employees, SQL does it automatically using AVG().

────────────────────────────────────────

Real-Life Example:
An HR manager wants to know the average salary of employees in the Finance department.

AVG() calculates the average within seconds.

────────────────────────────────────────

Interview Answer:
AVG() is an aggregate function that returns the average value of a numeric column. NULL values are ignored during the calculation.`,

example:`
SELECT AVG(Salary)
AS AverageSalary
FROM Employees;
`,

interviewTip:"AVG() ignores NULL values automatically.",

relatedTopics:[
"SUM",
"COUNT",
"Aggregate Functions"
]
},

{
id:54,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the MIN() Function?",
answer:`Definition:
The MIN() function returns the smallest value from a column.

────────────────────────────────────────

Easy Explanation:
Suppose a company wants to identify the employee receiving the lowest salary.

Instead of checking every record manually, MIN() returns the smallest salary instantly.

────────────────────────────────────────

Real-Life Example:
A school wants to find the lowest marks scored in an examination.

MIN(Marks) quickly returns the lowest score.

────────────────────────────────────────

Interview Answer:
MIN() is an aggregate function that returns the smallest value from a numeric, date or text column.`,

example:`
SELECT MIN(Salary)
AS LowestSalary
FROM Employees;
`,

interviewTip:"MIN() works with numbers, dates and even text values.",

relatedTopics:[
"MAX",
"Aggregate Functions",
"ORDER BY"
]
},

{
id:55,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the MAX() Function?",
answer:`Definition:
The MAX() function returns the largest value from a column.

────────────────────────────────────────

Easy Explanation:
Suppose a company wants to know the highest salary paid to an employee.

Instead of sorting the entire table, SQL directly returns the highest salary.

────────────────────────────────────────

Real-Life Example:
An e-commerce company wants to identify the highest order value placed this month.

MAX(OrderAmount) returns the highest amount immediately.

────────────────────────────────────────

Interview Answer:
MAX() is an aggregate function that returns the highest value from a numeric, date or text column.`,

example:`
SELECT MAX(Salary)
AS HighestSalary
FROM Employees;
`,

interviewTip:"MIN() and MAX() are frequently used with GROUP BY to find minimum and maximum values for each department.",

relatedTopics:[
"MIN",
"GROUP BY",
"Aggregate Functions"
]
},

{
id:56,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the LEN() / LENGTH() Function?",
answer:`Definition:
The LEN() function (SQL Server) and LENGTH() function (MySQL, Oracle, PostgreSQL) return the total number of characters in a string.

────────────────────────────────────────

Easy Explanation:
Sometimes we need to know how many characters are present in a value.

For example, we may want to check whether a password contains at least 8 characters or verify the length of a customer's name.

LEN() or LENGTH() helps us calculate the number of characters instantly.

────────────────────────────────────────

Real-Life Example:
An HR application checks whether an Employee ID contains exactly 6 characters before saving the record.

────────────────────────────────────────

Interview Answer:
LEN() (SQL Server) and LENGTH() (MySQL) return the number of characters present in a string. They are commonly used for data validation and reporting.

────────────────────────────────────────

Common Mistake:
Many beginners think LEN() counts spaces at the end of a string.
In SQL Server, trailing spaces are ignored.

────────────────────────────────────────

When to Use:
✔ Data Validation
✔ Password Verification
✔ Employee ID Validation
✔ Customer Data Cleaning`,

example:`
-- SQL Server

SELECT LEN('Rahul Sharma');

-- MySQL

SELECT LENGTH('Rahul Sharma');
`,

interviewTip:"Remember: SQL Server uses LEN(), whereas MySQL uses LENGTH().",

relatedTopics:[
"UPPER",
"LOWER",
"String Functions"
]
},

{
id:57,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the UPPER() Function?",
answer:`Definition:
The UPPER() function converts all characters in a string into uppercase letters.

────────────────────────────────────────

Easy Explanation:
Sometimes data is entered in different formats.

For example:

Rahul

rahul

RAHUL

UPPER() converts all of them into:

RAHUL

This makes reports consistent.

────────────────────────────────────────

Real-Life Example:
A company stores customer names in different formats.

Before generating reports, all names are converted to uppercase.

────────────────────────────────────────

Interview Answer:
UPPER() is a string function that converts lowercase letters into uppercase letters without changing the original data stored in the table.

────────────────────────────────────────

Common Mistake:
UPPER() changes only the query result.
It does not permanently update the database values.

────────────────────────────────────────

When to Use:
✔ Reports
✔ Data Standardization
✔ Searching
✔ Data Cleaning`,

example:`
SELECT
UPPER(EmployeeName)
FROM Employees;
`,

interviewTip:"UPPER() affects only the output unless used with UPDATE.",

relatedTopics:[
"LOWER",
"String Functions",
"SELECT"
]
},

{
id:58,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the LOWER() Function?",
answer:`Definition:
The LOWER() function converts all characters in a string into lowercase letters.

────────────────────────────────────────

Easy Explanation:
If employee names are stored in uppercase or mixed case, LOWER() converts them into lowercase.

────────────────────────────────────────

Real-Life Example:
An email application converts all email addresses into lowercase before storing them.

This prevents duplicate emails caused by different letter cases.

────────────────────────────────────────

Interview Answer:
LOWER() converts all alphabetic characters into lowercase. It is commonly used for data cleaning and case-insensitive comparisons.

────────────────────────────────────────

Common Mistake:
LOWER() does not modify the original data unless it is used inside an UPDATE statement.

────────────────────────────────────────

When to Use:
✔ Email Validation
✔ Search
✔ Reporting
✔ Data Cleaning`,

example:`
SELECT
LOWER(EmployeeName)
FROM Employees;
`,

interviewTip:"LOWER() is commonly used before comparing text values.",

relatedTopics:[
"UPPER",
"String Functions",
"TRIM"
]
},

{
id:59,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the ROUND() Function?",
answer:`Definition:
The ROUND() function rounds a numeric value to the specified number of decimal places.

────────────────────────────────────────

Easy Explanation:
Suppose the average salary is:

45678.56789

If the report needs only two decimal places, ROUND() converts it to:

45678.57

────────────────────────────────────────

Real-Life Example:
A finance report displays GST, tax and interest values rounded to two decimal places.

────────────────────────────────────────

Interview Answer:
ROUND() rounds numeric values to the required decimal precision. It is widely used in financial, banking and accounting reports.

────────────────────────────────────────

Common Mistake:
ROUND() rounds the value.
It does not simply remove decimal places.

────────────────────────────────────────

When to Use:
✔ Payroll Reports
✔ GST Reports
✔ Banking
✔ Financial Dashboards`,

example:`
SELECT
ROUND(45678.56789,2);
`,

interviewTip:"ROUND(number, decimal_places)",

relatedTopics:[
"AVG",
"SUM",
"Numeric Functions"
]
},

{
id:60,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is GETDATE() / NOW() Function?",
answer:`Definition:
GETDATE() (SQL Server) and NOW() (MySQL) return the current system date and time.

────────────────────────────────────────

Easy Explanation:
Many applications automatically record the date and time whenever a user logs in, places an order or updates information.

These functions provide the current system date and time.

────────────────────────────────────────

Real-Life Example:
An e-commerce website records the order date automatically when a customer places an order.

The user does not need to enter the date manually.

────────────────────────────────────────

Interview Answer:
GETDATE() in SQL Server and NOW() in MySQL return the current system date and time. They are commonly used for audit logs, reports and transaction tracking.

────────────────────────────────────────

Common Mistake:
GETDATE() and NOW() return both date and time.
If only the date is required, use CAST() or CONVERT() depending on the database.

────────────────────────────────────────

When to Use:
✔ Audit Logs
✔ Login History
✔ Order Tracking
✔ Attendance Systems`,

example:`
-- SQL Server

SELECT GETDATE();

-- MySQL

SELECT NOW();
`,

interviewTip:"Remember: SQL Server = GETDATE(), MySQL = NOW().",

relatedTopics:[
"CURRENT_DATE",
"CAST",
"CONVERT"
]
},

{
id:61,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the CONCAT() Function?",
answer:`Definition:
The CONCAT() function joins two or more strings together and returns them as a single string.

────────────────────────────────────────

Easy Explanation:
Sometimes information is stored in different columns.

For example, FirstName and LastName are stored separately.

CONCAT() combines them into one complete name.

────────────────────────────────────────

Real-Life Example:
An HR department stores:

FirstName = Rahul

LastName = Sharma

CONCAT() displays:

Rahul Sharma

This is useful in reports and employee directories.

────────────────────────────────────────

Interview Answer:
CONCAT() combines two or more strings into a single string. It is commonly used to display full names, complete addresses and formatted reports.

────────────────────────────────────────

Common Mistake:
Many beginners use the '+' operator to join text.

The '+' operator works in SQL Server but not in MySQL.

CONCAT() is portable across most databases.

────────────────────────────────────────

When to Use:
✔ Employee Reports
✔ Customer Reports
✔ Full Address
✔ Full Name`,

example:`
SELECT
CONCAT(FirstName,' ',LastName)
AS EmployeeName
FROM Employees;
`,

interviewTip:"Remember: CONCAT() joins strings without changing the original data.",

relatedTopics:[
"SUBSTRING",
"UPPER",
"LOWER"
]
},

{
id:62,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the SUBSTRING() Function?",
answer:`Definition:
The SUBSTRING() function extracts a specific portion of a string.

────────────────────────────────────────

Easy Explanation:
Imagine an Employee ID:

EMP2025001

If you only need

2025

SUBSTRING() extracts only those characters.

────────────────────────────────────────

Real-Life Example:
A company stores invoice numbers like:

INV-2025-00045

The Finance team extracts the year (2025) for reporting.

────────────────────────────────────────

Interview Answer:
SUBSTRING() returns a specified number of characters from a string starting at a given position.

────────────────────────────────────────

Common Mistake:
The starting position begins from 1 in SQL, not 0.

────────────────────────────────────────

When to Use:
✔ Employee IDs
✔ Invoice Numbers
✔ Product Codes
✔ Data Extraction`,

example:`
SELECT
SUBSTRING(EmployeeCode,4,4)
FROM Employees;
`,

interviewTip:"Syntax: SUBSTRING(Column, StartPosition, Length)",

relatedTopics:[
"CONCAT",
"LEFT",
"RIGHT"
]
},

{
id:63,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the TRIM() Function?",
answer:`Definition:
The TRIM() function removes unnecessary spaces from the beginning and end of a string.

────────────────────────────────────────

Easy Explanation:
Sometimes users accidentally type spaces before or after entering data.

TRIM() cleans those unwanted spaces automatically.

────────────────────────────────────────

Real-Life Example:
Customer Name stored as:

'   Rahul Sharma   '

After applying TRIM():

'Rahul Sharma'

────────────────────────────────────────

Interview Answer:
TRIM() removes leading and trailing spaces from a string, helping maintain clean and consistent data.

────────────────────────────────────────

Common Mistake:
TRIM() removes spaces only at the beginning and end.
It does not remove spaces between words.

────────────────────────────────────────

When to Use:
✔ Data Cleaning
✔ Import Files
✔ Customer Data
✔ Employee Records`,

example:`
SELECT
TRIM(EmployeeName)
FROM Employees;
`,

interviewTip:"Very useful after importing Excel or CSV files into SQL.",

relatedTopics:[
"LTRIM",
"RTRIM",
"REPLACE"
]
},

{
id:64,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the REPLACE() Function?",
answer:`Definition:
The REPLACE() function searches for a specified value in a string and replaces it with another value.

────────────────────────────────────────

Easy Explanation:
Suppose a company changes its website domain.

Instead of updating thousands of records manually, REPLACE() changes the old text automatically.

────────────────────────────────────────

Real-Life Example:
Old Email:

rahul@oldcompany.com

New Email:

rahul@newcompany.com

REPLACE() updates the displayed value instantly.

────────────────────────────────────────

Interview Answer:
REPLACE() replaces all occurrences of a specified substring with another substring within a string.

────────────────────────────────────────

Common Mistake:
REPLACE() changes only the query result.
The original data remains unchanged unless UPDATE is used.

────────────────────────────────────────

When to Use:
✔ Email Migration
✔ Data Cleaning
✔ Text Formatting
✔ Standardization`,

example:`
SELECT
REPLACE(Email,
'oldcompany.com',
'newcompany.com')
FROM Employees;
`,

interviewTip:"REPLACE() is frequently used during data migration projects.",

relatedTopics:[
"TRIM",
"CONCAT",
"SUBSTRING"
]
},

{
id:65,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the ABS() Function?",
answer:`Definition:
The ABS() function returns the absolute (positive) value of a number.

────────────────────────────────────────

Easy Explanation:
If a number is negative, ABS() removes the negative sign.

Positive numbers remain unchanged.

────────────────────────────────────────

Real-Life Example:
Bank Transaction:

Debit Difference = -2500

ABS(-2500)

Result:

2500

This is useful when reports should display only the magnitude of a value.

────────────────────────────────────────

Interview Answer:
ABS() returns the absolute value of a numeric expression. It is commonly used in banking, finance and mathematical calculations.

────────────────────────────────────────

Common Mistake:
ABS() does not round numbers.
It only removes the negative sign.

────────────────────────────────────────

When to Use:
✔ Banking
✔ Financial Reports
✔ Difference Calculation
✔ Analytics`,

example:`
SELECT
ABS(-2500);

SELECT
ABS(BalanceDifference)
FROM Accounts;
`,

interviewTip:"ABS() always returns a positive value (or zero).",

relatedTopics:[
"ROUND",
"CEILING",
"FLOOR"
]
},

{
id:66,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the LEFT() Function?",
answer:`Definition:
The LEFT() function returns a specified number of characters from the beginning (left side) of a string.

────────────────────────────────────────

Easy Explanation:
Sometimes you only need the first few characters of a value.

For example, an Employee Code starts with the department code.

LEFT() extracts those starting characters quickly.

────────────────────────────────────────

Real-Life Example:
Employee Code:

FIN10025

Using LEFT(EmployeeCode,3)

Result:

FIN

Now you know the employee belongs to the Finance department.

────────────────────────────────────────

Interview Answer:
LEFT() extracts a specified number of characters from the beginning of a string. It is commonly used to retrieve prefixes, department codes and country codes.

────────────────────────────────────────

Common Mistake:
LEFT() counts characters starting from the first character.
It does not start from position zero.

────────────────────────────────────────

When to Use:
✔ Employee Codes
✔ Product Codes
✔ Department Codes
✔ Invoice Prefixes`,

example:`
SELECT
LEFT(EmployeeCode,3)
AS DepartmentCode
FROM Employees;
`,

interviewTip:"LEFT() always starts extracting from the first character.",

relatedTopics:[
"RIGHT",
"SUBSTRING",
"String Functions"
]
},

{
id:67,
category:"SQL Functions",
difficulty:"Beginner",
question:"What is the RIGHT() Function?",
answer:`Definition:
The RIGHT() function returns a specified number of characters from the end (right side) of a string.

────────────────────────────────────────

Easy Explanation:
Sometimes important information is stored at the end of a value.

RIGHT() helps retrieve those ending characters.

────────────────────────────────────────

Real-Life Example:
Invoice Number:

INV202500145

Using RIGHT(InvoiceNo,3)

Result:

145

This extracts the last three digits of the invoice.

────────────────────────────────────────

Interview Answer:
RIGHT() extracts a specified number of characters from the end of a string. It is commonly used to retrieve serial numbers, suffixes and file extensions.

────────────────────────────────────────

Common Mistake:
RIGHT() always counts from the end of the string.

────────────────────────────────────────

When to Use:
✔ Invoice Numbers
✔ Product Codes
✔ Employee IDs
✔ File Extensions`,

example:`
SELECT
RIGHT(InvoiceNumber,3)
AS InvoiceSeries
FROM Orders;
`,

interviewTip:"RIGHT() is the opposite of LEFT().",

relatedTopics:[
"LEFT",
"SUBSTRING",
"String Functions"
]
},

{
id:68,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is the COALESCE() Function?",
answer:`Definition:
COALESCE() returns the first non-NULL value from a list of expressions.

────────────────────────────────────────

Easy Explanation:
Imagine an employee may have multiple contact numbers.

Office Phone

Mobile Phone

Home Phone

If the Office Phone is NULL, COALESCE() checks the Mobile Phone.
If that is also NULL, it checks the Home Phone.

It returns the first available value.

────────────────────────────────────────

Real-Life Example:
Employee

OfficePhone = NULL

MobilePhone = 9876543210

HomePhone = NULL

COALESCE() returns:

9876543210

────────────────────────────────────────

Interview Answer:
COALESCE() returns the first non-NULL value from a list of expressions. It is commonly used to replace missing values and handle NULLs efficiently.

────────────────────────────────────────

Common Mistake:
COALESCE() checks values from left to right and stops when it finds the first non-NULL value.

────────────────────────────────────────

When to Use:
✔ Missing Data
✔ Reports
✔ Dashboard
✔ Data Cleaning`,

example:`
SELECT
COALESCE
(
OfficePhone,
MobilePhone,
HomePhone,
'No Contact'
)
FROM Employees;
`,

interviewTip:"COALESCE() is ANSI SQL standard and works in most database systems.",

relatedTopics:[
"ISNULL",
"IFNULL",
"NULL"
]
},

{
id:69,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is ISNULL() / IFNULL()?",
answer:`Definition:
ISNULL() (SQL Server) and IFNULL() (MySQL) replace NULL values with a specified value.

────────────────────────────────────────

Easy Explanation:
Suppose some employees do not have a bonus.

Instead of displaying NULL, the report should display 0.

ISNULL() or IFNULL() makes the report easier to understand.

────────────────────────────────────────

Real-Life Example:
Salary | Bonus

50000 | NULL

Report Output

50000 | 0

────────────────────────────────────────

Interview Answer:
ISNULL() in SQL Server and IFNULL() in MySQL replace NULL values with a specified alternative value.

────────────────────────────────────────

Common Mistake:
ISNULL() is SQL Server specific.
IFNULL() is MySQL specific.
COALESCE() is supported by most databases.

────────────────────────────────────────

When to Use:
✔ Reports
✔ Dashboard
✔ Salary Reports
✔ Banking MIS`,

example:`
-- SQL Server

SELECT
ISNULL(Bonus,0)
FROM Employees;

-- MySQL

SELECT
IFNULL(Bonus,0)
FROM Employees;
`,

interviewTip:"If asked a database-independent solution, answer COALESCE().",

relatedTopics:[
"COALESCE",
"NULL",
"CASE"
]
},

{
id:70,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What are CAST() and CONVERT() Functions?",
answer:`Definition:
CAST() and CONVERT() are used to convert a value from one data type to another.

────────────────────────────────────────

Easy Explanation:
Sometimes data is stored in the wrong format.

For example:

Salary = '55000'

This is stored as text.

To perform calculations, SQL converts it into a numeric value.

────────────────────────────────────────

Real-Life Example:
A CSV file stores DateOfBirth as text.

Before calculating Age, SQL converts the text into a DATE data type.

────────────────────────────────────────

Interview Answer:
CAST() and CONVERT() are data type conversion functions. CAST() follows the ANSI SQL standard, whereas CONVERT() provides additional formatting options in SQL Server.

────────────────────────────────────────

Common Mistake:
CAST() is portable across most database systems.
CONVERT() syntax varies depending on the database.

────────────────────────────────────────

When to Use:
✔ Data Migration
✔ ETL
✔ Reports
✔ Power BI
✔ Banking Applications`,

example:`
-- CAST

SELECT
CAST('55000' AS INT);

-- CONVERT

SELECT
CONVERT(INT,'55000');
`,

interviewTip:"CAST() is ANSI standard. CONVERT() is mainly used in SQL Server.",

relatedTopics:[
"Data Types",
"COALESCE",
"ISNULL"
]
},

{
id:71,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is the CEILING() Function?",
answer:`Definition:
The CEILING() function returns the smallest whole number that is greater than or equal to a given numeric value.

────────────────────────────────────────

Easy Explanation:
If a number contains decimal places, CEILING() always rounds it UP to the next whole number.

Even if the decimal value is very small, the result moves to the next integer.

────────────────────────────────────────

Real-Life Example:
A company has packed 125.2 cartons of products.

Since partial cartons cannot be shipped, CEILING() calculates the required cartons as 126.

────────────────────────────────────────

Interview Answer:
CEILING() is a numeric function that rounds a decimal number upward to the nearest whole number.

────────────────────────────────────────

Common Mistake:
Many beginners think CEILING() simply removes decimals.

It always rounds upward.

Example:

10.1 → 11

10.9 → 11

────────────────────────────────────────

When to Use:
✔ Inventory Management
✔ Shipping Calculations
✔ Financial Reports
✔ Production Planning`,

example:`
SELECT CEILING(125.25);

-- Result
126
`,

interviewTip:"Remember: CEILING() always rounds UP.",

relatedTopics:[
"FLOOR",
"ROUND",
"ABS"
]
},

{
id:72,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is the FLOOR() Function?",
answer:`Definition:
The FLOOR() function returns the largest whole number that is less than or equal to a given numeric value.

────────────────────────────────────────

Easy Explanation:
FLOOR() always removes the decimal part by rounding DOWN.

────────────────────────────────────────

Real-Life Example:
A warehouse stores 125.95 boxes.

Only complete boxes are counted.

FLOOR() returns 125.

────────────────────────────────────────

Interview Answer:
FLOOR() rounds a decimal number downward to the nearest whole number.

────────────────────────────────────────

Common Mistake:
FLOOR() always rounds downward.

Example:

10.9 → 10

10.1 → 10

────────────────────────────────────────

When to Use:
✔ Inventory
✔ Banking
✔ Quantity Reports
✔ Production`,

example:`
SELECT FLOOR(125.95);

-- Result
125
`,

interviewTip:"FLOOR() is the opposite of CEILING().",

relatedTopics:[
"CEILING",
"ROUND",
"ABS"
]
},

{
id:73,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is the FORMAT() Function?",
answer:`Definition:
The FORMAT() function formats numbers and dates into a user-friendly display.

────────────────────────────────────────

Easy Explanation:
The stored value remains the same.

Only the displayed format changes.

────────────────────────────────────────

Real-Life Example:
Salary stored:

55000

Display:

₹55,000.00

Date stored:

2026-08-05

Display:

05-Aug-2026

────────────────────────────────────────

Interview Answer:
FORMAT() converts numbers and dates into readable formats for reports and dashboards.

────────────────────────────────────────

Common Mistake:
FORMAT() changes only the output.

The original database value remains unchanged.

────────────────────────────────────────

When to Use:
✔ Dashboard
✔ MIS Reports
✔ Salary Reports
✔ Power BI`,

example:`
SELECT
FORMAT(GETDATE(),'dd-MMM-yyyy');

SELECT
FORMAT(55000,'N2');
`,

interviewTip:"FORMAT() is mainly used for displaying values, not calculations.",

relatedTopics:[
"CAST",
"CONVERT",
"GETDATE"
]
},

{
id:74,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is DATEADD() / DATE_ADD() Function?",
answer:`Definition:
DATEADD() (SQL Server) and DATE_ADD() (MySQL) add a specified time interval to a date.

────────────────────────────────────────

Easy Explanation:
Suppose today's date is:

01-Aug-2026

You need to calculate the date after 30 days.

DATEADD() performs this automatically.

────────────────────────────────────────

Real-Life Example:
An employee joins today.

Probation ends after 90 days.

DATEADD() calculates the probation completion date automatically.

────────────────────────────────────────

Interview Answer:
DATEADD() adds days, months or years to an existing date. MySQL provides the same functionality through DATE_ADD().

────────────────────────────────────────

Common Mistake:
DATEADD() does not modify the stored value unless used with UPDATE.

────────────────────────────────────────

When to Use:
✔ HR Systems
✔ Banking
✔ Loan Due Dates
✔ Subscription Expiry`,

example:`
-- SQL Server

SELECT
DATEADD(DAY,30,GETDATE());

-- MySQL

SELECT
DATE_ADD(NOW(),INTERVAL 30 DAY);
`,

interviewTip:"Remember: SQL Server = DATEADD(), MySQL = DATE_ADD().",

relatedTopics:[
"DATEDIFF",
"GETDATE",
"NOW"
]
},

{
id:75,
category:"SQL Functions",
difficulty:"Intermediate",
question:"What is the DATEDIFF() Function?",
answer:`Definition:
DATEDIFF() calculates the difference between two dates.

────────────────────────────────────────

Easy Explanation:
Instead of counting days manually, SQL calculates the exact difference.

────────────────────────────────────────

Real-Life Example:
Employee Joining Date:

01-Jan-2022

Today's Date:

01-Aug-2026

DATEDIFF() calculates the total number of days the employee has worked.

────────────────────────────────────────

Interview Answer:
DATEDIFF() returns the difference between two dates in days, months or years depending on the specified date part.

────────────────────────────────────────

Common Mistake:
The result depends on the date part used.

DAY returns total days.

MONTH returns months.

YEAR returns years.

────────────────────────────────────────

When to Use:
✔ Employee Experience
✔ Loan Duration
✔ Project Tracking
✔ Attendance Reports`,

example:`
-- SQL Server

SELECT
DATEDIFF(DAY,'2026-01-01','2026-08-01');

-- Result
212
`,

interviewTip:"DATEDIFF() is one of the most frequently asked SQL date functions in interviews.",

relatedTopics:[
"DATEADD",
"GETDATE",
"NOW"
]
},

{
id:76,
category:"SQL Joins",
difficulty:"Beginner",
question:"What is a JOIN in SQL?",
answer:`Definition:
A JOIN is a SQL operation used to combine data from two or more tables based on a related column.

────────────────────────────────────────

Easy Explanation:
In real-world databases, information is usually stored in multiple tables instead of one large table.

For example:

Employees Table stores employee details.

Departments Table stores department information.

To display an employee along with the department name, SQL combines both tables using a JOIN.

────────────────────────────────────────

Real-Life Example:

Employees Table

EmployeeID | EmployeeName | DepartmentID

101        Rahul          1

102        Priya          2

Departments Table

DepartmentID | DepartmentName

1            Finance

2            HR

Using JOIN, the result becomes:

Rahul  → Finance

Priya  → HR

────────────────────────────────────────

Interview Answer:
A JOIN is used to retrieve related data from multiple tables by matching values in a common column. It helps normalize data and avoids storing duplicate information.

────────────────────────────────────────

Common Mistake:
Many beginners think JOIN combines tables side by side without any condition.

Actually, JOIN should normally use an ON condition to define how rows are matched.

────────────────────────────────────────

When to Use:
✔ HR Systems
✔ Banking
✔ E-Commerce
✔ ERP Systems
✔ Reporting
✔ Dashboards`,

example:`
SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
INNER JOIN Departments D
ON E.DepartmentID = D.DepartmentID;
`,

interviewTip:"JOIN combines related tables. Most SQL interview questions involve JOINs.",

relatedTopics:[
"INNER JOIN",
"LEFT JOIN",
"Primary Key",
"Foreign Key"
]
},

{
id:77,
category:"SQL Joins",
difficulty:"Beginner",
question:"What is an INNER JOIN?",
answer:`Definition:
INNER JOIN returns only the matching records that exist in both tables.

────────────────────────────────────────

Easy Explanation:
Imagine two lists.

Employees

Departments

If an employee has a valid DepartmentID, that employee appears in the result.

If there is no matching department, that employee is not shown.

────────────────────────────────────────

Real-Life Example:

Employees

Rahul → Finance

Priya → HR

Amit → DepartmentID 5

Departments

Finance

HR

Since DepartmentID 5 doesn't exist, Amit is excluded.

────────────────────────────────────────

Interview Answer:
INNER JOIN returns only those rows where matching values exist in both joined tables.

────────────────────────────────────────

Common Mistake:
INNER JOIN never returns unmatched rows.

Only matching records appear.

────────────────────────────────────────

When to Use:
✔ Employee Reports
✔ Customer Orders
✔ Banking Transactions
✔ Sales Reports`,

example:`
SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
INNER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;
`,

interviewTip:"Think: INNER = Only Common Records.",

relatedTopics:[
"JOIN",
"LEFT JOIN",
"RIGHT JOIN"
]
},

{
id:78,
category:"SQL Joins",
difficulty:"Beginner",
question:"What is a LEFT JOIN?",
answer:`Definition:
LEFT JOIN returns all records from the left table and only matching records from the right table.

────────────────────────────────────────

Easy Explanation:
The LEFT table is always fully returned.

If no matching record exists in the right table, SQL displays NULL.

────────────────────────────────────────

Real-Life Example:

Employees

Rahul → Finance

Amit → NULL

Departments

Finance

Result

Rahul Finance

Amit NULL

Amit still appears because LEFT JOIN keeps every employee.

────────────────────────────────────────

Interview Answer:
LEFT JOIN returns all rows from the left table and matching rows from the right table. Unmatched rows from the right table appear as NULL.

────────────────────────────────────────

Common Mistake:
LEFT JOIN does not remove unmatched rows from the left table.

────────────────────────────────────────

When to Use:
✔ Employees without Departments
✔ Customers without Orders
✔ Products without Sales
✔ Banking Customers without Transactions`,

example:`
SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
LEFT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;
`,

interviewTip:"LEFT table = Complete. Right table = Matching only.",

relatedTopics:[
"INNER JOIN",
"RIGHT JOIN",
"FULL JOIN"
]
},

{
id:79,
category:"SQL Joins",
difficulty:"Beginner",
question:"What is a RIGHT JOIN?",
answer:`Definition:
RIGHT JOIN returns all records from the right table and matching records from the left table.

────────────────────────────────────────

Easy Explanation:
This is the opposite of LEFT JOIN.

Every record from the right table appears.

If there is no matching record in the left table, NULL is returned.

────────────────────────────────────────

Real-Life Example:

Departments

Finance

HR

IT

Employees

Rahul → Finance

Priya → HR

Result

Finance Rahul

HR Priya

IT NULL

────────────────────────────────────────

Interview Answer:
RIGHT JOIN returns every row from the right table together with matching rows from the left table. Missing matches are displayed as NULL.

────────────────────────────────────────

Common Mistake:
Many developers avoid RIGHT JOIN because the same result can usually be achieved using LEFT JOIN by swapping table positions.

────────────────────────────────────────

When to Use:
✔ Department Reports
✔ Category Reports
✔ Master Data Validation
✔ Lookup Tables`,

example:`
SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
RIGHT JOIN Departments D
ON E.DepartmentID=D.DepartmentID;
`,

interviewTip:"RIGHT JOIN = Opposite of LEFT JOIN.",

relatedTopics:[
"LEFT JOIN",
"FULL JOIN",
"INNER JOIN"
]
},

{
id:80,
category:"SQL Joins",
difficulty:"Intermediate",
question:"What is a FULL OUTER JOIN?",
answer:`Definition:
FULL OUTER JOIN returns all matching records plus all unmatched records from both tables.

────────────────────────────────────────

Easy Explanation:
Imagine combining two lists completely.

Employees without departments are shown.

Departments without employees are also shown.

Nothing is missed.

────────────────────────────────────────

Real-Life Example:

Employees

Rahul Finance

Priya HR

Departments

Finance

HR

IT

Result

Rahul Finance

Priya HR

NULL IT

If an employee has no department, that employee also appears with NULL.

────────────────────────────────────────

Interview Answer:
FULL OUTER JOIN returns all rows from both tables. Matching rows are combined, while unmatched rows contain NULL values for the missing side.

────────────────────────────────────────

Common Mistake:
MySQL does not support FULL OUTER JOIN directly.
It is usually simulated using UNION of LEFT JOIN and RIGHT JOIN.

────────────────────────────────────────

When to Use:
✔ Data Reconciliation
✔ Audit Reports
✔ Data Migration
✔ Master Data Comparison`,

example:`
SELECT
E.EmployeeName,
D.DepartmentName
FROM Employees E
FULL OUTER JOIN Departments D
ON E.DepartmentID=D.DepartmentID;
`,

interviewTip:"FULL JOIN = LEFT JOIN + RIGHT JOIN together.",

relatedTopics:[
"LEFT JOIN",
"RIGHT JOIN",
"UNION"
]
}



];