// [MANDATORY]
// Exercise 1: Configuring a Basic Spring Application

package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for XML Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("Managing library books...");
        if (bookRepository != null) {
            bookRepository.fetchBooks();
        }
    }
}
