package pl.sportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.sportal.entity.ApplicationUser;

@RestController
public class UserController {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
    }
}
