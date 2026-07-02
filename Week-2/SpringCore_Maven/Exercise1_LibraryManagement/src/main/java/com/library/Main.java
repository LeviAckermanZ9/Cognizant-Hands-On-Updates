// [MANDATORY]
// Exercise 1: Configuring a Basic Spring Application

package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        // 1. Load the Spring application context from the XML configuration file
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // 2. Retrieve the BookService bean from the context
        BookService bookService = (BookService) context.getBean("bookService");

        // 3. Test the configuration by invoking a method
        bookService.manageBooks();
    }
}
