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

    private final JwtAuthenticationFilter jwtFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }




    @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

                http


                        .csrf(csrf -> csrf.disable())
                        .sessionManagement(session ->
                                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
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
                                            "/building/delete/**" ).hasRole("EXPERT") .anyRequest().authenticated())

                        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

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


