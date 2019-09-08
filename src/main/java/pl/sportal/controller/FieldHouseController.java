package pl.sportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.sportal.controller.config.CustomRestControllerAnnotation;
import pl.sportal.entity.FieldHouse;
import pl.sportal.service.FieldHouseService;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;

@CustomRestControllerAnnotation
public class FieldHouseController {
    
    @Autowired
    private FieldHouseService fieldHouseService;

    @GetMapping("/field-houses")
    public ResponseEntity<List<FieldHouse>> getAllFieldHouses() {
        return new ResponseEntity<>(this.fieldHouseService.getAllFieldHouses(), HttpStatus.OK);
    }

    @GetMapping("/field-houses/{id}")
    public ResponseEntity<FieldHouse> getFieldHouse(@PathVariable @Min(1) Integer id) {
        return new ResponseEntity<>(this.fieldHouseService.getFieldHouse(id), HttpStatus.OK);
    }

    @DeleteMapping("/field-houses/{id}")
    public ResponseEntity<FieldHouse> deleteFieldHouse(@PathVariable @Min(1) Integer id) {
        this.fieldHouseService.deleteFieldHouse(id);
        return new ResponseEntity(this.fieldHouseService.deleteFieldHouse(id), HttpStatus.OK);
    }

    @PutMapping("/field-houses/{id}")
    public ResponseEntity<FieldHouse> updateFieldHouse(@PathVariable @Min(1) Integer id,
                                                       @Valid @RequestBody FieldHouse fieldHouse) {
        FieldHouse fh = this.fieldHouseService.updateFieldHouse(fieldHouse, id);
        return new ResponseEntity<>(fh, HttpStatus.OK);
    }

    @PostMapping("/field-houses")
    public ResponseEntity<FieldHouse> addFieldHouse(@Valid @RequestBody FieldHouse fieldHouse) {
        FieldHouse fh = this.fieldHouseService.addNewFieldHouse(fieldHouse);
        return new ResponseEntity<>(fh, HttpStatus.CREATED);
    }
}
