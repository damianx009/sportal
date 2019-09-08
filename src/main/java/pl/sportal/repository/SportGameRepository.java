package pl.sportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.sportal.entity.SportGame;

public interface SportGameRepository extends JpaRepository<SportGame, Integer> {
}
