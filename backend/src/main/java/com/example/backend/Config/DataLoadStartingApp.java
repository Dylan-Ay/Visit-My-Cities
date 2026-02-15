package com.example.backend.Config;

import com.example.backend.entities.AppUser;
import com.example.backend.entities.Category;
import com.example.backend.enums.AppRole;
import com.example.backend.repository.AppUserRepository;
import com.example.backend.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DataLoadStartingApp implements CommandLineRunner {

private final AppUserRepository appUserRepository;
private final PasswordEncoder passwordEncoder;

    public DataLoadStartingApp(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public void addExpert(String username, String email, String password, AppRole role){

    if(appUserRepository.findByEmail(email).isEmpty()){
        AppUser user = new AppUser();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);
      appUserRepository.save(user);
    }
    }
    @Override
    public void run(String... args) throws Exception {


addExpert("Ghilas", "ghilas@expert.com", "1234", AppRole.ROLE_EXPERT );
addExpert("Jerome", "jerome@expert.com", "1234", AppRole.ROLE_EXPERT );

    }
}
