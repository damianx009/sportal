package pl.sportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.sportal.entity.ApplicationUser;

import java.security.Principal;

@CustomRestControllerAnnotation
public class UserController {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
    }

    @GetMapping("/protected/username")
    @ResponseBody
    public Principal currentUserName(Principal principal) {
        return principal;
    }
}
