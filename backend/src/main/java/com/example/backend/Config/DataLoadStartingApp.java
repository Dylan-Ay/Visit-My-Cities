package com.example.backend.Config;

import com.example.backend.entities.Category;
import com.example.backend.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoadStartingApp implements CommandLineRunner {

    private final CategoryRepository categoryRepository;

    public DataLoadStartingApp(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
