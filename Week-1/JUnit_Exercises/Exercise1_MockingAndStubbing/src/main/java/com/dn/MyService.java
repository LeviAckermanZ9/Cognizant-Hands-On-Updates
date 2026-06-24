// [MANDATORY]
// Mockito Exercise 1: Mocking and Stubbing

package com.dn;

// The service we are actually testing, which depends on the ExternalApi
public class MyService {
    private ExternalApi api;

    // Dependency Injection via constructor
    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
