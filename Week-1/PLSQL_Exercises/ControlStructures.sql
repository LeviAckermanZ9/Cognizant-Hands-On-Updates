-- ============================================================================
-- Exercise 1: Control Structures
-- ============================================================================

-- Scenario 1: Apply a discount to loan interest rates for customers above 60 years old.
DECLARE
    v_discount_rate NUMBER := 1; -- 1% discount
BEGIN
    FOR customer_rec IN (
        SELECT c.CustomerID, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE c.Age > 60
    ) LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - v_discount_rate
        WHERE LoanID = customer_rec.LoanID;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Interest rates updated successfully for senior customers.');
END;
/

-- Scenario 2: Promote customers to VIP status based on balance over $10,000.
BEGIN
    FOR customer_rec IN (
        SELECT CustomerID, Balance
        FROM Customers
        WHERE Balance > 10000
    ) LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = customer_rec.CustomerID;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status updated for high-balance customers.');
END;
/

-- Scenario 3: Send reminders to customers whose loans are due within the next 30 days.
BEGIN
    FOR loan_rec IN (
        SELECT c.CustomerName, l.LoanID, l.DueDate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan_rec.CustomerName || 
                             ', your loan (ID: ' || loan_rec.LoanID || 
                             ') is due on ' || TO_CHAR(loan_rec.DueDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
