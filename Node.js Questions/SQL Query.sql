SELECT 
    employees.id, 
    employees.name, 
    departments.name AS department_name
FROM 
    employees
INNER JOIN 
    departments
ON 
    employees.department_id = departments.id;
