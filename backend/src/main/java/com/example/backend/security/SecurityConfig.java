package com.example.backend.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

                http
                        .csrf(csrf -> csrf.disable())
                        .sessionManagement(session ->
                                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                        .authorizeHttpRequests(auth -> auth

                                // PUBLIC
                                .requestMatchers(
                                        "/swagger-ui/**",
                                        "/v3/api-docs/**",
                                        "/auth/**",
                                        "/register/**",
                                        "/city/cities",
                                        "/building/buildings",
                                        "/category/categories",
                                        "/building/categorie/*",
                                        "/city/*",
                                        "/building/*",
                                        "/building/city/*",
                                        "/building/cityname/*"
                                ).permitAll()

                                // EXPERT ONLY
                                .requestMatchers(
                                        "/city/add/**",
                                        "/city/update/**",
                                        "/city/delete/**",
                                        "/building/add",
                                        "/building/update/**",
                                        "/building/delete/**",
                                        "/building/add/**"
                                ).hasRole("EXPERT")

                                // AUTHENTICATED
                                .requestMatchers(
                                        "/comment/**",
                                        "/like/**",
                                        "/favorites/**"
                                ).authenticated()

                                .anyRequest().authenticated()
                        )

                        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();

        }

        @Bean
         public PasswordEncoder passwordEncoder(){
            return new BCryptPasswordEncoder();
            }

            @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config){
            return config.getAuthenticationManager();
            }


}


