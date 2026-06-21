// Test-Driven Development (TDD) & Logging Example

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorServiceTest {
    
    private static final Logger logger = LoggerFactory.getLogger(CalculatorServiceTest.class);
    private final CalculatorService calculator = new CalculatorService();

    @Test
    public void testAddition() {
        logger.info("Starting testAddition");
        
        // Arrange
        int a = 5;
        int b = 10;
        
        // Act
        int result = calculator.add(a, b);
        
        // Assert
        assertEquals(15, result, "5 + 10 should equal 15");
        
        logger.info("Finished testAddition successfully");
    }
}
