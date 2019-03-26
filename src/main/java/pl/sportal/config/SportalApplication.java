package pl.sportal.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages="pl.sportal") 
@SpringBootApplication
public class SportalApplication {

	public static void main(String[] args) {
		SpringApplication.run(SportalApplication.class, args);
	}

}
