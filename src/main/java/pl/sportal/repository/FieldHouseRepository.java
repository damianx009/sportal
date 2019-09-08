package pl.sportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.sportal.entity.FieldHouse;

import java.util.List;

@Repository
public interface FieldHouseRepository extends JpaRepository<FieldHouse, Integer> {

    @Query("SELECT fh FROM FieldHouse fh WHERE fh.latitude = :latitude AND fh.longitude = :longitude")
    List<FieldHouse> getFieldHousesByGeoLocation(@Param("latitude") Integer latitude,
                                                 @Param("longitude") Integer longitude);
}
