// [MANDATORY]
// Mockito Exercise 2: Verifying Interactions

package com.dn;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
