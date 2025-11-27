package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
public class Main {

    static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/greet")
    public String greet(){
        return "Hello World!";
    }

    @GetMapping("/getUsers")
    public List<UserObj> getUsers(){
        return (List<UserObj>) userRepository.findAll();
    }

    @PostMapping("/add")
    public @ResponseBody String addNewUser (@RequestParam String name, int age) {
        UserObj user = new UserObj();
        user.setName(name);
        user.setAge(age);
        userRepository.save(user);
        return name + " is saved";
    }

    @PutMapping("/update/{id}")
    public String updateUser (@PathVariable int id, @RequestBody UserObj user) {
        UserObj updatedUser = userRepository.findById(id).get();
        updatedUser.setName(user.getName());
        updatedUser.setAge(user.getAge());
        userRepository.save(updatedUser);
        return "User id: " + id + " updated";
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable int id){
        UserObj deleteUser = userRepository.findById(id).get();
        userRepository.delete(deleteUser);
        return "User with id: " + id + " deleted.";
    }

}
