// [MANDATORY]
// Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown

package com.dn;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    // Test Fixture
    private Calculator calculator;

    @Before
    public void setUp() {
        // Runs before EACH test method. Useful for initializing test fixtures.
        System.out.println("Running @Before setup...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        // Runs after EACH test method. Useful for cleaning up resources.
        System.out.println("Running @After teardown...");
        calculator = null;
    }

    @Test
    public void testAddWithAAA() {
        // Arrange: Prepare the necessary test data
        int expected = 10;
        
        // Act: Execute the method being tested
        calculator.add(10);
        int actual = calculator.getResult();
        
        // Assert: Verify the outcome
        assertEquals(expected, actual);
    }

    @Test
    public void testSubtractWithAAA() {
        // Arrange: Prepare the necessary test data
        calculator.add(20); // Setting initial state
        int expected = 15;
        
        // Act: Execute the method being tested
        calculator.subtract(5);
        int actual = calculator.getResult();
        
        // Assert: Verify the outcome
        assertEquals(expected, actual);
    }
}
