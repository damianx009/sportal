package pl.sportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import pl.sportal.entity.ApplicationUser;


import javax.persistence.EntityManager;

@CustomRestControllerAnnotation
public class UserController {


    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private EntityManager entityManager;
    
    @Transactional
    @PostMapping("/register")
    public void register(@RequestBody ApplicationUser user) {
       user.setPassword(passwordEncoder.encode(user.getPassword()));
       this.entityManager.persist(user);
    }

    @GetMapping("/protected/username")
    @ResponseBody
    public Principal currentUserName(Principal principal) {
        return principal;
    }
}
