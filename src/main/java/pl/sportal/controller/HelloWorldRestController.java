package pl.sportal.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;
import java.util.Collections;
import java.util.Map;


@CustomRestControllerAnnotation
public class HelloWorldRestController {

    @GetMapping("/hello")
    public String getWelcomeMessage() {
        return "Siema świrze";
    }

    @GetMapping("/protected/hello")
    public Map<String, String> elo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication.getAuthorities());
        return Collections.singletonMap("response", "Hello Byniu");
    }

}