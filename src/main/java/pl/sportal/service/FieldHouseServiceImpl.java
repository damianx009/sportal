package pl.sportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.sportal.entity.FieldHouse;
import pl.sportal.exceptions.FieldHouseIdentityLocationException;
import pl.sportal.exceptions.FieldHouseNotFoundException;
import pl.sportal.repository.FieldHouseRepository;

import java.lang.reflect.Field;
import java.util.List;

@Transactional
@Service
public class FieldHouseServiceImpl implements FieldHouseService {

    @Autowired
    private FieldHouseRepository fieldHouseRepository;

    public FieldHouse getFieldHouse(Integer id) {
        return this.getFieldHouseObject(id);
    }

    public List<FieldHouse> getAllFieldHouses() {
        return this.fieldHouseRepository.findAll();
    }

    public FieldHouse updateFieldHouse(FieldHouse updatedFieldHouse, Integer id) {
        FieldHouse fieldHouse = this.getFieldHouseObject(id);

        fieldHouse.setName(updatedFieldHouse.getName());
        fieldHouse.setStreet(updatedFieldHouse.getStreet());
        fieldHouse.setHomeNo(updatedFieldHouse.getHomeNo());
        fieldHouse.setPostalCode(updatedFieldHouse.getPostalCode());
        fieldHouse.setCity(updatedFieldHouse.getCity());
        fieldHouse.setLatitude(updatedFieldHouse.getLatitude());
        fieldHouse.setLongitude(updatedFieldHouse.getLongitude());

        return this.fieldHouseRepository.save(fieldHouse);
    }

    public FieldHouse deleteFieldHouse(Integer id) {
        FieldHouse fieldHouse = this.getFieldHouseObject(id);
        this.fieldHouseRepository.delete(fieldHouse);
        return fieldHouse;
    }

    public FieldHouse addNewFieldHouse(FieldHouse fieldHouse) {
        this.checkFieldHouseByLocation(fieldHouse.getLatitude(), fieldHouse.getLongitude());
        FieldHouse fh = FieldHouse.builder()
                            .name(fieldHouse.getName())
                            .street(fieldHouse.getStreet())
                            .homeNo(fieldHouse.getHomeNo())
                            .postalCode(fieldHouse.getPostalCode())
                            .city(fieldHouse.getCity())
                            .latitude(fieldHouse.getLatitude())
                            .longitude(fieldHouse.getLongitude())
                            .build();
        return this.fieldHouseRepository.save(fh);
    }

    private void checkFieldHouseByLocation(Integer latitude, Integer longitude) {
        List<FieldHouse> fieldHouseList = this.fieldHouseRepository.getFieldHousesByGeoLocation(latitude,longitude);
        if(!fieldHouseList.isEmpty())
            throw new FieldHouseIdentityLocationException("Field house existing with geolocation ["+latitude+":"+longitude+"]");
    }

    private FieldHouse getFieldHouseObject(Integer id) {
        FieldHouse fieldHouse = fieldHouseRepository.findById(id)
                .orElseThrow(() -> new FieldHouseNotFoundException("No field house with id: "+ id.toString()));

        return fieldHouse;
    }
}
