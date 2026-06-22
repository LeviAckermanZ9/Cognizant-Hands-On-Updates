# Financial Forecasting Analysis

## 1. Understanding Recursion
Recursion is a technique where a method calls itself to solve a smaller piece of a larger problem. It simplifies code by breaking down complex, repetitive logic into two parts: a base case (the stopping condition) and a recursive step (the repeating logic). 

In financial forecasting, calculating the value for year `N` is simply calculating the value for year `N-1` and applying the annual growth rate to it. Because the problem builds directly on its previous state, it's a perfect fit for a recursive algorithm.

## 2. Time Complexity Analysis
*   **Time Complexity:** The standard recursive algorithm for predicting future value has a time complexity of **O(N)**, where N is the number of years. This is because the function calls itself exactly N times to reach the base case (year 0).
*   **Space Complexity:** The space complexity is also **O(N)** due to the call stack. Each recursive call adds a new frame to system memory until it hits the base case.

## 3. How to Optimize (Avoiding Excessive Computation)
While O(N) is fast enough for small inputs like 10 or 20 years, if forecasting logic becomes more complex (e.g., if it branches out to calculate multiple alternate economic scenarios per year), standard recursion creates an exponential `O(2^N)` time complexity, causing massive performance drops.

To optimize recursive algorithms and avoid redundant calculations, we use a technique called **Memoization** (a core concept of Dynamic Programming). 

**How it works:**
1. We create a cache structure, like a `HashMap`, to store the results of our calculations.
2. Before the recursive function calculates the value for a specific year, it checks if that year's value is already in the cache.
3. If the value exists, it immediately returns the cached value, entirely skipping that recursive branch. 
4. This ensures that every sub-problem is solved exactly once, radically optimizing the algorithm from potentially exponential time down to linear time.
