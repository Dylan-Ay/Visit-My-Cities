package com.example.backend.security;

import com.example.backend.entities.User;
import com.example.backend.exceptions.UserNotFoundException;
import com.example.backend.repository.UserRepository;
import org.jspecify.annotations.NullMarked;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserLoader implements UserDetailsService {

    private final UserRepository userRepository;

    public UserLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @NullMarked
    public UserDetails loadUserByUsername(String email) throws UserNotFoundException {

        User user = userRepository.findByEmail(email).orElseThrow(() ->
                new UserNotFoundException("L'email " + email + " n'existe pas"));

       return new org.springframework.security.core.userdetails.User(
               user.getEmail(),
               user.getPassword(),
               List.of(
                       new SimpleGrantedAuthority(
                               user.getRole().name()
                       )
               ));
    }
}
