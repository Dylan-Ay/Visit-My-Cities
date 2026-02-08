package com.example.backend.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;


    @Service
    public class JwtService {

        private static final String CLE_SECRET = "12KDHFKUNF87ezfcvfyfpnc8888887dkhdkdjncjdhnZchdhdkzpp";


        // =========================
        // 1. Créer le token
        // =========================
        public String generateToken(UserDetails userDetails) {

            String username = userDetails.getUsername();

            Date now = new Date();

            Date expiration = new Date(System.currentTimeMillis() + 1000 * 60 * 60); // 1h

            return Jwts.builder()
                    .setSubject(username)
                    .setIssuedAt(now)
                    .setExpiration(expiration)
                    .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                    .compact();
        }


        // =========================
        // 2. Récupérer username
        // =========================
        public String extractUsername(String token) {

            Claims claims = parseToken(token);

            return claims.getSubject();
        }


        // =========================
        // 3. Vérifier expiration
        // =========================
        public boolean isTokenExpired(String token) {

            Claims claims = parseToken(token);

            Date expiration = claims.getExpiration();

            return expiration.before(new Date());
        }


        // =========================
        // 4. Vérifier validité token
        // =========================
        public boolean isTokenValid(String token, UserDetails userDetails) {

            String username = extractUsername(token);

            boolean sameUser = username.equals(userDetails.getUsername());

            boolean expired = isTokenExpired(token);

            return sameUser && !expired;
        }


        // =========================
        // 5. Parser le token (méthode simple)
        // =========================
        private Claims parseToken(String token) {

            return Jwts.parserBuilder()
                    .setSigningKey(getSignInKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        }


        // =========================
        // 6. Clé secrète
        // =========================
        private Key getSignInKey() {

            return Keys.hmacShaKeyFor(CLE_SECRET.getBytes());
        }
    }




