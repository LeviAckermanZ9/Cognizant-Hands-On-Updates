// [MANDATORY]
// Exercise 1: Setting Up JUnit

package com.dn;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdd() {
        // Arrange: Create an instance of the class we want to test
        Calculator calc = new Calculator();
        
        // Act: Call the add method
        int result = calc.add(5, 3);
        
        // Assert: Verify that 5 + 3 actually equals 8
        assertEquals(8, result);
    }
}
