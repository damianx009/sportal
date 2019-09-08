package pl.sportal.service;

import pl.sportal.entity.FieldHouse;

import java.util.List;

public interface FieldHouseService {
    FieldHouse getFieldHouse(Integer id);
    List<FieldHouse> getAllFieldHouses();
    FieldHouse updateFieldHouse(FieldHouse updatedFieldHouse, Integer id);
    FieldHouse deleteFieldHouse(Integer id);
    FieldHouse addNewFieldHouse(FieldHouse fieldHouse);
}
