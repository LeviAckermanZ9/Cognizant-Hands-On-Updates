// [MANDATORY]
// Exercise 2: Implementing Dependency Injection

package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load the Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the bean and verify dependency injection
        BookService bookService = (BookService) context.getBean("bookService");
        
        System.out.println("Testing Dependency Injection...");
        bookService.manageBooks();
    }
}
