package EcommerceSearch;

import java.util.Arrays;

public class SearchFunctionality {

    public static Product linearSearch(Product[] products, String targetId) {
        for (Product product : products) {
            if (product.getProductId().equals(targetId)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].getProductId().compareTo(targetId);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product("P003", "Laptop", "Electronics"),
            new Product("P001", "Smartphone", "Electronics"),
            new Product("P004", "Desk Chair", "Furniture"),
            new Product("P002", "Coffee Maker", "Appliances")
        };

        // Linear search works on unsorted arrays
        System.out.println("Linear Search Result: " + linearSearch(products, "P004"));

        // Binary search requires a sorted array
        Arrays.sort(products);
        System.out.println("Binary Search Result: " + binarySearch(products, "P004"));
    }
}
