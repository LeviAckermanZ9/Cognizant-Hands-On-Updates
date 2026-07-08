// [MANDATORY]
// Hands on: Create authentication service that returns JWT

package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    // Hardcoded key for exercise purposes
    private static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START authenticate");
        
        // Step 1: Read Authorization header and decode the username and password
        String user = getUser(authHeader);
        
        // Step 2: Generate token based on the user retrieved in the previous step
        String token = generateJwt(user);
        
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        
        LOGGER.info("END authenticate");
        return response; // Spring Boot automatically converts Map to JSON response
    }

    private String getUser(String authHeader) {
        // Extract Base64 string from "Basic dXNlcjpwd2Q="
        String base64Credentials = authHeader.substring("Basic".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded, StandardCharsets.UTF_8);
        
        // credentials format is "user:pwd"
        return credentials.split(":", 2)[0];
    }

    private String generateJwt(String user) {
        JwtBuilder builder = Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 1 day valid
                .signWith(SECRET_KEY);
        return builder.compact();
    }
}
