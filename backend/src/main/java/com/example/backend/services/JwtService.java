package com.example.backend.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {

    private static final String CLE_SECRET = "12KDHFKUNF87ezfcvfyfpnc8888887dkhdkdjncjdhnZchdhdkzpp";

    public String generateToken(UserDetails userDetails) {

        String username = userDetails.getUsername();
        String role = "";

        for (GrantedAuthority auth : userDetails.getAuthorities()) {
            role = auth.getAuthority();
        }

        Date now = new Date();

        long thirtyDaysInMillis = 1000L * 60 * 60 * 24 * 30;
        Date expiration = new Date(System.currentTimeMillis() + thirtyDaysInMillis);

        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractUsername(String token) {

        Claims claims = parseToken(token);

        return claims.getSubject();
    }

    public boolean isTokenExpired(String token) {

        Claims claims = parseToken(token);

        Date expiration = claims.getExpiration();

        return expiration.before(new Date());
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {

        String username = extractUsername(token);

        boolean sameUser = username.equals(userDetails.getUsername());

        boolean expired = isTokenExpired(token);

        return sameUser && !expired;
    }

    private Claims parseToken(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {

        return Keys.hmacShaKeyFor(CLE_SECRET.getBytes());
    }
}




