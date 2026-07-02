// [MANDATORY]
// Exercise 2: Implementing Dependency Injection

package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method specifically required for Spring Setter Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("Service: Managing library books...");
        if (bookRepository != null) {
            bookRepository.fetchBooks();
        } else {
            System.out.println("Error: BookRepository was not injected!");
        }
    }
}
