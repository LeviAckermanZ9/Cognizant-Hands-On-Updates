// [MANDATORY]
// Exercise 3: Assertions in JUnit

package com.dn;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals: verifies two values are identical
        assertEquals(5, 2 + 3);
        
        // Assert true: verifies a condition evaluates to true
        assertTrue(5 > 3);
        
        // Assert false: verifies a condition evaluates to false
        assertFalse(5 < 3);
        
        // Assert null: verifies an object is completely null
        assertNull(null);
        
        // Assert not null: verifies an object actually exists
        assertNotNull(new Object());
    }
}
