// [MANDATORY]
package Exercise7_FinancialForecasting;

import java.util.HashMap;
import java.util.Map;

public class FinancialForecasting {

    public static double calculateFutureValue(double initialValue, double growthRate, int years) {
        if (years <= 0) {
            return initialValue;
        }
        return calculateFutureValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    // Optimized approach using Memoization to prevent redundant calculations
    private static Map<Integer, Double> memo = new HashMap<>();

    public static double calculateFutureValueMemoized(double initialValue, double growthRate, int years) {
        if (years <= 0) {
            return initialValue;
        }
        
        if (memo.containsKey(years)) {
            return memo.get(years);
        }
        
        double result = calculateFutureValueMemoized(initialValue, growthRate, years - 1) * (1 + growthRate);
        memo.put(years, result);
        
        return result;
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;
        double growthRate = 0.05; // 5% growth
        int forecastYears = 10;

        System.out.printf("Future Value (Standard): $%.2f%n", calculateFutureValue(presentValue, growthRate, forecastYears));
        System.out.printf("Future Value (Optimized): $%.2f%n", calculateFutureValueMemoized(presentValue, growthRate, forecastYears));
    }
}
