/*==================================
 SQL Sample Data Library
==================================*/


const sampleData = {



/*==================================
 Employees
==================================*/

Employees:[

{
EmployeeID:101,
EmployeeName:"Rahul Sharma",
DepartmentID:1,
Department:"Finance",
Salary:55000,
Experience:5,
City:"Mumbai",
JoiningDate:"2022-01-15",
Status:"Active"
},

{
EmployeeID:102,
EmployeeName:"Priya Patel",
DepartmentID:2,
Department:"IT",
Salary:75000,
Experience:6,
City:"Pune",
JoiningDate:"2021-06-20",
Status:"Active"
},

{
EmployeeID:103,
EmployeeName:"Amit Kumar",
DepartmentID:3,
Department:"HR",
Salary:45000,
Experience:3,
City:"Delhi",
JoiningDate:"2023-03-10",
Status:"Active"
},

{
EmployeeID:104,
EmployeeName:"Neha Singh",
DepartmentID:1,
Department:"Finance",
Salary:65000,
Experience:7,
City:"Nashik",
JoiningDate:"2020-11-05",
Status:"Active"
},

{
EmployeeID:105,
EmployeeName:"Vikas Mehta",
DepartmentID:4,
Department:"Sales",
Salary:52000,
Experience:4,
City:"Bangalore",
JoiningDate:"2024-02-18",
Status:"Inactive"
},

{
EmployeeID:106,
EmployeeName:"Anjali Verma",
DepartmentID:2,
Department:"IT",
Salary:90000,
Experience:8,
City:"Mumbai",
JoiningDate:"2019-08-25",
Status:"Active"
}

],



/*==================================
 Departments
==================================*/

Departments:[

{
DepartmentID:1,
DepartmentName:"Finance",
Manager:"Ramesh Kumar",
Location:"Mumbai"
},

{
DepartmentID:2,
DepartmentName:"IT",
Manager:"Anil Verma",
Location:"Pune"
},

{
DepartmentID:3,
DepartmentName:"HR",
Manager:"Sneha Gupta",
Location:"Delhi"
},

{
DepartmentID:4,
DepartmentName:"Sales",
Manager:"Raj Singh",
Location:"Bangalore"
}

],



/*==================================
 Customers
==================================*/

Customers:[

{
CustomerID:1,
CustomerName:"ABC Enterprises",
City:"Mumbai",
Industry:"Banking",
CustomerType:"Corporate"
},

{
CustomerID:2,
CustomerName:"XYZ Limited",
City:"Pune",
Industry:"Technology",
CustomerType:"Corporate"
},

{
CustomerID:3,
CustomerName:"Global Traders",
City:"Delhi",
Industry:"Manufacturing",
CustomerType:"Enterprise"
},

{
CustomerID:4,
CustomerName:"Bright Solutions",
City:"Nashik",
Industry:"Retail",
CustomerType:"SME"
},

{
CustomerID:5,
CustomerName:"Tech World",
City:"Bangalore",
Industry:"Software",
CustomerType:"Enterprise"
}

],



/*==================================
 Products
==================================*/

Products:[

{
ProductID:201,
ProductName:"Laptop",
Category:"Electronics",
Price:85000
},

{
ProductID:202,
ProductName:"Monitor",
Category:"Electronics",
Price:45000
},

{
ProductID:203,
ProductName:"Server",
Category:"Hardware",
Price:250000
},

{
ProductID:204,
ProductName:"Keyboard",
Category:"Accessories",
Price:5000
},

{
ProductID:205,
ProductName:"Software License",
Category:"Software",
Price:120000
}

],



/*==================================
 Sales
==================================*/

Sales:[

{
SaleID:1001,
CustomerID:1,
ProductID:201,
SalesAmount:85000,
SaleDate:"2026-01-10"
},

{
SaleID:1002,
CustomerID:2,
ProductID:202,
SalesAmount:45000,
SaleDate:"2026-01-15"
},

{
SaleID:1003,
CustomerID:3,
ProductID:203,
SalesAmount:250000,
SaleDate:"2026-02-05"
},

{
SaleID:1004,
CustomerID:4,
ProductID:204,
SalesAmount:5000,
SaleDate:"2026-02-12"
},

{
SaleID:1005,
CustomerID:5,
ProductID:205,
SalesAmount:120000,
SaleDate:"2026-03-01"
},

{
SaleID:1006,
CustomerID:1,
ProductID:202,
SalesAmount:45000,
SaleDate:"2026-03-10"
}

],



/*==================================
 Orders
==================================*/

Orders:[

{
OrderID:5001,
CustomerID:1,
OrderDate:"2026-01-05",
OrderStatus:"Completed",
OrderAmount:85000
},

{
OrderID:5002,
CustomerID:2,
OrderDate:"2026-01-20",
OrderStatus:"Pending",
OrderAmount:45000
},

{
OrderID:5003,
CustomerID:3,
OrderDate:"2026-02-10",
OrderStatus:"Completed",
OrderAmount:250000
},

{
OrderID:5004,
CustomerID:4,
OrderDate:"2026-02-15",
OrderStatus:"Cancelled",
OrderAmount:5000
},

{
OrderID:5005,
CustomerID:5,
OrderDate:"2026-03-05",
OrderStatus:"Completed",
OrderAmount:120000
}

]

};



// Global Access

window.sampleData = sampleData;

window.SAMPLE_DATA = sampleData;