-- [MANDATORY]
-- Exercise 1: Control Structures

-- Scenario 1: Apply a discount to loan interest rates for customers above 60 years old.
DECLARE
    v_discount_rate NUMBER := 1;
BEGIN
    -- Loop through all customers who are older than 60
    FOR customer_rec IN (
        SELECT c.CustomerID, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE TRUNC(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) > 60
    ) LOOP
        -- Apply the 1% discount to their loan
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
    -- Find customers with a high balance
    FOR customer_rec IN (
        SELECT CustomerID, Balance
        FROM Customers
        WHERE Balance > 10000
    ) LOOP
        -- Set their VIP flag to true
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
    -- Get loans that are ending within the next month
    FOR loan_rec IN (
        SELECT c.Name, l.LoanID, l.EndDate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        -- Print out the reminder for each customer
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan_rec.Name || 
                             ', your loan (ID: ' || loan_rec.LoanID || 
                             ') is due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
