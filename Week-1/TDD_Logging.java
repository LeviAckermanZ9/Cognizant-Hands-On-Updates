// Test-Driven Development (TDD) & Logging Example

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TDD_Logging {
    
    private static final Logger logger = LoggerFactory.getLogger(TDD_Logging.class);
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

class CalculatorService {
    public int add(int a, int b) {
        return a + b;
    }
}
