// [MANDATORY]
// Mockito Exercise 2: Verifying Interactions

package com.dn;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // 1. Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        
        // 2. Call the method that triggers the interaction
        MyService service = new MyService(mockApi);
        service.fetchData();
        
        // 3. Verify that getData() was actually called exactly once
        verify(mockApi).getData();
    }
}
