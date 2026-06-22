-- Exercise 7: Packages
-- Note: This exercise is not marked as mandatory in the guidelines

-- Scenario 1: Group all customer-related procedures and functions into a package.
CREATE OR REPLACE PACKAGE CustomerManagement AS
    PROCEDURE AddCustomer(p_CustomerID IN NUMBER, p_Name IN VARCHAR2, p_DOB IN DATE, p_Balance IN NUMBER);
    PROCEDURE UpdateCustomerDetails(p_CustomerID IN NUMBER, p_Name IN VARCHAR2, p_DOB IN DATE);
    FUNCTION GetCustomerBalance(p_CustomerID IN NUMBER) RETURN NUMBER;
END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS
    PROCEDURE AddCustomer(p_CustomerID IN NUMBER, p_Name IN VARCHAR2, p_DOB IN DATE, p_Balance IN NUMBER) IS
    BEGIN
        -- Insert a new customer record
        INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
        VALUES (p_CustomerID, p_Name, p_DOB, p_Balance, SYSDATE);
        COMMIT;
    END AddCustomer;

    PROCEDURE UpdateCustomerDetails(p_CustomerID IN NUMBER, p_Name IN VARCHAR2, p_DOB IN DATE) IS
    BEGIN
        -- Update the customer details, keeping old values if null is passed
        UPDATE Customers
        SET Name = NVL(p_Name, Name),
            DOB = NVL(p_DOB, DOB),
            LastModified = SYSDATE
        WHERE CustomerID = p_CustomerID;
        COMMIT;
    END UpdateCustomerDetails;

    FUNCTION GetCustomerBalance(p_CustomerID IN NUMBER) RETURN NUMBER IS
        v_balance NUMBER;
    BEGIN
        SELECT Balance INTO v_balance 
        FROM Customers 
        WHERE CustomerID = p_CustomerID;
        
        RETURN v_balance;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN NULL;
    END GetCustomerBalance;
END CustomerManagement;
/

-- Scenario 2: Create a package to manage employee data.
CREATE OR REPLACE PACKAGE EmployeeManagement AS
    PROCEDURE HireEmployee(p_EmployeeID IN NUMBER, p_Name IN VARCHAR2, p_Position IN VARCHAR2, p_Salary IN NUMBER, p_Department IN VARCHAR2, p_HireDate IN DATE);
    PROCEDURE UpdateEmployeeDetails(p_EmployeeID IN NUMBER, p_Position IN VARCHAR2, p_Salary IN NUMBER, p_Department IN VARCHAR2);
    FUNCTION CalculateAnnualSalary(p_EmployeeID IN NUMBER) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS
    PROCEDURE HireEmployee(p_EmployeeID IN NUMBER, p_Name IN VARCHAR2, p_Position IN VARCHAR2, p_Salary IN NUMBER, p_Department IN VARCHAR2, p_HireDate IN DATE) IS
    BEGIN
        -- Add a new employee to the database
        INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
        VALUES (p_EmployeeID, p_Name, p_Position, p_Salary, p_Department, p_HireDate);
        COMMIT;
    END HireEmployee;

    PROCEDURE UpdateEmployeeDetails(p_EmployeeID IN NUMBER, p_Position IN VARCHAR2, p_Salary IN NUMBER, p_Department IN VARCHAR2) IS
    BEGIN
        -- Update the employee details, keeping old values if null is passed
        UPDATE Employees
        SET Position = NVL(p_Position, Position),
            Salary = NVL(p_Salary, Salary),
            Department = NVL(p_Department, Department)
        WHERE EmployeeID = p_EmployeeID;
        COMMIT;
    END UpdateEmployeeDetails;

    FUNCTION CalculateAnnualSalary(p_EmployeeID IN NUMBER) RETURN NUMBER IS
        v_monthly_salary NUMBER;
    BEGIN
        SELECT Salary INTO v_monthly_salary 
        FROM Employees 
        WHERE EmployeeID = p_EmployeeID;
        
        -- Multiply by 12 to get the annual salary
        RETURN v_monthly_salary * 12;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN NULL;
    END CalculateAnnualSalary;
END EmployeeManagement;
/

-- Scenario 3: Group all account-related operations into a package.
CREATE OR REPLACE PACKAGE AccountOperations AS
    PROCEDURE OpenAccount(p_AccountID IN NUMBER, p_CustomerID IN NUMBER, p_AccountType IN VARCHAR2, p_Balance IN NUMBER);
    PROCEDURE CloseAccount(p_AccountID IN NUMBER);
    FUNCTION GetTotalBalance(p_CustomerID IN NUMBER) RETURN NUMBER;
END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS
    PROCEDURE OpenAccount(p_AccountID IN NUMBER, p_CustomerID IN NUMBER, p_AccountType IN VARCHAR2, p_Balance IN NUMBER) IS
    BEGIN
        -- Create a new account record
        INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
        VALUES (p_AccountID, p_CustomerID, p_AccountType, p_Balance, SYSDATE);
        COMMIT;
    END OpenAccount;

    PROCEDURE CloseAccount(p_AccountID IN NUMBER) IS
    BEGIN
        -- Delete the account from the database
        DELETE FROM Accounts 
        WHERE AccountID = p_AccountID;
        COMMIT;
    END CloseAccount;

    FUNCTION GetTotalBalance(p_CustomerID IN NUMBER) RETURN NUMBER IS
        v_total_balance NUMBER;
    BEGIN
        -- Calculate the sum of all accounts for the given customer
        SELECT SUM(Balance) INTO v_total_balance 
        FROM Accounts 
        WHERE CustomerID = p_CustomerID;
        
        RETURN NVL(v_total_balance, 0);
    END GetTotalBalance;
END AccountOperations;
/
