package pl.sportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.sportal.entity.PlayingField;

public interface PlayingFieldRepository extends JpaRepository<PlayingField, Integer> {
}
