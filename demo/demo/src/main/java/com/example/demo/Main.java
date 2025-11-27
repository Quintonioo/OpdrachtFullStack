package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@SpringBootApplication
@RestController
public class Main {

    static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addBooks")
    public @ResponseBody String addNewBooks (@RequestBody List<UserObj> books) {
        //UserObj book = new UserObj();
        //book.setTitle((String) books.get("title"));
        //book.setAuthor((String) books.get("author"));
        //book.setBookCopies((int) books.get("bookCopies"));
        //book.setImageUrl((String) books.get("imageUrl"));
        userRepository.saveAll(books);
        return "test";
    }

    //@PostMapping("/add")
    //public @ResponseBody String addNewUser (@RequestParam String name, int age) {
    //    UserObj user = new UserObj();
    //    user.setName(name);
    //    user.setAge(age);
    //    userRepository.save(user);
    //    return name + " is saved";
    //}


}
