-- ============================================================================
-- Exercise 3: Stored Procedures
-- ============================================================================

-- Scenario 1: Process monthly interest for all savings accounts.
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    v_interest_rate NUMBER := 0.01; -- 1% interest rate
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * v_interest_rate)
    WHERE AccountType = 'Savings';
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error processing monthly interest: ' || SQLERRM);
END ProcessMonthlyInterest;
/

-- Scenario 2: Implement a bonus scheme for employees based on their performance.
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN NUMBER,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percentage / 100))
    WHERE DepartmentID = p_department_id;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus applied to department ' || p_department_id);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating employee bonus: ' || SQLERRM);
END UpdateEmployeeBonus;
/

-- Scenario 3: Transfer funds between accounts.
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account_id IN NUMBER,
    p_target_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    -- Check balance of the source account and lock the row
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account_id
    FOR UPDATE;

    IF v_source_balance >= p_amount THEN
        -- Deduct from source account
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_source_account_id;
        
        -- Add to target account
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_target_account_id;
        
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_amount || 
                             ' from Account ' || p_source_account_id || 
                             ' to Account ' || p_target_account_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in source account.');
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Error: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error transferring funds: ' || SQLERRM);
END TransferFunds;
/
