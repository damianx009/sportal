package pl.sportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.sportal.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
