package pl.sportal.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="users")
@Getter
@Setter
public class ApplicationUser {
	@Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;
    
    @Column(name = "enabled")
    private int active;
    
    @Column(name= "name")
    private String name;
    
    @Column(name= "phonenumber")
    private String phonenumber;

}
