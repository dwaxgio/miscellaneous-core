use DB_CSHARP_REACT
GO

/*JUST FOR PRACTICING*/
SELECT * 
FROM db_managers
WHERE name = 'MySQL'

select Employees.Name, Departments.DepartmentName
FROM Employees
INNER JOIN Departments OK Employees.DepartmentID = Departments.DepartmentID