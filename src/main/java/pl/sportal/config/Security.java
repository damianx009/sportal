package pl.sportal.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

@Configuration
public class Security extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(this.dataSource);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/data/**").permitAll()
                .antMatchers("/admin/**").hasRole("ADMINISTRATOR")
                .antMatchers("/**").permitAll()
                .and()
                    .formLogin().permitAll()
                .and()
                    .logout().permitAll()
                .and()
                    .exceptionHandling().accessDeniedPage("/access-denied");
    }
}
