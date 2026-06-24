// [MANDATORY]
// Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown

package com.dn;

public class Calculator {
    private int result;

    public Calculator() {
        this.result = 0;
    }

    public void add(int value) {
        this.result += value;
    }

    public void subtract(int value) {
        this.result -= value;
    }

    public int getResult() {
        return this.result;
    }
}
