package com.example.backend.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

                http


                        .csrf(csrf -> csrf.disable())
                        .authorizeHttpRequests(auth ->

                            auth .requestMatchers(
                                    "/swagger-ui/**",
                                    "/v3/api-docs/**",

                                            "/auth/**",
                                            "/register/**",
                                    "/city/cities",
                                    "/city/*",
                                    "/building/buildings",
                                    "/building/*",
                                    "/category/categories" ).permitAll()
                                    .requestMatchers(
                                            "/comment/**",
                                            "/like/**",
                                            "/favorite/**" ).authenticated()
                                    .requestMatchers(
                                            "/city/add",
                                            "/city/update/**",
                                            "/city/delete/**",
                                            "/building/add",
                                            "/building/update/**",
                                            "/building/delete/**" ).hasRole("EXPERT") .anyRequest().authenticated());



    return http.build();

        }

        @Bean
         public PasswordEncoder passwordEncoder(){
            return new BCryptPasswordEncoder();
            }


}


