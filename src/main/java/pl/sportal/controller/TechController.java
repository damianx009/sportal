package pl.sportal.controller;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;
import java.util.Map;

@CustomRestControllerAnnotation
public class TechController {

    @GetMapping("/protected/checkToken")
    public Map checkToken() {
        return Collections.singletonMap("response", "OK");
    }
}
