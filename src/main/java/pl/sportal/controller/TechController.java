package pl.sportal.controller;

import org.springframework.web.bind.annotation.GetMapping;
import pl.sportal.controller.config.CustomRestControllerAnnotation;

import java.util.Collections;
import java.util.Map;

@CustomRestControllerAnnotation
public class TechController {

    @GetMapping("/protected/checkToken")
    public Map<String, String> checkToken() {
        return Collections.singletonMap("response", "OK");
    }
}
