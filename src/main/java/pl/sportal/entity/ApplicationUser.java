package pl.sportal.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="users")
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
