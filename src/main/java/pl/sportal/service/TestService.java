package pl.sportal.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import pl.sportal.entity.ApplicationUser;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class TestService {


    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void addUser() {
        ApplicationUser user = this.entityManager.find(ApplicationUser.class, "john");
        System.out.println(user.getEmail());
    }
}
