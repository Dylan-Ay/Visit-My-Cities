package com.example.backend.services;


import com.example.backend.entities.Category;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ICategoryService {

    List<Category> getAllCategories();
}
