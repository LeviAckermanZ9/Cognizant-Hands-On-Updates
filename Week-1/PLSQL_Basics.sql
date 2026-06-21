/* PL/SQL Programming Basics */

-- 1. Anonymous Block Example
DECLARE
    v_message VARCHAR2(50) := 'Hello World';
BEGIN
    DBMS_OUTPUT.PUT_LINE(v_message);
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('An error occurred.');
END;
/

-- 2. Stored Procedure Example
CREATE OR REPLACE PROCEDURE get_employee_salary (
    p_emp_id IN NUMBER,
    p_salary OUT NUMBER
) AS
BEGIN
    SELECT salary INTO p_salary
    FROM employees
    WHERE employee_id = p_emp_id;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_salary := 0;
END get_employee_salary;
/
